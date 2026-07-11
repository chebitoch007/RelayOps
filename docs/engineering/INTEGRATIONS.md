# Integrations

## Purpose

Every external service RelayOps uses, what it does, and where credentials live.

---

## Website Integrations

| Service | Purpose | Credential location | Status |
|---|---|---|---|
| Vercel | Hosting / CD | Vercel dashboard | ✅ Active |
| Formspree | Contact form submissions | `NEXT_PUBLIC_FORMSPREE_ID` env var | ⚠️ Placeholder — needs real Form ID |
| Google Analytics | Site analytics | Hardcoded in `app/layout.tsx` (`G-BQP2H77QJ9`) | ✅ Active |
| Google Search Console | Search indexing | DNS verification in Vercel DNS | ⚠️ Activation not confirmed |
| Calendly | Discovery call booking | Placeholder URL in `CTASection.tsx` | ⚠️ Needs real URL |
| GitHub | Version control + public repo | https://github.com/chebitoch007/RelayOps | ✅ Active |

---

## Demo System Integrations

| Service | Purpose | Credential location | Notes |
|---|---|---|---|
| Google Gemini (`gemini-2.5-flash`) | Lead qualification AI | Vercel env var | Migrated from deprecated `gemini-1.5-pro` |
| Google Sheets | Lead data storage | Vercel env var (service account JSON) | Service-account access, not OAuth |
| Google Sheets API | Read/write to Sheets | Same service account | — |
| Calendly | Booking link + webhook | Vercel env var (webhook secret) | Signature verification patched for free plan |
| Gmail SMTP | Confirmation + follow-up emails | Vercel env var | — |
| n8n (self-hosted) | Workflow orchestration + routing | Docker on local machine | Exposed via ngrok |
| ngrok | Public internet access for n8n webhooks | Local machine | URLs change on restart — must update webhooks in Calendly after any restart |

---

## Outreach Integrations

| Service | Purpose | Notes |
|---|---|---|
| Zoho Mail | Business email (`brian@relayops.site`) | Free tier, 1 user; Schedule Send used for time-zone targeting |
| Apollo.io | Prospect sourcing + email finding | Used with ICP filters |
| Hunter.io | Email lookup and verification | Used for specific email lookups |
| Clutch.co | Agency directory prospecting | Browsed manually |
| Google Sheets | CRM / outreach tracker | "RelayOps_MASTER_Outreach_Tracker" — see `business/CRM.md` |
| mail-tester.com | Deliverability testing | Score: 9.2–9.4/10 (confirmed clean) |
| MXToolbox / EasyDMARC | DNS/email authentication checks | Used during DMARC setup |

---

## Future Integrations (not yet built)

| Service | Purpose | Priority |
|---|---|---|
| Stripe or PayPal | Client deposit collection | High — needed before first client |
| Supabase or Postgres | Real database for client production systems | Medium |
| n8n Cloud or Railway-hosted n8n | Replace ngrok for stable webhook hosting | Medium |
| A real CRM tool (HubSpot free / Notion / Airtable) | Replace Google Sheets for outreach tracking | Low — sheets works for current volume |

---

## References

- [`ARCHITECTURE.md`](ARCHITECTURE.md)
- [`DEPLOYMENT.md`](DEPLOYMENT.md)
