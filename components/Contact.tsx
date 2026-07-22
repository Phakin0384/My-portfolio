"use client";

import { useLanguage } from "@/context/LanguageContext";
import { contact } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function Contact() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="contact" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6 text-center">
        <SectionHeading num={contact.eyebrowNum} eyebrow={contact.eyebrow} heading={contact.heading} />
        <p className="text-muted max-w-[680px] mx-auto">{contact.lead[lang]}</p>
        <div className="flex gap-3.5 justify-center flex-wrap mt-6">
          <CopyEmailButton />
          <Button href={contact.phoneHref}>📞 {contact.phone}</Button>
          <Button href={contact.github} target="_blank" rel="noopener">
            GitHub ↗
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
