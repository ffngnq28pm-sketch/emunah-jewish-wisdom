import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { TEFILA_CATEGORIES, TefilaItem, TefilaCategory } from '@/data/tefila';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ItemCard({ item }: { item: TefilaItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => setExpanded((v) => !v)}
      activeOpacity={0.85}
    >
      {/* Header row */}
      <View style={styles.itemHeader}>
        <View style={styles.itemHeaderLeft}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemOccasion}>{item.occasion}</Text>
        </View>
        <Text style={styles.itemChevron}>{expanded ? '▲' : '▼'}</Text>
      </View>

      {/* Hebrew */}
      <Text style={styles.itemHebrew} numberOfLines={expanded ? undefined : 2}>
        {item.hebrew}
      </Text>

      {expanded && (
        <View style={styles.itemExpanded}>
          {/* Divider */}
          <View style={styles.itemDivider} />

          {/* Transliteration */}
          <Text style={styles.itemTransliterationLabel}>Translittération</Text>
          <Text style={styles.itemTransliteration}>{item.transliteration}</Text>

          {/* Divider */}
          <View style={styles.itemDivider} />

          {/* French */}
          <Text style={styles.itemFrenchLabel}>Traduction française</Text>
          <Text style={styles.itemFrench}>{item.french}</Text>

          {/* Description */}
          {item.description ? (
            <View style={styles.itemDescriptionWrap}>
              <Text style={styles.itemDescriptionLabel}>📚 Contexte & pratique</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          ) : null}

          {/* Source */}
          <View style={styles.itemSourceWrap}>
            <Text style={styles.itemSourceLabel}>Source</Text>
            <Text style={styles.itemSource}>{item.source}</Text>
          </View>

          {/* Times if present */}
          {item.times ? (
            <View style={styles.itemTimesBadge}>
              <Text style={styles.itemTimesText}>× {item.times} fois par jour</Text>
            </View>
          ) : null}
        </View>
      )}
    </TouchableOpacity>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function TefilaScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>(TEFILA_CATEGORIES[0].id);

  const category = TEFILA_CATEGORIES.find((c) => c.id === selectedCategory) ?? TEFILA_CATEGORIES[0];

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerHebrew}>תְּפִלָּה</Text>
            <Text style={styles.headerTitle}>Tefila & Psaumes</Text>
          </View>

          <View style={styles.headerRight} />
        </View>

        {/* ── Category tabs ────────────────────────────────────────────────── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
          style={styles.categoryScroll}
        >
          {TEFILA_CATEGORIES.map((cat) => {
            const isActive = cat.id === selectedCategory;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryTab,
                  isActive && { borderColor: cat.color, backgroundColor: cat.color + '1A' },
                ]}
                onPress={() => setSelectedCategory(cat.id)}
                activeOpacity={0.8}
              >
                <Text style={styles.categoryTabIcon}>{cat.icon}</Text>
                <Text
                  style={[
                    styles.categoryTabTitle,
                    isActive && { color: '#F2EAD0' },
                  ]}
                >
                  {cat.title}
                </Text>
                <Text
                  style={[
                    styles.categoryTabHebrew,
                    isActive && { color: cat.color },
                  ]}
                >
                  {cat.hebrewTitle}
                </Text>
                {isActive && (
                  <View style={[styles.categoryTabActiveBar, { backgroundColor: cat.color }]} />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ── Category header ──────────────────────────────────────────────── */}
        <View style={[styles.catHeader, { borderLeftColor: category.color }]}>
          <Text style={styles.catHeaderIcon}>{category.icon}</Text>
          <View style={styles.catHeaderInfo}>
            <Text style={[styles.catHeaderTitle, { color: category.color }]}>
              {category.title}
            </Text>
            <Text style={styles.catHeaderDescription}>{category.description}</Text>
          </View>
        </View>

        {/* ── Items list ───────────────────────────────────────────────────── */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {category.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
          <View style={{ height: 60 }} />
        </ScrollView>

      </SafeAreaView>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const GOLD = '#C9A84C';
const BG = '#050A1E';
const BG_CARD = '#0A1230';
const BG_SECTION = '#0E1840';
const BORDER = 'rgba(201,168,76,0.15)';
const TEXT_PRIMARY = '#F2EAD0';
const TEXT_SECONDARY = '#8A8FA8';
const TEXT_MUTED = '#4A5068';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BG,
  },
  safeArea: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: BG_SECTION,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: GOLD,
    marginTop: -2,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  headerHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 22,
    color: GOLD,
    letterSpacing: 2,
  },
  headerTitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: TEXT_SECONDARY,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  headerRight: {
    width: 36,
  },

  // Category scroll
  categoryScroll: {
    maxHeight: 100,
    marginBottom: 4,
  },
  categoryRow: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 10,
  },
  categoryTab: {
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: BG_SECTION,
    gap: 3,
    minWidth: 80,
    overflow: 'hidden',
  },
  categoryTabIcon: {
    fontSize: 18,
  },
  categoryTabTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 11,
    color: TEXT_SECONDARY,
    textAlign: 'center',
  },
  categoryTabHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 10,
    color: TEXT_MUTED,
    letterSpacing: 0.5,
  },
  categoryTabActiveBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
  },

  // Category header
  catHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
    paddingLeft: 12,
    borderLeftWidth: 3,
    gap: 10,
  },
  catHeaderIcon: {
    fontSize: 24,
  },
  catHeaderInfo: {
    flex: 1,
    gap: 2,
  },
  catHeaderTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  catHeaderDescription: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: TEXT_SECONDARY,
    lineHeight: 18,
  },

  // Items
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 10,
  },
  itemCard: {
    backgroundColor: BG_CARD,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    gap: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  itemHeaderLeft: {
    flex: 1,
    gap: 2,
  },
  itemTitle: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 14,
    color: TEXT_PRIMARY,
    letterSpacing: 0.2,
  },
  itemOccasion: {
    fontFamily: 'Lato_400Regular',
    fontSize: 10,
    color: GOLD,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  itemChevron: {
    fontSize: 10,
    color: TEXT_MUTED,
    marginTop: 3,
  },
  itemHebrew: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 16,
    color: GOLD,
    lineHeight: 28,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  itemExpanded: {
    gap: 12,
  },
  itemDivider: {
    height: 1,
    backgroundColor: BORDER,
  },
  itemTransliterationLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    color: TEXT_MUTED,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  itemTransliteration: {
    fontFamily: 'Lato_400Regular',
    fontSize: 13,
    color: TEXT_SECONDARY,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  itemFrenchLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 10,
    color: TEXT_MUTED,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  itemFrench: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: TEXT_PRIMARY,
    lineHeight: 22,
  },
  itemDescriptionWrap: {
    backgroundColor: 'rgba(201,168,76,0.06)',
    borderRadius: 10,
    padding: 12,
    gap: 6,
  },
  itemDescriptionLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    color: GOLD,
    letterSpacing: 0.3,
  },
  itemDescription: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: TEXT_SECONDARY,
    lineHeight: 20,
  },
  itemSourceWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  itemSourceLabel: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    color: TEXT_MUTED,
  },
  itemSource: {
    fontFamily: 'Lato_400Regular',
    fontSize: 11,
    color: TEXT_MUTED,
    flex: 1,
    lineHeight: 17,
    fontStyle: 'italic',
  },
  itemTimesBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(201,168,76,0.12)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(201,168,76,0.3)',
  },
  itemTimesText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 11,
    color: GOLD,
    letterSpacing: 0.3,
  },
});
