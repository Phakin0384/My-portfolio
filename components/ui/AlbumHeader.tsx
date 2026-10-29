"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";
import type { Bilingual } from "@/lib/types";
import { IconChip } from "@/components/ui/IconChip";

const shots = { en: "screens", th: "หน้าจอ" } satisfies Bilingual;

/** Header for /projects/<slug> — the project's own title rather than a page one. */
export function AlbumHeader({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const count = project.gallery?.length ?? 0;

  return (
    <motion.header
      className="max-w-[1280px] mx-auto px-6 pt-14 pb-4"
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
      {/* Same copy as the /projects card; two columns once there's room so lines stay readable. */}
      <div className="grid gap-x-10 gap-y-5 mt-5 lg:grid-cols-2">
        <div>
          <p className="text-muted text-[15px]">{project.meta[lang]}</p>
          {project.description && (
            <p className="text-body text-[16px] md:text-[17px] mt-3">{project.description[lang]}</p>
          )}
        </div>
        <ul className="space-y-2.5">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="text-body text-[15px] md:text-[16px] pl-[22px] relative">
              <span className="absolute left-0 text-accent2">▹</span>
              {bullet[lang]}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((chip, i) => (
          <IconChip key={i} icon={chip.icon} label={chip.label} />
        ))}
      </div>
      <p className="font-mono text-[12px] tracking-[0.09em] uppercase text-muted mt-6">
        {count} {shots[lang]}
      </p>
    </motion.header>
  );
}
