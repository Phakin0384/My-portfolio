"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects, projectsSection } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChip } from "@/components/ui/IconChip";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Projects() {
  const { lang } = useLanguage();
  return (
    <FadeIn id="projects" className="py-14 border-t border-line/50">
      <div className="max-w-[1040px] mx-auto px-6">
        <SectionHeading num={projectsSection.eyebrowNum} eyebrow={projectsSection.eyebrow} heading={projectsSection.heading} />
        <div className="grid gap-[22px] mt-6">
          {projects.map((project) => (
            <SpotlightCard
              key={project.tag}
              className="rounded-[18px] overflow-hidden border border-line shadow-card bg-gradient-to-b from-card2 to-card"
            >
              {project.presentation && (
                <a
                  href={project.presentation.href}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center gap-2.5 min-h-[230px] text-text font-semibold text-[15px] border-b border-line no-underline transition-colors"
                  style={{
                    background:
                      "radial-gradient(600px 200px at 50% 0%, rgba(91,140,255,.22), transparent), #101a36",
                  }}
                >
                  <span className="w-[52px] h-[52px] rounded-full bg-accent text-white flex items-center justify-center text-lg pl-[3px] shadow-[0_8px_24px_rgba(91,140,255,.5)]">
                    ▶
                  </span>
                  {project.presentation.label[lang]}
                </a>
              )}
              <div className="p-6 md:p-[26px]">
                <div className="font-mono text-xs text-accent2 tracking-wide">{project.tag}</div>
                <h3 className="text-xl mt-2 mb-1">
                  {project.name && <>{project.name} </>}
                  {project.nameSuffix[lang]}
                </h3>
                <div className="text-muted text-[13.5px] mb-3.5">{project.meta[lang]}</div>
                {project.description && <p className="text-[#c7cff0] text-[15px]">{project.description[lang]}</p>}
                <ul className="mt-3 mb-1 space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#c7cff0] text-[14.5px] pl-[22px] relative">
                      <span className="absolute left-0 text-accent2">▹</span>
                      {bullet[lang]}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((chip, i) => (
                    <IconChip key={i} icon={chip.icon} label={chip.label} />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
