import type { Bilingual } from "@/lib/types";

export const nav = {
  brand: "Phakin",
  // Routes, not anchors — each of these is a real page under app/.
  // "/#contact" is the exception: contact lives at the bottom of the home page.
  links: [
    { href: "/", label: { en: "Home", th: "หน้าแรก" } as Bilingual },
    { href: "/about", label: { en: "About", th: "เกี่ยวกับ" } as Bilingual },
    { href: "/projects", label: { en: "Projects", th: "ผลงาน" } as Bilingual },
    { href: "/skills", label: { en: "Skills", th: "ทักษะ" } as Bilingual },
    { href: "/#contact", label: { en: "Contact", th: "ติดต่อ" } as Bilingual },
  ],
  toggle: { en: "ไทย", th: "EN" } as Bilingual,
};

/**
 * Headers for the three sub-pages. Each renders as a large display heading
 * plus a lead paragraph, above that page's content.
 */
export const pageHeaders = {
  about: {
    title: { en: "About Me.", th: "เกี่ยวกับผม" } as Bilingual,
    lead: {
      en: "Computer Engineering graduate focused on system efficiency, data management, and IT support.",
      th: "บัณฑิตวิศวกรรมคอมพิวเตอร์ที่มุ่งเน้นประสิทธิภาพของระบบ การจัดการข้อมูล และการสนับสนุนด้านไอที",
    } as Bilingual,
  },
  projects: {
    title: { en: "Selected Work.", th: "ผลงานที่คัดสรร" } as Bilingual,
    lead: {
      en: "Engineering projects and professional experience spanning data pipelines, full-stack web development, and process digitization.",
      th: "โปรเจกต์ทางวิศวกรรมและประสบการณ์การทำงาน ครอบคลุมทั้ง data pipeline การพัฒนาเว็บแบบ full-stack และการเปลี่ยนกระบวนการทำงานสู่ระบบดิจิทัล",
    } as Bilingual,
  },
  skills: {
    title: { en: "Technical Proficiency.", th: "ความเชี่ยวชาญทางเทคนิค" } as Bilingual,
    lead: {
      en: "A full view of the toolkit — programming languages, web and data tooling, and the working habits that go with them.",
      th: "ภาพรวมทั้งหมดของเครื่องมือที่ใช้ ทั้งภาษาโปรแกรม เครื่องมือด้านเว็บและข้อมูล รวมถึงทักษะการทำงานที่มาคู่กัน",
    } as Bilingual,
  },
  certificates: {
    title: { en: "Certificates.", th: "ใบรับรอง" } as Bilingual,
    lead: {
      en: "Certificates from the Siam Michelin (Laem Chabang) internship.",
      th: "ใบรับรองจากการฝึกงานที่บริษัทสยามมิชลิน (แหลมฉบัง)",
    } as Bilingual,
  },
};

/** Label on the link from a home-page preview to its full page. */
export const viewAll = {
  projects: { en: "View all projects", th: "ดูผลงานทั้งหมด" } as Bilingual,
  skills: { en: "View all skills", th: "ดูทักษะทั้งหมด" } as Bilingual,
  about: { en: "More about me", th: "อ่านเพิ่มเติม" } as Bilingual,
};

export const hero = {
  kicker: "< IT & Software Developer />",
  name: "Phakin Saekhow",
  subtitle: {
    en: "Computer Engineering · System Design · Data",
    th: "วิศวกรรมคอมพิวเตอร์ · ออกแบบระบบ · ข้อมูล",
  } as Bilingual,
  // The spec card beside the hero copy. Add or remove rows freely — it's a
  // plain list, and the card grows with it.
  spec: [
    { label: { en: "degree", th: "วุฒิ" }, value: { en: "B.Eng. CPE & Informatics", th: "วศ.บ. วิศวกรรมคอมพิวเตอร์" } },
    { label: { en: "university", th: "สถาบัน" }, value: { en: "Kasetsart · Sriracha", th: "เกษตรศาสตร์ · ศรีราชา" } },
    { label: { en: "graduated", th: "จบการศึกษา" }, value: { en: "2025", th: "2568" } },
    { label: { en: "focus", th: "ความถนัด" }, value: { en: "Systems · Data · IT", th: "ระบบ · ข้อมูล · ไอที" } },
    { label: { en: "languages", th: "ภาษา" }, value: { en: "TH native · EN conv.", th: "ไทย · อังกฤษ" } },
  ] as { label: Bilingual; value: Bilingual }[],
  specStatus: { en: "open to work", th: "เปิดรับงาน" } as Bilingual,
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
    cv: { en: "Download Resume", th: "ดาวน์โหลดเรซูเม่" } as Bilingual,
    cvHref: "/Resume.pdf",
  },
};

