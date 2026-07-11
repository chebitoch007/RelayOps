# Demo Project: AI Lead Qualification & Appointment Booking System

## Purpose

Document the flagship demo system — what it is, how it works, how to run it, and how to present it to prospects.

---

## Background

This system was built as a sales asset: a working, end-to-end automation that demonstrates exactly what RelayOps builds for clients. It is the primary proof point used in follow-up outreach (FU2) and on the `/demo-projects` page of the website. It is not a live client system — it runs on demo infrastructure (Google Sheets + ngrok).

All five build phases are complete. All three qualification branches (qualified / maybe / not qualified) are verified working end-to-end.

---

## Current State

| Item | Status |
|---|---|
| Build | ✅ Complete (all 5 phases) |
| End-to-end testing | ✅ All 3 branches verified |
| n8n workflow | ✅ Running (local Docker + ngrok) |
| Calendly integration | ✅ Working (free-plan patch applied) |
| Gmail SMTP | ✅ Working |
| Google Sheets logging | ✅ Working |
| `/demo-projects` page | ✅ Live (screenshots and Loom are still placeholders) |
| Loom walkthrough | ❌ Not yet recorded |
| Demo screenshots | ❌ Not yet captured |

---

## System Overview

A prospect (or Brian, during a demo) submits a lead intake form. The system:
1. Sends the submission to a Google Gemini AI model for qualification
2. Logs the lead to Google Sheets
3. Routes via n8n to one of three branches
4. Sends appropriate automated emails and (for qualified leads) a Calendly booking link

**Target time from form submission to qualification email:** under 30 seconds.

---

## Architecture

```
Lead submits intake form (Next.js frontend)
    ↓
API route sends data to Gemini (gemini-2.5-flash) with qualification criteria
    ↓
Gemini returns: QUALIFIED / MAYBE / NOT_QUALIFIED + reasoning
    ↓
Result + lead data logged to Google Sheets (service-account access)
    ↓
Webhook fires to n8n (via ngrok tunnel)
    ↓ (branch on qualification result)
├── QUALIFIED
│   ├── Send personalized email with Calendly booking link
│   └── (optional) Notify founder via email
├── MAYBE
│   ├── Send holding email ("we'll be in touch")
│   └── Log for manual review
└── NOT_QUALIFIED
    └── Send polite decline / alternative resources email
```

---

## Stack

| Component | Technology |
|---|---|
| Frontend | Next.js + TypeScript + Tailwind CSS + Framer Motion |
| AI qualification | Google Gemini `gemini-2.5-flash` (API) |
| Data storage | Google Sheets (service account JSON credential) |
| Orchestration | n8n (self-hosted, Docker) |
| Webhook tunnel | ngrok (local machine) |
| Booking | Calendly (free plan, webhook signature patched) |
| Email | Gmail SMTP |
| Hosting | Vercel (app layer) |

---

## Build Phase History

| Phase | What was built |
|---|---|
| Phase 1 | Lead intake form (Next.js), API route, basic Gemini qualification |
| Phase 2 | Google Sheets logging via service account |
| Phase 3 | n8n workflow with branch routing (qualified/maybe/not qualified) |
| Phase 4 | Calendly integration + booking link delivery to qualified leads |
| Phase 5 | Gmail SMTP email sending for all three branches + Calendly webhook signature patch |

---

## How to Run the Demo System

### Prerequisites

- Docker Desktop running on local machine
- n8n container running (`docker-compose up -d` in the n8n project folder)
- ngrok tunnel active and pointed at n8n's port (default: 5678)
- Environment variables set in Vercel (all credentials) and `.env.local` (for local dev)
- Calendly webhook URL updated if ngrok URL changed since last run

### Starting a Demo Session

1. Start Docker Desktop
2. In terminal: `cd <n8n-docker-folder> && docker-compose up -d`
3. Start ngrok: `ngrok http 5678`
4. Copy the new ngrok URL
5. Log into n8n (`localhost:5678`)
6. Update the webhook node URL in the workflow if the ngrok URL changed
7. Update the Calendly webhook URL in Calendly settings if the ngrok URL changed
8. Activate the n8n workflow (toggle to Active)
9. Open the demo app (local: `npm run dev`, or use the Vercel deployment)
10. Submit a test lead using the intake form
11. Verify: Google Sheets logged the entry, email received, (if qualified) Calendly link delivered

### Stopping

1. Toggle n8n workflow to Inactive
2. Stop ngrok (Ctrl+C)
3. `docker-compose down` (or leave running if continuing soon)

---

## Presenting to a Prospect

The demo is designed to be shown on a screen share or via a Loom recording. Suggested flow:

1. **Context (1 min):** "I'll show you exactly what I built as a reference — it's a lead qualification and booking system. I'll walk you through what it does and then show it running live."
2. **Explain the flow (2 min):** Walk through the architecture diagram on `/demo-projects`. Explain each step.
3. **Live demo (3 min):** Submit a test lead. Show the Sheets logging in real time. Show the email that arrives. If qualified, show the Calendly booking link.
4. **Close (1 min):** "This is exactly what I'd adapt to your intake process. It takes 5–7 days from deposit to live. Happy to walk through what that would look like specifically for [their situation]."

**Key point:** Never claim this system is a live client system. It is a reference build. If asked, say: "This is a reference system I built to show exactly what I deliver — not a client project."

---

## Known Limitations

- **Google Sheets is not scalable.** Works for the demo. A real client system needs a real database.
- **ngrok is not stable.** URLs change on restart. Not suitable for production.
- **Calendly free plan limitations.** The webhook signature verification was patched specifically for free-plan constraints. May need rework for paid-plan Calendly.
- **Local machine dependency.** The demo requires Brian's local machine to be running Docker + ngrok. It is not fully cloud-deployed.

---

## Pending Assets

- [ ] Loom walkthrough video (record, get embed URL, add to `/demo-projects`)
- [ ] Screenshots: n8n workflow canvas, Typebot/form editor view, Sheets logging, booking confirmation email
- [ ] Consider fully cloud-deploying n8n (Railway/Render) for a more reliable demo environment

---

## References

- [`engineering/ARCHITECTURE.md`](../engineering/ARCHITECTURE.md) — full technical architecture
- [`engineering/INTEGRATIONS.md`](../engineering/INTEGRATIONS.md) — credential locations
- [`engineering/DEPLOYMENT.md`](../engineering/DEPLOYMENT.md) — deployment procedures
- [`website/WEBSITE_STRATEGY.md`](../website/WEBSITE_STRATEGY.md) — how `/demo-projects` fits the conversion flow
- [`operations/SOP_DEMO_PROJECTS.md`](../operations/SOP_DEMO_PROJECTS.md) — step-by-step demo execution
