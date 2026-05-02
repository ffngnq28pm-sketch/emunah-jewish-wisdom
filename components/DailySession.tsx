import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { DailySessionData, SessionStep } from '@/data/sessions';

// ─── Step icons ──────────────────────────────────────────────────────────────
const STEP_ICONS: Record<SessionStep['type'], string> = {
  intro: '✡️',
  reading: '📖',
  practice: '🕎',
  reflection: '💭',
  closing: '✨',
};

const STEP_LABELS: Record<SessionStep['type'], string> = {
  intro: 'Introduction',
  reading: 'Lecture',
  practice: 'Pratique',
  reflection: 'Méditation',
  closing: 'Clôture',
};

// ─── Props ────────────────────────────────────────────────────────────────────
interface DailySessionProps {
  session: DailySessionData;
  onComplete?: (sessionId: string) => void;
  onClose?: () => void;
}

// ─── Timer helper ─────────────────────────────────────────────────────────────
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function DailySession({ session, onComplete, onClose }: DailySessionProps) {
  const { colors } = useTheme();
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [completed, setCompleted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressAnim = useRef(new Animated.Value(0)).current;

  const currentStep = session.steps[currentStepIdx];
  const totalSteps = session.steps.length;
  const isLastStep = currentStepIdx === totalSteps - 1;

  // Init timer when step changes
  useEffect(() => {
    setTimeLeft(currentStep.durationSec);
    setIsRunning(false);
    progressAnim.setValue(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [currentStepIdx, currentStep.durationSec]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startTimer = useCallback(() => {
    setIsRunning(true);
    const duration = currentStep.durationSec;

    Animated.timing(progressAnim, {
      toValue: 1,
      duration: timeLeft * 1000,
      useNativeDriver: false,
    }).start();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [currentStep.durationSec, timeLeft, progressAnim]);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
    progressAnim.stopAnimation();
    if (timerRef.current) clearInterval(timerRef.current);
  }, [progressAnim]);

  const goNextStep = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isLastStep) {
      setCompleted(true);
      onComplete?.(session.id);
    } else {
      setCurrentStepIdx((prev) => prev + 1);
    }
  }, [isLastStep, onComplete, session.id]);

  const goPrevStep = useCallback(() => {
    if (currentStepIdx > 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      setCurrentStepIdx((prev) => prev - 1);
    }
  }, [currentStepIdx]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  // ── Completed screen ─────────────────────────────────────────────────────────
  if (completed) {
    return (
      <View style={[styles.container, { backgroundColor: colors.bg }]}>
        <View style={styles.completedContainer}>
          <Text style={styles.completedIcon}>✨</Text>
          <Text style={[styles.completedTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
            Session accomplie
          </Text>
          <Text style={[styles.completedSubtitle, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
            {session.title}
          </Text>
          <Text style={[styles.completedBlessing, { color: colors.textAccent, fontFamily: 'Lato_400Regular' }]}>
            יְהִי רָצוֹן — Que cela soit agréé
          </Text>
          <TouchableOpacity
            style={[styles.completedBtn, { backgroundColor: colors.textAccent }]}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={[styles.completedBtnText, { fontFamily: 'Lato_700Bold' }]}>
              Terminer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
          <Text style={[styles.sessionTitle, { color: colors.textPrimary, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
            {session.title}
          </Text>
          <Text style={[styles.sessionTheme, { color: colors.textAccent, fontFamily: 'Lato_400Regular' }]}>
            {session.theme} · {session.durationMin} min
          </Text>
        </View>
        <View style={styles.stepCounter}>
          <Text style={[styles.stepCounterText, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
            {currentStepIdx + 1}/{totalSteps}
          </Text>
        </View>
      </View>

      {/* Step dots */}
      <View style={styles.dotsRow}>
        {session.steps.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i <= currentStepIdx ? colors.textAccent : colors.border,
                width: i === currentStepIdx ? 20 : 6,
              },
            ]}
          />
        ))}
      </View>

      {/* Timer progress bar */}
      <View style={[styles.timerTrack, { backgroundColor: colors.border }]}>
        <Animated.View
          style={[
            styles.timerFill,
            { backgroundColor: colors.textAccent, width: progressWidth as any },
          ]}
        />
      </View>

      {/* Step content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentInner}
        showsVerticalScrollIndicator={false}
      >
        {/* Step header */}
        <View style={[styles.stepHeader, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
          <Text style={styles.stepIcon}>{STEP_ICONS[currentStep.type]}</Text>
          <View style={styles.stepHeaderText}>
            <Text style={[styles.stepType, { color: colors.textAccent, fontFamily: 'Lato_700Bold' }]}>
              {STEP_LABELS[currentStep.type]}
            </Text>
            <Text style={[styles.stepDuration, { color: colors.textMuted, fontFamily: 'Lato_400Regular' }]}>
              {formatTime(currentStep.durationSec)}
            </Text>
          </View>
        </View>

        {/* Instruction */}
        {currentStep.instruction && (
          <View style={[styles.instructionBox, { backgroundColor: colors.bgInput, borderColor: colors.borderAccent }]}>
            <Text style={[styles.instructionText, { color: colors.textSecondary, fontFamily: 'Lato_400Regular' }]}>
              {currentStep.instruction}
            </Text>
          </View>
        )}

        {/* Main text */}
        <Text style={[styles.stepText, { color: colors.textPrimary, fontFamily: 'Lato_400Regular' }]}>
          {currentStep.text}
        </Text>
      </ScrollView>

      {/* Timer display */}
      <View style={styles.timerDisplay}>
        <Text style={[styles.timerText, { color: colors.textAccent, fontFamily: 'FrankRuhlLibre_700Bold' }]}>
          {formatTime(timeLeft)}
        </Text>
      </View>

      {/* Controls */}
      <View style={[styles.controls, { borderTopColor: colors.border }]}>
        <TouchableOpacity
          onPress={goPrevStep}
          disabled={currentStepIdx === 0}
          style={[
            styles.navBtn,
            {
              borderColor: currentStepIdx === 0 ? colors.border : colors.borderAccent,
              opacity: currentStepIdx === 0 ? 0.3 : 1,
            },
          ]}
          activeOpacity={0.7}
        >
          <Text style={[styles.navBtnText, { color: colors.textAccent, fontFamily: 'Lato_700Bold' }]}>
            ←
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={isRunning ? pauseTimer : startTimer}
          style={[styles.playBtn, { backgroundColor: colors.textAccent }]}
          activeOpacity={0.8}
        >
          <Text style={[styles.playBtnText, { fontFamily: 'Lato_700Bold' }]}>
            {isRunning ? '⏸' : '▶'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goNextStep}
          style={[styles.navBtn, { borderColor: colors.borderAccent }]}
          activeOpacity={0.7}
        >
          <Text style={[styles.navBtnText, { color: colors.textAccent, fontFamily: 'Lato_700Bold' }]}>
            {isLastStep ? '✓' : '→'}
          </Text>
        </TouchableOpacity>
      </View>
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
    gap: 8,
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
  sessionTitle: {
    fontSize: 16,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  sessionTheme: {
    fontSize: 11,
    marginTop: 2,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  stepCounter: {
    width: 32,
    alignItems: 'center',
  },
  stepCounterText: {
    fontSize: 11,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 10,
  },
  dot: {
    height: 5,
    borderRadius: 3,
  },
  timerTrack: {
    height: 3,
    marginHorizontal: 16,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 8,
  },
  timerFill: {
    height: 3,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentInner: {
    paddingTop: 8,
    paddingBottom: 24,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    gap: 12,
  },
  stepIcon: {
    fontSize: 28,
  },
  stepHeaderText: {
    flex: 1,
  },
  stepType: {
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  stepDuration: {
    fontSize: 11,
    marginTop: 2,
  },
  instructionBox: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
  },
  instructionText: {
    fontSize: 13,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  stepText: {
    fontSize: 15,
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  timerDisplay: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  timerText: {
    fontSize: 32,
    letterSpacing: 2,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingVertical: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    paddingHorizontal: 20,
  },
  navBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnText: {
    fontSize: 18,
  },
  playBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtnText: {
    fontSize: 22,
    color: '#fff',
  },
  // Completed screen
  completedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 16,
  },
  completedIcon: {
    fontSize: 56,
  },
  completedTitle: {
    fontSize: 24,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  completedSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  completedBlessing: {
    fontSize: 14,
    letterSpacing: 0.5,
    marginTop: 8,
    textAlign: 'center',
  },
  completedBtn: {
    marginTop: 16,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 16,
  },
  completedBtnText: {
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0.5,
  },
});
