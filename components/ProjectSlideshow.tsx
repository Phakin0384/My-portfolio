"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { GalleryImage } from "@/data/projects";
import type { Bilingual } from "@/lib/types";

/** How long each screen is held before the crossfade. */
const HOLD_MS = 5000;
/** Long enough to read as a dissolve rather than a cut. */
const FADE_S = 1.1;

const viewAlbum = { en: "View album", th: "ดูอัลบั้มทั้งหมด" } satisfies Bilingual;

/**
 * The sample shown on a project card: one screen at a time, crossfading every
 * five seconds, linking through to the project's album page.
 *
 * Auto-advance stops while the pointer is over the card and is never started
 * for `prefers-reduced-motion` — it's an indefinite loop, which DESIGN.md §6
 * requires guarding.
 */
export function ProjectSlideshow({
  images,
  href,
  label,
  aspect = "landscape",
}: {
  images: GalleryImage[];
  href: string;
  label: Bilingual;
  aspect?: "portrait" | "landscape";
}) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((n) => (n + 1) % images.length), HOLD_MS);
    return () => clearInterval(id);
  }, [paused, images.length]);

  const current = images[index];
  const frame = aspect === "portrait" ? "h-[380px]" : "h-[220px]";

  return (
    <Link
      href={href}
      aria-label={`${label[lang]} — ${viewAlbum[lang]}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="group relative block mt-5 rounded-[14px] border border-line bg-chip overflow-hidden transition-colors hover:border-accent"
    >
      <div className={`relative ${frame} flex items-center justify-center`}>
        <AnimatePresence mode="sync">
          <motion.div
            key={current.src}
            className="absolute inset-0 flex items-center justify-center p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_S, ease: "easeInOut" }}
          >
            <Image
              src={current.src}
              alt={current.alt[lang]}
              width={current.width ?? 1400}
              height={current.height ?? 900}
              sizes="240px"
              priority={index === 0}
              className="max-h-full w-auto object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Position indicator — spans, not buttons, so the card stays one link. */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5" aria-hidden>
        {images.map((img, i) => (
          <span
            key={img.src}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-5 bg-accent" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>

      <span className="absolute top-3 right-3 font-mono text-[11px] tracking-[0.07em] uppercase text-accent bg-card/90 backdrop-blur-sm border border-line rounded-full px-2.5 py-1 opacity-0 -translate-y-1 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {viewAlbum[lang]} →
      </span>
    </Link>
  );
}
