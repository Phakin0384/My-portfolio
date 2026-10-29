export type Lang = "en" | "th";

export type Bilingual<T = string> = { en: T; th: T };

/** Decorative glyph shown beside a skill-group heading. */
export type SkillGlyph = "code" | "web" | "data" | "star";

/** Glyph drawn on a project card's cover plate. */
export type ProjectGlyph = "pipeline" | "calendar" | "code" | "chart" | "health";

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
  | "nextjs"
  | "express"
  | "tailwindcss"
  | "render"
  | "websockets"
  | "fastapi"
  | "postgresql"
  | "claude"
  | "clerk"
  | "githubactions"
  | "html5"
  | "css"
  | "mysql"
  | "neon"
  | "supabase"
  | "git"
  | "docker"
  | "figma"
  | "dataiku"
  | "powerapps"
  | "datapipeline"
  | "dashboards"
  | "aiintegration";
