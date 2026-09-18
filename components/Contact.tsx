"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contact, hero } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/CopyEmailButton";

type MethodProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode;
  children: ReactNode;
};

function Method({ icon, children, ...rest }: MethodProps) {
  return (
    <a
      className="group flex items-center gap-3.5 font-mono text-[14px] font-medium text-text no-underline"
      {...rest}
    >
      <span className="w-[42px] h-[42px] shrink-0 rounded-[10px] border border-line bg-card flex items-center justify-center transition-[border-color,transform] group-hover:border-accent group-hover:-translate-y-0.5">
        {icon}
      </span>
      {children}
    </a>
  );
}

const iconProps = {
  className: "w-[18px] h-[18px] text-accent",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Contact() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="contact" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-[22px] items-start">
        {/* Left — how to reach me */}
        <div>
          <SectionHeading num={contact.eyebrowNum} eyebrow={contact.eyebrow} heading={contact.heading} />
          <p className="text-muted max-w-[48ch] mt-2">{contact.lead[lang]}</p>
          <div className="grid gap-3 mt-6">
            <CopyEmailButton />
            <Method
              href={contact.phoneHref}
              icon={
                <svg {...iconProps}>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
              }
            >
              {contact.phone}
            </Method>
            <Method
              href={contact.github}
              target="_blank"
              rel="noopener"
              icon={
                <svg {...iconProps}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.4 3.8c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-1 2.6V22" />
                </svg>
              }
            >
              {contact.githubLabel}
            </Method>
          </div>
        </div>

        {/* Right — availability */}
        <div className="rounded-[18px] border border-line bg-gradient-to-b from-card2 to-card shadow-card p-6 md:p-[26px]">
          <p className="font-mono text-accent2 text-[12px] tracking-[0.09em] uppercase flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent2 shadow-[0_0_0_4px] shadow-accent2/20" />
            {contact.availability.eyebrow[lang]}
          </p>
          <h3 className="text-[19px] font-bold mt-3 mb-2">{contact.availability.heading[lang]}</h3>
          <p className="text-muted text-[15px] mb-6">{contact.availability.detail[lang]}</p>
          <Button variant="primary" href={hero.cta.cvHref} download className="w-full justify-center">
            ⬇ {hero.cta.cv[lang]}
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
