import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WebVitals from "@/components/WebVitals";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const metadata = {
  title: "RelayOps | Systemic Validation Protocols",
  description: "Pipeline Auditing and Operational Architecture Buildouts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${jakarta.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#04060A] text-[#F8FAFC] antialiased overflow-x-hidden selection:bg-[#F5A623]/30 selection:text-white">
        {/* Skip-to-content link — hidden until focused, required for WCAG 2.1 Level A */}
        
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#F5A623] focus:text-[#04060A] focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-white"
          >
          Skip to main content
        </a>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}