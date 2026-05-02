import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage_like } from './storage';

export type FocusTheme = 'Emunah' | 'Chesed' | 'Ahavah' | 'Torah' | 'Shalom' | 'Simcha';
export type NotifPreset = 'Shacharit' | 'Mincha' | 'Maariv' | 'Shabbat' | 'Havdalah';
export type AppTheme = 'dark' | 'light' | 'sepia';

export interface UserProfile {
  firstName: string;
  focusTheme: FocusTheme;
  focusStartedAt: number;
  notifEnabled: boolean;
  notifPreset: NotifPreset;
  notifTheme: string;
  appTheme: AppTheme;
  onboardingDone: boolean;
}

const DEFAULT: UserProfile = {
  firstName: '',
  focusTheme: 'Torah',
  focusStartedAt: Date.now(),
  notifEnabled: false,
  notifPreset: 'Shacharit',
  notifTheme: '',
  appTheme: 'dark',
  onboardingDone: false,
};

interface ProfileCtx {
  profile: UserProfile;
  update: (patch: Partial<UserProfile>) => void;
  focusDays: number;
}

const ProfileContext = createContext<ProfileCtx>({
  profile: DEFAULT,
  update: () => {},
  focusDays: 0,
});

const KEY = 'emunah_user_profile';

export function UserProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT);

  useEffect(() => {
    const raw = AsyncStorage_like.get(KEY);
    if (raw) {
      try {
        setProfile({ ...DEFAULT, ...JSON.parse(raw) });
      } catch {}
    }
  }, []);

  function update(patch: Partial<UserProfile>) {
    setProfile((prev) => {
      const next = { ...prev, ...patch };
      AsyncStorage_like.set(KEY, JSON.stringify(next));
      return next;
    });
  }

  const focusDays = Math.max(
    1,
    Math.floor((Date.now() - profile.focusStartedAt) / 86400000) + 1
  );

  return (
    <ProfileContext.Provider value={{ profile, update, focusDays }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useUserProfile() {
  return useContext(ProfileContext);
}

export const FOCUS_THEMES: FocusTheme[] = [
  'Emunah',
  'Chesed',
  'Ahavah',
  'Torah',
  'Shalom',
  'Simcha',
];

export const FOCUS_THEME_ICONS: Record<FocusTheme, string> = {
  Emunah: '✡️',
  Chesed: '🕊️',
  Ahavah: '❤️',
  Torah: '📜',
  Shalom: '☮️',
  Simcha: '✨',
};

export const NOTIF_PRESETS: { key: NotifPreset; label: string; time: string; desc: string }[] = [
  { key: 'Shacharit', label: 'Shacharit', time: '07:00', desc: 'Prière du matin' },
  { key: 'Mincha',    label: 'Mincha',    time: '13:00', desc: "Prière de l'après-midi" },
  { key: 'Maariv',   label: 'Maariv',    time: '20:00', desc: 'Prière du soir' },
  { key: 'Shabbat',  label: 'Shabbat',   time: '18:00', desc: 'Entrée du Shabbat (vendredi)' },
  { key: 'Havdalah', label: 'Havdalah',  time: '21:00', desc: 'Sortie du Shabbat (samedi)' },
];