export const about = {
  eyebrowNum: "01",
  eyebrow: { en: "About", th: "เกี่ยวกับ" } as Bilingual,
  heading: { en: "Who I am", th: "เกี่ยวกับผม" } as Bilingual,
  // Sits under the heading in the left column of the 4/8 split.
  subhead: { en: "Background & goals", th: "ประวัติและเป้าหมาย" } as Bilingual,
  bio: {
    en: "I hold a Bachelor's degree in Computer Engineering & Informatics from Kasetsart University, Sriracha Campus. I enjoy turning messy processes into clean, working systems — whether that's a full-stack web app, a data pipeline, or a low-code tool that saves a team hours of manual work.",
    th: "ผมสำเร็จการศึกษาระดับปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา ผมชอบเปลี่ยนกระบวนการที่ยุ่งยากให้กลายเป็นระบบที่ใช้งานได้จริง ไม่ว่าจะเป็นเว็บแอปแบบ full-stack, data pipeline หรือเครื่องมือ low-code ที่ช่วยลดงานซ้ำซ้อนของทีมได้เป็นชั่วโมง",
  } as Bilingual,
  languagesHeading: { en: "Languages", th: "ภาษา" } as Bilingual,
  languages: [
    { en: "Thai — Native", th: "ไทย — เจ้าของภาษา" } as Bilingual,
    { en: "English — Conversational", th: "อังกฤษ — สนทนาได้" } as Bilingual,
  ],
  // Portrait on the /about profile card. Remove this and the card falls back
  // to the person glyph.
  photo: {
    src: "/images/me/profile.jpg",
    width: 500,
    height: 631,
    alt: { en: "Phakin Saekhow", th: "ภาคิน แซ่โค้ว" } as Bilingual,
  },
  // Small metadata chips beside the name on the /about profile card.
  facts: [
    { icon: "pin" as const, label: { en: "Thailand", th: "ประเทศไทย" } as Bilingual },
    { icon: "cap" as const, label: { en: "B.Eng. 2025", th: "วศ.บ. 2568" } as Bilingual },
  ],
};

/** The narrow card next to the profile on /about. */
export const coreFocus = {
  heading: { en: "Core focus", th: "จุดมุ่งเน้นหลัก" } as Bilingual,
  items: [
    { en: "System design & optimization", th: "ออกแบบและปรับปรุงประสิทธิภาพระบบ" } as Bilingual,
    { en: "Data pipelines & data management", th: "Data pipeline และการจัดการข้อมูล" } as Bilingual,
    { en: "IT support & infrastructure", th: "การสนับสนุนด้านไอทีและโครงสร้างพื้นฐาน" } as Bilingual,
  ],
};

/** Sits beside the profile card on /about, in Core focus's old 4-of-12 slot. */
export const activities = {
  heading: { en: "Activities", th: "กิจกรรม" } as Bilingual,
  // Oldest first.
  items: [
    {
      name: { en: "Responsive Web Design", th: "Responsive Web Design" } as Bilingual,
      detail: { en: "freeCodeCamp certification · Oct 2024", th: "ใบรับรองจาก freeCodeCamp · ต.ค. 2567" } as Bilingual,
      image: {
        src: "/images/certificate/freecodecamp-responsive-web-design.png",
        alt: {
          en: "freeCodeCamp Responsive Web Design developer certification",
          th: "ใบรับรอง Responsive Web Design จาก freeCodeCamp",
        } as Bilingual,
        width: 1229,
        height: 829,
      },
    },
    {
      name: { en: "Cyber Geek Club Sriracha", th: "ชมรม Cyber Geek Club ศรีราชา" } as Bilingual,
      detail: { en: "Code Battle Contest · Mar 2025", th: "การแข่งขัน Code Battle · มี.ค. 2568" } as Bilingual,
      image: {
        src: "/images/certificate/cyber-code-battle.png",
        alt: {
          en: "Certificate of participation, Code Battle Contest, Cyber Geek Club Sriracha",
          th: "ใบประกาศเกียรติคุณ การแข่งขัน Code Battle ชมรม Cyber Geek Club ศรีราชา",
        } as Bilingual,
        width: 2000,
        height: 1414,
      },
    },
  ],
};

