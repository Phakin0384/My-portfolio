import type { Metadata } from "next";
import Link from "next/link";
import { experienceSection, pageHeaders } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Album } from "@/components/Album";

export const metadata: Metadata = {
  title: pageHeaders.certificates.title.en,
  description: pageHeaders.certificates.lead.en,
};

const internship = experienceSection.items[0];

export default function CertificatesPage() {
  return (
    <main className="pb-10">
      <PageHeader title={pageHeaders.certificates.title} lead={pageHeaders.certificates.lead} />
      <Album
        images={internship.gallery}
        label={internship.galleryLabel}
        aspect={internship.galleryAspect}
      />
      <div className="max-w-[1040px] mx-auto px-6">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wide text-accent no-underline transition-transform duration-200 hover:-translate-x-0.5"
        >
          ← /about
        </Link>
      </div>
    </main>
  );
}
