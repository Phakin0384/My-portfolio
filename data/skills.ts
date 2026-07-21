import type { Bilingual, IconKey } from "@/lib/types";

export type SkillChip = {
  label?: string;
  bilingualLabel?: Bilingual;
  icon?: IconKey;
};

export type SkillGroup = {
  title: Bilingual;
  chips: SkillChip[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming", th: "ภาษาโปรแกรม" },
    chips: [
      { label: "Python", icon: "python" },
      { label: "C", icon: "c" },
      { label: "C++", icon: "cplusplus" },
      { label: "JavaScript", icon: "javascript" },
      { label: "Java", icon: "java" },
    ],
  },
  {
    title: { en: "Web & Tools", th: "เว็บและเครื่องมือ" },
    chips: [
      { label: "React", icon: "react" },
      { label: "Node.js", icon: "nodejs" },
      { label: "HTML", icon: "html5" },
      { label: "CSS", icon: "css" },
      { label: "MySQL", icon: "mysql" },
      { label: "Git", icon: "git" },
      { label: "Docker", icon: "docker" },
      { label: "Figma", icon: "figma" },
    ],
  },
  {
    title: { en: "Data & Low-Code", th: "ข้อมูลและ Low-Code" },
    chips: [
      { label: "Dataiku", icon: "dataiku" },
      { label: "Power Apps", icon: "powerapps" },
      { label: "Data Pipeline", icon: "datapipeline" },
    ],
  },
  {
    title: { en: "Strengths", th: "จุดแข็ง" },
    chips: [
      { bilingualLabel: { en: "Time management", th: "บริหารเวลา" } },
      { bilingualLabel: { en: "Clear communication", th: "สื่อสารชัดเจน" } },
      { bilingualLabel: { en: "Open to feedback", th: "เปิดรับความเห็น" } },
    ],
  },
];
