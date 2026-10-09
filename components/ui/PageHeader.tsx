"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Bilingual } from "@/lib/types";

/**
 * Top of a sub-page (/about, /projects, /skills). Takes the place of the
 * numbered SectionHeading, which only makes sense in the home page's sequence.
 */
export function PageHeader({ title, lead }: { title: Bilingual; lead: Bilingual }) {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      className="page-header max-w-[1100px] mx-auto px-5 sm:px-6 pt-12 sm:pt-16 pb-7"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
    >
      <p className="page-header-kicker font-mono text-[11px] sm:text-xs tracking-[0.12em] uppercase text-accent mb-4">
        <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2.5 align-[1px]" aria-hidden />
        {lang === "en" ? "Phakin / Portfolio" : "ภคิน / พอร์ตโฟลิโอ"}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-5 lg:gap-14 items-end">
        <h1 className="text-[clamp(38px,7vw,64px)] leading-[1] font-extrabold tracking-[-0.05em] text-balance">
          {title[lang]}
        </h1>
        <p className="page-header-lead text-body text-[15px] sm:text-[17px] leading-[1.75] max-w-[62ch] lg:pl-5 lg:border-l lg:border-line">
          {lead[lang]}
        </p>
      </div>
      <div className="page-header-rule mt-8 border-b border-line" aria-hidden />
    </motion.header>
  );
}
