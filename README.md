# RelayOps

**AI automation systems for agencies and service businesses.**

RelayOps builds practical AI workflows that respond to leads instantly, automate appointment booking, and eliminate manual follow-up — so businesses stop losing clients to slower competitors.

 **Live site:** [relayops.site](https://www.relayops.site)

---

## What This Repo Contains

The public-facing website for RelayOps, built with Next.js 15, Tailwind CSS v4, and Framer Motion.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Language |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Vercel | Deployment |
| Formspree | Contact form |

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed automatically via Vercel on every push to `main`.

```bash
# Manual deploy
npm run build
npm run start
```

---

## Project Structure

```text
ai-agency/
├── app/
│   ├── globals.css          # global styles and design tokens
│   ├── layout.tsx           # application layout and metadata
│   └── page.tsx             # homepage content
├── components/
│   ├── sections/            # page section components
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── TrustSection.tsx
│   └── ui/                  # reusable UI and animation components
│       ├── AnimatedCursor.tsx
│       ├── LoadingScreen.tsx
│       └── ParticleBackground.tsx
├── public/                  # static assets
├── scripts/                 # utility scripts
├── package.json             # dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

---

## Contact

**brian@relayops.site** · [relayops.site](https://www.relayops.site)
