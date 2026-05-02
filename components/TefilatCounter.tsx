import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Vibration,
  Platform,
} from 'react-native';
import { RotateCcw } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useTefilat } from '@/hooks/useTefilat';

const MILESTONE_LABELS: Record<number, string> = {
  18:  '✡ Amidah — 18 bénédictions accomplies',
  54:  '✡ Chai × 3 — vie, vie, vie',
  150: '✡ Tehillim — 150 psaumes du roi David',
};

export function TefilatCounter() {
  const { colors } = useTheme();
  const {
    count, milestone, prayerLabel, nextMilestone, progress, pulse,
    increment, reset, dismissMilestone,
  } = useTefilat();

  const isMilestone = [18, 54, 150].includes(count);

  return (
    <View style={styles.wrapper}>
      {/* Prayer label */}
      <Text style={[styles.prayerText, { color: colors.textMuted }]}>
        {prayerLabel}
      </Text>

      {/* Progress + tap button */}
      <View style={styles.tapArea}>
        <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${Math.min(progress, 1) * 100}%` as any,
                backgroundColor: isMilestone ? '#C9A84C' : colors.textAccent,
              },
            ]}
          />
        </View>

        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <TouchableOpacity
            style={[
              styles.tapBtn,
              {
                backgroundColor: isMilestone ? '#C9A84C18' : colors.bgSection,
                borderColor: isMilestone ? '#C9A84C' : colors.borderAccent,
              },
            ]}
            onPress={() => {
              if (Platform.OS !== 'web') Vibration.vibrate(isMilestone ? [0, 30, 60, 30] : 20);
              increment();
            }}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.countText,
                {
                  color: isMilestone ? '#C9A84C' : colors.textPrimary,
                  fontFamily: isMilestone ? 'FrankRuhlLibre_700Bold' : 'Lato_700Bold',
                },
              ]}
            >
              {count}
            </Text>
            <Text style={[styles.milestoneText, { color: colors.textMuted }]}>
              /{nextMilestone}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity style={styles.resetBtn} onPress={reset} activeOpacity={0.7}>
          <RotateCcw size={14} color={colors.textMuted} />
        </TouchableOpacity>
      </View>

      {milestone !== null ? (
        <TouchableOpacity onPress={dismissMilestone} activeOpacity={0.8}>
          <Text style={styles.milestoneLabel}>
            {MILESTONE_LABELS[milestone] ?? `✡ ${milestone} téfilot`}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 12,
    gap: 8,
  },
  prayerText: {
    fontFamily: 'FrankRuhlLibre_400Regular',
    fontSize: 13,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  tapArea: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    gap: 8,
  },
  progressTrack: {
    width: '60%',
    height: 3,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: 3,
    borderRadius: 2,
  },
  tapBtn: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 0,
  },
  countText: {
    fontSize: 32,
    letterSpacing: -1,
  },
  milestoneText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    alignSelf: 'flex-end',
    marginBottom: 6,
    marginLeft: 1,
  },
  resetBtn: {
    padding: 8,
  },
  milestoneLabel: {
    fontFamily: 'FrankRuhlLibre_400Regular',
    fontSize: 13,
    color: '#C9A84C',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
