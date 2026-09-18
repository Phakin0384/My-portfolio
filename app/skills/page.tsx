import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skills } from "@/components/Skills";
import { pageHeaders } from "@/data/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Programming languages, web and data tooling, low-code platforms, and working strengths.",
};

export default function SkillsPage() {
  return (
    <main className="pb-10">
      <PageHeader title={pageHeaders.skills.title} lead={pageHeaders.skills.lead} />
      <Skills variant="page" />
    </main>
  );
}
