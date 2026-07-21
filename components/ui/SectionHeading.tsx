"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Bilingual } from "@/lib/types";

export function SectionHeading({
  num,
  eyebrow,
  heading,
}: {
  num: string;
  eyebrow: Bilingual;
  heading: Bilingual;
}) {
  const { lang } = useLanguage();
  return (
    <>
      <div className="font-mono text-accent2 text-[13px] tracking-wide">
        {num} · {eyebrow[lang]}
      </div>
      <h2 className="text-[clamp(24px,3.4vw,32px)] font-extrabold mt-2 mb-1.5 tracking-tight">
        {heading[lang]}
      </h2>
    </>
  );
}
