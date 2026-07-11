# Sales Playbook

## Purpose

The end-to-end guide for moving a prospect from zero to a signed, paying client. Covers prospecting, outreach, discovery, proposal, and delivery handoff.

---

## Background

RelayOps has no inbound channel yet. All client acquisition is outbound — personalized cold email, one prospect at a time. This playbook captures the system as it exists now and what needs to be built before a prospect actually replies.

---

## Current State

The full outreach system (prospecting, email drafting, sending, CRM tracking) is operational. The post-reply pipeline (discovery call script, proposal template, deposit collection, project kickoff) has not yet been formally built. These will be needed the moment a prospect actually responds.

---

## The Full Funnel

**Prospects → Replies → Conversations → Discovery Calls → Proposals → Clients**

Never measure success at an intermediate stage. The only metric that counts is Clients.

---

## Stage 1: Prospecting

**Goal:** Find a decision-maker at a company that matches the ICP, with a verifiable personalization hook.

**Sources (in rough priority order):**
1. Apollo.io — People search with ICP filters (title: Founder/CEO/Owner, company size: 5–20, industry: Marketing Agency/Digital Agency)
2. Clutch.co — Agency directory, browsable by category, location, and rating
3. Smart Agency Masterclass podcast — Guest companies; founders who appear on podcasts are typically founder-led and sales-aware
4. Hunter.io — Email lookup and verification for companies sourced through other channels

**Research checklist before adding to CRM:**
- [ ] Confirm company is actually a marketing/service agency (not a photography studio, brokerage, etc.)
- [ ] Confirm the contact is still the current decision-maker (check LinkedIn for recent role changes)
- [ ] Find a real personalization hook (podcast, post, case study, hiring, service offering)
- [ ] Verify name, title, and email are internally consistent in the row
- [ ] Cross-check email against Apollo for deliverability

**See:** [`CRM.md`](CRM.md) for column definitions and data-quality rules.

---

## Stage 2: Outreach

**Goal:** Earn a genuine reply.

Follow Cold Outreach Standard v1.0 exactly. See [`OUTREACH.md`](OUTREACH.md) for the complete standard, structure, cadence, and sending protocol.

One-line summary: 80–150 words, one personalized observation, one question, no pitch, one CTA maximum.

---

## Stage 3: Reply Handling

**Goal:** Keep the conversation moving without pushing.

When a prospect replies (regardless of content — question, skepticism, interest, or objection):

1. **Reply within 4 hours** (or as fast as possible — speed matters)
2. **Match their tone and length** — if they wrote 2 sentences, write 3, not 10
3. **Answer their question directly** before asking anything else
4. **If they're interested:** offer a 15-minute call — not a sales pitch. Frame it as: "Happy to show you a quick example of what this looks like in practice — a 15-minute call is usually enough."
5. **If they're skeptical:** acknowledge it, provide a specific proof point (link to the demo system, a specific outcome), and ask one question
6. **If they say they're not interested:** thank them, leave the door open ("Makes sense — if anything changes or you're curious later, happy to connect"), do not re-engage

**Not built yet:** a formal reply-handling script. Build this before the first reply arrives.

---

## Stage 4: Discovery Call

**Goal:** Understand the prospect's actual problem well enough to propose the right solution.

**Call structure (target: 15–30 minutes):**
1. Thank them briefly, then ask: "Can you walk me through what your lead intake process looks like right now?"
2. Listen. Do not pitch. Ask follow-up questions to understand volume, pain, and current tools.
3. Clarify: "What's the most painful part of this — is it the speed, the follow-up, the qualification, or something else?"
4. Summarize back: "So it sounds like [X] is happening and [Y] is the cost of that — is that right?"
5. Propose: "Here's what I'd build for you — [one or two automation pieces that directly address what they described]." Quote a rough price range.
6. Close: "If that sounds right, I can send over a one-page summary of what I'd build. If you want to move forward, we'd start with a 50% deposit and I'd have it live within 7 days."

**Not built yet:** a formal discovery call script. Build this before the first call.

---

## Stage 5: Proposal

**Target:** A one-page document (email or PDF) covering:
- The specific problem being solved
- The exact system being built (components, integrations)
- What is explicitly **not** included (scope clarity prevents disputes)
- Timeline (5–7 days)
- Price (total) and payment structure (50/50)
- One clear next step: "To begin, I'll send you a payment link for the deposit. Once that's received, I start the following day."

**Not built yet:** a formal proposal template. Build this before the first reply arrives.

---

## Stage 6: Deposit and Kickoff

1. Send deposit invoice (50% of agreed price) via a payment method to be established
2. Confirm receipt
3. Send a project kickoff message confirming: what will be built, what you need from them (credentials, example leads, calendar access), and the delivery date
4. Begin build

---

## Stage 7: Delivery

**Target:** 5–7 business days from deposit receipt.

Delivery package:
- Live, working system
- Loom walkthrough video explaining how it works and how to manage it
- One-page explainer document (what it does, what to expect, how to contact you if something breaks)
- Request for remaining 50% payment
- Request for a testimonial (after they've seen it work for 2–3 days)

---

## Stage 8: Post-Delivery

- Request a written or video testimonial
- Ask: "Is there anyone else you work with who deals with the same problem?" — referral ask
- Log the outcome in the CRM and update the case study on the website when permission is granted

---

## Known Gaps (to build before first reply)

- [ ] Reply-handling script
- [ ] Discovery call script
- [ ] Proposal template (one-page)
- [ ] Payment collection method (Stripe, PayPal, etc.)
- [ ] Project kickoff message template
- [ ] Delivery package template (Loom outline, one-page explainer structure)

---

## Future Improvements

- Formalize each gap above as a proper template or SOP
- Track time-to-reply and reply-to-close conversion rates once the pipeline has data
- Add testimonial collection as a formal step with a specific ask script

---

## References

- [`OUTREACH.md`](OUTREACH.md) — Cold Outreach Standard v1.0
- [`CRM.md`](CRM.md) — prospect tracking
- [`PRICING.md`](PRICING.md) — price ranges and deal structure
- [`operations/SOP_OUTREACH.md`](../operations/SOP_OUTREACH.md) — step-by-step outreach execution
- [`operations/SOP_CLIENT_DELIVERY.md`](../operations/SOP_CLIENT_DELIVERY.md) — delivery procedure
