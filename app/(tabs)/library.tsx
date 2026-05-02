import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { X, Star, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeFilterPill } from '@/components/ThemeFilterPill';
import { CardThumbnail } from '@/components/CardThumbnail';
import { WisdomCard } from '@/components/WisdomCard';
import { CardActions } from '@/components/CardActions';
import { PremiumPaywall } from '@/components/PremiumPaywall';
import { useFavorites } from '@/hooks/useFavorites';
import { usePremium, FREE_CARD_LIMIT } from '@/hooks/usePremium';
import { useTheme } from '@/context/ThemeContext';
import { CARDS, THEMES, SOURCE_TYPES } from '@/data/cards';
import { WisdomCard as WisdomCardType, Theme, SourceType } from '@/types';

type FilterMode = 'theme' | 'source';

export default function LibraryScreen() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const { isPremium, isCardLocked } = usePremium();
  const { colors } = useTheme();
  const [filterMode, setFilterMode] = useState<FilterMode>('theme');
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);
  const [activeSource, setActiveSource] = useState<SourceType | null>(null);
  const [selectedCard, setSelectedCard] = useState<WisdomCardType | null>(null);
  const [premiumVisible, setPremiumVisible] = useState(false);

  const filtered = CARDS.filter((c) => {
    if (filterMode === 'theme' && activeTheme) return c.theme === activeTheme;
    if (filterMode === 'source' && activeSource) return c.sourceType === activeSource;
    return true;
  });

  const left = filtered.filter((_, i) => i % 2 === 0);
  const right = filtered.filter((_, i) => i % 2 === 1);

  function handleCardPress(card: WisdomCardType) {
    const globalIndex = CARDS.indexOf(card);
    if (isCardLocked(globalIndex)) {
      setPremiumVisible(true);
      return;
    }
    setSelectedCard(card);
  }

  function handleDivineNamesPress() {
    if (!isPremium) { setPremiumVisible(true); return; }
    router.push('/divine-names');
  }

  function handleSagesPress() {
    if (!isPremium) { setPremiumVisible(true); return; }
    router.push('/sages' as any);
  }

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <StatusBar style={colors.statusBar} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>Bibliothèque</Text>
          <Text style={[styles.subtitle, { color: colors.textMuted }]}>
            {CARDS.length} sagesses
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Divine Names Banner */}
          <TouchableOpacity
            style={styles.namesBanner}
            onPress={handleDivineNamesPress}
            activeOpacity={0.88}
          >
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['rgba(8,10,18,0.25)', 'rgba(8,10,18,0.82)']}
              style={StyleSheet.absoluteFillObject}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            <View style={styles.bannerContent}>
              <View style={styles.bannerLeft}>
                <View style={styles.premiumBadge}>
                  <Star size={11} color="#C9A84C" fill="#C9A84C" />
                  <Text style={styles.premiumBadgeText}>PREMIUM</Text>
                </View>
                <Text style={styles.bannerHebrew}>שְׁמוֹת הַקֹּדֶשׁ</Text>
                <Text style={styles.bannerTitle}>Noms Divins</Text>
                <Text style={styles.bannerSub}>25 Noms saints de Dieu</Text>
              </View>
              <ChevronRight size={20} color="rgba(255,255,255,0.5)" />
            </View>
          </TouchableOpacity>

          {/* Sages Banner */}
          <TouchableOpacity
            style={styles.sagesBanner}
            onPress={handleSagesPress}
            activeOpacity={0.88}
          >
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['rgba(8,10,18,0.25)', 'rgba(8,10,18,0.85)']}
              style={StyleSheet.absoluteFillObject}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            <View style={styles.bannerContent}>
              <View style={styles.bannerLeft}>
                <View style={styles.premiumBadge}>
                  <Star size={11} color="#C9A84C" fill="#C9A84C" />
                  <Text style={styles.premiumBadgeText}>PREMIUM</Text>
                </View>
                <Text style={styles.bannerHebrew}>חַכְמֵי יִשְׂרָאֵל</Text>
                <Text style={styles.bannerTitle}>Maîtres du Judaïsme</Text>
                <Text style={styles.bannerSub}>8 sages de la tradition juive</Text>
              </View>
              <ChevronRight size={20} color="rgba(255,255,255,0.5)" />
            </View>
          </TouchableOpacity>

          {/* Filter mode toggle */}
          <View style={styles.filterToggle}>
            <TouchableOpacity
              style={[
                styles.filterToggleBtn,
                filterMode === 'theme' && {
                  backgroundColor: colors.textAccent + '18',
                  borderColor: colors.borderAccent,
                },
              ]}
              onPress={() => setFilterMode('theme')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.filterToggleLabel,
                  {
                    color: filterMode === 'theme' ? colors.textAccent : colors.textMuted,
                    fontFamily: filterMode === 'theme' ? 'Lato_700Bold' : 'Lato_400Regular',
                  },
                ]}
              >
                Thèmes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterToggleBtn,
                filterMode === 'source' && {
                  backgroundColor: colors.textAccent + '18',
                  borderColor: colors.borderAccent,
                },
              ]}
              onPress={() => setFilterMode('source')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.filterToggleLabel,
                  {
                    color: filterMode === 'source' ? colors.textAccent : colors.textMuted,
                    fontFamily: filterMode === 'source' ? 'Lato_700Bold' : 'Lato_400Regular',
                  },
                ]}
              >
                Sources
              </Text>
            </TouchableOpacity>
          </View>

          {/* Filter pills */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.pillsRow}
          >
            <ThemeFilterPill
              label="Tout"
              active={filterMode === 'theme' ? !activeTheme : !activeSource}
              onPress={() => {
                setActiveTheme(null);
                setActiveSource(null);
              }}
            />
            {filterMode === 'theme'
              ? THEMES.map((t) => (
                  <ThemeFilterPill
                    key={t}
                    label={t}
                    active={activeTheme === t}
                    onPress={() => setActiveTheme(activeTheme === t ? null : t)}
                  />
                ))
              : SOURCE_TYPES.map((s) => (
                  <ThemeFilterPill
                    key={s}
                    label={s}
                    active={activeSource === s}
                    onPress={() => setActiveSource(activeSource === s ? null : s)}
                  />
                ))}
          </ScrollView>

          {/* Cards grid */}
          <View style={styles.grid}>
            <View style={styles.column}>
              {left.map((card) => (
                <CardThumbnail
                  key={card.id}
                  card={card}
                  isPremium={isPremium}
                  isFavorite={favoriteIds.has(card.id)}
                  onPress={() => handleCardPress(card)}
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
                  isFavorite={favoriteIds.has(card.id)}
                  onPress={() => handleCardPress(card)}
                  onFavoriteToggle={() => toggleFavorite(card.id)}
                />
              ))}
            </View>
          </View>
        </ScrollView>
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
                onFavoriteToggle={() => toggleFavorite(selectedCard.id)}
              />
            </View>
          </View>
        )}
      </Modal>

      <PremiumPaywall visible={premiumVisible} onClose={() => setPremiumVisible(false)} />
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
  namesBanner: {
    marginHorizontal: 20,
    marginBottom: 12,
    height: 110,
    borderRadius: 18,
    overflow: 'hidden',
  },
  sagesBanner: {
    marginHorizontal: 20,
    marginBottom: 16,
    height: 100,
    borderRadius: 18,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  bannerLeft: { flex: 1, gap: 4 },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(201,168,76,0.15)',
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 4,
  },
  premiumBadgeText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 9,
    color: '#C9A84C',
    letterSpacing: 1.5,
  },
  bannerHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 14,
    color: '#C9A84C',
    writingDirection: 'rtl',
  },
  bannerTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 18,
    color: '#F2EAD0',
  },
  bannerSub: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: 'rgba(242,234,208,0.6)',
  },
  filterToggle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    gap: 8,
  },
  filterToggleBtn: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  filterToggleLabel: {
    fontSize: 12,
    letterSpacing: 0.3,
  },
  pillsRow: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 6,
  },
  grid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
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
