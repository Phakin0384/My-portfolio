"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Bilingual } from "@/lib/types";

/** The link from a home-page preview section to its full page. */
export function ViewAllLink({ href, label }: { href: string; label: Bilingual }) {
  const { lang } = useLanguage();
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wide text-accent no-underline mt-6 transition-transform duration-200 hover:translate-x-0.5"
    >
      {label[lang]} →
    </Link>
  );
}
