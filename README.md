# Jeffrey De La Cruz — Personal Portfolio

Single-page portfolio site: software engineering and AI-driven automation.

**Live:** _(Vercel deploy pending)_

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript, static export)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) (Framer Motion) — scroll reveals, reduced-motion aware
- [next-themes](https://github.com/pacocoursey/next-themes) — dark mode default with toggle
- Space Grotesk via `next/font` (self-hosted)

## Structure

All copy lives in [`lib/content.ts`](lib/content.ts) — sections render from data, so text edits never touch components.

```
app/            layout, page, globals.css, favicon
components/     Nav, ThemeToggle, Reveal, ExternalLink
  sections/     Hero, Statement, Experience, Projects, Contact
  stickers/     NYC-themed decorative SVGs
  icons/        inline SVG icons
lib/            content.ts (copy), motion.ts (animation variants)
```

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Lighthouse: 96–100 (mobile) / 100 (desktop) across Performance, Accessibility, Best Practices, SEO.