export const educationSection = {
  eyebrow: { en: "Education", th: "การศึกษา" } as Bilingual,
  heading: { en: "Education", th: "การศึกษา" } as Bilingual,
  // Rendered as a timeline — newest first. `past` dims the marker.
  items: [
    {
      school: {
        en: "Kasetsart University, Sriracha Campus",
        th: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
      } as Bilingual,
      credential: {
        en: "Bachelor's Degree · 2022–2025",
        th: "ปริญญาตรี · พ.ศ. 2565–2568",
      } as Bilingual,
      detail: {
        en: "Computer Engineering & Informatics · GPA 2.98",
        th: "วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์ · GPA 2.98",
      } as Bilingual,
      past: true,
    },
    {
      school: {
        en: "Sapa Rachinee School, Trang",
        th: "โรงเรียนสภาราชินี จังหวัดตรัง",
      } as Bilingual,
      credential: {
        en: "Upper Secondary Education · 2019–2021",
        th: "มัธยมศึกษาตอนปลาย · พ.ศ. 2562–2564",
      } as Bilingual,
      detail: {
        en: "Special Science and Mathematics Program",
        th: "ห้องเรียนพิเศษวิทยาศาสตร์และคณิตศาสตร์",
      } as Bilingual,
      past: true,
    },
    {
      school: {
        en: "Sapa Rachinee School, Trang",
        th: "โรงเรียนสภาราชินี จังหวัดตรัง",
      } as Bilingual,
      credential: {
        en: "Lower Secondary Education · 2016–2018",
        th: "มัธยมศึกษาตอนต้น · พ.ศ. 2559–2561",
      } as Bilingual,
      detail: {
        en: "Special Science and Mathematics Program",
        th: "ห้องเรียนพิเศษวิทยาศาสตร์และคณิตศาสตร์",
      } as Bilingual,
      past: true,
    },
  ],
};

/** Sits beside Education on /about, 6/6. */
export const experienceSection = {
  eyebrow: { en: "Experience", th: "ประสบการณ์" } as Bilingual,
  heading: { en: "Experience", th: "ประสบการณ์" } as Bilingual,
  items: [
    {
      role: {
        en: "Quality Obtention (QO) Intern",
        th: "นักศึกษาฝึกงาน ตำแหน่ง QO",
      } as Bilingual,
      org: {
        en: "Siam Michelin — Laem Chabang plant",
        th: "สยามมิชลิน — โรงงานแหลมฉบัง",
      } as Bilingual,
      badge: { en: "Dec 2025 – Mar 2026", th: "ธ.ค. 68 – มี.ค. 69" } as Bilingual,
      summary: {
        en: "Built a Dataiku pipeline joining several production systems so QO staff could trace the root cause of substandard tires faster, and moved paper document processes across three departments into Power Apps.",
        th: "สร้าง Data Pipeline ด้วย Dataiku เชื่อมข้อมูลจากหลายระบบการผลิต ช่วยให้เจ้าหน้าที่ QO สืบหาสาเหตุของยางที่ไม่ได้มาตรฐานได้เร็วขึ้น และเปลี่ยนกระบวนการเอกสารกระดาษของสามแผนกมาอยู่บน Power Apps",
      } as Bilingual,
      galleryLabel: { en: "Michelin certificates", th: "ใบรับรองจาก Michelin" } as Bilingual,
      galleryAspect: "landscape" as const,
      gallery: [
        {
          src: "/images/certificate/completion-letter.jpg",
          alt: {
            en: "Michelin internship completion letter",
            th: "หนังสือรับรองการฝึกงาน บริษัทสยามมิชลิน",
          } as Bilingual,
          width: 1402,
          height: 2047,
        },
        {
          src: "/images/certificate/honor-certificate.jpg",
          alt: {
            en: "Michelin internship honor certificate",
            th: "เกียรติบัตรการฝึกงาน บริษัทสยามมิชลิน",
          } as Bilingual,
          width: 2048,
          height: 1556,
        },
      ],
    },
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
  copyHint: { en: "Click to copy", th: "คลิกเพื่อคัดลอก" } as Bilingual,
  phone: "+66 093-575-9812",
  phoneHref: "tel:+66935759812",
  github: "https://github.com/Phakin0384",
  githubLabel: "github.com/Phakin0384",
  // Right-hand card of the contact section.
  availability: {
    eyebrow: { en: "Availability", th: "สถานะ" } as Bilingual,
    heading: {
      en: "Open to full-time roles",
      th: "เปิดรับงานประจำ",
    } as Bilingual,
    detail: {
      en: "IT support, software development, and data engineering — in Thailand or remote.",
      th: "ไอทีซัพพอร์ต พัฒนาซอฟต์แวร์ และวิศวกรรมข้อมูล — ในไทยหรือทำงานทางไกล",
    } as Bilingual,
  },
};

export const footer = {
  name: "Phakin Saekhow",
  // Deliberately not Bilingual — tech-stack names stay in English in both languages.
  tagline: "Built with Next.js, Tailwind CSS & Framer Motion",
};
