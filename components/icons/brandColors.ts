import type { IconKey } from "@/lib/types";

export const brandColor: Partial<Record<IconKey, string>> = {
  python: "#3776AB",
  c: "#A8B9CC",
  cplusplus: "#00599C",
  javascript: "#F7DF1E",
  // Java's Simple Icons mark is black, which vanished on the dark theme; the
  // old white fallback then vanished on the light one. #5382A1 is Java's own
  // secondary brand blue and reads on both grounds.
  java: "#5382A1",
  react: "#61DAFB",
  // Expo's Simple Icons hex is #1C2024 — near-black, and invisible against the
  // dark chip (#131b2e). #4630EB is Expo's own brand indigo and reads on both.
  expo: "#4630EB",
  typescript: "#3178C6",
  jest: "#C21325",
  flask: "#3BABC3",
  mongodb: "#47A248",
  nodejs: "#5FA04E",
  html5: "#E34F26",
  css: "#663399",
  mysql: "#4479A1",
  git: "#F03C2E",
  docker: "#2496ED",
  figma: "#F24E1E",
  dataiku: "#2AB1AC",
};
