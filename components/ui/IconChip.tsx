import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiOpenjdk,
  SiReact,
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
  nodejs: SiNodedotjs,
  html5: SiHtml5,
  css: SiCss,
  mysql: SiMysql,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
  dataiku: SiDataiku,
};

function ChipIcon({ icon }: { icon: IconKey }) {
  const Brand = brandIcon[icon];
  if (Brand) return <Brand size={15} color={brandColor[icon]} className="shrink-0" />;

  switch (icon) {
    case "powerapps":
      return <PowerAppsIcon className="w-[15px] h-[15px] shrink-0" />;
    case "datapipeline":
      return <DataPipelineIcon className="w-[15px] h-[15px] shrink-0" />;
    case "dashboards":
      return <DashboardsIcon className="w-[15px] h-[15px] shrink-0" />;
    case "aiintegration":
      return <AiIntegrationIcon className="w-[15px] h-[15px] shrink-0" />;
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
