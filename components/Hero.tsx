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
      <div className="relative z-10 max-w-[1040px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[22px] items-center">
        {/* Copy — 7 of 12 */}
        <div className="lg:col-span-7">
          <motion.h1
            variants={item}
            className="text-[clamp(34px,6vw,54px)] leading-[1.05] font-extrabold tracking-tight"
          >
            {hero.name}
          </motion.h1>
          <motion.div
            variants={item}
            className="text-[clamp(18px,2.4vw,22px)] text-accent font-semibold mt-2.5 min-h-[1.6em]"
          >
            <RoleRotator key={lang} roles={hero.roles} />
          </motion.div>
          <motion.p variants={item} className="text-muted max-w-[54ch] mt-5 text-[16.5px]">
            {hero.lead[lang]}
          </motion.p>
          <motion.div variants={item} className="flex gap-3.5 mt-8 flex-wrap">
            <Button variant="primary" href="/projects">
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

        {/* Spec card — 5 of 12 */}
        <motion.div variants={item} className="lg:col-span-5">
          <div className="rounded-[18px] border border-line bg-gradient-to-b from-card2 to-card shadow-card p-3.5">
            <div className="flex gap-1.5 pb-3 border-b border-line mb-3.5">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-line" />
              <span className="w-2.5 h-2.5 rounded-[3px] bg-line" />
              <span className="w-2.5 h-2.5 rounded-[3px] bg-line" />
            </div>
            <dl className="font-mono text-[12.5px] leading-[1.9] m-0">
              {hero.spec.map((row) => (
                <div key={row.label.en} className="flex justify-between gap-3">
                  <dt className="text-muted">{row.label[lang]}</dt>
                  <dd className="text-text text-right m-0 tabular-nums">{row.value[lang]}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-3">
                <dt className="text-muted">status</dt>
                <dd className="text-accent2 text-right m-0">● {hero.specStatus[lang]}</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
