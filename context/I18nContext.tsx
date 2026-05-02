import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage_like } from './storage';

export type Language = 'fr' | 'en';

export interface Translations {
  tabToday: string;
  tabLibrary: string;
  tabOmer: string;
  tabFavorites: string;
  tabSettings: string;
  wisdomOfDay: string;
  card: string;
  of: string;
  library: string;
  wisdoms: string;
  themes: string;
  sources: string;
  all: string;
  divineNames: string;
  divineNamesSub: string;
  divineNamesDesc: string;
  sages: string;
  sagesDesc: string;
  favorites: string;
  noFavorites: string;
  noFavoritesText: string;
  settings: string;
  profile: string;
  yourName: string;
  addName: string;
  greetingPreview: string;
  monthlyIntent: string;
  focusTheme: string;
  notifications: string;
  dailyWisdom: string;
  receiveDaily: string;
  sendTime: string;
  notifTheme: string;
  random: string;
  visualTheme: string;
  language: string;
  interfaceLanguage: string;
  about: string;
  aboutEmunah: string;
  version: string;
  tagline: string;
  save: string;
  themeDark: string;
  themeLight: string;
  themeSepia: string;
  themeDarkDesc: string;
  themeLightDesc: string;
  themeSepiaDesc: string;
  shacharit: string;
  mincha: string;
  maariv: string;
  shacharitDesc: string;
  minchaDesc: string;
  maariv2: string;
  maarivDesc: string;
  shabbatErev: string;
  shabbatErevDesc: string;
  havdalah: string;
  havdalahDesc: string;
  emunah: string;
  chesed: string;
  shalom: string;
  simcha: string;
  torah: string;
  teshuvah: string;
  omerTitle: string;
  dayOf: string;
  previewMode: string;
  deepMeaning: string;
  exclusivePremium: string;
  field: string;
  bornIn: string;
  legacy: string;
  famousQuote: string;
  shareCard: string;
  wallpaper: string;
  shareCardTitle: string;
  wallpaperTitle: string;
  preview: string;
  shareBtn: string;
  savePhotos: string;
  premiumTitle: string;
  premiumDesc: string;
  premiumSee: string;
  premiumActive: string;
  daysOf: string;
  days: string;
  day: string;
}

const FR: Translations = {
  tabToday: "Aujourd'hui",
  tabLibrary: 'Bibliothèque',
  tabOmer: 'Omer',
  tabFavorites: 'Favoris',
  tabSettings: 'Réglages',
  wisdomOfDay: 'SAGESSE DU JOUR',
  card: 'CARTE',
  of: '/',
  library: 'Bibliothèque',
  wisdoms: 'sagesses',
  themes: 'Thèmes',
  sources: 'Sources',
  all: 'Tout',
  divineNames: 'Les Noms Divins',
  divineNamesSub: 'שמות ה׳',
  divineNamesDesc: 'Collection exclusive — 25 Noms de Dieu',
  sages: 'Maîtres du Judaïsme',
  sagesDesc: 'Série encyclopédique premium',
  favorites: 'Favoris',
  noFavorites: 'Aucun favori',
  noFavoritesText: "Touchez le cœur d'une sagesse pour la retrouver ici.",
  settings: 'Réglages',
  profile: 'PROFIL',
  yourName: 'Votre prénom',
  addName: 'Ajouter votre prénom...',
  greetingPreview: 'Utilisé pour : "Bonjour {name}, voici votre méditation du jour"',
  monthlyIntent: 'KAVANAH DU MOIS',
  focusTheme: 'Thème de méditation',
  notifications: 'NOTIFICATIONS',
  dailyWisdom: 'Méditation quotidienne',
  receiveDaily: 'Recevez une sagesse chaque jour',
  sendTime: "Heure d'envoi",
  notifTheme: 'Thème des notifications',
  random: 'Aléatoire',
  visualTheme: 'THÈME VISUEL',
  language: 'LANGUE',
  interfaceLanguage: "Langue de l'interface",
  about: 'À PROPOS',
  aboutEmunah: 'À propos de Emunah',
  version: 'Version 1.0.0',
  tagline: 'Torah, sagesse et foi — chaque jour.',
  save: 'Sauvegarder',
  themeDark: 'Nuit de Jérusalem',
  themeLight: 'Shacharit',
  themeSepia: 'Parchemin',
  themeDarkDesc: 'Bleu nuit profond — méditation nocturne',
  themeLightDesc: 'Doré doux — prière du matin',
  themeSepiaDesc: 'Style manuscrit — Torah et Talmud',
  shacharit: 'Shacharit',
  mincha: 'Mincha',
  maariv: 'Maariv',
  shacharitDesc: 'Prière du matin',
  minchaDesc: "Prière de l'après-midi",
  maariv2: 'Maariv',
  maarivDesc: 'Prière du soir',
  shabbatErev: 'Entrée du Shabbat',
  shabbatErevDesc: 'Allumage des bougies',
  havdalah: 'Havdalah',
  havdalahDesc: 'Sortie du Shabbat',
  emunah: 'Emunah',
  chesed: 'Chesed',
  shalom: 'Shalom',
  simcha: 'Simcha',
  torah: 'Torah',
  teshuvah: 'Teshuvah',
  omerTitle: 'Sefirat HaOmer',
  dayOf: 'Jour',
  previewMode: 'Aperçu',
  deepMeaning: 'SENS SPIRITUEL',
  exclusivePremium: 'Collection Exclusive Premium',
  field: 'Domaine',
  bornIn: 'Né à',
  legacy: 'Héritage',
  famousQuote: 'Citation célèbre',
  shareCard: 'Partager',
  wallpaper: "Fond d'écran",
  shareCardTitle: 'Partager',
  wallpaperTitle: "Fond d'écran",
  preview: 'APERÇU',
  shareBtn: 'Partager',
  savePhotos: 'Enregistrer dans Photos',
  premiumTitle: 'Emunah Premium',
  premiumDesc: 'Accédez à toute la sagesse',
  premiumSee: 'Découvrir',
  premiumActive: 'Emunah Premium actif',
  daysOf: 'jours de',
  days: 'jours',
  day: 'jour',
};

