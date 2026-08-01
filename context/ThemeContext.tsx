"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

/**
 * The <html class="dark"> attribute is the single source of truth — it is set
 * by the blocking script in app/layout.tsx before first paint, so there is no
 * theme flash. React subscribes to it via useSyncExternalStore instead of
 * mirroring it in state, which also keeps us clear of the
 * `react-hooks/set-state-in-effect` rule.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Must match the class rendered on <html> by the server. */
function getServerSnapshot(): Theme {
  return "dark";
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private mode / storage disabled — the class still applies for this visit.
  }
  listeners.forEach((l) => l());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    theme,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
