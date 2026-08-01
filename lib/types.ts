export type Lang = "en" | "th";

export type Bilingual<T = string> = { en: T; th: T };

/** Decorative glyph shown beside a skill-group heading. */
export type SkillGlyph = "code" | "web" | "data" | "star";

/** Glyph drawn on a project card's cover plate. */
export type ProjectGlyph = "pipeline" | "calendar" | "code" | "chart";

export type IconKey =
  | "python"
  | "c"
  | "cplusplus"
  | "javascript"
  | "java"
  | "react"
  | "expo"
  | "typescript"
  | "jest"
  | "flask"
  | "mongodb"
  | "nodejs"
  | "html5"
  | "css"
  | "mysql"
  | "git"
  | "docker"
  | "figma"
  | "dataiku"
  | "powerapps"
  | "datapipeline"
  | "dashboards"
  | "aiintegration";
