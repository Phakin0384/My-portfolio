import type { CSSProperties } from "react";

export function DataPipelineIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className} style={style}>
      <circle cx="4" cy="12" r="2" />
      <path d="M6 12h4" />
      <rect x="10" y="9" width="6" height="6" rx="1" />
      <path d="M16 12h4" />
      <circle cx="21" cy="12" r="1.6" />
    </svg>
  );
}
