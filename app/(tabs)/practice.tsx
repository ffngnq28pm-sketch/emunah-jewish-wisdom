import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useUserProfile } from '@/context/UserProfileContext';
import { usePremium } from '@/hooks/usePremium';
import { usePractice } from '@/hooks/usePractice';
import { DailySession } from '@/components/DailySession';
import { SpiritualJournal } from '@/components/SpiritualJournal';
import { WeeklyPath } from '@/components/WeeklyPath';
import { DAILY_SESSIONS } from '@/data/sessions';
import { WEEKLY_PATHS } from '@/data/weeklyPaths';

// ─── Types ────────────────────────────────────────────────────────────────────
type ActiveModal = 'session' | 'journal' | 'path';

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function PracticeScreen() {
  const { colors } = useTheme();
  const { profile } = useUserProfile();
  const { isPremium } = usePremium();
  const {
    journal,
    saveJournalEntry,
    getTodayJournalEntry,
    markSessionDone,
    isSessionDoneToday,
    pathProgress,
    startPath,
    markPathDayDone,
    getPathCompletionPct,
  } = usePractice();

  const [activeModal, setActiveModal] = useState<ActiveModal | null>(null);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null);

  // Pick today's session based on day of year
  const todaySession = useMemo(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    return DAILY_SESSIONS[dayOfYear % DAILY_SESSIONS.length];
  }, []);

  const todayJournalEntry = getTodayJournalEntry();
  const todaySessionDone = isSessionDoneToday(todaySession.id);

  const greeting = profile.firstName ? `Shalom, ${profile.firstName}` : 'Ma Pratique';

  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const freePaths = WEEKLY_PATHS.filter((p) => !p.isPremium);
  const premiumPaths = WEEKLY_PATHS.filter((p) => p.isPremium);

  const selectedSession = selectedSessionId
    ? DAILY_SESSIONS.find((s) => s.id === selectedSessionId) ?? null
    : null;

  const selectedPath = selectedPathId
    ? WEEKLY_PATHS.find((p) => p.id === selectedPathId) ?? null
    : null;

  const openSession = (id: string) => {
    setSelectedSessionId(id);
    setActiveModal('session');
  };

  const openPath = (id: string) => {
    setSelectedPathId(id);
    setActiveModal('path');
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedSessionId(null);
    setSelectedPathId(null);
  };

  // journal entries count (last 7 days)
  const recentJournalCount = useMemo(() => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);
    return journal.filter((e) => new Date(e.date) >= cutoff).length;
  }, [journal]);

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.appName, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
              {greeting}
            </Text>
            <Text style={[styles.dateText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
              {today}
            </Text>
          </View>
          <View style={[styles.hebrewBadge, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
            <Text style={[styles.hebrewBadgeText, { color: colors.textAccent, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
              עֲבוֹדַת הַלֵּב
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ── Daily Session ────────────────────────────────────────────────── */}
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
            Session du jour
          </Text>

          <TouchableOpacity
            style={[
              styles.sessionCard,
              {
                backgroundColor: colors.bgCard,
                borderColor: todaySessionDone ? colors.borderAccent : colors.border,
              },
            ]}
            onPress={() => openSession(todaySession.id)}
            activeOpacity={0.85}
          >
            {/* Top row */}
            <View style={styles.sessionCardTop}>
              <View style={[styles.sessionIconCircle, { backgroundColor: colors.bgSection }]}>
                <Text style={styles.sessionCardIcon}>✡️</Text>
              </View>
              <View style={styles.sessionCardInfo}>
                <Text style={[styles.sessionCardTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
                  {todaySession.title}
                </Text>
                <Text style={[styles.sessionCardSubtitle, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
                  {todaySession.subtitle}
                </Text>
              </View>
              {todaySessionDone && (
                <View style={[styles.doneBadge, { backgroundColor: colors.textAccent }]}>
                  <Text style={[styles.doneBadgeText, { fontFamily: 'Lato_700Bold' }]}>✓</Text>
                </View>
              )}
            </View>

            {/* Bottom row */}
            <View style={[styles.sessionCardBottom, { borderTopColor: colors.border }]}>
              <View style={styles.sessionCardMeta}>
                <Text style={[styles.sessionCardMetaText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                  {todaySession.durationMin} min
                </Text>
                <View style={[styles.dot4, { backgroundColor: colors.textMuted }]} />
                <Text style={[styles.sessionCardMetaText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                  {todaySession.steps.length} étapes
                </Text>
                <View style={[styles.dot4, { backgroundColor: colors.textMuted }]} />
                <Text style={[styles.sessionCardMetaText, { color: colors.textAccent, fontFamily: 'Lato_400Regular' }]}>
                  {todaySession.theme}
                </Text>
              </View>
              <Text style={[styles.sessionCardCta, { color: colors.textAccent, fontFamily: 'Lato_700Bold' }]}>
                {todaySessionDone ? 'Revoir →' : 'Commencer →'}
              </Text>
            </View>
          </TouchableOpacity>

          {/* More sessions */}
          <Text style={[styles.subSectionTitle, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
            Autres sessions
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sessionRow}
          >
            {DAILY_SESSIONS.filter((s) => s.id !== todaySession.id).slice(0, 8).map((s) => (
              <TouchableOpacity
                key={s.id}
                style={[styles.sessionChip, { backgroundColor: colors.bgSection, borderColor: colors.border }]}
                onPress={() => openSession(s.id)}
                activeOpacity={0.8}
              >
                <Text style={styles.sessionChipIcon}>
                  {isSessionDoneToday(s.id) ? '✓' : '✡️'}
                </Text>
                <Text
                  style={[styles.sessionChipTitle, { color: colors.textSecondary, fontFamily: 'Lato_700Bold' }]}
                  numberOfLines={2}
                >
                  {s.title}
                </Text>
                <Text style={[styles.sessionChipDuration, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                  {s.durationMin} min
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* ── Journal ──────────────────────────────────────────────────────── */}
          <View style={styles.sectionRow}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
              Journal du Soir
            </Text>
            {recentJournalCount > 0 && (
              <View style={[styles.countBadge, { backgroundColor: colors.bgSection, borderColor: colors.borderAccent }]}>
                <Text style={[styles.countBadgeText, { color: colors.textAccent, fontFamily: 'Lato_700Bold' }]}>
                  {recentJournalCount} cette semaine
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={[
              styles.journalCard,
              {
                backgroundColor: colors.bgCard,
                borderColor: todayJournalEntry ? colors.borderAccent : colors.border,
              },
            ]}
            onPress={() => setActiveModal('journal')}
            activeOpacity={0.85}
          >
            <View style={styles.journalCardInner}>
              <Text style={styles.journalIcon}>📔</Text>
              <View style={styles.journalInfo}>
                <Text style={[styles.journalTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
                  {todayJournalEntry ? 'Journal du soir écrit' : 'Écrire le journal du soir'}
                </Text>
                <Text style={[styles.journalSubtitle, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
                  {todayJournalEntry
                    ? 'Hakarat hatov · gratitude · middot'
                    : '6 questions pour clôturer la journée avec intention'}
                </Text>
              </View>
              {todayJournalEntry ? (
                <View style={[styles.doneBadge, { backgroundColor: colors.textAccent }]}>
                  <Text style={[styles.doneBadgeText, { fontFamily: 'Lato_700Bold' }]}>✓</Text>
                </View>
              ) : (
                <Text style={[styles.journalArrow, { color: colors.textAccent }]}>›</Text>
              )}
            </View>

            {/* Hebrew verse */}
            <View style={[styles.journalVerse, { borderTopColor: colors.border }]}>
              <Text style={[styles.journalVerseText, { color: colors.textAccent, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
                יוֹמָן רוּחָנִי
              </Text>
              <Text style={[styles.journalVerseTranslation, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                Journal spirituel — {journal.length} entrées au total
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* ── Parcours ─────────────────────────────────────────────────────── */}
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
            Parcours spirituels
          </Text>
          <Text style={[styles.sectionDescription, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
            Des chemins guidés pour approfondir votre pratique juive
          </Text>

          {/* Free paths */}
          <Text style={[styles.subSectionTitle, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
            Gratuits · {freePaths.length} parcours
          </Text>
          {freePaths.map((path) => {
            const progress = pathProgress[path.id];
            const pct = getPathCompletionPct(path.id, path.durationDays);
            return (
              <TouchableOpacity
                key={path.id}
                style={[
                  styles.pathCard,
                  {
                    backgroundColor: colors.bgCard,
                    borderColor: progress ? colors.borderAccent : colors.border,
                  },
                ]}
                onPress={() => openPath(path.id)}
                activeOpacity={0.85}
              >
                <View style={styles.pathCardLeft}>
                  <Text style={styles.pathCardIcon}>{path.icon}</Text>
                </View>
                <View style={styles.pathCardInfo}>
                  <Text style={[styles.pathCardTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
                    {path.title}
                  </Text>
                  <Text style={[styles.pathCardSubtitle, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
                    {path.subtitle}
                  </Text>
                  {progress && (
                    <View style={[styles.pathProgressTrack, { backgroundColor: colors.border }]}>
                      <View
                        style={[
                          styles.pathProgressFill,
                          { backgroundColor: colors.textAccent, width: `${pct}%` as any },
                        ]}
                      />
                    </View>
                  )}
                  <Text style={[styles.pathCardMeta, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                    {path.durationDays} jours
                    {progress ? ` · ${pct}% accompli` : ''}
                  </Text>
                </View>
                <Text style={[styles.pathCardArrow, { color: colors.textAccent }]}>›</Text>
              </TouchableOpacity>
            );
          })}

          {/* Premium paths */}
          <Text style={[styles.subSectionTitle, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
            Premium · {premiumPaths.length} parcours
          </Text>
          {premiumPaths.map((path) => {
            const progress = pathProgress[path.id];
            const pct = getPathCompletionPct(path.id, path.durationDays);
            const isLocked = !isPremium;
            return (
              <TouchableOpacity
                key={path.id}
                style={[
                  styles.pathCard,
                  {
                    backgroundColor: colors.bgCard,
                    borderColor: progress ? colors.borderAccent : colors.border,
                    opacity: isLocked ? 0.6 : 1,
                  },
                ]}
                onPress={() => !isLocked && openPath(path.id)}
                activeOpacity={0.85}
              >
                <View style={styles.pathCardLeft}>
                  <Text style={styles.pathCardIcon}>{path.icon}</Text>
                </View>
                <View style={styles.pathCardInfo}>
                  <View style={styles.pathCardTitleRow}>
                    <Text
                      style={[styles.pathCardTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}
                      numberOfLines={1}
                    >
                      {path.title}
                    </Text>
                    {isLocked && (
                      <Text style={[styles.lockIcon, { color: colors.textAccent }]}>🔒</Text>
                    )}
                  </View>
                  <Text style={[styles.pathCardSubtitle, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
                    {path.subtitle}
                  </Text>
                  {progress && !isLocked && (
                    <View style={[styles.pathProgressTrack, { backgroundColor: colors.border }]}>
                      <View
                        style={[
                          styles.pathProgressFill,
                          { backgroundColor: colors.textAccent, width: `${pct}%` as any },
                        ]}
                      />
                    </View>
                  )}
                  <Text style={[styles.pathCardMeta, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                    {path.durationDays} jours
                    {progress && !isLocked ? ` · ${pct}% accompli` : ''}
                  </Text>
                </View>
                <Text style={[styles.pathCardArrow, { color: colors.textAccent }]}>›</Text>
              </TouchableOpacity>
            );
          })}

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          {/* ── Ressources ───────────────────────────────────────────────────── */}
          <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
            Ressources
          </Text>
          <Text style={[styles.sectionDescription, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
            Prières, psaumes et textes fondamentaux du judaïsme
          </Text>

          <TouchableOpacity
            style={[styles.resourceBtn, { backgroundColor: colors.bgCard, borderColor: colors.borderAccent }]}
            onPress={() => router.push('/tefila' as any)}
            activeOpacity={0.85}
          >
            <View style={styles.resourceBtnLeft}>
              <Text style={styles.resourceBtnIcon}>🙏</Text>
            </View>
            <View style={styles.resourceBtnInfo}>
              <Text style={[styles.resourceBtnTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
                Tefila & Psaumes
              </Text>
              <Text style={[styles.resourceBtnSubtitle, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
                Shaharit · Shabbat · Birkot HaMazon · Pirké Avot
              </Text>
            </View>
            <Text style={[styles.resourceBtnArrow, { color: colors.textAccent }]}>›</Text>
          </TouchableOpacity>

          {/* Bottom breathing room */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}

      {/* Session modal */}
      <Modal
        visible={activeModal === 'session' && selectedSession !== null}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeModal}
      >
        {selectedSession && (
          <DailySession
            session={selectedSession}
            onComplete={(sessionId) => markSessionDone(sessionId)}
            onClose={closeModal}
          />
        )}
      </Modal>

      {/* Journal modal */}
      <Modal
        visible={activeModal === 'journal'}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeModal}
      >
        <SpiritualJournal
          existingEntry={todayJournalEntry}
          onSave={saveJournalEntry}
          onClose={closeModal}
        />
      </Modal>

      {/* Path modal */}
      <Modal
        visible={activeModal === 'path' && selectedPath !== null}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeModal}
      >
        {selectedPath && (
          <WeeklyPath
            path={selectedPath}
            completedDays={pathProgress[selectedPath.id]?.completedDays ?? []}
            isStarted={!!pathProgress[selectedPath.id]}
            onStartPath={(pathId) => startPath(pathId)}
            onDayPress={(pathId, dayNumber) => {
              markPathDayDone(pathId, dayNumber);
              // Also open the session for that day
              const day = selectedPath.days.find((d) => d.dayNumber === dayNumber);
              if (day) {
                closeModal();
                setTimeout(() => openSession(day.sessionId), 300);
              }
            }}
            onClose={closeModal}
          />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safeArea: { flex: 1 },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
  },
  appName: {
    fontSize: 20,
    letterSpacing: 0.5,
  },
  dateText: {
    fontSize: 12,
    marginTop: 2,
    textTransform: 'capitalize',
  },
  hebrewBadge: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  hebrewBadgeText: {
    fontSize: 13,
    letterSpacing: 0.5,
  },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 8 },

  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    letterSpacing: 0.3,
    marginBottom: 12,
  },
  subSectionTitle: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 4,
  },
  sectionDescription: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: -8,
    marginBottom: 16,
  },
  countBadge: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  countBadgeText: {
    fontSize: 11,
  },
  divider: {
    height: 1,
    marginVertical: 20,
  },

  // Session card
  sessionCard: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    overflow: 'hidden',
  },
  sessionCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  sessionIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sessionCardIcon: {
    fontSize: 22,
  },
  sessionCardInfo: {
    flex: 1,
    gap: 3,
  },
  sessionCardTitle: {
    fontSize: 15,
    letterSpacing: 0.2,
  },
  sessionCardSubtitle: {
    fontSize: 12,
    lineHeight: 18,
  },
  sessionCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sessionCardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sessionCardMetaText: {
    fontSize: 11,
  },
  dot4: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
  },
  sessionCardCta: {
    fontSize: 12,
  },

  // Session row
  sessionRow: {
    paddingBottom: 4,
    gap: 10,
  },
  sessionChip: {
    width: 120,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    gap: 6,
  },
  sessionChipIcon: {
    fontSize: 18,
  },
  sessionChipTitle: {
    fontSize: 11,
    lineHeight: 16,
  },
  sessionChipDuration: {
    fontSize: 10,
  },

  // Done badge
  doneBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneBadgeText: {
    fontSize: 13,
    color: '#fff',
  },

  // Journal card
  journalCard: {
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 4,
    overflow: 'hidden',
  },
  journalCardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  journalIcon: {
    fontSize: 28,
  },
  journalInfo: {
    flex: 1,
    gap: 3,
  },
  journalTitle: {
    fontSize: 15,
    letterSpacing: 0.2,
  },
  journalSubtitle: {
    fontSize: 12,
    lineHeight: 18,
  },
  journalArrow: {
    fontSize: 24,
  },
  journalVerse: {
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 2,
  },
  journalVerseText: {
    fontSize: 13,
    letterSpacing: 0.5,
  },
  journalVerseTranslation: {
    fontSize: 11,
  },

  // Path cards
  pathCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 8,
    gap: 12,
  },
  pathCardLeft: {
    width: 40,
    alignItems: 'center',
  },
  pathCardIcon: {
    fontSize: 26,
  },
  pathCardInfo: {
    flex: 1,
    gap: 3,
  },
  pathCardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pathCardTitle: {
    fontSize: 14,
    letterSpacing: 0.2,
    flex: 1,
  },
  lockIcon: {
    fontSize: 13,
  },
  pathCardSubtitle: {
    fontSize: 11,
    lineHeight: 16,
  },
  pathCardMeta: {
    fontSize: 10,
    marginTop: 2,
  },
  pathProgressTrack: {
    height: 3,
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 2,
  },
  pathProgressFill: {
    height: 3,
    borderRadius: 2,
  },
  pathCardArrow: {
    fontSize: 22,
  },

  // Resource buttons
  resourceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 8,
    gap: 12,
  },
  resourceBtnLeft: {
    width: 40,
    alignItems: 'center',
  },
  resourceBtnIcon: {
    fontSize: 26,
  },
  resourceBtnInfo: {
    flex: 1,
    gap: 3,
  },
  resourceBtnTitle: {
    fontSize: 14,
    letterSpacing: 0.2,
  },
  resourceBtnSubtitle: {
    fontSize: 11,
    lineHeight: 16,
  },
  resourceBtnArrow: {
    fontSize: 22,
  },
});
