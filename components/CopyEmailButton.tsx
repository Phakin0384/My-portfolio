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
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={copyEmail}
        title={contact.email}
        className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-[15px] border border-transparent text-white bg-gradient-to-br from-accent to-[#7aa2ff] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
      >
        ✉ {contact.email}
      </button>
      <AnimatePresence>
        {copied && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded-md border border-line bg-card2 px-2.5 py-1 text-xs font-semibold text-accent2 shadow-card"
          >
            ✓ {contact.copied[lang]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
