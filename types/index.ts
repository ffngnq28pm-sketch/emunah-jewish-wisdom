export interface WisdomCard {
  id: string;
  hebrew: string;
  source: string;
  french: string;
  philosophy: string;
  philosophyAuthor: string;
  theme: Theme;
  sourceType: SourceType;
  backgroundImage: string;
  premium: boolean;
}

export type Theme =
  | 'Emunah'
  | 'Chesed'
  | 'Teshuvah'
  | 'Torah'
  | 'Tzedakah'
  | 'Shabbat'
  | 'Tikun Olam'
  | 'Tefilah'
  | 'Simcha'
  | 'Shalom'
  | 'Ahavah'
  | 'Emet'
  | 'Neshama'
  | 'Kedushah'
  | 'Bitachon';

export type SourceType =
  | 'Torah'
  | 'Talmud'
  | 'Psaumes'
  | 'Prophètes'
  | 'Proverbes'
  | 'Maïmonide'
  | 'Rashi'
  | 'Baal Shem Tov'
  | 'Lévinas'
  | 'Heschel'
  | 'Soloveitchik'
  | 'Kabbalah'
  | 'Pirké Avot'
  | 'Rabbi Nahman'
  | 'Rav Kook'
  | 'Chofetz Chaim'
  | 'Ramban'
  | 'Ramchal'
  | 'Sfat Emet';
