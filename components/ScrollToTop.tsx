"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Async initial check (rAF, not a synchronous setState in the effect body)
    // so it also works when the page loads already scrolled down.
    const raf = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-[55] w-11 h-11 rounded-full border border-line bg-card2/90 backdrop-blur-md text-text text-lg flex items-center justify-center shadow-card cursor-pointer transition-[transform,border-color] hover:border-accent hover:-translate-y-0.5"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
