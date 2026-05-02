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
  hebrewDateApprox: string;
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

// Approximate Hebrew month names for display
function getHebrewDateApprox(date: Date): string {
  const month = date.getMonth(); // 0-based
  const day = date.getDate();
  const months = [
    'Tevet/Chevat', 'Chevat/Adar', 'Adar', 'Nisan', 'Iyar', 'Sivan',
    'Tamouz', 'Av', 'Eloul', 'Tichri', 'Marchechvan', 'Kislev'
  ];
  return `${day} ${months[month]}`;
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
        hebrewDateApprox: getHebrewDateApprox(today),
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
        hebrewDateApprox: getHebrewDateApprox(today),
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
      hebrewDateApprox: getHebrewDateApprox(today),
      isShabbat: false,
      nextEvent: nextHoliday.label,
      daysUntilNext: nextHoliday.days,
    };
  }, [new Date().toDateString()]);
}
