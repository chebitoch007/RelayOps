# Decisions

## Purpose

Log every major decision made for RelayOps — what was decided, when, why, and what was rejected. This file exists so that six months from now, no one has to guess why something is the way it is.

---

## Background

These decisions were accumulated across multiple AI chat sessions. Dates are approximate based on context clues in the source conversations, not literal timestamps.

---

## Template

```markdown
## YYYY-MM-DD — [Short title]

**Decision:** [What was decided]
**Reason:** [Why]
**Alternatives rejected:** [What else was considered and why it was passed over]
**Status:** Active / Superseded / Under review
```

---

## Decisions

---

### 2026-06 — Business model: services agency, not SaaS

**Decision:** RelayOps is a done-for-you services business, not a SaaS product.
**Reason:** With limited capital and no existing audience, a service model reaches the first dollar in weeks. Building a SaaS product takes months of unpaid work before any revenue can be tested.
**Alternatives rejected:** SaaS-first (too slow), dropshipping (off-model), AI content (no leverage).
**Status:** Active

---

### 2026-06 — Niche: marketing/service agencies only (for now)

**Decision:** Focus exclusively on marketing agencies and service businesses for outreach. Do not pursue real estate brokerages, even though 14+ prospects have been sourced.
**Reason:** Avoid diluting focus across too many verticals before the first client is closed. The real-estate opportunity is real but represents a different buyer psychology and would require separate messaging.
**Alternatives rejected:** Immediate real-estate expansion (deferred, not rejected permanently).
**Status:** Active — real-estate niche is an **open strategic question**, not a closed door. Decision to expand must be made explicitly before any real-estate prospect is emailed.

---

### 2026-06 — Acquisition: personalized cold email only, one at a time

**Decision:** All client acquisition happens through personalized, individually-researched cold email. No mail-merge, no bulk outreach.
**Reason:** No ad budget, no existing audience, no social following. Personalized outbound is the only lever available that doesn't require upfront capital. "Never generic mail-merge spam" is an explicit constraint.
**Alternatives rejected:** Paid ads (no budget), social media content growth (too slow, not current priority), inbound SEO (too slow).
**Status:** Active

---

### 2026-06 — Pricing: project-based, $300–800 range

**Decision:** Charge per project in the $300–800 range, with a 50/50 deposit structure. Price at the low end for first clients to reduce friction and secure testimonials.
**Reason:** Minimizes buyer friction at the pre-credibility stage. Getting paid less for the first deal is better than not closing at all.
**Alternatives rejected:** Subscription/retainer (not discussed, no rationale for it yet at this stage).
**Status:** Active — to be revisited after first client is closed.

---

### 2026-06 — Scope-down rule (not discount)

**Decision:** If a prospect pushes back on price, reduce the scope — do not discount the same deliverable.
**Reason:** Discounting devalues the work and sets a bad precedent. Reducing scope keeps the price-to-value ratio intact and manages delivery risk.
**Status:** Active

---

### 2026-06 — AI model: migrated Gemini 1.5-pro → 2.5-flash

**Decision:** Use `gemini-2.5-flash` as the AI model for the Lead Qualification demo system.
**Reason:** Google deprecated `gemini-1.5-pro`, forcing a migration. `gemini-2.5-flash` was selected as the appropriate replacement.
**Alternatives rejected:** Staying on the deprecated model (not viable).
**Status:** Active

---

### 2026-06 — Infrastructure: n8n self-hosted (Docker + ngrok), not n8n Cloud

**Decision:** Run n8n self-hosted via Docker, exposed to the internet via ngrok, rather than using n8n Cloud.
**Reason:** Cost control for a pre-revenue business. The monthly cost of n8n Cloud can't be justified before the first client pays.
**Alternatives rejected:** n8n Cloud (adds recurring cost pre-revenue).
**Status:** Active — with acknowledged technical debt: ngrok is not stable or production-grade. Client-facing deployments will need a more robust hosting approach.

---

### 2026-06 — Database: Google Sheets, not a real DB

**Decision:** Use Google Sheets (via service account) as the data store for the demo Lead Qualification System.
**Reason:** Fast to build, zero infrastructure cost, adequate for demo purposes and low volume.
**Alternatives rejected:** Postgres, Firebase, and other real databases — treated as unnecessary complexity for the current stage.
**Status:** Active for the demo system. **Will not scale past a single-client proof of concept.** A real database will be needed before RelayOps deploys a production system for a paying client.

---

### 2026-06/07 — DMARC tightened: `p=none` → `p=quarantine`

