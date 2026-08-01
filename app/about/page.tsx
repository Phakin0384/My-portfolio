import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { pageHeaders } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Phakin Saekhow — Computer Engineering & Informatics graduate from Kasetsart University, Sriracha Campus.",
};

export default function AboutPage() {
  return (
    <main className="pb-10">
      <PageHeader title={pageHeaders.about.title} lead={pageHeaders.about.lead} />
      <About variant="page" />
      <Education />
    </main>
  );
}
