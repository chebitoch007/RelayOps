# SOP: Project Setup

## Purpose

How to spin up a new client automation project from scratch — environment, repo, credentials, and infrastructure — so every project starts from a consistent, production-ready baseline.

---

## When to Use

After a client's deposit is confirmed and before writing any code.

---

## Prerequisites

- Deposit received
- Scope agreed (what is being built)
- Client credentials/access collected (or in progress — see `SOP_CLIENT_DELIVERY.md` Phase 2)
- Access to: Vercel, GitHub, Railway (or Render), n8n Cloud (or self-hosted), Supabase (or Airtable)

---

## Step 1: Create the Project Folder (Local)

```
RelayOps-Clients/
└── [ClientName]-[YYYY-MM]/
    ├── brief.md
    ├── credentials.md     ← never commit this to GitHub
    ├── build/
    │   └── (project code)
    └── delivery/
        ├── loom-link.md
        ├── explainer.md
        └── handoff-email.md
```

Fill in `brief.md` immediately:
```markdown
# [ClientName] — Project Brief

**Client:** [Name, Company, Email]
**Agreed scope:** [Exact list of what's being built]
**Not in scope:** [Exact list of exclusions]
**Price:** $[total] (50% deposit received [date], 50% due on delivery)
**Delivery date:** [date]
**Primary contact:** [client email/WhatsApp]
**Notes:** [anything unusual about this engagement]
```

---

## Step 2: Create the GitHub Repository

1. Go to https://github.com/chebitoch007
2. Create a new **private** repository: `relayops-[clientname]`
3. Initialize with a README
4. Clone locally into `[ClientName]-[YYYY-MM]/build/`

**Rule:** Client project repos are always private. Never commit credentials.

---

## Step 3: Bootstrap the Next.js Project

Use the same stack as the demo system:

```bash
cd build/
npx create-next-app@latest . --typescript --tailwind --app --src-dir=no --import-alias="@/*"
```

Install shared dependencies:
```bash
npm install framer-motion @google/generative-ai googleapis
npm install -D @types/node
```

Create `.env.local` immediately (do not commit):
```
GOOGLE_GEMINI_API_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=
CALENDLY_WEBHOOK_SECRET=
GMAIL_USER=
GMAIL_APP_PASSWORD=
N8N_WEBHOOK_URL=
```

Add `.env.local` to `.gitignore` (should already be there from CNA, but verify).

---

## Step 4: Set Up the Database

**Do not use Google Sheets for a client system.** Use one of:

### Option A: Supabase (recommended for most projects)
1. Create a new Supabase project at supabase.com
2. Create the leads table:
```sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  company text,
  budget text,
  pain_point text,
  qualification_result text,  -- QUALIFIED / MAYBE / NOT_QUALIFIED
  qualification_reasoning text,
  booking_confirmed boolean default false,
  booking_url text,
  notes text
);
```
3. Copy the Supabase URL and anon key to `.env.local`
4. Install the Supabase client: `npm install @supabase/supabase-js`

### Option B: Airtable
Use when the client wants to manage their own data in a familiar interface. Create a base with equivalent columns, use the Airtable API.

---

## Step 5: Set Up n8n (Production)

**Do not use ngrok for a client system.** Deploy n8n to Railway:

1. Go to railway.app → New Project → Deploy from Template → search "n8n"
2. Add environment variable: `N8N_BASIC_AUTH_ACTIVE=true`, `N8N_BASIC_AUTH_USER`, `N8N_BASIC_AUTH_PASSWORD`
3. Get the Railway-provided public URL (stable — does not change on restart)
4. Set this URL as `N8N_WEBHOOK_URL` in `.env.local` and Vercel

Import or recreate the Lead Qualification workflow from the demo system, adapting:
- Qualification criteria (calibrated to this client's ICP)
- Email copy (matched to their brand voice)
- Routing logic (their CRM, their Calendly, their email)

---

## Step 6: Configure Calendly

1. Use the client's existing Calendly account (preferred) or create one for them
2. Create or confirm a discovery call event type
3. Add a webhook in Calendly → Settings → Webhooks:
   - URL: `[n8n Railway URL]/webhook/calendly`
   - Events: `invitee.created`
4. Copy the webhook signing key to `.env.local` as `CALENDLY_WEBHOOK_SECRET`

---

## Step 7: Configure Gmail SMTP

Use the client's own Gmail (preferred) or a project-specific Gmail:
1. Enable 2FA on the Gmail account
2. Generate an App Password (Google Account → Security → App Passwords)
3. Add to `.env.local`: `GMAIL_USER`, `GMAIL_APP_PASSWORD`

---

## Step 8: Deploy to Vercel

1. Push the initial commit to GitHub
2. Go to vercel.com → Add New Project → Import from GitHub → select `relayops-[clientname]`
3. Add all environment variables from `.env.local` to the Vercel project settings
4. Deploy
5. Set the custom domain if the client has one (or use the Vercel-provided URL for now)

---

## Step 9: Verify the Full Stack

Before writing any business logic, confirm the infrastructure is connected:

- [ ] Next.js app deploys successfully on Vercel
- [ ] Supabase connection works (test with a simple read query)
- [ ] Gemini API key valid (test with a minimal prompt)
- [ ] n8n accessible at the Railway URL (log in to admin)
- [ ] Calendly webhook registered and pointing to Railway n8n URL
- [ ] Gmail SMTP sends a test email successfully
- [ ] n8n → Supabase connection works (test with a manual trigger)

If any step fails: resolve before proceeding. Do not build on a broken foundation.

---

## Step 10: Build

Infrastructure is ready. Now build the actual qualification logic, routing, and email copy per the agreed scope. Reference `product/DEMO_PROJECT.md` for the architectural blueprint.

---

## Checklist Summary

- [ ] Project folder created with `brief.md`
- [ ] Private GitHub repo created and cloned
- [ ] Next.js project bootstrapped with correct dependencies
- [ ] `.env.local` created and added to `.gitignore`
- [ ] Supabase (or Airtable) database created with leads table
- [ ] n8n deployed to Railway with stable public URL
- [ ] Calendly webhook configured
- [ ] Gmail SMTP app password generated
- [ ] All env vars added to Vercel dashboard
- [ ] Full stack connectivity verified (all 6 checks above passed)

---

## References

- [`product/DEMO_PROJECT.md`](../product/DEMO_PROJECT.md) — architectural reference
- [`engineering/ARCHITECTURE.md`](../engineering/ARCHITECTURE.md) — stack overview
- [`engineering/INTEGRATIONS.md`](../engineering/INTEGRATIONS.md) — all integrations and credential locations
- [`operations/SOP_CLIENT_DELIVERY.md`](SOP_CLIENT_DELIVERY.md) — what to do after the build
