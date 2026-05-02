import { Audio } from 'expo-av';
import { Platform } from 'react-native';
import { AsyncStorage_like } from '@/context/storage';

const AMBIENT_SOURCES: Record<string, number | null> = {
  rain:    require('../assets/audio/rain.wav'),
  wind:    require('../assets/audio/wind.wav'),
  shofar:  require('../assets/audio/shofar.wav'),
  nigun:   require('../assets/audio/nigun.wav'),
  silence: null,
};

export const AMBIENT_TRACKS = [
  { id: 'silence', label: 'Silence sacré',        emoji: '✡️', premium: false },
  { id: 'rain',    label: 'Pluie de Jérusalem',   emoji: '🌧️', premium: true },
  { id: 'wind',    label: 'Vent du désert',        emoji: '🏜️', premium: true },
  { id: 'shofar',  label: 'Shofar méditatif',      emoji: '🎺', premium: true },
  { id: 'nigun',   label: 'Nigun contemplatif',    emoji: '🎶', premium: true },
] as const;

export type AmbientId = (typeof AMBIENT_TRACKS)[number]['id'];

const WEB_UNLOCK_KEY = 'emunah_web_audio_unlocked';
let _ambientSound: Audio.Sound | null = null;
let _audioConfigured = false;

async function ensureAudioConfigured() {
  if (_audioConfigured || Platform.OS === 'web') return;
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: false,
  });
  _audioConfigured = true;
}

export function unlockWebAudioSync(silenceAssetUrl: string) {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  try {
    const a = document.createElement('audio');
    a.src = silenceAssetUrl;
    a.volume = 0.001;
    a.play().catch(() => {});
    AsyncStorage_like.set(WEB_UNLOCK_KEY, '1');
  } catch {}
}

export function isWebAudioUnlocked(): boolean {
  if (Platform.OS !== 'web') return true;
  return AsyncStorage_like.get(WEB_UNLOCK_KEY) === '1';
}

export const AudioService = {
  async playAmbient(id: AmbientId, volume = 0.7) {
    await ensureAudioConfigured();
    await this.stopAmbient();
    const source = AMBIENT_SOURCES[id];
    if (!source) return;
    const { sound } = await Audio.Sound.createAsync(
      source as number,
      { isLooping: true, volume, shouldPlay: true }
    );
    _ambientSound = sound;
  },

  async stopAmbient() {
    if (_ambientSound) {
      await _ambientSound.stopAsync().catch(() => {});
      await _ambientSound.unloadAsync().catch(() => {});
      _ambientSound = null;
    }
  },

  async setAmbientVolume(volume: number) {
    if (_ambientSound) await _ambientSound.setVolumeAsync(volume).catch(() => {});
  },

  isAmbientPlaying(): boolean {
    return _ambientSound !== null;
  },
};
