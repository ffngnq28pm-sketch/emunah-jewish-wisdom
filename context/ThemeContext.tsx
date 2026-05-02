import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage_like } from './storage';

export type AppTheme = 'dark' | 'light' | 'sepia';

export interface ThemeColors {
  bg: string;
  bgCard: string;
  bgSection: string;
  bgInput: string;
  bgTabBar: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textAccent: string;
  border: string;
  borderAccent: string;
  cardGradient: [string, string, string];
  statusBar: 'light' | 'dark';
}

const THEMES: Record<AppTheme, ThemeColors> = {
  dark: {
    bg: '#080A12',
    bgCard: '#0E1120',
    bgSection: 'rgba(201,168,76,0.05)',
    bgInput: 'rgba(201,168,76,0.08)',
    bgTabBar: '#090B14',
    textPrimary: '#F2EAD0',
    textSecondary: '#C8B888',
    textMuted: '#4A4E68',
    textAccent: '#C9A84C',
    border: 'rgba(201,168,76,0.10)',
    borderAccent: 'rgba(201,168,76,0.35)',
    cardGradient: ['rgba(8,10,18,0.40)', 'rgba(8,10,18,0.70)', 'rgba(8,10,18,0.93)'],
    statusBar: 'light',
  },
  light: {
    bg: '#F7F2E8',
    bgCard: '#FFFFFF',
    bgSection: 'rgba(0,0,0,0.03)',
    bgInput: 'rgba(0,0,0,0.05)',
    bgTabBar: '#FFFFFF',
    textPrimary: '#1A1505',
    textSecondary: '#3A2A10',
    textMuted: '#8A7258',
    textAccent: '#8A6B20',
    border: 'rgba(0,0,0,0.08)',
    borderAccent: 'rgba(138,107,32,0.4)',
    cardGradient: ['rgba(10,8,0,0.15)', 'rgba(10,8,0,0.52)', 'rgba(10,8,0,0.87)'],
    statusBar: 'dark',
  },
  sepia: {
    bg: '#160E02',
    bgCard: '#1E1508',
    bgSection: 'rgba(201,168,76,0.07)',
    bgInput: 'rgba(201,168,76,0.09)',
    bgTabBar: '#120A00',
    textPrimary: '#E8D898',
    textSecondary: '#C8A868',
    textMuted: '#7A5830',
    textAccent: '#D4A844',
    border: 'rgba(201,168,76,0.13)',
    borderAccent: 'rgba(212,168,68,0.42)',
    cardGradient: ['rgba(22,14,2,0.35)', 'rgba(22,14,2,0.65)', 'rgba(22,14,2,0.94)'],
    statusBar: 'light',
  },
};

interface ThemeCtx {
  theme: AppTheme;
  colors: ThemeColors;
  setTheme: (t: AppTheme) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: 'dark',
  colors: THEMES.dark,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>('dark');

  useEffect(() => {
    const saved = AsyncStorage_like.get('emunah_theme') as AppTheme | null;
    if (saved && THEMES[saved]) setThemeState(saved);
  }, []);

  function setTheme(t: AppTheme) {
    setThemeState(t);
    AsyncStorage_like.set('emunah_theme', t);
  }

  return (
    <ThemeContext.Provider value={{ theme, colors: THEMES[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export { THEMES };
