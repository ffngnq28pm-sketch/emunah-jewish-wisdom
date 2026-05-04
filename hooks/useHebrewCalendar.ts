import { useMemo } from 'react';

export type JewishPeriod =
  | 'shabbat'
  | 'roshHashana'
  | 'yamimNoraim'
  | 'yomKippur'
  | 'sukkot'
  | 'simchatTorah'
  | 'hannukah'
  | 'purim'
  | 'pesach'
  | 'omer'
  | 'shavuot'
  | 'ordinary';

export const PERIOD_THEMES: Record<JewishPeriod, import('@/types').Theme[]> = {
  shabbat:     ['Shabbat', 'Kedushah', 'Shalom'],
  roshHashana: ['Teshuvah', 'Emunah', 'Tefilah'],
  yamimNoraim: ['Teshuvah', 'Emet', 'Emunah'],
  yomKippur:   ['Teshuvah', 'Kedushah', 'Tefilah'],
  sukkot:      ['Simcha', 'Bitachon', 'Chesed'],
  simchatTorah:['Torah', 'Simcha', 'Kedushah'],
  hannukah:    ['Emunah', 'Bitachon', 'Chesed'],
  purim:       ['Simcha', 'Bitachon', 'Ahavah'],
  pesach:      ['Emunah', 'Bitachon', 'Chesed'],
  omer:        ['Torah', 'Teshuvah', 'Kedushah'],
  shavuot:     ['Torah', 'Kedushah', 'Simcha'],
  ordinary:    ['Emunah', 'Chesed', 'Torah'],
};

interface HebrewCalendarState {
  period: JewishPeriod;
  periodLabel: string;
  periodEmoji: string;
  hebrewDate: string;
  isShabbat: boolean;
  nextEvent: string;
  daysUntilNext: number;
}

const PERIOD_LABELS: Record<JewishPeriod, string> = {
  shabbat:      'Shabbat Shalom',
  roshHashana:  'Roch Hachana',
  yamimNoraim:  'Yamim Noraïm',
  yomKippur:    'Yom Kippour',
  sukkot:       'Souccot',
  simchatTorah: 'Simhat Torah',
  hannukah:     'Hanoukka',
  purim:        'Pourim',
  pesach:       'Pessa\'h',
  omer:         'Sefirat HaOmer',
  shavuot:      'Chavouot',
  ordinary:     'Calendrier hébraïque',
};

const PERIOD_EMOJIS: Record<JewishPeriod, string> = {
  shabbat:      '🕯️',
  roshHashana:  '🍎',
  yamimNoraim:  '📜',
  yomKippur:    '✡️',
  sukkot:       '🌿',
  simchatTorah: '📜',
  hannukah:     '🕎',
  purim:        '🎭',
  pesach:       '🫓',
  omer:         '✡️',
  shavuot:      '📖',
  ordinary:     '✡️',
};

// Gregorian approximations for major Jewish holidays 2025–2027
const JEWISH_HOLIDAYS: Array<{ start: string; end: string; period: JewishPeriod; label: string }> = [
  // 2025
  { start: '2025-01-01', end: '2025-01-02', period: 'hannukah',     label: 'Hanoukka' },
  { start: '2025-03-13', end: '2025-03-14', period: 'purim',        label: 'Pourim' },
  { start: '2025-04-13', end: '2025-04-21', period: 'pesach',       label: 'Pessa\'h' },
  { start: '2025-04-14', end: '2025-06-01', period: 'omer',         label: 'Sefirat HaOmer' },
  { start: '2025-06-02', end: '2025-06-03', period: 'shavuot',      label: 'Chavouot' },
  { start: '2025-09-22', end: '2025-09-23', period: 'roshHashana',  label: 'Roch Hachana' },
  { start: '2025-09-22', end: '2025-10-01', period: 'yamimNoraim',  label: 'Yamim Noraïm' },
  { start: '2025-10-01', end: '2025-10-02', period: 'yomKippur',    label: 'Yom Kippour' },
  { start: '2025-10-06', end: '2025-10-13', period: 'sukkot',       label: 'Souccot' },
  { start: '2025-10-13', end: '2025-10-14', period: 'simchatTorah', label: 'Simhat Torah' },
  { start: '2025-12-14', end: '2025-12-22', period: 'hannukah',     label: 'Hanoukka' },
  // 2026
  { start: '2026-03-03', end: '2026-03-04', period: 'purim',        label: 'Pourim' },
  { start: '2026-04-02', end: '2026-04-10', period: 'pesach',       label: 'Pessa\'h' },
  { start: '2026-04-03', end: '2026-05-21', period: 'omer',         label: 'Sefirat HaOmer' },
  { start: '2026-05-22', end: '2026-05-23', period: 'shavuot',      label: 'Chavouot' },
  { start: '2026-09-11', end: '2026-09-12', period: 'roshHashana',  label: 'Roch Hachana' },
  { start: '2026-09-11', end: '2026-09-20', period: 'yamimNoraim',  label: 'Yamim Noraïm' },
  { start: '2026-09-20', end: '2026-09-21', period: 'yomKippur',    label: 'Yom Kippour' },
  { start: '2026-09-25', end: '2026-10-02', period: 'sukkot',       label: 'Souccot' },
  { start: '2026-10-02', end: '2026-10-03', period: 'simchatTorah', label: 'Simhat Torah' },
  { start: '2026-12-04', end: '2026-12-12', period: 'hannukah',     label: 'Hanoukka' },
  // 2027
  { start: '2027-03-23', end: '2027-03-24', period: 'purim',        label: 'Pourim' },
  { start: '2027-04-21', end: '2027-04-29', period: 'pesach',       label: 'Pessa\'h' },
];

