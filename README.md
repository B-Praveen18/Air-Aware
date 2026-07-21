# AIR/AWARE — Air Pollution Awareness Page

An editorial-style single-page React site about air pollution, with a built-in
AI chatbot ("Aura") that answers questions about air pollution **and** explains
the design decisions behind the page itself.

## Running the project

You need **Node.js 18+** and **npm** installed.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## About the chatbot

The chatbot ("Aura") posts to the Anthropic Messages API directly from the
browser. When running inside the **Claude artifact / Claude Make** environment,
no API key is required — authentication is handled by the host.

If you're running this outside that environment and want the chatbot to work,
you'll need to proxy requests through a small backend that attaches your
`ANTHROPIC_API_KEY`. (Never ship a raw key in client-side code.)

## Design direction

The page avoids the typical "clean tech dashboard" look for air-pollution sites.
Instead it borrows from long-form environmental journalism:

- **Warm paper background + grain overlay** — evokes a printed field report.
- **Smog-orange accent** — the colour of sunsets filtered through particulate
  haze. Beautiful and alarming at once, which is the paradox of pollution.
- **Fraunces (serif) + Inter Tight (sans) + JetBrains Mono (labels)** — the
  serif signals "considered essay," not "ad."
- **Editorial layout** with drop-caps, pull-quotes, and sidebar apparatus —
  the story leads, the data supports.

Ask Aura "why is this orange?" or "why the serif font?" to hear the reasoning
in her own words.

## Project structure

```
src/
  App.tsx                 — assembles the page
  main.tsx                — React entry
  styles.css              — design tokens, grain, animations
  lib/
    cn.ts                 — classname helper
    data.ts               — pollutants, AQI bands, impact figures, actions
  components/
    Header.tsx            — top navigation
    Ticker.tsx            — scrolling headline strip
    Hero.tsx              — title + preface
    Report.tsx            — § 01 editorial essay
    Pollutants.tsx        — § 02 PM2.5 / NO₂ / O₃ / SO₂ cards
    AQIScale.tsx          — AQI band explainer + Recharts line chart
    Impact.tsx            — § 03 "ledger" of global stats
    Action.tsx            — § 04 practical steps
    Footer.tsx            — colophon
    Chatbot.tsx           — "Aura" assistant powered by Claude Sonnet
```

## Caveats

Figures on the page are illustrative and based on publicly reported annual
patterns. For live AQI readings, check IQAir, WAQI, AirNow, or your local
monitoring agency — the chatbot itself will remind you of this.
