import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { X, Info, Image as ImageIcon } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import { useDailyHistory } from '@/hooks/useDailyHistory';
import { isWallpaperAvailable } from '@/services/WallpaperService';

interface Props {
  onExportPress?: () => void;
}

export function DailyHistoryWidget({ onExportPress }: Props) {
  const { colors } = useTheme();
  const event = useDailyHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const accent = '#C9A84C';
  const wallpaperOk = isWallpaperAvailable();

  return (
    <>
      <View style={[styles.card, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
        <View style={styles.header}>
          <Text style={[styles.chip, { color: accent, borderColor: 'rgba(201,168,76,0.3)', backgroundColor: 'rgba(201,168,76,0.07)' }]}>
            🏛️ Ce jour dans l'histoire juive
          </Text>
          <Text style={[styles.period, { color: colors.textMuted }]}>{event.period}</Text>
        </View>

        <Text style={[styles.title, { color: colors.textPrimary }]}>{event.title}</Text>
        <Text style={[styles.yearAgo, { color: accent }]}>{event.yearAgo}</Text>
        <Text style={[styles.desc, { color: colors.textSecondary }]} numberOfLines={2}>
          {event.description}
        </Text>
        {event.figure && (
          <Text style={[styles.figure, { color: colors.textMuted }]}>✦ {event.figure}</Text>
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, { borderColor: colors.border }]}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.75}
          >
            <Info size={14} color={accent} />
            <Text style={[styles.btnText, { color: colors.textSecondary }]}>En savoir plus</Text>
          </TouchableOpacity>

          {wallpaperOk && onExportPress && (
            <TouchableOpacity
              style={[styles.btn, { borderColor: 'rgba(201,168,76,0.4)', backgroundColor: 'rgba(201,168,76,0.07)' }]}
              onPress={onExportPress}
              activeOpacity={0.75}
            >
              <ImageIcon size={14} color={accent} />
              <Text style={[styles.btnText, { color: accent }]}>Fond d'écran</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.modal, { backgroundColor: colors.bg }]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>{event.title}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <X size={22} color={colors.textMuted} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.modalBody} showsVerticalScrollIndicator={false}>
            <Text style={[styles.modalYear, { color: accent }]}>{event.yearAgo} · {event.period}</Text>
            <Text style={[styles.modalSection, { color: colors.textMuted }]}>CONTEXTE HISTORIQUE</Text>
            <Text style={[styles.modalText, { color: colors.textSecondary }]}>{event.description}</Text>
            <View style={[styles.signifBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
              <Text style={[styles.signifLabel, { color: accent }]}>✦ Signification spirituelle</Text>
              <Text style={[styles.signifText, { color: colors.textSecondary }]}>{event.significance}</Text>
            </View>
            {event.figure && (
              <Text style={[styles.figure2, { color: colors.textMuted }]}>{event.figure}</Text>
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 16, borderWidth: 1, padding: 16, marginBottom: 12 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  chip: { fontFamily: 'Lato_700Bold', fontSize: 11, letterSpacing: 0.5, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1 },
  period: { fontFamily: 'Lato_400Regular', fontSize: 10, fontStyle: 'italic' },
  title: { fontFamily: 'FrankRuhlLibre_700Bold', fontSize: 17, marginBottom: 2 },
  yearAgo: { fontFamily: 'Lato_700Bold', fontSize: 12, marginBottom: 6 },
  desc: { fontFamily: 'Lato_400Regular', fontSize: 13, lineHeight: 20, marginBottom: 8 },
  figure: { fontFamily: 'Lato_400Regular', fontStyle: 'italic', fontSize: 12, marginBottom: 12 },
  actions: { flexDirection: 'row', gap: 10 },
  btn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 10, borderWidth: 1 },
  btnText: { fontFamily: 'Lato_700Bold', fontSize: 12 },
  modal: { flex: 1, paddingTop: 16 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16 },
  modalTitle: { fontFamily: 'FrankRuhlLibre_700Bold', fontSize: 20, flex: 1 },
  modalBody: { paddingHorizontal: 20, paddingBottom: 40 },
  modalYear: { fontFamily: 'Lato_700Bold', fontSize: 13, marginBottom: 20 },
  modalSection: { fontFamily: 'Lato_400Regular', fontSize: 10, letterSpacing: 2, marginBottom: 8, marginTop: 12 },
  modalText: { fontFamily: 'Lato_400Regular', fontSize: 14, lineHeight: 22 },
  signifBox: { borderRadius: 14, borderWidth: 1, padding: 16, marginTop: 20 },
  signifLabel: { fontFamily: 'FrankRuhlLibre_700Bold', fontSize: 13, marginBottom: 8 },
  signifText: { fontFamily: 'Lato_400Regular', fontStyle: 'italic', fontSize: 14, lineHeight: 22 },
  figure2: { fontFamily: 'Lato_400Regular', fontStyle: 'italic', fontSize: 12, marginTop: 16 },
});
