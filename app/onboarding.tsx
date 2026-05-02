import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useUserProfile, FOCUS_THEMES, FOCUS_THEME_ICONS, FocusTheme } from '@/context/UserProfileContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const THEME_CONFIG: Record<FocusTheme, { desc: string; color: string }> = {
  Emunah: { desc: 'Approfondir la foi et la confiance en Dieu',     color: '#C9A84C' },
  Chesed: { desc: 'Cultiver la bonté et la générosité envers tous', color: '#4A7A5A' },
  Ahavah: { desc: 'Ouvrir le cœur à l\'amour divin et humain',      color: '#A5664A' },
  Torah:  { desc: 'Se consacrer à l\'étude de la Torah',            color: '#6B5FA5' },
  Shalom: { desc: 'Chercher la paix intérieure et entre les hommes', color: '#4A7A8A' },
  Simcha: { desc: 'Servir Dieu dans la joie et l\'allégresse',      color: '#8A6B20' },
};

export default function OnboardingScreen() {
  const { update } = useUserProfile();
  const [step, setStep] = useState<'name' | 'theme'>('name');
  const [name, setName] = useState('');
  const [chosen, setChosen] = useState<FocusTheme | null>(null);

  function handleNameNext() {
    if (step === 'name') setStep('theme');
  }

  function handleFinish() {
    if (!chosen) return;
    update({
      firstName: name.trim(),
      focusTheme: chosen,
      focusStartedAt: Date.now(),
      onboardingDone: true,
    });
    router.replace('/(tabs)');
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <LinearGradient
        colors={['#080A12', '#0E1830', '#080A12']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Star of David logo */}
      <View style={styles.topOrnament}>
        <Text style={styles.starLogo}>✡</Text>
        <Text style={styles.logoTitle}>Emunah</Text>
        <Text style={styles.logoHebrew}>אֱמוּנָה · FOI</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {step === 'name' ? (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Shalom</Text>
            <Text style={styles.stepSubtitle}>
              Bienvenue sur votre chemin de sagesse juive.{'\n'}Comment puis-je vous appeler ?
            </Text>

            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Votre prénom..."
                placeholderTextColor="rgba(201,168,76,0.35)"
                value={name}
                onChangeText={setName}
                autoFocus
                returnKeyType="next"
                onSubmitEditing={handleNameNext}
                selectionColor="#C9A84C"
              />
            </View>

            <TouchableOpacity
              style={[styles.nextBtn, !name.trim() && styles.nextBtnDisabled]}
              onPress={handleNameNext}
              disabled={!name.trim()}
              activeOpacity={0.85}
            >
              <Text style={styles.nextBtnText}>Continuer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setStep('theme')}
              style={styles.skipBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.skipText}>Passer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>
              {name.trim() ? `Shalom, ${name.trim()}` : 'Votre kavanah'}
            </Text>
            <Text style={styles.stepSubtitle}>
              Choisissez un thème pour votre intention spirituelle.{'\n'}
              Vos sagesses quotidiennes y seront adaptées.
            </Text>

            <View style={styles.themesGrid}>
              {FOCUS_THEMES.map((theme) => {
                const cfg = THEME_CONFIG[theme];
                const icon = FOCUS_THEME_ICONS[theme];
                const isActive = chosen === theme;
                return (
                  <TouchableOpacity
                    key={theme}
                    style={[
                      styles.themeCard,
                      isActive && {
                        borderColor: cfg.color,
                        backgroundColor: cfg.color + '18',
                      },
                    ]}
                    onPress={() => setChosen(theme)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.themeIcon}>{icon}</Text>
                    <Text
                      style={[styles.themeName, isActive && { color: '#F2EAD0' }]}
                    >
                      {theme}
                    </Text>
                    <Text style={styles.themeDesc}>{cfg.desc}</Text>
                    {isActive && (
                      <View
                        style={[styles.themeActiveBar, { backgroundColor: cfg.color }]}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity
              style={[styles.nextBtn, !chosen && styles.nextBtnDisabled]}
              onPress={handleFinish}
              disabled={!chosen}
              activeOpacity={0.85}
            >
              <Text style={styles.nextBtnText}>Commencer mon chemin</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <View style={styles.dots}>
        <View style={[styles.dot, step === 'name' && styles.dotActive]} />
        <View style={[styles.dot, step === 'theme' && styles.dotActive]} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#080A12' },
  topOrnament: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 8,
  },
  starLogo: {
    fontSize: 48,
    color: '#C9A84C',
    textShadowColor: 'rgba(201,168,76,0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  logoTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 28,
    color: '#C9A84C',
    letterSpacing: 4,
    marginTop: 4,
  },
  logoHebrew: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: 'rgba(201,168,76,0.5)',
    letterSpacing: 4,
    marginTop: 4,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  stepContent: {
    paddingTop: 32,
    alignItems: 'center',
  },
  stepTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 28,
    color: '#F2EAD0',
    textAlign: 'center',
    marginBottom: 12,
  },
  stepSubtitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: '#8A8FA8',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 36,
  },
  inputWrap: {
    width: '100%',
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(201,168,76,0.3)',
    backgroundColor: 'rgba(201,168,76,0.06)',
    overflow: 'hidden',
  },
  input: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    color: '#F2EAD0',
    paddingHorizontal: 20,
    paddingVertical: 16,
    textAlign: 'center',
  },
  nextBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#C9A84C',
    alignItems: 'center',
    marginBottom: 16,
  },
  nextBtnDisabled: { backgroundColor: 'rgba(201,168,76,0.25)' },
  nextBtnText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    color: '#080A12',
  },
  skipBtn: { padding: 12 },
  skipText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    color: '#4A5068',
  },
  themesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    width: '100%',
    marginBottom: 32,
  },
  themeCard: {
    width: (SCREEN_WIDTH - 60) / 2,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    alignItems: 'center',
    gap: 6,
    overflow: 'hidden',
  },
  themeIcon: { fontSize: 26 },
  themeName: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 14,
    color: '#8A8FA8',
  },
  themeDesc: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    color: '#4A5068',
    textAlign: 'center',
    lineHeight: 14,
  },
  themeActiveBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  dotActive: {
    width: 24,
    backgroundColor: '#C9A84C',
  },
});
