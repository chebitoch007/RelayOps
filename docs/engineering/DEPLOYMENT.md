# Deployment

## Purpose

How to deploy both RelayOps systems — the public website and the Lead Qualification demo system.

---

## System 1: Website (relayops.site)

### Platform
Vercel (continuous deployment from the GitHub repo).

### Deployment Process
1. Push changes to the `main` branch of https://github.com/chebitoch007/RelayOps
2. Vercel automatically builds and deploys
3. Check the Vercel deployment log for build errors

### Environment Variables Required

| Variable | What it is | Status |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for the contact form | **Placeholder — not set** |

The contact form will not function until `NEXT_PUBLIC_FORMSPREE_ID` is set to a real Formspree form ID.

### Other Pending Setup

| Item | Status |
|---|---|
| Google Analytics (`G-BQP2H77QJ9`) | Code present in root layout; confirmed working |
| Google Search Console | DNS verification record present in Vercel DNS; activation step not confirmed |
| `sitemap.ts` | Code written; commit status unconfirmed |
| `robots.ts` | Code written; commit status unconfirmed |

---

## System 2: Lead Qualification Demo System

### Platform
- **App layer:** Vercel (same account as the website)
- **Automation orchestration:** n8n, self-hosted via Docker on a local machine
- **Public internet access for n8n:** ngrok tunnel

### Environment Variables (Vercel)
All credentials configured as Vercel environment variables. A mismatch between local dev and deployed environments was identified and resolved during the build phase. When adding new credentials, always set them in both local `.env.local` and the Vercel dashboard.

### n8n / ngrok Notes

- n8n runs locally via Docker. It must be running for any webhook-triggered flows to work.
- ngrok exposes n8n to the internet so Calendly and Gemini callbacks can reach it. **ngrok URLs change on restart** — any time n8n/ngrok is restarted, the webhook URLs registered in Calendly and other services must be updated.
- This is explicitly **not production-grade**. Before deploying for a real client, replace ngrok with a stable hosting approach (Railway, Render, a VPS, or n8n Cloud).

### Calendly Webhook Notes

Calendly's free plan has limitations around webhook signature verification. The demo system includes a specific patch for this — do not remove it or change the verification logic without understanding those constraints.

---

## Future Improvements

- Set `NEXT_PUBLIC_FORMSPREE_ID` to a real value
- Confirm `sitemap.ts` and `robots.ts` are committed and live
- Activate Google Search Console
- Replace ngrok with stable n8n hosting before first client deployment
- Document a formal "deploy checklist" for client system builds

---

## References

- [`ARCHITECTURE.md`](ARCHITECTURE.md)
- [`INTEGRATIONS.md`](INTEGRATIONS.md)
