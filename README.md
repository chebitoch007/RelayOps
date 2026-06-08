# RelayOps — AI Automation Agency Website

RelayOps is a polished landing page for an AI automation agency. It is designed to present a service-driven brand with modern visuals, custom motion, and responsive layouts for showcasing services, trust signals, process steps, and interactive demos.

## What RelayOps Does

- Presents RelayOps as a strategic AI automation partner
- Highlights services, benefits, and growth-focused process steps
- Includes demo-style content to show automated workflows and product value
- Uses motion, glassmorphism, and particle effects to create a premium digital agency experience
- Works as a ready-to-use marketing site for AI / automation consultancies

## Features

- Dark theme with a custom CSS design system
- Framer Motion scroll-triggered animations
- Canvas particle background and animated cursor
- Branded loading screen experience
- Responsive mobile-first design
- Sticky navbar with mobile hamburger menu
- Section-driven layout: Hero, Trust, Services, Process, Demo, About, CTA, Footer

## Tech Stack

- Next.js 16 App Router + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Install Dependencies

From the project root:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

If you want to preview the production build locally:

```bash
npm run start
```

## Deployment Instructions

### Deploy to Vercel

**Option 1: Vercel CLI**

```bash
npm i -g vercel
vercel
```

**Option 2: GitHub + Vercel Dashboard**

1. Push the repository to GitHub
2. Go to https://vercel.com/new
3. Select the GitHub repository
4. Confirm the deployment settings
5. Deploy the app

Vercel automatically detects Next.js projects.

### Manual Deployment

The site can also be hosted on any platform that supports Next.js production builds. Ensure you:

1. Install dependencies: `npm install`
2. Build the app: `npm run build`
3. Start the server: `npm run start`

No environment variables are required for the default static landing page.

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

## Customization

- Change brand text and company name in section files
- Update contact links in `components/sections/CTASection.tsx` and `components/sections/Footer.tsx`
- Edit services content in `components/sections/ServicesSection.tsx`
- Update the tech stack or team info in `components/sections/AboutSection.tsx`

## License

MIT
