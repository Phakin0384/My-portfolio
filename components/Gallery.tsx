"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/projects";
import { Lightbox } from "@/components/Lightbox";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="gallery flex gap-2.5 overflow-x-auto mt-4 pb-2" aria-label="Dataiku pipeline screenshots">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(img)}
            className="relative h-[120px] w-[160px] shrink-0 rounded-[10px] border border-line overflow-hidden cursor-zoom-in transition-transform duration-200 hover:-translate-y-[3px] hover:border-accent"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="160px" />
          </button>
        ))}
      </div>
      <Lightbox image={active} onClose={() => setActive(null)} />
    </>
  );
}
