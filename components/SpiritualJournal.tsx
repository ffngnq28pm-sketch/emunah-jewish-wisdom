import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { JournalEntry } from "@/hooks/usePractice";

// ─── Journal questions ────────────────────────────────────────────────────────
interface JournalQuestion {
  key: keyof Omit<JournalEntry, "id" | "date">;
  label: string;
  hebrewLabel: string;
  placeholder: string;
  icon: string;
}

const JOURNAL_QUESTIONS: JournalQuestion[] = [
  {
    key: "gratitude",
    label: "Gratitude envers Hachem",
    hebrewLabel: "הַכָּרַת הַטּוֹב",
    placeholder: "Comment ai-je exprimé ma gratitude envers Hachem aujourd'hui?",
    icon: "✡️",
  },
  {
    key: "middah",
    label: "Middah cultivée",
    hebrewLabel: "מִדָּה",
    placeholder: "Quelle middah (qualité morale) ai-je cultivée ou travaillée aujourd'hui?",
    icon: "⚖️",
  },
  {
    key: "tzedakah",
    label: "Tzedakah et Chesed",
    hebrewLabel: "צְדָקָה וָחֶסֶד",
    placeholder: "Un acte de tzedakah ou de chesed accompli aujourd'hui...",
    icon: "🕊️",
  },
  {
    key: "torahInsight",
    label: "Lumière de la Torah",
    hebrewLabel: "אוֹר הַתּוֹרָה",
    placeholder: "Un passage de Torah ou un enseignement qui m'a éclairé aujourd'hui...",
    icon: "📜",
  },
  {
    key: "kavanah",
    label: "Kavanah pour demain",
    hebrewLabel: "כַּוָּנָה",
    placeholder: "Ma kavanah (intention) pour demain — ce que je veux mettre en pratique...",
    icon: "🌙",
  },
  {
    key: "praise",
    label: "Louange du soir",
    hebrewLabel: "תְּהִלָּה",
    placeholder: "Ce pour quoi je loue Hachem ce soir — même une petite chose...",
    icon: "✨",
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────
interface SpiritualJournalProps {
  existingEntry?: JournalEntry;
  onSave?: (entry: Omit<JournalEntry, "id" | "date">) => void;
  onClose?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function SpiritualJournal({ existingEntry, onSave, onClose }: SpiritualJournalProps) {
  const { colors } = useTheme();
  const [saved, setSaved] = useState(false);
  const [values, setValues] = useState<Omit<JournalEntry, "id" | "date">>({
    gratitude: existingEntry?.gratitude ?? "",
    middah: existingEntry?.middah ?? "",
    tzedakah: existingEntry?.tzedakah ?? "",
    torahInsight: existingEntry?.torahInsight ?? "",
    kavanah: existingEntry?.kavanah ?? "",
    praise: existingEntry?.praise ?? "",
  });

  useEffect(() => {
    if (existingEntry) {
      setValues({
        gratitude: existingEntry.gratitude,
        middah: existingEntry.middah,
        tzedakah: existingEntry.tzedakah,
        torahInsight: existingEntry.torahInsight,
        kavanah: existingEntry.kavanah,
        praise: existingEntry.praise,
      });
    }
  }, [existingEntry]);

  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleChange = (key: keyof typeof values, text: string) => {
    setValues((prev) => ({ ...prev, [key]: text }));
  };

  const handleSave = () => {
    onSave?.(values);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const isAnyFilled = Object.values(values).some((v) => v.trim().length > 0);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.bg }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.7}>
          <Text style={[styles.closeBtnText, { color: colors.textMuted, fontFamily: "Lato_400Regular" }]}>
            ✕
          </Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.title, { color: colors.textPrimary, fontFamily: "FrankRuhlLibre_700Bold" }]}>
            Journal du Soir
          </Text>
          <Text style={[styles.subtitle, { color: colors.textMuted, fontFamily: "Lato_400Regular" }]}>
            יוֹמָן רוּחָנִי
          </Text>
        </View>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Date */}
        <Text style={[styles.dateText, { color: colors.textAccent, fontFamily: "Lato_400Regular" }]}>
          {today}
        </Text>

        {/* Intro verse */}
        <View style={[styles.verseBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
          <Text style={[styles.verseHebrew, { color: colors.textAccent, fontFamily: "FrankRuhlLibre_700Bold" }]}>
            בָּרוּךְ אַתָּה בְּבֹאֶךָ וּבָרוּךְ אַתָּה בְּצֵאתֶךָ
          </Text>
          <Text style={[styles.verseFrench, { color: colors.textSecondary, fontFamily: "Lato_400Regular" }]}>
            {'Béni sois-tu à ton entrée, béni sois-tu à ta sortie. (Deut. 28:6)'}
          </Text>
        </View>

        {/* Questions */}
        {JOURNAL_QUESTIONS.map((q, idx) => (
          <View key={q.key} style={styles.questionBlock}>
            {/* Question label */}
            <View style={styles.questionLabel}>
              <Text style={styles.questionIcon}>{q.icon}</Text>
              <View style={styles.questionLabelText}>
                <Text style={[styles.questionTitle, { color: colors.textPrimary, fontFamily: "Lato_700Bold" }]}>
                  {q.label}
                </Text>
                <Text style={[styles.questionHebrew, { color: colors.textAccent, fontFamily: "FrankRuhlLibre_700Bold" }]}>
                  {q.hebrewLabel}
                </Text>
              </View>
              <View style={[styles.questionNumber, { backgroundColor: colors.bgSection }]}>
                <Text style={[styles.questionNumberText, { color: colors.textMuted, fontFamily: "Lato_400Regular" }]}>
                  {idx + 1}
                </Text>
              </View>
            </View>

            {/* Text input */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.bgInput,
                  borderColor: values[q.key].length > 0 ? colors.borderAccent : colors.border,
                  color: colors.textPrimary,
                  fontFamily: "Lato_400Regular",
                },
              ]}
              placeholder={q.placeholder}
              placeholderTextColor={colors.textMuted}
              value={values[q.key]}
              onChangeText={(text) => handleChange(q.key, text)}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>
        ))}

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        {/* Closing blessing */}
        <View style={[styles.closingBox, { backgroundColor: colors.bgSection, borderColor: colors.border }]}>
          <Text style={[styles.closingHebrew, { color: colors.textAccent, fontFamily: "FrankRuhlLibre_700Bold" }]}>
            יְהִי רָצוֹן מִלְּפָנֶיךָ
          </Text>
          <Text style={[styles.closingFrench, { color: colors.textSecondary, fontFamily: "Lato_400Regular" }]}>
            Que ma journée soit agréée devant Toi, Hachem.
          </Text>
        </View>

        {/* Save button */}
        <TouchableOpacity
          style={[
            styles.saveBtn,
            {
              backgroundColor: saved
                ? "#4A8A5A"
                : isAnyFilled
                ? colors.textAccent
                : colors.bgSection,
              borderColor: colors.borderAccent,
            },
          ]}
          onPress={handleSave}
          activeOpacity={0.8}
          disabled={!isAnyFilled}
        >
          <Text
            style={[
              styles.saveBtnText,
              {
                color: isAnyFilled ? "#fff" : colors.textMuted,
                fontFamily: "Lato_700Bold",
              },
            ]}
          >
            {saved ? "✓ Journal sauvegardé" : "Sauvegarder le journal"}
          </Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  closeBtn: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtnText: {
    fontSize: 18,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
    letterSpacing: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  dateText: {
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: "capitalize",
    marginBottom: 16,
  },
  verseBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
    gap: 6,
  },
  verseHebrew: {
    fontSize: 14,
    letterSpacing: 1,
    textAlign: "center",
  },
  verseFrench: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
  questionBlock: {
    marginBottom: 20,
  },
  questionLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 10,
  },
  questionIcon: {
    fontSize: 20,
  },
  questionLabelText: {
    flex: 1,
  },
  questionTitle: {
    fontSize: 13,
    letterSpacing: 0.3,
  },
  questionHebrew: {
    fontSize: 11,
    marginTop: 1,
  },
  questionNumber: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  questionNumberText: {
    fontSize: 10,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    lineHeight: 22,
    minHeight: 80,
  },
  divider: {
    height: 1,
    marginVertical: 20,
  },
  closingBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
    alignItems: "center",
    gap: 6,
  },
  closingHebrew: {
    fontSize: 14,
    letterSpacing: 1,
    textAlign: "center",
  },
  closingFrench: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
  saveBtn: {
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  saveBtnText: {
    fontSize: 15,
    letterSpacing: 0.5,
  },
});