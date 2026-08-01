import type { Bilingual, IconKey, ProjectGlyph } from "@/lib/types";

export type StackChip = { label: string; icon: IconKey };

export type GalleryImage = {
  src: string;
  /** Read aloud by screen readers, so it follows the bilingual rule. */
  alt: Bilingual;
  /** Intrinsic size, used by the lightbox. Defaults to a 1400×900 landscape. */
  width?: number;
  height?: number;
};

export type Project = {
  /** URL segment for the project's album page, /projects/<slug>. */
  slug: string;
  tag: string;
  name: string;
  nameSuffix: Bilingual;
  meta: Bilingual;
  /** Drawn on the card's cover plate. Defaults to "code" when omitted. */
  glyph?: ProjectGlyph;
  description?: Bilingual;
  bullets: Bilingual[];
  stack: StackChip[];
  presentation?: {
    href: string;
    label: Bilingual;
  };
  gallery?: GalleryImage[];
  /** Labels the gallery for screen readers. Required when `gallery` is set. */
  galleryLabel?: Bilingual;
  /** Phone screenshots need tall thumbnails; wide captures need short ones. */
  galleryAspect?: "portrait" | "landscape";
};

export const projectsSection = {
  eyebrowNum: "03",
  eyebrow: { en: "Projects & Experience", th: "ผลงานและประสบการณ์" } as Bilingual,
  heading: { en: "Selected work", th: "ผลงานที่คัดสรร" } as Bilingual,
};

/**
 * Order matters — the bento grid gives the FIRST entry the wide (8-column)
 * slot and the second the narrow (4-column) one, alternating after that. A
 * lone entry at the end spans the full width. Newest work goes first.
 */
