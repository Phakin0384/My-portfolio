import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Projects } from "@/components/Projects";
import { pageHeaders } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering work — data pipelines, full-stack web development, and process digitization.",
};

export default function ProjectsPage() {
  return (
    <main className="pb-10">
      <PageHeader title={pageHeaders.projects.title} lead={pageHeaders.projects.lead} />
      <Projects variant="page" />
    </main>
  );
}
