# CRM

## Purpose

Document the CRM structure, column definitions, status values, scoring system, and data-quality rules.

---

## Background

The CRM is a Google Sheets workbook called "RelayOps_MASTER_Outreach_Tracker." It has existed across at least four uploaded versions over the course of the project with overlapping legacy sheets. Multiple re-uploads and copy-paste operations have caused name/email mismatches.

---

## Current State

The CRM is the system of record for all prospect data. Multiple legacy sheets exist — always treat the most recently uploaded file as canonical. If two uploaded CRMs disagree, flag it rather than silently picking one.

---

## Standards

### Canonical Columns (Pipeline sheet)

| Column | Description |
|---|---|
| Company | Company name |
| Website | Company website URL |
| Prospect Name | First and last name of the decision-maker being emailed |
| Title | Their job title |
| Email | Their business email address |
| LinkedIn | Their LinkedIn profile URL |
| Industry | Primary industry (e.g. "Marketing Agency", "SEO Agency") |
| Company Size | Approximate headcount |
| Lead Score | 2–5 (see scoring below) |
| Priority | High / Medium |
| Status | Current status in pipeline (see values below) |
| Last Contact Date | Date of the most recent email sent (first email or any follow-up) |
| Next Follow-up Date | Date when the next follow-up is due |
| Deal Value Estimate | Estimated project value in USD |
| Notes | Research notes, personalization hooks, any special context |

### Lead Score

| Score | Meaning |
|---|---|
| 2 | Lower priority — possible fit but weak signal |
| 3 | Worth trying — meets most ICP criteria |
| 4 | Good fit — strong ICP match, clear pain signal |
| 5 | Top prospect — ideal buyer, specific hook available |

### Status Values

| Status | Meaning |
|---|---|
| `Ready To Contact` | Research done, email drafted or ready to draft |
| `Email Sent` | First email sent, awaiting reply or follow-up schedule |
| `Researching` | In progress — research underway, not yet ready to contact |
| *(blank)* | Not yet touched |
| `Skip` | Disqualified — wrong fit, already too AI-sophisticated, miscategorized |
| `Replied` | Prospect has responded (genuine reply, not OOO) |
| `Call Booked` | Discovery call scheduled |
| `Proposal Sent` | Proposal delivered |
| `Closed Won` | Client signed and paid deposit |
| `Closed Lost` | Deal did not close |

---

## Data-Quality Rules

**Before drafting any email, verify that the Name, Title, Company, and Email in a row are internally consistent.** Name/email mismatches have occurred when data was pasted between tools.

**Known unresolved mismatches (as of July 2026):**
- Ayokay — name does not match the email address
- Camberlion — name does not match the email address
- ThinkPod Agency — name does not match the email address

All three need Apollo.io re-verification before emailing.

**Other known data-quality issues:**
- Griffin Marketing Agency was removed after research revealed it is a photography company, not a marketing agency
- Element Three prospect was corrected from Tiffany Sauder (former CEO, stepped down Feb 2025) to Kyler Mason (current CEO)
- One batch of prospects contained a CEO listed as the contact when research later revealed a leadership change

**Rule:** Never email a prospect until name, title, and email have been cross-checked. If any field is unverified, mark as `Researching` and do not send.

---

## Prospect Sources

Prospects have been sourced from:
- **Apollo.io** — People search with ICP-matching filters (company size, industry, title)
- **Clutch.co** — Agency directory browsing by category and rating
- **Smart Agency Masterclass podcast** — Guest companies manually sourced
- **Hunter.io** — Email lookup and verification

---

## Known CRM Issues

- The CRM has existed across multiple spreadsheet versions; a "MASTER" tracker, "Secondary/legacy" tracker, and multiple re-uploads have created overlap. Always confirm which file is canonical.
- Several "Ready To Contact" rows have unverified emails (Bryant Walker/Tavo Media, Jared Codling/SimpleTiger, Dave Farrow/Farrow Communications).
- ~14 real-estate brokerage prospects sourced but sitting in `Researching` status, pending the niche-expansion decision.

---

## Future Improvements

- Migrate from Google Sheets to a real CRM (Notion, HubSpot free, Airtable) once volume exceeds what Sheets can handle cleanly
- Add a "Template Version" column to tag every sent email as v1.0-compliant or old-style
- Add a "Sequence Step" column to track exactly where each prospect is in FU1/FU2/FU3
- Build an email verification workflow that runs before any row moves to `Ready To Contact`

---

## References

- [`OUTREACH.md`](OUTREACH.md) — outreach standard and sending protocol
- [`SALES_PLAYBOOK.md`](SALES_PLAYBOOK.md) — full pipeline
- [`operations/SOP_OUTREACH.md`](../operations/SOP_OUTREACH.md) — step-by-step execution
