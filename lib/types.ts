export type Lang = "en" | "th";

export type Bilingual<T = string> = { en: T; th: T };

export type IconKey =
  | "python"
  | "c"
  | "cplusplus"
  | "javascript"
  | "java"
  | "react"
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
