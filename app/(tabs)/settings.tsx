import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Switch,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  Bell,
  Star,
  ChevronRight,
  Moon,
  Info,
  User,
  Target,
  Clock,
  Heart,
  Music,
  Globe,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { PremiumPaywall } from '@/components/PremiumPaywall';
import { AmbientSoundSelector } from '@/components/AmbientSoundSelector';
import { usePremium } from '@/hooks/usePremium';
import { useTheme, AppTheme } from '@/context/ThemeContext';
import {
  useUserProfile,
  FOCUS_THEMES,
  FOCUS_THEME_ICONS,
  FocusTheme,
  NOTIF_PRESETS,
  NotifPreset,
} from '@/context/UserProfileContext';
import { useNightModeContext } from '@/context/NightModeContext';
import { useI18n, LANG_META } from '@/context/I18nContext';

const TIMER_OPTIONS = [5, 10, 15, 30] as const;

type VisualTheme = {
  key: AppTheme;
  label: string;
  desc: string;
  preview: [string, string];
};

const VISUAL_THEMES: VisualTheme[] = [
  {
    key: 'dark',
    label: 'Nuit de Jérusalem',
    desc: 'Ciel nocturne — défaut',
    preview: ['#080A12', '#0E1830'],
  },
  {
    key: 'light',
    label: 'Shacharit',
    desc: 'Aube dorée — parchemin',
    preview: ['#F7F2E8', '#EDE3C8'],
  },
  {
    key: 'sepia',
    label: 'Parchemin ancien',
    desc: 'Ivoire et encre — manuscrit',
    preview: ['#160E02', '#2E1F08'],
  },
];

