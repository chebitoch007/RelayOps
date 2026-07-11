# Website Strategy

## Purpose

Define the purpose, structure, and conversion strategy for relayops.site.

---

## Background

The RelayOps website is not an inbound traffic play — it exists specifically to convert cold email recipients into booked discovery calls. Organic traffic, SEO rank, and social sharing are not current goals. Every design and copy decision should be evaluated against one question: does this help a skeptical cold-email prospect decide to book a call?

---

## Current State

The website completed a 10-priority (P1–P10) overhaul. All priorities are live. Several assets remain as placeholders.

---

## Purpose

The website has **one job:** convert a prospect who clicked through from a cold email into either:
1. A booked discovery call (primary CTA — Calendly), or
2. A message via the contact form (secondary CTA), or
3. A direct email to Brian (tertiary CTA)

It is explicitly **not** designed for:
- Organic search ranking (not yet — SEO is not a current priority)
- Social virality
- Impressing other developers
- Lead generation without outreach (no traffic sources yet)

---

## Conversion Flow

```
Prospect receives cold email from RelayOps
    ↓
Clicks through to relayops.site (likely homepage or /demo-projects)
    ↓
Sees founder section + honest trust signals + outcome-focused messaging
    ↓
Option A: Books discovery call (primary CTA button → Calendly)
Option B: Sends message via contact form (secondary CTA)
Option C: Emails Brian directly (tertiary CTA — plain email link below form submit)
```

---

## Page Structure

### Homepage (`/`)

1. **Hero** — outcome-first headline, floating capability statements (not fake metrics), animated background
2. **Trust/Value section** — four outcome cards (Save Hours Weekly, Respond to Leads Instantly, etc.)
3. **Services section** — six service cards
4. **Process section** — 8-step delivery timeline (Discovery through Ongoing Support)
5. **Demo/Case Study section** — three illustrative demos (labeled "Illustrative Example")
6. **About/Founder section** — Brian's bio, philosophy, links (placeholder photo)
7. **CTA section** — primary call CTA + contact form + email link

### Standalone pages

- `/about` — full story, mission, values, tech philosophy, delivery process
- `/demo-projects` — full reference build documentation (Lead Qualification System)

### Pages not yet built

- `/solutions/*` — individual service pages (Lead Qualification, Appointment Booking, etc.) — original handoff Priority 5, not yet started
- `/work` — existing example builds page (pre-overhaul, still live)

---

## Pending Placeholders (must be resolved before next outreach push)

| Item | Location | What's needed |
|---|---|---|
| Calendly URL | `CTASection.tsx` — primary CTA button | Real Calendly link: `https://calendly.com/brian-relayops/discovery` (or actual) |
| Founder photo | `AboutSection.tsx`, `app/about/page.tsx` | Upload `public/brian.jpg`; replace initials "BC" avatar |
| Demo screenshots | `/demo-projects` | n8n workflow canvas, Typebot editor, Airtable view, Cal.com booking flow |
| Loom walkthrough | `/demo-projects` | Record and get embed URL; swap iframe placeholder |
| Formspree ID | `CTASection.tsx` → Formspree | Set `NEXT_PUBLIC_FORMSPREE_ID` to real value |
| Footer nav links | `Footer.tsx` | Update to match `Navbar.tsx` (Services→Solutions, add Demo Projects) |

---

## Decisions

- Messaging is outcome-first ("Stop losing deals to slow follow-up") not feature-first ("AI chatbot")
- Credibility is proof-based: working demo system, architecture diagram, delivery process — not fabricated metrics or testimonials
- One-person operation is framed as a transparency advantage, not a limitation to hide
- The `/demo-projects` page is designed as a deep-trust signal for prospects who want to see real engineering before booking a call

---

## Future Improvements

- Solutions pages (per-service landing pages for `/solutions/lead-qualification`, etc.)
- SEO metadata and structured data (when organic traffic becomes a goal)
- Analytics event tracking (call CTA clicks, form submissions)
- A/B test primary CTA copy once traffic volume is meaningful
- Real client case studies to replace/supplement illustrative demos

---

## References

- [`CONTENT_GUIDELINES.md`](CONTENT_GUIDELINES.md)
- [`SEO.md`](SEO.md)
- [`engineering/ARCHITECTURE.md`](../engineering/ARCHITECTURE.md)
- [`product/USER_FLOWS.md`](../product/USER_FLOWS.md)
