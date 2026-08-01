import type { Bilingual, IconKey, SkillGlyph } from "@/lib/types";

export type SkillChip = {
  label?: string;
  bilingualLabel?: Bilingual;
  icon?: IconKey;
  /** Shown under the label on /skills, where groups render as lists. */
  detail?: Bilingual;
};

export type SkillGroup = {
  title: Bilingual;
  glyph: SkillGlyph;
  /** Mono stamp in the card's bottom corner on /skills. */
  note?: string;
  chips: SkillChip[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming", th: "ภาษาโปรแกรม" },
    glyph: "code",
    note: "// CORE_LOGIC",
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
    glyph: "web",
    note: "// TOOLING",
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
    glyph: "data",
    note: "// DATA_OPS",
    chips: [
      { label: "Dataiku", icon: "dataiku" },
      { label: "Power Apps", icon: "powerapps" },
      { label: "Data Pipeline", icon: "datapipeline" },
    ],
  },
  {
    title: { en: "Strengths", th: "จุดแข็ง" },
    glyph: "star",
    chips: [
      {
        bilingualLabel: { en: "Time management", th: "บริหารเวลา" },
        detail: {
          en: "Effective prioritization when several things are due at once.",
          th: "จัดลำดับความสำคัญได้ดีเมื่อมีงานหลายอย่างพร้อมกัน",
        },
      },
      {
        bilingualLabel: { en: "Clear communication", th: "สื่อสารชัดเจน" },
        detail: {
          en: "Direct, concise explanations of technical work to non-technical people.",
          th: "อธิบายงานเชิงเทคนิคให้ผู้ที่ไม่ใช่สายเทคนิคเข้าใจได้อย่างตรงประเด็น",
        },
      },
      {
        bilingualLabel: { en: "Open to feedback", th: "เปิดรับความเห็น" },
        detail: {
          en: "Receptive to input from colleagues and quick to adapt to new methods.",
          th: "เปิดรับความเห็นจากเพื่อนร่วมงานและปรับตัวเข้ากับวิธีการใหม่ได้เร็ว",
        },
      },
    ],
  },
];
