import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { X, Star, Check, RotateCcw } from 'lucide-react-native';
import { usePremium, PremiumPlan } from '@/hooks/usePremium';

const { width } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
}

const FEATURES = [
  'Accès illimité à toute la bibliothèque de sagesses',
  'Noms divins de Dieu — collection des 25 Noms saints',
  'Maîtres du Judaïsme — série encyclopédique',
  'Méditations du Omer et des Yamim Noraïm',
  'Section Kabbalah — Zohar, Tanya, Ein Sof',
  'Sessions guidées · Parcours d\'étude thématiques',
];

export function PremiumPaywall({ visible, onClose }: Props) {
  const { purchasePlan, restorePurchases, isLoading } = usePremium();
  const [plan, setPlan] = useState<PremiumPlan>('lifetime');
  const [restoreMsg, setRestoreMsg] = useState('');
  const shimmer = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(60)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideUp, { toValue: 0, duration: 340, useNativeDriver: true }),
        Animated.timing(fadeIn, { toValue: 1, duration: 280, useNativeDriver: true }),
      ]).start();
      Animated.loop(
        Animated.timing(shimmer, { toValue: 1, duration: 2400, useNativeDriver: true })
      ).start();
    } else {
      slideUp.setValue(60);
      fadeIn.setValue(0);
    }
  }, [visible]);

  const shimmerX = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 0.5, width * 1.5],
  });

  async function handlePurchase() {
    const result = await purchasePlan(plan);
    if (result.success) onClose();
  }

  async function handleRestore() {
    const ok = await restorePurchases();
    setRestoreMsg(ok ? 'Accès restauré ✓' : 'Aucun abonnement retrouvé');
    if (ok) onClose();
    setTimeout(() => setRestoreMsg(''), 3000);
  }

  return (
    <Modal visible={visible} transparent animationType="none" statusBarTranslucent>
      <Animated.View style={[styles.overlay, { opacity: fadeIn }]}>
        <Animated.View style={[styles.sheet, { transform: [{ translateY: slideUp }] }]}>
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#0E1830', '#080A12']}
              style={StyleSheet.absoluteFillObject}
            />
            <Animated.View style={[styles.shimmer, { transform: [{ translateX: shimmerX }] }]} />
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <X size={18} color="#8A8FA8" />
            </TouchableOpacity>

            <View style={styles.badge}>
              <Star size={11} color="#C9A84C" fill="#C9A84C" />
              <Text style={styles.badgeText}>EMUNAH PREMIUM</Text>
            </View>

            <Text style={styles.headline}>{'אֱמוּנָה\nIlluminez votre vie\nde sagesse éternelle'}</Text>
            <View style={styles.trialBadge}>
              <Text style={styles.trialText}>✦ Accès immédiat · Toutes mises à jour incluses</Text>
            </View>
          </View>

          {/* Features */}
          <View style={styles.features}>
            {FEATURES.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <View style={styles.checkCircle}>
                  <Check size={10} color="#C9A84C" strokeWidth={3} />
                </View>
                <Text style={styles.featureText}>{f}</Text>
              </View>
            ))}
          </View>

          {/* Plans */}
          <View style={styles.plans}>
            <TouchableOpacity
              style={[styles.plan, plan === 'lifetime' && styles.planActive]}
              onPress={() => setPlan('lifetime')}
              activeOpacity={0.8}
            >
              <View style={styles.bestValueBadge}>
                <Text style={styles.bestValueText}>✡ MEILLEURE OFFRE · ≈ 8 MOIS D'ABONNEMENT</Text>
              </View>
              <View style={[styles.planLeft, { marginTop: 8 }]}>
                <View>
                  <Text style={styles.planName}>À vie</Text>
                  <Text style={styles.planPrice}>Paiement unique · accès permanent</Text>
                </View>
                <Text style={[styles.planName, { fontSize: 20 }]}>39,99€</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.plan, plan === 'monthly' && styles.planActive]}
              onPress={() => setPlan('monthly')}
              activeOpacity={0.8}
            >
              <Text style={styles.planName}>Mensuel</Text>
              <Text style={styles.planPrice}>4,99 € / mois · résiliable à tout moment</Text>
            </TouchableOpacity>
          </View>

          {/* CTA */}
          <TouchableOpacity
            style={styles.cta}
            onPress={handlePurchase}
            activeOpacity={0.88}
            disabled={isLoading}
          >
            <LinearGradient
              colors={['#D4B85A', '#C9A84C', '#B09040']}
              style={styles.ctaGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.ctaText}>
                {isLoading ? 'Traitement…' : plan === 'lifetime' ? 'Débloquer tout à vie — 39,99€' : 'Rejoindre Emunah Premium — 4,99€ / mois'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.restore} onPress={handleRestore} activeOpacity={0.7}>
            <RotateCcw size={12} color="#4A4E68" />
            <Text style={styles.restoreText}>
              {restoreMsg || 'Restaurer mon accès'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.legal}>
            Abonnement auto-renouvelable. Annulable à tout moment depuis votre compte App Store ou Google Play.
          </Text>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#0E1120',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  shimmer: {
    position: 'absolute',
    width: width * 0.4,
    height: '200%',
    backgroundColor: 'rgba(201,168,76,0.06)',
    transform: [{ skewX: '-25deg' }],
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(201,168,76,0.15)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 16,
  },
  badgeText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    color: '#C9A84C',
    letterSpacing: 2,
  },
  headline: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 22,
    color: '#F2EAD0',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  trialBadge: {
    backgroundColor: 'rgba(201,168,76,0.12)',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  trialText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: '#C9A84C',
    letterSpacing: 0.3,
  },
  features: {
    paddingHorizontal: 24,
    gap: 10,
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(201,168,76,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    color: '#C8B888',
    flex: 1,
  },
  plans: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  plan: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(201,168,76,0.2)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    gap: 4,
  },
  planActive: {
    borderColor: '#C9A84C',
    backgroundColor: 'rgba(201,168,76,0.10)',
  },
  planLeft: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  planName: { fontFamily: 'Lato_700Bold', fontSize: 14, color: '#F2EAD0' },
  planPrice: { fontFamily: 'Lato_400Regular', fontSize: 12, color: '#C8B488' },
  bestValueBadge: {
    backgroundColor: '#C9A84C',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  bestValueText: { fontFamily: 'Lato_700Bold', fontSize: 10, color: '#080A12' },
  cta: {
    marginHorizontal: 24,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
  },
  ctaGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    color: '#080A12',
  },
  restore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
    paddingVertical: 8,
    marginBottom: 8,
  },
  restoreText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: '#4A4E68',
  },
  legal: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    color: '#2A2E48',
    textAlign: 'center',
    paddingHorizontal: 24,
    lineHeight: 15,
  },
});
