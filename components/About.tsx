"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { about, coreFocus, hero, viewAll } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ViewAllLink } from "@/components/ui/ViewAllLink";

const card =
  "rounded-[18px] border border-line bg-gradient-to-b from-card2 to-card shadow-card p-6 md:p-[26px]";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const factIcon = {
  pin: <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />,
  cap: <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />,
};

function Languages() {
  const { lang } = useLanguage();
  return (
    <>
      <p className="font-mono text-accent2 text-[12px] tracking-[0.09em] uppercase mb-3">
        {about.languagesHeading[lang]}
      </p>
      <ul className="grid gap-2.5">
        {about.languages.map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-text text-[15px]">
            <span className="w-[5px] h-[5px] bg-accent2 mt-[11px] shrink-0" />
            {item[lang]}
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * "home" — a preview in the home page's numbered sequence, 4/8 split.
 * "page" — the /about version: a profile card (8) beside core focus (4),
 *          following the Stitch layout.
 */
export function About({ variant = "home" }: { variant?: "home" | "page" }) {
  const { lang } = useLanguage();

  if (variant === "page") {
    return (
      <FadeIn id="about" className="py-8">
        <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-[22px] items-stretch">
          {/* Profile — 8 of 12 */}
          <div className={`md:col-span-8 ${card} flex flex-col`}>
            <div className="flex flex-wrap gap-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl border border-line bg-chip overflow-hidden flex items-center justify-center text-muted">
                {about.photo ? (
                  <Image
                    src={about.photo.src}
                    alt={about.photo.alt[lang]}
                    width={about.photo.width}
                    height={about.photo.height}
                    sizes="128px"
                    priority
                    /* The portrait is taller than the square frame — anchor to
                       the top so the crop takes the shoulders, not the head. */
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-11 h-11" {...stroke} strokeWidth={1.5}>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-[240px]">
                <h2 className="text-[22px] font-bold mb-2.5">{hero.name}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {about.facts.map((fact) => (
                    <span key={fact.icon} className="chip text-[12px]">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-accent2" {...stroke}>
                        {factIcon[fact.icon]}
                      </svg>
                      {fact.label[lang]}
                    </span>
                  ))}
                </div>
                <p className="text-body text-[16px]">{about.bio[lang]}</p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-6 justify-between items-end">
              <div>
                <Languages />
              </div>
              <a
                href={hero.cta.cvHref}
                download
                className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wide text-accent no-underline hover:underline"
              >
                ⬇ {hero.cta.cv[lang]}
              </a>
            </div>
          </div>

          {/* Core focus — 4 of 12 */}
          <div className={`md:col-span-4 ${card} flex flex-col`}>
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent mb-2.5" {...stroke} strokeWidth={1.5}>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <rect x="9" y="9" width="6" height="6" />
              <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
            </svg>
            <h3 className="text-[19px] font-bold mb-4">{coreFocus.heading[lang]}</h3>
            <ul className="grid gap-3 mt-auto">
              {coreFocus.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-body text-[15px]">
                  <span className="w-[5px] h-[5px] bg-accent2 mt-[11px] shrink-0" />
                  {item[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn id="about" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-[22px]">
        {/* Heading — 4 of 12 */}
        <div className="md:col-span-4">
          <SectionHeading num={about.eyebrowNum} eyebrow={about.eyebrow} heading={about.heading} />
          <p className="font-mono text-accent2 text-[12px] tracking-[0.09em] uppercase mt-2">
            {about.subhead[lang]}
          </p>
          <ViewAllLink href="/about" label={viewAll.about} />
        </div>

        {/* Content — 8 of 12 */}
        <div className={`md:col-span-8 ${card}`}>
          <p className="text-body text-[17px]">{about.bio[lang]}</p>
          <div className="mt-6">
            <Languages />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
