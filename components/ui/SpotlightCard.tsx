"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card relative transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/60 ${className}`}
    >
      <div className="spotlight-glow" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
