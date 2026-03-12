# Spanish Practice App

A web-based app for practicing A1-level Spanish. It displays Spanish sentences as flash cards, shows base (infinitive/dictionary) forms of inflected words in smaller grey text, and lets you type the sentence to check your answer.

## Features

- **130 A1 Spanish phrases** – greetings, numbers, travel, food, family, weather, and more
- **Base form hints** – inflected verbs and words show their base/infinitive form in a small grey font below
- **Two practice modes**
  - *Copy Spanish* – read the Spanish sentence and type it exactly
  - *Translate to Spanish* – read the English sentence and type the Spanish translation
- **Correctness checking** – press Enter or click **Check**; see the correct answer on mistakes
- **Show/hide translation** – toggle the English translation per card
- **Exclude card** – hide a card permanently (stored in `localStorage`); reset all excluded cards at any time
- **Dark-mode support** – follows the OS colour scheme

## Getting Started

```bash
npm install
npm run dev        # start development server
npm run build      # production web build
```

## Desktop (Windows EXE)

```bash
npm run electron:build   # produces an installer in dist-electron/
```

Requires: Node.js ≥ 18, Windows (or cross-compile with Wine on Linux/macOS).

## Android APK

```bash
npm run build
npm run cap:add:android   # first time only
npm run cap:sync
cd android && ./gradlew assembleDebug
# APK: android/app/build/outputs/apk/debug/app-debug.apk
```

Requires: Android SDK (API 22+), Java 21.

## GitHub Actions

| Workflow | Trigger | Artifact |
|---|---|---|
| **Build Windows EXE** | push / PR to `main` / tag | `dist-electron/*.exe` |
| **Build Android APK** | push / PR to `main` / tag | `app-debug.apk` |

Both workflows also run on `workflow_dispatch` for manual triggering.

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Electron](https://www.electronjs.org/) + [electron-builder](https://www.electron.build/) (desktop)
- [Capacitor](https://capacitorjs.com/) (Android)
