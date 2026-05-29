# RelayOps — AI Automation Agency Website

A premium, modern AI automation agency landing page built with Next.js 16, Tailwind CSS, and Framer Motion.

## Features

- Dark theme with custom CSS design system
- Framer Motion scroll-triggered animations throughout
- Particle background with canvas rendering
- Animated cursor glow (desktop)
- Loading screen with brand animation
- Sticky navbar with mobile hamburger
- Glassmorphism UI elements
- Custom typography (Syne + Outfit + JetBrains Mono)
- Interactive demo tabs with mock chat UIs
- Fully responsive mobile-first

## Sections

| Section | Description |
|---|---|
| Hero | Animated headline, CTA, floating metric cards, dashboard visual |
| Trust | 4 benefit cards |
| Services | 6 service cards with hover effects |
| Process | 3-step Audit → Automate → Scale timeline |
| Demo | Tabbed interactive demos |
| About | Founder section + tech stack |
| CTA | Conversion section |
| Footer | Links, social, copyright |

## Tech Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option 1: Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 2: GitHub + Vercel Dashboard**
1. Push to GitHub
2. Import at vercel.com/new
3. Click Deploy (auto-detects Next.js)

No environment variables required for the base site.

## Project Structure

```
ai-agency/
├── app/
│   ├── globals.css          # Design system, CSS variables
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── AnimatedCursor.tsx
│       ├── ParticleBackground.tsx
│       └── LoadingScreen.tsx
```

## Design System

### Colors
```
--bg-primary: #03080F
--bg-secondary: #071020
--accent-teal: #00E5A0
--accent-blue: #0A84FF
--accent-purple: #7B61FF
--text-primary: #EDF2FF
--text-muted: #7B8FAB
```

### Fonts
- Syne (headings)
- Outfit (body)
- JetBrains Mono (code)

## Customization

- Brand name: replace "RELAYOPS" across component files
- Contact: update mailto links in CTASection.tsx and Footer.tsx
- Services: edit ServicesSection.tsx
- Tech stack list: edit AboutSection.tsx

## License
MIT
