import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { X, ChevronLeft, BookOpen } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/ThemeContext';
import { JEWISH_SAGES, JewishSage } from '@/data/sages';

export default function SagesScreen() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState<JewishSage | null>(null);

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} activeOpacity={0.7}>
            <ChevronLeft size={22} color={colors.textAccent} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={[styles.headerHebrew, { color: colors.textAccent }]}>
              חַכְמֵי יִשְׂרָאֵל
            </Text>
            <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
              Maîtres du Judaïsme
            </Text>
            <Text style={[styles.headerSub, { color: colors.textMuted }]}>
              8 sages de la tradition juive
            </Text>
          </View>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
          {JEWISH_SAGES.map((sage) => (
            <TouchableOpacity
              key={sage.id}
              style={[styles.sageCard, { backgroundColor: colors.bgSection, borderColor: colors.border }]}
              onPress={() => setSelected(sage)}
              activeOpacity={0.85}
            >
              <View style={[styles.colorBar, { backgroundColor: sage.color }]} />
              <Image
                source={{ uri: sage.portrait }}
                style={styles.portrait}
                resizeMode="cover"
              />
              <LinearGradient
                colors={['transparent', 'rgba(8,10,18,0.7)']}
                style={styles.portraitGradient}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
              <View style={styles.sageInfo}>
                <Text style={[styles.sageName, { color: colors.textPrimary }]}>{sage.name}</Text>
                <Text style={[styles.sageHebrew, { color: sage.color }]}>
                  {sage.hebrewName.split(' — ')[0]}
                </Text>
                <Text style={[styles.sageYears, { color: colors.textMuted }]}>
                  {sage.years} · {sage.origin}
                </Text>
                <Text style={[styles.sageField, { color: colors.textMuted }]} numberOfLines={1}>
                  {sage.field}
                </Text>
              </View>
              <View style={styles.arrowWrap}>
                <BookOpen size={16} color={sage.color} />
              </View>
            </TouchableOpacity>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>

      {/* Detail modal */}
      <Modal
        visible={!!selected}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setSelected(null)}
      >
        {selected && (
          <View style={[styles.detailRoot, { backgroundColor: colors.bg }]}>
            <StatusBar style="light" />

            {/* Hero */}
            <View style={styles.heroWrap}>
              <Image
                source={{ uri: selected.portrait }}
                style={styles.heroImage}
                resizeMode="cover"
              />
              <LinearGradient
                colors={[
                  'transparent',
                  `${selected.color}30`,
                  colors.bg,
                ]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0.3 }}
                end={{ x: 0, y: 1 }}
              />
              <SafeAreaView style={styles.heroTop}>
                <TouchableOpacity
                  onPress={() => setSelected(null)}
                  style={[styles.detailClose, { backgroundColor: 'rgba(0,0,0,0.4)' }]}
                  activeOpacity={0.8}
                >
                  <X size={18} color="#fff" />
                </TouchableOpacity>
              </SafeAreaView>
            </View>

            <ScrollView
              contentContainerStyle={styles.detailScroll}
              showsVerticalScrollIndicator={false}
            >
              {/* Identity */}
              <View style={styles.detailIdentity}>
                <Text style={styles.detailOrnament}>✦</Text>
                <Text
                  style={[
                    styles.detailName,
                    { color: colors.textPrimary },
                  ]}
                >
                  {selected.name}
                </Text>
                <Text
                  style={[
                    styles.detailHebrew,
                    { color: selected.color, writingDirection: 'rtl' },
                  ]}
                >
                  {selected.hebrewName}
                </Text>
                <Text style={[styles.detailMeta, { color: colors.textMuted }]}>
                  {selected.years} · {selected.origin}
                </Text>
                <View
                  style={[
                    styles.detailFieldBadge,
                    {
                      backgroundColor: selected.color + '18',
                      borderColor: selected.color + '40',
                    },
                  ]}
                >
                  <Text style={[styles.detailFieldText, { color: selected.color }]}>
                    {selected.field}
                  </Text>
                </View>
              </View>

              {/* Description */}
              <View style={styles.detailBlock}>
                <Text style={[styles.detailBlockTitle, { color: selected.color }]}>
                  Biographie
                </Text>
                <Text style={[styles.detailBlockText, { color: colors.textSecondary }]}>
                  {selected.description}
                </Text>
              </View>

              {/* Famous Quote */}
              <View
                style={[
                  styles.quoteBlock,
                  {
                    backgroundColor: selected.color + '0C',
                    borderLeftColor: selected.color,
                  },
                ]}
              >
                <Text style={[styles.quoteText, { color: colors.textPrimary }]}>
                  "{selected.famousQuote}"
                </Text>
              </View>

              {/* Legacy */}
              <View style={styles.detailBlock}>
                <Text style={[styles.detailBlockTitle, { color: selected.color }]}>Héritage</Text>
                <Text style={[styles.detailBlockText, { color: colors.textSecondary }]}>
                  {selected.legacy}
                </Text>
              </View>

              {/* Works */}
              <View style={styles.detailBlock}>
                <Text style={[styles.detailBlockTitle, { color: selected.color }]}>
                  Œuvres principales
                </Text>
                {selected.works.map((work, i) => (
                  <View key={i} style={styles.workRow}>
                    <View style={[styles.workDot, { backgroundColor: selected.color }]} />
                    <Text style={[styles.workText, { color: colors.textSecondary }]}>{work}</Text>
                  </View>
                ))}
              </View>

              <View style={{ height: 60 }} />
            </ScrollView>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    gap: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  headerHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 14,
    writingDirection: 'rtl',
    letterSpacing: 1,
  },
  headerTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 20,
  },
  headerSub: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
  },
  list: {
    paddingHorizontal: 16,
    gap: 12,
  },
  sageCard: {
    flexDirection: 'row',
    borderRadius: 18,
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
    height: 88,
  },
  colorBar: { width: 4, alignSelf: 'stretch' },
  portrait: {
    width: 72,
    height: '100%',
  },
  portraitGradient: {
    position: 'absolute',
    left: 4,
    width: 72,
    top: 0,
    bottom: 0,
  },
  sageInfo: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 2,
  },
  sageName: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 15,
    lineHeight: 20,
  },
  sageHebrew: {
    fontFamily: 'FrankRuhlLibre_400Regular',
    fontSize: 11,
    writingDirection: 'rtl',
  },
  sageYears: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    marginTop: 1,
  },
  sageField: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
  },
  arrowWrap: {
    paddingRight: 16,
  },
  // Detail
  detailRoot: { flex: 1 },
  heroWrap: {
    height: 260,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  detailClose: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  detailScroll: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  detailIdentity: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 6,
  },
  detailOrnament: {
    fontSize: 16,
    color: '#C9A84C',
    marginBottom: 4,
  },
  detailName: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 26,
    textAlign: 'center',
  },
  detailHebrew: {
    fontFamily: 'FrankRuhlLibre_400Regular',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
  detailMeta: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  detailFieldBadge: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 4,
  },
  detailFieldText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    textAlign: 'center',
  },
  detailBlock: {
    marginBottom: 24,
    gap: 8,
  },
  detailBlockTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  detailBlockText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    lineHeight: 22,
  },
  quoteBlock: {
    borderLeftWidth: 3,
    paddingLeft: 16,
    paddingVertical: 12,
    paddingRight: 12,
    borderRadius: 4,
    marginBottom: 24,
  },
  quoteText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  workRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  workDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
    flexShrink: 0,
  },
  workText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    lineHeight: 20,
    flex: 1,
  },
});
