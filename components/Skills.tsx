"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillGroups } from "@/data/skills";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChip } from "@/components/ui/IconChip";
import { Chip } from "@/components/ui/Chip";
import type { Bilingual } from "@/lib/types";

const skillsHeading = { en: "Skills", th: "ทักษะ" } satisfies Bilingual;
const skillsHeading2 = { en: "Technical toolkit", th: "ทักษะทางเทคนิค" } satisfies Bilingual;

export function Skills() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="skills" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6">
        <SectionHeading num="02" eyebrow={skillsHeading} heading={skillsHeading2} />
        <div className="grid gap-[18px] mt-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {skillGroups.map((group) => (
            <div key={group.title.en} className="bg-card border border-line rounded-2xl px-5 pt-5 pb-[22px] shadow-card">
              <h3 className="text-[15px] mb-3.5 flex items-center gap-2">
                <span className="w-[9px] h-[9px] rounded-full bg-accent2 inline-block" />
                {group.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip, i) =>
                  chip.icon ? (
                    <IconChip key={i} icon={chip.icon} label={chip.label!} />
                  ) : (
                    <Chip key={i}>{chip.bilingualLabel![lang]}</Chip>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
