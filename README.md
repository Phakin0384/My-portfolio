# My Portfolio

Personal portfolio site for Phakin Saekhow — single-page, bilingual (EN/TH). Built with Next.js (App Router, TypeScript), Tailwind CSS, and Framer Motion.

## Structure

- `app/` — root layout (fonts, metadata, `LanguageProvider`) and the single page (`page.tsx`) that composes every section
- `components/` — one component per section (`Hero`, `About`, `Skills`, `Projects`, `Education`, `Contact`, `Nav`, `Footer`), plus `Gallery`/`Lightbox` for the Michelin pipeline screenshots and a `ui/` folder of shared primitives (`Chip`, `IconChip`, `Button`, `SectionHeading`, `FadeIn`)
- `components/icons/` — brand-less custom SVG icons (Power Apps, Data Pipeline, Dashboards, AI Integration) and the Simple Icons brand color map
- `context/LanguageContext.tsx` — EN/TH language state (`useLanguage()`)
- `data/` — typed bilingual content (site copy, skills, projects, education)
- `public/` — favicon, CV PDF, Michelin Dataiku pipeline screenshots
- `legacy/index.html` — the original hand-written static version of this site, kept for reference

## Run locally

```
npm install
npm run dev
```

## Adding a new project

All projects live in one file: **`data/projects.ts`**. To add a new one, copy this
template into the `projects` array (order in the array = order on the page) — no
component changes needed:

```ts
{
  tag: "INTERNSHIP · COMPANY · MONTH YEAR",        // small mono label above the title
  name: "Project Name",                             // leave "" if you only want the suffix
  nameSuffix: { en: "— short tagline", th: "— คำอธิบายสั้น" },
  meta: { en: "one-line context", th: "บริบทหนึ่งบรรทัด" },
  description: { en: "Optional paragraph.", th: "ย่อหน้า (ไม่บังคับ)" }, // optional
  bullets: [
    { en: "What you did and the impact.", th: "สิ่งที่ทำและผลลัพธ์" },
    { en: "Another achievement.", th: "อีกหนึ่งผลงาน" },
  ],
  stack: [
    { label: "React", icon: "react" },   // icon must be a key from lib/types.ts (IconKey)
  ],
  presentation: {                          // optional: adds the ▶ banner + link
    href: "https://...",
    label: { en: "View presentation", th: "ดูสไลด์นำเสนอ" },
  },
},
```

- Every user-facing string is `{ en, th }` so the language toggle keeps working.
- `icon` values must be one of the keys in `lib/types.ts` (`IconKey`). To add a brand
  new tech icon, add its key there, then map it in `components/ui/IconChip.tsx`
  (and a hex color in `components/icons/brandColors.ts` for Simple Icons brands).
- Hero roles that cycle in the animation are in `data/site.ts` under `hero.roles` —
  edit that list to change what titles rotate under your name.

## Deploy

Deployed on Vercel from `main` (auto-detected Next.js project, zero config): `https://my-portfolio-sepia-one-46.vercel.app/`

Push to `main` to deploy. Other branches get their own Vercel preview deployment.
