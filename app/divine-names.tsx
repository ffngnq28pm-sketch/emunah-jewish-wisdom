import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { X, ChevronLeft } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/ThemeContext';
import { DIVINE_NAMES, DivineName } from '@/data/divineNames';

export default function DivineNamesScreen() {
  const { colors } = useTheme();
  const [selected, setSelected] = useState<DivineName | null>(null);

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
              שְׁמוֹת הַקֹּדֶשׁ
            </Text>
            <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
              Noms Divins
            </Text>
            <Text style={[styles.headerSub, { color: colors.textMuted }]}>
              25 Noms saints de Dieu
            </Text>
          </View>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        >
          {DIVINE_NAMES.map((name) => (
            <TouchableOpacity
              key={name.id}
              style={[
                styles.nameCard,
                { backgroundColor: colors.bgSection, borderColor: colors.border },
              ]}
              onPress={() => setSelected(name)}
              activeOpacity={0.82}
            >
              {/* Gold accent bar */}
              <View style={styles.cardAccent} />

              <Text style={styles.nameHebrew}>{name.hebrew}</Text>
              <Text style={[styles.nameTranslit, { color: colors.textAccent }]}>
                {name.transliteration}
              </Text>
              <Text style={[styles.nameFrench, { color: colors.textSecondary }]}>
                {name.french}
              </Text>
              <Text style={[styles.nameScripture, { color: colors.textMuted }]}>
                {name.scripture}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>

      {/* Detail modal */}
      <Modal
        visible={!!selected}
        animationType="slide"
        transparent
        onRequestClose={() => setSelected(null)}
      >
        {selected && (
          <View style={styles.modalOverlay}>
            <View style={[styles.modalSheet, { backgroundColor: colors.bgCard }]}>
              <LinearGradient
                colors={['rgba(8,10,18,0.0)', 'rgba(8,10,18,0.0)']}
                style={StyleSheet.absoluteFillObject}
              />
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => setSelected(null)}
                activeOpacity={0.8}
              >
                <X size={18} color={colors.textMuted} />
              </TouchableOpacity>

              <View style={styles.modalContent}>
                <Text style={styles.modalOrnament}>✦</Text>
                <Text style={styles.modalHebrew}>{selected.hebrew}</Text>
                <Text style={[styles.modalTranslit, { color: colors.textAccent }]}>
                  {selected.transliteration}
                </Text>
                <Text style={[styles.modalFrench, { color: colors.textSecondary }]}>
                  {selected.french}
                </Text>

                <View style={[styles.modalDivider, { backgroundColor: 'rgba(201,168,76,0.3)' }]} />

                <View style={[styles.modalScriptureBadge, { borderColor: 'rgba(201,168,76,0.4)' }]}>
                  <Text style={[styles.modalScriptureText, { color: colors.textAccent }]}>
                    {selected.scripture}
                  </Text>
                </View>

                <View style={styles.modalMeditationBlock}>
                  <Text style={[styles.modalMeditationLabel, { color: colors.textMuted }]}>
                    כַּוָּנָה · MÉDITATION
                  </Text>
                  <Text style={[styles.modalMeditationText, { color: colors.textSecondary }]}>
                    {selected.meditation}
                  </Text>
                </View>
              </View>
            </View>
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
    fontSize: 16,
    writingDirection: 'rtl',
    letterSpacing: 1,
  },
  headerTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 22,
    letterSpacing: 0.5,
  },
  headerSub: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 10,
  },
  nameCard: {
    width: '46%',
    flexGrow: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#C9A84C',
    opacity: 0.5,
  },
  nameHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 20,
    color: '#F2EAD0',
    textAlign: 'center',
    writingDirection: 'rtl',
    textShadowColor: 'rgba(201,168,76,0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  nameTranslit: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  nameFrench: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 15,
  },
  nameScripture: {
    fontFamily: 'Lato_400Regular',
    fontSize: 9,
    letterSpacing: 0.3,
    textAlign: 'center',
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
    paddingBottom: 48,
  },
  modalClose: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    padding: 32,
    paddingBottom: 24,
    gap: 8,
  },
  modalOrnament: {
    fontSize: 18,
    color: '#C9A84C',
    marginBottom: 8,
  },
  modalHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 36,
    color: '#F2EAD0',
    textAlign: 'center',
    writingDirection: 'rtl',
    textShadowColor: 'rgba(201,168,76,0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
    marginBottom: 4,
  },
  modalTranslit: {
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  modalFrench: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    fontStyle: 'italic',
  },
  modalDivider: {
    width: 48,
    height: 1,
    marginVertical: 16,
  },
  modalScriptureBadge: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 16,
  },
  modalScriptureText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  modalMeditationBlock: {
    width: '100%',
    gap: 8,
  },
  modalMeditationLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
    letterSpacing: 2,
    textAlign: 'center',
  },
  modalMeditationText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
