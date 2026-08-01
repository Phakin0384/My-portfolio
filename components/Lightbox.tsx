"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { GalleryImage } from "@/data/projects";

export function Lightbox({ image, onClose }: { image: GalleryImage | null; onClose: () => void }) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-8 bg-[rgba(5,8,20,0.9)] cursor-zoom-out"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative max-w-full max-h-full rounded-xl overflow-hidden shadow-card"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image.src}
              alt={image.alt[lang]}
              width={image.width ?? 1400}
              height={image.height ?? 900}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              sizes="90vw"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