export default function SettingsScreen() {
  const { isPremium, unlockPremium } = usePremium();
  const { theme, setTheme, colors } = useTheme();
  const { lang, setLang } = useI18n();
  const { profile, update, focusDays } = useUserProfile();
  const { isNightMode, isAutoEnabled, timerMinutes, toggleManual, setAutoEnabled, setTimer } =
    useNightModeContext();
  const [premiumVisible, setPremiumVisible] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.firstName);

  function saveName() {
    update({ firstName: nameInput.trim() });
    setEditingName(false);
  }

  const accent = colors.textAccent;

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Réglages</Text>

          {/* Premium Banner */}
          {!isPremium ? (
            <TouchableOpacity
              style={[styles.premiumBanner, { borderColor: 'rgba(201,168,76,0.3)' }]}
              onPress={() => setPremiumVisible(true)}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={['#0E1830', '#080A1C']}
                style={styles.premiumGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.premiumLeft}>
                  <View style={styles.starBadge}>
                    <Star size={16} color="#C9A84C" fill="#C9A84C" />
                  </View>
                  <View>
                    <Text style={styles.premiumTitle}>Emunah Premium</Text>
                    <Text style={styles.premiumDesc}>Accédez à la sagesse complète</Text>
                  </View>
                </View>
                <View style={styles.premiumCta}>
                  <Text style={styles.premiumCtaText}>Découvrir</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.premiumActive,
                {
                  borderColor: 'rgba(201,168,76,0.25)',
                  backgroundColor: 'rgba(201,168,76,0.08)',
                },
              ]}
            >
              <Star size={16} color="#C9A84C" fill="#C9A84C" />
              <Text style={[styles.premiumActiveText, { color: accent }]}>
                Emunah Premium actif
              </Text>
            </View>
          )}

          {/* Profile */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            <User size={10} color={colors.textMuted} /> PROFIL
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>Prénom</Text>
              {editingName ? (
                <View style={styles.nameEditRow}>
                  <TextInput
                    style={[styles.nameInput, { color: colors.textPrimary, borderColor: colors.borderAccent }]}
                    value={nameInput}
                    onChangeText={setNameInput}
                    autoFocus
                    selectionColor={accent}
                    onSubmitEditing={saveName}
                  />
                  <TouchableOpacity onPress={saveName} style={styles.saveBtn} activeOpacity={0.8}>
                    <Text style={[styles.saveBtnText, { color: accent }]}>Sauver</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity onPress={() => setEditingName(true)} activeOpacity={0.7}>
                  <Text style={[styles.rowValue, { color: colors.textMuted }]}>
                    {profile.firstName || 'Ajouter un prénom'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={[styles.divider, { backgroundColor: colors.border }]} />

            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Intention du mois
              </Text>
              <Text style={[styles.rowValue, { color: colors.textMuted }]}>
                {profile.focusTheme} · {focusDays}j
              </Text>
            </View>
          </View>

          {/* Focus Theme */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            <Target size={10} color={colors.textMuted} /> KAVANAH — INTENTION
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <View style={styles.focusGrid}>
              {FOCUS_THEMES.map((t) => {
                const isActive = profile.focusTheme === t;
                return (
                  <TouchableOpacity
                    key={t}
                    style={[
                      styles.focusPill,
                      {
                        borderColor: isActive ? accent : colors.border,
                        backgroundColor: isActive ? accent + '18' : 'transparent',
                      },
                    ]}
                    onPress={() => update({ focusTheme: t as FocusTheme, focusStartedAt: Date.now() })}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.focusIcon}>{FOCUS_THEME_ICONS[t]}</Text>
                    <Text
                      style={[
                        styles.focusLabel,
                        { color: isActive ? accent : colors.textMuted },
                      ]}
                    >
                      {t}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Notifications */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            <Bell size={10} color={colors.textMuted} /> NOTIFICATIONS
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Sagesse quotidienne
              </Text>
              <Switch
                value={profile.notifEnabled}
                onValueChange={(v) => update({ notifEnabled: v })}
                trackColor={{ false: colors.border, true: accent + '60' }}
                thumbColor={profile.notifEnabled ? accent : colors.textMuted}
              />
            </View>

            {profile.notifEnabled && (
              <>
                <View style={[styles.divider, { backgroundColor: colors.border }]} />
                <Text style={[styles.rowLabel, { color: colors.textMuted, paddingHorizontal: 16, paddingTop: 8, fontSize: 11 }]}>
                  Heure de téfilah
                </Text>
                <View style={styles.notifPresetRow}>
                  {NOTIF_PRESETS.map((p) => {
                    const isActive = profile.notifPreset === p.key;
                    return (
                      <TouchableOpacity
                        key={p.key}
                        style={[
                          styles.presetBtn,
                          {
                            borderColor: isActive ? accent : colors.border,
                            backgroundColor: isActive ? accent + '14' : 'transparent',
                          },
                        ]}
                        onPress={() => update({ notifPreset: p.key as NotifPreset })}
                        activeOpacity={0.8}
                      >
                        <Text
                          style={[
                            styles.presetName,
                            { color: isActive ? accent : colors.textMuted },
                          ]}
                        >
                          {p.label}
                        </Text>
                        <Text
                          style={[styles.presetTime, { color: isActive ? accent + 'AA' : colors.textMuted + '80' }]}
                        >
                          {p.time}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <View style={[styles.divider, { backgroundColor: colors.border }]} />
                <Text style={[styles.rowLabel, { color: colors.textMuted, paddingHorizontal: 16, paddingTop: 8, paddingBottom: 4, fontSize: 11 }]}>
                  Thème des notifications
                </Text>
                <View style={[styles.notifPresetRow, { flexWrap: 'wrap' }]}>
                  {(['', ...FOCUS_THEMES] as string[]).map((t) => (
                    <TouchableOpacity
                      key={t}
                      style={[styles.presetBtn, { borderColor: colors.border }, profile.notifTheme === t && { borderColor: accent, backgroundColor: accent + '14' }]}
                      onPress={() => update({ notifTheme: t })}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.presetName, { color: colors.textMuted }, profile.notifTheme === t && { color: accent }]}>
                        {t || 'Aléatoire'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
          </View>

          {/* Section: Language */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>LANGUE</Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <Globe size={18} color={accent} />
              <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Langue de l&apos;interface</Text>
            </View>
            <View style={styles.langGrid}>
              {LANG_META.map((meta) => (
                <TouchableOpacity
                  key={meta.code}
                  style={[styles.langBtn, { backgroundColor: colors.bgInput, borderColor: colors.border }, lang === meta.code && { backgroundColor: accent + '20', borderColor: accent }]}
                  onPress={() => setLang(meta.code)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.langCode, { color: colors.textMuted }, lang === meta.code && { color: accent }]}>{meta.code.toUpperCase()}</Text>
                  <Text style={[styles.langNative, { color: colors.textMuted }, lang === meta.code && { color: colors.textSecondary }]}>{meta.native}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Visual Theme */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            THÈME VISUEL
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            {VISUAL_THEMES.map((vt) => {
              const isActive = theme === vt.key;
              return (
                <TouchableOpacity
                  key={vt.key}
                  style={[
                    styles.themeRow,
                    isActive && {
                      backgroundColor: accent + '0C',
                      borderRadius: 10,
                    },
                  ]}
                  onPress={() => setTheme(vt.key)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={vt.preview}
                    style={styles.themePreview}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  />
                  <View style={styles.themeInfo}>
                    <Text style={[styles.themeName, { color: isActive ? '#F2EAD0' : colors.textPrimary }]}>
                      {vt.label}
                    </Text>
                    <Text style={[styles.themeDesc, { color: colors.textMuted }]}>{vt.desc}</Text>
                  </View>
                  {isActive && (
                    <View style={[styles.activeCheck, { backgroundColor: accent }]}>
                      <Text style={{ color: '#080A12', fontSize: 10, fontFamily: 'Lato_700Bold' }}>✓</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Night Mode */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            <Moon size={10} color={colors.textMuted} /> MODE NUIT
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>Filtre ambre</Text>
              <Switch
                value={isNightMode}
                onValueChange={toggleManual}
                trackColor={{ false: colors.border, true: accent + '60' }}
                thumbColor={isNightMode ? '#FFA040' : colors.textMuted}
              />
            </View>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                Minuterie
              </Text>
              <View style={styles.timerRow}>
                {TIMER_OPTIONS.map((min) => (
                  <TouchableOpacity
                    key={min}
                    style={[
                      styles.timerBtn,
                      {
                        borderColor: timerMinutes === min ? '#FFA040' : colors.border,
                        backgroundColor: timerMinutes === min ? '#FFA04018' : 'transparent',
                      },
                    ]}
                    onPress={() => setTimer(min)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.timerText,
                        { color: timerMinutes === min ? '#FFA040' : colors.textMuted },
                      ]}
                    >
                      {min}min
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Ambient */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            <Music size={10} color={colors.textMuted} /> SONS D'AMBIANCE
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <AmbientSoundSelector />
          </View>

          {/* About */}
          <Text style={[styles.sectionLabel, { color: colors.textMuted }]}>
            <Info size={10} color={colors.textMuted} /> À PROPOS
          </Text>
          <View style={[styles.section, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => router.push('/support' as any)}
              activeOpacity={0.8}
            >
              <View>
                <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>
                  Soutenir Emunah
                </Text>
                <Text style={[styles.rowSub, { color: colors.textMuted }]}>
                  Tzedakah — soutenir l'œuvre
                </Text>
              </View>
              <ChevronRight size={16} color={colors.textMuted} />
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <TouchableOpacity style={styles.row} activeOpacity={0.75} onPress={() => Linking.openURL('https://emunah-jewish-wisdom.netlify.app/privacy.html')}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>Politique de confidentialité</Text>
              <ChevronRight size={16} color={colors.textMuted} />
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <TouchableOpacity style={styles.row} activeOpacity={0.75} onPress={() => Linking.openURL('https://emunah-jewish-wisdom.netlify.app/terms.html')}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>Conditions d'utilisation</Text>
              <ChevronRight size={16} color={colors.textMuted} />
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textPrimary }]}>Version</Text>
              <Text style={[styles.rowValue, { color: colors.textMuted }]}>1.0.0</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: colors.textMuted }]}>
                אֱמוּנָה — Sagesse du judaïsme
              </Text>
            </View>
          </View>

          {/* Signature */}
          <View style={styles.sigBlock}>
            <Text style={[styles.sigText, { color: colors.textMuted }]}>
              ─────────────────{'\n'}
              Charif Hachichi{'\n'}
              Charif.Hachichi@Egis-Group.com{'\n'}
              ─────────────────
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <PremiumPaywall visible={premiumVisible} onClose={() => setPremiumVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingHorizontal: 20, paddingBottom: 120 },
  title: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 28,
    paddingTop: 16,
    marginBottom: 20,
  },
  sectionLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    letterSpacing: 1.8,
    marginBottom: 8,
    marginTop: 20,
  },
  section: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 13,
    gap: 12,
  },
  rowLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    flex: 1,
  },
  rowSub: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    marginTop: 2,
  },
  rowValue: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
  },
  divider: { height: 1, marginHorizontal: 16 },
  nameEditRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nameInput: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    borderBottomWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    minWidth: 80,
  },
  saveBtn: { padding: 4 },
  saveBtnText: { fontFamily: 'Lato_700Bold', fontSize: 13 },
  focusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    padding: 14,
  },
  focusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  focusIcon: { fontSize: 14 },
  focusLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
  },
  notifPresetRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  presetBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    gap: 2,
  },
  presetName: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    letterSpacing: 0.3,
  },
  presetTime: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
  },
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  themePreview: {
    width: 36,
    height: 36,
    borderRadius: 10,
  },
  themeInfo: { flex: 1, gap: 2 },
  themeName: {
    fontFamily: 'Lato_700Bold',
    fontSize: 13,
  },
  themeDesc: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
  },
  activeCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerRow: {
    flexDirection: 'row',
    gap: 6,
  },
  timerBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  timerText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
  },
  premiumBanner: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 24,
    overflow: 'hidden',
  },
  premiumGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  premiumLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  starBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(201,168,76,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    color: '#F2EAD0',
  },
  premiumDesc: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: '#8A8FA8',
  },
  premiumCta: {
    backgroundColor: '#C9A84C',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  premiumCtaText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 12,
    color: '#080A12',
  },
  premiumActive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 24,
  },
  premiumActiveText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 13,
  },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 18, paddingVertical: 14 },
  sectionTitle: { fontFamily: 'Lato_400Regular', fontSize: 13 },
  langGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingHorizontal: 14, paddingBottom: 14 },
  langBtn: { width: '28%', minWidth: 70, paddingVertical: 10, borderRadius: 12, alignItems: 'center', borderWidth: 1, gap: 2 },
  langCode: { fontFamily: 'Lato_700Bold', fontSize: 13 },
  langNative: { fontFamily: 'Lato_400Regular', fontSize: 11 },
  sigBlock: {
    marginTop: 32,
    alignItems: 'center',
  },
  sigText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 18,
    opacity: 0.5,
  },
});
