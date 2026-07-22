import type { Bilingual } from "@/lib/types";

export const nav = {
  brand: "Phakin",
  links: [
    { href: "#about", label: { en: "About", th: "เกี่ยวกับ" } as Bilingual },
    { href: "#skills", label: { en: "Skills", th: "ทักษะ" } as Bilingual },
    { href: "#projects", label: { en: "Projects", th: "ผลงาน" } as Bilingual },
    { href: "#contact", label: { en: "Contact", th: "ติดต่อ" } as Bilingual },
  ],
  toggle: { en: "ไทย", th: "EN" } as Bilingual,
};

export const hero = {
  kicker: "< IT & Software Developer />",
  name: "Phakin Saekhow",
  subtitle: {
    en: "Computer Engineering · System Design · Data",
    th: "วิศวกรรมคอมพิวเตอร์ · ออกแบบระบบ · ข้อมูล",
  } as Bilingual,
  // Roles cycled by the animated hero rotator. Add, remove, or reorder freely —
  // keep each one accurate to what you can actually do.
  roles: [
    { en: "IT & Software Developer", th: "นักพัฒนาไอทีและซอฟต์แวร์" },
    { en: "Full-Stack Web Developer", th: "นักพัฒนาเว็บแบบ Full-Stack" },
    { en: "Data Pipeline Engineer", th: "วิศวกร Data Pipeline" },
    { en: "System & Process Designer", th: "นักออกแบบระบบและกระบวนการ" },
  ] as Bilingual[],
  lead: {
    en: "Motivated IT professional with a strong foundation in computer engineering. I build solutions that improve system and application performance — applying programming and system-management skills to solve real technical problems. Focused on system design, data management, and IT support to create stable, user-centered environments.",
    th: "บุคลากรสายไอทีที่มีความมุ่งมั่นและมีพื้นฐานที่ดีด้านวิศวกรรมคอมพิวเตอร์ มุ่งเน้นการส่งมอบโซลูชันที่ช่วยเพิ่มประสิทธิภาพของระบบและแอปพลิเคชัน โดยนำทักษะด้านการเขียนโปรแกรมและการจัดการระบบมาใช้แก้ปัญหาทางเทคนิค ปัจจุบันมุ่งเน้นการออกแบบระบบ การจัดการข้อมูล และการสนับสนุนด้านไอที เพื่อสร้างสภาพแวดล้อมการทำงานที่เสถียรและตอบโจทย์ผู้ใช้งาน",
  } as Bilingual,
  cta: {
    viewWork: { en: "View my work", th: "ดูผลงาน" } as Bilingual,
    github: "https://github.com/Phakin0384",
    cv: { en: "Download CV", th: "ดาวน์โหลด CV" } as Bilingual,
    cvHref: "/Phakin_Saekhow_Portfolio.pdf",
  },
};

export const about = {
  eyebrowNum: "01",
  eyebrow: { en: "About", th: "เกี่ยวกับ" } as Bilingual,
  heading: { en: "Who I am", th: "เกี่ยวกับผม" } as Bilingual,
  bio: {
    en: "I hold a Bachelor's degree in Computer Engineering & Informatics from Kasetsart University, Sriracha Campus. I enjoy turning messy processes into clean, working systems — whether that's a full-stack web app, a data pipeline, or a low-code tool that saves a team hours of manual work.",
    th: "ผมสำเร็จการศึกษาระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา ผมชอบเปลี่ยนกระบวนการที่ยุ่งยากให้กลายเป็นระบบที่ใช้งานได้จริง ไม่ว่าจะเป็นเว็บแอปแบบ full-stack, data pipeline หรือเครื่องมือ low-code ที่ช่วยลดงานซ้ำซ้อนของทีมได้เป็นชั่วโมง",
  } as Bilingual,
  languagesHeading: { en: "Languages", th: "ภาษา" } as Bilingual,
  languages: [
    { en: "Thai — Native", th: "ไทย — เจ้าของภาษา" } as Bilingual,
    { en: "English — Conversational", th: "อังกฤษ — สนทนาได้" } as Bilingual,
  ],
};

export const educationSection = {
  eyebrowNum: "04",
  eyebrow: { en: "Education", th: "การศึกษา" } as Bilingual,
  heading: { en: "Education", th: "การศึกษา" } as Bilingual,
  degree: { en: "B.Eng. Computer Engineering & Informatics", th: "วิศวกรรมศาสตรบัณฑิต · วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์" } as Bilingual,
  degreeMeta: {
    en: "Kasetsart University, Sriracha Campus · 2022–2026 · GPA 2.98",
    th: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา · พ.ศ. 2565–2569 · GPA 2.98",
  } as Bilingual,
  softSkillsHeading: { en: "Soft skills", th: "ทักษะเชิงบุคคล" } as Bilingual,
  softSkills: [
    { en: "Effective time management & prioritization", th: "บริหารเวลาและจัดลำดับความสำคัญได้ดี" } as Bilingual,
    { en: "Clear, direct communication", th: "สื่อสารชัดเจนและตรงไปตรงมา" } as Bilingual,
    { en: "Open to feedback from colleagues", th: "เปิดรับฟังความเห็นจากเพื่อนร่วมงาน" } as Bilingual,
  ],
};

export const contact = {
  eyebrowNum: "05",
  eyebrow: { en: "Contact", th: "ติดต่อ" } as Bilingual,
  heading: { en: "Let's build something", th: "มาสร้างอะไรดี ๆ กัน" } as Bilingual,
  lead: {
    en: "Open to IT & developer roles. Feel free to reach out.",
    th: "เปิดรับโอกาสในสายงานไอทีและนักพัฒนา ยินดีพูดคุยครับ",
  } as Bilingual,
  email: "phakinsaekhow04@gmail.com",
  copied: { en: "Copied!", th: "คัดลอกแล้ว!" } as Bilingual,
  phone: "+66 093-575-9812",
  phoneHref: "tel:+66935759812",
  github: "https://github.com/Phakin0384",
};

export const footer = {
  name: "Phakin Saekhow",
  tagline: { en: "Built as an interactive portfolio", th: "พอร์ตโฟลิโอแบบอินเทอร์แอกทีฟ" } as Bilingual,
};
