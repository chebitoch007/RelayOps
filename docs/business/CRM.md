# CRM

## Purpose

Document the CRM structure, column definitions, status values, scoring system, and data-quality rules.

---

## Background

The CRM is a Google Sheets / Excel workbook called "RelayOps_MASTER_Outreach_Tracker." It has existed across at least four uploaded versions over the course of the project with overlapping legacy sheets. Multiple re-uploads and copy-paste operations have caused name/email mismatches.

---

## Current State

**As of July 20, 2026 — last synced from sent mail archive.**

| Metric | Count |
|---|---|
| Total prospects in Pipeline | 101 |
| Email Sent | 75 (after sync) |
| Ready To Contact | 13 (after sync) |
| Researching | 13 |

The CRM is the system of record for all prospect data. Always treat the most recently uploaded file as canonical. If two uploaded CRMs disagree, flag it rather than silently picking one.

---

## Standards

### Canonical Columns (Pipeline sheet)

| Column | Description |
|---|---|
| Company | Company name |
| Website | Company website URL |
| Country | Country (auto-fill formula — do not manually edit) |
| Prospect Name | First and last name of the decision-maker being emailed |
| Title | Their job title |
| Email | Their business email address |
| LinkedIn | Their LinkedIn profile URL |
| Industry | Primary industry (e.g. "Marketing Agency", "SEO Agency") |
| Company Size | Approximate headcount |
| Lead Score | 2–5 (see scoring below) |
| Priority | High / Medium |
| Status | Current status in pipeline (see values below) |
| Email 1 Date | Date of the first outreach email sent |
| Follow-up 1 Date | Date of first follow-up |
| Follow-up 2 Date | Date of second follow-up |
| Follow-up 3 Date | Date of third follow-up |
| Replied (Yes/No) | Whether the prospect has replied |
| Discovery Call Booked (Yes/No) | Whether a discovery call has been booked |
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
- Ayokay — name does not match the email address (email sent 2026-07-16; verify before follow-up)
- Camberlion — name does not match the email address (email sent 2026-07-17; verify before follow-up)
- ThinkPod Agency — name does not match the email address (email sent 2026-07-16; verify before follow-up)

All three need Apollo.io re-verification before follow-up.

**Other known data-quality issues:**
- Griffin Marketing Agency was removed after research revealed it is a photography company, not a marketing agency
- Element Three prospect was corrected from Tiffany Sauder (former CEO, stepped down Feb 2025) to Kyler Mason (current CEO)
- No Typical Moments — FU1 and FU2 dates had wrong year (2020 instead of 2026); corrected in July 2026 sync
- The Brand Identity — FU2/FU3 dates were misaligned; corrected in July 2026 sync

**Rule:** Never email a prospect until name, title, and email have been cross-checked. If any field is unverified, mark as `Researching` and do not send.

---

## July 2026 Sync — Changes Applied

A full sync was performed on **July 20, 2026** against a 323-email Sent mail export. The following changes were applied to the tracker:

### Status Updated: Ready To Contact → Email Sent (18 prospects)
Email 1 Date also set from actual sent timestamp.

| Company | Prospect | Email Sent Date |
|---|---|---|
| Blend Commerce | Adam Pearce | 2026-07-16 |
| WLCR.io | Adam Shearer | 2026-07-16 |
| ThinkPod Agency | Aubrey Burkhart | 2026-07-16 |
| Chatterkick | Beth Trejo | 2026-07-16 |
| Fruition | Brad Anderson | 2026-07-16 |
| eCommerce Nurse | Carina McLeod | 2026-07-16 |
| Big Boy Media Group | Charles Rodriguez | 2026-07-16 |
| Smartebusiness | Ian Hammersley | 2026-07-16 |
| Ayokay | Jack Shepler | 2026-07-16 |
| Tadpull | Jake Cook | 2026-07-17 |
| Sunbowl | Jody Edgar | 2026-07-16 |
| Camberlion | Keith Nugent | 2026-07-17 |
| TOST Consulting | Lauren Osterstock | 2026-07-17 |
| Ainsol | Rizwan Jaffer | 2026-07-17 |
| Evolve Agency Group | Rob Levy | 2026-07-17 |
| Stream Commerce | Ted Starkman | 2026-07-17 |
| 1 At Bat Media | Travis McEwan | 2026-07-17 |
| Omnycode | Vlad Pavich | 2026-07-17 |

### Follow-up Dates Added or Corrected (7 prospects)

| Company | Field | Was | Now |
|---|---|---|---|
| Scaledon | FU3 | blank | 2026-07-15 |
| The SOCIETY Group | FU3 | blank | 2026-07-15 |
| No Typical Moments | FU1 | 2020-06-20 | 2026-06-20 |
| No Typical Moments | FU2 | 2020-06-25 | 2026-06-25 |
| Blue Tuskr | FU3 | blank | 2026-07-15 |
| Carel Creative | FU3 | blank | 2026-07-15 |
| ElliotDigital | FU3 | blank | 2026-07-15 |
| The Brand Identity | FU2 | garbled | 2026-06-20 |
| The Brand Identity | FU3 | 2026-07-13 | 2026-06-29 |

### Prospects Emailed But Not in CRM (3)
These need to be added manually with full research:

| Company | Email | First Contact |
|---|---|---|
| InteractOne | brian@interactone.com | 2026-07-16 |
| Bakeshop Digital | greg@bakeshopdigital.com | 2026-07-16 |
| DTC SEO Agency | olivia@dtcseoagency.com | 2026-07-17 |

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
- Country column uses AI-fill formulas that may not resolve correctly in all viewers — treat as informational only.

---

## Future Improvements

- Migrate from Google Sheets to a real CRM (Notion, HubSpot free, Airtable) once volume exceeds what Sheets can handle cleanly
- Add a "Template Version" column to tag every sent email as v1.0-compliant or old-style
- Add a "Sequence Step" column to track exactly where each prospect is in FU1/FU2/FU3
- Build an email verification workflow that runs before any row moves to `Ready To Contact`
- Automate sent-mail sync so CRM dates stay current without manual exports

---

## References

- [`OUTREACH.md`](OUTREACH.md) — outreach standard and sending protocol
- [`SALES_PLAYBOOK.md`](SALES_PLAYBOOK.md) — full pipeline
- [`operations/SOP_OUTREACH.md`](../operations/SOP_OUTREACH.md) — step-by-step execution
