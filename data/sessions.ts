export interface SessionStep {
  type: 'intro' | 'reading' | 'practice' | 'reflection' | 'closing';
  durationSec: number;
  text: string;
  instruction?: string;
}

export interface DailySessionData {
  id: string;
  title: string;
  subtitle: string;
  durationMin: number;
  theme: string;
  steps: SessionStep[];
}

export const DAILY_SESSIONS: DailySessionData[] = [
  {
    id: 'session_shema_01',
    title: '5 minutes avec le Shema',
    subtitle: `Proclamer l'Unicite Divine`,
    durationMin: 5,
    theme: 'Emunah',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Le Shema Yisrael est le coeur de la foi juive. Cette declaration — "Ecoute Israel, l'Eternel est notre Dieu, l'Eternel est Un" — unit toutes les generations du peuple juif.`,
        instruction: `Installez-vous confortablement. Fermez les yeux un instant.`,
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `שְׁמַע יִשְׂרָאֵל יְיָ אֱלֹהֵינוּ יְיָ אֶחָד\nShema Yisrael, Adonai Elohenou, Adonai Ehad.\n"Ecoute Israel, l'Eternel est notre Dieu, l'Eternel est Un."\n\nבָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד\nBaroukh shem kevod malkhuto le'olam va'ed.\n"Beni soit le Nom glorieux de Son regne pour toujours et a jamais."`,
        instruction: `Lisez lentement, en savourant chaque mot.`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Recitez le Shema a voix haute, une main posee sur les yeux selon la tradition. Concentrez-vous sur le mot "Ehad" (Un) — ressentez l'unicite absolue de Hachem.`,
        instruction: `Repetez trois fois, en augmentant l'intensite de votre kavanah (intention).`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Qu'est-ce que l'Unicite de Hachem signifie dans votre vie aujourd'hui ? Comment cette unicite se manifeste-t-elle dans vos choix quotidiens ?`,
        instruction: `Meditez en silence.`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Vous avez accompli une mitzvah essentielle. Le Shema est notre declaration d'amour et de foi. Portez cette Unicite avec vous tout au long de cette journee.`,
      },
    ],
  },
  {
    id: 'session_modeh_ani_02',
    title: 'Modeh Ani — Gratitude au reveil',
    subtitle: `Accueillir le don de chaque matin`,
    durationMin: 5,
    theme: 'Simcha',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Modeh Ani — "Je rends grace" — sont les premiers mots que le Juif prononce chaque matin, avant meme de se lever. Hachem a rendu notre ame (neshamah) apres le sommeil.`,
        instruction: `Prenez conscience du souffle de vie en vous.`,
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `מוֹדֶה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָּם\nModeh Ani lefanekha Melekh Hai veKayam\n"Je rends grace devant Toi, Roi vivant et eternel,\nqui as rendu en moi mon ame avec misericorde — grande est Ta fidelite."`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Listez mentalement cinq dons recus ce matin : votre souffle, vos sens, vos proches, la lumiere du jour, et votre capacite a penser. Pour chacun, murmurez "Modeh Ani — je Te rends grace."`,
        instruction: `Soyez precis et sincere dans votre gratitude.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La gratitude (hakarat hatov — reconnaitre le bien) transforme notre regard sur le monde. Quelle petite chose avez-vous neglige de remercier cette semaine ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Chaque journee est un cadeau renouvele. Portez la gratitude comme un vetement precieux tout au long de ce jour.`,
      },
    ],
  },
  {
    id: 'session_amida_03',
    title: `L'Amida — Les 18 benedictions`,
    subtitle: `La priere centrale de Shmoneh Esrei`,
    durationMin: 8,
    theme: 'Tefillah',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: `L'Amida (litteralement "se tenir debout") — aussi appelee Shmoneh Esrei (dix-huit benedictions) — est la priere silencieuse par excellence. On se tient debout, pieds joints, face a Jerusalem.`,
        instruction: `Debout, pieds joints, tournez-vous vers l'est si possible.`,
      },
      {
        type: 'reading',
        durationSec: 120,
        text: `Les trois premieres benedictions louent Hachem :\n1. Avot — les merites des Peres fondateurs\n2. Guevourot — la puissance divine, y compris la resurrection\n3. Kedoushat Hashem — la saintete du Nom\n\nLes 13 benedictions du milieu sont des demandes :\nConnaissance, Repentir, Pardon, Delivrance, Guerison, Prosperite, Rassemblement des exiles, Justice, Contre le mal, Pour les justes, Reconstruction de Jerusalem, Regne de David, Ecoute de la priere.\n\nLes trois dernieres benedictions :\nService du Temple, Remerciements, Paix.`,
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Recitez a voix basse la benediction de Refouenou (guerison) avec kavanah particuliere :\n\nרְפָאֵנוּ יְיָ וְנֵרָפֵא הוֹשִׁיעֵנוּ וְנִוָּשֵׁעָה\nRefaenou Adonai veNerafe, Hoshienou veNivasha\n"Gueris-nous, Eternel, et nous serons gueris. Sauve-nous et nous serons sauves."\n\nPensez a quelqu'un qui a besoin de guerison.`,
        instruction: `Priez du fond du coeur pour cette personne.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La priere n'est pas magique — c'est un dialogue. Dans quelle mesure votre tefillah est-elle sincere ? Qu'est-ce qui vous empeche parfois de vous "tenir vraiment devant Hachem" ?`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: `Terminez avec Oseh Shalom :\nעֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו הוּא יַעֲשֶׂה שָׁלוֹם עָלֵינוּ\n"Que Celui qui cree la paix dans Ses hauteurs, cree la paix pour nous et pour tout Israel."`,
      },
    ],
  },
  {
    id: 'session_ashrei_04',
    title: 'Ashrei — Psaume 145',
    subtitle: `La louange alphabetique de David`,
    durationMin: 6,
    theme: 'Tefillah',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Le Psaume 145, recite trois fois par jour, est un acrostiche hebreu — chaque verset commence par une lettre de l'aleph-bet. Le Talmud dit : "Celui qui le recite trois fois par jour est assure d'avoir sa part dans le monde a venir."`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `אַשְׁרֵי יוֹשְׁבֵי בֵיתֶךָ עוֹד יְהַלְלוּךָ סֶּלָה\n"Heureux ceux qui demeurent dans Ta Maison — ils Te loueront toujours. Sela."\n\nפּוֹתֵחַ אֶת יָדֶךָ וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן\n"Tu ouvres Ta main et rassasies tout etre vivant selon Ta volonte."\n\nצַדִּיק יְיָ בְּכָל דְּרָכָיו וְחָסִיד בְּכָל מַעֲשָׂיו\n"L'Eternel est juste en toutes Ses voies et misericordieux en toutes Ses oeuvres."`,
        instruction: `Lisez avec lenteur, laissez chaque mot resonner.`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Contemplez le verset "Poteah et yadekha" — Tu ouvres Ta main. Hachem nourrit toute creature vivante. Respirez profondement et realisez que votre souffle meme est un don perpetuel.`,
        instruction: `A chaque inspiration, recevez. A chaque expiration, remerciez.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La louange (shevah) precede la demande dans la priere juive. Pourquoi est-il important de louer avant de demander ? Qu'est-ce que cela dit de notre relation avec Hachem ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Que votre bouche dise la louange de l'Eternel — aujourd'hui et a jamais. Aleph jusqu'au Tav, du debut a la fin de l'existence, tout dit Sa gloire.`,
      },
    ],
  },
  {
    id: 'session_lecha_dodi_05',
    title: 'Lecha Dodi — Accueil du Shabbat',
    subtitle: `Accueillir la Reine Shabbat`,
    durationMin: 7,
    theme: 'Shabbat',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: `Lecha Dodi — "Viens mon bien-aime" — est le poeme mystique de Rabbi Shlomo Alkabetz (XVIe siecle, Safed). Chaque vendredi soir, la communaute se retourne vers la porte pour "accueillir" la Reine Shabbat qui entre.`,
        instruction: `Imaginez l'entree solennelle du Shabbat dans votre espace.`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `לְכָה דוֹדִי לִקְרַאת כַּלָּה פְּנֵי שַׁבָּת נְקַבְּלָה\nLekha Dodi liKrat Kala, Pnei Shabbat Nekabela\n"Viens mon bien-aime, a la rencontre de la Fiancee — accueillons la face du Shabbat."\n\nשָׁמוֹר וְזָכוֹר בְּדִבּוּר אֶחָד הִשְׁמִיעָנוּ אֵל הַמְּיוּחָד\n"Observer et Souvenir en une seule parole, nous a fait entendre le Dieu Unique."`,
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Preparez votre espace interieur pour le Shabbat. Mentalement, mettez de cote les soucis de la semaine. Allumez symboliquement — dans votre coeur — les deux bougies du Shabbat.\n\nMurmurez : "Barekhi nafshi et Adonai" — "Mon ame, benis l'Eternel."`,
        instruction: `Laissez la paix du Shabbat descendre sur vous.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Le Shabbat est un "gout du monde a venir". Comment pourriez-vous mieux vous preparer a recevoir la Reine Shabbat — tant exterieurement qu'interieurement ?`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: `בּוֹאִי בְשָׁלוֹם עֲטֶרֶת בַּעְלָהּ\nBoi veShalom Ateret Baalah\n"Entre en paix, couronne de son epoux — Shabbat Shalom."`,
      },
    ],
  },
  {
    id: 'session_havdalah_06',
    title: 'Havdalah — Separation et lumiere',
    subtitle: `Distinguer le sacre du profane`,
    durationMin: 6,
    theme: 'Shabbat',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Havdalah (separation) clot le Shabbat. Trois benedictions — sur le vin, les epices (besamim) et la flamme — symbolisent le passage du saint a l'ordinaire. On respire les epices pour conserver la "neshama yetarah", l'ame supplementaire du Shabbat.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `הִנֵּה אֵל יְשׁוּעָתִי אֶבְטַח וְלֹא אֶפְחָד\n"Voici, Dieu est ma delivrance — je ferai confiance sans crainte."\n\nהַמַּבְדִּיל בֵּין קֹדֶשׁ לְחֹל\nHaMavdil bein Kodesh leHol\n"Qui distingue entre le sacre et le profane, entre la lumiere et les tenebres, entre Israel et les nations, entre le septieme jour et les six jours d'oeuvre."`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Contemplez la flamme de la havdalah — ou visualisez-la. Ses douze fleches de lumiere symbolisent les douze tribus. Regardez vos ongles a la lumiere selon la tradition.\n\nImagez le parfum des epices : vous retenez quelque chose du Shabbat pour la semaine qui vient.`,
        instruction: `Inspirez profondement. Retenez la saintete.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Shavua Tov — une bonne semaine. Quelle intention (kavanah) portez-vous de ce Shabbat vers la semaine qui commence ? Quelle flamme allez-vous entretenir ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `אֵלִיָּהוּ הַנָּבִיא — Eliyahou HaNavi, Eliyahou HaTishbi. Que la semaine soit douce comme le vin, parfumee comme les epices, lumineuse comme la flamme.`,
      },
    ],
  },
  {
    id: 'session_mussar_07',
    title: 'Mussar — Travail moral du coeur',
    subtitle: `Purifier les middot, les qualites de l'ame`,
    durationMin: 8,
    theme: 'Mussar',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: `Le Mussar est un mouvement ethique fonde par Rabbi Israel Salanter (XIXe siecle). Il enseigne a transformer les middot (traits de caractere) — patience, humilite, verite, generosite — par un travail interieur constant.`,
        instruction: `Choisissez mentalement une middah a travailler aujourd'hui.`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `מֶסִילַּת יְשָׁרִים — Mesilat Yesharim (Le sentier des justes) de Rabbi Moshe Hayyim Luzzatto :\n\n"La base de la piete et la racine du service parfait est que l'homme clarifie et etablisse dans sa verite ce qui est son devoir dans son monde."\n\nChaque jour, chaque interaction est une occasion de raffinement. La colere, l'orgueil, la jalousie — ce sont des pierres dans le chemin. Le Mussar nous apprend a les deplacer.`,
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Exercice de Hitbonenut (contemplation) sur l'humilite (anavah) :\n\n1. Pensez a une situation recente ou vous avez reagi avec orgueil ou impatience.\n2. Demandez : "Qu'est-ce que la Torah attend de moi dans ce moment ?"\n3. Visualisez comment Rabbi Salanter ou le Hozeh de Lublin aurait agi.\n4. Formulez une resolution concrete pour les 24 prochaines heures.`,
        instruction: `Soyez honnete avec vous-meme. Pas de jugement, mais de clarte.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Le Mussar enseigne : "L'etude sans pratique est comme nuage sans pluie." Quelle middah necessite votre attention ce mois-ci ? Quel obstacle interieur vous empeche de grandir ?`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: `L'ame juive est "une part d'Hachem d'en-haut" (helek Eloka mimaal). En travaillant nos middot, nous polissons ce miroir divin. Soyez doux avec vous-meme — et exigeant avec douceur.`,
      },
    ],
  },
  {
    id: 'session_teshuvah_08',
    title: 'Teshuvah — Le retour sincere',
    subtitle: `Revenir a son vrai moi, revenir a Hachem`,
    durationMin: 7,
    theme: 'Teshuvah',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Teshuvah signifie "retour" — pas seulement repentir. C'est un retour vers Hachem, vers soi-meme, vers sa source. Le Rambam (Maimonide) enseigne que la teshuvah est complete quand, face a la meme situation, on agit differemment.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Rambam, Hilkhot Teshuvah :\n"Qu'est-ce que la teshuvah complete ? Quand l'occasion se represente a lui de commettre la meme faute, et qu'il s'en abstient — non par crainte ni par faiblesse, mais parce qu'il a fait teshuvah."\n\nמִי כָמוֹךָ אֵל מָחוּל עָוֹן — "Qui est comme Toi, Dieu qui efface l'iniquite ?"`,
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Les quatre etapes de la teshuvah :\n\n1. Hakarat hakhet — reconnaitre la faute avec precision\n2. Haratah — ressentir un regret sincere\n3. Vidoui — la confession (Ashamti, Bagadti... la liste des fautes)\n4. Kabbalah leAtid — resolution pour l'avenir\n\nParcourez ces quatre etapes pour une situation specifique.`,
        instruction: `Parlez a Hachem comme a un Pere aimant qui attend votre retour.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Rabbi Nachman enseigne que la teshuvah est accessible a tous, en tout moment, peu importent les fautes. "Il n'y a pas de desespoir dans le monde." Croyez-vous vraiment que vous pouvez changer ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `שׁוּבָה יִשְׂרָאֵל עַד יְיָ אֱלֹהֶיךָ\nShouva Yisrael ad Adonai Elohekha\n"Reviens, Israel, jusqu'a l'Eternel ton Dieu." (Osee 14:2)\nLa porte de la teshuvah est toujours ouverte.`,
      },
    ],
  },
  {
    id: 'session_tzedakah_09',
    title: 'Tzedakah — Justice et generosite',
    subtitle: `Donner comme acte de justice divine`,
    durationMin: 6,
    theme: 'Chesed',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Tzedakah vient de "tzedek" — justice. Donner n'est pas un acte de charite optionnel mais un devoir de justice : ce que nous possedons appartient en partie a ceux qui en ont besoin. Le Rambam liste huit niveaux de tzedakah.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Rambam, Hilkhot Matanot Aniyim — Les huit niveaux de tzedakah :\n\n8. Donner a contrecoeur\n7. Donner moins que ce qu'on devrait\n6. Donner apres qu'on vous le demande\n5. Donner avant qu'on vous le demande\n4. Donner sans savoir au beneficiaire mais le beneficiaire sait\n3. Beneficiaire ne sait pas mais donneur sait\n2. Donner anonymement dans les deux sens\n1. (Le plus haut) Aider quelqu'un a devenir autonome — par emploi, pret, ou partenariat.`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Engagez-vous aujourd'hui dans un acte de tzedakah :\n- Mettez de cote une somme, meme petite, dans une pushke (tirelire pour la charite)\n- Identifiez quelqu'un dans votre entourage qui a besoin d'aide concrete\n- Offrez de votre temps — tzedakah ce n'est pas que l'argent\n\nPensez a comment elever votre niveau de tzedakah selon l'echelle du Rambam.`,
        instruction: `Prenez une decision concrete, maintenant.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La Torah dit : "Tu ouvriras certainement ta main a ton frere, a ton pauvre." Le mot "certainement" (pateah tiftah) indique l'urgence. Est-ce que votre tzedakah est a la hauteur de vos capacites ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `Tzedakah tail mimavet — "La tzedakah sauve de la mort." Chaque acte de generosite est un lien entre le monde d'en-bas et le monde d'en-haut. Soyez un canal de bienveillance divine.`,
      },
    ],
  },
  {
    id: 'session_tikun_olam_10',
    title: 'Tikun Olam — Reparer le monde',
    subtitle: `Notre responsabilite envers la creation`,
    durationMin: 7,
    theme: 'Tikun',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Tikun Olam — "reparation du monde" — vient de la Kabbale louria nique : les "etincelles divines" (nitzotzot) dispersees dans le monde attendent d'etre elevees par nos actes justes. Chaque mitzvah accomplie repare un fragment du monde.`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `מִפְּנֵי תִקּוּן הָעוֹלָם — "A cause du Tikun du monde" (Michna Guittin)\n\nRabbi Yitzhak Luria (le Ari Zal) enseigne que chaque Juif a des nitzotzot (etincelles) a elever — dans sa propre ame et dans le monde. Quand nous accomplissons une mitzvah avec kavanah, nous elevons ces etincelles vers leur source divine.\n\nAlenu leShabeath — "C'est notre devoir de louer..." et de reparer.`,
      },
      {
        type: 'practice',
        durationSec: 100,
        text: `Identifiez trois domaines de votre vie ou vous pouvez accomplir un Tikun :\n\n1. Tikun personnel — une habitude a transformer\n2. Tikun familial — une relation a reparer ou nourrir\n3. Tikun communautaire — une contribution a votre kehila (communaute)\n\nChoisissez une action concrete pour chaque domaine cette semaine.`,
        instruction: `Soyez specifique. Les grandes idees naissent de petits actes.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `לֹא עָלֶיךָ הַמְּלָאכָה לִגְמֹר — "Tu n'es pas oblige d'achever la tache, mais tu n'es pas libre de t'en dispenser." (Pirke Avot 2:16) Quel est votre "Tikun" particulier dans ce monde ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Chaque etincelle elevee illumine le monde un peu plus. Vous n'etes pas seul dans cette tache — tout Israel travaille ensemble a la reparation. Soyez un porteur de lumiere.`,
      },
    ],
  },
  {
    id: 'session_kabalat_ol_11',
    title: 'Kabbalat Ol Malkhout Shamayim',
    subtitle: `Accepter le joug du Royaume Celeste`,
    durationMin: 5,
    theme: 'Emunah',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Kabbalat ol malkhout shamayim — "accepter le joug du Royaume Celeste" — c'est reconnaitre que Hachem est Roi, que Sa volonte prime sur nos desirs. Le Shema est l'expression par excellence de cette acceptation.`,
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `Le mot "ol" (joug) peut sembler pesant — mais les maitres enseignent que c'est le joug le plus leger qui soit. Quand on accepte la royaute divine, on est libere du joug des passions, des peurs, des ego.\n\n"Mon joug est doux et mon fardeau leger" — source dans la tradition de Sagesse juive sur la Torah.`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Exercice de soumission volontaire :\n\nDites a voix haute : "Hachem, Tu es mon Roi. Je soumets ma volonte a la Tienne avec amour."\n\nPuis pensez a quelque chose que vous souhaitez mais qui va peut-etre contre la volonte de Hachem. Pratiquez l'acceptation — non par resignation, mais par confiance en Sa sagesse superieure.`,
        instruction: `Ceci est un acte d'amour, pas de defaite.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Quelle partie de votre vie avez-vous du mal a "remettre a Hachem" ? Qu'est-ce qui vous retient d'accepter pleinement Sa royaute ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד\n"Beni soit le Nom de Sa royaute glorieuse pour toujours." Amen.`,
      },
    ],
  },
  {
    id: 'session_torah_lishmah_12',
    title: `Torah Lishmah — Etude pour elle-meme`,
    subtitle: `L'etude de la Torah comme fin en soi`,
    durationMin: 8,
    theme: 'Torah',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Torah lishmah — etudier la Torah pour elle-meme, sans arriere-pensee de prestige ou de recompense. Les maitres du Talmud enseignent que cette etude pure est le but ultime — elle transforme l'etudiant de l'interieur.`,
      },
      {
        type: 'reading',
        durationSec: 100,
        text: `Pirke Avot 6:1 :\n"Celui qui etudie la Torah pour elle-meme merite beaucoup de choses... il est appele ami, aime, amant de l'Omnipresent, amant de Ses creatures. Elle lui donne de l'humilite et de la crainte de Hachem, le prepare a etre juste, pieux, sincere et fidele."\n\nרַבִּי מֵאִיר אוֹמֵר — Rabbi Meir enseigne que l'etude lishmah habille l'etudiant d'humilite et de reverence.`,
      },
      {
        type: 'practice',
        durationSec: 130,
        text: `Lisez lentement Deuteronome 6:4-9 (le passage du Shema) :\n\nConsacrez 5 minutes a un seul verset. Posez-vous ces questions :\n- Que dit ce mot en hebreu exactement ?\n- Que commentent Rachi et le Rambam ?\n- Comment ce verset parle-t-il a ma vie aujourd'hui ?\n- Quelle question ce verset souleve-t-il pour la prochaine etude ?\n\nC'est la methode du Havruta — l'etude en dialogue.`,
        instruction: `Etudiez lentement. Un verset compris vaut mieux que dix survoles.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Comment transformez-vous l'etude en action ? La Torah ne doit pas rester dans la tete — elle doit descendre dans le coeur et les mains. Quel verset a change un comportement dans votre vie ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `כִּי הֵם חַיֵּינוּ וְאֹרֶךְ יָמֵינוּ\n"Car elle est notre vie et la longueur de nos jours." La Torah est arbre de vie pour ceux qui s'y accrochent.`,
      },
    ],
  },
  {
    id: 'session_tefillah_coeur_13',
    title: `Tefillah — Priere du coeur`,
    subtitle: `Parler a Hachem comme a un Pere`,
    durationMin: 6,
    theme: 'Tefillah',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `La priere authentique (avodah shebalev — service du coeur) va au-dela des mots fixes. Rabbi Nachman de Breslev enseignait a parler a Hachem en langue naturelle, comme un enfant parle a son pere. Pas de formule — juste la verite du moment.`,
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Talmud, Berakhot 31a :\n"Hanah priait de tout son coeur — elle murmurait, ses levres bougeaient, mais sa voix ne s'entendait pas." C'est le modele de la priere sincere.\n\nLe Baal Shem Tov enseigne : "Les lettres de priere sont les demeures ou Hachem reside. L'homme qui prie entre dans ces demeures."`,
      },
      {
        type: 'practice',
        durationSec: 110,
        text: `Maintenant, parlez a Hachem. En francais, en hebreu, dans la langue de votre coeur.\n\nDites-Lui :\n- Ce qui vous pese aujourd'hui\n- Ce pour quoi vous etes reconnaissant\n- Ce que vous demandez pour vous et vos proches\n- Ce que vous souhaitez devenir\n\nPas de formule. Juste votre verite.`,
        instruction: `Minimum 3 minutes de conversation sincere.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Avez-vous senti la presence (shekhinah) pendant cette priere ? Qu'est-ce qui vous aide a vous ouvrir dans la priere ? Qu'est-ce qui vous ferme ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `כִּי אַתָּה שׁוֹמֵעַ תְּפִלַּת כָּל פֶּה\n"Car Tu ecoutes la priere de toute bouche." Hachem t'a ecoute.`,
      },
    ],
  },
  {
    id: 'session_ahavat_yisrael_14',
    title: 'Ahavat Yisrael — Aimer son prochain',
    subtitle: `Le grand principe de la Torah`,
    durationMin: 6,
    theme: 'Chesed',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Rabbi Akiva declara : "Veaimahavta lereakha kamokha — Tu aimeras ton prochain comme toi-meme — c'est le grand principe de la Torah." Cette mitzvah est la fondation de toute la vie juive.`,
      },
      {
        type: 'reading',
        durationSec: 75,
        text: `Hillel et le non-Juif (Talmud, Shabbat 31a) :\nUn homme demanda a Hillel de lui enseigner toute la Torah sur un pied. Hillel repondit :\n\n"Ce qui t'est odieux, ne le fais pas a ton prochain. C'est toute la Torah — le reste n'est que commentaire. Va etudier."\n\nוְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ\nVeAhavta leReakha Kamokha — "Tu aimeras ton prochain comme toi-meme." (Levitique 19:18)`,
      },
      {
        type: 'practice',
        durationSec: 100,
        text: `Exercice d'Ahavat Yisrael :\n\n1. Pensez a quelqu'un avec qui vous avez de la friction. Cherchez trois qualites en cette personne.\n2. Pensez a quelqu'un que vous aimez. Renforcez cet amour en listant ce que vous admiriez en lui/elle.\n3. Pensez a un Juif que vous ne connaissez pas. Rappelez-vous que votre ame et la sienne partagent une source commune au Sinai.\n4. Engagez-vous a un acte de chesed concret envers quelqu'un aujourd'hui.`,
        instruction: `L'amour se cultive — c'est une pratique, pas un sentiment passif.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Le Temple a ete detruit a cause de la haine gratuite (sinat hinam). Il sera rebati par l'amour gratuit (ahavat hinam). Comment contribuez-vous a cette reconstruction ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Aimez avec actions, pas seulement avec mots. Aujourd'hui, cherchez une occasion concrete d'exprimer votre ahavat Yisrael.`,
      },
    ],
  },
  {
    id: 'session_bitahon_15',
    title: 'Bitahon — Confiance totale en Hachem',
    subtitle: `S'appuyer sur Hachem comme un enfant sur son pere`,
    durationMin: 7,
    theme: 'Emunah',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Bitahon est plus que la foi (emunah) — c'est la confiance active. Emunah croit que Hachem peut. Bitahon sait que Hachem agira pour le bien. Le Hovot HaLevavot (Devoirs du Coeur) de Rabbi Bahya Ibn Paquda lui consacre tout un traite.`,
      },
      {
        type: 'reading',
        durationSec: 85,
        text: `Hovot HaLevavot, Sha'ar HaBitahon :\n"Sache que le bitahon de l'homme en Hachem est l'apaisement de son coeur et le repos de son ame. Il se repose sur Hachem dans ses affaires mondaines et dans les affaires de l'au-dela."\n\nבְּטַח בַּיהוָה בְּכָל לִבֶּךָ\nBetah baAdonai bekhol libekha\n"Fie-toi a l'Eternel de tout ton coeur, et ne t'appuie pas sur ta propre intelligence." (Proverbes 3:5)`,
      },
      {
        type: 'practice',
        durationSec: 110,
        text: `Exercice de lacher-prise (bitahon) :\n\nIdentifiez une situation qui vous cause anxiete ou controle excessif. Visualisez-la clairement.\n\nDites a voix haute : "Hachem, je fais ce qui est en mon pouvoir. Le reste, je Te le confie avec confiance et amour."\n\nRespirez profondement. Sentez le poids se deposer. Ce n'est pas de la passivite — c'est de la sagesse.`,
        instruction: `La confiance ne supprime pas l'effort — elle le libere.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Ou est-ce que vous remplacez le bitahon par de l'anxiete ? Hachem s'est-Il jamais manque a Ses promesses envers vous ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `כִּי יְיָ יִהְיֶה בְכִסְלֶךָ וְשָׁמַר רַגְלְךָ מִלָּכֶד\n"Car l'Eternel sera ta confiance, Il gardera ton pied du piege." Marchez avec confiance — Hachem ouvre le chemin.`,
      },
    ],
  },
  {
    id: 'session_hitbonenut_16',
    title: 'Hitbonenut — Contemplation divine',
    subtitle: `Mediter sur la grandeur de Hachem`,
    durationMin: 8,
    theme: 'Hitbonenut',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: `Hitbonenut (de "bina" — comprehension) est la meditation intellectuelle profonde enseignee par le Tanya (Rabbi Shneour Zalman de Liadi). On contemple un concept divin jusqu'a ce qu'il descende du cerveau dans le coeur.`,
        instruction: `Choisissez un endroit calme. Fermez les yeux.`,
      },
      {
        type: 'reading',
        durationSec: 100,
        text: `Tanya, Chap. 3 — La lumiere d'Hachem remplit l'univers entier :\n\n"Omlo khol ha'aretz kevodo — Sa gloire remplit toute la terre." (Esaie 6:3)\n\nLe Tanya enseigne : il y a une lumiere infinie (Or Ein Sof) qui penetre toute la creation. Cette lumiere ne voyage pas — elle est deja partout. Notre travail est d'en prendre conscience.`,
      },
      {
        type: 'practice',
        durationSec: 140,
        text: `Meditation sur l'Or Ein Sof (lumiere infinie) :\n\n1. Fermez les yeux. Visualisez un point de lumiere doree dans votre coeur.\n2. Laissez cette lumiere s'etendre doucement — corps, piece, ville, pays, planete, galaxie, univers.\n3. Realisez que cette lumiere etait la avant votre naissance et sera la apres votre mort.\n4. Sentez votre "moi" se dissoudre doucement dans cette lumiere tout en restant pleinement vous-meme.\n5. Revenez doucement.`,
        instruction: `Prenez votre temps. Il n'y a pas d'urgence dans l'infini.`,
      },
      {
        type: 'reflection',
        durationSec: 65,
        text: `Avez-vous eu un moment de paix, d'expansion ? La hitbonenut change notre rapport au temps et a l'espace. Comment cette meditation affecte-t-elle votre humeur quotidienne ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `מָלֵא כָל הָאָרֶץ כְּבוֹדוֹ\n"Toute la terre est remplie de Sa gloire." Ouvrez les yeux et voyez le monde differemment.`,
      },
    ],
  },
  {
    id: 'session_hitbodedut_17',
    title: 'Hitbodedut — Priere spontanee',
    subtitle: `La meditation solitaire de Rebbe Nachman`,
    durationMin: 10,
    theme: 'Hitbodedut',
    steps: [
      {
        type: 'intro',
        durationSec: 50,
        text: `Hitbodedut (solitude/isolement) est la pratique centrale de Rebbe Nachman de Breslev. Chaque jour, pendant au moins une heure (ou au moins quelques minutes), on parle a Hachem en langue naturelle — en deversant son coeur sans retenue.`,
        instruction: `Trouvez un endroit prive. Aucune interruption.`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `Liqoutei Moharan de Rebbe Nachman :\n\n"L'essentiel de l'hitbodedut est de parler librement devant Hachem dans la langue que l'on connait le mieux... Meme si l'on dit seulement : 'Maitre du monde, je veux etre proche de Toi, mais je ne sais pas comment — aide-moi' — c'est deja tres precieux."\n\n"Sache que si tu n'es pas encore venu a l'hitbodedut, commence par ce seul mot. Repete ce mot maintes et maintes fois, jusqu'a ce que Hachem ait pitie de toi."`,
      },
      {
        type: 'practice',
        durationSec: 200,
        text: `Votre seance d'hitbodedut :\n\nPendant ces minutes, parlez a Hachem librement. Sujets possibles :\n\nVos joies et peines de la journee\nVos doutes sur la foi\nVos besoins spirituels et materiels\nVos relations — famille, amis, communaute\nVotre avenir et vos peurs\nCe que vous aimeriez devenir\nUn simple "merci"\n\nSi les mots ne viennent pas, pleurez. Les larmes sont aussi une priere.`,
        instruction: `Pas de formule. Soyez totalement honnete.`,
      },
      {
        type: 'reflection',
        durationSec: 70,
        text: `Rebbe Nachman dit : "L'hitbodedut est le chemin principal vers Hachem." Qu'avez-vous ressenti ? Y a-t-il eu un moment de connexion, meme bref ? Qu'avez-vous dit que vous n'aviez jamais ose dire ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Gevaltig — c'est la parole breslev pour "magnifique". Vous venez de vous tenir devant le Roi des rois. Rebbe Nachman dit : "Chaque parole d'hitbodedut est un monde."`,
      },
    ],
  },
  {
    id: 'session_anavah_18',
    title: `Anavah — L'humilite veritable`,
    subtitle: `Se voir a sa juste place devant Hachem`,
    durationMin: 6,
    theme: 'Mussar',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Anavah — l'humilite — n'est pas se diminuer ou se mepriser. C'est voir sa juste place : grand aux yeux des hommes quand cela sert Hachem, petit dans son propre regard. Moise etait "l'homme le plus humble de la terre" tout en etant le plus grand prophete.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Talmud, Sota 5a :\n"Hachem dit : Moi et l'orgueilleux ne pouvons pas cohabiter dans le monde."\n\nMaimonide, Michne Torah : Certains maitres disent qu'on doit etre extremement humble, pas simplement modere. Rabbi Nachman corrige : il faut de la confiance en soi (azut dekedushah — l'impudeur de la saintete) pour servir Hachem dans ce monde difficile.\n\nL'humilite vraie est de penser "tout ce que j'ai vient de Hachem — y compris mes talents."`,
      },
      {
        type: 'practice',
        durationSec: 100,
        text: `Exercice sur l'anavah :\n\n1. Listez 3 qualites dont vous etes fier.\n2. Pour chacune, dites : "Ce don m'a ete confie par Hachem pour servir Sa creation."\n3. Pensez a 3 personnes qui vous ont depasse dans ces domaines. Rejouissez-vous sincerement de leurs succes (simhat hamitzvah).\n4. Formez l'intention de ne pas vous comparer ce soir.`,
        instruction: `L'humilite libere de la jalousie.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Ou est-ce que l'orgueil (gaavah) vous empeche de grandir spirituellement ? Est-ce que vous avez du mal a demander pardon, a admettre une erreur, a apprendre d'un autre ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `וְהָאִישׁ מֹשֶׁה עָנָו מְאֹד\n"Et l'homme Moise etait tres humble." La grandeur veritable ne fait pas de bruit. Soyez silencieusement grand.`,
      },
    ],
  },
  {
    id: 'session_simcha_19',
    title: 'Simcha — La joie comme service divin',
    subtitle: `Servir Hachem dans la joie`,
    durationMin: 6,
    theme: 'Simcha',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Ivdu et Adonai beSimcha — "Servez l'Eternel dans la joie !" (Psaume 100:2). Rabbi Nachman enseigne : "La mitzvah gedolah lihyot besimcha tamid — c'est une grande mitzvah d'etre toujours dans la joie." La simcha n'est pas l'euphorie mais une joie profonde enracinee dans l'emunah.`,
      },
      {
        type: 'reading',
        durationSec: 75,
        text: `Liqoutei Moharan II, 24 :\n"Sache que la tristesse est un grand obstacle au service divin. Mais si tu te forces a la joie meme quand ton coeur est lourd — cette joie forcee finit par devenir vraie. C'est une grande guerison pour l'ame."\n\nLe Baal Shem Tov disait que la shekhinah (presence divine) ne reside pas dans la tristesse mais dans la joie de la mitzvah.`,
      },
      {
        type: 'practice',
        durationSec: 100,
        text: `Exercice de simcha active :\n\n1. Souriez — physiquement. Meme force, cela change votre chimie interieure.\n2. Pensez a 5 raisons objectives d'etre heureux en ce moment.\n3. Chantez ou fredonnez un nigoun (melodie hassidique) — meme sans paroles. La melodie seule eleve l'ame.\n4. Bougez votre corps : une danse legere de 30 secondes est une forme de tefillah.`,
        instruction: `La joie se pratique. Elle ne tombe pas du ciel.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Qu'est-ce qui vous vole votre simcha ? Les inquietudes, les regrets, les comparaisons ? Rabbi Nachman dit de "chasser la tristesse comme on chasse un ennemi." Comment pouvez-vous mieux proteger votre simcha ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `עִבְדוּ אֶת יְיָ בְּשִׂמְחָה\n"Servez l'Eternel dans la joie !" Gevaltig ! Que votre service divin soit empli de lumiere et de joie.`,
      },
    ],
  },
  {
    id: 'session_shacharit_20',
    title: `Shacharit — L'aurore de la priere`,
    subtitle: `Commencer la journee en presence divine`,
    durationMin: 7,
    theme: 'Tefillah',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Shacharit — la priere du matin — structure la journee juive. Avant meme de rencontrer le monde, on se tient devant le Roi. La priere du matin inclut les birkhot hashachar (benedictions du matin), pesukei dezimra (psaumes de louange), Shema, et Amida.`,
        instruction: `Lavez rituellement vos mains (netilat yadaim) si possible.`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `Birkhot HaShachar — Benedictions du matin :\n\nבָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם\n"Beni sois-Tu, Eternel notre Dieu, Roi de l'univers..."\n\n...qui n'as pas fait de moi un esclave\n...qui m'as cree a Ton image\n...qui redresses ceux qui sont courbes\n...qui etends la terre sur les eaux\n...qui as pourvu a tous mes besoins\n...qui fortifies les pas de l'homme\n...qui ceintures Israel de vaillance\n...qui couronnes Israel de gloire`,
      },
      {
        type: 'practice',
        durationSec: 110,
        text: `Recitez ces birkhot hashachar avec conscience. Pour chaque benediction, prenez un instant pour en ressentir la signification :\n\n- "Qui n'as pas fait de moi un esclave" -> liberte de conscience\n- "Qui redresses ceux qui sont courbes" -> le corps qui se reveille\n- "Qui ceintures Israel de vaillance" -> force pour la journee\n\nChaque benediction est une conscience eveillee.`,
        instruction: `Prenez minimum 30 secondes par benediction.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La priere du matin place Hachem en premier. Comment cette pratique change-t-elle la dynamique de votre journee comparee aux jours ou vous commencez sans priere ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Votre journee a commence en presence divine. Portez cette conscience avec vous. Chaque interaction aujourd'hui peut etre un acte de kiddush Hachem — sanctification du Nom.`,
      },
    ],
  },
  {
    id: 'session_emunat_chachamim_21',
    title: 'Emunat Chachamim — Foi dans les Sages',
    subtitle: `La transmission ininterrompue de la sagesse`,
    durationMin: 6,
    theme: 'Emunah',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Emunat chachamim — la foi dans les Sages — est la confiance que la chaine de transmission (mesorah) depuis le Sinai est authentique et fiable. Ce n'est pas une foi aveugle mais une foi eclairee dans la sagesse accumulee.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Pirke Avot 1:1 :\nמֹשֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ\n"Moise recut la Torah au Sinai et la transmit a Josue, Josue aux Anciens, les Anciens aux Prophetes, les Prophetes a la Grande Assemblee."\n\nCette chaine — de Moise jusqu'au dernier des rabbins — est intacte. Quand tu etudies un commentaire de Rachi (XIe siecle) ou de Maimonide (XIIe siecle), tu recois l'echo du Sinai.`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Tracez votre arbre de transmission :\n\nVotre rav -> son rav -> son rav -> ... -> Sinai\n\nSi vous ne connaissez pas vos maitres, commencez par : Rabbi Ovadia Yossef, le Gaon de Vilna, le Rambam, Rachi, Rav Saadya Gaon, les Gueonim, les Amoraim, les Tannaim, les Zugot, la Grande Assemblee, les Prophetes, Josue, Moise.\n\nCette chaine est la votre. Vous en faites partie.`,
        instruction: `Sentez le poids et la beaute de cette appartenance.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Y a-t-il un enseignement d'un sage qui a transforme votre vie ? Qui est votre "maitre de coeur" — celui dont les paroles resonnent le plus pour vous ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Vous n'etes pas seul dans votre chemin spirituel. Des millions de Juifs avant vous ont marche ce meme chemin, ont pose ces memes questions, ont connu ces memes doutes et ces memes lumieres. La mesorah vous appartient.`,
      },
    ],
  },
  {
    id: 'session_kedushah_22',
    title: 'Kedushah — La saintete dans le quotidien',
    subtitle: `Sanctifier chaque instant ordinaire`,
    durationMin: 6,
    theme: 'Kedushah',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Kedoshim tihiou — "Vous serez saints" (Levitique 19:2). Ce commandement est au coeur de la vie juive. La saintete n'est pas reservee au Temple ou au Shabbat — elle se construit dans chaque interaction, chaque repas, chaque parole.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Levitique 19 — le "chapitre de saintete" contient :\n- Honorer pere et mere\n- Observer le Shabbat\n- Ne pas se tourner vers les idoles\n- Laisser les pauvres glaner les champs\n- Ne pas voler, ne pas mentir\n- Ne pas jurer faussement\n- Ne pas opprimer son prochain\n- Aimer son prochain comme soi-meme\n\nCe chapitre est un guide pratique de saintete dans la vie ordinaire.`,
      },
      {
        type: 'practice',
        durationSec: 95,
        text: `Exercice de kedushah dans le quotidien :\n\nPour les prochaines 24 heures, ajoutez une kavana (intention) a trois actes ordinaires :\n1. Au repas : prononcez le birkat hamazon (grace apres le repas) avec conscience\n2. En parlant : pratiquez shmirat halashon (garder votre langue) — evitez un commeriage\n3. Au coucher : recitez le Shema du soir avec intention complete`,
        instruction: `Trois moments de conscience = trois ancres de kedushah.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Ou perdez-vous votre kedushah le plus facilement ? Dans vos paroles ? Vos regards ? Vos pensees ? Quel est le domaine ou vous souhaitez le plus progresser cette semaine ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `קְדֹשִׁים תִּהְיוּ כִּי קָדוֹשׁ אֲנִי יְיָ אֱלֹהֵיכֶם\n"Vous serez saints, car Je suis saint, Moi l'Eternel votre Dieu." Marchons vers la saintete, un pas a la fois.`,
      },
    ],
  },
  {
    id: 'session_shmirat_halashon_23',
    title: 'Shmirat HaLashon — Garder sa langue',
    subtitle: `Le pouvoir et la responsabilite des mots`,
    durationMin: 6,
    theme: 'Mussar',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Shmirat HaLashon — "garder la langue" — est le sujet du monumental ouvrage du Hafetz Hayyim (Rabbi Israel Meir Kagan, XIXe s.). Le lashon hara (medisance) est l'une des fautes les plus graves car elle blesse sans laisser de trace visible.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Talmud, Arakhin 15b :\n"Quiconque parle en mal de son prochain, c'est comme s'il niait la presence divine."\n\nHafetz Hayyim : Le lashon hara tue trois personnes — celui qui parle, celui qui ecoute, et celui dont on parle.\n\nמָוֶת וְחַיִּים בְּיַד לָשׁוֹן\n"La mort et la vie sont dans la main de la langue." (Proverbes 18:21)`,
      },
      {
        type: 'practice',
        durationSec: 100,
        text: `Test de shmirat halashon pour cette journee :\n\nAvant de parler de quelqu'un d'absent, posez ces questions :\n1. Est-ce vrai ?\n2. Est-ce necessaire ?\n3. Est-ce bienveillant ?\n4. Serais-je a l'aise si cette personne entendait ?\n\nSi la reponse est "non" a l'une de ces questions — ne le dites pas.\n\nRemplacez un commeriage par un compliment.`,
        instruction: `Pratiquez le silence bienveillant (shtika).`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Avez-vous dit quelque chose recemment qui a blesse quelqu'un ? Y a-t-il une reparation (teshuvah) a faire ? Les paroles blessantes peuvent se reparer par une demande sincere de pardon.`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `מִי הָאִישׁ הֶחָפֵץ חַיִּים\n"Qui est l'homme qui desire la vie ? Garde ta langue du mal." (Psaume 34:13-14) Chaque mot compte.`,
      },
    ],
  },
  {
    id: 'session_shabbat_preparation_24',
    title: 'Preparation du Shabbat — Hakhana',
    subtitle: `Preparer son interieur pour le Roi`,
    durationMin: 7,
    theme: 'Shabbat',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Hakhana — la preparation du Shabbat — commence des le dimanche dans la tradition hassidique. Le sixieme jour (vendredi), les preparatifs atteignent leur intensite. Preparer le Shabbat est une mitzvah en soi.`,
        instruction: `Que vous soyez vendredi ou non, voici comment preparer votre coeur.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Chemot (Exode) 16:23 :\n"C'est le Shabbat du repos saint pour l'Eternel. Faites cuire ce que vous voulez cuire, et bouillir ce que vous voulez bouillir. Tout ce qui reste, mettez-le de cote pour demain."\n\nLa manne du desert — le Shabbat avait une portion double (lechme mishneh). Nos deux hallot representent cette double portion.\n\nLe Zohar dit : chaque Juif a deux anges qui l'accompagnent chez lui le vendredi soir.`,
      },
      {
        type: 'practice',
        durationSec: 110,
        text: `Checklist de preparation interieure pour le Shabbat :\n\nFaire teshuvah pour les fautes de la semaine passee\nResoudre les conflits et demander pardon (erev Shabbat)\nMettre de cote les soucis financiers — Hachem pourvoit\nPreparer des paroles de Torah pour la table\nSe rappeler de quelqu'un a inviter (hakhnasat orhim)\nPrendre le bain rituel (mikveh si possible) ou une douche preparatoire\nS'habiller en l'honneur du Shabbat (likvod Shabbat)`,
        instruction: `Cochez interieurement chaque element.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Le Shabbat n'arrive pas par accident — il se prepare. Comment la preparation physique et spirituelle du Shabbat change-t-elle votre experience du Shabbat lui-meme ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Shabbat est le palais du temps. Preparer sa visite est un acte d'amour envers la Reine. Que votre Shabbat soit saint et joyeux — Shabbat Shalom umevourak !`,
      },
    ],
  },
  {
    id: 'session_psaume_23_25',
    title: `Psaume 23 — L'Eternel est mon berger`,
    subtitle: `Le psaume de la confiance absolue`,
    durationMin: 5,
    theme: 'Tefillah',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Le Psaume 23 de David est le psaume de la paix interieure absolue. Il est recite le vendredi soir, a Rosh Hashana, et accompagne les mourants. Il dit la confiance totale — meme dans la vallee de l'ombre de la mort.`,
      },
      {
        type: 'reading',
        durationSec: 100,
        text: `מִזְמוֹר לְדָוִד יְיָ רֹעִי לֹא אֶחְסָר\n"L'Eternel est mon berger — je ne manquerai de rien."\n\nבִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל מֵי מְנֻחוֹת יְנַהֲלֵנִי\n"Il me fait reposer dans de vertes prairies, Il me conduit vers des eaux paisibles."\n\nגַּם כִּי אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא אִירָא רָע כִּי אַתָּה עִמָּדִי\n"Meme si je marche dans la vallee de l'ombre de la mort, je ne crains aucun mal — car Tu es avec moi."\n\nאַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל יְמֵי חַיַּי\n"Oui, bonheur et grace m'accompagneront tous les jours de ma vie."`,
      },
      {
        type: 'practice',
        durationSec: 80,
        text: `Recitez le Psaume 23 lentement, trois fois.\n\nPremiere lecture : pour vous-meme\nDeuxieme lecture : pour quelqu'un qui traverse une epreuve\nTroisieme lecture : pour tout Israel dans l'epreuve`,
        instruction: `Laissez chaque verset vous penetrer.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Etes-vous actuellement dans une "vallee de l'ombre" ? David ne dit pas que la vallee n'existe pas — il dit qu'il ne craint pas parce que Hachem est avec lui. Comment portez-vous vos epreuves ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `Hachem est votre berger. Pas etait — est. Present, actif, maintenant. Laissez cette certitude vous accompagner ce soir.`,
      },
    ],
  },
  {
    id: 'session_sefirot_26',
    title: 'Les Sefirot du coeur',
    subtitle: `Explorer les attributs divins en nous`,
    durationMin: 8,
    theme: 'Kabbale',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: `Les dix Sefirot (attributs divins) de la Kabbale — Keter, Hokhmah, Binah, Chesed, Guevourah, Tiferet, Netzah, Hod, Yesod, Malkhout — sont aussi des attributs de l'ame humaine. "L'homme est fait a l'image de Dieu" — nous portons en nous ces dix lumieres.`,
      },
      {
        type: 'reading',
        durationSec: 100,
        text: `Les trois sefirot du coeur :\n\nחֶסֶד CHESED — Amour, generosite illimitee\nGEVOURAH גְּבוּרָה — Force, discipline, limites\nTIFERET תִּפְאֶרֶת — Beaute, harmonie, compassion (equilibre de Chesed et Guevourah)\n\nTiferet est associee au coeur. C'est le siege de l'amour equilibre — ni trop mou (Chesed sans limites) ni trop severe (Guevourah sans amour).\n\nChaque semaine du Omer travaille une combinaison de Sefirot.`,
      },
      {
        type: 'practice',
        durationSec: 130,
        text: `Meditation sur Tiferet (Harmonie-Beaute) :\n\n1. Visualisez une lumiere vert emeraude au centre de votre poitrine.\n2. A droite : Chesed — votre capacite a aimer sans condition.\n3. A gauche : Guevourah — votre capacite a poser des limites sainement.\n4. Au centre : Tiferet — la synthese parfaite.\n\nDemandez : "Dans quelle relation ai-je besoin de plus de Chesed ? Dans laquelle ai-je besoin de plus de Guevourah ?"`,
        instruction: `Laissez venir les reponses sans les forcer.`,
      },
      {
        type: 'reflection',
        durationSec: 65,
        text: `Quelle Sefira est la plus developpee en vous ? Laquelle est la plus faible ? Le travail spirituel consiste a equilibrer ces attributs — a l'image de l'Arbre de Vie.`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Vous portez en vous la carte de la creation. Les Sefirot sont les langages dans lesquels Hachem parle au monde. Apprenez a les reconnaitre en vous et autour de vous.`,
      },
    ],
  },
  {
    id: 'session_omer_27',
    title: `Sfira — Compter l'Omer`,
    subtitle: `Du Pessah a Shavouot : 49 jours de purification`,
    durationMin: 5,
    theme: 'Omer',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Sefirat HaOmer — le decompte de l'Omer — couvre 49 jours entre Pessah (liberation d'Egypte) et Shavouot (don de la Torah). Chaque jour correspond a une combinaison de Sefirot. C'est un chemin de purification interieure.`,
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Levitique 23:15-16 :\n"Vous compterez depuis le lendemain du Shabbat [de Pessah] — sept semaines completes... jusqu'au lendemain de la septieme semaine, vous compterez cinquante jours."\n\nLe Omer est un micrographie du chemin de l'ame : de la servitude (Mitzrayim — l'etroitesse) a la liberte (Torah — le don de sens).\n\nCombien de jours de l'Omer avons-nous comptes ?`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם\nאֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל סְפִירַת הָעֹמֶר\n"Beni sois-Tu... qui nous a sanctifies par Ses commandements et nous a ordonne de compter l'Omer."\n\nReflechissez a la Sefira du jour :\n- Semaine 1 : Chesed\n- Semaine 2 : Guevourah\n- Semaine 3 : Tiferet\n- Semaine 4 : Netzah\n- Semaine 5 : Hod\n- Semaine 6 : Yesod\n- Semaine 7 : Malkhout`,
        instruction: `Comptez le jour actuel. Meditez sur la Sefira correspondante.`,
      },
      {
        type: 'reflection',
        durationSec: 50,
        text: `Le Omer est un compte a rebours vers la Torah. Comment vous preparez-vous interieurement a recevoir la Torah a Shavouot ? Quelles "servitudes" interieures souhaitez-vous quitter ?`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Chaque jour compte est un pas vers le Sinai. La Torah n'est pas un evenement historique — elle est donnee a nouveau chaque annee, a celui qui se prepare a la recevoir.`,
      },
    ],
  },
  {
    id: 'session_rosh_hashana_28',
    title: 'Rosh Hashana — Couronnement du Roi',
    subtitle: `Meditation pour le Nouvel An juif`,
    durationMin: 7,
    theme: 'Yom Tov',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Rosh Hashana — Tete de l'An — est le jour du Jugement (Yom HaDin) et du Couronnement du Roi (Malkhout Shamayim). Les trois themes centraux du Mussaf sont : Malkhuyot (royaute), Zikhronot (memoires), Shofarot (le son du shofar).`,
      },
      {
        type: 'reading',
        durationSec: 90,
        text: `Oun'taneh Tokef — la priere la plus saisissante de Rosh Hashana :\n\n"Qui vivra et qui mourra... qui par le feu, qui par l'eau... Mais le repentir, la priere et la charite — attenuent la severite du decret."\n\nוּתְשׁוּבָה וּתְפִלָּה וּצְדָקָה מַעֲבִירִין אֶת רֹעַ הַגְּזֵרָה\nUTeshouva UTefilah UTzedakah Ma'avirin et Ro'a HaGezera.\n\nTrois piliers : Revenir, Prier, Donner.`,
      },
      {
        type: 'practice',
        durationSec: 110,
        text: `Exercice de bilan de l'annee :\n\nPosez-vous ces questions :\n1. Qu'ai-je accompli spirituellement cette annee ?\n2. Quelles fautes repetees dois-je adresser serieusement ?\n3. Quelle promesse a Hachem ou a moi-meme n'ai-je pas tenue ?\n4. Comment veux-je etre different l'annee prochaine ?\n\nFormez une resolution (kabbalah) concrete pour l'an nouveau.`,
        instruction: `Soyez honnete et bienveillant envers vous-meme.`,
      },
      {
        type: 'reflection',
        durationSec: 65,
        text: `Le shofar crie ce que les mots ne peuvent dire. Quel est le "cri de votre shofar" interieur cette annee ? Qu'est-ce que votre ame veut dire a Hachem que vous n'avez pas encore dit ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `לְשָׁנָה טוֹבָה תִּכָּתֵבוּ וְתֵחָתֵמוּ\nLeshana Tova Tikatevu veTehhatemu.\n"Que vous soyez inscrits et scelles pour une bonne annee." Amen.`,
      },
    ],
  },
  {
    id: 'session_yom_kippur_29',
    title: 'Yom Kippur — Grand Sceau du Pardon',
    subtitle: `La journee la plus sainte de l'annee`,
    durationMin: 8,
    theme: 'Yom Tov',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: `Yom Kippur — Jour des Expiations — est le point culminant des Yamim Noraim (Jours Terribles). On jeune, on ne porte pas de cuir, on s'abstient de cinq privations, on prie de Kol Nidre a Neila. C'est le jour ou Hachem est le plus accessible a l'ame sincere.`,
      },
      {
        type: 'reading',
        durationSec: 100,
        text: `Priere de Kol Nidre — annulation des voeux :\n"Tous les voeux, engagements, serments... que nous avons faits depuis Yom Kippur passe jusqu'a ce Yom Kippur... ils sont nuls, abandonnes, annules..."\n\nLa Neila — priere de cloture :\nאֵל נָא שְׁלַח רְפוּאָה שְׁלֵמָה לַחוֹלֵינוּ\n"Dieu, s'il Te plait, envoie une guerison complete a nos malades."\n\nLe dernier shofar de Yom Kippur clot les portes — mais les portes des larmes ne se ferment jamais.`,
      },
      {
        type: 'practice',
        durationSec: 130,
        text: `Confessions (Vidoui) — Ashamnou, Bagadnou, Gazalnou... :\n\nRecitez a voix basse la liste de l'Ashamnou (24 fautes de l'aleph-bet) :\nAshamnou — nous avons failli\nBagadnou — nous avons trahi\nGazalnou — nous avons vole\nDibarnou dofi — nous avons calomnie\n...\n\nFrappez doucement votre poitrine a chaque aveu. Ce geste symbolise que le coeur lui-meme est coupable — et le coeur lui-meme peut reparer.`,
        instruction: `Recitez avec sincerite et douceur, pas avec desespoir.`,
      },
      {
        type: 'reflection',
        durationSec: 70,
        text: `Yom Kippur n'est pas un jour triste — c'est le jour le plus joyeux ! Car Hachem nous offre le pardon complet. Ressentez la legerete que procure un pardon sincere recu. Etes-vous pret a vous pardonner aussi ?`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: `גְּמַר חֲתִימָה טוֹבָה\nGmar Hatima Tova — "Que vous soyez scelles pour le bien."\n\nHachem a dit : "Meme si vos fautes sont comme l'ecarlate, elles blanchiront comme la neige." (Esaie 1:18) Sortez de Yom Kippur lave, renouvele, libre.`,
      },
    ],
  },
  {
    id: 'session_sukkot_30',
    title: 'Soukkot — La joie des cabanes',
    subtitle: `Habiter sous la protection divine`,
    durationMin: 6,
    theme: 'Yom Tov',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Soukkot — la fete des Tabernacles — est appelee "Zman Simhatenou" — le temps de notre joie. On habite dans une soukkah (cabane precaire) pour rappeler les quarante ans dans le desert sous la protection d'Hachem. Joie dans la precarite — c'est le paradoxe de Soukkot.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Levitique 23:42-43 :\n"Vous habiterez dans des cabanes pendant sept jours... afin que vos generations sachent que J'ai fait habiter les enfants d'Israel dans des cabanes quand Je les ai fait sortir d'Egypte."\n\nLes arba minim (quatre especes) :\nLoulav (palme) — la colonne vertebrale\nEtrog (cedrat) — le coeur\nHadas (myrte) — les yeux\nAravah (saule) — la bouche\n\nEnsemble, ils representent le corps entier qui serve Hachem.`,
      },
      {
        type: 'practice',
        durationSec: 90,
        text: `Meditation sur la precarite et la joie :\n\nLa soukkah n'a pas de murs solides, son toit laisse voir les etoiles — on est vulnerable. Et pourtant on est joyeux. Pourquoi ?\n\nParce que la vraie securite n'est pas dans les murs mais dans la relation avec Hachem.\n\nIdentifiez dans votre vie une situation precaire. Pratiquez la joie dans cette precarite en vous appuyant sur Hachem.`,
        instruction: `La joie n'exige pas que tout aille bien — seulement la confiance.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Ushpizin — on invite symboliquement les sept invites celestes dans la soukkah : Abraham, Isaac, Jacob, Moise, Aaron, Joseph, David. Quel enseignement de l'un d'eux aimeriez-vous approfondir cette semaine ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Hag Sameah — Joyeuse fete !\nחַג שָׂמֵחַ\n\nQue la joie de Soukkot — joie dans la simplicite, joie dans la protection divine, joie dans la communaute — illumine toute votre annee.`,
      },
    ],
  },
];