export const projects: Project[] = [
  {
    slug: "crema",
    tag: "PERSONAL PROJECT · 2026",
    name: "CREMA",
    nameSuffix: { en: "— Coffee Machine Kiosk", th: "— ระบบคีออสก์เครื่องชงกาแฟ" },
    meta: {
      en: "Kiosk, mobile app, and web admin from one codebase",
      th: "คีออสก์ แอปมือถือ และแอดมินบนเว็บ จากโค้ดชุดเดียว",
    },
    glyph: "code",
    description: {
      en: "A self-service coffee kiosk built from one Expo / React Native codebase that runs as a touchscreen kiosk, a native app, and a web panel. Customers order through Home → Menu → Customize → Payment → Thank you, while staff manage the live menu from a token-protected admin dashboard.",
      th: "ระบบสั่งกาแฟแบบบริการตนเอง จากโค้ด Expo / React Native ชุดเดียว ใช้ได้ทั้งคีออสก์หน้าจอสัมผัส แอปเนทีฟ และหน้าเว็บ ลูกค้าสั่งผ่านขั้นตอน หน้าแรก → เมนู → ปรับแต่ง → ชำระเงิน → ขอบคุณ ส่วนพนักงานจัดการเมนูผ่านแดชบอร์ดแอดมินที่ป้องกันด้วยโทเคน",
    },
    bullets: [
      {
        en: "Implemented the EMVCo / PromptPay spec from scratch with no payment dependencies — TLV encoding, amount-embedded payloads, and a hand-written CRC-16/CCITT-FALSE checksum — so each order renders its own payment QR client-side, verified by Jest against reference vectors.",
        th: "พัฒนามาตรฐาน EMVCo / พร้อมเพย์ขึ้นเองทั้งหมดโดยไม่ใช้ไลบรารีด้านการชำระเงิน ทั้งการเข้ารหัสแบบ TLV เพย์โหลดที่ระบุยอดเงิน และ checksum แบบ CRC-16/CCITT-FALSE ทำให้แต่ละคำสั่งซื้อสร้าง QR ได้เองฝั่งไคลเอนต์ ทดสอบด้วย Jest เทียบกับค่าอ้างอิง",
      },
      {
        en: "Shipped one adaptive codebase across web, native, and kiosk, backed by a Flask REST API on MongoDB Atlas handling product CRUD, order storage, and CSV export.",
        th: "ใช้โค้ดชุดเดียวรองรับทั้งเว็บ แอปเนทีฟ และคีออสก์ ทำงานร่วมกับ REST API ด้วย Flask บน MongoDB Atlas ที่จัดการข้อมูลสินค้า เก็บคำสั่งซื้อ และส่งออกเป็น CSV",
      },
      {
        en: "Kept core logic in pure, framework-free modules behind a full quality gate — ESLint, Prettier, TypeScript and Jest on the frontend, pytest on the backend.",
        th: "แยกตรรกะหลักไว้ในโมดูลที่ไม่ผูกกับเฟรมเวิร์ก ภายใต้ระบบตรวจคุณภาพครบชุด ทั้ง ESLint, Prettier, TypeScript และ Jest ฝั่งหน้าบ้าน และ pytest ฝั่งหลังบ้าน",
      },
    ],
    stack: [
      { label: "React Native", icon: "react" },
      { label: "Expo", icon: "expo" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Jest", icon: "jest" },
      { label: "Flask", icon: "flask" },
      { label: "MongoDB", icon: "mongodb" },
      { label: "Python", icon: "python" },
    ],
    galleryLabel: { en: "CREMA kiosk screens", th: "หน้าจอคีออสก์ CREMA" },
    galleryAspect: "landscape",
    gallery: [
      {
        src: "/images/crema/home.png",
        alt: {
          en: "Kiosk attract screen — the CREMA mark over 'touch to start'",
          th: "หน้าจอพักของคีออสก์ แสดงโลโก้ CREMA พร้อมข้อความแตะเพื่อเริ่ม",
        },
        width: 1910,
        height: 884,
      },
      {
        src: "/images/crema/menu.png",
        alt: {
          en: "Step 1 — choose your coffee, with Mocca, Americano, Espresso, Cappuccino and Latte",
          th: "ขั้นที่ 1 เลือกกาแฟ ทั้งมอคค่า อเมริกาโน่ เอสเพรสโซ่ คาปูชิโน่ และลาเต้",
        },
        width: 1911,
        height: 611,
      },
      {
        src: "/images/crema/customize.png",
        alt: {
          en: "Step 2 — customize sweetness and hot or cold, with a running total",
          th: "ขั้นที่ 2 ปรับระดับความหวานและเลือกร้อนหรือเย็น พร้อมแสดงราคารวม",
        },
        width: 1892,
        height: 871,
      },
      {
        src: "/images/crema/payment.png",
        alt: {
          en: "Step 3 — the generated PromptPay QR encoding this order's exact amount, awaiting payment",
          th: "ขั้นที่ 3 QR พร้อมเพย์ที่สร้างขึ้นพร้อมระบุยอดเงินของคำสั่งซื้อนี้ รอการชำระเงิน",
        },
        width: 1894,
        height: 792,
      },
      {
        src: "/images/crema/thank-you.png",
        alt: {
          en: "Order confirmed — the drink is brewing, with its order number, before returning home",
          th: "ยืนยันคำสั่งซื้อแล้ว กำลังชงเครื่องดื่ม พร้อมหมายเลขคำสั่งซื้อ ก่อนกลับสู่หน้าแรก",
        },
        width: 1890,
        height: 868,
      },
    ],
  },
  {
    slug: "michelin-qo",
    tag: "INTERNSHIP · SIAM MICHELIN (LMC SITE) · DEC 2025–MAR 2026",
    name: "",
    nameSuffix: { en: "Quality Obtention (QO) Intern", th: "นักศึกษาฝึกงาน ตำแหน่ง QO" },
    meta: { en: "Data engineering & process digitization", th: "วิศวกรรมข้อมูลและการทำงานสู่ระบบดิจิทัล" },
    glyph: "pipeline",
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
  },
  {
    slug: "beplan",
    tag: "SOFTWARE ENGINEERING PROJECT · FEB–MAR 2025",
    name: "Beplan",
    nameSuffix: { en: "— AI Scheduling App", th: "— แอปจัดตารางด้วย AI" },
    meta: { en: "University capstone project", th: "โปรเจกต์วิชาวิศวกรรมซอฟต์แวร์" },
    glyph: "calendar",
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
    galleryLabel: { en: "Beplan app screens", th: "หน้าจอแอป Beplan" },
    galleryAspect: "portrait",
    gallery: [
      {
        src: "/images/beplan/onboarding.png",
        alt: {
          en: "Beplan onboarding screen — 'Planning Just Got Easier', with log in and open an account",
          th: "หน้าเริ่มต้นใช้งาน Beplan พร้อมปุ่มเข้าสู่ระบบและสมัครสมาชิก",
        },
        width: 439,
        height: 921,
      },
      {
        src: "/images/beplan/register.png",
        alt: {
          en: "Registration form with name, email and password fields, plus Google and GitHub sign-up",
          th: "หน้าสมัครสมาชิก กรอกชื่อ อีเมล และรหัสผ่าน พร้อมสมัครผ่าน Google และ GitHub",
        },
        width: 434,
        height: 922,
      },
      {
        src: "/images/beplan/verification.png",
        alt: {
          en: "Six-digit email verification code screen",
          th: "หน้ากรอกรหัสยืนยัน 6 หลักที่ส่งทางอีเมล",
        },
        width: 437,
        height: 919,
      },
      {
        src: "/images/beplan/login.png",
        alt: {
          en: "Sign-in screen — 'Welcome back!' with email, password and password recovery",
          th: "หน้าเข้าสู่ระบบ พร้อมช่องอีเมล รหัสผ่าน และการกู้คืนรหัสผ่าน",
        },
        width: 432,
        height: 923,
      },
      {
        src: "/images/beplan/dashboard.png",
        alt: {
          en: "Main dashboard — monthly calendar above a list of SMART goals and plans",
          th: "หน้าหลัก แสดงปฏิทินรายเดือนเหนือรายการเป้าหมาย SMART และแผนงาน",
        },
        width: 431,
        height: 896,
      },
      {
        src: "/images/beplan/plan-actions.png",
        alt: {
          en: "Action sheet on a plan — remove, customize, share or cancel",
          th: "เมนูจัดการแผนงาน — ลบ ปรับแต่ง แชร์ หรือยกเลิก",
        },
        width: 438,
        height: 903,
      },
      {
        src: "/images/beplan/ai-input.png",
        alt: {
          en: "Goal entry screen — describe a plan in plain words, with template and custom goal carousels below",
          th: "หน้ากรอกเป้าหมาย พิมพ์แผนเป็นภาษาพูดได้ พร้อมเทมเพลตและเป้าหมายที่กำหนดเองด้านล่าง",
        },
        width: 435,
        height: 908,
      },
      {
        src: "/images/beplan/ai-input-typing.png",
        alt: {
          en: "The same goal entry screen with the keyboard open mid-typing",
          th: "หน้ากรอกเป้าหมายเดียวกัน ขณะเปิดแป้นพิมพ์และกำลังพิมพ์",
        },
        width: 451,
        height: 920,
      },
      {
        src: "/images/beplan/smart-check.png",
        alt: {
          en: "SMART evaluation — each letter marked green or red against the stated goal",
          th: "การประเมินแบบ SMART แสดงผลแต่ละตัวอักษรเป็นสีเขียวหรือแดงตามเป้าหมายที่ตั้งไว้",
        },
        width: 436,
        height: 926,
      },
      {
        src: "/images/beplan/design-path.png",
        alt: {
          en: "Design Your Path — topic, tasks, and start and finish dates for a new plan",
          th: "หน้าออกแบบเส้นทาง กำหนดหัวข้อ งานย่อย และวันเริ่ม–สิ้นสุดของแผนใหม่",
        },
        width: 407,
        height: 906,
      },
    ],
  },
];
