"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { hero } from "@/data/site";
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
  return (
    <motion.header
      className="relative overflow-hidden pt-20 pb-14"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <HeroBackground />
      <div className="relative z-10 max-w-[1040px] mx-auto px-6">
        <motion.div variants={item} className="font-mono text-accent2 text-sm tracking-wide mb-3.5">
          {hero.kicker}
        </motion.div>
        <motion.h1 variants={item} className="text-[clamp(34px,6vw,56px)] leading-[1.05] font-extrabold tracking-tight">
          {hero.name}
        </motion.h1>
        <motion.div variants={item} className="text-[clamp(18px,2.4vw,22px)] text-accent font-semibold mt-2.5 min-h-[1.6em]">
          <RoleRotator key={lang} roles={hero.roles} />
        </motion.div>
        <motion.p variants={item} className="text-muted max-w-[640px] mt-5 text-[16.5px]">
          {hero.lead[lang]}
        </motion.p>
        <motion.div variants={item} className="flex gap-3.5 mt-8 flex-wrap">
          <Button variant="primary" href="#projects">
            {hero.cta.viewWork[lang]} →
          </Button>
          <Button href={hero.cta.github} target="_blank" rel="noopener">
            GitHub ↗
          </Button>
          <Button href={hero.cta.cvHref} download>
            ⬇ {hero.cta.cv[lang]}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
