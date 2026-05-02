import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { X, Heart } from 'lucide-react-native';
import { CardThumbnail } from '@/components/CardThumbnail';
import { WisdomCard } from '@/components/WisdomCard';
import { CardActions } from '@/components/CardActions';
import { useFavorites } from '@/hooks/useFavorites';
import { usePremium } from '@/hooks/usePremium';
import { useTheme } from '@/context/ThemeContext';
import { CARDS } from '@/data/cards';
import { WisdomCard as WisdomCardType } from '@/types';

export default function FavoritesScreen() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const { isPremium } = usePremium();
  const { colors } = useTheme();
  const [selectedCard, setSelectedCard] = useState<WisdomCardType | null>(null);

  const favoriteCards = CARDS.filter((c) => favoriteIds.has(c.id));
  const left = favoriteCards.filter((_, i) => i % 2 === 0);
  const right = favoriteCards.filter((_, i) => i % 2 === 1);

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Favoris</Text>
          {favoriteCards.length > 0 && (
            <Text style={[styles.subtitle, { color: colors.textMuted }]}>
              {favoriteCards.length} sagesse{favoriteCards.length > 1 ? 's' : ''}
            </Text>
          )}
        </View>

        {favoriteCards.length === 0 ? (
          <View style={styles.empty}>
            <View
              style={[
                styles.emptyIcon,
                {
                  borderColor: 'rgba(201,168,76,0.25)',
                  backgroundColor: 'rgba(201,168,76,0.10)',
                },
              ]}
            >
              <Heart size={32} color="#C9A84C" />
            </View>
            <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>
              Aucun favori
            </Text>
            <Text style={[styles.emptyText, { color: colors.textMuted }]}>
              Touchez le cœur d'une sagesse pour la retrouver ici.
            </Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.column}>
              {left.map((card) => (
                <CardThumbnail
                  key={card.id}
                  card={card}
                  isPremium={isPremium}
                  isFavorite
                  onPress={() => setSelectedCard(card)}
                  onFavoriteToggle={() => toggleFavorite(card.id)}
                />
              ))}
            </View>
            <View style={[styles.column, styles.columnOffset]}>
              {right.map((card) => (
                <CardThumbnail
                  key={card.id}
                  card={card}
                  isPremium={isPremium}
                  isFavorite
                  onPress={() => setSelectedCard(card)}
                  onFavoriteToggle={() => toggleFavorite(card.id)}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>

      {/* Card detail modal */}
      <Modal
        visible={!!selectedCard}
        animationType="slide"
        transparent
        onRequestClose={() => setSelectedCard(null)}
      >
        {selectedCard && (
          <View style={styles.modalOverlay}>
            <View style={[styles.modalSheet, { backgroundColor: colors.bgCard }]}>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => setSelectedCard(null)}
                activeOpacity={0.8}
              >
                <X size={18} color={colors.textMuted} />
              </TouchableOpacity>
              <WisdomCard card={selectedCard} />
              <View style={{ height: 16 }} />
              <CardActions
                card={selectedCard}
                isFavorite={favoriteIds.has(selectedCard.id)}
                onFavoriteToggle={() => {
                  toggleFavorite(selectedCard.id);
                  if (favoriteIds.has(selectedCard.id)) setSelectedCard(null);
                }}
              />
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
    gap: 2,
  },
  title: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 28,
  },
  subtitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    gap: 16,
  },
  emptyIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  emptyText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 100,
    gap: 8,
    alignItems: 'flex-start',
  },
  column: { flex: 1, gap: 8 },
  columnOffset: { marginTop: 24 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingBottom: 40,
    overflow: 'hidden',
  },
  modalClose: {
    position: 'absolute',
    top: 14,
    right: 16,
    zIndex: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
