"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
