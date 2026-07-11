# Code Standards

## Purpose

Define the patterns, conventions, and quality standards for all RelayOps code.

---

## Background

These standards emerged from the P1–P10 website overhaul session. They are not aspirational — they reflect what is already used in the codebase and must be continued.

---

## Current State

Standards are active and embedded in the existing codebase. Any new code or edits must follow these without exception.

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase matching the default export | `AboutSection.tsx` exports `AboutSection` |
| Route folders | lowercase-with-hyphens | `app/demo-projects/`, `app/about/` |
| Data arrays | camelCase, descriptive plural noun | `workflowSteps`, `keyAutomations`, `deliverySteps`, `businessOutcomes` |
| CSS custom properties | Prefixed by type | `--font-heading`, `--bg-dark`, `--accent-teal`, `--text-muted`, `--border-subtle` |
| Boolean fields on data objects | Descriptive present-tense adjective | `optional: boolean`, `active: boolean` |

---

## Component Patterns

### Data-driven components (mandatory)

Prefer arrays of typed objects mapped to JSX over hardcoded repeated markup. This is the dominant pattern throughout every section component and must be continued.

```tsx
// DO THIS
const deliverySteps = [
  { id: 1, title: "Discovery", description: "..." },
  { id: 2, title: "Build", description: "...", optional: false },
];

return deliverySteps.map(step => <StepCard key={step.id} {...step} />);

// NOT THIS
return (
  <>
    <StepCard title="Discovery" description="..." />
    <StepCard title="Build" description="..." />
  </>
);
```

### Client components

Use `"use client"` directive for any component that uses React hooks, browser APIs, or Framer Motion animations. The root `layout.tsx` and route `layout.tsx` files are server-rendered — don't add `"use client"` to them unless there's a specific reason.

### Icon usage

lucide-react `^1.16.0` does **not** export `Linkedin` or `Github` brand icons. This is a known, documented version constraint — do not attempt to import them.

Use these substitutes:
- LinkedIn profile links → `ExternalLink` icon
- GitHub repo links → `ExternalLink` or `Mail`

Do not upgrade lucide-react to get brand icons without being explicitly asked.

---

## Styling Standards

### CSS Variables

All theme tokens are defined in `app/globals.css` as CSS custom properties. Use these exclusively — do not hardcode color values or font families inline.

Prefixes in use:
- `--font-*` — font family references (from `next/font/google` loaded variables)
- `--bg-*` — background colors
- `--accent-*` — accent/highlight colors
- `--text-*` — text colors
- `--border-*` — border colors

Add new variables under the appropriate prefix category.

### Font loading

Fonts are loaded via `next/font/google` in `app/layout.tsx`. The variable names from `next/font` are set as CSS custom properties and referenced in `globals.css`. **Do not use CSS `@import` for Google Fonts** — this was the bug fixed in P10.

There were 7 locations in the codebase that had hardcoded `fontFamily: "Syne"` inline styles that bypassed the variable system entirely — these were corrected in P10. Do not introduce new hardcoded font references.

### Tailwind

Use Tailwind for layout, spacing, and utility classes. Use CSS variables (via `globals.css`) for the design system tokens. Do not mix arbitrary Tailwind values and CSS variable tokens for the same visual concept.

---

## Accessibility

### `prefers-reduced-motion`

All animated backgrounds and canvas elements must respect the `prefers-reduced-motion` media preference. The `ParticleBackground.tsx` component was patched in P7 to:
- Early-return (no canvas rendering) when `prefers-reduced-motion: reduce` is set
- Add a `matchMedia` change listener to stop/resume the animation loop without a page reload

Apply the same pattern to any future animation-heavy component.

### `aria-live` regions

The contact form uses `aria-live` regions for error state announcements. Preserve these in any form edits — do not remove them for any reason.

---

## TypeScript

- Run `tsc` after every edit.
- The project has a pre-existing `TS2686` noise pattern — filter it out when checking for new errors.
- Do not introduce `any` types without a specific, documented reason.
- Use interfaces for component props; use `type` for union types and mapped types.

---

## Edit Safety Protocol

1. **Back up before editing.** Copy the file with a `.bak` suffix before making any changes.
2. **Re-read before editing.** Always read the current state of the file immediately before modifying it — a cached view from earlier in the session may be stale.
3. **Verify with a checklist.** After every edit, assert programmatically (via `node -e` or similar):
   - New content is present
   - Old content is absent
   - Adjacent, unrelated sections are intact
4. **Scope discipline.** Fix adjacent small bugs found in code being touched. Flag (don't fix) anything that would expand the task scope.

---

## What Not to Do

- Do not hardcode repeated markup that should be a data array
- Do not import `Linkedin` or `Github` from lucide-react (they don't exist in this version)
- Do not use `@import` for Google Fonts
- Do not add `fontFamily: "Syne"` (or any font name) inline — use CSS variables
- Do not edit a file without re-reading it first
- Do not ship the entire repo when only one file changed

---

## Future Improvements

- Formalize a shared `navLinks` constant to prevent Navbar/Footer drift
- Add ESLint rule to flag hardcoded font families
- Consider a pre-commit hook that runs `tsc` automatically

---

## References

- [`ARCHITECTURE.md`](ARCHITECTURE.md)
- [`AI_COLLABORATION.md`](AI_COLLABORATION.md)
- [`DEPLOYMENT.md`](DEPLOYMENT.md)
