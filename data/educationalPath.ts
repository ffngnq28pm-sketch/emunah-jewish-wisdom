import { EducationModule } from '@/types';

export const EDUCATION_MODULES: EducationModule[] = [
  {
    id: 1, title: 'Torah et Pentateuque', description: 'Les cinq livres de Moïse',
    icon: '📜', color: '#4A6A9A',
    lessons: [
      {
        id: 'le1-1', moduleId: 1, order: 1,
        title: 'La Création et Bereshit',
        subtitle: 'En commencement — fondements de la vision juive du monde',
        content: `Le livre de Bereshit (Genèse) ouvre la Torah avec les mots "Bereshit bara Elohim" — "Au commencement, Dieu créa." Cette ouverture pose les fondements de la pensée juive : un Dieu unique, créateur de tout, qui trouve Sa création "très bonne".

La création en six jours culmine avec le Chabbat, jour sanctifié et mis à part. Ce rythme hebdomadaire structure le temps juif jusqu'à aujourd'hui. L'homme est créé "à l'image de Dieu" (Tselem Elohim) — notion centrale de la dignité humaine en judaïsme.

Les récits des Patriarches — Abraham, Isaac et Jacob — forment la trame de Bereshit. Abraham est appelé à quitter son pays pour une terre inconnue, paradigme de la foi. L'Alliance (Brit) établie avec Abraham est le fondement du peuple juif : "Je serai votre Dieu, et vous serez Mon peuple."`,
        keyPoints: [
          'Bereshit : "Au commencement" — premier mot de la Torah',
          'Tselem Elohim : l\'homme créé à l\'image divine — dignité humaine',
          'Le Chabbat : septième jour, sanctifié par Dieu dès la création',
          'L\'Alliance (Brit) avec Abraham : fondement du peuple juif',
          'Les trois Patriarches : Abraham, Isaac, Jacob — Avot',
        ],
        hebrewQuote: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ',
        hebrewSource: 'Bereshit 1:1',
        duration: 7,
      },
      {
        id: 'le1-2', moduleId: 1, order: 2,
        title: "L'Exode et la Libération",
        subtitle: "Yetsiat Mitsrayim — la sortie d'Égypte, fondement de la mémoire juive",
        content: `Yetsiat Mitsrayim, la sortie d'Égypte, est l'événement fondateur du peuple juif. Le livre de Shemot (Exode) raconte comment Moïse, appelé par Dieu dans le Buisson ardent, libère les Hébreux de l'esclavage égyptien grâce à dix plaies.

La Pâque (Pessah) commémore cette libération chaque année. Le Séder de Pessah relit la Haggadah pour que chaque Juif se souvienne : "En chaque génération, chacun est obligé de se voir comme s'il était personnellement sorti d'Égypte."

Au Sinaï, le peuple reçoit la Torah et les Dix Commandements (Aseret HaDibrot). Cette révélation collective — toute une nation rassemblée au pied d'une montagne — est unique dans l'histoire religieuse. Elle scelle l'Alliance entre Dieu et Israël.`,
        keyPoints: [
          'Yetsiat Mitsrayim : fondement de l\'identité juive — liberté vs esclavage',
          'Les dix plaies et le passage de la mer Rouge (Kriat Yam Suf)',
          'Le Sinaï : révélation des Dix Commandements à tout le peuple',
          'Pessah : commémoration annuelle obligatoire de la libération',
          '"Chaque génération doit se voir comme sortant d\'Égypte" (Haggadah)',
        ],
        hebrewQuote: 'אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם',
        hebrewSource: 'Shemot 20:2',
        duration: 7,
      },
      {
        id: 'le1-3', moduleId: 1, order: 3,
        title: 'La Loi et les Mitzvot',
        subtitle: '613 commandements — la structure de la vie juive',
        content: `La Torah contient 613 commandements (Taryag Mitzvot) : 248 commandements positifs (asseh) et 365 négatifs (lo taaseh). Ces Mitzvot couvrent tous les aspects de la vie : relations humaines, rituels religieux, éthique sociale, lois alimentaires.

Rabbi Simlai (Talmud Makkot 23b) fut le premier à recenser ce chiffre de 613. Maïmonide les a systématisés dans son "Sefer HaMitzvot". Les Mitzvot se divisent en deux catégories : Mitzvot Ben Adam LeMakom (entre l'homme et Dieu) et Mitzvot Ben Adam LeHavero (entre hommes).

Hillel l'Ancien, questionné sur l'essence de la Torah, répondit : "Ce qui t'est odieux, ne le fais pas à ton prochain. C'est toute la Torah, le reste n'est que commentaire. Va et apprends." Cette formulation de la règle d'or résume l'éthique juive.`,
        keyPoints: [
          '613 Mitzvot : 248 positifs + 365 négatifs — structure complète de la vie',
          'Ben Adam LeMakom (vers Dieu) et Ben Adam LeHavero (vers autrui)',
          'Hillel : la règle d\'or comme essence de la Torah',
          'Maïmonide : Sefer HaMitzvot — classification systématique',
          'Les Mitzvot : chemin de sanctification et service divin (Avodat Hashem)',
        ],
        hebrewQuote: 'וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ',
        hebrewSource: 'Vayikra 19:18',
        duration: 6,
      },
      {
        id: 'le1-4', moduleId: 1, order: 4,
        title: 'Alliance et Élection',
        subtitle: "Brit et Am Segulah — le peuple élu et sa responsabilité",
        content: `Le concept d'élection du peuple juif (Behirat Israel) est central dans la Torah. "Vous serez pour moi un royaume de prêtres et une nation sainte" (Shemot 19:6). Cette élection n'est pas un privilège de supériorité mais une responsabilité de témoignage.

L'Alliance sinaïtique impose des obligations : les Mitzvot sont le contrat de cette relation unique. Quand Israël les respecte, la bénédiction suit ; quand il s'en éloigne, les conséquences suivent — logique clairement énoncée dans Devarim.

Le concept de Kiddush Hashem (sanctification du Nom divin) résume la vocation d'Israël : par ses actes, le peuple juif témoigne de Dieu dans le monde. Inversement, le Hillul Hashem (profanation du Nom) est la faute la plus grave.`,
        keyPoints: [
          'Behirat Israel : élection comme responsabilité, non supériorité',
          '"Royaume de prêtres, nation sainte" — vocation prophétique',
          'L\'Alliance bilatérale : obéissance aux Mitzvot en échange de protection',
          'Kiddush Hashem : sanctifier Dieu par ses actes dans le monde',
          'Particularisme juif et universalisme prophétique coexistent',
        ],
        hebrewQuote: 'וְאַתֶּם תִּהְיוּ לִי מַמְלֶכֶת כֹּהֲנִים וְגוֹי קָדוֹשׁ',
        hebrewSource: 'Shemot 19:6',
        duration: 6,
      },
      {
        id: 'le1-5', moduleId: 1, order: 5,
        title: 'Devarim et le Message Prophétique',
        subtitle: 'Le testament de Moïse et la vision deutéronomique',
        content: `Devarim (Deutéronome) est le testament de Moïse, ses derniers discours au peuple avant son décès. Ce livre reprend, approfondit et réinterprète la loi sinaitique. C'est en Devarim que se trouve le Chema Israël : "Écoute, Israël, l'Éternel notre Dieu, l'Éternel est Un."

La théologie deutéronomiste voit l'histoire comme un cycle : fidélité → bénédiction, infidélité → châtiment, retour → restauration. Cette vision informera tous les livres prophétiques.

Devarim insiste sur la Teshouva (repentir et retour) : même après les fautes les plus graves, le retour vers Dieu est possible. "Si tu reviens vers l'Éternel ton Dieu... l'Éternel ton Dieu ramènera ta captivité." Cette promesse de rédemption reste centrale dans la spiritualité juive.`,
        keyPoints: [
          'Chema Israël : profession de foi fondamentale du judaïsme',
          'Vision deutéronomiste : histoire comme dialogue entre fidélité et retour',
          'Teshouva : retour et repentir toujours possibles, même après la faute',
          'Moïse : le plus grand prophète — "face à face avec Dieu"',
          'Devarim : clé herméneutique de toute la littérature prophétique',
        ],
        hebrewQuote: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד',
        hebrewSource: 'Devarim 6:4',
        duration: 7,
      },
    ],
  },
  {
    id: 2, title: 'Les Fêtes Juives', description: 'Le calendrier sacré du peuple juif',
    icon: '✡️', color: '#C9A84C',
    lessons: [
      {
        id: 'le2-1', moduleId: 2, order: 1,
        title: 'Chabbat — Le Septième Jour',
        subtitle: 'Shabbat : île de temps dans l\'océan du quotidien',
        content: `Le Chabbat est la fête la plus fréquente et peut-être la plus fondamentale du judaïsme — célébrée chaque semaine du vendredi soir au samedi soir. Il commémore à la fois la création (Dieu se reposa le septième jour) et l'Exode (souvenir de l'esclavage et de la liberté).

L'entrée du Chabbat est marquée par l'allumage des bougies par la maîtresse de maison, la récitation du Kiddush sur le vin, et la bénédiction sur les deux pains tressés (hallot). Le repas familial, les chants (Zmirot) et l'étude créent une atmosphère de sérénité unique.

Le Chabbat interdit 39 catégories de travail (Melakhot), tirées des travaux du Tabernacle. Le philosophe Ahad Ha'am écrivit : "Plus que les Juifs ont préservé le Chabbat, c'est le Chabbat qui a préservé les Juifs." Cette institution a maintenu la cohésion communautaire à travers deux millénaires de diaspora.`,
        keyPoints: [
          'Chabbat : double mémoire — création divine et libération de l\'esclavage',
          'Trois commandements centraux : Kiddush, Havdalah, 39 Melakhot interdites',
          'Allumage des bougies : rituel féminin fondamental, accueil de la "Reine Chabbat"',
          'Hallot : deux pains tressés rappelant la double portion de manne au désert',
          '"Le Chabbat a préservé les Juifs" — Ahad Ha\'am',
        ],
        hebrewQuote: 'זָכוֹר אֶת יוֹם הַשַּׁבָּת לְקַדְּשׁוֹ',
        hebrewSource: 'Shemot 20:8',
        duration: 7,
      },
      {
        id: 'le2-2', moduleId: 2, order: 2,
        title: 'Roch Hachana et Yom Kippour',
        subtitle: 'Les Jours Redoutables — Jugement et Pardon divins',
        content: `Les Yamim Noraïm (Jours Redoutables) ouvrent l'année juive. Roch Hachana (1er et 2 Tichri) est le Jour du Jugement divin où sont inscrits les destins de l'année. Le son du Chofar (corne de bélier) appelle à l'éveil spirituel et au repentir.

Entre Roch Hachana et Yom Kippour s'étendent dix jours de repentir (Asseret Yemei Teshouva). La tradition dit que durant Roch Hachana, trois livres sont ouverts devant Dieu : le Livre de Vie pour les justes, le Livre de Mort pour les mauvais, et un livre intermédiaire où le destin dépend de la Teshouva jusqu'à Yom Kippour.

Yom Kippour, le Jour des Expiations, est le plus saint du calendrier juif. Le jeûne de 25 heures, la prière ininterrompue, la confession collective (Viddui) et la demande de pardon permettent l'expiation. La prière finale Neilah ("fermeture des portes") est un moment de déchirement et d'espoir uniques.`,
        keyPoints: [
          'Roch Hachana : Nouvel An, Yom HaDin (Jour du Jugement)',
          'Chofar : appel au réveil spirituel — 100 sonneries rituelles',
          'Asseret Yemei Teshouva : 10 jours entre Roch Hachana et Yom Kippour',
          'Yom Kippour : Jeûne de 25h, Viddui (confession), Neilah',
          'G\'mar Hatima Tova : "Que tu sois inscrit pour le bien"',
        ],
        hebrewQuote: 'תְּשׁוּבָה וּתְפִלָּה וּצְדָקָה מַעֲבִירִין אֶת רוֹעַ הַגְּזֵרָה',
        hebrewSource: 'Machzor Roch Hachana',
        duration: 8,
      },
      {
        id: 'le2-3', moduleId: 2, order: 3,
        title: 'Pessah — La Liberté',
        subtitle: 'Hag HaHerut — la fête de la liberté et du renouveau',
        content: `Pessah (Pâque juive) commémore la libération d'Égypte. La veille du seder, on recherche et détruit tout levain (Bedikat Chamets) — symbole de l'orgueil et de l'ego gonflé. La Haggadah de Pessah raconte la sortie d'Égypte lors du Séder, repas liturgique structuré.

Les aliments symboliques du plateau du Séder (Kéara) racontent l'histoire : Maror (herbes amères) = l'amertume de l'esclavage ; Harosset = le mortier des briques ; Zeroah = l'agneau pascal ; Karpas = le printemps et l'espoir. La Matsa (pain sans levain) rappelle le départ précipité.

La Haggadah ordonne : "En chaque génération, chacun est obligé de se voir comme s'il était personnellement sorti d'Égypte." La liberté n'est pas seulement un souvenir historique — elle est une responsabilité éternelle. L'Exode a inspiré des mouvements de libération à travers l'histoire.`,
        keyPoints: [
          'Bedikat Chamets : recherche et destruction du levain avant Pessah',
          'Le Séder : repas rituel avec lecture de la Haggadah',
          'Les cinq aliments symboliques de la Kéara et leur signification',
          'Matsa : pain de l\'affliction et de la liberté simultanément',
          '"Se voir comme sorti d\'Égypte" : obligation mémorielle personnelle',
        ],
        hebrewQuote: 'בְּכָל דּוֹר וָדוֹר חַיָּב אָדָם לִרְאוֹת אֶת עַצְמוֹ כְּאִלּוּ הוּא יָצָא מִמִּצְרַיִם',
        hebrewSource: 'Haggadah de Pessah',
        duration: 7,
      },
      {
        id: 'le2-4', moduleId: 2, order: 4,
        title: "Souccot, Shavouot et Sim'hat Torah",
        subtitle: 'Les trois pèlerinages et la joie de la Torah',
        content: `Les trois Regalim (fêtes de pèlerinage) réunissaient autrefois tout Israël au Temple : Pessah (printemps), Shavouot (révélation de la Torah, 50 jours après Pessah) et Souccot (automne).

Souccot (Fête des Cabanes) dure sept jours. On habite dans des cabanes de branchages (Souccot) rappelant les 40 ans de nomadisme. On agite les quatre espèces végétales (Arba'at HaMinim) : Loulav (palme), Etrog (cédrat), Hadassim (myrte) et Aravot (saule).

Shavouot commémore le don de la Torah au Sinaï. La tradition veut qu'on lise le livre de Ruth la nuit de Shavouot, et qu'on étudie toute la nuit (Tikoun Leïl Shavouot). Sim'hat Torah clôt le cycle annuel de lecture : on danse avec les rouleaux de Torah et recommence immédiatement la lecture depuis Bereshit.`,
        keyPoints: [
          'Trois Regalim : Pessah, Shavouot, Souccot — pèlerinages au Temple',
          'Souccot : habiter dans la Souccah 7 jours, agiter les Arba\'at HaMinim',
          'Shavouot : don de la Torah — étude de nuit (Tikoun), lecture de Ruth',
          'Sim\'hat Torah : fin et début du cycle de lecture — danse avec la Torah',
          'Ushpizin : 7 hôtes spirituels accueillis chaque soir de Souccot',
        ],
        hebrewQuote: 'שִׂמְחוּ בְחַגְּכֶם',
        hebrewSource: 'Devarim 16:14',
        duration: 6,
      },
      {
        id: 'le2-5', moduleId: 2, order: 5,
        title: 'Hanoucca, Pourim et Tisha BeAv',
        subtitle: 'Lumière, joie et deuil dans le calendrier juif',
        content: `Hanoucca (Fête des Lumières, 25 Kislev) commémore la victoire des Maccabées sur les Séleucides (165 av. J.-C.) et le miracle de l'huile : un seul jour d'huile pure a alimenté la Ménorah du Temple pendant huit jours. On allume la Hanoukia chaque soir, en ajoutant une bougie.

Pourim (14 Adar) célèbre le salut du peuple juif sous Esther et Mordekhaï en Perse. C'est la fête la plus joyeuse : lecture du Rouleau d'Esther (Meguilat Esther), déguisements, repas festif, envoi de friandises (Michloah Manot) et dons aux pauvres (Matanot LaEvyonim).

Tisha BeAv (9 Av) est le jour de deuil le plus sombre : jeûne de 25 heures commémorant la destruction des deux Temples de Jérusalem (586 av. J.-C. et 70 ap. J.-C.), ainsi que d'autres catastrophes du peuple juif. Le Livre des Lamentations (Eikha) est lu dans l'obscurité.`,
        keyPoints: [
          'Hanoucca : miracle de l\'huile — 8 jours, al hanissim dans les prières',
          'Pourim : Meguilat Esther, Michloah Manot, déguisements, joie totale',
          'Tisha BeAv : destruction des deux Temples — le deuil national le plus grave',
          'Omer : 49 jours de compte entre Pessah et Shavouot',
          'Calendrier lunisolaire : mois lunaires, années bissextiles solaires',
        ],
        hebrewQuote: 'וְנַהֲפוֹךְ הוּא אֲשֶׁר יִשְׁלְטוּ הַיְּהוּדִים הֵמָּה בְּשֹׂנְאֵיהֶם',
        hebrewSource: 'Meguilat Esther 9:1',
        duration: 7,
      },
    ],
  },
  {
    id: 3, title: 'Talmud et Tradition Orale', description: 'La loi orale : Michna, Guemara et Halakha',
    icon: '🕍', color: '#5A7A5A',
    lessons: [
      {
        id: 'le3-1', moduleId: 3, order: 1,
        title: 'La Torah Orale',
        subtitle: 'Torah Shebe\'al Peh — la transmission orale depuis le Sinaï',
        content: `Le judaïsme rabbanite repose sur deux Torah reçues au Sinaï : la Torah écrite (Torah Shebikhtav) et la Torah orale (Torah Shebe'al Peh). Cette dernière, transmise de maître à disciple, interprète et complète la Torah écrite de manière continue.

La chaîne de transmission (Messorah) est décrite dans le traité Avot : "Moïse reçut la Torah du Sinaï et la transmit à Josué, Josué aux Anciens, les Anciens aux Prophètes, et les Prophètes la transmirent aux hommes de la Grande Assemblée." Cette chaîne assure la validité de chaque interprétation.

Rabbi Yehuda HaNassi ("Rebbe"), voyant que la mémoire risquait de se perdre avec les persécutions romaines, compila la Michna vers 200 de l'ère commune. Ce fut un acte révolutionnaire : mettre par écrit ce qui devait rester oral. La Michna devient le code de base de la loi juive.`,
        keyPoints: [
          'Torah Shebe\'al Peh : Torah orale complémentaire et coextensive',
          'Chaîne de transmission : Moïse → Josué → Anciens → Prophètes → Sages',
          'Rabbi Yehuda HaNassi compile la Michna vers 200 EC',
          'La Michna : 6 ordres (Sédarim), 63 traités, 525 chapitres',
          'La mise par écrit de l\'oral : nécessité historique controversée',
        ],
        hebrewQuote: 'מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ',
        hebrewSource: 'Pirké Avot 1:1',
        duration: 7,
      },
      {
        id: 'le3-2', moduleId: 3, order: 2,
        title: 'La Michna et la Guemara',
        subtitle: 'Du code de loi au dialogue millénaire',
        content: `La Michna est organisée en six Sédarim (ordres) : Zera'im (semences/agriculture), Moed (fêtes), Nachim (femmes/famille), Nezikine (dommages/civil), Kodachim (choses sacrées) et Tohorot (pureté). Chaque Seder est divisé en traités (Massekhot).

Après la Michna, deux académies continuèrent le débat : celle de Babylone (Académie de Soura et de Poumbédita) et celle d'Eretz Israël. Leurs discussions formèrent la Guemara. Le Talmud de Babylone (Talmud Bavli, compilé vers 500 EC) et le Talmud de Jérusalem (Talmud Yerushalmi, vers 400 EC) sont les deux grandes compilations.

Le Talmud Bavli est particulièrement volumineux et complexe. Il mêle Halakha (loi) et Aggadah (récits, paraboles, éthique). Son style dialectique — question, réponse, objection, contre-objection — a façonné la pensée juive pendant quinze siècles. Étudier le Talmud est en soi un acte religieux (Talmud Torah).`,
        keyPoints: [
          'Six Sédarim de la Michna : Zera\'im, Moed, Nachim, Nezikine, Kodachim, Tohorot',
          'Talmud Bavli (Babylone) et Talmud Yerushalmi : deux compilations complémentaires',
          'Guemara : discussion et analyse de la Michna par les Amoraïm',
          'Halakha + Aggadah : loi et récit s\'entrelacent dans le Talmud',
          'Talmud Torah : l\'étude comme acte religieux et valeur suprême',
        ],
        hebrewQuote: 'תַּלְמוּד תּוֹרָה כְּנֶגֶד כּוּלָּם',
        hebrewSource: 'Michna Péah 1:1',
        duration: 7,
      },
      {
        id: 'le3-3', moduleId: 3, order: 3,
        title: 'Halakha — La Loi Juive',
        subtitle: 'Le chemin pratique de la Torah',
        content: `Halakha (de la racine "halakh" — marcher) est le système légal juif qui régit tous les aspects de la vie quotidienne. Contrairement à d'autres systèmes légaux, la Halakha ne distingue pas le religieux du séculier : la manière de manger, de s'habiller, de se marier, de faire des affaires — tout est régi.

Les grands codificateurs ont tenté de synthétiser la Halakha. Le Rambam (Maïmonide) a écrit le Michné Torah, code en 14 volumes qui se veut exhaustif. Rabbi Joseph Karo a compilé le Choulhan Aroukh (1563), devenu le code de référence standard pour les sépharades. Les Achkenazim y ajoutèrent la Mappah de Rabbi Moïse Isserles (Rema).

La dynamique de la Halakha est celle de la Techouva (question halakhique) et du Teshuvot (responsa) : les rabbins de chaque génération répondent aux nouvelles questions de leur temps. Cette adaptabilité a permis à la Halakha de traverser les millénaires tout en restant pertinente.`,
        keyPoints: [
          'Halakha : "le chemin" — loi régissant tous les aspects de la vie',
          'Michné Torah de Maïmonide : 14 volumes, première codification systématique',
          'Choulhan Aroukh (1563) : code de référence sépharade-achkénaze',
          'Techouva/Responsa : adaptation continue aux nouvelles réalités',
          'Loi Orale comme dialogue vivant — pas une loi figée',
        ],
        hebrewQuote: 'הֲלָכָה לְמֹשֶׁה מִסִּינַי',
        hebrewSource: 'Michna Péah 2:6',
        duration: 6,
      },
      {
        id: 'le3-4', moduleId: 3, order: 4,
        title: 'Aggadah et Midrash',
        subtitle: 'La tradition narrative et exégétique juive',
        content: `L'Aggadah (récit, haggadah = narration) désigne l'ensemble des traditions non-légales du Talmud et des Midrachim : paraboles, récits bibliques amplifiés, éthique, sagesse, mystique. Elle représente environ un tiers du Talmud Bavli.

Le Midrach est une méthode d'interprétation qui explore les "interstices" du texte biblique — les non-dits, les contradictions apparentes, les répétitions. Le Midrach Raba commente les cinq livres de la Torah et les cinq Meguilot. Chaque mot de la Torah peut receler des sens multiples (PaRDeS : Pechat, Remez, Derouch, Sod).

Rabbi Nachman de Breslev, maître hassidique du 18e siècle, a élevé le conte hassidique (Sipouré Maassiot) au rang d'enseignement spirituel profond. Dans le judaïsme, raconter des histoires n'est pas un divertissement mais un mode de transmission de la sagesse divine.`,
        keyPoints: [
          'Aggadah : dimension narrative et éthique du Talmud (1/3 du Bavli)',
          'Midrach : interprétation créative comblant les lacunes du texte biblique',
          'PaRDeS : quatre niveaux d\'interprétation (Peshat, Remez, Derasch, Sod)',
          'Midrach Raba : commentaire des 5 livres et des 5 Meguilot',
          'Le conte hassidique : véhicule de la sagesse kabbalistique',
        ],
        hebrewQuote: 'אֵין מִקְרָא יוֹצֵא מִידֵי פְשׁוּטוֹ',
        hebrewSource: 'Talmud Bavli, Shabbat 63a',
        duration: 6,
      },
      {
        id: 'le3-5', moduleId: 3, order: 5,
        title: 'Les Sages — Tanaïm et Amoraïm',
        subtitle: 'Chaîne de transmission : les géants de la Tradition',
        content: `Les Tanaïm (1er-2e siècle EC) sont les Sages de la période de la Michna. Hillel et Chammaï, les deux grandes écoles, s'affrontent sur des questions légales — la règle est que la Halakha suit Beit Hillel, car "ils étaient doux et humbles et enseignaient les paroles des deux écoles." Rabbi Akiva développe une méthode herméneutique révolutionnaire.

Les Amoraïm (3e-5e siècle EC) sont les Sages de la Guemara. Rav et Chmouel fondent les grandes académies de Babylone. Rava et Abayé mènent des débats épiques qui forment l'ossature du Talmud Bavli. En Eretz Israël, Rabbi Yohanan de Tibériade organise le Talmud Yerushalmi.

Ces Sages n'étaient pas que des juristes : Rabbi Akiva mourant en martyr en récitant le Chema, Hillel accueillant des convertis potentiels avec bienveillance, Rabbi Siméon bar Yohaï se cachant dans une grotte pour étudier — leurs vies illuminent leurs enseignements.`,
        keyPoints: [
          'Tanaïm : Sages de la Michna — Hillel, Chammaï, Rabbi Akiva, Rabbi Méïr',
          'Beit Hillel vs Beit Chammaï : la douceur d\'Hillel l\'emporte en général',
          'Amoraïm : Sages de la Guemara — Rav, Chmouel, Rava, Abayé',
          'Les académies de Babylone : Soura, Poumbédita — centres du monde juif',
          '"Ces et ceux sont paroles du Dieu vivant" — pluralisme du débat talmudique',
        ],
        hebrewQuote: 'אֵלּוּ וָאֵלּוּ דִּבְרֵי אֱלֹהִים חַיִּים',
        hebrewSource: 'Talmud Bavli, Erouvin 13b',
        duration: 7,
      },
    ],
  },
  {
    id: 4, title: 'Kabbale et Mysticisme', description: 'La dimension ésotérique du judaïsme',
    icon: '🌟', color: '#7A5A9A',
    lessons: [
      {
        id: 'le4-1', moduleId: 4, order: 1,
        title: 'Les Origines de la Kabbale',
        subtitle: 'De la Merkava à la Kabbale — mystique juive ancienne',
        content: `La mystique juive a des racines très anciennes. La littérature de la Merkava (Char céleste) et de l'Héikhalot (Palais célestes), datant du 1er au 7e siècle, décrit l'ascension mystique vers le trône divin. Rabbi Akiva et ses compagnons entrent dans le PaRDeS — seul Rabbi Akiva en sort "en paix."

Le Sefer Yetsira (Livre de la Création), attribué à Abraham, décrit la création à travers 32 sentiers de sagesse : les 22 lettres de l'hébreu et les 10 Sefirot. Cette cosmologie mystique influencera toute la Kabbale ultérieure.

La Kabbale (de "Kabbal" — recevoir) émerge comme système cohérent en Provence au 12e siècle avec le Sefer HaBahir, puis explose à Gerone (Catalogne) avec le cercle de Nahmanide et ses disciples. La Kabbale présente un système mystique de la relation entre Dieu, Torah et le cosmos.`,
        keyPoints: [
          'Mystique de la Merkava : ascension vers le trône divin, PaRDeS',
          'Sefer Yetsira : 10 Sefirot + 22 lettres = 32 sentiers de création',
          'Kabbale : "réception" — tradition ésotérique transmise de maître à disciple',
          'Sefer HaBahir (12e s.) : premier texte kabbalistique systématique',
          'Cercle de Gerone : Ramban, Nachmanide et les premiers kabbalistes catalans',
        ],
        hebrewQuote: 'בְּשְׁלֹשִׁים וּשְׁתַּיִם נְתִיבוֹת פְּלִיאוֹת חָכְמָה חָקַק יָהּ',
        hebrewSource: 'Sefer Yetsira 1:1',
        duration: 7,
      },
      {
        id: 'le4-2', moduleId: 4, order: 2,
        title: 'Le Zohar et Rabbi Chimon bar Yohaï',
        subtitle: 'Le livre de la Splendeur — texte fondateur de la Kabbale',
        content: `Le Zohar (Splendeur) est le texte central de la Kabbale. Présenté comme un commentaire mystique de la Torah en araméen, il est attribué à Rabbi Chimon bar Yohaï (2e siècle), mais fut publié par Moïse de Léon en Espagne vers 1280. Certains savants voient en de Léon son auteur réel ; d'autres croient à une transmission ancienne.

Le Zohar révèle la dimension mystique de chaque récit biblique. Il décrit la vie divine interne à travers les dix Sefirot et leur interaction. Ein Sof (Sans Limite) est l'aspect inconnaissable de Dieu ; les Sefirot sont les manifestations par lesquelles Dieu se révèle et crée.

L'impact du Zohar fut immense : de sa publication jusqu'aux Safédiens du 16e siècle et aux Hassidim du 18e, il a façonné la spiritualité juive. Rabbi Chimon bar Yohaï est commémoré à Lag BaOmer, jour de sa mort réputée, à Méron (Galilée) avec des pèlerinages et des feux de joie.`,
        keyPoints: [
          'Zohar : "Splendeur" — commentaire mystique de la Torah en araméen',
          'Attribué à Rabbi Chimon bar Yohaï, compilé/écrit par Moïse de Léon (1280)',
          'Ein Sof : l\'infini divin inconnaissable — au-delà de toute description',
          'Dix Sefirot : manifestations divines — Keter, Hokhma, Bina... jusqu\'à Malkhout',
          'Lag BaOmer : commémoration de la mort de Rabbi Chimon — joie et feux',
        ],
        hebrewQuote: 'רָזָא דְכוּלְּהוּ דְּגֶשֶׁם אִיהוּ מַלְכוּת',
        hebrewSource: 'Zohar III, 256a',
        duration: 8,
      },
      {
        id: 'le4-3', moduleId: 4, order: 3,
        title: 'Les Sefirot et l\'Arbre de Vie',
        subtitle: 'La cartographie divine — anatomie du cosmos kabbalistique',
        content: `Les dix Sefirot forment l'Arbre de Vie (Ets Haïm), carte de la réalité divine et humaine. De haut en bas : Keter (Couronne), Hokhma (Sagesse), Bina (Intelligence), Hessed (Amour), Guevura (Rigueur), Tiferet (Beauté/Harmonie), Netsah (Victoire), Hod (Splendeur), Yessod (Fondement), Malkhout (Royauté).

Chaque Sefira a ses correspondances : Hessed = Abraham, Guevura = Isaac, Tiferet = Jacob, etc. L'Adam Kadmon (Homme Primordial) est l'image dans laquelle les Sefirot s'organisent. Le peuple d'Israël correspond à Malkhout, la Chekhina (présence divine féminine) qui doit être réunifiée avec les Sefirot supérieures.

L'objectif spirituel du kabbale est le Yihoud (unification) : par ses actes, l'homme peut réparer (Tikoun) les fractures dans le monde divin et hâter la rédemption. Chaque Mitsva accomplie avec intention (Kavana) contribue à ce Tikoun cosmique.`,
        keyPoints: [
          'Dix Sefirot : Keter → Malkhout — manifestations divines hiérarchisées',
          'Arbre de Vie : organisation des Sefirot, carte de la réalité divine',
          'Chekhina : présence divine féminine, Sefira de Malkhout',
          'Tikoun : réparation cosmique par les actes humains intentionnels',
          'Kavana : intention dans l\'accomplissement des Mitzvot — dimension mystique',
        ],
        hebrewQuote: 'עֲשָׂרָה סְפִירוֹת בְּלִימָה',
        hebrewSource: 'Sefer Yetsira 1:2',
        duration: 7,
      },
      {
        id: 'le4-4', moduleId: 4, order: 4,
        title: "Safed et l'École Lourianique",
        subtitle: "L'Ari et la révolution kabbalistique du 16e siècle",
        content: `Safed (Tsfat) en Galilée devient au 16e siècle le centre mondial de la Kabbale. Rabbi Joseph Karo (auteur du Choulhan Aroukh) y côtoie Rabbi Moïse Cordovero et Rabbi Isaac Louria (l'Ari, 1534-1572).

L'Ari, bien qu'il n'ait presque rien écrit, révolutionne la Kabbale à travers son disciple Rabbi Haïm Vital. La Kabbale lourianique introduit de nouveaux concepts : Tsimtsoum (contraction divine pour créer l'espace du monde), Chevirat HaKelim (brisure des vases cosmiques) et Tikoun Olam (réparation du monde).

Le Tsimtsoum est le fondement : Dieu se "contracte" pour laisser place au monde. Cette contraction crée le cosmos mais aussi sa fragmentation. Les étincelles divines (Nitsotsot) sont piégées dans les "écorces" (Klipot). Le rôle de l'homme est de "relever les étincelles" par ses actes saints et de réparer le cosmos brisé.`,
        keyPoints: [
          'Safed : capitale mondiale de la Kabbale au 16e siècle',
          'L\'Ari (Rabbi Isaac Louria) : génie mystique — enseignements transmis oralement',
          'Tsimtsoum : contraction divine créant l\'espace cosmique',
          'Chevirat HaKelim : brisure des vases — origine du mal et de la dispersion',
          'Tikoun Olam : réparation du monde — rôle cosmique de chaque Juif',
        ],
        hebrewQuote: 'תִּיקּוּן עוֹלָם בְּמַלְכוּת שַׁדַּי',
        hebrewSource: 'Alenou LeChhabeah',
        duration: 8,
      },
      {
        id: 'le4-5', moduleId: 4, order: 5,
        title: 'Le Hassidisme et le Baal Shem Tov',
        subtitle: 'La révolution intérieure du 18e siècle',
        content: `Rabbi Israel ben Eliezer, dit le Baal Shem Tov (BeSHT, 1698-1760), fonde le Hassidisme en Ukraine. Alors que l'élite rabbinique mettait l'accent sur l'étude talmudique, le BeSHT enseignait que la joie, la prière avec ferveur (Hitlahavout) et la proximité avec Dieu (Devekout) sont accessibles à tous, savants ou simples.

Le Hassidisme répand la Kabbale lourianique en termes simples et vivants. Le Tsaddik (juste, maître spirituel) est le pont entre le peuple et Dieu. Rabbi Shneour Zalman de Liadi (Alter Rebbe) fonde le Habad-Loubavitch, branche intellectuelle du Hassidisme, dont le texte fondateur est le Tanya.

Rabbi Nahman de Breslev (arrière-petit-fils du BeSHT) enseigne à travers des contes et des paraboles profondes. Sa pensée sur la foi simple (Emuna Peshuta) au cœur du doute et de la nuit spirituelle (Nitzotsot Nefech) reste profondément actuelle.`,
        keyPoints: [
          'Baal Shem Tov : joie, Devekout et Hitlahavout pour tous — démocratisation spirituelle',
          'Tsaddik : maître hassidique comme intercesseur et modèle de Devekout',
          'Habad-Loubavitch : Hassidisme intellectuel — Tanya de Rabbi Shneour Zalman',
          'Rabbi Nahman : contes profonds, foi dans l\'obscurité, Ouman Roch Hachana',
          'Hassidisme vs Mitnagdim (opposants) : grand débat du 18e siècle juif',
        ],
        hebrewQuote: 'דְּבֵקוּת בַּה\' אֱלֹהֶיךָ',
        hebrewSource: 'Devarim 13:5',
        duration: 7,
      },
    ],
  },
  {
    id: 5, title: 'Histoire du Peuple Juif', description: 'Quatre millénaires de mémoire et de résilience',
    icon: '🕎', color: '#9A5A3A',
    lessons: [
      {
        id: 'le5-1', moduleId: 5, order: 1,
        title: 'Les Patriarches et l\'Ère Biblique',
        subtitle: "D'Abraham à la monarchie unifiée",
        content: `L'histoire juive commence avec Abraham, appelé par Dieu à quitter Ur des Chaldéens pour Canaan, vers 2000 av. J.-C. selon la chronologie traditionnelle. Ses descendants — Isaac, Jacob (Israël), et les douze fils qui donnent leurs noms aux douze tribus — forment la structure du peuple.

L'esclavage en Égypte, l'Exode sous Moïse (vers 1250 av. J.-C.), la conquête de Canaan sous Josué et la période des Juges précèdent la monarchie. Saül, puis David (qui fait de Jérusalem sa capitale) et Salomon (qui construit le Premier Temple) représentent l'âge d'or biblique.

Après Salomon, le royaume se scinde : Israël au nord (10 tribus) et Juda au sud (2 tribus). Les Assyriens conquièrent et exilent le Royaume du Nord en 722 av. J.-C. — les "dix tribus perdues." Juda résiste deux siècles de plus jusqu'à la destruction du Premier Temple par Nabuchodonosor en 586 av. J.-C.`,
        keyPoints: [
          'Abraham : père de la foi, appel divin depuis Ur, Alliance de la circoncision',
          'Les 12 tribus d\'Israël : descendants des 12 fils de Jacob/Israël',
          'David et Jérusalem : capitale unifiée, psalmiste, ancêtre du Messie',
          'Salomon et le Premier Temple : apogée de la monarchie unifiée',
          'Chute du Royaume du Nord (722 av.) — Exil du Royaume du Sud (586 av.)',
        ],
        hebrewQuote: 'לֶךְ לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ',
        hebrewSource: 'Bereshit 12:1',
        duration: 7,
      },
      {
        id: 'le5-2', moduleId: 5, order: 2,
        title: 'Exil et Retour — Babylone et Second Temple',
        subtitle: 'La naissance du judaïsme rabbinique en diaspora',
        content: `L'Exil babylonien (586-538 av. J.-C.) est un tournant fondamental : pour la première fois, les Juifs doivent vivre leur religion sans Temple, sans sacrifice, en terre étrangère. Cette contrainte génère une révolution : la prière remplace le sacrifice, la synagogue remplace le Temple, le rabbi remplace le prêtre.

Cyrus le Grand (538 av. J.-C.) permet le retour. Esdras et Néhémie reconstruisent la communauté : Esdras lit publiquement la Torah devant tout le peuple rassemblé — acte fondateur de la lecture publique de la Torah à la synagogue. Le Second Temple est construit (516 av. J.-C.).

La période du Second Temple voit l'émergence de courants distincts : Pharisiens (ancêtres du judaïsme rabbinique), Sadducéens (élite sacerdotale), Esséniens (communauté monastique de Qumran), Zélotes (résistants armés). La destruction du Second Temple par Titus (70 EC) est le traumatisme qui accouche du judaïsme rabbinique.`,
        keyPoints: [
          'Exil babylonien : naissance du judaïsme de la prière et de la synagogue',
          'Retour sous Cyrus : Esdras et Néhémie reconstruisent la communauté',
          'Lecture publique de la Torah par Esdras : fondation de la synagogue',
          'Courants du Second Temple : Pharisiens, Sadducéens, Esséniens, Zélotes',
          'Destruction du Temple par Titus (70 EC) — traumatisme fondateur',
        ],
        hebrewQuote: 'עַל נַהֲרוֹת בָּבֶל שָׁם יָשַׁבְנוּ גַּם בָּכִינוּ',
        hebrewSource: 'Tehilim 137:1',
        duration: 7,
      },
      {
        id: 'le5-3', moduleId: 5, order: 3,
        title: "L'Âge d'Or en Espagne et au Moyen Âge",
        subtitle: 'La floraison sépharade et les persécutions achkénazes',
        content: `La période médiévale est à la fois l'âge d'or et un siècle de souffrances. En Al-Andalus (Espagne musulmane, 8e-12e siècles), les Juifs connaissent une période de relative tolérance et de floraison culturelle. Saadia Gaon, Rashi (France), Maïmonide (Espagne-Égypte), Yehuda Halévi composent leurs œuvres majeures.

Les Croisades (fin 11e s.) inaugurent les massacres de communautés juives rhénanes. La Légende Noire : accusations de meurtre rituel (Blood Libel), profanation d'hosties, empoisonnement des puits lors de la Peste Noire. En 1290, expulsion d'Angleterre ; en 1306, de France ; en 1391, massacres en Espagne ; en 1492, expulsion d'Espagne par les Rois Catholiques.

Les Juifs expulsés d'Espagne (Sépharades) s'établissent en Italie, Empire ottoman, Pays-Bas, Afrique du Nord. Les Juifs ashkénazes se concentrent en Europe de l'Est, particulièrement en Pologne-Lituanie, où ils développent un monde culturel d'une richesse extraordinaire.`,
        keyPoints: [
          'Âge d\'Or sépharade : Al-Andalus, Maïmonide, Yehuda Halévi, Rashi',
          'Croisades et Judengassen : début des persécutions systématiques',
          'Accusations de Blood Libel, profanation d\'hosties — antisémitisme médiéval',
          'Expulsion d\'Espagne 1492 : diaspora sépharade en Méditerranée',
          'Pologne-Lituanie : nouveau centre du judaïsme ashkénaze',
        ],
        hebrewQuote: 'בְּכָל דּוֹר וָדוֹר עוֹמְדִים עָלֵינוּ לְכַלּוֹתֵנוּ',
        hebrewSource: 'Haggadah de Pessah',
        duration: 7,
      },
      {
        id: 'le5-4', moduleId: 5, order: 4,
        title: 'La Shoah — Catastrophe et Mémoire',
        subtitle: 'HaShoah : le génocide des Juifs d\'Europe',
        content: `La Shoah (catastrophe) est le génocide systématique de six millions de Juifs européens par le régime nazi (1933-1945), soit deux tiers des Juifs d'Europe et un tiers de tous les Juifs du monde. Auschwitz-Birkenau, Treblinka, Sobibor — les camps d'extermination incarnent le mal absolu.

La Shoah pose des questions théologiques déchirantes : "Où était Dieu ?" Rabbi Menachem Ziemba à Varsovie, Rav Shapiro de Piaseczno dans le Ghetto, Elie Wiesel, Primo Levi — des témoignages bouleversants. La question de la foi après la Shoah divise les penseurs juifs : Emil Fackenheim propose une "614e Mitzvot" — ne pas donner une victoire posthume à Hitler en abandonnant le judaïsme.

Yom HaShoah (27 Nisan) est le jour commémoratif instauré par l'État d'Israël. Yad Vashem à Jérusalem préserve la mémoire. La promesse "Zachor" (Souviens-toi) est un impératif religieux et moral.`,
        keyPoints: [
          'Shoah : 6 millions de victimes — génocide industriel, 1933-1945',
          'Question théologique : foi et souffrance — Elie Wiesel, Emil Fackenheim',
          '"614e Mitzvot" de Fackenheim : ne pas abandonner le judaïsme après la Shoah',
          'Yad Vashem et Yom HaShoah : mémoire institutionnalisée',
          'Zachor : commandement du souvenir — fondement de la mémoire juive',
        ],
        hebrewQuote: 'זָכוֹר אֵת אֲשֶׁר עָשָׂה לְךָ עֲמָלֵק',
        hebrewSource: 'Devarim 25:17',
        duration: 8,
      },
      {
        id: 'le5-5', moduleId: 5, order: 5,
        title: "L'État d'Israël et le Sionisme",
        subtitle: 'Médina Israel : le retour à Sion après deux mille ans',
        content: `Le sionisme moderne naît avec Theodor Herzl (1860-1904), journaliste viennois traumatisé par l'Affaire Dreyfus. Son livre "L'État Juif" (1896) et le Premier Congrès sioniste de Bâle (1897) lancent le mouvement. La Déclaration Balfour (1917) exprime le soutien britannique à "l'établissement d'un foyer national juif en Palestine."

La Shoah accélère la reconnaissance internationale. Le 14 mai 1948, David Ben Gourion proclame l'indépendance de l'État d'Israël, premier État juif depuis 2000 ans. Yom HaAtsmaout (Jour de l'Indépendance, 5 Iyar) est une fête nationale et religieuse pour les sionistes religieux.

Le rapport entre religion et État divise le monde juif : pour les Haredim traditionnels, un État sans Messie est illégitime ou neutre ; pour le sionisme religieux (Rav Kook), l'État est "les prémices de la Rédemption divine" ; pour les sionistes laïcs, c'est une solution nationale. Le débat reste vif.`,
        keyPoints: [
          'Herzl et Bâle 1897 : fondation du mouvement sioniste moderne',
          'Déclaration Balfour 1917 : soutien britannique au foyer national juif',
          'Indépendance d\'Israël 1948 : Ben Gourion et la renaissance nationale',
          'Rav Kook : État d\'Israël comme "prémices de la Rédemption"',
          'Aliya : émigration en Israël — idéal sioniste et défi contemporain',
        ],
        hebrewQuote: 'אִם תִּרְצוּ אֵין זוֹ אַגָּדָה',
        hebrewSource: 'Theodor Herzl, AltneuLand',
        duration: 7,
      },
    ],
  },
  {
    id: 6, title: 'Les Prophètes', description: 'Nevim — la voix divine dans l\'histoire',
    icon: '📿', color: '#3A7A8A',
    lessons: [
      {
        id: 'le6-1', moduleId: 6, order: 1,
        title: 'La Prophétie en Israël',
        subtitle: "Navi — le messager divin dans la tradition hébraïque",
        content: `Le Navi (prophète) en Israël n'est pas principalement un "devin" du futur mais un porte-parole de Dieu (Na-bi = celui qui parle au nom de). Sa mission est de rappeler le peuple à sa vocation, de dénoncer l'injustice sociale et l'idolâtrie, et d'annoncer les conséquences des choix moraux.

La prophétie hébraïque est unique : elle interpelle le roi comme le plus humble des sujets. Élie affronte Achab sur l'affaire de la vigne de Naboth. Nathan dénonce David pour l'affaire de Bethsabée avec la parabole de la brebis. Le prophète est le conscience morale de la nation, et personne n'en est exempt.

Maimonide identifie des niveaux de prophétie. Moïse est le prophète suprême — "face à face, bouche à bouche." Les autres prophètes reçoivent leurs révélations en visions et en rêves. La prophétie aurait cessé après les derniers prophètes bibliques, attendant le temps messianique.`,
        keyPoints: [
          'Nabi : porte-parole divin — interpeller, pas principalement prédire',
          'Prophètes sociaux : dénoncer l\'injustice (Amos, Isaïe, Michée)',
          'Moïse : prophète suprême — prophétie "face à face"',
          'Élie : modèle du prophète solitaire défiant le pouvoir',
          'Cessation de la prophétie après les derniers prophètes — Maïmonide',
        ],
        hebrewQuote: 'כִּי אִם גָּלָה סוֹדוֹ אֶל עֲבָדָיו הַנְּבִיאִים',
        hebrewSource: 'Amos 3:7',
        duration: 6,
      },
      {
        id: 'le6-2', moduleId: 6, order: 2,
        title: 'Isaïe — Le Grand Prophète',
        subtitle: "Yeshayahou : vision de justice et de paix messianique",
        content: `Le livre d'Isaïe est le plus ample des prophètes majeurs. Le Deutéro-Isaïe (40-66) offre les consolations les plus sublimes de la Bible hébraïque. Les exégètes distinguent un Premier Isaïe (1-39, 8e siècle av. J.-C.) et un Deutéro-Isaïe (40-66, exil babylonien).

Isaïe présente une vision de justice sociale radicale : "Apprenez à faire le bien, cherchez la justice, venez en aide à l'opprimé, défendez l'orphelin, plaidez pour la veuve." La religion sans éthique est rejetée : "Je hais vos sacrifices, je n'en veux pas — lavez-vous, purifiez-vous !"

La vision messianique d'Isaïe est parmi les plus belles de la Bible : "Il jugera les nations... ils forgeront leurs épées en socs de charrue... nation contre nation ne lèvera plus l'épée." Ces versets ornent le bâtiment des Nations Unies à New York. Le quatrième poème du Serviteur souffrant (52:13-53:12) est au cœur de débats interreligieux.`,
        keyPoints: [
          'Premier Isaïe (8e s.) : critique sociale et politique — justice avant sacrifice',
          'Deutéro-Isaïe : consolation pour l\'exil — "Consolez, consolez mon peuple"',
          'Vision messianique : épées en socs de charrue, paix universelle',
          'Serviteur souffrant : Israël, figure prophétique ou individuelle ?',
          '"Lev HaShana" d\'Isaïe : texte fondateur de la conscience sociale juive',
        ],
        hebrewQuote: 'וְכִתְּתוּ חַרְבוֹתָם לְאִתִּים',
        hebrewSource: 'Yeshayahou 2:4',
        duration: 7,
      },
      {
        id: 'le6-3', moduleId: 6, order: 3,
        title: 'Jérémie et Ézéchiel',
        subtitle: "Prophètes de la destruction et de la reconstruction",
        content: `Jérémie (6e siècle av. J.-C.) est le prophète le plus personnel de la Bible. Ses "Confessions" révèlent ses tourments intérieurs : contraint d'annoncer des vérités déchirantes (la destruction de Jérusalem), il est incompris, emprisonné, jeté dans une citerne. Ses Lamentations (Eikha) sont le texte liturgique de Tisha BeAv.

Jérémie annonce une Nouvelle Alliance : "Je mettrai ma Torah dans leur être intérieur, je l'écrirai dans leur cœur" — une religion intériorisée, non seulement externe. Il encourage les exilés à Babylone de prier pour la paix de la ville où ils vivent — base de la théologie de la diaspora.

Ézéchiel, prophète en exil à Babylone, reçoit des visions extraordinaires : le Char divin (Merkava), les quatre créatures vivantes, la résurrection des ossements desséchés. Il annonce le retour en Terre d'Israël et la reconstruction du Temple. Sa vision du Temple futur (40-48) inspire les traditions messianique et mystique.`,
        keyPoints: [
          'Jérémie : prophète des Lamentations — souffrance personnelle et nationale',
          'Nouvelle Alliance : Torah inscrite dans le cœur — religion intériorisée',
          '"Chercher la paix de la cité" : fondement de la théologie de la diaspora',
          'Ézéchiel : visions de la Merkava, résurrection des ossements desséchés',
          'Vision du Temple d\'Ézéchiel : fondement de l\'espoir messianique',
        ],
        hebrewQuote: 'וְנָתַתִּי אֶת תּוֹרָתִי בְּקִרְבָּם וְעַל לִבָּם אֶכְתְּבֶנָּה',
        hebrewSource: 'Yirmiyahou 31:32',
        duration: 7,
      },
      {
        id: 'le6-4', moduleId: 6, order: 4,
        title: 'Les Douze Petits Prophètes',
        subtitle: "Treize livres, une voix prophétique unifiée",
        content: `Les Trei Asar (Douze Petits Prophètes) forment un seul livre dans le canon hébraïque. Petits par la taille, ils sont grands par l'intensité. Amos (8e s.) est le prophète social par excellence : bouvier et tailleur de sycomores, il dénonce les riches qui "vendent le juste pour de l'argent."

Osée utilise la métaphore de son mariage douloureux pour décrire la relation entre Dieu et Israël : infidélité, souffrance, pardon et réconciliation. Michée formule la synthèse morale la plus concise : "Il t'a montré, ô homme, ce qui est bien, ce que l'Éternel demande de toi : pratiquer la justice, aimer la bonté, marcher humblement avec ton Dieu."

Jonas, unique en son genre, est une leçon universaliste : le prophète réticent, envoyé à Ninive (capitale assyrienne !), doit apprendre que la miséricorde divine s'étend au-delà d'Israël. Lu à Yom Kippour Minha, ce livre enseigne que Dieu peut pardonner à tous ceux qui se repentent.`,
        keyPoints: [
          'Amos : justice sociale radicale — sacrifices sans justice sont rejetés',
          'Osée : amour divin blessé mais fidèle, métaphore du mariage',
          'Michée 6:8 : "justice, bonté, humilité" — synthèse éthique de la Torah',
          'Jonas : universalisme prophétique — Dieu se soucie de Ninive aussi',
          'Habacuc : foi dans l\'adversité — "le juste vivra par sa foi" (2:4)',
        ],
        hebrewQuote: 'כִּי אִם עֲשׂוֹת מִשְׁפָּט וְאַהֲבַת חֶסֶד וְהַצְנֵעַ לֶכֶת עִם אֱלֹהֶיךָ',
        hebrewSource: 'Mikha 6:8',
        duration: 6,
      },
      {
        id: 'le6-5', moduleId: 6, order: 5,
        title: "Espoir Messianique dans les Prophètes",
        subtitle: "L'attente du Messie et de l'ère de paix universelle",
        content: `L'espoir messianique est au cœur de la pensée prophétique. Le Messie (Machi'ah = l'Oint) sera un descendant de David, roi juste qui établira la paix universelle, rassemblera les exilés et renouvellera l'Alliance. Contrairement au christianisme, le judaïsme n'attend pas un Dieu incarné mais un être humain exceptionnel.

Maïmonide définit le Messie comme un roi qui étudiera la Torah et en respectera les commandements, combattra les guerres saintes et reconstruira le Temple. Si quelqu'un fait tout cela mais meurt avant, ce n'était pas le Messie. Selon lui, à l'ère messianique, le monde fonctionnera selon ses lois naturelles — pas de miracles spectaculaires.

La conception du Tikkoun Olam (réparation du monde) dans le judaïsme contemporain a évolué pour désigner tout engagement en faveur de la justice sociale, de la paix et de l'amélioration du monde — sécularisation d'un concept théologique profond.`,
        keyPoints: [
          'Machi\'ah : descendant de David, roi humain — pas de divinité incarnée',
          'Rassemblement des exilés, reconstruction du Temple, paix universelle',
          'Maïmonide : ère messianique selon la nature, pas de miracles spectaculaires',
          'Debats : Messie fils de Joseph (guerrier) et Messie fils de David (roi)',
          'Tikkoun Olam contemporain : de la cosmologie kabbalistique à l\'action sociale',
        ],
        hebrewQuote: 'הִנֵּה יָמִים בָּאִים נְאֻם יְהוָה וַהֲקִמֹתִי לְדָוִד צֶמַח צַדִּיק',
        hebrewSource: 'Yirmiyahou 23:5',
        duration: 7,
      },
    ],
  },
  {
    id: 7, title: 'Grandes Figures du Judaïsme', description: 'Les géants intellectuels et spirituels',
    icon: '👑', color: '#8A7A3A',
    lessons: [
      {
        id: 'le7-1', moduleId: 7, order: 1,
        title: 'Maïmonide — Le Rambam',
        subtitle: 'Rabbi Moïse ben Maïmon : le plus grand codificateur',
        content: `Rabbi Moïse ben Maïmon (Rambam, 1138-1204), né à Cordoue, est universellement considéré comme le plus grand rabbin médiéval. Médecin du sultan Saladin au Caire, il a révolutionné la pensée juive sur trois fronts : halakhique, philosophique et éthique.

Son Michné Torah est la première codification systématique et exhaustive de toute la Halakha en hébreu clair — sans références aux sources, pour que chacun puisse connaître la loi directement. Son Guide des Égarés (Moreh Nevoukhim) réconcilie la philosophie aristotélicienne et la foi juive, et a influencé Aquin et la scolastique chrétienne.

Les 13 Principes de Foi du Rambam sont devenus (sous forme de l'hymne Yigdal) le credo le plus communément accepté du judaïsme : unicité divine, incorporéité, éternité, primauté prophétique de Moïse, Torah divine, prophétie, providence divine, retribution, venue du Messie, résurrection.`,
        keyPoints: [
          'Michné Torah : 14 volumes, toute la Halakha en hébreu clair et systématique',
          'Guide des Égarés : réconcilier Aristote et Torah — influence sur Aquin',
          '13 Principes de Foi : credo du judaïsme médiéval, base du Yigdal',
          'Médecin de Saladin : science et Torah unifiées dans la même personne',
          '"Du Caire à Moïse, il n\'y eut point comme Moïse" — épitaphe',
        ],
        hebrewQuote: 'מִמֹּשֶׁה עַד מֹשֶׁה לֹא קָם כְּמֹשֶׁה',
        hebrewSource: 'Épitaphe du Rambam',
        duration: 7,
      },
      {
        id: 'le7-2', moduleId: 7, order: 2,
        title: 'Rachi — Le Grand Commentateur',
        subtitle: 'Rabbi Chlomo Yitshaki : l\'exégète universel',
        content: `Rabbi Chlomo Yitshaki (Rachi, 1040-1105), né à Troyes en Champagne, est le commentateur le plus lu de la Torah et du Talmud. Ses commentaires sont imprimés depuis 500 ans autour du texte biblique et talmudique — impossible de lire un texte hébreu traditionnel sans Rachi.

Rachi vise la clarté du sens simple (Peshat) tout en intégrant des Midrachim sélectionnés. Sa langue est belle, concise, et souvent poétique. Il utilise parfois des mots en vieux français (La'az) quand l'hébreu manque de terme adéquat — précieux témoin de la langue médiévale.

Ses petits-fils, les Tosafistes (Ba'alei HaTosafot), prolongent et parfois questionnent Rachi. Cette relation grand-père/petits-fils intellectuels est fondatrice du modèle d'étude ashkénaze : le texte de Rachi entouré des Tosafot. Même Maïmonide, qui ne connaissait pas Rachi, est dans une tradition parallèle.`,
        keyPoints: [
          'Rachi : commentateur universel de Torah et Talmud depuis le 11e siècle',
          'Peshat (sens littéral) comme point de départ — mais sélection de Midrachim',
          'Tosafistes : petits-fils intellectuels prolongeant et questionnant Rachi',
          'La\'az : mots en vieux français dans Rachi — témoignage linguistique',
          'Pas de page de Talmud standard sans Rachi — tradition ininterrompue',
        ],
        hebrewQuote: 'לְפִי שֶׁאֵין הַמִּקְרָא יוֹצֵא מִידֵי פְשׁוּטוֹ',
        hebrewSource: 'Rachi, Commentaire sur Bereshit 3:8',
        duration: 6,
      },
      {
        id: 'le7-3', moduleId: 7, order: 3,
        title: "Nahmanide et l'École de Gérone",
        subtitle: 'Le Ramban : mystique, halakhiste et commentateur',
        content: `Rabbi Moïse ben Nahman (Ramban, 1194-1270), né à Gérone en Catalogne, est l'une des figures les plus complexes du judaïsme médiéval. À la fois halakhiste rigoureux, kabbaliste pionnier et commentateur indépendant, il ose critiquer même Maïmonide quand il le juge nécessaire.

Son commentaire de la Torah marie le Peshat, le Derash et la Kabbale. Il défend le judaïsme lors de la Controverse de Barcelone (1263) contre les apostats chrétiens, devant le roi Jaime Ier d'Aragon, avec une franchise remarquable. Ses écrits de cette disputation sont d'une audace unique pour l'époque.

Contraint à l'exil après la controverse, il s'installe à Acre en Eretz Israël, où il meurt. Sa lettre à son fils, écrite après l'exil, est l'un des textes éthiques les plus beaux de la littérature hébraïque — un classique de la mussar (littérature éthique).`,
        keyPoints: [
          'Ramban : halakhiste, kabbaliste et commentateur — mariage unique de traditions',
          'Controverse de Barcelone 1263 : défense courageuse du judaïsme devant le roi',
          'Critique de Maïmonide : indépendance intellectuelle même face aux géants',
          'Aliya au 13e s. : pionnier de l\'établissement en Eretz Israël',
          'Iggeret HaRamban : lettre éthique à son fils — classique de la mussar',
        ],
        hebrewQuote: 'הַצְנֵעַ לֶכֶת עִם אֱלֹהֶיךָ',
        hebrewSource: 'Iggeret HaRamban',
        duration: 7,
      },
      {
        id: 'le7-4', moduleId: 7, order: 4,
        title: 'Rabbi Yohanan ben Zakkaï et la Survie',
        subtitle: "La refondation du judaïsme après la destruction du Temple",
        content: `Rabbi Yohanan ben Zakkaï est l'architecte du judaïsme post-temple. Selon la tradition, il se fit transporter hors de Jérusalem assiégée dans un cercueil, convainquit le général Vespasien, et demanda non la victoire militaire mais : "Donne-moi Yavné et ses sages." Cette demande a sauvé le judaïsme.

À Yavné, il recrée le Sanhédrin (tribunal suprême), systématise la prière comme substitut au sacrifice, et adapte de nombreux rituels templiers à la diaspora. "L'amour désintéressé (Guemilout Hassadim) remplace le sacrifice" — transformation fondamentale.

Ce moment de Yavné est un modèle de résilience juive : face à la catastrophe la plus totale (destruction du Temple, fin de l'État), les Sages ne désespèrent pas mais réinventent le judaïsme pour qu'il survive sans terre et sans Temple. Cette capacité d'adaptation a permis la survie de deux millénaires.`,
        keyPoints: [
          '"Donne-moi Yavné" : sauver les sages plutôt que l\'armée — priorité de l\'étude',
          'Yavné : recréer le Sanhédrin, systématiser la prière post-sacrificielle',
          'Guemilout Hassadim remplace le sacrifice : éthique au cœur de la religion',
          'Modèle de résilience : réinventer plutôt que désespérer',
          'Académie comme garantie de survie — précédent pour toute diaspora',
        ],
        hebrewQuote: 'תְּנוּ לִי יַבְנֶה וַחֲכָמֶיהָ',
        hebrewSource: 'Talmud Bavli, Guittin 56a',
        duration: 6,
      },
      {
        id: 'le7-5', moduleId: 7, order: 5,
        title: 'Abraham Joshua Heschel et la Pensée Contemporaine',
        subtitle: 'Heschel : philosophie de la profondeur et engagement social',
        content: `Abraham Joshua Heschel (1907-1972) est le philosophe juif américain le plus influent du 20e siècle. Né à Varsovie dans une famille hassidique, il échappe à la Shoah et enseigne au Jewish Theological Seminary de New York. Son œuvre unit la rigueur philosophique à la profondeur spirituelle hassidique.

Son concept central est le "Divine Pathos" : Dieu n'est pas indifférent à l'histoire humaine mais se soucie, s'indigne, aime. La prière n'est pas d'abord demande mais "réponse" — nous répondons à la sollicitation divine. Son "Man is Not Alone" et "God in Search of Man" reformulent la relation Dieu-homme.

Heschel marcha aux côtés de Martin Luther King Jr. à Selma (1965) en luttant pour les droits civiques. Il déclara : "En marchant, je priais avec mes jambes." Ce lien entre foi juive et engagement social est son héritage le plus vivant dans le judaïsme contemporain.`,
        keyPoints: [
          'Divine Pathos : Dieu se soucie, s\'indigne — pas un Dieu indifférent',
          'Prière comme réponse à la sollicitation divine',
          'Sabbath : "cathédrale dans le temps" — sanctification du temps',
          'Selma 1965 : "prier avec les jambes" — foi et justice sociale unies',
          'Pont entre tradition hassidique et philosophie contemporaine',
        ],
        hebrewQuote: 'לֹא עַל הַלֶּחֶם לְבַדּוֹ יִחְיֶה הָאָדָם',
        hebrewSource: 'Devarim 8:3',
        duration: 7,
      },
    ],
  },
  {
    id: 8, title: "Éthique Juive", description: "Mitzvot, Tikkoun Olam et valeurs fondamentales",
    icon: '⚖️', color: '#4A8A6A',
    lessons: [
      {
        id: 'le8-1', moduleId: 8, order: 1,
        title: 'Tsedaka — Justice et Générosité',
        subtitle: "Obligation de partage : au-delà de la charité",
        content: `En hébreu, Tsedaka (souvent traduit par "charité") vient de Tsedek (justice). Dans la pensée juive, donner aux pauvres n'est pas un acte de générosité gracieux mais une obligation de justice : les biens que l'on possède ne nous appartiennent pas totalement — une part revient à ceux qui sont dans le besoin.

Maïmonide établit huit degrés de Tsedaka, du plus bas (donner à contrecœur) au plus élevé : aider quelqu'un à trouver un travail ou à créer sa propre entreprise, pour qu'il ne soit plus dans le besoin. La Tsedaka la plus noble préserve la dignité du bénéficiaire.

La Pea (coin du champ laissé pour les pauvres), le Leket (glanage), le Maaser (dîme) et le Shmitta (année sabbatique remettant les dettes) forment un système économique de redistribution. "Tu n'auras pas de pauvre parmi toi" est l'idéal ; les lois de Tsedaka sont les moyens pratiques.`,
        keyPoints: [
          'Tsedaka : justice, pas charité — obligation légale et morale',
          'Huit degrés de Tsedaka selon Maïmonide — l\'autonomisation au sommet',
          'Pea, Leket, Maaser : redistribution agricole institutionnalisée',
          'Dignité du bénéficiaire : donner sans humilier est une exigence',
          '"Tu n\'auras pas de pauvre" : idéal social de la Torah',
        ],
        hebrewQuote: 'צֶדֶק צֶדֶק תִּרְדֹּף',
        hebrewSource: 'Devarim 16:20',
        duration: 6,
      },
      {
        id: 'le8-2', moduleId: 8, order: 2,
        title: "Kavod HaBriot — La Dignité Humaine",
        subtitle: "Honorer l'image divine en tout être humain",
        content: `Kavod HaBriot (dignité des créatures) est l'un des principes fondamentaux de l'éthique juive. Chaque être humain, créé à l'image divine (Tselem Elohim), possède une dignité inaliénable. La Michna l'exprime avec force : "Quiconque détruit une seule âme, c'est comme s'il avait détruit un monde entier. Quiconque sauve une seule âme, c'est comme s'il avait sauvé un monde entier."

Cette valeur est si puissante qu'elle peut parfois primer sur des ordonnances rabbiniques : "Grande est la dignité humaine car elle repousse même un interdit rabbinique." La pudeur, le respect de la vie privée, ne pas humilier en public (Laban Panim) — tout cela découle du Kavod HaBriot.

La loi de Lo Taamod al Dam Re'eakha (ne pas rester passif devant le sang de ton prochain) impose l'obligation active de sauver des vies. La tradition de Pikouah Nefesh (sauver une vie) prime sur presque tous les commandements, y compris les plus sacrés.`,
        keyPoints: [
          'Tselem Elohim : chaque humain porte l\'image divine — dignité absolue',
          '"Détruire une âme = détruire un monde" (Michna Sanhédrin 4:5)',
          'Kavod HaBriot prime parfois sur les ordonnances rabbiniques',
          'Laban Panim : ne jamais humilier publiquement — équivaut à meurtre symbolique',
          'Pikouah Nefesh : sauver une vie prime sur presque tous les Mitzvot',
        ],
        hebrewQuote: 'כָּל הַמְאַבֵּד נֶפֶשׁ אַחַת מַעֲלֶה עָלָיו הַכָּתוּב כְּאִלּוּ אִבֵּד עוֹלָם מָלֵא',
        hebrewSource: 'Michna Sanhédrin 4:5',
        duration: 7,
      },
      {
        id: 'le8-3', moduleId: 8, order: 3,
        title: "Emeth et Chalom — Vérité et Paix",
        subtitle: "Les piliers éthiques de la société juive",
        content: `Trois valeurs fondent le monde selon les Sages : "Le monde repose sur trois choses — la vérité (Emeth), la justice (Din) et la paix (Chalom)" (Pirké Avot 1:18). Ces trois valeurs sont interdépendantes : pas de paix sans justice, pas de justice sans vérité.

L'Emeth (vérité) est le "sceau de Dieu" selon le Talmud. Le mensonge est interdit même pour économiser de l'argent. Pourtant, le Talmud autorise le "mensonge blanc" pour préserver la paix conjugale ou la dignité humaine — nuance éthique raffinée.

Rodeph Chalom (poursuivre la paix) est une obligation active. Hillel enseigne : "Sois de ceux qui aiment la paix et la poursuivent." La Guemara rapporte qu'Aaron le Grand Prêtre inventait parfois des réconciliations pour restaurer la paix entre amis brouillés — et ce "mensonge de paix" était approuvé.`,
        keyPoints: [
          '"Le monde repose sur vérité, justice et paix" — Pirké Avot 1:18',
          'Emeth : sceau de Dieu — interdit du mensonge, mais exceptions pour la paix',
          'Rodeph Chalom : obligation active de "poursuivre" la paix',
          'Aaron : modèle d\'artisan de paix, même par des récits inventés',
          'Équilibre éthique : vérité vs paix — le Talmud nuance sans dogmatisme',
        ],
        hebrewQuote: 'עַל שְׁלֹשָׁה דְבָרִים הָעוֹלָם עוֹמֵד עַל הָאֱמֶת וְעַל הַדִּין וְעַל הַשָּׁלוֹם',
        hebrewSource: 'Pirké Avot 1:18',
        duration: 6,
      },
      {
        id: 'le8-4', moduleId: 8, order: 4,
        title: "Lachon Hara — La Garde de la Parole",
        subtitle: "L'éthique de la parole dans la tradition juive",
        content: `Le Lachon Hara (mauvaise langue) est le péché de la médisance et de la calomnie. Le Chofets Haïm (Rabbi Israel Meïr Kagan, 1838-1933) a consacré toute sa vie à enseigner les lois de la parole, compilées dans son œuvre éponyme. Il démontre que la plupart des gens violent ces lois quotidiennement sans s'en rendre compte.

Le Lachon Hara est interdit même s'il est vrai (c'est la médisance). La Motsi Chem Ra (fausse diffamation) est encore plus grave. Même écouter du Lachon Hara est interdit (Kabbalat Lachon Hara). L'image utilisée est celle des plumes d'un oreiller dispersées au vent — impossible de récupérer des paroles une fois prononcées.

La parole est si puissante en judaïsme que la Torah est née par la Parole divine. L'homme, créé à l'image de Dieu, est défini par les Sages comme "un être parlant" (Medaber). Utiliser la parole pour blesser est une trahison de notre nature la plus profonde.`,
        keyPoints: [
          'Lachon Hara : médisance vraie mais nuisible — interdit même si véridique',
          'Motsi Chem Ra : fausse diffamation — plus grave encore',
          'Chofets Haïm : maître des lois de la parole, modèle de sainteté',
          'Les plumes dispersées : paroles impossibles à récupérer',
          'L\'homme comme "être parlant" — la parole est sa dignité spécifique',
        ],
        hebrewQuote: 'מִי הָאִישׁ הֶחָפֵץ חַיִּים אֹהֵב יָמִים לִרְאוֹת טוֹב',
        hebrewSource: 'Tehilim 34:13 — titre du livre "Chofets Haïm"',
        duration: 6,
      },
      {
        id: 'le8-5', moduleId: 8, order: 5,
        title: "Lov et Anavah — Bonté et Humilité",
        subtitle: "Les vertus cardinales de l'éthique juive",
        content: `Guemilout Hassadim (actes de bonté désintéressés) est supérieur à la Tsedaka selon les Sages : il peut être accompli envers les vivants et les morts, envers les riches et les pauvres, et non seulement par l'argent mais par le corps et l'âme. L'accompagnement des mourants (Chevra Kadisha), les visites aux malades (Bikour Holim), la consolation des endeuillés (Nihum Aveilim) en sont les expressions.

L'Anavah (humilité) est la "mère de toutes les vertus" selon Orchot Tsadikim (Voies des Justes). Moïse, le plus grand prophète, est décrit comme "l'homme le plus humble qui fût sur la terre." L'humilité n'est pas l'effacement de soi mais la juste conscience de sa place.

La Mussar (littérature éthique) est un courant développé surtout par Rabbi Israël Salanter (19e s.) qui propose un travail systématique sur les traits de caractère (Middot). Ce mouvement insiste que la Torah doit transformer le caractère : la connaissance intellectuelle ne suffit pas.`,
        keyPoints: [
          'Guemilout Hassadim : actes de bonté corprels et spirituels — supérieur à Tsedaka',
          'Bikour Holim, Nihum Aveilim, Levayat HaMet : pratiques concrètes de Hassadim',
          'Anavah : humilité — Moïse "le plus humble" malgré sa grandeur',
          'Mouvement Mussar : travail éthique systématique sur les Middot (traits)',
          'Torah doit transformer le caractère, pas seulement informer l\'intellect',
        ],
        hebrewQuote: 'גְּמִילוּת חֲסָדִים גְּדוֹלָה מִן הַצְּדָקָה',
        hebrewSource: 'Talmud Bavli, Soukkah 49b',
        duration: 6,
      },
    ],
  },
  {
    id: 9, title: 'Prière et Liturgie', description: 'Avodah shebalev — le service du cœur',
    icon: '🙏', color: '#6A4A8A',
    lessons: [
      {
        id: 'le9-1', moduleId: 9, order: 1,
        title: "Tefilah — La Prière Juive",
        subtitle: "Avodah shebalev : le service du cœur remplace le sacrifice",
        content: `Après la destruction du Temple, la prière (Tefilah) remplace le sacrifice comme forme principale d'adoration. Les Sages instituent trois prières quotidiennes : Chaharit (matin), Minha (après-midi) et Arvit (soir), correspondant aux sacrifices quotidiens du Temple.

L'Amida (Dix-huit Bénédictions, ou Chmoné Esré) est la prière centrale du judaïsme, récitée debout (amida = posture debout), en silence, dirigée vers Jérusalem. Elle comprend trois bénédictions de louange, treize requêtes et trois bénédictions de remerciement.

La Kavana (intention et ferveur) est l'âme de la prière. Les Sages distinguent entre la prière comme obligation (Hova) et la prière comme aspiration (Ratson). Rambam insiste que sans Kavana minimale, la prière est invalide. Le Hassidisme met l'accent sur la joie (Simha) et la ferveur (Hitlahavout) dans la prière.`,
        keyPoints: [
          'Trois prières quotidiennes : Chaharit, Minha, Arvit — remplacent les sacrifices',
          'Amida/Chmoné Esré : prière centrale — 19 bénédictions récitées debout',
          'Kavana : intention nécessaire — prière sans Kavana peut être invalide',
          'Direction vers Jérusalem : orientation physique et symbolique',
          'Hassidisme : joie et ferveur (Hitlahavout) comme modes de prière',
        ],
        hebrewQuote: 'תְּפִלָּה בְּלֹא כַוָּנָה כְּגוּף בְּלֹא נְשָׁמָה',
        hebrewSource: 'Zohar II, 215a',
        duration: 7,
      },
      {
        id: 'le9-2', moduleId: 9, order: 2,
        title: "Le Chema et ses Bénédictions",
        subtitle: "Profession de foi et amour divin — cœur de la liturgie",
        content: `Le Chema Israël ("Écoute, Israël, l'Éternel notre Dieu, l'Éternel est Un") est la profession de foi centrale du judaïsme, récitée matin et soir. Il comprend trois passages bibliques : Devarim 6:4-9 (amour de Dieu), Devarim 11:13-21 (récompense et châtiment), Bamidbar 15:37-41 (tsitsit et souvenir des commandements).

La récitation du Chema est entourée de bénédictions. Le matin, on bénit Dieu pour la lumière (Yotser Or), pour l'amour de la Torah (Ahavat Olam), puis on récite le Chema, puis la Gueoula (la rédemption d'Égypte). La connexion entre rédemption et prière (ne pas interrompre entre Gueoula et Amida) est fondamentale.

Le Chema est aussi récité en couche : "sur son lit" avant le sommeil. Et c'est avec le Chema sur les lèvres que les martyrs juifs mourraient — Rabbi Akiva mourut en prolongeant le mot "Ehad" (Un) jusqu'au dernier souffle.`,
        keyPoints: [
          'Chema : trois paragraphes bibliques — foi, amour, commandements des Tsitsit',
          'Récitation matin et soir : obligation de deux fois par jour',
          'Rabbi Akiva : mort en martyr en récitant le Chema — modèle de Kiddush Hashem',
          'Connexion Gueoula-Amida : ne pas interrompre entre rédemption et prière',
          'Chema avant le sommeil : confier son âme à Dieu chaque nuit',
        ],
        hebrewQuote: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד',
        hebrewSource: 'Devarim 6:4',
        duration: 7,
      },
      {
        id: 'le9-3', moduleId: 9, order: 3,
        title: "Le Kaddish — Sanctification et Deuil",
        subtitle: "La prière des orphelins et la gloire divine",
        content: `Le Kaddish (sanctification) est une doxologie en araméen qui ne mentionne pas la mort. Paradoxalement, c'est la prière récitée en deuil. Sa puissance réside dans l'affirmation de la grandeur divine précisément dans la souffrance — "Yitgadal veyitkadach shmé raba" (Que Son grand Nom soit magnifié et sanctifié).

Le Kaddish des endeuillés (Kaddish Yatom) est récité pendant onze mois après le décès d'un parent, puis chaque année à l'anniversaire du décès (Yahrzeit). Sa récitation nécessite un Minyan (quorum de dix hommes adultes). C'est pour que les enfants puissent dire le Kaddish que beaucoup de Juifs tiennent à appartenir à une communauté.

La tradition attribue à Rabbi Akiva le récit fondateur du Kaddish : une âme purgée dans l'au-delà peut être libérée si son fils récite le Kaddish et dirige les prières. Cette histoire a donné au Kaddish son sens profond de lien entre générations vivantes et défuntes.`,
        keyPoints: [
          'Kaddish : doxologie sans mention de la mort — affirmation divine dans l\'épreuve',
          '"Yitgadal..." : magnification du Nom divin même dans la souffrance',
          'Onze mois de Kaddish Yatom puis Yahrzeit annuel',
          'Minyan requis : le deuil se vit en communauté',
          'Lien entre vivants et défunts : le Kaddish comme pont générationnel',
        ],
        hebrewQuote: 'יִתְגַּדַּל וְיִתְקַדַּשׁ שְׁמֵהּ רַבָּא',
        hebrewSource: 'Kaddish',
        duration: 6,
      },
      {
        id: 'le9-4', moduleId: 9, order: 4,
        title: "Tehilim — Les Psaumes",
        subtitle: "Poésie sacrée et prière universelle",
        content: `Les 150 Tehilim (Psaumes), attribués en grande partie à David, sont la collection poétique sacrée la plus influente de l'humanité. Ils couvrent toutes les émotions humaines : louange, supplication, désespoir, confiance, action de grâces. Leur universalité a permis leur adoption dans toutes les traditions abrahamiques.

En liturgie juive, les Psaumes sont omniprésents : Hallel (Psaumes 113-118) pour les fêtes, Psaume 29 (Lekhah Dodi) et Psaume 92 (Mizmor Shir Leyom HaShabbat) pour Chabbat, Psaumes du Psukei deZimra chaque matin, Psaume 27 pendant les Yamim Noraïm.

La tradition de réciter des Tehilim en cas de maladie, de danger ou de détresse est universelle dans le monde juif. La communauté du Tehilim ("faire des Tehilim pour quelqu'un") est une forme de prière d'intercession. Rabbi Nahman de Breslev recommande particulièrement la récitation du Psaume 119 (le plus long) pour traverser les épreuves.`,
        keyPoints: [
          '150 Psaumes : toute l\'éme humaine — louange, supplication, désespoir, joie',
          'Hallel : Psaumes 113-118, récités pour les grandes fêtes',
          'Psaume 92 : "Cantique pour le Chabbat" — récité chaque vendredi soir',
          'Tehilim en cas de détresse : prière d\'intercession communautaire',
          'David : auteur principal, modèle de repentir et de foi (après Bat-Cheva)',
        ],
        hebrewQuote: 'כָּל הַנְּשָׁמָה תְּהַלֵּל יָהּ',
        hebrewSource: 'Tehilim 150:6',
        duration: 6,
      },
      {
        id: 'le9-5', moduleId: 9, order: 5,
        title: "La Synagogue et l'Espace Sacré",
        subtitle: "Beit Knesset, Beit Midrach, Beit Tefila — les trois fonctions",
        content: `La synagogue (Beit Knesset — maison de rassemblement) remplace le Temple dans la vie juive. Elle a trois fonctions entrelacées : lieu de prière (Beit Tefila), lieu d'étude (Beit Midrach) et lieu de rassemblement communautaire (Beit Knesset). Ces trois dimensions sont toutes essentielles.

L'architecture de la synagogue est orientée vers Jérusalem (ou symboliquement, la Aron HaKodech — Arche Sainte — est placée en direction de Jérusalem). La Bimah (estrade centrale ou avant) accueille la lecture publique de la Torah. Le Ner Tamid (lumière perpétuelle) brûle en souvenir du candélabre du Temple.

La séparation hommes-femmes (Mehitsa) en synagogue orthodoxe est sujet de débat entre traditions. Les synagogues réformées, conservatrices et libérales ont progressivement modifié ou supprimé cette séparation. Ces différences reflètent des visions différentes de la Halakha et de l'adaptation aux temps modernes.`,
        keyPoints: [
          'Beit Knesset : triple fonction — prière, étude, rassemblement communautaire',
          'Arche Sainte et orientation vers Jérusalem : continuité avec le Temple',
          'Ner Tamid : lumière perpétuelle — souvenir de la Menorah du Temple',
          'Bimah : estrade de lecture — Torah lue en public chaque Chabbat et fête',
          'Débat Mehitsa : reflet des différentes visions de la Halakha dans la modernité',
        ],
        hebrewQuote: 'בֵּית אֱלֹהַי אֲכַלֵּא',
        hebrewSource: 'Tehilim 27:4',
        duration: 6,
      },
    ],
  },
  {
    id: 10, title: 'Judaïsme Contemporain', description: 'Le judaïsme face aux défis du monde moderne',
    icon: '🌍', color: '#5A8A8A',
    lessons: [
      {
        id: 'le10-1', moduleId: 10, order: 1,
        title: 'Les Courants du Judaïsme Moderne',
        subtitle: "Orthodoxe, Conservateur, Réformé, Reconstructionniste",
        content: `La modernité a fragmenté le judaïsme en plusieurs courants. L'Orthodoxie maintient la Torah comme révélée et immuable, la Halakha comme contraignante. Ultra-orthodoxes (Haredim) et Orthodoxes Modernes (Dati Leumi) diffèrent sur l'engagement avec la modernité.

Le judaïsme Réformé (né en Allemagne au 19e s.) adapte la Halakha aux réalités modernes : égalité hommes-femmes, langue vernaculaire dans la prière, abandon de nombreux rituels. Le judaïsme Conservateur (Massorti) cherche un chemin médian : fidélité à la tradition avec adaptation raisonnée.

Le Reconstructionnisme (Mordecai Kaplan) voit le judaïsme comme une "civilisation" en évolution constante plutôt qu'une révélation figée. Ces quatre courants coexistent et débattent, particulièrement sur les questions de conversion, mariage interreligieux et pluralisme.`,
        keyPoints: [
          'Orthodoxie : Torah révélée, Halakha immuable — Haredim vs Dati Leumi',
          'Réformé : adaptation radicale — égalité, langue vernaculaire, rituel simplifié',
          'Conservateur/Massorti : voie médiane — fidélité avec adaptation raisonnée',
          'Reconstructionnisme (Kaplan) : judaïsme comme civilisation évolutive',
          'Débats sur conversion et mariage interreligieux — questions pratiques capitales',
        ],
        hebrewQuote: 'כָּל יִשְׂרָאֵל יֵשׁ לָהֶם חֵלֶק לָעוֹלָם הַבָּא',
        hebrewSource: 'Michna Sanhédrin 10:1',
        duration: 7,
      },
      {
        id: 'le10-2', moduleId: 10, order: 2,
        title: "Israël, Diaspora et Identité Juive",
        subtitle: "Être Juif aujourd'hui entre appartenance et universalisme",
        content: `La question "qui est Juif ?" divise les courants. La Halakha orthodoxe définit comme Juif toute personne née de mère juive ou convertie selon la Halakha. Le judaïsme Réformé reconnaît aussi la filiation paternelle. Ces différences ont des implications concrètes pour les droits en Israël (Loi du Retour).

La relation Israël-Diaspora est complexe. Pour certains sionistes, la diaspora est vouée à disparaître (Shelilatgolah — négation de la diaspora). Pour d'autres, la Diaspora est créatrice et doit coexister avec Israël. Le poids démographique, culturel et financier de la diaspora américaine crée des tensions avec les politiques israéliennes.

L'assimilation est le défi principal du judaïsme diasporique : les taux de mariage interreligieux dépassent 50% dans certaines communautés. Le renouveau juif (Jewish Renaissance), les mouvements de Ba'alei Teshouva (retour à la pratique) et les initiatives éducatives tentent de contrer cette tendance.`,
        keyPoints: [
          '"Qui est Juif ?" : définition halakhique vs réformée — implications pratiques',
          'Loi du Retour : droit de tout Juif à l\'aliya — débats sur les critères',
          'Shelilatgolah : négation de la diaspora vs valeur de la présence juive mondiale',
          'Assimilation et mariages mixtes : défi démographique majeur',
          'Ba\'alei Teshouva : mouvement de retour à la pratique — renouveau orthodoxe',
        ],
        hebrewQuote: 'עַמְּךָ עַמִּי וֵאלֹהַיִךְ אֱלֹהָי',
        hebrewSource: 'Ruth 1:16',
        duration: 7,
      },
      {
        id: 'le10-3', moduleId: 10, order: 3,
        title: "Dialogue Interreligieux et Relations Judéo-Chrétiennes",
        subtitle: "Depuis Nostra Aetate jusqu'aux défis contemporains",
        content: `La relation judéo-chrétienne a été transformée par la Déclaration Nostra Aetate (Concile Vatican II, 1965), qui rejette l'accusation de déicide collectif et appelle à un nouveau rapport entre Église et peuple juif. Cette déclaration a ouvert une ère de dialogue sans précédent.

Du côté juif, les avis sont partagés. Rabbi Joseph Soloveitchik ("Rav") limitait le dialogue théologique tout en encourageant la coopération sur des questions humanitaires. D'autres, comme le Grand Rabbin Elio Toaff, ont embrassé le dialogue plus ouvertement. La Shoah reste une ombre incontournable.

Le dialogue judéo-musulman est peut-être encore plus complexe, marqué par le conflit israélo-palestinien. Des initiatives comme l'Alliance des Civilisations et des rencontres abrahami­ques tentent de dépasser les antagonismes politiques pour renouer avec des sources spirituelles communes.`,
        keyPoints: [
          'Nostra Aetate 1965 : tournant dans les relations judéo-chrétiennes',
          'Rejet de l\'accusation de déicide collectif — reconnaissance du peuple juif',
          'Soloveitchik : pas de dialogue théologique mais coopération humanitaire',
          'Shoah comme ombre dans tout dialogue — mémoire et responsabilité',
          'Dialogue abrahamique : défis et espoirs dans le contexte contemporain',
        ],
        hebrewQuote: 'וְהָיָה בַּיּוֹם הַהוּא יִהְיֶה יְהוָה אֶחָד וּשְׁמוֹ אֶחָד',
        hebrewSource: 'Zekharia 14:9',
        duration: 7,
      },
      {
        id: 'le10-4', moduleId: 10, order: 4,
        title: "Bioéthique et Technologie dans la Loi Juive",
        subtitle: "La Halakha face aux défis de la modernité scientifique",
        content: `La Halakha est un système vivant qui répond aux défis de chaque époque. Les Responsa (Teshuvot) contemporains abordent des questions inédites : transplantation d'organes, procréation médicalement assistée, euthanasie, intelligence artificielle.

Pour la transplantation, la définition de la mort est centrale : si la mort cérébrale est acceptée, le don d'organe pour sauver une vie est non seulement permis mais devient une Mitsva. Si seule la mort cardiaque est reconnue, le prélèvement sur un "mort cérébral" devient problématique.

Pour la FIV et les mères porteuses, les questions de filiation (matrilinéaire selon la Halakha) et de parentalité génétique créent des cas complexes. Chaque posek (décisionnaire halakhique) répond selon sa tradition et ses sources. La pluralité des responsa reflète la richesse du débat halakhique vivant.`,
        keyPoints: [
          'Responsa contemporains : transplantation, FIV, euthanasie — Halakha vivante',
          'Définition de la mort : cérébrale vs cardiaque — enjeu pour les dons d\'organes',
          'FIV et filiation matrilinéaire : questions de parentalité complexes',
          'Pikouah Nefesh : sauver la vie prime — cadre pour les décisions bioéthiques',
          'Pluralité des Poskim : richesse du débat halakhique, pas de voix unique',
        ],
        hebrewQuote: 'וָחַי בָּהֶם וְלֹא שֶׁיָּמוּת בָּהֶם',
        hebrewSource: 'Talmud Bavli, Sanhédrin 74a',
        duration: 7,
      },
      {
        id: 'le10-5', moduleId: 10, order: 5,
        title: "Tikkoun Olam — Réparer le Monde",
        subtitle: "De la Kabbale à l'engagement social contemporain",
        content: `Tikkoun Olam (réparation du monde) a deux sens distincts. Dans la Kabbale lourianique, c'est la réparation cosmique des étincelles divines dispersées par la brisure des vases. Dans le judaïsme contemporain libéral, c'est devenu un terme général pour l'action sociale, la justice et l'amélioration du monde.

Le judaïsme a toujours lié foi et action sociale. Les prophètes d'Israël étaient les premiers défenseurs des droits des pauvres et des opprimés. Les fondateurs du mouvement ouvrier en Europe comptaient de nombreux Juifs inspirés par les valeurs de la Torah. Abraham Joshua Heschel marchait pour les droits civiques en voyant dans cet acte une expression de sa foi.

Aujourd'hui, de nombreuses organisations juives (American Jewish World Service, Mazon, AJWS) canalisent cette tradition vers l'aide humanitaire mondiale. Le défi est de maintenir l'enracinement dans la tradition tout en s'engageant universellement — tension féconde au cœur du judaïsme.`,
        keyPoints: [
          'Tikkoun Olam kabbalistique : réparation cosmique des étincelles divines',
          'Tikkoun Olam contemporain : action sociale et justice — sécularisation du concept',
          'Tradition prophétique : justice sociale comme exigence de foi, pas option',
          'Heschel à Selma : modèle d\'engagement politique enraciné dans la foi',
          'Tension féconde : particularisme juif et responsabilité universelle',
        ],
        hebrewQuote: 'לְתַקֵּן עוֹלָם בְּמַלְכוּת שַׁדַּי',
        hebrewSource: 'Alenou LeChhabeah (fin de prière)',
        duration: 7,
      },
    ],
  },
];

export const TOTAL_LESSONS = EDUCATION_MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
