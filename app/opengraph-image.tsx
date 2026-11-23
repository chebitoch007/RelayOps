import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO } from "@/lib/logo";

export const alt = "RelayOps: AI automation for agencies and service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const dir = join(process.cwd(), "app/fonts/og");
  const [regular, italic] = await Promise.all([
    readFile(join(dir, "InstrumentSerif-Regular.ttf")),
    readFile(join(dir, "InstrumentSerif-Italic.ttf")),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f3eee4", color: "#16140f", padding: "64px 72px", fontFamily: "Instrument Serif" }}>
        <svg width="300" height="98" viewBox={LOGO.wordmarkViewBox}>
          <path d={LOGO.relay} fill="#16140f" />
          <path d={LOGO.ops} fill="#b23a0c" />
          <circle cx={LOGO.dot.cx} cy={LOGO.dot.cy} r={LOGO.dot.r} fill="#e5531a" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 1, letterSpacing: -2.5 }}>
          <div>Stop following up leads manually.</div>
          <div style={{ fontStyle: "italic", color: "#b23a0c", marginTop: 6 }}>We automate it.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#4a453b", fontFamily: "sans-serif" }}>
          <span>AI automation for agencies and service businesses</span>
          <span>relayops.site</span>
        </div>
      </div>
    ),
    { ...size, fonts: [
      { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
      { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
    ] },
  );
}
