import { footer } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-9 pb-[60px] text-center text-muted text-[13px] border-t border-line">
      <div className="max-w-[1040px] mx-auto px-6">
        © {new Date().getFullYear()} {footer.name} · {footer.tagline}
      </div>
    </footer>
  );
}
