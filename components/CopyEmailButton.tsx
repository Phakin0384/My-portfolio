"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { contact } from "@/data/site";

export function CopyEmailButton() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      // Fallback for browsers/contexts without the async clipboard API.
      const ta = document.createElement("textarea");
      ta.value = contact.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      title={contact.copyHint[lang]}
      className="group flex items-center gap-3.5 text-left cursor-pointer font-mono text-[14px] font-medium text-text"
    >
      <span className="w-[42px] h-[42px] shrink-0 rounded-[10px] border border-line bg-card flex items-center justify-center transition-[border-color,transform] group-hover:border-accent group-hover:-translate-y-0.5">
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px] text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      </span>
      <span className="flex flex-wrap items-center gap-x-2.5">
        {contact.email}
        <AnimatePresence>
          {copied && (
            <motion.span
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.18 }}
              className="text-[12px] font-semibold text-accent2"
            >
              ✓ {contact.copied[lang]}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
