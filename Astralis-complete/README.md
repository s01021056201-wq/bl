# ✦ Astralis

**Astralis — Your daily guide to the cosmos.**

A static React + Vite + Tailwind CSS astrology companion. There is no backend and no database. Profile data and cached readings are stored locally in the browser.

## Features

- Western tropical zodiac engine
- Sun sign calculation
- Life Path + Personal Day numerology
- Traditional planetary-day correspondences
- Color magic + crystal correspondences
- Chaldean planetary-hour lucky windows
- Zodiac wheel + constellation UI
- Local-first dashboard
- Educational astrology library
- Optional Gemini AI daily report
- Optional Gemini AI natal reading
- Google Search grounding for current web information
- GitHub Pages deployment

## Requirements

Node.js 20+ is recommended.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Create a GitHub repository, for example `astralis`.
2. Change `base` in `vite.config.js` from `/` to:

```js
base: "/astralis/",
```

Use the exact repository name.

3. Push the project.
4. Run:

```bash
npm install
npm run deploy
```

The `gh-pages` package publishes `dist` to the `gh-pages` branch.

5. In GitHub, open **Settings → Pages** and choose the `gh-pages` branch as the source.

For a `USERNAME.github.io` user site, keep `base: "/"`.

### SPA routing

GitHub Pages does not natively know React Router routes. This project includes `public/404.html`, which redirects missing routes back through the app. Keep it when deploying.

## Gemini AI

Astralis works without an API key. Numerology, colors, crystals and planetary hours are entirely local.

To enable deep AI readings:

1. Obtain a Gemini API key from Google AI Studio.
2. Open Astralis.
3. Select the gear icon.
4. Paste the key into **Gemini API Key**.
5. Select the model.
6. Save.

The key is stored in this browser's localStorage and is sent directly to Google's Gemini API when a reading is generated. Astralis does not need your Google password.

### Important security note

This is intentionally a client-side architecture. A key stored in browser localStorage cannot be considered a server-side secret. Do not commit a key to GitHub. Prefer an API key with appropriate restrictions and usage limits.

## API implementation

The app uses Gemini's REST `generateContent` endpoint and the Google Search grounding tool. See Google's current Gemini API documentation before changing models or API parameters.

## Project structure

```text
src/
  components/astro/
    learn/
    AsciiBox.jsx
    Dashboard.jsx
    DailyReport.jsx
    GradientText.jsx
    LuckyTime.jsx
    NatalChartCard.jsx
    Nav.jsx
    Onboarding.jsx
    Settings.jsx
    StarMap.jsx
    Starfield.jsx
    ZodiacWheel.jsx
    AstroLayout.jsx
  lib/
    astrology.js
    llm.js
    storage.js
    utils.js
  pages/
    Home.jsx
    Learn.jsx
    NatalChart.jsx
    PageNotFound.jsx
  App.jsx
  index.css
  main.jsx
public/
  404.html
```

## Astrology note

The local planetary-hour implementation uses an equal-hour approximation beginning at 6:00 AM, as requested. It is a symbolic/traditional correspondence system, not an astronomical sunrise calculation.

The AI reading is interpretive. Search grounding improves access to current information but does not turn Gemini into a dedicated astronomical ephemeris engine; the prompts explicitly instruct it not to invent uncertain positions.
