"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Bilingual } from "@/lib/types";

export function RoleRotator({ roles }: { roles: Bilingual[] }) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const full = roles[index]?.[lang] ?? "";

  useEffect(() => {
    const atFull = text === full;
    let delay: number;
    if (deleting && text === "") delay = 400;
    else if (!deleting && atFull) delay = 1500; // hold on a complete role
    else delay = deleting ? 40 : 80;

    // All state changes happen inside the timeout (async), never synchronously
    // in the effect body — keeps the typewriter from cascading renders.
    const timer = setTimeout(() => {
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else if (deleting) {
        setText(full.slice(0, text.length - 1));
      } else if (atFull) {
        setDeleting(true);
      } else {
        setText(full.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, full, roles.length]);

  return (
    <span aria-label={full}>
      {text}
      <span className="inline-block w-[2px] h-[0.95em] bg-accent align-middle ml-1 animate-pulse" />
    </span>
  );
}
