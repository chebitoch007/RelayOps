# SOP: Client Delivery

## Purpose

Step-by-step procedure for everything that happens after a client pays a deposit — from project kickoff through final payment and testimonial collection.

---

## When to Use

The moment a client's deposit is confirmed received.

---

## Prerequisites

- Deposit (50%) received and confirmed
- Agreed scope documented (what is being built, what is not)
- Agreed price and delivery date confirmed
- Client has agreed to the 50/50 payment structure

---

## Phase 1: Kickoff (Day 0 — same day deposit received)

1. Send the project kickoff message to the client. It must include:
   - Confirmation of what will be built (specific components, not vague)
   - Explicit list of what is NOT included (scope protection)
   - What you need from them (credentials, access, example data) and by when
   - Confirmed delivery date (5–7 business days from today)
   - How to reach Brian during the build (email response time commitment)

2. Log in CRM:
   - Status → `Closed Won`
   - Note: deposit amount, date received, delivery date, scope summary

3. Create a project folder (local machine):
   ```
   RelayOps-Clients/
   └── [ClientName]-[YYYY-MM]/
       ├── brief.md          ← scope, agreed price, delivery date, contact
       ├── credentials.md    ← access details provided by client (store securely)
       ├── build/            ← project code
       └── delivery/         ← handoff package files
   ```

---

## Phase 2: Requirements Gathering (Day 0–1)

4. Collect from the client everything needed to build:
   - Their lead intake form (or requirements for a new one)
   - Example leads (names, emails, budgets, pain points — to calibrate Gemini qualification criteria)
   - Calendar/Calendly access (for booking integrations)
   - CRM credentials (if integrating with their existing CRM)
   - Brand voice notes (for AI-written emails — tone, what to avoid)
   - Any existing tools in their stack (so you know what to integrate with vs. replace)

5. If client is slow to respond on credentials: send one follow-up. If still no response by Day 2, flag the delay and extend the delivery date accordingly — do not absorb their delay into your build window.

---

## Phase 3: Build (Day 1–5)

6. Build the automation system per the agreed scope.

7. **Architecture:** Do not use ngrok or Google Sheets for a live client system. Use:
   - A real database: Supabase, Airtable, or Postgres on Railway/Render
   - A stable n8n deployment: Railway, Render, or n8n Cloud
   - Vercel for the app layer (same as the demo)

8. **Reference:** The demo system (`product/DEMO_PROJECT.md`) is the architectural blueprint — adapt it for the client's specific intake form, qualification criteria, and email copy.

9. **Testing checklist before delivery:**
   - [ ] Qualified branch: lead submits → AI qualifies → Sheets/DB logs → email sent → booking link delivered
   - [ ] Maybe branch: lead submits → AI flags → email sent → flagged for manual review
   - [ ] Not-qualified branch: lead submits → AI declines → polite decline email sent
   - [ ] Edge case: empty form fields handled gracefully (no crash)
   - [ ] Edge case: duplicate submission from same email (no duplicate row in DB)
   - [ ] Client's calendar correctly synced (no double-booking)
   - [ ] All email copy reviewed for accuracy and tone
   - [ ] All credentials and access scoped correctly (client owns their own data)

---

## Phase 4: Delivery (Day 5–7)

10. **Record a Loom walkthrough** (target: 5–8 minutes):
    - Overview of what was built and why each piece exists
    - Live demo of the full flow (qualified lead, not-qualified lead)
    - How to access each component (n8n, DB, Calendly, email logs)
    - What to do if something breaks (who to contact, what to check first)

11. **Write the one-page explainer document:**
    - What the system does (in plain English, not technical)
    - What happens automatically vs. what still requires their attention
    - How to update the qualification criteria if their ICP changes
    - Brian's contact details for issues

12. **Deliver to client:**
    - Share access credentials for all components
    - Send the Loom link
    - Send the one-page explainer PDF
    - Send a brief email summary: "Your system is live. Here's what I've sent you and how to reach me."

13. **Send the final invoice** (50% balance):
    - Amount: remaining 50% of agreed price
    - Due: on delivery (or within 3 days if client wants to verify first — agree this upfront)
    - Include payment link

---

## Phase 5: Post-Delivery (Day 7–10)

14. Follow up 2–3 days after delivery to confirm everything is working as expected. If there are issues, fix them (one round of tweaks is included in scope).

15. **Request a testimonial** once the client has seen the system work:
    - Timing: after at least one real lead has gone through the system
    - Ask: "If you're happy with how it's working, a short testimonial would mean a lot — even just a sentence or two about what it's replaced for you."
    - Format preference: written quote (easiest for them); video testimonial (highest value for the website)
    - Permission: always confirm in writing that they're okay with their name and company being associated with the quote

16. **Ask for a referral:**
    - "Is there anyone else you work with — another agency owner or service business — who deals with the same problem? Happy to reach out to them directly if you think they'd find this useful."

17. **Update the CRM and website:**
    - CRM: add deal value to the record, note testimonial status, close the row
    - Website: add case study / testimonial when permission is confirmed

---

## What Not to Do

- Do not use Google Sheets as the production database for a real client system
- Do not use ngrok for a live client deployment
- Do not absorb a client's delays into your build window — communicate and adjust dates
- Do not deliver without a Loom walkthrough — clients who don't understand what was built generate support tickets and payment disputes
- Do not request the testimonial immediately after delivery — wait until the system has actually processed a real lead

---

## Future Improvements

- Build a formal one-page proposal template (referenced in `SALES_PLAYBOOK.md`)
- Build the one-page explainer document template
- Establish a standard payment method (Stripe or PayPal) with a payment link template
- Define a post-delivery support window (e.g. 14 days of included fixes, then hourly after)

---

## References

- [`product/PRODUCT.md`](../product/PRODUCT.md) — service offerings and delivery standard
- [`product/DEMO_PROJECT.md`](../product/DEMO_PROJECT.md) — reference architecture
- [`business/SALES_PLAYBOOK.md`](../business/SALES_PLAYBOOK.md) — full pipeline
- [`business/PRICING.md`](../business/PRICING.md) — pricing and deal structure
- [`operations/SOP_PROJECT_SETUP.md`](SOP_PROJECT_SETUP.md) — how to spin up the project environment
