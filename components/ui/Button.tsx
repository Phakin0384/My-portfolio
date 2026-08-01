import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  children: ReactNode;
};

export function Button({ variant = "ghost", children, className = "", ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-[15px] border transition-transform duration-200";
  const variants =
    variant === "primary"
      ? "bg-gradient-to-br from-accent to-accent-soft text-on-accent border-transparent hover:-translate-y-0.5"
      : "bg-card text-text border-line hover:border-accent";
  const classes = `${base} ${variants} ${className}`;

  // Route links go through next/link for client-side navigation. A download or
  // an external target still needs a plain <a> — the PDF must not be routed.
  const { href, download, target } = rest;
  const isRoute = href?.startsWith("/") && download === undefined && !target;

  if (isRoute) {
    return (
      <Link href={href!} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
