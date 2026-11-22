/** Single-colour redraw of the RelayOps "R" (nodes joined by a relay line). */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6v20" />
        <path d="M8 6h9a5.5 5.5 0 0 1 0 11H8" />
        <path d="M14 17l9 9" />
      </g>
      <circle cx="8" cy="6" r="3.1" fill="var(--signal)" />
      <circle cx="8" cy="17" r="3.1" fill="currentColor" />
      <circle cx="8" cy="26" r="3.1" fill="currentColor" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
      <Mark />
      <span style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem", letterSpacing: "-0.01em", lineHeight: 1 }}>
        RelayOps
      </span>
    </span>
  );
}
