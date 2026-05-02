import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

export default function NotFoundScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
      <Text style={styles.symbol}>✡</Text>
      <Text style={[styles.title, { color: colors.textPrimary }]}>Page introuvable</Text>
      <Text style={[styles.subtitle, { color: colors.textMuted }]}>
        Ce chemin ne mène nulle part.{'\n'}
        "All the paths of the LORD are lovingkindness and truth." — Ps 25:10
      </Text>
      <Link href="/(tabs)" asChild>
        <TouchableOpacity style={styles.btn} activeOpacity={0.85}>
          <Text style={styles.btnText}>Retourner à l'accueil</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  symbol: { fontSize: 48, color: '#C9A84C', marginBottom: 20 },
  title: {
    fontFamily: 'FrankRuhlLibre_700Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 36,
  },
  btn: {
    backgroundColor: '#C9A84C',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  btnText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    color: '#080A12',
  },
});
