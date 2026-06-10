# Emunah — Sagesse juive, au quotidien

Application mobile iOS (+ export web) de sagesse et de prière juives : cartes de
méditation (Torah, Talmud, sages), histoire juive, prières (tefila), compte de
l'Omer, noms hébraïques, parcours éducatif, quiz, et un abonnement Premium.

## Stack

- Expo SDK 54 · Expo Router · React Native 0.81 · React 19 · TypeScript
- RevenueCat (`react-native-purchases`) pour les achats in-app
- Persistance : `@react-native-async-storage/async-storage` (cache write-through, `context/storage.ts`)

## Démarrage

```bash
npm install
npm run dev          # Expo — presser "i" pour le simulateur iOS
```

## Scripts

| Script | Rôle |
|---|---|
| `npm run dev` | Lance Metro / Expo. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run lint` | `expo lint`. |

## Variables d'environnement

```
EXPO_PUBLIC_RC_KEY_IOS_EMUNAH=appl_xxx
EXPO_PUBLIC_RC_KEY_ANDROID_EMUNAH=goog_xxx
```

## Contenu & droits d'auteur

Le contenu (textes hébreux, traductions, commentaires) attribue de nombreux
passages à des auteurs encore sous copyright (Heschel, Lévinas, Soloveitchik,
Sacks, Steinsaltz…). Un audit de provenance est en cours :
voir `docs/COPYRIGHT_PROVENANCE.csv`. **Vérifier le statut (paraphrase vs
citation) avant toute distribution commerciale.**

## Build & publication

- iOS : `eas build --platform ios --profile production` puis `eas submit`.
- Web : export Expo → Netlify.

## Structure

```
app/         routes expo-router ((tabs)/ + sages, tefila, divine-names…)
components/  composants UI
context/     providers + storage.ts (persistance)
data/        contenu (cards, jewishHistory, tefila, sages…)
hooks/       hooks métier (usePremium, useStreak…)
services/    StoreService (RevenueCat), Notification
```

## Licence

Code : voir `LICENSE`. Contenu : © Charif Hachichi (provenance en cours d'audit).
