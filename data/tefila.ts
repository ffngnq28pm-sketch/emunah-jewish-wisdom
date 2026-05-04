export interface TefilaItem {
  id: string;
  title: string;
  hebrew: string;
  transliteration: string;
  french: string;
  occasion: string;
  source: string;
  times?: number;
  description?: string;
}

export interface TefilaCategory {
  id: string;
  title: string;
  hebrewTitle: string;
  icon: string;
  color: string;
  description: string;
  items: TefilaItem[];
}

export const TEFILA_CATEGORIES: TefilaCategory[] = [
  // ── 1. Shaharit ──────────────────────────────────────────────────────────────
  {
    id: 'shaharit',
    title: 'Shaharit',
    hebrewTitle: 'שַׁחֲרִית',
    icon: '🌅',
    color: '#C9A84C',
    description: 'Prière du matin — accueil du jour avec gratitude et conscience divine',
    items: [
      {
        id: 'modeh-ani',
        title: 'Modeh Ani',
        hebrew: 'מוֹדֶה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה. רַבָּה אֱמוּנָתֶךָ.',
        transliteration: 'Modeh ani lefanecha, Melech chai ve\'kayam, shehehezarta bi nishmati be\'chemla. Raba emunatecha.',
        french: 'Je Te rends grâce devant Toi, Roi vivant et éternel, qui as rendu mon âme en moi avec compassion. Grande est Ta fidélité.',
        occasion: 'Matin',
        source: 'Siddour — première prière au réveil',
        description: 'Première parole du jour, récitée dès le réveil avant de se lever. Exprime la gratitude pour le retour de l\'âme et reconnaît la souveraineté divine sur la vie.',
      },
      {
        id: 'shema-matin',
        title: 'Shema Israël',
        hebrew: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד.\nבָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד.',
        transliteration: 'Shema Yisrael, Adonaï Eloheïnou, Adonaï Echad.\nBaruch shem kevod malchuto le\'olam va\'ed.',
        french: 'Écoute Israël, l\'Éternel est notre Dieu, l\'Éternel est Un.\nBéni soit le Nom de la gloire de Son règne pour toujours et à jamais.',
        occasion: 'Matin',
        source: 'Deutéronome 6:4 — cœur de la liturgie juive',
        times: 2,
        description: 'Profession de foi centrale du judaïsme, récitée matin et soir. Affirmation de l\'unicité divine. Les enfants apprennent le Shema comme premier verset de Torah. À réciter en couvrant les yeux pour une concentration totale.',
      },
      {
        id: 'amida-matin',
        title: 'Amida (Shmoné Esré)',
        hebrew: 'עֲמִידָה — שְׁמוֹנֶה עֶשְׂרֵה',
        transliteration: 'Amida — Shmoné Esré',
        french: 'La "prière debout" — dix-huit bénédictions',
        occasion: 'Matin',
        source: 'Talmud Berakhot — Grande Synagogue (Anshei Knesset HaGuedola)',
        description: 'Prière centrale de toute la liturgie juive, récitée trois fois par jour debout, les pieds joints, face à Jérusalem. Composée de 19 bénédictions (à l\'origine 18) : 3 de louange, 13 de demandes, 3 de remerciement. Récitée en silence, puis répétée à voix haute par le hazzan. Fondement de l\'Avodah shebalev — le service du cœur.',
      },
      {
        id: 'aleinu',
        title: 'Aleinu Leshabe\'ach',
        hebrew: 'עָלֵינוּ לְשַׁבֵּחַ לַאֲדוֹן הַכֹּל, לָתֵת גְּדֻלָּה לְיוֹצֵר בְּרֵאשִׁית, שֶׁלֹּא עָשָׂנוּ כְּגוֹיֵי הָאֲרָצוֹת, וְלֹא שָׂמָנוּ כְּמִשְׁפְּחוֹת הָאֲדָמָה.',
        transliteration: 'Aleinu leshabe\'ach la\'adon hakol, latet guedula le\'yotser bereshit, shelo asanu ke\'goyei ha\'aratsot, ve\'lo samanu ke\'mishpehot ha\'adama.',
        french: 'Il nous appartient de louer le Maître de toute chose, de glorifier le Créateur de l\'origine, qui ne nous a pas faits comme les nations de la terre et ne nous a pas placés comme les familles du sol.',
        occasion: 'Quotidien',
        source: 'Clôture de chaque office — attribuée à Josué ou aux hommes de la Grande Synagogue',
        description: 'Prière de clôture de chaque office, proclamant la mission spécifique du peuple juif et l\'espoir de la rédemption universelle. Mentionne le tikun olam — la réparation du monde.',
      },
    ],
  },

  // ── 2. Minha / Arvit ─────────────────────────────────────────────────────────
  {
    id: 'minha-arvit',
    title: 'Minha & Arvit',
    hebrewTitle: 'מִנְחָה וְעַרְבִית',
    icon: '🌆',
    color: '#4A7A8A',
    description: 'Prières de l\'après-midi et du soir — accompagner le coucher du soleil',
    items: [
      {
        id: 'kaddish',
        title: 'Kaddish Yatom',
        hebrew: 'יִתְגַּדַּל וְיִתְקַדַּשׁ שְׁמֵהּ רַבָּא. בְּעָלְמָא דִּי בְרָא כִרְעוּתֵהּ, וְיַמְלִיךְ מַלְכוּתֵהּ, בְּחַיֵּיכוֹן וּבְיוֹמֵיכוֹן וּבְחַיֵּי דְכָל בֵּית יִשְׂרָאֵל, בַּעֲגָלָא וּבִזְמַן קָרִיב, וְאִמְרוּ אָמֵן.',
        transliteration: 'Yitgadal ve\'yitkadash shemeh raba. Be\'alma di vera chiruteh, ve\'yamlich malchuteh, be\'chayechon u\'ve\'yomechon u\'ve\'chayei de\'chol beit Yisrael, ba\'agala u\'vizman kariv, ve\'imru amen.',
        french: 'Que Son grand Nom soit magnifié et sanctifié dans le monde qu\'Il a créé selon Sa volonté, et qu\'Il établisse Son règne de votre vivant, de vos jours et du vivant de toute la maison d\'Israël, bientôt et dans un temps proche, et dites Amen.',
        occasion: 'Quotidien',
        source: 'Talmud de Babylone — Araméen, période des Savoraïm',
        description: 'Le Kaddish des endeuillés (Kaddish Yatom) est la prière récitée par les fils et filles en deuil de leurs parents pendant 11 mois, puis aux Yahrzeit (anniversaires du décès). Paradoxalement, cette prière ne mentionne pas la mort mais uniquement la louange de Dieu — affirmation de foi au cœur du deuil. Nécessite un minyan (quorum de 10 fidèles).',
      },
      {
        id: 'shema-soir',
        title: 'Shema du Soir (Arvit)',
        hebrew: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד.\nוְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל לְבָבְךָ וּבְכָל נַפְשְׁךָ וּבְכָל מְאֹדֶךָ.',
        transliteration: 'Shema Yisrael Adonaï Eloheïnou Adonaï Echad.\nVe\'ahavta et Adonaï Elohecha be\'chol levavcha u\'ve\'chol nafshecha u\'ve\'chol me\'odecha.',
        french: 'Écoute Israël, l\'Éternel est notre Dieu, l\'Éternel est Un.\nTu aimeras l\'Éternel ton Dieu de tout ton cœur, de toute ton âme et de toutes tes forces.',
        occasion: 'Soir',
        source: 'Deutéronome 6:4-5 — office du soir',
        times: 1,
        description: 'Le Shema du soir est accompagné de la bénédiction Hashkivenu — "Fais-nous coucher en paix". La tradition enseigne de réciter le Shema au lit avant de s\'endormir comme ultime prière de la journée, confiant son âme à Dieu pour la nuit.',
      },
    ],
  },

  // ── 3. Shabbat ───────────────────────────────────────────────────────────────
  {
    id: 'shabbat',
    title: 'Shabbat',
    hebrewTitle: 'שַׁבָּת',
    icon: '✡',
    color: '#6B5FA5',
    description: 'Prières et rituels du saint Shabbat — du coucher du soleil vendredi au soir du samedi',
    items: [
      {
        id: 'lecha-dodi',
        title: 'Lecha Dodi',
        hebrew: 'לְכָה דוֹדִי לִקְרַאת כַּלָּה, פְּנֵי שַׁבָּת נְקַבְּלָה.\nשָׁמוֹר וְזָכוֹר בְּדִבּוּר אֶחָד, הִשְׁמִיעָנוּ אֵל הַמְיֻחָד.\nיְיָ אֶחָד וּשְׁמוֹ אֶחָד, לְשֵׁם וּלְתִפְאֶרֶת וְלִתְהִלָּה.',
        transliteration: 'Lecha dodi likrat kala, penei Shabbat nekabela.\nShamor ve\'zachor be\'dibur echad, hishmia\'anu El hameyuchad.\nAdonaï echad u\'shemo echad, leshem u\'letiferet ve\'litehila.',
        french: 'Viens, mon bien-aimé, à la rencontre de la fiancée, accueillons la face du Shabbat.\nGarder et Souvenir en une seule parole, Dieu l\'Unique nous l\'a fait entendre.\nDieu est Un et Son Nom est Un, pour la gloire, la splendeur et la louange.',
        occasion: 'Shabbat',
        source: 'Rav Shlomo Alkabetz (XVIe siècle, Safed) — office de Kabbalat Shabbat',
        description: 'Hymne mystique qui accueille le Shabbat comme une Reine et une Fiancée. Composé à Safed au XVIe siècle par les kabbalistes. Au dernier couplet, toute l\'assemblée se tourne vers la porte pour accueillir la Reine Shabbat. Chanté avec mélodie solennelle en début d\'office du vendredi soir.',
      },
      {
        id: 'kiddush-vendredi',
        title: 'Kiddush du Vendredi Soir',
        hebrew: 'וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם הַשִּׁשִּׁי. וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל צְבָאָם.\nבָּרוּךְ אַתָּה יְיָ, אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן.',
        transliteration: 'Vayehi erev vayehi voker yom hashishi. Vayechulu hashamayim veha\'arets ve\'chol tzeva\'am.\nBaruch ata Adonaï, Eloheïnou Melech ha\'olam, boré peri ha\'gafen.',
        french: 'Il y eut un soir, il y eut un matin : le sixième jour. Le ciel et la terre furent achevés avec toute leur armée.\nBéni sois-Tu, Éternel notre Dieu, Roi de l\'univers, qui crées le fruit de la vigne.',
        occasion: 'Shabbat',
        source: 'Genèse 1:31-2:3 — Talmud, Pessahim 106a',
        description: 'Sanctification du Shabbat sur le vin (ou jus de raisin). Récité debout par le chef de famille ou l\'officiant. Accompagné des deux pains de Shabbat (Hallot) recouverts d\'un linge. Précédé de l\'allumage des bougies par la femme, qui inaugure le Shabbat par la bénédiction des lumières.',
      },
      {
        id: 'havdala',
        title: 'Havdala',
        hebrew: 'בָּרוּךְ אַתָּה יְיָ, אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמַּבְדִּיל בֵּין קֹדֶשׁ לְחוֹל, בֵּין אוֹר לְחֹשֶׁךְ, בֵּין יִשְׂרָאֵל לָעַמִּים, בֵּין יוֹם הַשְּׁבִיעִי לְשֵׁשֶׁת יְמֵי הַמַּעֲשֶׂה. בָּרוּךְ אַתָּה יְיָ, הַמַּבְדִּיל בֵּין קֹדֶשׁ לְחוֹל.',
        transliteration: 'Baruch ata Adonaï, Eloheïnou Melech ha\'olam, hamavdil bein kodesh le\'chol, bein or le\'choshech, bein Yisrael la\'amim, bein yom hashevi\'i le\'sheshet yemei hama\'ase. Baruch ata Adonaï, hamavdil bein kodesh le\'chol.',
        french: 'Béni sois-Tu, Éternel notre Dieu, Roi de l\'univers, qui sépares le saint du profane, la lumière de l\'obscurité, Israël des peuples, le septième jour des six jours ouvrables. Béni sois-Tu, Éternel, qui sépares le saint du profane.',
        occasion: 'Shabbat',
        source: 'Talmud Berakhot 33a — fin du Shabbat samedi soir',
        description: 'Cérémonie de séparation entre le Shabbat et la semaine ordinaire. Utilise une bougie tressée (au moins deux mèches), du vin et des épices (besamim). On hume les épices pour conserver l\'âme supplémentaire du Shabbat (Neshama Yeteira) qui nous quitte. Les épices symbolisent la douceur du Shabbat que l\'on emporte dans la semaine.',
      },
    ],
  },

  // ── 4. Birkot HaMazon ────────────────────────────────────────────────────────
  {
    id: 'birkat-hamazon',
    title: 'Birkot HaMazon',
    hebrewTitle: 'בִּרְכַּת הַמָּזוֹן',
    icon: '🍞',
    color: '#4A7A5A',
    description: 'Grâces après les repas — remercier Dieu pour la nourriture et la Terre',
    items: [
      {
        id: 'birkat-hamazon-main',
        title: 'Birkat HaMazon (texte principal)',
        hebrew: 'בָּרוּךְ אַתָּה יְיָ, אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַזָּן אֶת הָעוֹלָם כֻּלּוֹ בְּטוּבוֹ, בְּחֵן בְּחֶסֶד וּבְרַחֲמִים. הוּא נוֹתֵן לֶחֶם לְכָל בָּשָׂר, כִּי לְעוֹלָם חַסְדּוֹ. וּבְטוּבוֹ הַגָּדוֹל תָּמִיד לֹא חָסַר לָנוּ, וְאַל יֶחְסַר לָנוּ מָזוֹן לְעוֹלָם וָעֶד. בַּעֲבוּר שְׁמוֹ הַגָּדוֹל, כִּי הוּא אֵל זָן וּמְפַרְנֵס לַכֹּל.',
        transliteration: 'Baruch ata Adonaï, Eloheïnou Melech ha\'olam, hazan et ha\'olam kulo be\'tuvo, be\'chen be\'chesed u\'ve\'rachamim. Hu noten lechem le\'chol basar, ki le\'olam chasdo. U\'ve\'tuvo hagadol tamid lo chasar lanu, ve\'al yechsar lanu mazon le\'olam va\'ed. Ba\'avur shemo hagadol, ki hu El zan u\'mefarnès lakol.',
        french: 'Béni sois-Tu, Éternel notre Dieu, Roi de l\'univers, qui nourris le monde entier dans Ta bonté, avec grâce, amour et compassion. Il donne le pain à toute chair, car Sa grâce est éternelle. Et dans Sa grande bonté, il ne nous a jamais manqué de nourriture, et qu\'il ne nous en manque jamais. En vertu de Son grand Nom, car Il est le Dieu qui nourrit et pourvoit à tous.',
        occasion: 'Après repas',
        source: 'Deutéronome 8:10 — "Tu mangeras, tu seras rassasié et tu béniras"',
        description: 'Commandement biblique de remercier Dieu après avoir mangé. Récitée après tout repas où l\'on a mangé du pain. Composée de quatre bénédictions principales : la nourriture, la Terre, Jérusalem, et la bonté divine. Récitée en commun (Zimun) lorsqu\'au moins trois hommes ont mangé ensemble.',
      },
      {
        id: 'hamotzi',
        title: 'Hamotzi (bénédiction du pain)',
        hebrew: 'בָּרוּךְ אַתָּה יְיָ, אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ.',
        transliteration: 'Baruch ata Adonaï, Eloheïnou Melech ha\'olam, hamotzi lechem min ha\'arets.',
        french: 'Béni sois-Tu, Éternel notre Dieu, Roi de l\'univers, qui fais sortir le pain de la terre.',
        occasion: 'Avant repas',
        source: 'Psaumes 104:14 — Talmud Berakhot 38a',
        description: 'Bénédiction récitée avant de manger du pain, qui initie l\'obligation de dire la Birkat HaMazon à la fin. On tient le pain des deux mains et on le rompt après la bénédiction, rappelant le Shabbat et les fêtes.',
      },
    ],
  },

  // ── 5. Tehilim / Psaumes ─────────────────────────────────────────────────────
  {
    id: 'tehilim',
    title: 'Tehilim',
    hebrewTitle: 'תְּהִלִּים',
    icon: '📖',
    color: '#8A6B20',
    description: 'Les 150 Psaumes de David — poèmes de l\'âme humaine face à Dieu',
    items: [
      {
        id: 'ps-23',
        title: 'Psaume 23 — L\'Éternel est mon berger',
        hebrew: 'יְהוָה רֹעִי, לֹא אֶחְסָר. בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי, עַל מֵי מְנֻחוֹת יְנַהֲלֵנִי. נַפְשִׁי יְשׁוֹבֵב, יַנְחֵנִי בְמַעְגְּלֵי צֶדֶק לְמַעַן שְׁמוֹ. גַּם כִּי אֵלֵךְ בְּגֵיא צַלְמָוֶת, לֹא אִירָא רָע, כִּי אַתָּה עִמָּדִי.',
        transliteration: 'Adonaï ro\'i, lo echsar. Binot deshe yarbitseni, al mei menuhot yenahaleni. Nafshi yeshovev, yanheni be\'magelei tsedek lema\'an shemo. Gam ki elech be\'gei tsalmaveth, lo ira ra, ki ata imadi.',
        french: 'L\'Éternel est mon berger, je ne manque de rien. Il me fait reposer dans de verts pâturages, Il me conduit vers des eaux tranquilles. Il restaure mon âme, Il me guide dans les sentiers de la justice à cause de Son nom. Même si je marche dans la vallée de l\'ombre de la mort, je ne crains aucun mal, car Tu es avec moi.',
        occasion: 'Quotidien',
        source: 'Psaumes 23 — attribué au roi David',
        description: 'Le psaume le plus aimé et le plus universel. Récité aux funérailles, aux moments de détresse et de joie. Exprime la confiance absolue en la Providence divine même dans les épreuves. Souvent récité le Shabbat à la table du repas.',
      },
      {
        id: 'ps-121',
        title: 'Psaume 121 — Je lève les yeux vers les montagnes',
        hebrew: 'אֶשָּׂא עֵינַי אֶל הֶהָרִים, מֵאַיִן יָבֹא עֶזְרִי. עֶזְרִי מֵעִם יְהוָה, עֹשֵׂה שָׁמַיִם וָאָרֶץ. אַל יִתֵּן לַמּוֹט רַגְלֶךָ, אַל יָנוּם שֹׁמְרֶךָ. הִנֵּה לֹא יָנוּם וְלֹא יִישָׁן, שׁוֹמֵר יִשְׂרָאֵל.',
        transliteration: 'Essa einai el heharim, me\'ayin yavo ezri. Ezri me\'im Adonaï, oseh shamayim va\'arets. Al yiten lamot raglecha, al yanum shomrecha. Hine lo yanum ve\'lo yishan, shomer Yisrael.',
        french: 'Je lève mes yeux vers les montagnes, d\'où viendra mon secours ? Mon secours vient de l\'Éternel, qui a fait le ciel et la terre. Il ne permettra pas que ton pied chancelle, ton gardien ne sommeillera pas. Voici, Il ne sommeille ni ne dort, le Gardien d\'Israël.',
        occasion: 'Quotidien',
        source: 'Psaumes 121 — Chant des montées (Shir HaMa\'alot)',
        description: 'L\'un des quinze "Chants des montées" (Shir HaMa\'alot), récités sur les marches du Temple. Psaume de protection et de confiance. Récité lors des voyages, aux moments d\'inquiétude, et pour les malades. La tradition enseigne que Dieu, Gardien d\'Israël, veille sans jamais sommeiller.',
      },
      {
        id: 'ps-150',
        title: 'Psaume 150 — Louez Dieu en Son sanctuaire',
        hebrew: 'הַלְלוּיָהּ. הַלְלוּ אֵל בְּקָדְשׁוֹ, הַלְלוּהוּ בִּרְקִיעַ עֻזּוֹ. הַלְלוּהוּ בִגְבוּרֹתָיו, הַלְלוּהוּ כְּרֹב גֻּדְלוֹ. הַלְלוּהוּ בְתֵקַע שׁוֹפָר, הַלְלוּהוּ בְּנֵבֶל וְכִנּוֹר. כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ, הַלְלוּיָהּ.',
        transliteration: 'Hallelouya. Hallelu El be\'kodsho, hallelouhou bi\'rkia ouzo. Hallelouhou vi\'gvourotav, hallelouhou ke\'rov gouedlo. Hallelouhou be\'teka shofar, hallelouhou be\'nevel ve\'chinor. Kol haneshamah tehalel Yah, Hallelouya.',
        french: 'Louez Dieu ! Louez Dieu dans Son sanctuaire, louez-Le dans le firmament de Sa puissance. Louez-Le pour Ses exploits, louez-Le selon Sa grandeur immense. Louez-Le au son du shofar, louez-Le avec la harpe et la lyre. Que toute âme loue l\'Éternel, louez Dieu !',
        occasion: 'Matin',
        source: 'Psaumes 150 — conclusion du Livre des Psaumes',
        description: 'Psaume final des 150, grand Hallel de louange universelle. Clôture de la section des Psaumes dans l\'office matinal (Pessuké deZimra). Chaque créature portant une âme est appelée à louer Dieu. Les instruments mentionnés évoquent la musique du Temple de Jérusalem.',
      },
      {
        id: 'ps-92',
        title: 'Psaume 92 — Chant pour le Shabbat',
        hebrew: 'מִזְמוֹר שִׁיר לְיוֹם הַשַּׁבָּת. טוֹב לְהֹדוֹת לַיהוָה, וּלְזַמֵּר לְשִׁמְךָ עֶלְיוֹן. לְהַגִּיד בַּבֹּקֶר חַסְדֶּךָ, וֶאֱמוּנָתְךָ בַּלֵּילוֹת.',
        transliteration: 'Mizmor shir le\'yom haShabbat. Tov le\'hodot l\'Adonaï, u\'lezamer le\'shimcha Elyon. Le\'hagid baboker chasdecha, ve\'emunatcha balaïlot.',
        french: 'Psaume, chant pour le jour du Shabbat. Il est bon de rendre grâce à l\'Éternel et de chanter des hymnes à Ton Nom, Très-Haut. D\'annoncer le matin Ta bonté, et Ta fidélité pendant les nuits.',
        occasion: 'Shabbat',
        source: 'Psaumes 92 — le seul psaume explicitement dédié au Shabbat',
        description: 'Unique psaume intitulé explicitement "pour le Shabbat" dans toute la Bible. Selon la tradition, ce psaume a été chanté par Adam le premier Shabbat de la création. Introduit l\'office de Kabbalat Shabbat et est chanté après Lecha Dodi. Évoque la prospérité du juste et la justice divine.',
      },
    ],
  },

  // ── 6. Pirké Avot ────────────────────────────────────────────────────────────
  {
    id: 'pirke-avot',
    title: 'Pirké Avot',
    hebrewTitle: 'פִּרְקֵי אָבוֹת',
    icon: '🕎',
    color: '#A5664A',
    description: 'Sentences des Pères — sagesse rabbinique éternelle transmise de génération en génération',
    items: [
      {
        id: 'avot-1-1',
        title: 'La chaîne de la transmission',
        hebrew: 'מֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי, וּמְסָרָהּ לִיהוֹשֻׁעַ, וִיהוֹשֻׁעַ לִזְקֵנִים, וּזְקֵנִים לִנְבִיאִים, וּנְבִיאִים מְסָרוּהָ לְאַנְשֵׁי כְנֶסֶת הַגְּדוֹלָה.',
        transliteration: 'Moshe kibel Torah mi\'Sinai, u\'mesara liYehoshua, viYehoshua li\'zekenim, u\'zekenim li\'nevi\'im, u\'nevi\'im mesaruha le\'anshei knesset hagedola.',
        french: 'Moïse reçut la Torah du Sinaï et la transmit à Josué, Josué aux Anciens, les Anciens aux Prophètes, et les Prophètes la transmirent aux hommes de la Grande Assemblée.',
        occasion: 'Étude',
        source: 'Pirké Avot 1:1',
        description: 'Verset d\'ouverture des Pirké Avot, affirmant la continuité ininterrompue de la tradition orale depuis le Sinaï. Fondement de la foi en la Torah orale (Torah she\'be\'al peh). Chaque maillon de la chaîne est aussi essentiel que le premier.',
      },
      {
        id: 'avot-1-2',
        title: 'Les trois piliers du monde',
        hebrew: 'שִׁמְעוֹן הַצַּדִּיק הָיָה מִשְּׁיָרֵי כְנֶסֶת הַגְּדוֹלָה. הוּא הָיָה אוֹמֵר: עַל שְׁלֹשָׁה דְבָרִים הָעוֹלָם עוֹמֵד — עַל הַתּוֹרָה, וְעַל הָעֲבוֹדָה, וְעַל גְּמִילוּת חֲסָדִים.',
        transliteration: 'Shimon haTzadik haya mi\'shiyarei knesset hagedola. Hu haya omer: al shlosha devarim ha\'olam omed — al haTorah, ve\'al ha\'Avodah, ve\'al Gemilut Chassadim.',
        french: 'Siméon le Juste était parmi les derniers membres de la Grande Assemblée. Il disait : Le monde repose sur trois choses — sur la Torah, sur le culte (Avodah) et sur les actes de bonté (Gemilut Chassadim).',
        occasion: 'Étude',
        source: 'Pirké Avot 1:2 — Siméon le Juste',
        description: 'Les trois piliers qui soutiennent le monde selon la sagesse rabbinique. La Torah comme guide, l\'Avodah (service divin) comme connexion, et la Gemilut Chassadim (bonté inconditionnelle) comme expression concrète de l\'amour divin dans le monde.',
      },
      {
        id: 'avot-1-14',
        title: 'Hillel — Si je ne suis pas pour moi',
        hebrew: 'הוּא הָיָה אוֹמֵר: אִם אֵין אֲנִי לִי, מִי לִי? וּכְשֶׁאֲנִי לְעַצְמִי, מָה אֲנִי? וְאִם לֹא עַכְשָׁיו, אֵימָתַי?',
        transliteration: 'Hu haya omer: Im ein ani li, mi li? U\'che\'she\'ani le\'atsmi, ma ani? Ve\'im lo achshav, eimatai?',
        french: 'Il disait : Si je ne suis pas pour moi-même, qui le sera pour moi ? Et si je ne suis que pour moi-même, que suis-je ? Et si ce n\'est maintenant, quand donc ?',
        occasion: 'Étude',
        source: 'Pirké Avot 1:14 — Hillel HaZaken',
        description: 'La triple maxime de Hillel, parmi les plus citées du judaïsme. Équilibre entre la responsabilité individuelle (se prendre en charge), la responsabilité envers les autres (ne pas être centré sur soi), et l\'urgence de l\'action (ne pas remettre au lendemain). Enseignement éternel d\'éthique personnelle et sociale.',
      },
      {
        id: 'avot-2-4',
        title: 'Hillel — Lève-toi un peu au-dessus de ta condition',
        hebrew: 'הִלֵּל אוֹמֵר: אַל תִּפְרוֹשׁ מִן הַצִּבּוּר, וְאַל תַּאֲמִין בְּעַצְמְךָ עַד יוֹם מוֹתְךָ, וְאַל תָּדִין אֶת חֲבֵרְךָ עַד שֶׁתַּגִּיעַ לִמְקוֹמוֹ.',
        transliteration: 'Hillel omer: Al tifrosh min hatsibur, ve\'al ta\'amin be\'atsmecha ad yom motecha, ve\'al tadin et chavercha ad she\'taguia li\'mkomo.',
        french: 'Hillel dit : Ne te sépare pas de la communauté, ne te fais pas confiance jusqu\'au jour de ta mort, et ne juge pas ton prochain avant de t\'être mis à sa place.',
        occasion: 'Étude',
        source: 'Pirké Avot 2:4 — Hillel HaZaken',
        description: 'Triple enseignement de solidarité communautaire, d\'humilité devant ses propres tentations jusqu\'à la fin de la vie, et d\'empathie avant tout jugement. La formule "ne juge pas avant d\'être à sa place" est devenue un principe éthique universel.',
      },
      {
        id: 'avot-2-21',
        title: 'Rabbi Tarfon — Il ne t\'appartient pas d\'achever',
        hebrew: 'הוּא הָיָה אוֹמֵר: לֹא עָלֶיךָ הַמְּלָאכָה לִגְמוֹר, וְלֹא אַתָּה בֶן חוֹרִין לִבָּטֵל מִמֶּנָּה.',
        transliteration: 'Hu haya omer: Lo alecha hamelacha ligmor, ve\'lo ata ben chorin le\'hibatel mimenah.',
        french: 'Il disait : Il ne t\'appartient pas d\'achever l\'œuvre, mais tu n\'es pas libre de t\'en dispenser.',
        occasion: 'Étude',
        source: 'Pirké Avot 2:21 — Rabbi Tarfon',
        description: 'Maxime fondamentale sur la responsabilité humaine face à une tâche infinie. Libère l\'homme du sentiment d\'impuissance devant l\'immensité du Tikun Olam (réparation du monde), tout en maintenant l\'obligation d\'agir. Chaque effort compte, même partiel.',
      },
      {
        id: 'avot-4-1',
        title: 'Ben Zoma — Qui est fort ?',
        hebrew: 'בֶּן זוֹמָא אוֹמֵר: אֵיזֶהוּ חָכָם? הַלּוֹמֵד מִכָּל אָדָם. אֵיזֶהוּ גִבּוֹר? הַכּוֹבֵשׁ אֶת יִצְרוֹ. אֵיזֶהוּ עָשִׁיר? הַשָּׂמֵחַ בְּחֶלְקוֹ. אֵיזֶהוּ מְכֻבָּד? הַמְכַבֵּד אֶת הַבְּרִיּוֹת.',
        transliteration: 'Ben Zoma omer: Eizehu chacham? Halomed mi\'kol adam. Eizehu gibor? Hakovesh et yitsro. Eizehu ashir? Hase\'me\'ach be\'chelko. Eizehu mechubad? Hamechabed et haberiyot.',
        french: 'Ben Zoma dit : Qui est sage ? Celui qui apprend de tout être humain. Qui est fort ? Celui qui maîtrise ses penchants. Qui est riche ? Celui qui se réjouit de sa part. Qui est honoré ? Celui qui honore les créatures.',
        occasion: 'Étude',
        source: 'Pirké Avot 4:1 — Ben Zoma',
        description: 'Quatre définitions radicales qui renversent les valeurs du monde : la vraie sagesse est ouverture, la vraie force est maîtrise de soi, la vraie richesse est la satisfaction, et le vrai honneur naît de l\'honneur accordé aux autres. Parmi les passages les plus cités de toute la littérature rabbinique.',
      },
      {
        id: 'avot-3-14',
        title: 'Rabbi Akiva — Image divine',
        hebrew: 'רַבִּי עֲקִיבָא אוֹמֵר: חָבִיב אָדָם שֶׁנִּבְרָא בְצֶלֶם. חִבָּה יְתֵרָה נוֹדַעַת לוֹ, שֶׁנִּבְרָא בְּצֶלֶם אֱלֹהִים.',
        transliteration: 'Rabbi Akiva omer: Chaviv adam she\'nivra be\'tselem. Chiba yeteira noda\'at lo, she\'nivra be\'tselem Elohim.',
        french: 'Rabbi Akiva dit : Aimé est l\'homme qui a été créé à l\'image divine. Une amour plus grand encore lui fut manifesté — qu\'il fut créé à l\'image de Dieu.',
        occasion: 'Étude',
        source: 'Pirké Avot 3:14 — Rabbi Akiva ben Yosef',
        description: 'Rabbi Akiva, le plus grand sage de la Mishna, insiste sur la dignité transcendante de chaque être humain en tant que porteur de l\'image divine (Tselem Elohim). Fondement de la bioéthique juive et du respect absolu de toute vie humaine.',
      },
      {
        id: 'avot-5-20',
        title: 'Judah ben Tema — Le courage à chaque âge',
        hebrew: 'יְהוּדָה בֶּן תֵּימָא אוֹמֵר: הֱוֵי עַז כַּנָּמֵר, וְקַל כַּנֶּשֶׁר, וְרָץ כַּצָּבִי, וְגִבּוֹר כָּאֲרִי, לַעֲשׂוֹת רְצוֹן אָבִיךָ שֶׁבַּשָּׁמַיִם.',
        transliteration: 'Yehouda ben Teima omer: Hevei az kanamer, ve\'kal kanasher, ve\'rats katsvi, ve\'gibor ka\'ari, la\'asot retson avicha she\'bashamayim.',
        french: 'Judah ben Tema dit : Sois audacieux comme le léopard, léger comme l\'aigle, rapide comme le cerf et fort comme le lion pour accomplir la volonté de ton Père céleste.',
        occasion: 'Étude',
        source: 'Pirké Avot 5:20 — Judah ben Tema',
        description: 'Les quatre animaux symboles des qualités nécessaires au service de Dieu : l\'audace du léopard (ne pas avoir honte), la légèreté de l\'aigle (s\'élever au-dessus des contingences), la rapidité du cerf (saisir l\'occasion), et la force du lion (vaincre ses tentations).',
      },
      {
        id: 'avot-1-15',
        title: 'Shamaï — Accueille chaque homme',
        hebrew: 'שַׁמַּאי אוֹמֵר: עֲשֵׂה תוֹרָתְךָ קֶבַע. אֱמֹר מְעַט וַעֲשֵׂה הַרְבֵּה. וֶהֱוֵי מְקַבֵּל אֶת כָּל הָאָדָם בְּסֵבֶר פָּנִים יָפוֹת.',
        transliteration: 'Shamaï omer: Asei Toratcha keva. Emor me\'at va\'ase harbeh. Ve\'hevei mekabel et kol ha\'adam be\'sever panim yafot.',
        french: 'Shamaï dit : Fais de l\'étude de la Torah ta vocation fixe. Dis peu et fais beaucoup. Et accueille tout être humain avec un visage bienveillant.',
        occasion: 'Étude',
        source: 'Pirké Avot 1:15 — Shamaï',
        description: 'Enseignement de Shamaï (rival de Hillel) sur la priorité de l\'étude, la valeur des promesses tenues (dire peu, faire beaucoup), et l\'accueil chaleureux de chaque personne. Le "visage bienveillant" (sever panim yafot) est considéré comme une forme d\'aumône spirituelle.',
      },
      {
        id: 'avot-2-1',
        title: 'Rabbi — Quelle est la bonne voie ?',
        hebrew: 'רַבִּי אוֹמֵר: אֵיזוֹ הִיא דֶרֶךְ יְשָׁרָה שֶׁיָּבֹר לוֹ הָאָדָם? כֹּל שֶׁהִיא תִפְאֶרֶת לְעוֹשֶׂיהָ וְתִפְאֶרֶת לוֹ מִן הָאָדָם.',
        transliteration: 'Rabbi omer: Eizo hi derech yeshara she\'yavar lo ha\'adam? Kol she\'hi tiferet le\'oseiha ve\'tiferet lo min ha\'adam.',
        french: 'Rabbi dit : Quelle est la bonne voie que l\'homme doit choisir pour lui-même ? Toute celle qui fait honneur à celui qui l\'accomplit et lui vaut l\'estime des autres hommes.',
        occasion: 'Étude',
        source: 'Pirké Avot 2:1 — Rabbi Yehuda HaNasi (Judah le Prince)',
        description: 'Rabbi Yehuda HaNasi, compilateur de la Mishna, enseigne que la droiture se reconnaît à son double fruit : la dignité intérieure de celui qui agit bien, et l\'estime des autres. La vertu authentique harmonise l\'exigence divine et le regard humain.',
      },
    ],
  },
];
