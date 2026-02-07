const state = {
  screen: 'menu',
  basic: { current: null, correct: 0, wrong: 0 },
  cloudSettings: { count: 8, timer: 20 },
  cloud: { words: [], placements: new Map(), done: false, seconds: 20, timerId: null }
};

const el = {
  title: document.getElementById('screenTitle'),
  back: document.getElementById('backBtn'),
  screens: {
    menu: document.getElementById('menuScreen'),
    basic: document.getElementById('basicScreen'),
    cloudSettings: document.getElementById('cloudSettingsScreen'),
    cloudGame: document.getElementById('cloudGameScreen')
  },
  basicWordCard: document.getElementById('basicWordCard'),
  basicScore: document.getElementById('basicScore'),
  cloudArea: document.getElementById('cloudArea'),
  zoneLe: document.getElementById('zoneLe'),
  zoneLa: document.getElementById('zoneLa'),
  timer: document.getElementById('timer'),
  postActions: document.getElementById('cloudPostActions'),
  wordCountInput: document.getElementById('wordCountInput'),
  timerSelect: document.getElementById('timerSelect'),
  settingsHint: document.getElementById('settingsHint'),
  overlay: document.getElementById('feedbackOverlay'),
  feedbackCard: document.getElementById('feedbackCard')
};

function setScreen(name) {
  Object.entries(el.screens).forEach(([key, node]) => node.classList.toggle('active', key === name));
  state.screen = name;
  el.back.classList.toggle('hidden', name === 'menu');
  const map = {
    menu: 'LULA',
    basic: 'LULA Basic',
    cloudSettings: 'LULA Cloud Timer — Настройки',
    cloudGame: 'LULA Cloud Timer'
  };
  el.title.textContent = map[name];
}

