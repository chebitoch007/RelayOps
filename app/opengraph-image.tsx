import { ImageResponse } from "next/og";

export const alt = "RelayOps: AI automation for agencies and service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f3eee4", color: "#16140f", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 38, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, borderRadius: 22, background: "#e5531a" }} />
          RelayOps
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -3, fontWeight: 700, display: "flex", flexWrap: "wrap" }}>
            Stop following up leads manually.
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: -3, fontWeight: 700, color: "#b23a0c" }}>We automate it.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#4a453b" }}>
          <span>AI automation for agencies and service businesses</span>
          <span>relayops.site</span>
        </div>
      </div>
    ),
    size,
  );
}
