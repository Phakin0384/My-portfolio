"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { nav } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

/**
 * "/#contact" is a section on the home page, not a route — it never counts as
 * the active page, otherwise Home and Contact would both light up on "/".
 */
function isActive(href: string, pathname: string) {
  if (href.includes("#")) return false;
  return href === pathname;
}

export function Nav() {
  const { lang, toggle } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `font-medium text-sm transition-colors ${
      isActive(href, pathname) ? "text-accent" : "text-muted hover:text-text"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/75 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-extrabold text-lg tracking-tight no-underline text-text">
          {nav.brand}
        </Link>

        <div className="flex items-center gap-[22px]">
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href} className={`hidden md:inline ${linkClass(link.href)}`}>
              {link.label[lang]}
            </Link>
          ))}

          <div className="flex items-center gap-2 md:pl-[22px] md:border-l md:border-line">
            <button
              onClick={toggle}
              className="border border-line bg-chip text-text rounded-full px-3 py-1.5 text-[13px] font-semibold flex items-center gap-1.5 cursor-pointer transition-colors hover:border-accent"
            >
              🌐 {nav.toggle[lang]}
            </button>
            <ThemeToggle />
            {/* Sub-pages are unreachable on mobile without this. */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
              className="md:hidden border border-line bg-chip text-text rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-colors hover:border-accent"
            >
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden
              >
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg/95 backdrop-blur-md">
          <div className="max-w-[1040px] mx-auto px-6 py-3 grid gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 ${linkClass(link.href)}`}
              >
                {link.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
