"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { about, hero } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/HeroBackground";
import { RoleRotator } from "@/components/RoleRotator";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <header className="hero-shell relative isolate overflow-hidden border-b border-line">
      <HeroBackground />
      <div className="hero-grid" aria-hidden />
      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-6 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        <motion.div
          className="max-w-[620px]"
          variants={container}
          initial={initial}
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-[clamp(42px,8vw,76px)] leading-[0.98] font-extrabold tracking-[-0.055em] text-balance"
          >
            {hero.name}
          </motion.h1>
          <motion.div
            variants={item}
            className="text-[clamp(18px,2.4vw,22px)] text-accent font-semibold mt-5 min-h-[1.6em]"
          >
            <RoleRotator key={lang} roles={hero.roles} />
          </motion.div>
          <motion.p
            variants={item}
            className="text-body max-w-[54ch] mt-5 text-[16px] sm:text-[17px] leading-[1.75]"
          >
            {hero.subtitle[lang]}
          </motion.p>
          <motion.div variants={item} className="flex gap-3 mt-8 flex-wrap">
            <Button variant="primary" href="/projects">
              {hero.cta.viewWork[lang]} <span aria-hidden>↗</span>
            </Button>
            <Button href={hero.cta.github} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden>↗</span>
            </Button>
            <Button href={hero.cta.cvHref} download>
              <span aria-hidden>↓</span> {hero.cta.cv[lang]}
            </Button>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-9 pt-5 border-t border-line flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-muted"
          >
            {hero.spec.slice(0, 3).map((row) => (
              <div key={row.label.en} className="flex items-baseline gap-2">
                <span className="font-mono text-[10px] tracking-[0.09em] uppercase">
                  {row.label[lang]}
                </span>
                <span className="text-text font-medium">{row.value[lang]}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial={initial}
          animate="show"
          className="hero-profile mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          <div className="hero-photo-frame relative aspect-[4/4.65] overflow-hidden rounded-[26px] border border-line bg-chip shadow-card">
            {about.photo && (
              <Image
                src={about.photo.src}
                alt={about.photo.alt[lang]}
                fill
                priority
                sizes="(max-width: 1023px) 88vw, 42vw"
                className="hero-photo-image object-cover object-top"
              />
            )}
            <div className="hero-photo-shade absolute inset-0" aria-hidden />
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5 rounded-full border border-white/35 bg-black/25 px-3.5 py-2 font-mono text-[10px] sm:text-[11px] tracking-[0.1em] text-white backdrop-blur-md">
              PHAKIN / 2026
            </div>
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 flex items-end justify-between gap-3">
              <div className="text-white">
                <p className="font-mono text-[10px] tracking-[0.13em] uppercase opacity-80">
                  {hero.spec[1].label[lang]}
                </p>
                <p className="mt-1 text-sm sm:text-[15px] font-semibold">
                  {hero.spec[1].value[lang]}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/35 bg-black/25 px-3 py-2 text-[11px] sm:text-xs font-medium text-white backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.16)]" />
                {hero.specStatus[lang]}
              </span>
            </div>
          </div>
          <div className="hero-caption mt-3 flex justify-between gap-4 px-1 font-mono text-[10px] tracking-[0.08em] uppercase text-muted">
            <span>{about.facts[0].label[lang]}</span>
            <span>{hero.spec[3].value[lang]}</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
