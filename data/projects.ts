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
  /** Drawn on the card's cover plate. Defaults to "code" when omitted. With a
   *  `presentation`, it replaces the ▶ in the link button instead. */
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
    slug: "health-care-intake",
    tag: "PERSONAL PROJECT · 2026",
    name: "HEALTH CARE INTAKE",
    nameSuffix: { en: "— Real-Time Patient Registration", th: "— ระบบลงทะเบียนผู้ป่วยแบบเรียลไทม์" },
    meta: {
      en: "A patient intake form that streams each answer live to a staff dashboard as it's typed.",
      th: "แบบฟอร์มลงทะเบียนผู้ป่วยที่ส่งคำตอบแต่ละช่องไปยังแดชบอร์ดของเจ้าหน้าที่แบบสดขณะพิมพ์",
    },
    glyph: "health",
    description: {
      en: "At most clinics, staff only see a patient's registration once it's handed in. In this system, patients fill in the form on their phone while staff watch each field appear in real time, along with whether the patient is typing, has paused or has left the form. Staff can then triage, review records and send emergency alerts to every screen.",
      th: "ในคลินิกส่วนใหญ่ เจ้าหน้าที่จะเห็นข้อมูลลงทะเบียนของผู้ป่วยก็ต่อเมื่อส่งแบบฟอร์มแล้วเท่านั้น ระบบนี้ให้ผู้ป่วยกรอกแบบฟอร์มบนโทรศัพท์ ขณะที่เจ้าหน้าที่เห็นแต่ละช่องปรากฏขึ้นแบบเรียลไทม์ พร้อมสถานะว่าผู้ป่วยกำลังพิมพ์ หยุดพัก หรือออกจากแบบฟอร์มไปแล้ว จากนั้นเจ้าหน้าที่สามารถคัดกรองผู้ป่วย ตรวจสอบประวัติ และส่งการแจ้งเตือนฉุกเฉินไปยังทุกหน้าจอได้",
    },
    bullets: [
      {
        en: "Built real-time form mirroring over WebSockets, so staff see each field as it's typed, with Typing, Paused and Abandoned states.",
        th: "สร้างระบบสะท้อนแบบฟอร์มแบบเรียลไทม์ผ่าน WebSockets ให้เจ้าหน้าที่เห็นแต่ละช่องขณะผู้ป่วยพิมพ์ พร้อมสถานะกำลังพิมพ์ หยุดพัก และออกจากแบบฟอร์ม",
      },
      {
        en: "Put all business logic in one pure, unit-tested function kept separate from the networking code (35 tests), with types and validation shared between client and server.",
        th: "รวมตรรกะทางธุรกิจทั้งหมดไว้ในฟังก์ชันบริสุทธิ์ฟังก์ชันเดียวที่แยกจากโค้ดด้านเครือข่ายและผ่านการทดสอบหน่วย (35 เทสต์) โดยใช้ไทป์และการตรวจสอบข้อมูลร่วมกันทั้งฝั่งไคลเอนต์และเซิร์ฟเวอร์",
      },
      {
        en: "Kept data safe through dropped connections and restarts: auto-reconnect with an HTTP fallback, resumable sessions and atomic saves.",
        th: "ปกป้องข้อมูลไม่ให้สูญหายเมื่อการเชื่อมต่อขาดหรือระบบรีสตาร์ท ด้วยการเชื่อมต่อใหม่อัตโนมัติพร้อมช่องทางสำรองผ่าน HTTP เซสชันที่กลับมากรอกต่อได้ และการบันทึกแบบอะตอมมิก",
      },
      {
        en: "Added triage, live analytics, an audit log and emergency broadcasts, all keyboard and screen-reader accessible.",
        th: "เพิ่มระบบคัดกรองผู้ป่วย การวิเคราะห์ข้อมูลแบบสด บันทึกการตรวจสอบ (audit log) และการประกาศเหตุฉุกเฉิน ทั้งหมดใช้งานได้ด้วยคีย์บอร์ดและโปรแกรมอ่านหน้าจอ",
      },
    ],
    stack: [
      { label: "Next.js", icon: "nextjs" },
      { label: "React", icon: "react" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Node.js", icon: "nodejs" },
      { label: "Express", icon: "express" },
      { label: "WebSockets", icon: "websockets" },
      { label: "Tailwind CSS", icon: "tailwindcss" },
      { label: "Render", icon: "render" },
    ],
    presentation: {
      href: "https://health-care-intake.onrender.com",
      label: { en: "View live demo", th: "ดูเดโมออนไลน์" },
    },
    galleryLabel: { en: "Health Care Intake screens", th: "หน้าจอระบบ Health Care Intake" },
    galleryAspect: "landscape",
    gallery: [
      {
        src: "/images/healthcare-intake/default-portal.png",
        alt: {
          en: "Welcome screen — choose between the Patient Portal and Staff Systems",
          th: "หน้าต้อนรับ เลือกระหว่างพอร์ทัลผู้ป่วยและระบบเจ้าหน้าที่",
        },
        width: 1912,
        height: 844,
      },
      {
        src: "/images/healthcare-intake/patient-information.png",
        alt: {
          en: "Patient form — personal information and contact details sections",
          th: "แบบฟอร์มผู้ป่วย ส่วนข้อมูลส่วนตัวและข้อมูลการติดต่อ",
        },
        width: 1061,
        height: 899,
      },
      {
        src: "/images/healthcare-intake/patient-information2.png",
        alt: {
          en: "Patient form — emergency contact, consent checkbox and submit button",
          th: "แบบฟอร์มผู้ป่วย ส่วนผู้ติดต่อกรณีฉุกเฉิน การยินยอม และปุ่มส่งข้อมูล",
        },
        width: 1030,
        height: 896,
      },
      {
        src: "/images/healthcare-intake/staff-monitor.png",
        alt: {
          en: "Staff patient monitor — live session cards filling in field by field, with paused and submitted states",
          th: "หน้าติดตามผู้ป่วยของเจ้าหน้าที่ การ์ดแต่ละเซสชันแสดงข้อมูลที่กรอกแบบสดทีละช่อง พร้อมสถานะหยุดพักและส่งแล้ว",
        },
        width: 1899,
        height: 903,
      },
      {
        src: "/images/healthcare-intake/patient-record.png",
        alt: {
          en: "Patient record — submitted details, intake progress and triage notes",
          th: "ประวัติผู้ป่วย แสดงข้อมูลที่ส่งแล้ว ความคืบหน้าการลงทะเบียน และบันทึกการคัดกรอง",
        },
        width: 1895,
        height: 900,
      },
      {
        src: "/images/healthcare-intake/analytics.png",
        alt: {
          en: "Clinic analytics — today's intake, average intake time, completion rate and triage severity breakdown",
          th: "หน้าวิเคราะห์ข้อมูลคลินิก จำนวนผู้ป่วยวันนี้ เวลาลงทะเบียนเฉลี่ย อัตราการกรอกครบ และสัดส่วนระดับความรุนแรงจากการคัดกรอง",
        },
        width: 1913,
        height: 899,
      },
    ],
  },
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
      {
        src: "/images/crema/admin log-in.png",
        alt: {
          en: "CREMA admin sign-in screen requesting the admin passcode",
          th: "หน้าลงชื่อเข้าใช้ระบบแอดมิน CREMA ที่ให้กรอกรหัสผ่านแอดมิน",
        },
        width: 1913,
        height: 800,
      },
      {
        src: "/images/crema/product management.png",
        alt: {
          en: "CREMA admin product manager showing menu items, prices, sweetness settings, and availability",
          th: "หน้าจัดการสินค้า CREMA แสดงเมนู ราคา ระดับความหวาน และสถานะการจำหน่าย",
        },
        width: 1915,
        height: 629,
      },
      {
        src: "/images/crema/order history.png",
        alt: {
          en: "CREMA purchase history with order totals, revenue, and individual drink orders",
          th: "ประวัติการสั่งซื้อ CREMA แสดงจำนวนคำสั่งซื้อ รายได้ และรายการเครื่องดื่มแต่ละรายการ",
        },
        width: 1914,
        height: 782,
      },
    ],
  },
  {
    slug: "michelin-qo",
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
  },
  {
    slug: "beplan",
    tag: "SOFTWARE ENGINEERING PROJECT · FEB–MAR 2025",
    name: "BePlan",
    nameSuffix: { en: "— AI Scheduling App", th: "— แอปจัดตารางด้วย AI" },
    meta: { en: "University capstone project", th: "โปรเจกต์วิชาวิศวกรรมซอฟต์แวร์" },
    glyph: "calendar",
    description: {
      en: "BePlan is a mobile app that turns big goals into daily tasks. Users write a goal in plain language (Thai or English), and AI splits it into a schedule of tasks. They then mark tasks done each day and follow their progress with charts. Users can also publish their plans as templates and share them, so others can browse, favorite and reuse them. Admins manage the official templates from a web dashboard.",
      th: "BePlan คือแอปมือถือที่เปลี่ยนเป้าหมายใหญ่ให้เป็นงานรายวัน ผู้ใช้เขียนเป้าหมายด้วยภาษาธรรมดา (ไทยหรืออังกฤษ) แล้ว AI จะแบ่งออกเป็นตารางงาน จากนั้นผู้ใช้ทำเครื่องหมายงานที่เสร็จในแต่ละวันและติดตามความคืบหน้าผ่านกราฟ ผู้ใช้ยังเผยแพร่แผนของตัวเองเป็นเทมเพลตและแชร์ได้ ให้ผู้อื่นเข้ามาดู กดชื่นชอบ และนำไปใช้ต่อ ส่วนแอดมินจัดการเทมเพลตทางการผ่านแดชบอร์ดบนเว็บ",
    },
    bullets: [
      {
        en: "Designed and built the core FastAPI + PostgreSQL REST API for goals, tasks, templates and users — CRUD, task-status updates from swipes, rescheduling, and goal status that settles automatically from its tasks.",
        th: "ออกแบบและพัฒนา REST API หลักด้วย FastAPI และ PostgreSQL สำหรับเป้าหมาย งาน เทมเพลต และผู้ใช้ ครอบคลุมการสร้าง อ่าน แก้ไข และลบข้อมูล การอัปเดตสถานะงานจากการปัด การเลื่อนกำหนดการ และสถานะเป้าหมายที่สรุปผลอัตโนมัติจากงานย่อย",
      },
      {
        en: "Built the AI goal-planning service on the Claude API and made it reliable, with Thai-language support, validated output and a graceful fallback when AI is unavailable.",
        th: "สร้างบริการวางแผนเป้าหมายด้วย AI บน Claude API ให้ทำงานได้อย่างเสถียร รองรับภาษาไทย ตรวจสอบความถูกต้องของผลลัพธ์ และมีทางสำรองเมื่อ AI ใช้งานไม่ได้",
      },
      {
        en: "Secured every API route with Clerk token authentication, with admin-only template endpoints, and hardened the backend — batch-inserted task dates, startup database retries, Docker, backend tests, and a database credential leak fixed by moving secrets into environment config.",
        th: "ป้องกันทุกเส้นทาง API ด้วยการยืนยันตัวตนผ่านโทเคนของ Clerk พร้อม endpoint เฉพาะแอดมินสำหรับจัดการเทมเพลต และเพิ่มความเร็วและความทนทานของระบบหลังบ้าน ทั้งการบันทึกวันที่ของงานแบบกลุ่ม การลองเชื่อมต่อฐานข้อมูลซ้ำตอนเริ่มระบบ การทำ Docker การเขียนเทสต์ และแก้ปัญหาข้อมูลรับรองฐานข้อมูลรั่วไหลด้วยการย้ายไปเก็บใน environment config",
      },
      {
        en: "Built and redesigned the major React Native / Expo screens — Schedule, Analysis, Create with template search, Community and the All-Goals overview — plus Thai/English localization and native reminder notifications on iOS and Android.",
        th: "พัฒนาและออกแบบหน้าจอหลักด้วย React Native และ Expo ได้แก่ ตารางเวลา การวิเคราะห์ การสร้างพร้อมค้นหาเทมเพลต ชุมชน และภาพรวมเป้าหมายทั้งหมด พร้อมระบบสองภาษาไทย/อังกฤษ และการแจ้งเตือนแบบเนทีฟบน iOS และ Android",
      },
      {
        en: "Fixed responsive layout across devices plus crashes and platform-specific bugs on iOS, Android and web, moved authentication to Clerk Expo Core 3, and kept Expo SDK dependencies up to date.",
        th: "แก้ไขเลย์เอาต์ให้รองรับทุกอุปกรณ์ รวมถึงอาการแครชและบั๊กเฉพาะแพลตฟอร์มบน iOS, Android และเว็บ ย้ายระบบยืนยันตัวตนไปใช้ Clerk Expo Core 3 และอัปเดต dependencies ของ Expo SDK ให้ทันสมัยอยู่เสมอ",
      },
      {
        en: "Fixed the React admin dashboard's template editor along with its backend update endpoint, set up GitHub Actions CI, and managed releases from develop to main through pull requests.",
        th: "แก้บั๊กตัวแก้ไขเทมเพลตในแดชบอร์ดแอดมิน React พร้อมพัฒนา endpoint ฝั่งหลังบ้านที่คู่กัน ตั้งค่า CI ด้วย GitHub Actions และดูแลการ release จาก develop สู่ main ผ่าน pull request",
      },
    ],
    stack: [
      { label: "React Native", icon: "react" },
      { label: "Expo", icon: "expo" },
      { label: "FastAPI", icon: "fastapi" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "Claude API", icon: "claude" },
      { label: "Clerk", icon: "clerk" },
      { label: "Docker", icon: "docker" },
      { label: "GitHub Actions", icon: "githubactions" },
    ],
    galleryLabel: { en: "BePlan app screens", th: "หน้าจอแอป BePlan" },
    galleryAspect: "portrait",
    gallery: [
      {
        src: "/images/beplan/onboarding.png",
        alt: {
          en: "BePlan onboarding screen — 'Planning Just Got Easier', with log in and open an account",
          th: "หน้าเริ่มต้นใช้งาน BePlan พร้อมปุ่มเข้าสู่ระบบและสมัครสมาชิก",
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
