# Roadmap

## Purpose

Track what's immediate, what's next, and what's long-term for RelayOps. Separate stable priorities from speculation.

---

## Background

The roadmap is intentionally short at this stage. Everything that is not directly connected to closing the first client is deprioritized. This is a deliberate constraint, not an oversight.

---

## Current State

Pre-revenue. Zero clients. The single measurable goal is: someone pays Brian money.

---

## Immediate (this week / before next outreach push)

These are blocking items — they must be resolved before the next outreach wave sends prospects to a broken or incomplete website.

| Item | Owner | Blocking what? |
|---|---|---|
| Set real Calendly URL in `CTASection.tsx` | Brian | Primary CTA is a broken link |
| Add real founder photo to `AboutSection.tsx` and `/about` | Brian | Trust signal is a placeholder |
| Set real Formspree Form ID in env var | Brian | Contact form submissions go nowhere |
| Resolve 3 CRM name/email mismatches (Ayokay, Camberlion, ThinkPod) | Brian | Cannot email these prospects safely |
| Send corrected follow-ups to pre-v1.0 prospects | Brian | These sequences are stalled with bad copy |
| Send due FU1/FU3 follow-ups per CRM dates | Brian | Follow-up cadence has drifted |

---

## Short-Term (next 2–4 weeks, post first reply)

These become relevant the moment a prospect replies.

| Item | Notes |
|---|---|
| Reply-handling script | Needed the moment someone responds — don't improvise |
| Discovery call script | Needed before the first call |
| Proposal template (one-page) | Needed before the first proposal |
| Payment collection method | Stripe or PayPal — needed to receive a deposit |
| Project kickoff message template | Needed at the start of a build |
| Delivery package template | Loom outline, one-page explainer structure |
| Record Loom walkthrough of demo system | Currently a placeholder on `/demo-projects` |
| Add demo screenshots to `/demo-projects` | Currently placeholders |
| Update Footer nav to match Navbar | Flagged since P4 — low priority but should be done |

---

## Medium-Term (post first client)

These make sense once there's revenue and at least one real case study.

| Item | Notes |
|---|---|
| Replace Google Sheets (demo) with a real database | Needed before second client deployment |
| Replace ngrok with properly hosted n8n | Needed for production stability |
| Add real client case study to website | Requires client permission |
| Raise pricing (once credibility exists) | No specific trigger defined yet |
| Solutions pages (`/solutions/*`) | Per-service landing pages; SEO foundation |
| Consider real-estate niche expansion | Needs explicit yes/no decision first |
| Add analytics event tracking | CTA clicks, form submits — useful once traffic is meaningful |

---

## Long-Term (not planned, not approved — directional only)

| Item | Notes |
|---|---|
| Standardized service packages | Reduces custom quoting overhead at scale |
| Retainer/maintenance tier | Post-delivery ongoing support; no pricing model yet |
| Hiring | Depends entirely on revenue and capacity |
| Inbound SEO / content | Makes sense when outbound has proven the model |
| SaaS productization | Explicitly rejected for now — revisit only with data |

---

## What Is Explicitly Not on the Roadmap

- Paid ads (no budget, no reason to test before outbound is proven)
- Social media content growth (too slow, not current priority)
- SaaS product (explicitly rejected — see `DECISIONS.md` #1)
- Website redesign or further visual polish beyond the items above
- Competitor research (acknowledged gap, but not blocking revenue)

---

## References

- [`00_PROJECT_OVERVIEW.md`](../00_PROJECT_OVERVIEW.md) — current priorities
- [`business/DECISIONS.md`](../business/DECISIONS.md) — decisions that shaped the roadmap
- [`product/PRODUCT.md`](PRODUCT.md)
- [`website/WEBSITE_STRATEGY.md`](../website/WEBSITE_STRATEGY.md)
