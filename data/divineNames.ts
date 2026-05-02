export interface DivineName {
  id: number;
  hebrew: string;
  transliteration: string;
  french: string;
  scripture: string;
  meditation: string;
}

export const DIVINE_NAMES: DivineName[] = [
  { id: 1,  hebrew: 'יְהוָה',              transliteration: 'YHWH',               french: 'Le Nom Ineffable',          scripture: 'Exode 3:15',          meditation: 'Le Nom trop saint pour être prononcé — il est la réalité absolue, l\'être même. Il était, il est, il sera.' },
  { id: 2,  hebrew: 'אֱלֹהִים',            transliteration: 'Elohim',             french: 'Dieu Créateur',             scripture: 'Genèse 1:1',          meditation: 'Elohim — le Dieu de la création et du jugement. C\'est par ce Nom que le monde fut façonné à partir du néant.' },
  { id: 3,  hebrew: 'אֲדֹנָי',             transliteration: 'Adonaï',             french: 'Mon Seigneur',              scripture: 'Psaume 8:1',          meditation: 'Maître de toutes choses, Adonaï exprime la relation de souveraineté absolue et de dépendance totale de la créature.' },
  { id: 4,  hebrew: 'אֵל שַׁדַּי',         transliteration: 'El Shaddaï',         french: 'Dieu Tout-Puissant',        scripture: 'Genèse 17:1',         meditation: 'Celui dont la puissance est sans limite. El Shaddaï se révèle dans les moments où la nature humaine touche à ses limites.' },
  { id: 5,  hebrew: 'אֵל עֶלְיוֹן',        transliteration: 'El Elyon',           french: 'Dieu Très-Haut',            scripture: 'Genèse 14:18',        meditation: 'Au-dessus de tout, transcendant toute réalité, El Elyon est le souverain des cieux et de la terre.' },
  { id: 6,  hebrew: 'אֵל רֳאִי',           transliteration: 'El Roï',             french: 'Dieu Qui Voit',             scripture: 'Genèse 16:13',        meditation: 'Agar nomma ce lieu Béer-Lahaï Roï. Dieu voit chaque âme oubliée, même dans le désert le plus profond.' },
  { id: 7,  hebrew: 'אֶהְיֶה אֲשֶׁר אֶהְיֶה', transliteration: 'Ehyeh Asher Ehyeh', french: 'Je Suis Qui Je Suis',     scripture: 'Exode 3:14',          meditation: 'La révélation au buisson ardent — Dieu comme présence dynamique, comme être qui se réalise dans le temps et l\'histoire.' },
  { id: 8,  hebrew: 'יְהוָה צְבָאוֹת',     transliteration: 'YHWH Tzvaot',       french: 'Seigneur des Armées',       scripture: '1 Samuel 1:3',        meditation: 'Maître des armées célestes et des forces du cosmos — sa puissance gouverne l\'ordre universel.' },
  { id: 9,  hebrew: 'אֵל עוֹלָם',          transliteration: 'El Olam',            french: 'Dieu Éternel',              scripture: 'Genèse 21:33',        meditation: 'Avant les montagnes, avant les siècles — Dieu existe et existera au-delà de toute durée mesurable.' },
  { id: 10, hebrew: 'יְהוָה יִרְאֶה',      transliteration: 'YHWH Yireh',        french: 'Dieu Pourvoyeur',           scripture: 'Genèse 22:14',        meditation: 'Sur la montagne de la foi, Abraham nomma ce lieu : YHWH voit et pourvoit. La confiance précède le secours.' },
  { id: 11, hebrew: 'אָבִינוּ',            transliteration: 'Avinou',            french: 'Notre Père',                scripture: 'Isaïe 63:16',         meditation: 'La relation filiale au cœur du judaïsme — Dieu non comme lointain juge mais comme Père qui reconnaît ses enfants.' },
  { id: 12, hebrew: 'הָרַחֲמָן',           transliteration: 'HaRachaman',        french: 'Le Miséricordieux',         scripture: 'Exode 34:6',          meditation: 'Rachamim vient de rechem — le ventre maternel. La miséricorde divine est une compassion viscérale, maternelle.' },
  { id: 13, hebrew: 'הַקָּדוֹשׁ',          transliteration: 'HaKadosh',          french: 'Le Saint',                  scripture: 'Isaïe 6:3',           meditation: 'Kadoch, kadoch, kadoch — trois fois saint. Sa sainteté est la plénitude absolue, l\'altérité radicale et la beauté infinie.' },
  { id: 14, hebrew: 'הַמֶּלֶךְ',            transliteration: 'HaMelekh',          french: 'Le Roi',                    scripture: 'Psaume 95:3',         meditation: 'À Roch Hachana, on Le couronne Roi. Son règne n\'est pas de coercition mais d\'amour — le cœur y souscrit librement.' },
  { id: 15, hebrew: 'צוּר יִשְׂרָאֵל',     transliteration: 'Tzur Yisraël',      french: 'Rocher d\'Israël',          scripture: '2 Samuel 23:3',       meditation: 'Le Rocher — immuable, inébranlable, fondement sur lequel repose tout espoir en temps de tempête.' },
  { id: 16, hebrew: 'עֹשֵׂה שָׁלוֹם',       transliteration: 'Oseh Shalom',       french: 'Artisan de Paix',           scripture: 'Job 25:2',            meditation: 'Chaque prière se clôt par : Oseh shalom bimromav. La paix est l\'œuvre divine par excellence.' },
  { id: 17, hebrew: 'הַמָּקוֹם',           transliteration: 'HaMakom',           french: 'Le Lieu — L\'Omniprésent',  scripture: 'Genèse 28:16',        meditation: 'Dieu est le lieu du monde — le monde n\'est pas le lieu de Dieu. Il contient tout sans être contenu par rien.' },
  { id: 18, hebrew: 'שְׁכִינָה',           transliteration: 'Shekhinah',         french: 'La Présence Divine',        scripture: 'Exode 40:34',         meditation: 'La nuée qui remplissait le Tabernacle. La Shekhinah est Dieu présent parmi les hommes, intimement, tendrement.' },
  { id: 19, hebrew: 'אֵין סוֹף',           transliteration: 'Ein Sof',           french: 'L\'Infini',                 scripture: 'Proverbes 25:2',      meditation: 'Le concept kabbalistique suprême : Dieu comme Infini absolu, au-delà de tout attribut, de toute pensée.' },
  { id: 20, hebrew: 'רִבּוֹנוֹ שֶׁל עוֹלָם', transliteration: 'Ribbono shel Olam', french: 'Maître de l\'Univers',     scripture: 'Psaume 24:1',         meditation: 'L\'adresse quotidienne la plus intime — à chaque instant le Juif s\'adresse directement au Maître absolu.' },
  { id: 21, hebrew: 'אֵל חַנּוּן',         transliteration: 'El Hannoun',        french: 'Dieu de Grâce',             scripture: 'Exode 34:6',          meditation: 'Hanoun vient de chen — la grâce. Dieu se penche vers sa créature avec une tendresse qui ne mérite pas d\'être méritée.' },
  { id: 22, hebrew: 'צַדִּיק',             transliteration: 'Tzaddik',           french: 'Le Juste',                  scripture: 'Deutéronome 32:4',    meditation: 'Sa justice est parfaite et sans faille. Mais la justice divine est toujours orientée vers la restauration, non la destruction.' },
  { id: 23, hebrew: 'אֵל אֱמֶת',          transliteration: 'El Emet',           french: 'Dieu de Vérité',            scripture: 'Psaume 31:6',         meditation: 'La vérité est le sceau de Dieu (Talmud). Emet — Alef, Mem, Tav — commence et finit l\'alphabet, embrassant tout.' },
  { id: 24, hebrew: 'גִּבּוֹר',            transliteration: 'Gibbor',            french: 'Le Héros — Le Fort',        scripture: 'Isaïe 9:5',           meditation: 'Sa force n\'est pas celle du conquérant mais celle qui donne la vie, ressuscite les morts et soutient les tombants.' },
  { id: 25, hebrew: 'יְהוָה שָׁלוֹם',      transliteration: 'YHWH Shalom',       french: 'Dieu est Paix',             scripture: 'Juges 6:24',          meditation: 'Gédéon nomma cet autel YHWH Shalom. Dieu n\'apporte pas seulement la paix — il est Lui-même la paix que toute âme cherche.' },
];
