import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.relayops.site"),
  title: {
    default: "RelayOps — AI Automation for Agencies & Service Businesses",
    template: "%s | RelayOps",
  },
  description:
    "RelayOps builds AI systems that respond to leads in seconds, automate appointment booking, and eliminate manual follow-up. Built for agencies and service businesses.",
  keywords: [
    "AI automation agency",
    "lead follow-up automation",
    "AI chatbot",
    "WhatsApp automation",
    "appointment booking AI",
    "marketing agency automation",
    "workflow automation",
  ],
  authors: [{ name: "RelayOps", url: "https://www.relayops.site" }],
  creator: "RelayOps",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.relayops.site",
    siteName: "RelayOps",
    title: "RelayOps — AI Automation for Agencies & Service Businesses",
    description:
      "Stop following up leads manually. We build AI systems that respond in seconds, qualify leads, and book calls — without your team touching it.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "RelayOps — AI Automation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RelayOps — AI Automation for Agencies",
    description:
      "Stop following up leads manually. AI responds in 2 seconds, qualifies, and books calls automatically.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}