function sampleWords(n) {
  const shuffled = [...WORDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function expectedZone(word) {
  return word.gender === 'm' ? 'le' : 'la';
}

function openFeedback({ word, ok, closeText, onClose, mode = 'single' }) {
  const colls = word.collocations.map(c => `<li>${c}</li>`).join('');
  el.feedbackCard.className = `feedback-card ${ok ? '' : 'bad'}`;
  el.feedbackCard.innerHTML = `
    <h3>${ok ? '✅ Верно' : '❌ Неверно'}</h3>
    <p><strong>Правильный вариант:</strong> ${word.displayWithArticle}</p>
    <p><strong>Почему:</strong> ${word.rule}</p>
    <div><strong>Коллокации:</strong><ul>${colls}</ul></div>
    <p><strong>Перевод:</strong> ${word.translation}</p>
    <div class="feedback-actions"><button id="feedbackCloseBtn" class="primary">${closeText || (mode === 'single' ? 'Дальше' : 'Закрыть')}</button></div>
  `;
  el.overlay.classList.remove('hidden');
  document.getElementById('feedbackCloseBtn').onclick = () => {
    el.overlay.classList.add('hidden');
    onClose?.();
  };
}

function nextBasicWord() {
  state.basic.current = WORDS[Math.floor(Math.random() * WORDS.length)];
  el.basicWordCard.textContent = state.basic.current.displayCenter;
  el.basicScore.textContent = `Верно: ${state.basic.correct} | Ошибок: ${state.basic.wrong}`;
}

function answerBasic(zone) {
  const word = state.basic.current;
  if (!word) return;
  const ok = zone === expectedZone(word);
  if (ok) state.basic.correct += 1;
  else state.basic.wrong += 1;
  openFeedback({ word, ok, closeText: 'Дальше', onClose: nextBasicWord, mode: 'single' });
  el.basicScore.textContent = `Верно: ${state.basic.correct} | Ошибок: ${state.basic.wrong}`;
}

function renderCloud() {
  [el.cloudArea, el.zoneLe, el.zoneLa].forEach(zone => {
    zone.querySelectorAll('.word-chip').forEach(chip => chip.remove());
  });

  state.cloud.words.forEach(word => {
    const chip = document.createElement('button');
    chip.className = 'word-chip';
    chip.textContent = word.displayCenter;
    chip.dataset.id = word.id;
    chip.dataset.kind = 'word';
    chip.type = 'button';

    const place = state.cloud.placements.get(word.id) || 'cloud';
    const target = place === 'le' ? el.zoneLe : place === 'la' ? el.zoneLa : el.cloudArea;
    target.appendChild(chip);

    if (state.cloud.done) {
      const status = evaluateWord(word.id);
      chip.classList.add(status);
      if (status === 'skipped') {
        chip.innerHTML = `${word.displayCenter}<span class="tag">Не успел</span>`;
      }
      chip.onclick = () => openCloudExplanation(word.id);
    }
  });
}

function evaluateWord(id) {
  const word = state.cloud.words.find(w => w.id === id);
  const place = state.cloud.placements.get(id) || 'cloud';
  if (place === 'cloud') return 'skipped';
  return place === expectedZone(word) ? 'correct' : 'wrong';
}

function openCloudExplanation(id) {
  const word = state.cloud.words.find(w => w.id === id);
  const status = evaluateWord(id);
  openFeedback({
    word,
    ok: status === 'correct',
    closeText: 'Закрыть',
    mode: 'cloud'
  });
}

function updateTimer() {
  const s = state.cloud.seconds;
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  el.timer.textContent = `${mm}:${ss}`;
  el.timer.classList.toggle('danger', s <= 5);
}

function finishCloudRound() {
  clearInterval(state.cloud.timerId);
  state.cloud.done = true;
  renderCloud();
  el.postActions.classList.remove('hidden');
}

function startCloudRound() {
  const nRaw = Number(el.wordCountInput.value);
  if (!Number.isFinite(nRaw)) {
    el.settingsHint.textContent = 'Введите число 3–20.';
    return;
  }
  const limited = Math.max(3, Math.min(20, Math.floor(nRaw), WORDS.length));
  if (String(limited) !== String(nRaw)) {
    el.settingsHint.textContent = `Количество слов установлено: ${limited}.`;
  } else {
    el.settingsHint.textContent = '';
  }
  const timer = Number(el.timerSelect.value);

  state.cloudSettings = { count: limited, timer };
  state.cloud.words = sampleWords(limited);
  state.cloud.placements = new Map();
  state.cloud.done = false;
  state.cloud.seconds = timer;
  clearInterval(state.cloud.timerId);
  setScreen('cloudGame');
  el.postActions.classList.add('hidden');
  updateTimer();
  renderCloud();
  state.cloud.timerId = setInterval(() => {
    state.cloud.seconds -= 1;
    updateTimer();
    if (state.cloud.seconds <= 0) finishCloudRound();
  }, 1000);
}

function moveWord(wordId, zone) {
  if (state.screen === 'basic') {
    answerBasic(zone);
    return;
  }
  if (state.screen !== 'cloudGame' || state.cloud.done) return;
  state.cloud.placements.set(Number(wordId), zone);
  renderCloud();
}

function setupPointerDnD() {
  let drag = null;

  document.addEventListener('pointerdown', e => {
    const item = e.target.closest('[data-kind="word"], #basicWordCard');
    if (!item) return;
    if (state.screen === 'cloudGame' && state.cloud.done) return;

    const isBasicCard = item.id === 'basicWordCard';
    const id = isBasicCard ? 'basic' : item.dataset.id;
    const rect = item.getBoundingClientRect();
    drag = { id, isBasicCard, xOff: e.clientX - rect.left, yOff: e.clientY - rect.top, source: item };

    const ghost = item.cloneNode(true);
    ghost.style.position = 'fixed';
    ghost.style.left = `${rect.left}px`;
    ghost.style.top = `${rect.top}px`;
    ghost.style.width = `${rect.width}px`;
    ghost.style.zIndex = 9999;
    ghost.style.pointerEvents = 'none';
    ghost.style.opacity = '0.9';
    ghost.id = 'dragGhost';
    document.body.appendChild(ghost);
    item.style.opacity = '0.45';
    e.preventDefault();
  });

  document.addEventListener('pointermove', e => {
    if (!drag) return;
    const ghost = document.getElementById('dragGhost');
    if (!ghost) return;
    ghost.style.left = `${e.clientX - drag.xOff}px`;
    ghost.style.top = `${e.clientY - drag.yOff}px`;
  });

  document.addEventListener('pointerup', e => {
    if (!drag) return;
    const ghost = document.getElementById('dragGhost');
    if (ghost) ghost.remove();
    if (drag.source) drag.source.style.opacity = '';

    const drop = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-zone], #cloudArea');
    if (drop) {
      if (drop.id === 'cloudArea' && !drag.isBasicCard) {
        moveWord(drag.id, 'cloud');
      } else if (drop.dataset.zone) {
        moveWord(drag.id, drop.dataset.zone);
      }
    }
    drag = null;
  });
}

function init() {
  document.getElementById('goBasic').onclick = () => {
    setScreen('basic');
    nextBasicWord();
  };
  document.getElementById('goCloud').onclick = () => setScreen('cloudSettings');
  el.back.onclick = () => {
    clearInterval(state.cloud.timerId);
    setScreen('menu');
  };
  document.getElementById('pickLe').onclick = () => answerBasic('le');
  document.getElementById('pickLa').onclick = () => answerBasic('la');
  document.getElementById('startCloud').onclick = startCloudRound;
  document.getElementById('againBtn').onclick = () => {
    el.wordCountInput.value = state.cloudSettings.count;
    el.timerSelect.value = String(state.cloudSettings.timer);
    startCloudRound();
  };
  document.getElementById('settingsBtn').onclick = () => {
    clearInterval(state.cloud.timerId);
    setScreen('cloudSettings');
  };
  document.getElementById('menuBtn').onclick = () => {
    clearInterval(state.cloud.timerId);
    setScreen('menu');
  };

  setupPointerDnD();
  setScreen('menu');
}

init();