**Decision:** Upgrade DMARC policy from `p=none` to `p=quarantine`.
**Reason:** After 10 days of clean warmup with zero authentication failures across Gmail, Yahoo, AOL, and AT&T, tightening was safe and appropriate.
**Alternatives rejected:** Staying at `p=none` indefinitely (weaker spam protection, no reason to keep it loose once warmup proved clean).
**Status:** Active

---

### 2026-06 — Cold Outreach Standard v1.0 formalized

**Decision:** All outreach must follow Cold Outreach Standard v1.0 (documented in `OUTREACH.md`).
**Reason:** Manual review of sent `.eml` files revealed early emails were pitch-heavy, jargon-laden, and multi-CTA — direct violations of proven cold email best practices and the likely cause of zero replies.
**Alternatives rejected:** Continuing with the ad-hoc, pitch-heavy email style already in use (explicitly rejected after the zero-reply diagnosis).
**Status:** Active

---

### 2026-06/07 — Sending Protocol formalized

**Decision:** Send emails only Tuesday–Thursday, 8–11 AM recipient local time, 45–60 min spacing, max 20/day combined.
**Reason:** Evidence-based consensus on optimal email open/reply rates. Avoids weekend burial and inbox chaos on Mondays/Fridays.
**Alternatives rejected:** Sending at arbitrary times / any day (explicitly rejected after founder asked about a Saturday 12:31 AM send).
**Status:** Active — see `OUTREACH.md` for the full Nairobi-time scheduling reference.

---

### 2026-06 — Griffin Marketing Agency removed from prospect list

**Decision:** Removed Griffin Marketing Agency from the CRM.
**Reason:** Research revealed it is a real estate photography company, not a marketing agency. It did not match the ICP.
**Alternatives rejected:** Keeping it as a Score 4 "good fit" (would have been a research/fabrication error).
**Status:** Active

---

### 2026-06 — Element Three contact changed: Tiffany Sauder → Kyler Mason

**Decision:** Re-addressed the Element Three prospect row to Kyler Mason (current CEO) from Tiffany Sauder (former CEO).
**Reason:** Sauder stepped down as CEO in February 2025. Emailing her as if she were still CEO would look like stale, lazy research.
**Status:** Active

---

### 2026-06/07 — Hybrid Marketing (Greg Peters' second agency) deprioritized

**Decision:** Deprioritized Hybrid Marketing behind 4B Marketing in the outreach queue.
**Reason:** The same founder (Greg Peters) runs both agencies. Emailing both simultaneously risks looking duplicative and sloppy.
**Status:** Active

---

### 2026-07 — Zero-reply diagnosis: template quality, not deliverability

**Decision:** The root cause of zero replies was message quality (pre-v1.0 pitchy emails), not deliverability.
**Reason:** Mail-tester scored 9.2–9.4/10; a live test to a fresh Gmail inbox landed correctly. Manual `.eml` review found violations of what became v1.0 in a meaningful portion of sent emails.
**Alternatives rejected:** Assuming deliverability failure (ruled out by testing); assuming it was just bad luck / insufficient volume (not a satisfying explanation given the pattern).
**Status:** Active — corrective action (reset follow-ups to pre-v1.0 prospects) is still pending.

---

### 2026-06 — Follow-up cadence fixed (not burst)

**Decision:** Follow-ups must be spaced per the formal cadence (FU1 at 3–4 days, FU2 at +4–6 days, FU3 at +7–10 days).
**Reason:** The June 7–12 batch had all follow-ups sent in a single burst on the same day — flagged as a cadence violation and a process failure.
**Alternatives rejected:** Sending all follow-ups in a burst (the very thing that happened by accident and was corrected).
**Status:** Active

---

### 2026-06 — Follow-up rule: always add a new angle

**Decision:** Every follow-up must add a new observation, angle, or piece of proof — never just "bump" the thread.
**Reason:** Generic "just following up" bumps were diagnosed as low-value and likely contributing to non-replies. They add no reason for the prospect to respond.
**Alternatives rejected:** Continuing with generic one-line bump follow-ups (the pattern that was already in use for most early batches).
**Status:** Active

---

## Future Decisions to Make

- Real-estate niche expansion — yes or no?
- Footer nav update — match to Navbar or introduce shared `navLinks` constant?
- Solutions pages — next priority or not?
- Pricing evolution — add retainers/packages when?
- CRM tool migration — when does Google Sheets stop being enough?
- Long-term vision — what does RelayOps look like at 5 clients? 20 clients?

---

## References

- [`BUSINESS_MODEL.md`](BUSINESS_MODEL.md)
- [`OUTREACH.md`](OUTREACH.md)
- [`CRM.md`](CRM.md)
