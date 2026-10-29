import type { CSSProperties } from "react";

export function WebSocketsIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M4 8h15l-4-4" />
      <path d="M20 16H5l4 4" />
    </svg>
  );
}
