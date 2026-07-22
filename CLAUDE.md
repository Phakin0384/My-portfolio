# CLAUDE.md

Guidance for AI assistants (and humans) working on this repo. Read this first.

## What this is

Personal single-page portfolio for **Phakin Saekhow** — bilingual (English / Thai),
dark-navy theme. It was migrated from one hand-written `index.html` (still kept at
`legacy/index.html` for reference) to:

- **Next.js 16** (App Router, TypeScript) — `next dev` / `next build` use Turbopack
- **Tailwind CSS v4** — configured CSS-first via the `@theme` block in `app/globals.css`
  (there is **no** `tailwind.config.ts` in v4)
- **Framer Motion** — scroll reveals, hero animation, spotlight/scroll effects
- **react-icons** (Simple Icons set) for brand tech logos

## Commands

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build — the real gate; run before pushing
npm run lint     # eslint (next config)
npx tsc --noEmit # type-check only
```

Before pushing anything, it should pass **all three**: `tsc --noEmit`, `lint`, `build`.

## Project map

```
app/
  layout.tsx      # fonts (next/font), metadata, wraps app in <LanguageProvider>
  page.tsx        # composes every section in order
  globals.css     # Tailwind @theme tokens + hand-written carve-outs (bg gradient,
                  # aurora keyframes, spotlight glow, custom scrollbar)
components/
  <Section>.tsx   # one component per section: Nav, Hero, About, Skills, Projects,
                  # Education, Contact, Footer
  HeroBackground, RoleRotator, ScrollProgress   # decorative / interactive pieces
  Gallery, Lightbox                             # image gallery (currently unused —
                                                # no project references it, kept for reuse)
  ui/            # shared primitives: Chip, IconChip, Button, SectionHeading, FadeIn,
                 # SpotlightCard
  icons/         # custom SVG icons (no Simple Icons slug) + brandColors.ts
context/
  LanguageContext.tsx   # EN/TH state — useLanguage() => { lang, toggle }
data/
  site.ts, skills.ts, projects.ts   # ALL page content lives here, typed & bilingual
lib/types.ts     # Lang, Bilingual<T> = { en; th }, IconKey union
public/          # favicon.svg, CV PDF, images/pipelines/*.jpg
legacy/index.html # original static site — reference only, not built or served
```

## Core conventions — follow these

1. **Content is data, not JSX.** Every user-facing string lives in `data/*.ts` as a
   `Bilingual` object `{ en, th }`. To edit copy or add a project/skill, edit the data
   file — don't hard-code strings in components. See the README for a project template.

2. **Bilingual is React state, never CSS.** Language is a React Context (`useLanguage()`),
   so only one language is ever in the render tree. **Do not** reintroduce the old
   pattern of rendering both languages and hiding one with CSS classes / `data-lang` —
   that caused a real mixed-language bug (why the migration happened). Read `lang` from
   `useLanguage()` and pick `value[lang]`.

3. **Any component using `useLanguage()`, hooks, or browser APIs needs `"use client"`.**
   Sections are client components; keep it that way unless a piece is genuinely static.

4. **Adding a tech icon:** add the key to `IconKey` in `lib/types.ts`, map it in
   `components/ui/IconChip.tsx`, and (for a Simple Icons brand) add a verified hex to
   `components/icons/brandColors.ts`. `react-icons/si` icons render in `currentColor` —
   they need an explicit `color`, and export names don't always match the slug
   (it's `SiCss`, not `SiCss3`). Verify the export name and the brand hex; don't guess.

5. **Styling:** Tailwind utilities first, using the theme tokens (`bg-card`, `text-muted`,
   `text-accent`, `shadow-card`, etc.) defined in the `@theme` block. Only drop to raw CSS
   in `globals.css` for things utilities can't express cleanly (the multi-layer background
   gradient, the aurora keyframes, the spotlight glow, the gallery scrollbar).

6. **Hero roles** that cycle in the animation are `hero.roles` in `data/site.ts` — keep
   them accurate to what Phakin can actually do.

## Deploy

Vercel, auto-deploys from **`main`** (zero-config Next.js detection). Feature branches get
their own preview URL. Production: `https://my-portfolio-sepia-one-46.vercel.app/`.

**Gotcha (already fixed, don't reintroduce):** Vercel must have **no Output Directory
override**. A leftover `public` override from the old static-site setup made Vercel serve
raw `public/` files and 404 the app. Leave build/output settings at their Next.js defaults.

## Working style for this repo

- It's a **live, deployed site.** Work on a branch, verify locally, and let Phakin review
  before anything reaches `main`. Don't push or commit unless asked.
- Preserve the existing visual design unless a change is explicitly requested — this was a
  re-platform, not a redesign; pixel-level parity with the original was intentional.
