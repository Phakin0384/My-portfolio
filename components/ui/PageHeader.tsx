"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Bilingual } from "@/lib/types";

/**
 * Top of a sub-page (/about, /projects, /skills). Takes the place of the
 * numbered SectionHeading, which only makes sense in the home page's sequence.
 */
export function PageHeader({ title, lead }: { title: Bilingual; lead: Bilingual }) {
  const { lang } = useLanguage();
  return (
    <motion.header
      className="max-w-[1040px] mx-auto px-6 pt-14 pb-4"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-[clamp(32px,6vw,48px)] leading-[1.1] font-extrabold tracking-tight">
        {title[lang]}
      </h1>
      <p className="text-muted text-[17px] max-w-[62ch] mt-4">{lead[lang]}</p>
    </motion.header>
  );
}
