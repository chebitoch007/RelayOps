# SOP: Demo Projects

## Purpose

Step-by-step procedure for running, presenting, and maintaining the Lead Qualification demo system.

---

## When to Use

- When setting up the demo system for a presentation or screen share
- When recording the Loom walkthrough
- When testing after a system restart or ngrok URL change
- When updating the `/demo-projects` page with new assets

---

## Prerequisites

- Docker Desktop installed and running
- n8n Docker Compose file available on local machine
- ngrok installed and authenticated
- Access to Vercel dashboard and the n8n admin panel (`localhost:5678`)
- Access to the Google Sheets lead log

---

## Procedure 1: Starting the Demo System

1. Open Docker Desktop. Confirm it is running.
2. Open terminal. Navigate to the n8n Docker project folder.
3. Run: `docker-compose up -d`
4. Confirm n8n is running: open `http://localhost:5678` in a browser. Log in if prompted.
5. Open a new terminal tab. Run: `ngrok http 5678`
6. Copy the new ngrok HTTPS URL (e.g. `https://abc123.ngrok-free.app`).
7. In n8n:
   - Open the "Lead Qualification" workflow
   - Find the Webhook node
   - Check if the webhook URL matches the new ngrok URL
   - If it has changed: update the webhook URL in the node settings
   - Save the workflow
8. In Calendly:
   - Go to Settings → Webhooks
   - Find the n8n webhook entry
   - If the URL has changed: update it to the new ngrok URL + `/webhook/calendly` (or the correct path)
   - Save
9. Activate the n8n workflow (toggle at top-right of workflow editor → Active)
10. The system is now live. Proceed to testing.

---

## Procedure 2: Testing the Demo System

Run this before every presentation or recording.

1. Open the demo intake form (local dev: `npm run dev` → `localhost:3000`, or the Vercel deployment URL)
2. Submit a **qualified** test lead:
   - Use a real email address you can check
   - Enter a budget above the qualification threshold
   - Enter a pain point that clearly matches the qualifying criteria
3. Within 30 seconds, verify:
   - [ ] Google Sheets: new row added with lead data and qualification result = QUALIFIED
   - [ ] Email received at the test address: contains personalized message and Calendly booking link
   - [ ] n8n execution log: shows a successful run with the Qualified branch taken
4. Submit a **not qualified** test lead:
   - Use a different test email
   - Enter a low budget or a pain point outside the qualifying criteria
5. Within 30 seconds, verify:
   - [ ] Google Sheets: new row added with qualification result = NOT_QUALIFIED
   - [ ] Email received at the test address: polite decline message
   - [ ] n8n execution log: shows Not Qualified branch taken
6. If any step fails: check the n8n execution log for errors → diagnose before presenting

---

## Procedure 3: Presenting the Demo to a Prospect

**Format:** Live screen share or pre-recorded Loom (once Loom is recorded).

**Suggested flow (10 minutes total):**

1. **(1 min) Context:** "I built this to show exactly what I deliver — not a mock-up, a working system. I'll walk you through the architecture, then show it running live."
2. **(2 min) Architecture walkthrough:** Share screen on `/demo-projects`. Walk through the system diagram and the five build phases. Keep it high-level — avoid getting into implementation details unless they ask.
3. **(4 min) Live demo:**
   - Open the intake form
   - Submit a test lead (show the form being filled out, not just the result)
   - Switch to Google Sheets — show the row appearing in real time
   - Switch to email — show the qualified email with Calendly link arriving
   - Optionally: submit a not-qualified lead and show the different outcome
4. **(2 min) Relevance to their situation:** "The qualification criteria, the routing, and the copy are all configurable to your specific intake. For [their business], I'd adapt it to [specific thing from their discovery call]. It would take 5–7 days from deposit."
5. **(1 min) Next step:** "Happy to send a one-pager on what I'd build for you specifically, or we can keep talking now — whichever works."

**Key rule:** Never claim this is a live client system. If asked: "This is a reference build I made to demonstrate exactly what I deliver — not a client project." That is the honest answer and it is also a stronger proof point than a client system you can't share.

---

## Procedure 4: Recording the Loom Walkthrough

*(To be done — not yet completed as of July 2026)*

1. Run Procedure 1 (start system) and Procedure 2 (verify working)
2. Open Loom. Start recording (screen + camera optional)
3. Follow the presenting flow from Procedure 3, steps 1–4
4. Keep total time under 5 minutes (3–4 is ideal)
5. Stop recording. Wait for Loom to process.
6. Copy the embed URL
7. Open `app/demo-projects/page.tsx`
8. Find the Loom placeholder iframe section
9. Replace the placeholder `src` with the real Loom embed URL
10. Commit and deploy

---

## Procedure 5: Updating Demo Screenshots

*(To be done — not yet completed as of July 2026)*

Screenshots needed for `/demo-projects`:
- n8n workflow canvas (full workflow visible, nodes labeled)
- Intake form (the user-facing form)
- Google Sheets log (3–5 example rows, personal data masked)
- Calendly booking confirmation email (recipient blurred)
- n8n execution log (successful run)

Process:
1. Start the demo system (Procedure 1)
2. Run a test qualification (Procedure 2)
3. Take screenshots at each stage listed above
4. Crop and export as PNG at 2x resolution (for retina display)
5. Add to `public/demo-screenshots/` in the repo
6. Update the `<Image>` src props in `app/demo-projects/page.tsx` to point to real files
7. Commit and deploy

---

## Stopping the Demo System

1. Toggle the n8n workflow to Inactive
2. Stop ngrok (Ctrl+C in the ngrok terminal)
3. `docker-compose down` in the n8n folder (or leave running if using it again soon)

---

## References

- [`product/DEMO_PROJECT.md`](../product/DEMO_PROJECT.md) — full technical documentation
- [`engineering/ARCHITECTURE.md`](../engineering/ARCHITECTURE.md) — stack reference
- [`engineering/DEPLOYMENT.md`](../engineering/DEPLOYMENT.md) — deployment notes
