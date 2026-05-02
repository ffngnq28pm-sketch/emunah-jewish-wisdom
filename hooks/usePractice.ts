import { useState, useEffect, useCallback } from 'react';
import { AsyncStorage_like } from '@/context/storage';

// ─── Storage keys ────────────────────────────────────────────────────────────
const JOURNAL_KEY = 'emunah_journal_v1';
const SESSION_DONE_KEY = 'emunah_session_done_v1';
const PATH_PROGRESS_KEY = 'emunah_path_progress_v1';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface JournalEntry {
  id: string;
  date: string; // ISO date YYYY-MM-DD
  gratitude: string;
  middah: string;
  tzedakah: string;
  torahInsight: string;
  kavanah: string;
  praise: string;
}

export interface SessionDoneRecord {
  [sessionId: string]: string; // sessionId → ISO date of last completion
}

export interface PathProgressRecord {
  [pathId: string]: {
    startedAt: string;     // ISO date
    completedDays: number[]; // array of completed dayNumbers
    lastActivityAt: string;
  };
}

export interface PracticeState {
  // Journal
  journal: JournalEntry[];
  saveJournalEntry: (entry: Omit<JournalEntry, 'id' | 'date'>) => void;
  updateJournalEntry: (id: string, patch: Partial<Omit<JournalEntry, 'id' | 'date'>>) => void;
  getTodayJournalEntry: () => JournalEntry | undefined;

  // Sessions
  sessionsDone: SessionDoneRecord;
  markSessionDone: (sessionId: string) => void;
  isSessionDoneToday: (sessionId: string) => boolean;

  // Path progress
  pathProgress: PathProgressRecord;
  startPath: (pathId: string) => void;
  markPathDayDone: (pathId: string, dayNumber: number) => void;
  getPathCompletionPct: (pathId: string, totalDays: number) => number;
  resetPath: (pathId: string) => void;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = AsyncStorage_like.get(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function saveJson<T>(key: string, value: T): void {
  AsyncStorage_like.set(key, JSON.stringify(value));
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function usePractice(): PracticeState {
  const [journal, setJournal] = useState<JournalEntry[]>(() =>
    loadJson<JournalEntry[]>(JOURNAL_KEY, [])
  );
  const [sessionsDone, setSessionsDone] = useState<SessionDoneRecord>(() =>
    loadJson<SessionDoneRecord>(SESSION_DONE_KEY, {})
  );
  const [pathProgress, setPathProgress] = useState<PathProgressRecord>(() =>
    loadJson<PathProgressRecord>(PATH_PROGRESS_KEY, {})
  );

  // Persist on change
  useEffect(() => { saveJson(JOURNAL_KEY, journal); }, [journal]);
  useEffect(() => { saveJson(SESSION_DONE_KEY, sessionsDone); }, [sessionsDone]);
  useEffect(() => { saveJson(PATH_PROGRESS_KEY, pathProgress); }, [pathProgress]);

  // ── Journal ─────────────────────────────────────────────────────────────────
  const saveJournalEntry = useCallback(
    (entry: Omit<JournalEntry, 'id' | 'date'>) => {
      const today = getTodayKey();
      setJournal((prev) => {
        // Replace today's entry if it exists
        const filtered = prev.filter((e) => e.date !== today);
        const newEntry: JournalEntry = {
          id: `journal_${today}_${Date.now()}`,
          date: today,
          ...entry,
        };
        return [newEntry, ...filtered].slice(0, 365); // keep max 365 entries
      });
    },
    []
  );

  const updateJournalEntry = useCallback(
    (id: string, patch: Partial<Omit<JournalEntry, 'id' | 'date'>>) => {
      setJournal((prev) =>
        prev.map((e) => (e.id === id ? { ...e, ...patch } : e))
      );
    },
    []
  );

  const getTodayJournalEntry = useCallback((): JournalEntry | undefined => {
    const today = getTodayKey();
    return journal.find((e) => e.date === today);
  }, [journal]);

  // ── Sessions ─────────────────────────────────────────────────────────────────
  const markSessionDone = useCallback((sessionId: string) => {
    setSessionsDone((prev) => ({
      ...prev,
      [sessionId]: new Date().toISOString(),
    }));
  }, []);

  const isSessionDoneToday = useCallback(
    (sessionId: string): boolean => {
      const done = sessionsDone[sessionId];
      if (!done) return false;
      return done.slice(0, 10) === getTodayKey();
    },
    [sessionsDone]
  );

  // ── Paths ─────────────────────────────────────────────────────────────────────
  const startPath = useCallback((pathId: string) => {
    setPathProgress((prev) => {
      if (prev[pathId]) return prev; // already started
      const now = new Date().toISOString();
      return {
        ...prev,
        [pathId]: {
          startedAt: now,
          completedDays: [],
          lastActivityAt: now,
        },
      };
    });
  }, []);

  const markPathDayDone = useCallback((pathId: string, dayNumber: number) => {
    setPathProgress((prev) => {
      const existing = prev[pathId] ?? {
        startedAt: new Date().toISOString(),
        completedDays: [],
        lastActivityAt: new Date().toISOString(),
      };
      if (existing.completedDays.includes(dayNumber)) return prev;
      return {
        ...prev,
        [pathId]: {
          ...existing,
          completedDays: [...existing.completedDays, dayNumber],
          lastActivityAt: new Date().toISOString(),
        },
      };
    });
  }, []);

  const getPathCompletionPct = useCallback(
    (pathId: string, totalDays: number): number => {
      const progress = pathProgress[pathId];
      if (!progress || totalDays === 0) return 0;
      return Math.round((progress.completedDays.length / totalDays) * 100);
    },
    [pathProgress]
  );

  const resetPath = useCallback((pathId: string) => {
    setPathProgress((prev) => {
      const next = { ...prev };
      delete next[pathId];
      return next;
    });
  }, []);

  return {
    journal,
    saveJournalEntry,
    updateJournalEntry,
    getTodayJournalEntry,
    sessionsDone,
    markSessionDone,
    isSessionDoneToday,
    pathProgress,
    startPath,
    markPathDayDone,
    getPathCompletionPct,
    resetPath,
  };
}
