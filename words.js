const words = [
  // 👨‍👩‍👧‍👦 Люди и семья
  { id: 1, word: "homme", article: "un", gender: "m", collocations: ["un homme gentil", "parler à un homme", "homme de 30 ans", "avec un homme"] },
  { id: 2, word: "femme", article: "une", gender: "f", collocations: ["une femme sympa", "parler à une femme", "femme de mon ami", "avec une femme"] },
  { id: 3, word: "enfant", article: "un", gender: "m", collocations: ["un enfant calme", "enfant de 8 ans", "jouer avec un enfant", "parler à un enfant"] },
  { id: 4, word: "ami", article: "un", gender: "m", collocations: ["un ami proche", "parler à un ami", "ami de classe", "avec un ami"] },
  { id: 5, word: "amie", article: "une", gender: "f", collocations: ["une amie proche", "parler à une amie", "amie de ma sœur", "avec une amie"] },
  { id: 6, word: "famille", article: "la", gender: "f", collocations: ["la famille Martin", "en famille", "photo de famille", "avec la famille"] },
  { id: 7, word: "père", article: "le", gender: "m", collocations: ["mon père", "père de famille", "parler à mon père", "avec mon père"] },
  { id: 8, word: "mère", article: "la", gender: "f", collocations: ["ma mère", "mère de famille", "parler à ma mère", "avec ma mère"] },
  { id: 9, word: "frère", article: "le", gender: "m", collocations: ["mon frère", "frère de Paul", "parler à mon frère", "avec mon frère"] },
  { id: 10, word: "sœur", article: "la", gender: "f", collocations: ["ma sœur", "sœur de Paul", "parler à ma sœur", "avec ma sœur"] },
  { id: 11, word: "parents", article: "les", gender: "p", collocations: ["mes parents", "chez mes parents", "parler à mes parents", "avec mes parents"] },
  { id: 12, word: "personne", article: "une", gender: "f", collocations: ["une personne gentille", "parler à une personne", "personne importante", "pour une personne"] },
  { id: 13, word: "bébé", article: "un", gender: "m", collocations: ["un bébé dort", "s’occuper du bébé", "bébé de 6 mois", "avec le bébé"] },

  // 🏠 Дом и быт
  { id: 14, word: "maison", article: "la", gender: "f", collocations: ["à la maison", "maison de famille", "rentrer à la maison", "devant la maison"] },
  { id: 15, word: "appartement", article: "l’", gender: "m", collocations: ["appartement en ville", "vivre dans un appartement", "louer un appartement", "appartement avec balcon"] },
  { id: 16, word: "chambre", article: "la", gender: "f", collocations: ["dans la chambre", "chambre à coucher", "chambre pour enfants", "sortir de la chambre"] },
  { id: 17, word: "cuisine", article: "la", gender: "f", collocations: ["dans la cuisine", "faire la cuisine", "cuisine française", "cuisine de la maison"] },
  { id: 18, word: "salle de bain", article: "la", gender: "f", collocations: ["dans la salle de bain", "aller à la salle de bain", "salle de bain moderne", "sortir de la salle de bain"] },
  { id: 19, word: "toilettes", article: "les", gender: "p", collocations: ["aller aux toilettes", "aux toilettes de l’école", "sortir des toilettes", "près des toilettes"] },
  { id: 20, word: "porte", article: "la", gender: "f", collocations: ["ouvrir la porte", "fermer la porte", "porte de la maison", "devant la porte"] },
  { id: 21, word: "fenêtre", article: "la", gender: "f", collocations: ["ouvrir la fenêtre", "fermer la fenêtre", "fenêtre de la chambre", "près de la fenêtre"] },
  { id: 22, word: "table", article: "la", gender: "f", collocations: ["sur la table", "à table", "mettre la table", "table de cuisine"] },
  { id: 23, word: "chaise", article: "la", gender: "f", collocations: ["sur la chaise", "une chaise en bois", "s’asseoir sur la chaise", "chaise de bureau"] },
  { id: 24, word: "lit", article: "le", gender: "m", collocations: ["dans le lit", "aller au lit", "lit d’enfant", "sortir du lit"] },
  { id: 25, word: "salon", article: "le", gender: "m", collocations: ["dans le salon", "salon de la maison", "aller au salon", "sortir du salon"] },
  { id: 26, word: "jardin", article: "le", gender: "m", collocations: ["dans le jardin", "jardin de la maison", "jouer dans le jardin", "près du jardin"] },
  { id: 27, word: "logement", article: "le", gender: "m", collocations: ["logement étudiant", "chercher un logement", "logement en ville", "payer le logement"] },

  // 🏫 Школа и работа
  { id: 28, word: "école", article: "l’", gender: "f", collocations: ["à l’école", "aller à l’école", "école primaire", "école de langues"] },
  { id: 29, word: "professeur", article: "le", gender: "m", collocations: ["professeur de français", "parler au professeur", "être professeur", "avec le professeur"] },
  // В PDF: élève может быть un/une по значению. Оставляю базово un (как в таблице), можно дублировать позже.
  { id: 30, word: "élève", article: "un", gender: "m", collocations: ["un élève sérieux", "une élève sympa", "parler à un élève", "élève de la classe"] },
  { id: 31, word: "classe", article: "la", gender: "f", collocations: ["en classe", "entrer en classe", "classe de français", "sortir de classe"] },
  { id: 32, word: "cours", article: "le", gender: "m", collocations: ["cours de français", "aller en cours", "finir le cours", "cours en ligne"] },
  { id: 33, word: "travail", article: "le", gender: "m", collocations: ["au travail", "chercher du travail", "travail de groupe", "finir le travail"] },
  { id: 34, word: "emploi", article: "un", gender: "m", collocations: ["chercher un emploi", "emploi du temps", "emploi à temps partiel", "trouver un emploi"] },
  { id: 35, word: "bureau", article: "le", gender: "m", collocations: ["au bureau", "bureau de travail", "sur le bureau", "bureau de poste"] },
  { id: 36, word: "exercice", article: "un", gender: "m", collocations: ["faire un exercice", "exercice de grammaire", "corriger l’exercice", "exercice en classe"] },
  { id: 37, word: "question", article: "une", gender: "f", collocations: ["poser une question", "question de cours", "répondre à une question", "question pour toi"] },
  { id: 38, word: "réponse", article: "une", gender: "f", collocations: ["une réponse correcte", "réponse à la question", "donner une réponse", "sans réponse"] },
  { id: 39, word: "erreur", article: "une", gender: "f", collocations: ["faire une erreur", "erreur de français", "corriger une erreur", "sans erreur"] },

  // ⏰ Время и повседневная жизнь
  { id: 40, word: "jour", article: "le", gender: "m", collocations: ["chaque jour", "jour de travail", "le jour suivant", "pendant la journée"] },
  { id: 41, word: "nuit", article: "la", gender: "f", collocations: ["la nuit dernière", "pendant la nuit", "sortir la nuit", "nuit calme"] },
  { id: 42, word: "matin", article: "le", gender: "m", collocations: ["le matin", "chaque matin", "le matin tôt", "matin de travail"] },
  { id: 43, word: "soir", article: "le", gender: "m", collocations: ["le soir", "ce soir", "sortir le soir", "soir d’été"] },
  { id: 44, word: "semaine", article: "la", gender: "f", collocations: ["cette semaine", "la semaine prochaine", "en semaine", "pendant la semaine"] },
  { id: 45, word: "week-end", article: "le", gender: "m", collocations: ["le week-end", "ce week-end", "pendant le week-end", "au week-end"] },
  { id: 46, word: "temps", article: "le", gender: "m", collocations: ["avoir le temps", "perdre du temps", "temps libre", "temps de travail"] },
  { id: 47, word: "heure", article: "l’", gender: "f", collocations: ["à quelle heure ?", "une heure de cours", "à l’heure", "heure du déjeuner"] },
  { id: 48, word: "date", article: "la", gender: "f", collocations: ["la date du jour", "à cette date", "noter la date", "date de naissance"] },
  { id: 49, word: "année", article: "l’", gender: "f", collocations: ["cette année", "l’année prochaine", "année scolaire", "en 2026"] },

  // 🍽️ Еда и напитки
  { id: 50, word: "repas", article: "le", gender: "m", collocations: ["prendre un repas", "après le repas", "repas de famille", "repas du soir"] },
  { id: 51, word: "petit-déjeuner", article: "le", gender: "m", collocations: ["prendre le petit-déjeuner", "au petit-déjeuner", "petit-déjeuner à 8h", "sans petit-déjeuner"] },
  { id: 52, word: "déjeuner", article: "le", gender: "m", collocations: ["à déjeuner", "le déjeuner", "déjeuner à la cantine", "après le déjeuner"] },
  { id: 53, word: "dîner", article: "le", gender: "m", collocations: ["dîner en famille", "au dîner", "après le dîner", "préparer le dîner"] },
  { id: 54, word: "pain", article: "le", gender: "m", collocations: ["acheter du pain", "pain frais", "morceau de pain", "pain avec du fromage"] },
  { id: 55, word: "fromage", article: "le", gender: "m", collocations: ["manger du fromage", "fromage de chèvre", "plateau de fromage", "fromage français"] },
  { id: 56, word: "eau", article: "l’", gender: "f", collocations: ["boire de l’eau", "bouteille d’eau", "eau froide", "dans l’eau"] },
  { id: 57, word: "café", article: "le", gender: "m", collocations: ["prendre un café", "café chaud", "café avec du lait", "café du matin"] },
  { id: 58, word: "thé", article: "le", gender: "m", collocations: ["boire du thé", "thé vert", "thé avec du citron", "tasse de thé"] },
  { id: 59, word: "fruit", article: "un", gender: "m", collocations: ["un fruit frais", "fruit de saison", "salade de fruits", "manger un fruit"] },
  { id: 60, word: "légume", article: "un", gender: "m", collocations: ["un légume vert", "soupe de légumes", "acheter des légumes", "avec des légumes"] },
  { id: 61, word: "restaurant", article: "le", gender: "m", collocations: ["au restaurant", "restaurant italien", "réserver un restaurant", "sortir au restaurant"] },

  // 🏙️ Город и транспорт
  { id: 62, word: "ville", article: "la", gender: "f", collocations: ["en ville", "centre-ville", "ville de Paris", "vivre en ville"] },
  { id: 63, word: "rue", article: "la", gender: "f", collocations: ["dans la rue", "rue principale", "sortir dans la rue", "rue de la ville"] },
  { id: 64, word: "place", article: "la", gender: "f", collocations: ["sur la place", "place du marché", "aller à la place", "place de parking"] },
  { id: 65, word: "magasin", article: "le", gender: "m", collocations: ["aller au magasin", "magasin de vêtements", "dans le magasin", "devant le magasin"] },
  { id: 66, word: "marché", article: "le", gender: "m", collocations: ["au marché", "marché du samedi", "acheter au marché", "sortir du marché"] },
  { id: 67, word: "gare", article: "la", gender: "f", collocations: ["à la gare", "aller à la gare", "gare de Berlin", "sortir de la gare"] },
  { id: 68, word: "arrêt", article: "l’", gender: "m", collocations: ["à l’arrêt", "arrêt de bus", "descendre à l’arrêt", "près de l’arrêt"] },
  { id: 69, word: "bus", article: "le", gender: "m", collocations: ["en bus", "prendre le bus", "arrêt de bus", "dans le bus"] },
  { id: 70, word: "train", article: "le", gender: "m", collocations: ["en train", "prendre le train", "train pour Paris", "dans le train"] },
  { id: 71, word: "voiture", article: "la", gender: "f", collocations: ["en voiture", "dans la voiture", "voiture de mon père", "avec la voiture"] },
  { id: 72, word: "métro", article: "le", gender: "m", collocations: ["en métro", "prendre le métro", "station de métro", "dans le métro"] },
  { id: 73, word: "transport", article: "le", gender: "m", collocations: ["transport public", "en transport", "moyen de transport", "transport en commun"] },

  // 🪪 Документы и общение
  { id: 74, word: "nom", article: "le", gender: "m", collocations: ["nom de famille", "écrire le nom", "nom complet", "nom de l’élève"] },
  { id: 75, word: "prénom", article: "le", gender: "m", collocations: ["donner son prénom", "écrire le prénom", "prénom français", "avec le prénom"] },
  { id: 76, word: "adresse", article: "l’", gender: "f", collocations: ["donner son adresse", "à cette adresse", "adresse e-mail", "adresse de la maison"] },
  { id: 77, word: "numéro", article: "le", gender: "m", collocations: ["numéro de téléphone", "noter le numéro", "numéro 5", "avec le numéro"] },
  { id: 78, word: "téléphone", article: "le", gender: "m", collocations: ["au téléphone", "téléphone portable", "numéro de téléphone", "parler au téléphone"] },
  { id: 79, word: "message", article: "un", gender: "m", collocations: ["envoyer un message", "message à mon ami", "message sur WhatsApp", "lire le message"] },
  { id: 80, word: "langue", article: "une", gender: "f", collocations: ["apprendre une langue", "parler une langue", "langue étrangère", "en langue française"] },
  { id: 81, word: "français", article: "le", gender: "m", collocations: ["parler français", "cours de français", "en français", "français facile"] },

  // 🌦️ Природа и погода
  { id: 82, word: "soleil", article: "le", gender: "m", collocations: ["au soleil", "soleil d’été", "avec du soleil", "regarder le soleil"] },
  { id: 83, word: "pluie", article: "la", gender: "f", collocations: ["sous la pluie", "pluie forte", "avec de la pluie", "marcher sous la pluie"] },
  { id: 84, word: "vent", article: "le", gender: "m", collocations: ["avec du vent", "vent fort", "sans vent", "avoir du vent"] },
  { id: 85, word: "neige", article: "la", gender: "f", collocations: ["dans la neige", "neige blanche", "avec de la neige", "marcher dans la neige"] },
  { id: 86, word: "climat", article: "le", gender: "m", collocations: ["climat froid", "climat de la région", "parler du climat", "changer de climat"] },
  { id: 87, word: "météo", article: "la", gender: "f", collocations: ["la météo du jour", "regarder la météo", "selon la météo", "météo en ligne"] },

  // 🧠 Абстрактные (A1-минимум)
  { id: 88, word: "monde", article: "le", gender: "m", collocations: ["le monde entier", "dans le monde", "monde du travail", "autour du monde"] },
  { id: 89, word: "chose", article: "la", gender: "f", collocations: ["une chose simple", "la chose importante", "parler de la chose", "penser à une chose"] },
  { id: 90, word: "problème", article: "le", gender: "m", collocations: ["avoir un problème", "problème de temps", "résoudre le problème", "problème avec qqn"] },
  { id: 91, word: "idée", article: "l’", gender: "f", collocations: ["une idée simple", "idée de projet", "avoir une idée", "parler d’une idée"] },
  // В PDF question повторяется в абстрактных — я оставляю ОДИН раз (уже есть id:37).
  { id: 92, word: "situation", article: "la", gender: "f", collocations: ["situation difficile", "situation de classe", "dans cette situation", "parler de la situation"] },
  { id: 93, word: "vie", article: "la", gender: "f", collocations: ["la vie quotidienne", "vie de famille", "dans la vie", "changer de vie"] },
  { id: 94, word: "plaisir", article: "le", gender: "m", collocations: ["avec plaisir", "faire plaisir", "plaisir de lire", "un grand plaisir"] },

  // ➕ [AJOUT] Добивка до ровно 100 (A1-слова для школы/быта)
  { id: 95, word: "livre", article: "le", gender: "m", collocations: ["un livre de français", "lire un livre", "dans le livre", "acheter un livre"] },
  { id: 96, word: "cahier", article: "le", gender: "m", collocations: ["un cahier d’exercices", "écrire dans le cahier", "ouvrir le cahier", "sur le cahier"] },
  { id: 97, word: "stylo", article: "le", gender: "m", collocations: ["un stylo bleu", "écrire au stylo", "avec un stylo", "trouver un stylo"] },
  { id: 98, word: "clé", article: "la", gender: "f", collocations: ["la clé de la maison", "chercher la clé", "avec la clé", "donner la clé"] },
  { id: 99, word: "ticket", article: "le", gender: "m", collocations: ["un ticket de bus", "acheter un ticket", "montrer le ticket", "sans ticket"] },
  { id: 100, word: "carte", article: "la", gender: "f", collocations: ["une carte d’identité", "carte de transport", "payer par carte", "montrer la carte"] }
];
