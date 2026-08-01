import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Sub-pages set only their own title; the template appends the name.
  title: {
    default: "Phakin Saekhow — IT & Software Developer",
    template: "%s — Phakin Saekhow",
  },
  description:
    "Phakin Saekhow — Computer Engineering & Informatics graduate building system design, data pipeline, and full-stack web solutions.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Phakin Saekhow — IT & Software Developer",
    description:
      "Computer Engineering & Informatics graduate building system design, data pipeline, and full-stack web solutions.",
    type: "website",
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before first paint so the saved theme applies with no flash. Falls back
 * to the OS preference, then to dark (which is what the server renders).
 */
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${notoSansThai.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {/* Chrome shared by every route; only the middle changes per page. */}
        <LanguageProvider>
          <ScrollProgress />
          <Nav />
          {children}
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
