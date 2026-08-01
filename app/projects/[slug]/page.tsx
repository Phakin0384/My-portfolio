import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Album } from "@/components/Album";
import { AlbumHeader } from "@/components/ui/AlbumHeader";

/** Only projects with screenshots get an album page. */
const withGallery = projects.filter((p) => p.gallery?.length && p.galleryLabel);

export function generateStaticParams() {
  return withGallery.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = withGallery.find((p) => p.slug === slug);
  if (!project) return {};
  const name = project.name || project.nameSuffix.en;
  return {
    title: `${name} — Album`,
    description: `Screens from ${name}. ${project.description?.en ?? ""}`.trim(),
  };
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = withGallery.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="pb-10">
      <AlbumHeader project={project} />
      <Album
        images={project.gallery!}
        label={project.galleryLabel!}
        aspect={project.galleryAspect}
      />
      <div className="max-w-[1040px] mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wide text-accent no-underline transition-transform duration-200 hover:-translate-x-0.5"
        >
          ← /projects
        </Link>
      </div>
    </main>
  );
}
