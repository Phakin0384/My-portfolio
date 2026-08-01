"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillGroups, type SkillGroup } from "@/data/skills";
import { viewAll } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { IconChip, ChipIcon } from "@/components/ui/IconChip";
import { Chip } from "@/components/ui/Chip";
import { SkillGlyphIcon } from "@/components/icons/SkillGlyphIcon";
import type { Bilingual } from "@/lib/types";

const skillsHeading = { en: "Skills", th: "ทักษะ" } satisfies Bilingual;
const skillsHeading2 = { en: "Technical toolkit", th: "ทักษะทางเทคนิค" } satisfies Bilingual;

/** How many groups the home page previews before linking to /skills. */
const HOME_GROUPS = 2;

const card =
  "rounded-[18px] border border-line bg-gradient-to-b from-card2 to-card shadow-card p-5 md:p-[22px]";

function GroupTitle({ group, ruled }: { group: SkillGroup; ruled?: boolean }) {
  const { lang } = useLanguage();
  return (
    <h3
      className={`text-[17px] font-bold flex items-center gap-2.5 ${
        ruled ? "mb-5 pb-3.5 border-b border-line" : "mb-3.5"
      }`}
    >
      <SkillGlyphIcon glyph={group.glyph} className="w-[18px] h-[18px] text-accent2 shrink-0" />
      {group.title[lang]}
    </h3>
  );
}

function Chips({ group }: { group: SkillGroup }) {
  const { lang } = useLanguage();
  return (
    <div className="flex flex-wrap gap-2">
      {group.chips.map((chip, i) =>
        chip.icon ? (
          <IconChip key={i} icon={chip.icon} label={chip.label!} />
        ) : (
          <Chip key={i}>{chip.bilingualLabel![lang]}</Chip>
        )
      )}
    </div>
  );
}

/** Mono stamp in the bottom corner, Stitch's `// CORE_LOGIC` touch. */
function Note({ note }: { note?: string }) {
  if (!note) return null;
  return (
    <div className="mt-5 text-right font-mono text-[11px] tracking-[0.09em] text-muted">{note}</div>
  );
}

/** A group rendered as a grid of labelled tiles rather than inline chips. */
function Tiles({ group }: { group: SkillGroup }) {
  const { lang } = useLanguage();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {group.chips.map((chip, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-line bg-card px-3.5 py-3 font-semibold text-[15px]"
        >
          {chip.icon ? (
            <ChipIcon icon={chip.icon} size={20} />
          ) : (
            <span className="w-2 h-2 bg-accent2 shrink-0" />
          )}
          {chip.label ?? chip.bilingualLabel![lang]}
        </div>
      ))}
    </div>
  );
}

/** A group rendered as a list of headed items — used for Strengths. */
function Attributes({ group }: { group: SkillGroup }) {
  const { lang } = useLanguage();
  return (
    <ul className="grid gap-4">
      {group.chips.map((chip, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="w-[5px] h-[5px] bg-accent2 mt-2.5 shrink-0" />
          <div>
            <h4 className="font-bold text-[15px]">{chip.bilingualLabel?.[lang] ?? chip.label}</h4>
            {chip.detail && <p className="text-muted text-[14px] mt-1">{chip.detail[lang]}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Skills({ variant = "home" }: { variant?: "home" | "page" }) {
  const isPage = variant === "page";

  /**
   * /skills follows the Stitch arrangement: the first group as tiles in an
   * 8-wide card, the last group (Strengths) as a tall 4-wide list beside it,
   * and the remaining groups as chip cards filling the rows below.
   */
  if (isPage) {
    const [first, ...rest] = skillGroups;
    const attributes = rest.pop();
    return (
      <FadeIn id="skills" className="py-8">
        <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-[22px] items-start">
          <div className={`md:col-span-8 ${card} flex flex-col`}>
            <GroupTitle group={first} ruled />
            <Tiles group={first} />
            <Note note={first.note} />
          </div>

          {attributes && (
            <div className={`md:col-span-4 md:row-span-2 ${card}`}>
              <GroupTitle group={attributes} ruled />
              <Attributes group={attributes} />
            </div>
          )}

          {rest.map((group, i) => (
            <div
              key={group.title.en}
              className={`${i === rest.length - 1 ? "md:col-span-12" : "md:col-span-8"} ${card}`}
            >
              <GroupTitle group={group} ruled />
              <Chips group={group} />
              <Note note={group.note} />
            </div>
          ))}
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn id="skills" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6">
        <SectionHeading num="02" eyebrow={skillsHeading} heading={skillsHeading2} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-6">
          {skillGroups.slice(0, HOME_GROUPS).map((group) => (
            <div key={group.title.en} className={card}>
              <GroupTitle group={group} />
              <Chips group={group} />
            </div>
          ))}
        </div>
        {skillGroups.length > HOME_GROUPS && <ViewAllLink href="/skills" label={viewAll.skills} />}
      </div>
    </FadeIn>
  );
}
