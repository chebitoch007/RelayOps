# AI Collaboration

## Purpose

Everything a future AI assistant needs to contribute to RelayOps without requiring re-explanation of the project from scratch. Read this before touching any code or drafting any content.

---

## Background

RelayOps is built almost entirely in collaboration with AI assistants. Each chat session has historically produced its own partial knowledge base, leading to drift and contradictions across sessions. This `/docs` system exists to prevent that. This file ensures every AI contributor — in any future session — operates with the same constraints, standards, and project awareness.

---

## Non-Negotiable Constraints

These apply to every task, every session, every AI, without exception:

1. **Never fabricate client names, logos, testimonials, metrics, or case studies presented as real.** If the proof doesn't exist, don't invent it.
2. **Never misrepresent AI involvement.** RelayOps' website and deliverables must not imply they were built without AI when they were.
3. **Never bump dependency versions without being explicitly asked.** Work within the installed versions. If a version-gated limitation is discovered, document it — don't upgrade around it.
4. **Never silently expand scope.** If a task surfaces a related gap, flag it explicitly in the response. Fix it only if it's small and directly in the code being touched.
5. **Never trust a cached view of a file.** Always re-read a file's actual current content immediately before editing it. Earlier edits in the same session can invalidate prior views.

---

## Project Context

Before starting any work, internalize `00_PROJECT_OVERVIEW.md`. Key facts:
- RelayOps is a one-person AI automation agency (Brian Chebitoch, Nairobi)
- Pre-revenue, pre-first-client as of July 2026
- Two technical systems: the public website (relayops.site) and the Lead Qualification demo system — do not conflate them
- Current priority: outreach and sales, not website polish or new features
- Website overhaul P1–P10 is complete

---

## Before Touching Code

1. Read `engineering/ARCHITECTURE.md` for the full stack and known constraints.
2. Read `engineering/CODE_STANDARDS.md` for naming conventions, patterns, and quality requirements.
3. If the task involves the demo system, read `product/DEMO_PROJECT.md`.
4. If the task involves website content, read `website/CONTENT_GUIDELINES.md`.
5. Re-read any file you are about to edit — never edit from a cached view.

---

## Before Touching Outreach or Sales Tasks

1. Read `business/OUTREACH.md` — Cold Outreach Standard v1.0 is mandatory, not optional.
2. Read `business/CRM.md` — CRM column definitions, status values, data-quality rules.
3. Check the CRM for name/email consistency before drafting any email.
4. Do not draft emails for the three unresolved name/email mismatches (Ayokay, Camberlion, ThinkPod Agency) until they are Apollo-verified.
5. Do not contact any real-estate prospects until the niche expansion is explicitly approved.

---

## Coding Standards Summary

(Full detail in `CODE_STANDARDS.md` — this is the quick reference.)

- **Component files:** PascalCase matching the default export (`AboutSection.tsx` exports `AboutSection`)
- **Route folders:** lowercase-with-hyphens under `app/` (`demo-projects/`, `about/`)
- **Data arrays:** camelCase, descriptive plural nouns (`workflowSteps`, `keyAutomations`, `deliverySteps`)
- **CSS custom properties:** `--font-*`, `--bg-*`, `--accent-*`, `--text-*`, `--border-*` prefixes
- **Icons:** lucide-react `^1.16.0` does not export `Linkedin` or `Github` — use `ExternalLink` and `Mail`
- **Fonts:** loaded via `next/font/google` in `app/layout.tsx`, not via CSS `@import`
- **Data-driven components:** prefer typed arrays mapped to JSX over repeated hardcoded markup
- **TypeScript:** run `tsc` after every edit, filtering for the pre-existing `TS2686` noise

---

## Verification Protocol (mandatory for every code change)

1. Back up the file before editing (`.bak` suffix).
2. Re-read the file immediately before making changes.
3. After every edit, run an itemized, scripted checklist:
   - New content is present
   - Old content is gone
   - Nothing unrelated was broken
4. Run `tsc` — filter out `TS2686` (pre-existing, unrelated to any session's edits) to isolate genuine new errors.
5. Share only changed files with the user — never the whole repo unless explicitly requested.
6. When a task naturally surfaces a bug in code being touched: fix small bugs, flag large ones.

---

## Content Writing Standards

(Full detail in `website/CONTENT_GUIDELINES.md` — this is the quick reference.)

- Write outcomes, not features ("Stop losing leads to slow follow-up" not "AI chatbot")
- Never imply something is real that isn't (client logos, testimonials, metrics)
- Never write a quote from a real company or person without their permission
- Label illustrative/conceptual content explicitly ("Illustrative Example")
- Match message-market fit: the site is designed for cold email recipients, not organic search visitors

---

## Session Handoff Protocol

At the end of every significant session, update the relevant docs:

1. **What changed technically?** Update `engineering/ARCHITECTURE.md` and relevant component docs.
2. **What decisions were made?** Add entries to `business/DECISIONS.md`.
3. **What is the new current state?** Update `00_PROJECT_OVERVIEW.md` current state table and priority list.
4. **What's unresolved?** Document it in the appropriate file's "Future Improvements" or "Unresolved Items" section — and in the open questions of `00_PROJECT_OVERVIEW.md`.
5. **What's the timeline entry?** Add to `archive/SESSION_HISTORY.md`.

This is how the docs stay current and the next session doesn't start from a stale snapshot.

---

## What Requires Human Decision

Do not resolve these unilaterally — flag them and wait:

- Real-estate niche expansion (yes/no?)
- Any pricing decision beyond what's documented
- Any claim that could be interpreted as fabricating credibility
- Decisions that affect the CRM structure or schema
- Expanding scope beyond what was explicitly asked

---

## References

- [`00_PROJECT_OVERVIEW.md`](../00_PROJECT_OVERVIEW.md)
- [`engineering/ARCHITECTURE.md`](ARCHITECTURE.md)
- [`engineering/CODE_STANDARDS.md`](CODE_STANDARDS.md)
- [`business/OUTREACH.md`](../business/OUTREACH.md)
- [`website/CONTENT_GUIDELINES.md`](../website/CONTENT_GUIDELINES.md)
