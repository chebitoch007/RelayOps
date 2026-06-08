import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://relayops.ai"),

  title: {
    default: "RelayOps | Systems Engineering & Workflow Automation",
    template: "%s | RelayOps",
  },

  description:
    "Production-grade workflow automation, AI orchestration systems, and operational infrastructure engineered for businesses that cannot afford failure.",

  keywords: [
    "workflow automation",
    "AI systems",
    "business automation",
    "operations engineering",
    "n8n automation",
    "AI agents",
    "workflow orchestration",
    "RelayOps",
  ],

  alternates: {
    canonical: "https://relayops.ai",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "RelayOps | Systems Engineering & Workflow Automation",
    description:
      "Production-grade workflow automation, AI orchestration systems, and operational infrastructure engineered for businesses that cannot afford failure.",
    url: "https://relayops.ai",
    siteName: "RelayOps",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "RelayOps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RelayOps | Systems Engineering & Workflow Automation",
    description:
      "Production-grade workflow automation, AI orchestration systems, and operational infrastructure engineered for businesses that cannot afford failure.",
    images: ["/logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}