import type { Bilingual, IconKey } from "@/lib/types";

export type StackChip = { label: string; icon: IconKey };

export type GalleryImage = { src: string; alt: string };

export type Project = {
  tag: string;
  name: string;
  nameSuffix: Bilingual;
  meta: Bilingual;
  description?: Bilingual;
  bullets: Bilingual[];
  stack: StackChip[];
  presentation?: {
    href: string;
    label: Bilingual;
  };
  gallery?: GalleryImage[];
};

export const projectsSection = {
  eyebrowNum: "03",
  eyebrow: { en: "Projects & Experience", th: "ผลงานและประสบการณ์" } as Bilingual,
  heading: { en: "Selected work", th: "ผลงานที่คัดสรร" } as Bilingual,
};

export const projects: Project[] = [
  {
    tag: "SOFTWARE ENGINEERING PROJECT · FEB–MAR 2025",
    name: "Beplan",
    nameSuffix: { en: "— AI Scheduling App", th: "— แอปจัดตารางด้วย AI" },
    meta: { en: "University capstone project", th: "โปรเจกต์วิชาวิศวกรรมซอฟต์แวร์" },
    description: {
      en: "An intelligent scheduling application that blends AI to help users brainstorm, structure, and refine their daily plans more effectively.",
      th: "แอปพลิเคชันจัดตารางเวลาอัจฉริยะที่ผสานความสามารถของ AI เพื่อช่วยผู้ใช้ระดมความคิด วางโครงสร้าง และปรับปรุงแผนงานประจำวันได้อย่างมีประสิทธิภาพ",
    },
    bullets: [
      {
        en: "Designed a friendly, intuitive UI linking user input to AI-generated recommendations seamlessly.",
        th: "ออกแบบ UI ที่เป็นมิตรและเข้าใจง่าย เชื่อมข้อมูลของผู้ใช้เข้ากับคำแนะนำจาก AI ได้อย่างราบรื่น",
      },
      {
        en: "Improved users' time management and personal productivity through smart planning.",
        th: "ยกระดับการบริหารจัดการเวลาและประสิทธิผลส่วนบุคคลผ่านการวางแผนอัจฉริยะ",
      },
    ],
    stack: [
      { label: "React", icon: "react" },
      { label: "Node.js", icon: "nodejs" },
      { label: "MySQL", icon: "mysql" },
      { label: "AI Integration", icon: "aiintegration" },
      { label: "Figma", icon: "figma" },
    ],
  },
  {
    tag: "INTERNSHIP · SIAM MICHELIN (LMC SITE) · DEC 2025–MAR 2026",
    name: "",
    nameSuffix: { en: "Quality Obtention (QO) Intern", th: "นักศึกษาฝึกงาน ตำแหน่ง QO" },
    meta: { en: "Data engineering & process digitization", th: "วิศวกรรมข้อมูลและการทำงานสู่ระบบดิจิทัล" },
    bullets: [
      {
        en: "Built a Dataiku data pipeline integrating multiple production systems, cutting redundant analysis steps and helping QO staff trace root causes of substandard tires faster and more accurately.",
        th: "สร้าง Data Pipeline ด้วย Dataiku บูรณาการข้อมูลจากหลายระบบเข้าด้วยกัน ลดขั้นตอนที่ซ้ำซ้อน และช่วยให้เจ้าหน้าที่ QO สืบหาสาเหตุหลักของยางที่ไม่ได้มาตรฐานได้เร็วและแม่นยำยิ่งขึ้น",
      },
      {
        en: "Developed Power Apps solutions to digitize paper-based document processes across FIS, QO, and DMTC departments into a clear digital dashboard.",
        th: "พัฒนาแอปพลิเคชันด้วย Power Apps เปลี่ยนกระบวนการเอกสารกระดาษข้ามแผนก FIS, QO และ DMTC ให้เป็นแพลตฟอร์มดิจิทัลที่แสดงข้อมูลภาพรวมได้ชัดเจน",
      },
      {
        en: "Improved cross-department workflow efficiency through better data management.",
        th: "เพิ่มประสิทธิภาพการทำงานข้ามแผนกด้วยการจัดการข้อมูลที่ดีขึ้น",
      },
    ],
    stack: [
      { label: "Dataiku", icon: "dataiku" },
      { label: "Power Apps", icon: "powerapps" },
      { label: "Data Pipeline", icon: "datapipeline" },
      { label: "Dashboards", icon: "dashboards" },
    ],
    presentation: {
      href: "https://canva.link/gjse68ok566mk7w",
      label: { en: "View project presentation (Canva)", th: "ดูสไลด์นำเสนอโปรเจกต์ (Canva)" },
    },
    gallery: [
      { src: "/images/pipelines/cq.jpg", alt: "CQ data pipeline" },
      { src: "/images/pipelines/fyt-cx-all.jpg", alt: "FYT_CX_All data pipeline" },
      { src: "/images/pipelines/fyt-cx-f.jpg", alt: "FYT_CX_F data pipeline" },
      { src: "/images/pipelines/fyt-cx-c.jpg", alt: "FYT_CX_C data pipeline" },
      { src: "/images/pipelines/database-pdo.jpg", alt: "Database_PDO data pipeline" },
      { src: "/images/pipelines/database-fyt.jpg", alt: "Database_FYT data pipeline" },
    ],
  },
];
