"use client";

import { useLanguage } from "@/context/LanguageContext";
import { educationSection, experienceSection } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";

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

function CardHead({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-line">
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] text-accent shrink-0" {...stroke}>
        {icon}
      </svg>
      <h2 className="text-[19px] font-bold">{children}</h2>
    </div>
  );
}

/**
 * The Education / Experience row on /about — 6 and 6. Education is a timeline
 * (a ruled left edge with a marker per entry); experience is a stack of cards.
 */
export function Education() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="education" className="py-8">
      <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-[22px] items-stretch">
        <div className={`md:col-span-6 ${card}`}>
          <CardHead icon={<path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />}>
            {educationSection.heading[lang]}
          </CardHead>
          <div className="relative border-l border-line ml-1.5 grid gap-6">
            {educationSection.items.map((item, i) => (
              <div key={i} className="relative pl-6">
                <span
                  className={`absolute -left-[6.5px] top-[7px] w-3 h-3 rounded-full bg-card border-2 ${
                    item.past ? "border-line" : "border-accent"
                  }`}
                />
                <h3 className="text-[17px] font-bold">{item.school[lang]}</h3>
                <div className="font-mono text-accent2 text-[12px] tracking-[0.07em] uppercase mt-1 mb-1.5">
                  {item.credential[lang]}
                </div>
                <p className="text-muted text-[14.5px]">{item.detail[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`md:col-span-6 ${card}`}>
          <CardHead
            icon={
              <>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </>
            }
          >
            {experienceSection.heading[lang]}
          </CardHead>
          <div className="grid gap-4">
            {experienceSection.items.map((item, i) => (
              <div key={i} className="rounded-[14px] border border-line bg-chip p-5">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="text-[17px] font-bold">{item.role[lang]}</h3>
                    <div className="font-mono text-accent2 text-[12px] tracking-[0.07em] uppercase mt-1">
                      {item.org[lang]}
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-muted border border-line rounded-md px-2 py-1 whitespace-nowrap">
                    {item.badge[lang]}
                  </span>
                </div>
                <p className="text-body text-[14.5px] mt-3.5 pt-3.5 border-t border-line">
                  {item.summary[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
