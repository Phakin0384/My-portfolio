"use client";

import { useLanguage } from "@/context/LanguageContext";
import { about } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="about" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6">
        <SectionHeading num={about.eyebrowNum} eyebrow={about.eyebrow} heading={about.heading} />
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[22px] mt-6">
          <div className="bg-card border border-line rounded-2xl p-6 shadow-card">
            <p className="text-muted max-w-[680px]">{about.bio[lang]}</p>
          </div>
          <div className="bg-card border border-line rounded-2xl p-6 shadow-card">
            <h3 className="text-lg mb-1">{about.languagesHeading[lang]}</h3>
            <ul className="mt-2">
              {about.languages.map((item, i) => (
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
