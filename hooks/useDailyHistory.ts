import { useMemo } from 'react';

export interface JewishHistoricalEvent {
  date: string;
  title: string;
  period: string;
  yearAgo: string;
  description: string;
  significance: string;
  figure?: string;
}

function getTodayMMDD(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${mm}-${dd}`;
}

let JEWISH_HISTORY: JewishHistoricalEvent[] = [];
try {
  JEWISH_HISTORY = require('@/data/jewishHistory').JEWISH_HISTORY ?? [];
} catch {}

const FALLBACK: JewishHistoricalEvent = {
  date: '01-01',
  title: 'Rosh Hashana — Nouvel An juif',
  period: 'Tradition annuelle',
  yearAgo: 'Chaque année',
  description: 'Le Nouvel An juif marque le commencement d\'une période de dix jours de réflexion et de repentir qui culmine avec Yom Kippour.',
  significance: 'Occasion de renouvellement spirituel et de réconciliation avec Dieu et les autres.',
};

export function useDailyHistory(): JewishHistoricalEvent {
  return useMemo(() => {
    const today = getTodayMMDD();
    return JEWISH_HISTORY.find((e) => e.date === today) ?? FALLBACK;
  }, []);
}
