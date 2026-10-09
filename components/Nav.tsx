"use client";

import { useEffect, useState } from "react";
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
  const mobileNavId = "mobile-navigation";

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => {
    const closeOnHistoryNavigation = () => setOpen(false);
    window.addEventListener("popstate", closeOnHistoryNavigation);
    return () => window.removeEventListener("popstate", closeOnHistoryNavigation);
  }, []);

  const linkClass = (href: string) =>
    `font-medium text-sm transition-colors ${
      isActive(href, pathname)
        ? "text-accent bg-chip"
        : "text-muted hover:text-text hover:bg-chip/70"
    }`;

  return (
    <nav
      aria-label={lang === "en" ? "Main navigation" : "เมนูหลัก"}
      className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5 font-extrabold text-[17px] tracking-tight no-underline text-text"
        >
          <span className="nav-monogram" aria-hidden>PS</span>
          {nav.brand}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href, pathname) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 ${linkClass(link.href)}`}
              >
                {link.label[lang]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:pl-4 md:border-l md:border-line">
            <button
              onClick={toggle}
              aria-label={lang === "en" ? "Switch language" : "เปลี่ยนภาษา"}
              className="nav-control border border-line bg-chip text-text rounded-full px-3 py-2 text-[12px] sm:text-[13px] font-semibold flex items-center gap-1.5 cursor-pointer transition-colors hover:border-accent"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {nav.toggle[lang]}
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={mobileNavId}
              aria-label={
                open
                  ? lang === "en"
                    ? "Close navigation menu"
                    : "ปิดเมนูนำทาง"
                  : lang === "en"
                    ? "Open navigation menu"
                    : "เปิดเมนูนำทาง"
              }
              className="nav-menu-button md:hidden border border-line bg-chip text-text rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:border-accent"
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
        <div id={mobileNavId} className="mobile-nav-panel md:hidden border-t border-line bg-bg/95 backdrop-blur-xl">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 grid gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href, pathname) ? "page" : undefined}
                className={`rounded-xl px-3 py-3 ${linkClass(link.href)}`}
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
