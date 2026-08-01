"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";
import type { Bilingual } from "@/lib/types";

const shots = { en: "screens", th: "หน้าจอ" } satisfies Bilingual;

/** Header for /projects/<slug> — the project's own title rather than a page one. */
export function AlbumHeader({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const count = project.gallery?.length ?? 0;

  return (
    <motion.header
      className="max-w-[1040px] mx-auto px-6 pt-14 pb-4"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="font-mono text-[11px] text-accent tracking-[0.07em] uppercase">
        {project.tag}
      </div>
      <h1 className="text-[clamp(32px,6vw,48px)] leading-[1.1] font-extrabold tracking-tight mt-2">
        {project.name && <>{project.name} </>}
        {project.nameSuffix[lang]}
      </h1>
      {project.description && (
        <p className="text-muted text-[17px] max-w-[62ch] mt-4">{project.description[lang]}</p>
      )}
      <p className="font-mono text-[12px] tracking-[0.09em] uppercase text-muted mt-4">
        {count} {shots[lang]}
      </p>
    </motion.header>
  );
}