const EN: Translations = {
  tabToday: 'Today',
  tabLibrary: 'Library',
  tabOmer: 'Omer',
  tabFavorites: 'Favorites',
  tabSettings: 'Settings',
  wisdomOfDay: 'WISDOM OF THE DAY',
  card: 'CARD',
  of: '/',
  library: 'Library',
  wisdoms: 'wisdoms',
  themes: 'Themes',
  sources: 'Sources',
  all: 'All',
  divineNames: 'The Divine Names',
  divineNamesSub: 'שמות ה׳',
  divineNamesDesc: 'Exclusive collection — 25 Names of God',
  sages: 'Masters of Judaism',
  sagesDesc: 'Premium encyclopedia series',
  favorites: 'Favorites',
  noFavorites: 'No favorites yet',
  noFavoritesText: 'Tap the heart on a wisdom card to save it here.',
  settings: 'Settings',
  profile: 'PROFILE',
  yourName: 'Your first name',
  addName: 'Add your name...',
  greetingPreview: 'Used for: "Good morning {name}, here is your wisdom for today"',
  monthlyIntent: 'MONTHLY KAVANAH',
  focusTheme: 'Meditation theme',
  notifications: 'NOTIFICATIONS',
  dailyWisdom: 'Daily wisdom',
  receiveDaily: 'Receive a wisdom every day',
  sendTime: 'Send time',
  notifTheme: 'Notification theme',
  random: 'Random',
  visualTheme: 'VISUAL THEME',
  language: 'LANGUAGE',
  interfaceLanguage: 'Interface language',
  about: 'ABOUT',
  aboutEmunah: 'About Emunah',
  version: 'Version 1.0.0',
  tagline: 'Torah, wisdom and faith — every day.',
  save: 'Save',
  themeDark: 'Jerusalem Night',
  themeLight: 'Shacharit',
  themeSepia: 'Parchment',
  themeDarkDesc: 'Deep night blue — nocturnal meditation',
  themeLightDesc: 'Soft gold — morning prayer',
  themeSepiaDesc: 'Manuscript style — Torah and Talmud',
  shacharit: 'Shacharit',
  mincha: 'Mincha',
  maariv: 'Maariv',
  shacharitDesc: 'Morning prayer',
  minchaDesc: 'Afternoon prayer',
  maariv2: 'Maariv',
  maarivDesc: 'Evening prayer',
  shabbatErev: 'Shabbat entry',
  shabbatErevDesc: 'Candle lighting',
  havdalah: 'Havdalah',
  havdalahDesc: 'End of Shabbat',
  emunah: 'Emunah',
  chesed: 'Chesed',
  shalom: 'Shalom',
  simcha: 'Simcha',
  torah: 'Torah',
  teshuvah: 'Teshuvah',
  omerTitle: 'Sefirat HaOmer',
  dayOf: 'Day',
  previewMode: 'Preview',
  deepMeaning: 'SPIRITUAL MEANING',
  exclusivePremium: 'Exclusive Premium Collection',
  field: 'Field',
  bornIn: 'Born in',
  legacy: 'Legacy',
  famousQuote: 'Famous quote',
  shareCard: 'Share',
  wallpaper: 'Wallpaper',
  shareCardTitle: 'Share',
  wallpaperTitle: 'Wallpaper',
  preview: 'PREVIEW',
  shareBtn: 'Share',
  savePhotos: 'Save to Photos',
  premiumTitle: 'Emunah Premium',
  premiumDesc: 'Access all the wisdom',
  premiumSee: 'Discover',
  premiumActive: 'Emunah Premium active',
  daysOf: 'days of',
  days: 'days',
  day: 'day',
};

export const LANG_MAP: Record<Language, Translations> = { fr: FR, en: EN };

export const LANG_META: { code: Language; label: string; native: string; rtl: boolean }[] = [
  { code: 'fr', label: 'Français', native: 'Français', rtl: false },
  { code: 'en', label: 'English',  native: 'English',  rtl: false },
];

interface I18nCtx {
  lang: Language;
  t: Translations;
  setLang: (l: Language) => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nCtx>({
  lang: 'fr',
  t: FR,
  setLang: () => {},
  isRTL: false,
});

const KEY = 'emunah_language';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    const saved = AsyncStorage_like.get(KEY) as Language | null;
    if (saved && LANG_MAP[saved]) setLangState(saved);
  }, []);

  function setLang(l: Language) {
    setLangState(l);
    AsyncStorage_like.set(KEY, l);
  }

  const t = LANG_MAP[lang];

  return (
    <I18nContext.Provider value={{ lang, t, setLang, isRTL: false }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
