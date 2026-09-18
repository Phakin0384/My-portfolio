"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects, projectsSection } from "@/data/projects";
import { viewAll } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ViewAllLink } from "@/components/ui/ViewAllLink";
import { IconChip } from "@/components/ui/IconChip";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectGlyphIcon } from "@/components/icons/ProjectGlyphIcon";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import type { Project } from "@/data/projects";

/** How many projects the home page previews before linking to /projects. */
const HOME_PROJECTS = 3;

/**
 * Home bento rhythm: wide, narrow, wide, narrow… and a lone trailing card goes
 * full width so the grid never ends on a gap. /projects ignores this — every
 * card there is an equal half.
 */
function spanFor(index: number, total: number) {
  if (index % 2 === 1) return "md:col-span-4";
  return index === total - 1 ? "md:col-span-12" : "md:col-span-8";
}

function Cover({ project }: { project: Project }) {
  const { lang } = useLanguage();
  if (project.presentation) {
    return (
      <a
        href={project.presentation.href}
        target="_blank"
        rel="noopener"
        className="pcover flex flex-col items-center justify-center gap-2.5 h-[150px] border-b border-line text-text font-semibold text-[14px] no-underline transition-colors hover:text-accent"
      >
        <span className="w-[46px] h-[46px] rounded-full bg-accent text-on-accent flex items-center justify-center text-base pl-[3px] shadow-[0_8px_24px_var(--spot-glow)]">
          ▶
        </span>
        {project.presentation.label[lang]}
      </a>
    );
  }
  return (
    <div className="pcover flex items-center justify-center h-[150px] border-b border-line">
      <ProjectGlyphIcon glyph={project.glyph ?? "code"} className="w-11 h-11 text-accent opacity-85" />
    </div>
  );
}

function Body({ project }: { project: Project }) {
  const { lang } = useLanguage();
  return (
    <div className="p-6 md:p-[26px] flex flex-col flex-1">
      <div className="font-mono text-[11px] text-accent2 tracking-[0.07em] uppercase">
        {project.tag}
      </div>
      <h3 className="text-xl font-bold mt-2 mb-1 transition-colors group-hover:text-accent">
        {project.name && <>{project.name} </>}
        {project.nameSuffix[lang]}
      </h3>
      <div className="text-muted text-[13.5px] mb-3.5">{project.meta[lang]}</div>
      {project.description && <p className="text-body text-[15px]">{project.description[lang]}</p>}
      <ul className="mt-3 mb-1 space-y-2">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="text-body text-[14.5px] pl-[22px] relative">
            <span className="absolute left-0 text-accent2">▹</span>
            {bullet[lang]}
          </li>
        ))}
      </ul>
      {project.gallery && project.galleryLabel && (
        <ProjectSlideshow
          images={project.gallery}
          href={`/projects/${project.slug}`}
          label={project.galleryLabel}
          aspect={project.galleryAspect}
        />
      )}
      <div className="flex flex-wrap gap-2 mt-4 pt-1">
        {project.stack.map((chip, i) => (
          <IconChip key={i} icon={chip.icon} label={chip.label} />
        ))}
      </div>
    </div>
  );
}

/**
 * The card wrapper. `/projects` gets the cursor-following spotlight; home does
 * not — the glow was too busy on a page that is already a summary. Both keep
 * the hover lift, so the two grids still feel like the same component.
 */
function CardShell({
  spotlight,
  className,
  children,
}: {
  spotlight: boolean;
  className: string;
  children: React.ReactNode;
}) {
  if (spotlight) return <SpotlightCard className={className}>{children}</SpotlightCard>;
  return (
    <div
      className={`relative transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/60 ${className}`}
    >
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
}

export function Projects({ variant = "home" }: { variant?: "home" | "page" }) {
  const isPage = variant === "page";
  const shown = isPage ? projects : projects.slice(0, HOME_PROJECTS);

  return (
    <FadeIn id="projects" className={isPage ? "py-8" : "py-14 border-t border-line/50"}>
      <div className="max-w-[1040px] mx-auto px-6">
        {!isPage && (
          <SectionHeading
            num={projectsSection.eyebrowNum}
            eyebrow={projectsSection.eyebrow}
            heading={projectsSection.heading}
          />
        )}
        <div
          className={
            isPage
              ? "grid grid-cols-1 md:grid-cols-2 gap-[22px]"
              : "grid grid-cols-1 md:grid-cols-12 gap-[22px] mt-6"
          }
        >
          {shown.map((project, index) => (
            <CardShell
              key={project.tag}
              spotlight={isPage}
              className={`group relative flex flex-col rounded-[18px] overflow-hidden border border-line shadow-card bg-gradient-to-b from-card2 to-card transition-colors hover:border-accent/60 ${
                isPage ? "" : spanFor(index, shown.length)
              }`}
            >
              <Cover project={project} />
              <Body project={project} />
              {/* Stitch's corner arrow — only on the full grid, where the cards
                  are uniform enough for it to read as a consistent affordance. */}
              {isPage && (
                <span className="absolute top-4 right-4 z-10 p-2 rounded-full border border-line bg-card/90 backdrop-blur-sm text-accent opacity-0 translate-x-2 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </CardShell>
          ))}
        </div>
        {!isPage && <ViewAllLink href="/projects" label={viewAll.projects} />}
      </div>
    </FadeIn>
  );
}
