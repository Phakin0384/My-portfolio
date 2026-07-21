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
      ? "bg-gradient-to-br from-accent to-[#7aa2ff] text-white border-transparent hover:-translate-y-0.5"
      : "bg-card text-text border-line hover:border-accent";
  return (
    <a className={`${base} ${variants} ${className}`} {...rest}>
      {children}
    </a>
  );
}
