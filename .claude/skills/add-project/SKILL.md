---
name: add-project
description: Add a new project (or internship/experience entry) to the portfolio's Projects section. Use when the user wants to add, insert, or append a project — handles the bilingual data entry, any new tech icons, and the tsc/lint/build verification in the right order.
---

# Add a project to the portfolio

All projects live in one file — `data/projects.ts` — and render automatically. This skill
walks the full flow: gather content → write the entry → add any missing icons → verify.
Do the steps in order; don't skip verification.

## 1. Gather the content

You need these from the user (ask for whatever's missing — never invent facts):

- **Tag** — the small mono label above the title, e.g. `INTERNSHIP · COMPANY · DEC 2025–MAR 2026`
- **Name** and **name suffix** (a short tagline). Suffix is bilingual. Name can be `""` if only a suffix is wanted.
- **Meta** — one-line context (bilingual), e.g. "University capstone project"
- **Description** — optional intro paragraph (bilingual)
- **Bullets** — the achievements/what-you-did lines (each bilingual). Lead with impact.
- **Stack** — the tech chips (each needs a label + an `IconKey`, see step 3)
- **Presentation** — optional: a link (Canva/slides/demo) + a bilingual button label
- **Glyph** — optional cover icon: `"pipeline" | "calendar" | "code" | "chart"`
  (defaults to `"code"`). Skipped entirely when the entry has a `presentation` — that
  link takes over the cover plate.

Every user-facing string must be `{ en, th }`. If the user gives only English, ask for the
Thai, or offer to draft it and have them confirm — do not ship one language.

**Order drives both position and size.** The Projects section is a bento grid: the first
entry gets the wide (8-column) slot, the second the narrow (4-column) one, alternating
after that, and a lone trailing entry spans full width (`spanFor()` in
`components/Projects.tsx`). Newest goes first by default — but confirm with the user,
because moving an entry to the top also makes it the visually featured one.

**Every project needs a `slug`** — it's the URL segment for its album page. Kebab-case,
unique. If the project also has `gallery` + `galleryLabel`, `/projects/<slug>` is
generated automatically and the card grows a crossfading sample that links to it; with
no gallery, that slug 404s, which is correct.

**Screenshots:** put files in `public/images/<slug>/`, read each image's real pixel
dimensions into `width`/`height` (don't estimate — the lightbox uses them), write
bilingual `alt`, and set `galleryAspect: "portrait"` for phone screens.

**Order also decides whether it shows on the home page.** `/projects` lists everything;
`/` previews only the first `HOME_PROJECTS` entries (currently 2) and links to the rest.
So an entry added at the end is reachable at `/projects` but won't appear on the home
page — say so when you report back, and offer to reorder if that's not what they wanted.

## 2. Write the entry

Add an object to the `projects` array in `data/projects.ts` using this template:

```ts
{
  tag: "INTERNSHIP · COMPANY · MONTH YEAR",
  name: "Project Name",              // "" to show only the suffix
  nameSuffix: { en: "— short tagline", th: "— คำอธิบายสั้น" },
  meta: { en: "one-line context", th: "บริบทหนึ่งบรรทัด" },
  glyph: "code",                       // optional cover icon — omit to default to "code"
  description: { en: "Optional paragraph.", th: "ย่อหน้า (ไม่บังคับ)" }, // optional — omit if none
  bullets: [
    { en: "What you did and the impact.", th: "สิ่งที่ทำและผลลัพธ์" },
    { en: "Another achievement.", th: "อีกหนึ่งผลงาน" },
  ],
  stack: [
    { label: "React", icon: "react" },   // icon must be a valid IconKey
  ],
  presentation: {                          // optional — omit if none
    href: "https://...",
    label: { en: "View presentation", th: "ดูสไลด์นำเสนอ" },
  },
},
```

The `Project` type is defined at the top of `data/projects.ts` — match it. `description`,
`presentation`, and `gallery` are all optional; leave them out entirely if unused.

## 3. Handle tech icons

Each stack chip's `icon` must be a key in the `IconKey` union (`lib/types.ts`). If every
tech is already covered, skip to step 4. To add a **new** icon:

- **Add the key** to the `IconKey` union in `lib/types.ts`.
- **If it's a Simple Icons brand** (most tech logos are — check https://simpleicons.org):
  1. Find the exact `react-icons/si` export name. The slug ≠ export sometimes
     (e.g. it's `SiCss`, not `SiCss3`). Verify against `node_modules/react-icons/si`
     — don't guess the name.
  2. Import it in `components/ui/IconChip.tsx` and add it to the `brandIcon` map.
  3. Add the brand hex to `components/icons/brandColors.ts`. **Verify the real hex** via
     `curl https://cdn.simpleicons.org/<slug>` — don't rely on memory. The hex is **not**
     themed, so it has to read on both the light chip (`#eef1fb`) and the dark one
     (`#1b2750`). Pure black or pure white will vanish on one of them — reach for a
     mid-tone secondary brand colour instead (that's why Java is `#5382A1`).
- **If there's no Simple Icons slug** (a custom concept like "Dashboards"): build a small
  SVG component in `components/icons/` following the existing `DataPipelineIcon.tsx` etc.
  Draw it in **`currentColor`**, add a `case` for it in the `switch` inside `IconChip.tsx`'s
  `ChipIcon`, and give it a theme token class there (`text-accent`, `text-accent2`,
  `text-brand-purple`) so it stays legible in both themes.

## 4. Verify — all three must pass

```bash
npx tsc --noEmit
npm run lint
npm run build
```

A missing/invalid `IconKey` or a malformed bilingual object will fail `tsc` — that's the
safety net. Fix anything before moving on.

## 5. Show the result

Start the dev server if it isn't running (`npm run dev`) and confirm the new card renders
in **all four states** — light/dark × EN/TH — on **`/projects` and, if it made the cut,
`/`**. Check that the icons are visible on both chip backgrounds, that the bento row
still balances, and that there are no language leaks. Report what you added.

## Don't

- Don't hard-code project text into `components/Projects.tsx` — content belongs in the data file.
- Don't ship a single language — both `en` and `th` are required on every string.
- Don't commit or push unless the user asks. This is a live site; work stays on the branch
  until they review.
