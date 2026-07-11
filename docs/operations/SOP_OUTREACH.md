# SOP: Outreach Execution

## Purpose

Step-by-step procedure for researching, drafting, sending, and tracking a cold outreach email. Follow this exactly. Every email, every time.

---

## When to Use

Before sending any first email or follow-up to a prospect.

---

## Prerequisites

- Access to the CRM (Google Sheets "RelayOps_MASTER_Outreach_Tracker")
- Access to Apollo.io (for email verification and research)
- Access to Zoho Mail (for sending from `brian@relayops.site`)
- Familiarity with Cold Outreach Standard v1.0 (`business/OUTREACH.md`)

---

## Phase 1: Research (before touching the email draft)

1. Open the CRM. Find the prospect row.
2. **Verify data integrity:**
   - Name, title, company, and email are all consistent with each other
   - The email address belongs to the right person (not a previous contact at the same company)
   - If any field looks suspect, go to Apollo.io and verify before proceeding
3. **Check status:**
   - Is the status `Ready To Contact`? If not, do not send — resolve whatever's blocking first.
   - Has this person already received an email? Check "Last Contact Date" and "Status" carefully.
4. **Find a personalization hook:**
   - Visit their website. Look for: specific service they sell, a case study, a client they highlight, a methodology they describe, any visible process
   - Search LinkedIn for a recent post from the founder or CEO
   - Search for podcast appearances (especially Smart Agency Masterclass, Agency Profit, similar shows)
   - Search for company news (awards, hires, rebrands, product launches)
   - Look at their job postings (signals capacity strain)
   - **You need at least one genuine, verifiable, specific observation.** If you cannot find one, do more research. Do not send without it.
5. Write the hook down in the Notes column of the CRM before drafting.

---

## Phase 2: Draft the Email

6. Open a new draft in Zoho Mail.
7. **Subject line:** Short (3–6 words), no question marks, no "quick question", not salesy. Example: "Your intake process" / "A question about [Company]" / "[Specific thing you noticed]"
8. **Body — follow this structure exactly:**
   - Line 1: The personalized observation. One sentence. Specific. True. Not a compliment — an observation.
   - Line 2 (optional, 1 sentence max): What that observation implies about their process or a gap it suggests.
   - Final line: One simple, genuine question. Not "Would you be open to a call?" — something that invites a real answer about their situation.
9. **Length:** 80–150 words total. Count them.
10. **Check against the v1.0 rules:**
    - [ ] No explicit pitch of RelayOps
    - [ ] No list of services
    - [ ] No request for a meeting or call
    - [ ] No AI/automation jargon
    - [ ] No more than one CTA
    - [ ] No guilt-tripping or urgency language
    - [ ] Everything stated is verifiable and true
11. Read it aloud. If it sounds like a sales email, rewrite it. If it sounds like a genuine, curious note from one founder to another, it's ready.

---

## Phase 3: Send

12. **Check the day and time:**
    - Is today Tuesday, Wednesday, or Thursday? If not, schedule for the next Tue–Thu.
    - What time zone is the recipient in? Target 8–11 AM their time.
    - Use the Nairobi scheduling reference in `business/OUTREACH.md` to calculate when to queue.
13. **Use Zoho Schedule Send.** Do not send manually in real time.
14. **Check spacing:** Is there another email going out within 45 minutes of this one? If yes, push this one back by 45–60 minutes.
15. **Check daily cap:** Have you already sent 8 first emails today? If yes, queue for tomorrow.
16. Schedule the send.

---

## Phase 4: Log in CRM

17. **Immediately after scheduling (not after it sends — schedule first, log second):**
    - Update "Status" → `Email Sent`
    - Update "Last Contact Date" → today's date
    - Update "Next Follow-up Date" → 3–4 days from send date (for FU1)
    - Add a note in "Notes" with: the personalization hook used, and any other context
18. Save the spreadsheet.

---

## Phase 5: Follow-Up (when due date arrives)

19. Open CRM. Filter for rows where "Next Follow-up Date" = today (or is overdue).
20. For each due follow-up:
    - Identify where in the sequence the prospect is (FU1, FU2, or FU3)
    - Draft the follow-up per the cadence rules in `business/OUTREACH.md`
    - FU1: Short, reference original question or add one new observation
    - FU2: Provide proof (link to demo system or specific asset) only if it genuinely exists
    - FU3: Close the loop politely, leave door open, no pressure
21. Apply the same send protocol (day/time/spacing/cap check) as Phase 3.
22. Log the follow-up in the CRM:
    - Update "Last Contact Date"
    - Update "Next Follow-up Date" (per cadence) — or mark as `Sequence Complete` if FU3 was sent
    - Note which follow-up was sent (FU1/FU2/FU3) in Notes

---

## Handling Replies

See `business/SALES_PLAYBOOK.md` Stage 3 for reply-handling guidance.

**Quick rule:** Reply within 4 hours. Match their tone and length. Answer their question before asking anything.

---

## Common Errors to Avoid

| Error | Consequence | How to prevent |
|---|---|---|
| Sending without verifying name/email consistency | Emailing the wrong person or using the wrong name | Always check Apollo before sending |
| Sending all follow-ups in one burst | Looks automated, bad for deliverability | Log and schedule each follow-up individually |
| Using AI/automation jargon in the email body | Triggers spam filters, reads as generic | Sell outcomes only — reread before sending |
| Sending on a weekend | Lower open rates, looks less professional | Always use Zoho Schedule Send |
| Sending to a real-estate prospect | Niche expansion not yet approved | Check the CRM status — `Researching` = do not send |
| Emailing Ayokay, Camberlion, or ThinkPod | Name/email mismatch — wrong person | Verify on Apollo first |

---

## References

- [`business/OUTREACH.md`](../business/OUTREACH.md) — Cold Outreach Standard v1.0 and sending protocol
- [`business/CRM.md`](../business/CRM.md) — CRM structure and status values
- [`business/SALES_PLAYBOOK.md`](../business/SALES_PLAYBOOK.md) — full pipeline
