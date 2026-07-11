# Architecture

## Purpose

Document the full technical architecture of every RelayOps system — the public website, the Lead Qualification demo system, and the principles that govern future client builds.

---

## Background

RelayOps runs two distinct technical systems: the public marketing website (Next.js, deployed on Vercel) and the Lead Qualification demo system (n8n + Gemini + Google Sheets, deployed separately). These are **not connected** and should never be conflated.

---

## System 1: Public Marketing Website (relayops.site)

### Overview

A standard Next.js App Router site — marketing-only, no backend application server, no database, no user authentication. All interactive state is handled client-side. Form submissions go directly to Formspree from the browser.

### Stack

| Layer | Technology | Version / Notes |
|---|---|---|
| Framework | Next.js (App Router) | **16.2.6** |
| Language | TypeScript | — |
| UI library | React / react-dom | **19.2.4** |
| Styling | Tailwind CSS | Custom config, CSS variables for theming |
| Animation | Framer Motion | ^12.40.0 |
| Icons | lucide-react | ^1.16.0 — **does not export `Linkedin` or `Github` brand icons**; use `ExternalLink` and `Mail` as substitutes |
| Fonts | Syne + JetBrains Mono | Loaded via `next/font/google` in `app/layout.tsx` (as of P10 — not via CSS `@import`) |
| Hosting | Vercel | — |
| Analytics | Google Analytics | Measurement ID: `G-BQP2H77QJ9`; loaded via gtag.js in root layout |
| Forms | Formspree | Client-side POST; env var `NEXT_PUBLIC_FORMSPREE_ID` — **real Form ID is still a placeholder** |

**Do not bump these dependency versions without being explicitly asked.** Work within installed versions and document version-gated limitations rather than upgrading around them.

### Repository Structure

```
RelayOps-main/
├── app/
│   ├── layout.tsx              — root layout, metadata, GA scripts, font loading
│   ├── globals.css             — CSS variables, utility classes, keyframes
│   ├── page.tsx                — homepage (assembles all homepage sections)
│   ├── not-found.tsx           — 404 page
│   ├── about/
│   │   ├── page.tsx            — /about standalone page
│   │   └── layout.tsx          — /about metadata
│   └── demo-projects/
│       ├── page.tsx            — /demo-projects reference build page
│       └── layout.tsx          — /demo-projects metadata
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx      — contact form (Formspree-powered)
│   │   └── Footer.tsx
│   └── ui/
│       └── ParticleBackground.tsx
├── public/
├── README.md
└── docs/                       — this documentation system
```

**Repository:** https://github.com/chebitoch007/RelayOps

### CSS Variable Conventions

All custom properties use these prefixes (defined in `globals.css`):
- `--font-*` — font families
- `--bg-*` — backgrounds
- `--accent-*` — accent colors
- `--text-*` — text colors
- `--border-*` — borders

Follow these prefixes for any new variables.

### Known Issues / Technical Debt

- **Formspree Form ID is a placeholder.** The contact form will not submit successfully until `NEXT_PUBLIC_FORMSPREE_ID` is set to a real value.
- **Real Calendly URL not set.** The P9 primary CTA button points to `https://calendly.com/brian-relayops/discovery` — a plausible placeholder with an explicit code comment. Must be replaced before launch.
- **Real founder photo not added.** `AboutSection.tsx` and `about/page.tsx` use a "BC" initials placeholder. Swap with `<Image src="/brian.jpg" />` when a photo is available.
- **Footer nav not updated.** Navbar was updated in P4 (Services→Solutions, Demo Projects added); `Footer.tsx` navigation links were not updated. This gap was flagged but not resolved.
- **lucide-react `^1.16.0` has no brand icons.** `Linkedin` and `Github` are not exported in this version. Using `ExternalLink` and `Mail` as substitutes. Document this and do not attempt to import the brand icons.

---

## System 2: Lead Qualification Demo System

### Overview

A serverless, integration-heavy architecture built as a **sales asset/working demo** — not a live client product. All five build phases are complete and all three qualification branches (qualified / maybe / not qualified) are verified working end-to-end.

**Important:** This is explicitly a demo/proof-of-concept, not production-grade. Do not deploy it as a client-facing system without replacing Google Sheets and ngrok.

### Stack

| Layer | Technology | Notes |
|---|---|---|
| App layer | Next.js + TypeScript + Tailwind CSS + Framer Motion | Same stack as the website |
| AI/LLM | Google Gemini (`gemini-2.5-flash`) | Migrated from deprecated `gemini-1.5-pro` |
| Data store | Google Sheets (service account access) | **Not scalable** — demo/low-volume only |
| Orchestration | n8n, self-hosted via Docker | Exposed via ngrok — **not stable/production-grade** |
| Scheduling | Calendly | Webhooks; signature verification patched for free-plan limitations |
| Email | Gmail SMTP | Transactional confirmation and follow-up emails |
| Hosting | Vercel | All credentials as environment variables; env var mismatch between local/dev and deployed was resolved |

### System Flow

```
Lead submits form
    ↓
Gemini AI qualifies the lead (configured criteria)
    ↓
Data logged to Google Sheets
    ↓
n8n routes to one of three branches:
    ├── Qualified → Calendly booking link sent automatically
    ├── Maybe → Flagged for manual review (or nurture)
    └── Not qualified → Polite decline / nurture tag
    ↓
Confirmation and follow-up emails sent via Gmail SMTP
```

### Technical Debt

- Google Sheets does not scale past demo/single-client-proof-of-concept stage. A paying client's real production system will need Postgres, Supabase, or Airtable.
- ngrok URLs are not stable — they change on restart and are not suitable for production webhooks. A real client deployment would need a properly hosted n8n instance (Railway, Render, VPS, or n8n Cloud) or a managed automation platform.
- Calendly webhook signature verification was patched specifically for the free plan's limitations. This may need rework for paid-tier Calendly.

---

## Separate / Unrelated Technical Projects

The founder has separate projects that are explicitly **not part of RelayOps** and should not be conflated with it:
- A Django-based gaming-accessories dropshipping e-commerce platform
- A related Django/PostgreSQL/Redis/Celery/HTMX/Vite project called "django_mart" / ASAI

Do not reference these as RelayOps infrastructure.

---

## Future Improvements

- Replace Google Sheets with a real database (Postgres / Supabase / Airtable) before first client
- Replace ngrok with a properly hosted n8n (Railway, Render, or VPS)
- Add `sitemap.ts` and `robots.ts` (code was written but commit status is unconfirmed)
- Add Google Analytics custom event tracking
- Fix Footer nav to match Navbar
- Add screenshot assets to `/demo-projects` placeholder sections
- Record Loom walkthrough and embed in `/demo-projects`

---

## References

- [`CODE_STANDARDS.md`](CODE_STANDARDS.md)
- [`DEPLOYMENT.md`](DEPLOYMENT.md)
- [`INTEGRATIONS.md`](INTEGRATIONS.md)
- [`AI_COLLABORATION.md`](AI_COLLABORATION.md)
- [`product/DEMO_PROJECT.md`](../product/DEMO_PROJECT.md)
