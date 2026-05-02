import { useMemo } from 'react';

// Sefirat HaOmer: 49 days from day after Pesach to Shavuot
// Pesach begins: Nisan 15 (varies each year)
// 2025: Pesach starts April 13 → Omer start April 14 → end June 1 (Shavuot = June 2)
// 2026: Pesach starts April 2  → Omer start April 3  → end May 21 (Shavuot = May 22)

// Yamim Noraim (High Holy Days): 10 days of Teshuvah between Rosh Hashana and Yom Kippur
// 2025: Rosh Hashana Sep 22 → Yom Kippur Oct 1
// 2026: Rosh Hashana Sep 12 → Yom Kippur Sep 21

interface OmerSeason {
  isOmer: boolean;
  isYamimNoraim: boolean;
  day: number;
  total: number;
  daysLeft: number;
  seasonLabel: string;
  sefira: string;
  nextSeason: string;
  daysUntilNext: number;
}

function getPesachStart(year: number): Date {
  // Approximate Pesach dates (Nisan 15)
  const dates: Record<number, string> = {
    2024: '2024-04-23',
    2025: '2025-04-13',
    2026: '2026-04-02',
    2027: '2027-04-22',
    2028: '2028-04-11',
  };
  const s = dates[year];
  if (s) return new Date(s);
  // Fallback approximation
  return new Date(`${year}-04-15`);
}

function getRoshHashanaStart(year: number): Date {
  const dates: Record<number, string> = {
    2024: '2024-10-03',
    2025: '2025-09-22',
    2026: '2026-09-11',
    2027: '2027-10-01',
    2028: '2028-09-20',
  };
  const s = dates[year];
  if (s) return new Date(s);
  return new Date(`${year}-09-20`);
}

function getSefira(day: number): string {
  const week = Math.ceil(day / 7);
  const sefirot = ['Chesed', 'Gevurah', 'Tiferet', 'Netzach', 'Hod', 'Yesod', 'Malkhut'];
  return sefirot[Math.min(week - 1, 6)] ?? 'Malkhut';
}

export function useOmer(): OmerSeason {
  return useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Omer window: day after Pesach (Nisan 16) for 49 days
    const pesach = getPesachStart(year);
    const omerStart = new Date(pesach);
    omerStart.setDate(omerStart.getDate() + 1);
    const omerEnd = new Date(omerStart);
    omerEnd.setDate(omerEnd.getDate() + 48); // 49 days total (inclusive)

    // Yamim Noraim window: Rosh Hashana → Yom Kippur (10 days)
    const roshHashana = getRoshHashanaStart(year);
    const yomKippur = new Date(roshHashana);
    yomKippur.setDate(yomKippur.getDate() + 9);

    const msDay = 86400000;

    // Check Omer
    if (today >= omerStart && today <= omerEnd) {
      const day = Math.floor((today.getTime() - omerStart.getTime()) / msDay) + 1;
      const daysLeft = 49 - day;
      return {
        isOmer: true,
        isYamimNoraim: false,
        day,
        total: 49,
        daysLeft,
        seasonLabel: `Sefirat HaOmer — Semaine de ${getSefira(day)}`,
        sefira: getSefira(day),
        nextSeason: 'Shavuot',
        daysUntilNext: daysLeft,
      };
    }

    // Check Yamim Noraim
    if (today >= roshHashana && today <= yomKippur) {
      const day = Math.floor((today.getTime() - roshHashana.getTime()) / msDay) + 1;
      const daysLeft = 10 - day;
      return {
        isOmer: true,
        isYamimNoraim: true,
        day,
        total: 10,
        daysLeft,
        seasonLabel: 'Yamim Noraïm — Jours Redoutables',
        sefira: 'Teshuvah',
        nextSeason: 'Yom Kippour',
        daysUntilNext: daysLeft,
      };
    }

    // Off-season — compute next season
    let daysUntilNext: number;
    let nextSeason: string;

    const nextOmerStart = today < omerStart
      ? omerStart
      : getPesachStart(year + 1);
    nextOmerStart.setDate(nextOmerStart.getDate() + 1);

    const nextRosh = today < roshHashana
      ? roshHashana
      : getRoshHashanaStart(year + 1);

    const daysToOmer = Math.ceil((nextOmerStart.getTime() - today.getTime()) / msDay);
    const daysToRosh = Math.ceil((nextRosh.getTime() - today.getTime()) / msDay);

    if (daysToOmer < daysToRosh) {
      daysUntilNext = daysToOmer;
      nextSeason = 'Sefirat HaOmer';
    } else {
      daysUntilNext = daysToRosh;
      nextSeason = 'Yamim Noraïm';
    }

    return {
      isOmer: false,
      isYamimNoraim: false,
      day: 0,
      total: 49,
      daysLeft: 0,
      seasonLabel: '',
      sefira: '',
      nextSeason,
      daysUntilNext,
    };
  }, [new Date().toDateString()]);
}
