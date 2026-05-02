import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { WeeklyPath as WeeklyPathType } from '@/data/weeklyPaths';

// ─── Props ────────────────────────────────────────────────────────────────────
interface WeeklyPathProps {
  path: WeeklyPathType;
  completedDays: number[];
  onStartPath?: (pathId: string) => void;
  onDayPress?: (pathId: string, dayNumber: number) => void;
  onClose?: () => void;
  isStarted: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function WeeklyPath({
  path,
  completedDays,
  onStartPath,
  onDayPress,
  onClose,
  isStarted,
}: WeeklyPathProps) {
  const { colors } = useTheme();

  const completionPct =
    path.durationDays > 0
      ? Math.round((completedDays.length / path.durationDays) * 100)
      : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
          <Text style={[styles.closeBtnText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
            ✕
          </Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.pathIcon]}>{path.icon}</Text>
        </View>
        {path.isPremium && (
          <View style={[styles.premiumBadge, { backgroundColor: colors.textAccent }]}>
            <Text style={[styles.premiumBadgeText, { fontFamily: 'Lato_700Bold' }]}>
              PREMIUM
            </Text>
          </View>
        )}
        {!path.isPremium && <View style={{ width: 60 }} />}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Path info */}
        <View style={[styles.pathInfo, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
          <Text style={[styles.pathTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
            {path.title}
          </Text>
          <Text style={[styles.pathSubtitle, { color: colors.textAccent, fontFamily: 'Lato_400Regular' }]}>
            {path.subtitle}
          </Text>
          <Text style={[styles.pathDescription, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
            {path.description}
          </Text>

          <View style={styles.pathMeta}>
            <View style={[styles.metaChip, { backgroundColor: colors.bgInput, borderColor: colors.border }]}>
              <Text style={[styles.metaChipText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                {path.durationDays} jours
              </Text>
            </View>
            <View style={[styles.metaChip, { backgroundColor: colors.bgInput, borderColor: colors.border }]}>
              <Text style={[styles.metaChipText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                {path.isPremium ? 'Premium' : 'Gratuit'}
              </Text>
            </View>
            {isStarted && (
              <View style={[styles.metaChip, { backgroundColor: colors.bgSection, borderColor: colors.borderAccent }]}>
                <Text style={[styles.metaChipText, { color: colors.textAccent, fontFamily: 'Lato_700Bold' }]}>
                  {completionPct}% accompli
                </Text>
              </View>
            )}
          </View>

          {/* Progress bar */}
          {isStarted && (
            <View style={styles.progressContainer}>
              <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      backgroundColor: colors.textAccent,
                      width: `${completionPct}%` as any,
                    },
                  ]}
                />
              </View>
              <Text style={[styles.progressLabel, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
                {completedDays.length}/{path.durationDays} jours
              </Text>
            </View>
          )}
        </View>

        {/* Hebrew verse or quote */}
        <View style={[styles.quoteBox, { borderLeftColor: colors.textAccent }]}>
          <Text style={[styles.quoteText, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
            "לֹא עָלֶיךָ הַמְּלָאכָה לִגְמֹר, וְלֹא אַתָּה בֶן חוֹרִין לִבָּטֵל מִמֶּנָּה"
          </Text>
          <Text style={[styles.quoteSource, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
            Tu n'es pas obligé d'achever la tâche, mais tu n'es pas libre de t'en dispenser. (Pirke Avot 2:16)
          </Text>
        </View>

        {/* Days list */}
        <Text style={[styles.sectionTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
          Les {path.durationDays} jours du parcours
        </Text>

        {path.days.map((day) => {
          const isDone = completedDays.includes(day.dayNumber);
          return (
            <TouchableOpacity
              key={day.dayNumber}
              style={[
                styles.dayRow,
                {
                  backgroundColor: isDone ? colors.bgSection : colors.bgCard,
                  borderColor: isDone ? colors.borderAccent : colors.border,
                },
              ]}
              onPress={() => onDayPress?.(path.id, day.dayNumber)}
              activeOpacity={0.8}
            >
              {/* Day number */}
              <View
                style={[
                  styles.dayNumber,
                  {
                    backgroundColor: isDone ? colors.textAccent : colors.border,
                  },
                ]}
              >
                {isDone ? (
                  <Text style={[styles.dayNumberCheck, { fontFamily: 'Lato_700Bold' }]}>✓</Text>
                ) : (
                  <Text
                    style={[
                      styles.dayNumberText,
                      { color: colors.textMuted, fontFamily: 'Lato_700Bold' },
                    ]}
                  >
                    {day.dayNumber}
                  </Text>
                )}
              </View>

              {/* Day info */}
              <View style={styles.dayInfo}>
                <Text
                  style={[
                    styles.dayTitle,
                    {
                      color: isDone ? colors.textSecondary : colors.textPrimary,
                      fontFamily: 'Lato_700Bold',
                    },
                  ]}
                >
                  {day.title}
                </Text>
                <Text
                  style={[styles.dayDescription, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}
                  numberOfLines={1}
                >
                  {day.description}
                </Text>
              </View>

              {/* Arrow */}
              <Text style={[styles.dayArrow, { color: colors.textMuted }]}>›</Text>
            </TouchableOpacity>
          );
        })}

        {/* CTA */}
        {!isStarted && (
          <TouchableOpacity
            style={[styles.startBtn, { backgroundColor: colors.textAccent }]}
            onPress={() => onStartPath?.(path.id)}
            activeOpacity={0.8}
          >
            <Text style={[styles.startBtnText, { fontFamily: 'Lato_700Bold' }]}>
              Commencer ce parcours
            </Text>
          </TouchableOpacity>
        )}

        {isStarted && completionPct === 100 && (
          <View style={[styles.completedBanner, { backgroundColor: colors.bgSection, borderColor: colors.borderAccent }]}>
            <Text style={styles.completedBannerIcon}>✨</Text>
            <Text style={[styles.completedBannerText, { color: colors.textAccent, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
              Parcours accompli — Kol HaKavod!
            </Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  closeBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    fontSize: 18,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  pathIcon: {
    fontSize: 28,
  },
  premiumBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  premiumBadgeText: {
    fontSize: 9,
    color: '#fff',
    letterSpacing: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  pathInfo: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 16,
    gap: 8,
  },
  pathTitle: {
    fontSize: 20,
    letterSpacing: 0.3,
  },
  pathSubtitle: {
    fontSize: 13,
    letterSpacing: 0.3,
  },
  pathDescription: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 4,
  },
  pathMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  metaChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  metaChipText: {
    fontSize: 11,
    letterSpacing: 0.3,
  },
  progressContainer: {
    marginTop: 8,
    gap: 6,
  },
  progressTrack: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
  },
  progressLabel: {
    fontSize: 10,
    textAlign: 'right',
  },
  quoteBox: {
    borderLeftWidth: 3,
    paddingLeft: 14,
    marginBottom: 20,
    gap: 6,
  },
  quoteText: {
    fontSize: 13,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  quoteSource: {
    fontSize: 11,
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: 16,
    letterSpacing: 0.3,
    marginBottom: 12,
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
    marginBottom: 8,
    gap: 12,
  },
  dayNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumberText: {
    fontSize: 12,
  },
  dayNumberCheck: {
    fontSize: 14,
    color: '#fff',
  },
  dayInfo: {
    flex: 1,
    gap: 2,
  },
  dayTitle: {
    fontSize: 13,
  },
  dayDescription: {
    fontSize: 11,
  },
  dayArrow: {
    fontSize: 20,
  },
  startBtn: {
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 16,
  },
  startBtnText: {
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0.5,
  },
  completedBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
    gap: 10,
  },
  completedBannerIcon: {
    fontSize: 22,
  },
  completedBannerText: {
    fontSize: 15,
    letterSpacing: 0.3,
  },
});
