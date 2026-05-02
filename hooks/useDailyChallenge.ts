import { useState, useEffect, useCallback } from 'react';
import { AsyncStorage_like } from '@/context/storage';
import { CHALLENGES } from '@/data/challenges';

const KEY = 'emunah_challenge_v1';

interface ChallengeState {
  todayChallenge: (typeof CHALLENGES)[number] | null;
  completedToday: boolean;
  streak: number;
  markComplete: () => void;
}

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function getDailyChallenge() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return CHALLENGES[dayOfYear % CHALLENGES.length];
}

export function useDailyChallenge(): ChallengeState {
  const [completedToday, setCompletedToday] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const raw = AsyncStorage_like.get(KEY);
    if (raw) {
      try {
        const stored = JSON.parse(raw);
        if (stored.date === getTodayKey()) setCompletedToday(stored.completed);
        setStreak(stored.streak ?? 0);
      } catch {}
    }
  }, []);

  const markComplete = useCallback(() => {
    setCompletedToday(true);
    setStreak((prev) => {
      const next = prev + 1;
      AsyncStorage_like.set(KEY, JSON.stringify({ date: getTodayKey(), completed: true, streak: next }));
      return next;
    });
  }, []);

  return {
    todayChallenge: getDailyChallenge(),
    completedToday,
    streak,
    markComplete,
  };
}
