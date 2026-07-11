# SEO

## Purpose

Document the current SEO setup, what's been implemented, and what remains to be done when organic traffic becomes a priority.

---

## Background

SEO is not a current priority for RelayOps. The website exists to convert cold email recipients, not rank for search terms. That said, the technical foundation should be correct from the start so it doesn't become a cleanup project later.

---

## Current State

| Item | Status |
|---|---|
| `<title>` and `<meta description>` on all pages | ✅ Set via Next.js `metadata` export in each `layout.tsx` |
| Open Graph tags | ✅ Set in root `app/layout.tsx` |
| `robots.ts` (auto-generated `robots.txt`) | ⚠️ Code written; commit status unconfirmed |
| `sitemap.ts` (auto-generated `sitemap.xml`) | ⚠️ Code written; commit status unconfirmed |
| Google Search Console | ⚠️ DNS verification record set in Vercel; activation not confirmed |
| Structured data (JSON-LD) | ❌ Not implemented |
| Blog / content SEO | ❌ Not planned at current stage |
| Keyword research | ❌ Not done |

---

## What Exists

### Metadata (Next.js App Router)

Each route has a `metadata` export or a `layout.tsx` that sets `title` and `description`. The root layout sets global defaults and Open Graph properties. This is the correct Next.js 13+ pattern — do not add a `<head>` tag or `next/head` imports.

### Google Analytics

Measurement ID `G-BQP2H77QJ9` is loaded via `gtag.js` script in `app/layout.tsx`. This handles page views automatically. Custom event tracking (CTA clicks, form submissions) has not been implemented.

---

## Pending Actions

1. **Confirm `sitemap.ts` and `robots.ts` are committed and reachable:**
   - Visit `https://relayops.site/sitemap.xml` — should return a valid XML sitemap
   - Visit `https://relayops.site/robots.txt` — should return a `robots.txt` allowing all crawlers
   - If either returns 404, the files need to be committed to the repo
2. **Activate Google Search Console** using the DNS verification record already in Vercel
3. **Submit the sitemap** to Google Search Console once activated

---

## When SEO Becomes a Priority

When RelayOps is ready to invest in organic traffic (likely post-first-client), the priority order would be:
1. Keyword research for "AI automation agency" + niche-specific terms
2. Structured data / JSON-LD for the business (`LocalBusiness` or `ProfessionalService` schema)
3. Individual service landing pages (`/solutions/*`) with targeted copy
4. A blog or case studies section with real client results
5. Backlink building (directories, podcast appearances, guest posts)

None of this is currently planned.

---

## References

- [`WEBSITE_STRATEGY.md`](WEBSITE_STRATEGY.md)
- [`engineering/ARCHITECTURE.md`](../engineering/ARCHITECTURE.md)
- [`engineering/DEPLOYMENT.md`](../engineering/DEPLOYMENT.md)
