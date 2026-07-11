# User Flows

## Purpose

Document every meaningful user journey through RelayOps systems — prospect-facing and internal operational flows.

---

## Flow 1: Cold Email Prospect → Discovery Call

The primary conversion flow. Every website decision is built around this.

```
1. Prospect receives cold email from Brian
2. Prospect opens email (or doesn't — FU1/FU2/FU3 re-trigger)
3. Prospect finds the email interesting → clicks through to relayops.site
4. Prospect lands on homepage
5. Prospect reads hero, services, process, about-founder sections
6. Prospect wants more proof → visits /demo-projects
7. Prospect reads architecture, watches Loom (when available), sees screenshots
8. Prospect decides to engage:
   A. Books discovery call via primary CTA (Calendly)
   B. Sends message via contact form
   C. Emails brian@relayops.site directly (tertiary CTA)
9. Brian receives notification, responds within 4 hours
10. Discovery call happens → proposal sent → deposit received → build begins
```

**Current gaps in this flow:**
- Loom walkthrough on `/demo-projects` is a placeholder — prospects clicking to watch see nothing
- Calendly URL is a placeholder — prospects clicking to book land on a broken link
- Contact form Formspree ID is a placeholder — form submissions go nowhere

---

## Flow 2: Demo System — Lead Qualification (Qualified Branch)

```
1. Lead visits the demo intake form (relayops.site or separate demo URL)
2. Lead fills out: name, email, company, monthly budget, primary pain point
3. Form submits → Next.js API route fires
4. API sends lead data to Gemini (gemini-2.5-flash) with qualification criteria
5. Gemini evaluates → returns QUALIFIED + reasoning
6. Lead data + qualification result logged to Google Sheets (row added)
7. Webhook fires to n8n via ngrok
8. n8n branches to "Qualified" path
9. Gmail SMTP sends personalized email to lead with Calendly booking link
10. (Optional) Founder notification email sent to brian@relayops.site
11. Lead receives email, clicks booking link, schedules a time
12. Calendly fires booking webhook to n8n
13. n8n logs the booking to Sheets (booking confirmed column updated)
14. Calendly sends its own confirmation email to lead
```

---

## Flow 3: Demo System — Lead Qualification (Maybe Branch)

```
Steps 1–8 same as Flow 2, but Gemini returns MAYBE

9. n8n branches to "Maybe" path
10. Gmail SMTP sends holding email: "We've received your inquiry and will be in touch within 24 hours"
11. Row in Sheets is tagged "Maybe — manual review"
12. Founder reviews manually, decides to qualify or disqualify
```

---

## Flow 4: Demo System — Lead Qualification (Not Qualified Branch)

```
Steps 1–8 same as Flow 2, but Gemini returns NOT_QUALIFIED

9. n8n branches to "Not Qualified" path
10. Gmail SMTP sends polite decline with optional alternative resources
11. Row in Sheets is tagged "Not Qualified"
```

---

## Flow 5: Outreach — First Email to Client Closed

```
1. Prospect sourced from Apollo/Clutch/Podcast, added to CRM
2. Research done, hook identified, status → Ready To Contact
3. Email drafted per v1.0 standard, sent via Zoho (scheduled)
4. CRM updated: Email Sent, Last Contact Date, Next Follow-up Date
5. If no reply by FU1 date: FU1 drafted and sent, CRM updated
6. If no reply by FU2 date: FU2 drafted and sent (with proof/demo link), CRM updated
7. If no reply by FU3 date: FU3 drafted and sent (close the loop), CRM updated → Sequence Complete
8. If reply received at any step:
   a. Reply logged in CRM → Status: Replied
   b. Brian responds within 4 hours
   c. Conversation → discovery call scheduled → Status: Call Booked
   d. Discovery call → proposal sent → Status: Proposal Sent
   e. Deposit received → Status: Closed Won → build begins
```

---

## Flow 6: Client Project — Deposit to Delivery

```
1. Deposit invoice sent (50% of agreed price)
2. Deposit received → project begins
3. Kickoff message sent to client: what will be built, what's needed from them, delivery date
4. Client provides: access credentials, example leads, calendar access
5. Brian builds the automation system (target: 5–7 business days)
6. Internal testing: all branches verified working
7. Live handoff:
   a. System handed over to client with access credentials
   b. Loom walkthrough recorded and shared
   c. One-page explainer document sent
8. Client reviews (1–2 days)
9. Final balance invoice sent (50% remaining)
10. Balance received
11. Testimonial requested
12. Case study prepared (with client permission) for website
```

---

## References

- [`product/PRODUCT.md`](PRODUCT.md)
- [`product/DEMO_PROJECT.md`](DEMO_PROJECT.md)
- [`business/SALES_PLAYBOOK.md`](../business/SALES_PLAYBOOK.md)
- [`operations/SOP_CLIENT_DELIVERY.md`](../operations/SOP_CLIENT_DELIVERY.md)
- [`website/WEBSITE_STRATEGY.md`](../website/WEBSITE_STRATEGY.md)
