"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { activities, experienceSection } from "@/data/site";
import type { GalleryImage } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Lightbox } from "@/components/Lightbox";

const card =
  "rounded-[18px] border border-line bg-gradient-to-b from-card2 to-card shadow-card p-6 md:p-[26px]";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function CardHead({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-line">
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] text-accent shrink-0" {...stroke}>
        {icon}
      </svg>
      <h2 className="text-[19px] font-bold">{children}</h2>
    </div>
  );
}

/** One activity's thumbnail + caption — click opens the full certificate in the Lightbox. */
function ActivityCard({
  item,
  onOpen,
}: {
  item: (typeof activities.items)[number];
  onOpen: (image: GalleryImage) => void;
}) {
  const { lang } = useLanguage();
  return (
    <li>
      <button
        type="button"
        onClick={() => onOpen(item.image)}
        aria-label={item.image.alt[lang]}
        className="group block w-full text-left"
      >
        <div className="relative aspect-[16/10] rounded-[14px] border border-line bg-chip overflow-hidden cursor-zoom-in flex items-center justify-center transition-colors duration-200 group-hover:border-accent">
          <Image
            src={item.image.src}
            alt={item.image.alt[lang]}
            fill
            sizes="(max-width:768px) 90vw, 45vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <h4 className="text-[14.5px] font-bold mt-3">{item.name[lang]}</h4>
        <p className="font-mono text-accent2 text-[11px] tracking-[0.07em] uppercase mt-1">
          {item.detail[lang]}
        </p>
      </button>
    </li>
  );
}

/**
 * The Activities / Experience row on /about — 6 and 6. Activities is a grid of
 * certificate thumbnails; experience is a stack of cards.
 */
export function Education() {
  const { lang } = useLanguage();
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  return (
    <FadeIn id="education" className="py-8">
      <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-[22px] items-stretch">
        <div className={`md:col-span-6 ${card}`}>
          <CardHead
            icon={
              <>
                <circle cx="12" cy="8" r="6" />
                <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
              </>
            }
          >
            {activities.heading[lang]}
          </CardHead>
          <ul className="grid sm:grid-cols-2 gap-5">
            {activities.items.map((item, i) => (
              <ActivityCard key={i} item={item} onOpen={setActiveImage} />
            ))}
          </ul>
        </div>

        <div className={`md:col-span-6 ${card}`}>
          <CardHead
            icon={
              <>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </>
            }
          >
            {experienceSection.heading[lang]}
          </CardHead>
          <div className="grid gap-4">
            {experienceSection.items.map((item, i) => (
              <div key={i} className="rounded-[14px] border border-line bg-chip p-5">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="text-[17px] font-bold">{item.role[lang]}</h3>
                    <div className="font-mono text-accent2 text-[12px] tracking-[0.07em] uppercase mt-1">
                      {item.org[lang]}
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-muted border border-line rounded-md px-2 py-1 whitespace-nowrap">
                    {item.badge[lang]}
                  </span>
                </div>
                <p className="text-body text-[14.5px] mt-3.5 pt-3.5 border-t border-line">
                  {item.summary[lang]}
                </p>
                {item.gallery && item.galleryLabel && (
                  <ProjectSlideshow
                    images={item.gallery}
                    href="/about/certificates"
                    label={item.galleryLabel}
                    aspect={item.galleryAspect}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </FadeIn>
  );
}
