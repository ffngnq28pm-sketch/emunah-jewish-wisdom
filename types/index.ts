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

// ── Education system ─────────────────────────────────────────

export type GradeLevel =
  | 'Postulant'
  | 'Élève'
  | 'Talmid'
  | 'Haver'
  | 'Lamdan'
  | 'Darshan'
  | 'Dayan'
  | 'Posek'
  | 'Gaon'
  | 'Rav';

export interface Lesson {
  id: string;
  moduleId: number;
  order: number;
  title: string;
  subtitle: string;
  content: string;
  keyPoints: string[];
  hebrewQuote?: string;
  hebrewSource?: string;
  duration: number;
}

export interface EducationModule {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export type QuizDifficulty = 'facile' | 'moyen' | 'difficile';

export interface QuizQuestion {
  id: string;
  moduleId: number;
  difficulty: QuizDifficulty;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  source?: string;
}

export interface ModuleProgress {
  moduleId: number;
  lessonsCompleted: string[];
  quizScores: number[];
  bestScore: number;
  unlocked: boolean;
}

export interface EducationProgress {
  modules: Record<number, ModuleProgress>;
  totalQuizAnswered: number;
  totalCorrect: number;
  grade: GradeLevel;
  gradeScore: number;
  lastActivity: string;
}
