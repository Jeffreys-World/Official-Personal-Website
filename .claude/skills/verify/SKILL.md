---
name: verify
description: Build, launch, and visually drive this portfolio site to verify UI changes.
---

# Verifying this site

Next.js 16 (Turbopack) static site. All content data is in `lib/content.ts`; sections are `components/sections/*.tsx`.

## Build & launch

```powershell
npm run build     # also typechecks (tsc runs inside the build)
npm run start     # production server on http://localhost:3000 (run in background)
```

Dev alternative: `npm run dev` (same port).

## Drive it

No test framework in the repo. Drive with `playwright-core` + the system Edge browser (no browser download needed):

```js
const { chromium } = require("playwright-core"); // npm i playwright-core in scratchpad
const browser = await chromium.launch({ channel: "msedge", headless: true });
```

Gotchas learned the hard way:

- **Framer-motion `whileInView` (once: true)**: content is `opacity: 0` until scrolled into view. Scroll through the whole page in steps and wait ~1s before screenshotting, or sections will be invisible.
- **Tailwind v4 scale utilities use the CSS `scale` property, not `transform`.** Check `getComputedStyle(el).scale`, not `.transform`, when verifying `hover:scale-*`.
- **Pass `reducedMotion: "no-preference"` explicitly** to `newContext()` when verifying `motion-safe:` hovers; use `"reduce"` to verify they're inert.
- **Theme**: defaults to dark (`ThemeProvider` has `enableSystem={false}`); switch with `page.click("button[aria-label='Switch to light mode']")`. Accent var: `getComputedStyle(document.documentElement).getPropertyValue('--accent')` → `#fbbf24` dark / `#b45309` light.
- **Two mailto links exist in #contact** (text link + icon) — use `.first()` or role selectors.

## Known pre-existing issues (don't attribute to new changes)

- ~18px horizontal overflow at 375px viewport: the nav row (`nav` scrollWidth 393px) plus `.bg-blob` decorations. Present before any 2026-07 changes.
- Under OS reduced motion, all whileInView items keep a stuck `translateY(24px)`: first render uses `fadeUp` (hidden y:24) before `useReducedMotion` flips true, then `fadeOnly.visible` only animates opacity, so y never returns to 0.
