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

Every user-facing string must be `{ en, th }`. If the user gives only English, ask for the
Thai, or offer to draft it and have them confirm — do not ship one language.

**Order matters:** position in the `projects` array = order on the page (top first). Ask
where it should go if it's not obviously the newest.

## 2. Write the entry

Add an object to the `projects` array in `data/projects.ts` using this template:

```ts
{
  tag: "INTERNSHIP · COMPANY · MONTH YEAR",
  name: "Project Name",              // "" to show only the suffix
  nameSuffix: { en: "— short tagline", th: "— คำอธิบายสั้น" },
  meta: { en: "one-line context", th: "บริบทหนึ่งบรรทัด" },
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
     `curl https://cdn.simpleicons.org/<slug>` — don't rely on memory. If the brand color
     is too dark to read on the dark chip (e.g. pure black), use `#FFFFFF` (that's why
     Java is white).
- **If there's no Simple Icons slug** (a custom concept like "Dashboards"): build a small
  SVG component in `components/icons/` following the existing `DataPipelineIcon.tsx` etc.,
  then add a `case` for it in the `switch` inside `IconChip.tsx`'s `ChipIcon`.

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
in **both languages** (toggle EN/TH) — check the icons show with the right colors and no
language leaks. Report what you added.

## Don't

- Don't hard-code project text into `components/Projects.tsx` — content belongs in the data file.
- Don't ship a single language — both `en` and `th` are required on every string.
- Don't commit or push unless the user asks. This is a live site; work stays on the branch
  until they review.
