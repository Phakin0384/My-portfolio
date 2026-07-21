"use client";

import { useLanguage } from "@/context/LanguageContext";
import { footer } from "@/data/site";

export function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="py-9 pb-[60px] text-center text-muted text-[13px] border-t border-line">
      <div className="max-w-[1040px] mx-auto px-6">
        © {new Date().getFullYear()} {footer.name} · {footer.tagline[lang]}
      </div>
    </footer>
  );
}
