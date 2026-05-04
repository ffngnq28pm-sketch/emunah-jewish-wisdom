export interface JewishSage {
  id: string;
  name: string;
  hebrewName: string;
  years: string;
  origin: string;
  field: string;
  portrait: string;
  description: string;
  legacy: string;
  famousQuote: string;
  works: string[];
  color: string;
}

export const JEWISH_SAGES: JewishSage[] = [
  {
    id: 'rashi',
    name: 'Rachi',
    hebrewName: 'רַשִׁ"י — Rabbi Chlomo Yitzhaki',
    years: '1040 — 1105',
    origin: 'Troyes (France)',
    field: 'Commentaire biblique · Talmud · Halakha',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjOEI0NTEzIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Rabbin de Troyes, Rachi est l\'auteur des commentaires bibliques et talmudiques les plus lus au monde. Son génie est de rendre accessible ce qui est obscur, sans jamais trahir la profondeur. Ses commentaires du Pentateuque et du Talmud de Babylone ont accompagné chaque génération juive depuis neuf siècles. Sa pédagogie : répondre d\'abord à la question que le lecteur a dans l\'esprit.',
    legacy: 'Sans Rachi, il serait impossible d\'apprendre le Talmud seul. Son commentaire accompagne chaque page du Talmud imprimé depuis l\'invention de l\'imprimerie. Il a rendu la Torah accessible à chaque Juif, du plus simple au plus érudit.',
    famousQuote: 'Chaque lettre de la Torah contient des mondes entiers — rien n\'est superflu, rien n\'est en trop.',
    works: ['Commentaire sur la Torah', 'Commentaire sur le Talmud de Babylone', 'Responsa', 'Siddour commenté'],
    color: '#8B4513',
  },
  {
    id: 'rambam',
    name: 'Rambam — Maïmonide',
    hebrewName: 'רַמְבַּ"ם — Rabbi Moché ben Maïmon',
    years: '1138 — 1204',
    origin: 'Cordoue (Espagne) · Fostat (Égypte)',
    field: 'Philosophie · Halakha · Médecine · Théologie',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjNEE2RkE1IiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Né à Cordoue, fuyant l\'Almohade, formé à la philosophie arabe et grecque, Moché ben Maïmon est le plus grand codificateur et philosophe du judaïsme médiéval. Son Michné Torah systématise l\'ensemble de la Halakha. Son Guide des Égarés réconcilie foi et raison aristotélicienne. Médecin à la cour du sultan Saladin, il soignait le corps et l\'âme avec la même rigueur.',
    legacy: 'A codifié toute la Halakha en un système accessible et raisonné. A posé les 13 Principes de Foi qui structurent encore la théologie juive. A démontré que Torah et philosophie ne s\'opposent pas mais se complètent.',
    famousQuote: 'La vérité ne devient pas fausse parce que personne ne la reconnaît, ni vraie parce que tout le monde la reconnaît.',
    works: ['Michné Torah', 'Guide des Égarés (Moreh Nevoukhim)', 'Sefer HaMitzvot', 'Traité de la santé'],
    color: '#4A6FA5',
  },
  {
    id: 'ramban',
    name: 'Ramban — Nahmanide',
    hebrewName: 'רַמְבַּ"ן — Rabbi Moché ben Nahman',
    years: '1194 — 1270',
    origin: 'Gérone (Catalogne) · Acre (Israël)',
    field: 'Kabbalah · Commentaire biblique · Halakha · Controverse',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjMkM1RjhBIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Grand rabbin de Gérone et kabbalistе de premier rang, Nahmanide incarne le dialogue tendu entre philosophie rationnelle et mystique. En 1263, il osa défendre le judaïsme face au roi d\'Aragon lors de la Controverse de Barcelone — exploit extraordinaire où il sortit vainqueur intellectuellement mais dut fuir en Terre d\'Israël. Son commentaire sur la Torah intègre l\'exégèse littérale, la tradition kabbalistique et la profondeur philosophique.',
    legacy: 'A réintroduit la dimension mystique dans l\'étude biblique au moment où le rationalisme maimonidien dominait. Sa migration en Terre d\'Israël a inspiré des générations d\'olim. Son commentaire est encore indispensable.',
    famousQuote: 'La Torah a été donnée à Israël pour être vécue en Terre d\'Israël — c\'est là que les mitzvot trouvent leur pleine signification.',
    works: ['Commentaire sur la Torah', 'Torat HaAdam', 'Milhamot HaShem', 'Iggeret HaKodesh'],
    color: '#2C5F8A',
  },
  {
    id: 'besht',
    name: 'Baal Shem Tov',
    hebrewName: 'בַּעַל שֵׁם טוֹב — Rabbi Israël ben Eliezer',
    years: '~1700 — 1760',
    origin: 'Podolie (Ukraine actuelle)',
    field: 'Hassidisme · Mystique · Prière · Joy divine',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjOEI1QTJBIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Fils d\'orphelin, herboriste dans les forêts des Carpates, Israël ben Eliezer se révèle comme thérapeute spiritual à 36 ans. Son enseignement révolutionne le judaïsme populaire : pas besoin d\'érudition pour se rapprocher de Dieu — la joie, la prière sincère, et la conscience de la présence divine dans chaque instant valent plus que mille jeûnes. Il rassemble autour de lui un cercle de disciples qui fonderont le mouvement hassidique.',
    legacy: 'A démocratisé la spiritualité juive. Son mouvement hassidique a sauvé des millions de Juifs d\'Europe orientale du découragement et de l\'aliénation. Sa vision de la joie comme service divin reste révolutionnaire.',
    famousQuote: 'La joie est le chemin le plus court vers Dieu. La tristesse est une porte fermée ; la joie, une porte ouverte.',
    works: ['Toledot Yaakov Yosef (rapporté)', 'Keter Chem Tov', 'Enseignements oraux transmis par ses disciples'],
    color: '#8B5A2A',
  },
  {
    id: 'vilna-gaon',
    name: 'Gaon de Vilna',
    hebrewName: 'הַגְּרָ"א — Rabbi Eliyahou ben Chlomo Zalman',
    years: '1720 — 1797',
    origin: 'Vilna (Lituanie)',
    field: 'Talmud · Kabbalah · Mathématiques · Sciences',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjNEE0QThBIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Rabbi Eliyahou de Vilna est considéré comme l\'une des plus grandes intelligences de l\'histoire juive. Enfant prodige qui avait mémorisé l\'ensemble de la Bible à 6 ans, il devint le plus grand maître talmudique de son époque. Adversaire farouche du mouvement hassidique naissant, il défendit le judaïsme de l\'étude rigoureuse et des commentaires précis. Ses corrections textuelles du Talmud et du Zohar restent des références philologiques.',
    legacy: 'A fondé le mouvement "mitnaged" opposé au hassidisme, valorisant l\'étude intensive comme voie spirituelle suprême. L\'école de Volozhin qu\'il inspira est à l\'origine de toutes les grandes yeshivot modernes.',
    famousQuote: 'L\'étude de la Torah est plus grande que toutes les mitzvot ensemble — car elle conduit à toutes les autres.',
    works: ['Commentaire sur le Choulhan Aroukh', 'Aderet Eliyahou', 'Biour sur les Prophètes', 'Commentaire sur le Zohar'],
    color: '#4A4A8A',
  },
  {
    id: 'heschel',
    name: 'Rabbi Abraham Joshua Heschel',
    hebrewName: 'אַבְרָהָם יְהוֹשֻׁעַ הֶשְׁל',
    years: '1907 — 1972',
    origin: 'Varsovie (Pologne) · New York (États-Unis)',
    field: 'Théologie · Philosophie · Droits civiques · Mystique',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjNUE3QTVBIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Descendant de dynasties hassidiques polonaises, survivant de la Shoah, Heschel devient le plus grand théologien juif américain du XXe siècle. Son œuvre réconcilie la profondeur mystique hassidique avec la rigueur philosophique universitaire. Il marcha avec Martin Luther King à Selma en 1965, déclarant : "Mes jambes priaient." Sa pensée centrale : avant que l\'homme cherche Dieu, Dieu cherche l\'homme.',
    legacy: 'A renouvelé la théologie juive en termes existentiels et poétiques. Pionnier du dialogue judéo-chrétien au Concile Vatican II. A démontré que la spiritualité authentique est indissociable de l\'engagement social.',
    famousQuote: 'Dieu a besoin de l\'homme pour accomplir Sa volonté dans le monde. L\'homme est une nécessité divine.',
    works: ['L\'Homme n\'est pas seul', 'Dieu en quête de l\'homme', 'Le Sabbat', 'Une passion pour la vérité'],
    color: '#5A7A5A',
  },
  {
    id: 'levinas',
    name: 'Emmanuel Lévinas',
    hebrewName: 'עֶמָּנוּאֵל לֵוִינָס',
    years: '1906 — 1995',
    origin: 'Kaunas (Lituanie) · Paris (France)',
    field: 'Philosophie · Éthique · Talmud · Phénoménologie',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjNUE2QThBIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Élève d\'Husserl et de Heidegger, prisonnier de guerre nazi libéré en 1945, Emmanuel Lévinas fonde une philosophie où l\'Autre est au centre. Son judaïsme profond nourrit sa pensée : la Torah lui enseigne que le visage de l\'autre est une invitation éthique absolue avant d\'être un objet de connaissance. Directeur de l\'École Normale Israélite Orientale à Paris, il forma des générations de rabbins.',
    legacy: 'A redéfini la philosophie occidentale en plaçant l\'éthique — et non l\'ontologie — comme philosophie première. A démontré que le judaïsme n\'est pas une religion parmi d\'autres mais une école de responsabilité universelle.',
    famousQuote: 'Le visage d\'autrui est une révélation. Il dit : "Tu ne tueras point" — sans argument, sans démonstration.',
    works: ['Totalité et Infini', 'Autrement qu\'être', 'Difficile Liberté', 'Quatre lectures talmudiques'],
    color: '#5A6A8A',
  },
  {
    id: 'soloveitchik',
    name: 'Rabbi Joseph B. Soloveitchik',
    hebrewName: 'יוֹסֵף דּוֹב הַלֵּוִי סוֹלוֹבֵיצִ\'יק — "le Rav"',
    years: '1903 — 1993',
    origin: 'Pruzhany (Biélorussie) · Boston (États-Unis)',
    field: 'Philosophie halakhique · Orthodoxie moderne · Existentialisme',
    portrait: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDFmM2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTNhNWMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE4MCIgZm9udC1mYW1pbHk9InNlcmlmIiBmaWxsPSIjNkE0QThBIiBvcGFjaXR5PSIwLjc1Ij4mI3gyNzIxOzwvdGV4dD48L3N2Zz4=',
    description: 'Surnommé simplement "le Rav" — le Maître par excellence — Soloveitchik incarne la synthèse entre l\'érudition talmudique lituanienne et la philosophie existentielle occidentale. Doctorat à Berlin avec une thèse sur Hermann Cohen, il devient le grand décisionnaire et penseur du judaïsme orthodoxe américain. Son "Lonely Man of Faith" est un chef-d\'œuvre de la condition humaine face au divin.',
    legacy: 'A fondé le mouvement Orthodoxie Moderne — foi intégrale et engagement dans le monde contemporain. Ses "shi\'ourim" (leçons de Talmud) ont formé des milliers de rabbins. Son œuvre philosophique reste inégalée dans le monde orthodoxe.',
    famousQuote: 'L\'homme de foi est nécessairement seul — mais dans cette solitude, il est face à Dieu, et c\'est là la plénitude.',
    works: ['Lonely Man of Faith', 'Halakhic Man', 'Family Redeemed', 'Kol Dodi Dofek'],
    color: '#6A4A8A',
  },
];
