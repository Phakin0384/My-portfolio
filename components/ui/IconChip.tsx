import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiOpenjdk,
  SiReact,
  SiExpo,
  SiTypescript,
  SiJest,
  SiFlask,
  SiMongodb,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiMysql,
  SiGit,
  SiDocker,
  SiFigma,
  SiDataiku,
} from "react-icons/si";
import type { IconKey } from "@/lib/types";
import { brandColor } from "@/components/icons/brandColors";
import { PowerAppsIcon } from "@/components/icons/PowerAppsIcon";
import { DataPipelineIcon } from "@/components/icons/DataPipelineIcon";
import { DashboardsIcon } from "@/components/icons/DashboardsIcon";
import { AiIntegrationIcon } from "@/components/icons/AiIntegrationIcon";

const brandIcon: Partial<Record<IconKey, typeof SiPython>> = {
  python: SiPython,
  c: SiC,
  cplusplus: SiCplusplus,
  javascript: SiJavascript,
  java: SiOpenjdk,
  react: SiReact,
  expo: SiExpo,
  typescript: SiTypescript,
  jest: SiJest,
  flask: SiFlask,
  mongodb: SiMongodb,
  nodejs: SiNodedotjs,
  html5: SiHtml5,
  css: SiCss,
  mysql: SiMysql,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
  dataiku: SiDataiku,
};

/** Exported so /skills can render the same icons larger than a chip does. */
export function ChipIcon({ icon, size = 15 }: { icon: IconKey; size?: number }) {
  const Brand = brandIcon[icon];
  if (Brand) return <Brand size={size} color={brandColor[icon]} className="shrink-0" />;

  // Custom icons render in currentColor so they stay legible in both themes.
  const box = { width: size, height: size };
  switch (icon) {
    case "powerapps":
      return <PowerAppsIcon style={box} className="shrink-0 text-brand-purple" />;
    case "datapipeline":
      return <DataPipelineIcon style={box} className="shrink-0 text-accent2" />;
    case "dashboards":
      return <DashboardsIcon style={box} className="shrink-0 text-accent" />;
    case "aiintegration":
      return <AiIntegrationIcon style={box} className="shrink-0 text-accent" />;
    default:
      return null;
  }
}

export function IconChip({ icon, label }: { icon: IconKey; label: string }) {
  return (
    <span className="chip">
      <ChipIcon icon={icon} />
      {label}
    </span>
  );
}
