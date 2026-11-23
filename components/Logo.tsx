import { LOGO } from "@/lib/logo";

/** RelayOps wordmark. "Relay" follows currentColor; "Ops" and the node follow the accent tokens. */
export default function Logo({ height = 38 }: { height?: number }) {
  const width = (height * 318) / 104;
  return (
    <svg
      width={width}
      height={height}
      viewBox={LOGO.wordmarkViewBox}
      role="img"
      aria-label="RelayOps"
      style={{ display: "block", overflow: "visible" }}
    >
      <path d={LOGO.relay} fill="currentColor" />
      <path d={LOGO.ops} fill="var(--logo-ops, var(--signal-ink))" />
      <circle cx={LOGO.dot.cx} cy={LOGO.dot.cy} r={LOGO.dot.r} fill="var(--logo-dot, var(--signal))" />
    </svg>
  );
}
