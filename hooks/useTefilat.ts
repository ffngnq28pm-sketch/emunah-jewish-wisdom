import { useState, useEffect, useRef, useCallback } from 'react';
import { Animated } from 'react-native';
import { AsyncStorage_like } from '@/context/storage';

const STORAGE_KEY = 'emunah_tefilat_v1';
// Milestones: 18 (Amidah blessings), 54 (chai × 3), 150 (Tehillim psalms)
const MILESTONES = [18, 54, 150];

interface TefilatStorage {
  count: number;
  date: string;
}

function getTodayKey(): string {
  const now = new Date();
  if (now.getHours() < 5) {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().slice(0, 10);
  }
  return now.toISOString().slice(0, 10);
}

function getPrayerLabel(count: number): string {
  if (count === 0) return 'Baruch HaShem';
  const cycle = count % 18;
  if (cycle === 0 && count > 0) return 'Amidah complète ✡';
  const labels = [
    'Magen Avraham', 'Mechayeh HaMetim', "Kedushah — קְדֻשָּׁה",
    'Binah', 'Teshuvah', 'Selichah', 'Geulah', 'Refuah',
    'Birkat HaShanim', 'Kibbutz Galuyot', 'Mishpat', "Birkat HaMinim",
    'Tzaddikim', 'Binyan Yerushalayim', 'Malkhut', 'Tefilah',
    'Avodah', 'Hoda\'ah',
  ];
  return labels[(cycle - 1 + 18) % 18] ?? 'Amen';
}

export function useTefilat() {
  const [count, setCount] = useState(0);
  const [milestone, setMilestone] = useState<number | null>(null);
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const raw = AsyncStorage_like.get(STORAGE_KEY);
    if (raw) {
      try {
        const stored: TefilatStorage = JSON.parse(raw);
        if (stored.date === getTodayKey()) {
          setCount(stored.count);
        } else {
          AsyncStorage_like.set(STORAGE_KEY, JSON.stringify({ count: 0, date: getTodayKey() }));
        }
      } catch {}
    }
  }, []);

  const animatePulse = useCallback(() => {
    Animated.sequence([
      Animated.timing(pulse, { toValue: 1.18, duration: 80, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 1,    duration: 180, useNativeDriver: true }),
    ]).start();
  }, [pulse]);

  const increment = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1;
      AsyncStorage_like.set(STORAGE_KEY, JSON.stringify({ count: next, date: getTodayKey() }));
      if (MILESTONES.includes(next)) setMilestone(next);
      animatePulse();
      return next;
    });
  }, [animatePulse]);

  const reset = useCallback(() => {
    setCount(0);
    AsyncStorage_like.set(STORAGE_KEY, JSON.stringify({ count: 0, date: getTodayKey() }));
  }, []);

  const dismissMilestone = useCallback(() => setMilestone(null), []);

  const prayerLabel = getPrayerLabel(count);
  const nextMilestone = MILESTONES.find((m) => m > count) ?? MILESTONES[MILESTONES.length - 1];
  const progress = Math.min(count / nextMilestone, 1);

  return { count, milestone, prayerLabel, nextMilestone, progress, pulse, increment, reset, dismissMilestone };
}
