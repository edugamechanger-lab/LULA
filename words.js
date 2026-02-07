const WORDS = [
  {
    "id": 1,
    "word": "maison",
    "article": "la",
    "gender": "f",
    "rule": "Большинство слов на -son (кроме исключений)",
    "collocations": [
      "maison important",
      "maison français",
      "bonne maison",
      "cette maison"
    ],
    "translation": "«maison» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "maison",
    "displayWithArticle": "la maison"
  },
  {
    "id": 2,
    "word": "appartement",
    "article": "l'",
    "gender": "m",
    "rule": "Слова на -ment обычно мужского рода",
    "collocations": [
      "appartement important",
      "appartement français",
      "bon appartement",
      "ce appartement"
    ],
    "translation": "«appartement» (дом)",
    "topic": "Дом",
    "isTrap": true,
    "displayCenter": "appartement",
    "displayWithArticle": "l’appartement"
  },
  {
    "id": 3,
    "word": "salon",
    "article": "le",
    "gender": "m",
    "rule": "Часто помещения на -on мужского рода",
    "collocations": [
      "salon important",
      "salon français",
      "bon salon",
      "ce salon"
    ],
    "translation": "«salon» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "salon",
    "displayWithArticle": "le salon"
  },
  {
    "id": 4,
    "word": "cuisine",
    "article": "la",
    "gender": "f",
    "rule": "Многие слова на -ine женского рода",
    "collocations": [
      "cuisine important",
      "cuisine français",
      "bonne cuisine",
      "cette cuisine"
    ],
    "translation": "«cuisine» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "cuisine",
    "displayWithArticle": "la cuisine"
  },
  {
    "id": 5,
    "word": "chambre",
    "article": "la",
    "gender": "f",
    "rule": "Многие слова на -bre в быту женского рода",
    "collocations": [
      "chambre important",
      "chambre français",
      "bonne chambre",
      "cette chambre"
    ],
    "translation": "«chambre» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "chambre",
    "displayWithArticle": "la chambre"
  },
  {
    "id": 6,
    "word": "bureau",
    "article": "le",
    "gender": "m",
    "rule": "Бытовые предметы и помещения часто мужского рода",
    "collocations": [
      "bureau important",
      "bureau français",
      "bon bureau",
      "ce bureau"
    ],
    "translation": "«bureau» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "bureau",
    "displayWithArticle": "le bureau"
  },
  {
    "id": 7,
    "word": "balcon",
    "article": "le",
    "gender": "m",
    "rule": "Слова на -on чаще мужского рода",
    "collocations": [
      "balcon important",
      "balcon français",
      "bon balcon",
      "ce balcon"
    ],
    "translation": "«balcon» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "balcon",
    "displayWithArticle": "le balcon"
  },
  {
    "id": 8,
    "word": "fenêtre",
    "article": "la",
    "gender": "f",
    "rule": "Исключение: fenêtre — женский род",
    "collocations": [
      "fenêtre important",
      "fenêtre français",
      "bonne fenêtre",
      "cette fenêtre"
    ],
    "translation": "«fenêtre» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "fenêtre",
    "displayWithArticle": "la fenêtre"
  },
  {
    "id": 9,
    "word": "mur",
    "article": "le",
    "gender": "m",
    "rule": "Короткие бытовые существительные часто мужского рода",
    "collocations": [
      "mur important",
      "mur français",
      "bon mur",
      "ce mur"
    ],
    "translation": "«mur» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "mur",
    "displayWithArticle": "le mur"
  },
  {
    "id": 10,
    "word": "porte",
    "article": "la",
    "gender": "f",
    "rule": "porte — устойчиво женский род",
    "collocations": [
      "porte important",
      "porte français",
      "bonne porte",
      "cette porte"
    ],
    "translation": "«porte» (дом)",
    "topic": "Дом",
    "isTrap": false,
    "displayCenter": "porte",
    "displayWithArticle": "la porte"
  },
  {
    "id": 11,
    "word": "pain",
    "article": "le",
    "gender": "m",
    "rule": "Продукты часто мужского рода",
    "collocations": [
      "pain important",
      "pain français",
      "bon pain",
      "ce pain"
    ],
    "translation": "«pain» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "pain",
    "displayWithArticle": "le pain"
  },
  {
    "id": 12,
    "word": "baguette",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -ette обычно женского рода",
    "collocations": [
      "baguette important",
      "baguette français",
      "bonne baguette",
      "cette baguette"
    ],
    "translation": "«baguette» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "baguette",
    "displayWithArticle": "la baguette"
  },
  {
    "id": 13,
    "word": "fromage",
    "article": "le",
    "gender": "m",
    "rule": "fromage — мужской род",
    "collocations": [
      "fromage important",
      "fromage français",
      "bon fromage",
      "ce fromage"
    ],
    "translation": "«fromage» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "fromage",
    "displayWithArticle": "le fromage"
  },
  {
    "id": 14,
    "word": "salade",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -ade обычно женского рода",
    "collocations": [
      "salade important",
      "salade français",
      "bonne salade",
      "cette salade"
    ],
    "translation": "«salade» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "salade",
    "displayWithArticle": "la salade"
  },
  {
    "id": 15,
    "word": "riz",
    "article": "le",
    "gender": "m",
    "rule": "Односложные названия круп часто мужского рода",
    "collocations": [
      "riz important",
      "riz français",
      "bon riz",
      "ce riz"
    ],
    "translation": "«riz» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "riz",
    "displayWithArticle": "le riz"
  },
  {
    "id": 16,
    "word": "soupe",
    "article": "la",
    "gender": "f",
    "rule": "soupe — женский род",
    "collocations": [
      "soupe important",
      "soupe français",
      "bonne soupe",
      "cette soupe"
    ],
    "translation": "«soupe» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "soupe",
    "displayWithArticle": "la soupe"
  },
  {
    "id": 17,
    "word": "gâteau",
    "article": "le",
    "gender": "m",
    "rule": "Слова на -eau чаще мужского рода",
    "collocations": [
      "gâteau important",
      "gâteau français",
      "bon gâteau",
      "ce gâteau"
    ],
    "translation": "«gâteau» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "gâteau",
    "displayWithArticle": "le gâteau"
  },
  {
    "id": 18,
    "word": "viande",
    "article": "la",
    "gender": "f",
    "rule": "viande — женский род",
    "collocations": [
      "viande important",
      "viande français",
      "bonne viande",
      "cette viande"
    ],
    "translation": "«viande» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "viande",
    "displayWithArticle": "la viande"
  },
  {
    "id": 19,
    "word": "poisson",
    "article": "le",
    "gender": "m",
    "rule": "poisson — мужской род",
    "collocations": [
      "poisson important",
      "poisson français",
      "bon poisson",
      "ce poisson"
    ],
    "translation": "«poisson» (еда)",
    "topic": "Еда",
    "isTrap": false,
    "displayCenter": "poisson",
    "displayWithArticle": "le poisson"
  },
  {
    "id": 20,
    "word": "eau",
    "article": "l'",
    "gender": "f",
    "rule": "eau — женский род (l’ в ед. числе)",
    "collocations": [
      "eau important",
      "eau français",
      "bonne eau",
      "cette eau"
    ],
    "translation": "«eau» (еда)",
    "topic": "Еда",
    "isTrap": true,
    "displayCenter": "eau",
    "displayWithArticle": "l’eau"
  },
  {
    "id": 21,
    "word": "soleil",
    "article": "le",
    "gender": "m",
    "rule": "Светила: soleil — мужской род",
    "collocations": [
      "soleil important",
      "soleil français",
      "bon soleil",
      "ce soleil"
    ],
    "translation": "«soleil» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "soleil",
    "displayWithArticle": "le soleil"
  },
  {
    "id": 22,
    "word": "pluie",
    "article": "la",
    "gender": "f",
    "rule": "Явления на -uie часто женского рода",
    "collocations": [
      "pluie important",
      "pluie français",
      "bonne pluie",
      "cette pluie"
    ],
    "translation": "«pluie» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "pluie",
    "displayWithArticle": "la pluie"
  },
  {
    "id": 23,
    "word": "vent",
    "article": "le",
    "gender": "m",
    "rule": "vent — мужской род",
    "collocations": [
      "vent important",
      "vent français",
      "bon vent",
      "ce vent"
    ],
    "translation": "«vent» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "vent",
    "displayWithArticle": "le vent"
  },
  {
    "id": 24,
    "word": "neige",
    "article": "la",
    "gender": "f",
    "rule": "neige — женский род",
    "collocations": [
      "neige important",
      "neige français",
      "bonne neige",
      "cette neige"
    ],
    "translation": "«neige» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "neige",
    "displayWithArticle": "la neige"
  },
  {
    "id": 25,
    "word": "orage",
    "article": "l'",
    "gender": "m",
    "rule": "orage — мужской род (l’ перед гласной)",
    "collocations": [
      "orage important",
      "orage français",
      "bon orage",
      "ce orage"
    ],
    "translation": "«orage» (погода)",
    "topic": "Погода",
    "isTrap": true,
    "displayCenter": "orage",
    "displayWithArticle": "l’orage"
  },
  {
    "id": 26,
    "word": "température",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -ure обычно женского рода",
    "collocations": [
      "température important",
      "température français",
      "bonne température",
      "cette température"
    ],
    "translation": "«température» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "température",
    "displayWithArticle": "la température"
  },
  {
    "id": 27,
    "word": "nuage",
    "article": "le",
    "gender": "m",
    "rule": "nuage — мужской род",
    "collocations": [
      "nuage important",
      "nuage français",
      "bon nuage",
      "ce nuage"
    ],
    "translation": "«nuage» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "nuage",
    "displayWithArticle": "le nuage"
  },
  {
    "id": 28,
    "word": "saison",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -aison чаще женского рода",
    "collocations": [
      "saison important",
      "saison français",
      "bonne saison",
      "cette saison"
    ],
    "translation": "«saison» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "saison",
    "displayWithArticle": "la saison"
  },
  {
    "id": 29,
    "word": "climat",
    "article": "le",
    "gender": "m",
    "rule": "climat — мужской род",
    "collocations": [
      "climat important",
      "climat français",
      "bon climat",
      "ce climat"
    ],
    "translation": "«climat» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "climat",
    "displayWithArticle": "le climat"
  },
  {
    "id": 30,
    "word": "chaleur",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -eur (абстр.) часто женского рода",
    "collocations": [
      "chaleur important",
      "chaleur français",
      "bonne chaleur",
      "cette chaleur"
    ],
    "translation": "«chaleur» (погода)",
    "topic": "Погода",
    "isTrap": false,
    "displayCenter": "chaleur",
    "displayWithArticle": "la chaleur"
  },
  {
    "id": 31,
    "word": "ami",
    "article": "l'",
    "gender": "m",
    "rule": "ami — мужской род (l’ перед гласной)",
    "collocations": [
      "ami important",
      "ami français",
      "bon ami",
      "ce ami"
    ],
    "translation": "«ami» (люди)",
    "topic": "Люди",
    "isTrap": true,
    "displayCenter": "ami",
    "displayWithArticle": "l’ami"
  },
  {
    "id": 32,
    "word": "amie",
    "article": "l'",
    "gender": "f",
    "rule": "amie — женский род (l’ перед гласной)",
    "collocations": [
      "amie important",
      "amie français",
      "bonne amie",
      "cette amie"
    ],
    "translation": "«amie» (люди)",
    "topic": "Люди",
    "isTrap": true,
    "displayCenter": "amie",
    "displayWithArticle": "l’amie"
  },
  {
    "id": 33,
    "word": "professeur",
    "article": "le",
    "gender": "m",
    "rule": "Профессии традиционно в словаре с le",
    "collocations": [
      "professeur important",
      "professeur français",
      "bon professeur",
      "ce professeur"
    ],
    "translation": "«professeur» (люди)",
    "topic": "Люди",
    "isTrap": false,
    "displayCenter": "professeur",
    "displayWithArticle": "le professeur"
  },
  {
    "id": 34,
    "word": "professeure",
    "article": "la",
    "gender": "f",
    "rule": "Женская форма профессии — la",
    "collocations": [
      "professeure important",
      "professeure français",
      "bonne professeure",
      "cette professeure"
    ],
    "translation": "«professeure» (люди)",
    "topic": "Люди",
    "isTrap": false,
    "displayCenter": "professeure",
    "displayWithArticle": "la professeure"
  },
  {
    "id": 35,
    "word": "voisin",
    "article": "le",
    "gender": "m",
    "rule": "voisin — мужской род",
    "collocations": [
      "voisin important",
      "voisin français",
      "bon voisin",
      "ce voisin"
    ],
    "translation": "«voisin» (люди)",
    "topic": "Люди",
    "isTrap": false,
    "displayCenter": "voisin",
    "displayWithArticle": "le voisin"
  },
  {
    "id": 36,
    "word": "voisine",
    "article": "la",
    "gender": "f",
    "rule": "Феминитив на -ine — женский род",
    "collocations": [
      "voisine important",
      "voisine français",
      "bonne voisine",
      "cette voisine"
    ],
    "translation": "«voisine» (люди)",
    "topic": "Люди",
    "isTrap": false,
    "displayCenter": "voisine",
    "displayWithArticle": "la voisine"
  },
  {
    "id": 37,
    "word": "enfant",
    "article": "l'",
    "gender": "m",
    "rule": "enfant в словаре мужского рода",
    "collocations": [
      "enfant important",
      "enfant français",
      "bon enfant",
      "ce enfant"
    ],
    "translation": "«enfant» (люди)",
    "topic": "Люди",
    "isTrap": true,
    "displayCenter": "enfant",
    "displayWithArticle": "l’enfant"
  },
  {
    "id": 38,
    "word": "personne",
    "article": "la",
    "gender": "f",
    "rule": "personne всегда женского рода",
    "collocations": [
      "personne important",
      "personne français",
      "bonne personne",
      "cette personne"
    ],
    "translation": "«personne» (люди)",
    "topic": "Люди",
    "isTrap": false,
    "displayCenter": "personne",
    "displayWithArticle": "la personne"
  },
  {
    "id": 39,
    "word": "homme",
    "article": "l'",
    "gender": "m",
    "rule": "homme — мужской род (l’ перед h muet)",
    "collocations": [
      "homme important",
      "homme français",
      "bon homme",
      "ce homme"
    ],
    "translation": "«homme» (люди)",
    "topic": "Люди",
    "isTrap": true,
    "displayCenter": "homme",
    "displayWithArticle": "l’homme"
  },
  {
    "id": 40,
    "word": "femme",
    "article": "la",
    "gender": "f",
    "rule": "femme — женский род",
    "collocations": [
      "femme important",
      "femme français",
      "bonne femme",
      "cette femme"
    ],
    "translation": "«femme» (люди)",
    "topic": "Люди",
    "isTrap": false,
    "displayCenter": "femme",
    "displayWithArticle": "la femme"
  },
  {
    "id": 41,
    "word": "école",
    "article": "l'",
    "gender": "f",
    "rule": "école — женский род (l’ перед гласной)",
    "collocations": [
      "école important",
      "école français",
      "bonne école",
      "cette école"
    ],
    "translation": "«école» (учёба)",
    "topic": "Учёба",
    "isTrap": true,
    "displayCenter": "école",
    "displayWithArticle": "l’école"
  },
  {
    "id": 42,
    "word": "cours",
    "article": "le",
    "gender": "m",
    "rule": "cours — мужской род",
    "collocations": [
      "cours important",
      "cours français",
      "bon cours",
      "ce cours"
    ],
    "translation": "«cours» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "cours",
    "displayWithArticle": "le cours"
  },
  {
    "id": 43,
    "word": "leçon",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -çon часто женского рода",
    "collocations": [
      "leçon important",
      "leçon français",
      "bonne leçon",
      "cette leçon"
    ],
    "translation": "«leçon» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "leçon",
    "displayWithArticle": "la leçon"
  },
  {
    "id": 44,
    "word": "livre",
    "article": "le",
    "gender": "m",
    "rule": "livre (книга) — мужской род",
    "collocations": [
      "livre important",
      "livre français",
      "bon livre",
      "ce livre"
    ],
    "translation": "«livre» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "livre",
    "displayWithArticle": "le livre"
  },
  {
    "id": 45,
    "word": "page",
    "article": "la",
    "gender": "f",
    "rule": "page (страница) — женский род",
    "collocations": [
      "page important",
      "page français",
      "bonne page",
      "cette page"
    ],
    "translation": "«page» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "page",
    "displayWithArticle": "la page"
  },
  {
    "id": 46,
    "word": "exercice",
    "article": "l'",
    "gender": "m",
    "rule": "exercice — мужской род (l’)",
    "collocations": [
      "exercice important",
      "exercice français",
      "bon exercice",
      "ce exercice"
    ],
    "translation": "«exercice» (учёба)",
    "topic": "Учёба",
    "isTrap": true,
    "displayCenter": "exercice",
    "displayWithArticle": "l’exercice"
  },
  {
    "id": 47,
    "word": "question",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -tion обычно женского рода",
    "collocations": [
      "question important",
      "question français",
      "bonne question",
      "cette question"
    ],
    "translation": "«question» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "question",
    "displayWithArticle": "la question"
  },
  {
    "id": 48,
    "word": "stylo",
    "article": "le",
    "gender": "m",
    "rule": "stylo — мужской род",
    "collocations": [
      "stylo important",
      "stylo français",
      "bon stylo",
      "ce stylo"
    ],
    "translation": "«stylo» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "stylo",
    "displayWithArticle": "le stylo"
  },
  {
    "id": 49,
    "word": "réponse",
    "article": "la",
    "gender": "f",
    "rule": "réponse — женский род",
    "collocations": [
      "réponse important",
      "réponse français",
      "bonne réponse",
      "cette réponse"
    ],
    "translation": "«réponse» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "réponse",
    "displayWithArticle": "la réponse"
  },
  {
    "id": 50,
    "word": "tableau",
    "article": "le",
    "gender": "m",
    "rule": "tableau — мужской род",
    "collocations": [
      "tableau important",
      "tableau français",
      "bon tableau",
      "ce tableau"
    ],
    "translation": "«tableau» (учёба)",
    "topic": "Учёба",
    "isTrap": false,
    "displayCenter": "tableau",
    "displayWithArticle": "le tableau"
  },
  {
    "id": 51,
    "word": "travail",
    "article": "le",
    "gender": "m",
    "rule": "travail — мужской род",
    "collocations": [
      "travail important",
      "travail français",
      "bon travail",
      "ce travail"
    ],
    "translation": "«travail» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "travail",
    "displayWithArticle": "le travail"
  },
  {
    "id": 52,
    "word": "réunion",
    "article": "la",
    "gender": "f",
    "rule": "Слова на -ion обычно женского рода",
    "collocations": [
      "réunion important",
      "réunion français",
      "bonne réunion",
      "cette réunion"
    ],
    "translation": "«réunion» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "réunion",
    "displayWithArticle": "la réunion"
  },
  {
    "id": 53,
    "word": "bureau",
    "article": "le",
    "gender": "m",
    "rule": "bureau — мужской род",
    "collocations": [
      "bureau important",
      "bureau français",
      "bon bureau",
      "ce bureau"
    ],
    "translation": "«bureau» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "bureau",
    "displayWithArticle": "le bureau"
  },
  {
    "id": 54,
    "word": "pause",
    "article": "la",
    "gender": "f",
    "rule": "pause — женский род",
    "collocations": [
      "pause important",
      "pause français",
      "bonne pause",
      "cette pause"
    ],
    "translation": "«pause» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "pause",
    "displayWithArticle": "la pause"
  },
  {
    "id": 55,
    "word": "emploi",
    "article": "l'",
    "gender": "m",
    "rule": "emploi — мужской род (l’)",
    "collocations": [
      "emploi important",
      "emploi français",
      "bon emploi",
      "ce emploi"
    ],
    "translation": "«emploi» (работа)",
    "topic": "Работа",
    "isTrap": true,
    "displayCenter": "emploi",
    "displayWithArticle": "l’emploi"
  },
  {
    "id": 56,
    "word": "entreprise",
    "article": "l'",
    "gender": "f",
    "rule": "entreprise — женский род (l’)",
    "collocations": [
      "entreprise important",
      "entreprise français",
      "bonne entreprise",
      "cette entreprise"
    ],
    "translation": "«entreprise» (работа)",
    "topic": "Работа",
    "isTrap": true,
    "displayCenter": "entreprise",
    "displayWithArticle": "l’entreprise"
  },
  {
    "id": 57,
    "word": "contrat",
    "article": "le",
    "gender": "m",
    "rule": "contrat — мужской род",
    "collocations": [
      "contrat important",
      "contrat français",
      "bon contrat",
      "ce contrat"
    ],
    "translation": "«contrat» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "contrat",
    "displayWithArticle": "le contrat"
  },
  {
    "id": 58,
    "word": "carrière",
    "article": "la",
    "gender": "f",
    "rule": "carrière — женский род",
    "collocations": [
      "carrière important",
      "carrière français",
      "bonne carrière",
      "cette carrière"
    ],
    "translation": "«carrière» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "carrière",
    "displayWithArticle": "la carrière"
  },
  {
    "id": 59,
    "word": "salaire",
    "article": "le",
    "gender": "m",
    "rule": "salaire — мужской род",
    "collocations": [
      "salaire important",
      "salaire français",
      "bon salaire",
      "ce salaire"
    ],
    "translation": "«salaire» (работа)",
    "topic": "Работа",
    "isTrap": false,
    "displayCenter": "salaire",
    "displayWithArticle": "le salaire"
  },
  {
    "id": 60,
    "word": "expérience",
    "article": "l'",
    "gender": "f",
    "rule": "expérience — женский род (l’)",
    "collocations": [
      "expérience important",
      "expérience français",
      "bonne expérience",
      "cette expérience"
    ],
    "translation": "«expérience» (работа)",
    "topic": "Работа",
    "isTrap": true,
    "displayCenter": "expérience",
    "displayWithArticle": "l’expérience"
  },
  {
    "id": 61,
    "word": "train",
    "article": "le",
    "gender": "m",
    "rule": "train — мужской род",
    "collocations": [
      "train important",
      "train français",
      "bon train",
      "ce train"
    ],
    "translation": "«train» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "train",
    "displayWithArticle": "le train"
  },
  {
    "id": 62,
    "word": "voiture",
    "article": "la",
    "gender": "f",
    "rule": "voiture — женский род",
    "collocations": [
      "voiture important",
      "voiture français",
      "bonne voiture",
      "cette voiture"
    ],
    "translation": "«voiture» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "voiture",
    "displayWithArticle": "la voiture"
  },
  {
    "id": 63,
    "word": "bus",
    "article": "le",
    "gender": "m",
    "rule": "bus — мужской род",
    "collocations": [
      "bus important",
      "bus français",
      "bon bus",
      "ce bus"
    ],
    "translation": "«bus» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "bus",
    "displayWithArticle": "le bus"
  },
  {
    "id": 64,
    "word": "station",
    "article": "la",
    "gender": "f",
    "rule": "station — женский род",
    "collocations": [
      "station important",
      "station français",
      "bonne station",
      "cette station"
    ],
    "translation": "«station» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "station",
    "displayWithArticle": "la station"
  },
  {
    "id": 65,
    "word": "métro",
    "article": "le",
    "gender": "m",
    "rule": "métro — мужской род",
    "collocations": [
      "métro important",
      "métro français",
      "bon métro",
      "ce métro"
    ],
    "translation": "«métro» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "métro",
    "displayWithArticle": "le métro"
  },
  {
    "id": 66,
    "word": "route",
    "article": "la",
    "gender": "f",
    "rule": "route — женский род",
    "collocations": [
      "route important",
      "route français",
      "bonne route",
      "cette route"
    ],
    "translation": "«route» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "route",
    "displayWithArticle": "la route"
  },
  {
    "id": 67,
    "word": "avion",
    "article": "l'",
    "gender": "m",
    "rule": "avion — мужской род (l’)",
    "collocations": [
      "avion important",
      "avion français",
      "bon avion",
      "ce avion"
    ],
    "translation": "«avion» (транспорт)",
    "topic": "Транспорт",
    "isTrap": true,
    "displayCenter": "avion",
    "displayWithArticle": "l’avion"
  },
  {
    "id": 68,
    "word": "valise",
    "article": "la",
    "gender": "f",
    "rule": "valise — женский род",
    "collocations": [
      "valise important",
      "valise français",
      "bonne valise",
      "cette valise"
    ],
    "translation": "«valise» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "valise",
    "displayWithArticle": "la valise"
  },
  {
    "id": 69,
    "word": "vélo",
    "article": "le",
    "gender": "m",
    "rule": "vélo — мужской род",
    "collocations": [
      "vélo important",
      "vélo français",
      "bon vélo",
      "ce vélo"
    ],
    "translation": "«vélo» (транспорт)",
    "topic": "Транспорт",
    "isTrap": false,
    "displayCenter": "vélo",
    "displayWithArticle": "le vélo"
  },
  {
    "id": 70,
    "word": "heure",
    "article": "l'",
    "gender": "f",
    "rule": "heure — женский род (l’ + h muet)",
    "collocations": [
      "heure important",
      "heure français",
      "bonne heure",
      "cette heure"
    ],
    "translation": "«heure» (транспорт)",
    "topic": "Транспорт",
    "isTrap": true,
    "displayCenter": "heure",
    "displayWithArticle": "l’heure"
  },
  {
    "id": 71,
    "word": "téléphone",
    "article": "le",
    "gender": "m",
    "rule": "téléphone — мужской род",
    "collocations": [
      "téléphone important",
      "téléphone français",
      "bon téléphone",
      "ce téléphone"
    ],
    "translation": "«téléphone» (техника)",
    "topic": "Техника",
    "isTrap": false,
    "displayCenter": "téléphone",
    "displayWithArticle": "le téléphone"
  },
  {
    "id": 72,
    "word": "application",
    "article": "l'",
    "gender": "f",
    "rule": "application — женский род (l’)",
    "collocations": [
      "application important",
      "application français",
      "bonne application",
      "cette application"
    ],
    "translation": "«application» (техника)",
    "topic": "Техника",
    "isTrap": true,
    "displayCenter": "application",
    "displayWithArticle": "l’application"
  },
  {
    "id": 73,
    "word": "ordinateur",
    "article": "l'",
    "gender": "m",
    "rule": "ordinateur — мужской род (l’)",
    "collocations": [
      "ordinateur important",
      "ordinateur français",
      "bon ordinateur",
      "ce ordinateur"
    ],
    "translation": "«ordinateur» (техника)",
    "topic": "Техника",
    "isTrap": true,
    "displayCenter": "ordinateur",
    "displayWithArticle": "l’ordinateur"
  },
  {
    "id": 74,
    "word": "image",
    "article": "l'",
    "gender": "f",
    "rule": "image — женский род (l’)",
    "collocations": [
      "image important",
      "image français",
      "bonne image",
      "cette image"
    ],
    "translation": "«image» (техника)",
    "topic": "Техника",
    "isTrap": true,
    "displayCenter": "image",
    "displayWithArticle": "l’image"
  },
  {
    "id": 75,
    "word": "message",
    "article": "le",
    "gender": "m",
    "rule": "message — мужской род",
    "collocations": [
      "message important",
      "message français",
      "bon message",
      "ce message"
    ],
    "translation": "«message» (техника)",
    "topic": "Техника",
    "isTrap": false,
    "displayCenter": "message",
    "displayWithArticle": "le message"
  },
  {
    "id": 76,
    "word": "adresse",
    "article": "l'",
    "gender": "f",
    "rule": "adresse — женский род (l’)",
    "collocations": [
      "adresse important",
      "adresse français",
      "bonne adresse",
      "cette adresse"
    ],
    "translation": "«adresse» (техника)",
    "topic": "Техника",
    "isTrap": true,
    "displayCenter": "adresse",
    "displayWithArticle": "l’adresse"
  },
  {
    "id": 77,
    "word": "site",
    "article": "le",
    "gender": "m",
    "rule": "site — мужской род",
    "collocations": [
      "site important",
      "site français",
      "bon site",
      "ce site"
    ],
    "translation": "«site» (техника)",
    "topic": "Техника",
    "isTrap": false,
    "displayCenter": "site",
    "displayWithArticle": "le site"
  },
  {
    "id": 78,
    "word": "connexion",
    "article": "la",
    "gender": "f",
    "rule": "connexion — женский род",
    "collocations": [
      "connexion important",
      "connexion français",
      "bonne connexion",
      "cette connexion"
    ],
    "translation": "«connexion» (техника)",
    "topic": "Техника",
    "isTrap": false,
    "displayCenter": "connexion",
    "displayWithArticle": "la connexion"
  },
  {
    "id": 79,
    "word": "mot",
    "article": "le",
    "gender": "m",
    "rule": "mot — мужской род",
    "collocations": [
      "mot important",
      "mot français",
      "bon mot",
      "ce mot"
    ],
    "translation": "«mot» (техника)",
    "topic": "Техника",
    "isTrap": false,
    "displayCenter": "mot",
    "displayWithArticle": "le mot"
  },
  {
    "id": 80,
    "word": "vidéo",
    "article": "la",
    "gender": "f",
    "rule": "vidéo — женский род",
    "collocations": [
      "vidéo important",
      "vidéo français",
      "bonne vidéo",
      "cette vidéo"
    ],
    "translation": "«vidéo» (техника)",
    "topic": "Техника",
    "isTrap": false,
    "displayCenter": "vidéo",
    "displayWithArticle": "la vidéo"
  },
  {
    "id": 81,
    "word": "jardin",
    "article": "le",
    "gender": "m",
    "rule": "jardin — мужской род",
    "collocations": [
      "jardin important",
      "jardin français",
      "bon jardin",
      "ce jardin"
    ],
    "translation": "«jardin» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "jardin",
    "displayWithArticle": "le jardin"
  },
  {
    "id": 82,
    "word": "rue",
    "article": "la",
    "gender": "f",
    "rule": "rue — женский род",
    "collocations": [
      "rue important",
      "rue français",
      "bonne rue",
      "cette rue"
    ],
    "translation": "«rue» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "rue",
    "displayWithArticle": "la rue"
  },
  {
    "id": 83,
    "word": "quartier",
    "article": "le",
    "gender": "m",
    "rule": "quartier — мужской род",
    "collocations": [
      "quartier important",
      "quartier français",
      "bon quartier",
      "ce quartier"
    ],
    "translation": "«quartier» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "quartier",
    "displayWithArticle": "le quartier"
  },
  {
    "id": 84,
    "word": "place",
    "article": "la",
    "gender": "f",
    "rule": "place — женский род",
    "collocations": [
      "place important",
      "place français",
      "bonne place",
      "cette place"
    ],
    "translation": "«place» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "place",
    "displayWithArticle": "la place"
  },
  {
    "id": 85,
    "word": "parc",
    "article": "le",
    "gender": "m",
    "rule": "parc — мужской род",
    "collocations": [
      "parc important",
      "parc français",
      "bon parc",
      "ce parc"
    ],
    "translation": "«parc» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "parc",
    "displayWithArticle": "le parc"
  },
  {
    "id": 86,
    "word": "ville",
    "article": "la",
    "gender": "f",
    "rule": "ville — женский род",
    "collocations": [
      "ville important",
      "ville français",
      "bonne ville",
      "cette ville"
    ],
    "translation": "«ville» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "ville",
    "displayWithArticle": "la ville"
  },
  {
    "id": 87,
    "word": "musée",
    "article": "le",
    "gender": "m",
    "rule": "musée — мужской род",
    "collocations": [
      "musée important",
      "musée français",
      "bon musée",
      "ce musée"
    ],
    "translation": "«musée» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "musée",
    "displayWithArticle": "le musée"
  },
  {
    "id": 88,
    "word": "église",
    "article": "l'",
    "gender": "f",
    "rule": "église — женский род (l’)",
    "collocations": [
      "église important",
      "église français",
      "bonne église",
      "cette église"
    ],
    "translation": "«église» (город)",
    "topic": "Город",
    "isTrap": true,
    "displayCenter": "église",
    "displayWithArticle": "l’église"
  },
  {
    "id": 89,
    "word": "cinéma",
    "article": "le",
    "gender": "m",
    "rule": "cinéma — мужской род",
    "collocations": [
      "cinéma important",
      "cinéma français",
      "bon cinéma",
      "ce cinéma"
    ],
    "translation": "«cinéma» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "cinéma",
    "displayWithArticle": "le cinéma"
  },
  {
    "id": 90,
    "word": "gare",
    "article": "la",
    "gender": "f",
    "rule": "gare — женский род",
    "collocations": [
      "gare important",
      "gare français",
      "bonne gare",
      "cette gare"
    ],
    "translation": "«gare» (город)",
    "topic": "Город",
    "isTrap": false,
    "displayCenter": "gare",
    "displayWithArticle": "la gare"
  },
  {
    "id": 91,
    "word": "matin",
    "article": "le",
    "gender": "m",
    "rule": "matin — мужской род",
    "collocations": [
      "matin important",
      "matin français",
      "bon matin",
      "ce matin"
    ],
    "translation": "«matin» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "matin",
    "displayWithArticle": "le matin"
  },
  {
    "id": 92,
    "word": "journée",
    "article": "la",
    "gender": "f",
    "rule": "journée — женский род",
    "collocations": [
      "journée important",
      "journée français",
      "bonne journée",
      "cette journée"
    ],
    "translation": "«journée» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "journée",
    "displayWithArticle": "la journée"
  },
  {
    "id": 93,
    "word": "soir",
    "article": "le",
    "gender": "m",
    "rule": "soir — мужской род",
    "collocations": [
      "soir important",
      "soir français",
      "bon soir",
      "ce soir"
    ],
    "translation": "«soir» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "soir",
    "displayWithArticle": "le soir"
  },
  {
    "id": 94,
    "word": "nuit",
    "article": "la",
    "gender": "f",
    "rule": "nuit — женский род",
    "collocations": [
      "nuit important",
      "nuit français",
      "bonne nuit",
      "cette nuit"
    ],
    "translation": "«nuit» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "nuit",
    "displayWithArticle": "la nuit"
  },
  {
    "id": 95,
    "word": "week-end",
    "article": "le",
    "gender": "m",
    "rule": "Заимствования часто мужского рода",
    "collocations": [
      "week-end important",
      "week-end français",
      "bon week-end",
      "ce week-end"
    ],
    "translation": "«week-end» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "week-end",
    "displayWithArticle": "le week-end"
  },
  {
    "id": 96,
    "word": "minute",
    "article": "la",
    "gender": "f",
    "rule": "minute — женский род",
    "collocations": [
      "minute important",
      "minute français",
      "bonne minute",
      "cette minute"
    ],
    "translation": "«minute» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "minute",
    "displayWithArticle": "la minute"
  },
  {
    "id": 97,
    "word": "mois",
    "article": "le",
    "gender": "m",
    "rule": "mois — мужской род",
    "collocations": [
      "mois important",
      "mois français",
      "bon mois",
      "ce mois"
    ],
    "translation": "«mois» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "mois",
    "displayWithArticle": "le mois"
  },
  {
    "id": 98,
    "word": "année",
    "article": "l'",
    "gender": "f",
    "rule": "année — женский род (l’)",
    "collocations": [
      "année important",
      "année français",
      "bonne année",
      "cette année"
    ],
    "translation": "«année» (время)",
    "topic": "Время",
    "isTrap": true,
    "displayCenter": "année",
    "displayWithArticle": "l’année"
  },
  {
    "id": 99,
    "word": "âge",
    "article": "l'",
    "gender": "m",
    "rule": "âge — мужской род (l’)",
    "collocations": [
      "âge important",
      "âge français",
      "bon âge",
      "ce âge"
    ],
    "translation": "«âge» (время)",
    "topic": "Время",
    "isTrap": true,
    "displayCenter": "âge",
    "displayWithArticle": "l’âge"
  },
  {
    "id": 100,
    "word": "fête",
    "article": "la",
    "gender": "f",
    "rule": "fête — женский род",
    "collocations": [
      "fête important",
      "fête français",
      "bonne fête",
      "cette fête"
    ],
    "translation": "«fête» (время)",
    "topic": "Время",
    "isTrap": false,
    "displayCenter": "fête",
    "displayWithArticle": "la fête"
  }
];
