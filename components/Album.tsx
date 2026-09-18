"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { GalleryImage } from "@/data/projects";
import type { Bilingual } from "@/lib/types";
import { FadeIn } from "@/components/ui/FadeIn";
import { Lightbox } from "@/components/Lightbox";

/** Cell shape. Portrait matches a phone's ~9:19; landscape a 16:10 capture. */
const cell = {
  portrait: { ratio: "aspect-[9/19]", cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5", sizes: "(max-width:640px) 45vw, (max-width:1024px) 30vw, 190px" },
  landscape: { ratio: "aspect-[16/10]", cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", sizes: "(max-width:640px) 90vw, (max-width:1024px) 45vw, 320px" },
};

export function Album({
  images,
  label,
  aspect = "landscape",
}: {
  images: GalleryImage[];
  label: Bilingual;
  aspect?: "portrait" | "landscape";
}) {
  const { lang } = useLanguage();
  const [active, setActive] = useState<GalleryImage | null>(null);
  const { ratio, cols, sizes } = cell[aspect];

  return (
    <FadeIn className="py-8">
      <div className="max-w-[1040px] mx-auto px-6">
        <div className={`grid ${cols} gap-4`} role="group" aria-label={label[lang]}>
          {images.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(img)}
              aria-label={img.alt[lang]}
              className={`relative ${ratio} rounded-[14px] border border-line bg-chip overflow-hidden cursor-zoom-in transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-accent`}
            >
              <Image src={img.src} alt={img.alt[lang]} fill sizes={sizes} className="object-contain p-1.5" />
            </button>
          ))}
        </div>
        <Lightbox image={active} onClose={() => setActive(null)} />
      </div>
    </FadeIn>
  );
}
