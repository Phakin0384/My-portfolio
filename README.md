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

## Deploy

Deployed on Vercel from `main` (auto-detected Next.js project, zero config): `https://my-portfolio-sepia-one-46.vercel.app/`

Push to `main` to deploy. Other branches get their own Vercel preview deployment.
