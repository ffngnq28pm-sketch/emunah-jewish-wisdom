import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { WisdomCard } from '@/components/WisdomCard';
import { CardActions } from '@/components/CardActions';
import { useFavorites } from '@/hooks/useFavorites';
import { useOmer } from '@/hooks/useOmer';
import { useTheme } from '@/context/ThemeContext';
import { OMER_CARDS, getOmerCardOfDay } from '@/data/omerCards';
import { WisdomCard as WisdomCardType } from '@/types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const DEMO_DAY = 14;

// Sefira colors by week
const SEFIRA_COLORS: Record<string, string> = {
  Chesed:   '#4A8A5A',
  Gevurah:  '#8A4A4A',
  Tiferet:  '#C9A84C',
  Netzach:  '#4A7A8A',
  Hod:      '#6B5FA5',
  Yesod:    '#4A6FA5',
  Malkhut:  '#8A5A8A',
};

function getWeekSefira(day: number): string {
  const sefirot = ['Chesed', 'Gevurah', 'Tiferet', 'Netzach', 'Hod', 'Yesod', 'Malkhut'];
  return sefirot[Math.floor((day - 1) / 7)] ?? 'Chesed';
}

export default function OmerScreen() {
  const { isOmer, day: realDay, total, seasonLabel, daysLeft } = useOmer();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const { colors, theme } = useTheme();

  const activeDay = isOmer ? realDay : DEMO_DAY;
  const [activeIndex, setActiveIndex] = useState(activeDay - 1);
  const listRef = useRef<FlatList<WisdomCardType>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const idx = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    if (idx !== activeIndex) setActiveIndex(idx);
  };

  const renderItem = ({ item }: { item: WisdomCardType }) => (
    <View style={styles.slide}>
      <WisdomCard card={item} />
      <View style={styles.slideActions}>
        <CardActions
          card={item}
          isFavorite={favoriteIds.has(item.id)}
          onFavoriteToggle={() => toggleFavorite(item.id)}
        />
      </View>
    </View>
  );

  const currentDay = activeIndex + 1;
  const sefira = getWeekSefira(currentDay);
  const accentColor = SEFIRA_COLORS[sefira] ?? '#C9A84C';
  const omerBg = theme === 'light' ? '#020A05' : '#020908';

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= OMER_CARDS.length) return;
    listRef.current?.scrollToIndex({ index: idx, animated: true });
    setActiveIndex(idx);
  };

  return (
    <View style={[styles.root, { backgroundColor: omerBg }]}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          stickyHeaderIndices={[0]}
        >
          {/* Header */}
          <LinearGradient
            colors={['#010A04', '#051510', '#010A04']}
            style={styles.headerGradient}
          >
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View style={styles.starRow}>
                  <Star size={16} color={accentColor} />
                  <Text style={[styles.headerTitle, { color: '#F2EAD0' }]}>
                    {isOmer ? seasonLabel : 'Sefirat HaOmer'}
                  </Text>
                  <Star size={16} color={accentColor} />
                </View>
                <Text style={[styles.headerHebrew, { color: accentColor }]}>
                  סְפִירַת הָעֹמֶר
                </Text>
              </View>
            </View>

            {/* Progress */}
            <View style={styles.progressSection}>
              <View style={styles.progressRow}>
                <Text style={[styles.dayNumber, { color: accentColor }]}>
                  {currentDay}
                </Text>
                <Text style={styles.daySlash}>/</Text>
                <Text style={styles.dayTotal}>49</Text>
              </View>
              <Text style={[styles.sefiraLabel, { color: accentColor }]}>
                Semaine de {sefira}
              </Text>

              <View style={[styles.progressTrack, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${(currentDay / 49) * 100}%` as any,
                      backgroundColor: accentColor,
                    },
                  ]}
                />
              </View>

              {isOmer && daysLeft > 0 && (
                <View style={styles.infoRow}>
                  <Clock size={12} color="rgba(255,255,255,0.3)" />
                  <Text style={styles.infoText}>
                    {daysLeft} jour{daysLeft > 1 ? 's' : ''} jusqu'à Chavouot
                  </Text>
                </View>
              )}
              {!isOmer && (
                <Text style={styles.infoText}>
                  L'Omer — 49 jours entre Pessa'h et Chavouot
                </Text>
              )}
            </View>

            {/* Navigation */}
            <View style={styles.navRow}>
              <TouchableOpacity
                style={[
                  styles.navBtn,
                  activeIndex === 0
                    ? styles.navBtnDisabled
                    : { borderColor: accentColor + '60' },
                ]}
                onPress={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                activeOpacity={0.7}
              >
                <ChevronLeft
                  size={16}
                  color={activeIndex === 0 ? 'rgba(255,255,255,0.12)' : accentColor}
                />
              </TouchableOpacity>

              <View style={styles.navCenter}>
                <Text style={[styles.navLabel, { color: accentColor }]}>
                  Jour {currentDay}
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.navBtn,
                  activeIndex >= OMER_CARDS.length - 1
                    ? styles.navBtnDisabled
                    : { borderColor: accentColor + '60' },
                ]}
                onPress={() => goTo(activeIndex + 1)}
                disabled={activeIndex >= OMER_CARDS.length - 1}
                activeOpacity={0.7}
              >
                <ChevronRight
                  size={16}
                  color={
                    activeIndex >= OMER_CARDS.length - 1
                      ? 'rgba(255,255,255,0.12)'
                      : accentColor
                  }
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* Cards */}
          <FlatList
            ref={listRef}
            data={OMER_CARDS}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            initialScrollIndex={activeDay - 1}
            getItemLayout={(_, index) => ({
              length: SCREEN_WIDTH,
              offset: SCREEN_WIDTH * index,
              index,
            })}
            style={{ flex: 1 }}
          />

          {/* Sefira detail */}
          <View style={styles.sefiraDetail}>
            <View
              style={[
                styles.sefiraBadge,
                {
                  backgroundColor: accentColor + '18',
                  borderColor: accentColor + '40',
                },
              ]}
            >
              <Text style={[styles.sefiraDetailText, { color: accentColor }]}>
                ✡ {sefira} — Semaine {Math.ceil(currentDay / 7)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  scroll: { flexGrow: 1 },
  headerGradient: {
    paddingTop: 16,
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerLeft: { gap: 4 },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  headerHebrew: {
    fontFamily: 'FrankRuhlLibre_400Regular',
    fontSize: 14,
    letterSpacing: 0.3,
    writingDirection: 'rtl',
  },
  progressSection: {
    alignItems: 'center',
    marginBottom: 16,
    gap: 6,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  dayNumber: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 48,
    lineHeight: 52,
  },
  daySlash: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: 'rgba(255,255,255,0.25)',
  },
  dayTotal: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: 'rgba(255,255,255,0.25)',
  },
  sefiraLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  progressTrack: {
    width: '80%',
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 6,
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 4,
  },
  infoText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: 'rgba(255,255,255,0.28)',
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnDisabled: { borderColor: 'rgba(255,255,255,0.08)' },
  navCenter: { flex: 1, alignItems: 'center' },
  navLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    letterSpacing: 0.8,
  },
  slide: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    gap: 16,
  },
  slideActions: { gap: 8 },
  sefiraDetail: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 100,
  },
  sefiraBadge: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  sefiraDetailText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
