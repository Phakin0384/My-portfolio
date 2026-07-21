"use client";

import { useLanguage } from "@/context/LanguageContext";
import { educationSection } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="education" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6">
        <SectionHeading num={educationSection.eyebrowNum} eyebrow={educationSection.eyebrow} heading={educationSection.heading} />
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[22px] mt-6">
          <div className="bg-card border border-line rounded-2xl p-6 shadow-card">
            <h3 className="text-lg mb-1">{educationSection.degree[lang]}</h3>
            <p className="text-muted text-sm">{educationSection.degreeMeta[lang]}</p>
          </div>
          <div className="bg-card border border-line rounded-2xl p-6 shadow-card">
            <h3 className="text-lg mb-1">{educationSection.softSkillsHeading[lang]}</h3>
            <ul className="mt-2">
              {educationSection.softSkills.map((item, i) => (
                <li
                  key={i}
                  className="py-2.5 border-b border-line/50 last:border-none text-[#c7cff0] text-[15px] flex gap-2.5"
                >
                  <span className="text-accent2 font-bold">✓</span>
                  {item[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
