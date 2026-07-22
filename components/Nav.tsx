"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { nav } from "@/data/site";

export function Nav() {
  const { lang, toggle } = useLanguage();
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = nav.links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0b1020]/72 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-extrabold text-lg tracking-tight">
          Phakin<span className="text-accent">.</span>dev
        </div>
        <div className="flex items-center gap-[22px]">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hidden md:inline font-medium text-sm transition-colors ${
                active === link.href.slice(1) ? "text-accent" : "text-muted hover:text-text"
              }`}
            >
              {link.label[lang]}
            </a>
          ))}
          <button
            onClick={toggle}
            className="border border-line bg-chip text-text rounded-full px-3 py-1.5 text-[13px] font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            🌐 {nav.toggle[lang]}
          </button>
        </div>
      </div>
    </nav>
  );
}