function getHolidayForDate(date: Date): { period: JewishPeriod; label: string } | null {
  const iso = date.toISOString().slice(0, 10);
  for (const h of JEWISH_HOLIDAYS) {
    if (iso >= h.start && iso <= h.end) {
      return { period: h.period, label: h.label };
    }
  }
  return null;
}

function getNextHoliday(date: Date): { label: string; days: number } {
  const iso = date.toISOString().slice(0, 10);
  for (const h of JEWISH_HOLIDAYS) {
    if (h.start > iso) {
      const days = Math.ceil((new Date(h.start).getTime() - date.getTime()) / 86400000);
      return { label: h.label, days };
    }
  }
  return { label: 'Pessa\'h 2027', days: 365 };
}

// Table de référence: Rosh Hashana (1 Tishri) dates grégoriennes
const ROSH_HASHANA: { year: number; greg: [number, number, number] }[] = [
  { year: 5784, greg: [2023,  9, 16] },
  { year: 5785, greg: [2024, 10,  3] },
  { year: 5786, greg: [2025,  9, 23] },
  { year: 5787, greg: [2026,  9, 12] },
  { year: 5788, greg: [2027, 10,  2] },
];

// Longueurs des mois hébraïques par année (Tishri=1 ... Eloul=12)
const HEBREW_MONTH_LENGTHS: Record<number, number[]> = {
  5784: [30,29,30,29,30,30,29,30,29,30,29,30], // 384 jours (embolismique)
  5785: [30,29,30,29,30,29,30,30,29,30,29,30], // 383 jours
  5786: [30,29,30,29,30,29,30,30,29,30,29,30], // 383 jours
  5787: [30,29,30,29,30,29,30,30,29,30,29,30], // 384 jours
};

const HEBREW_MONTHS_FR = [
  'Tishri','Heshvan','Kislev','Tevet','Shevat','Adar',
  'Nisan','Iyar','Sivan','Tamouz','Av','Eloul',
];

function toJD(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12);
  const yr = y + 4800 - a;
  const mo = m + 12 * a - 3;
  return d + Math.floor((153 * mo + 2) / 5) + 365 * yr +
    Math.floor(yr / 4) - Math.floor(yr / 100) + Math.floor(yr / 400) - 32045;
}

function getHebrewDate(date: Date): string {
  const jd = toJD(date.getFullYear(), date.getMonth() + 1, date.getDate());

  // Find base year
  let base = ROSH_HASHANA[0];
  for (const rh of ROSH_HASHANA) {
    if (jd >= toJD(...rh.greg)) base = rh;
    else break;
  }

  let offset = jd - toJD(...base.greg);
  let hYear = base.year;
  const lengths = HEBREW_MONTH_LENGTHS[hYear] ?? HEBREW_MONTH_LENGTHS[5786];

  // Advance year if needed
  const yearLen = lengths.reduce((a, b) => a + b, 0);
  if (offset >= yearLen) { offset -= yearLen; hYear++; }

  // Find month
  let hMonth = 0;
  let rem = offset;
  while (hMonth < 12 && rem >= lengths[hMonth]) {
    rem -= lengths[hMonth];
    hMonth++;
  }
  const hDay = rem + 1;

  return `${hDay} ${HEBREW_MONTHS_FR[hMonth]} ${hYear}`;
}

export function useHebrewCalendar(): HebrewCalendarState {
  return useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayOfWeek = today.getDay(); // 0=Sun, 6=Sat
    const isShabbat = dayOfWeek === 6;

    if (isShabbat) {
      const nextHoliday = getNextHoliday(today);
      return {
        period: 'shabbat',
        periodLabel: PERIOD_LABELS.shabbat,
        periodEmoji: PERIOD_EMOJIS.shabbat,
        hebrewDate: getHebrewDate(today),
        isShabbat: true,
        nextEvent: nextHoliday.label,
        daysUntilNext: nextHoliday.days,
      };
    }

    const holiday = getHolidayForDate(today);
    if (holiday) {
      const nextHoliday = getNextHoliday(today);
      return {
        period: holiday.period,
        periodLabel: PERIOD_LABELS[holiday.period],
        periodEmoji: PERIOD_EMOJIS[holiday.period],
        hebrewDate: getHebrewDate(today),
        isShabbat: false,
        nextEvent: nextHoliday.label,
        daysUntilNext: nextHoliday.days,
      };
    }

    const nextHoliday = getNextHoliday(today);
    return {
      period: 'ordinary',
      periodLabel: PERIOD_LABELS.ordinary,
      periodEmoji: PERIOD_EMOJIS.ordinary,
      hebrewDate: getHebrewDate(today),
      isShabbat: false,
      nextEvent: nextHoliday.label,
      daysUntilNext: nextHoliday.days,
    };
  }, [new Date().toDateString()]);
}
