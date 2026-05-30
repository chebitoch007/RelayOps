import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://relayops.ai"),
  title: "RelayOps — Automation Systems for Modern Businesses",
  description: "We help agencies and businesses automate lead response, customer support, appointment booking, and outreach using modern AI workflows.",
  keywords: "AI automation, lead generation, chatbots, workflow automation, AI automation",
  alternates: {
    canonical: "https://relayops.ai/",
  },
  openGraph: {
    title: "RelayOps — Automation Systems for Modern Businesses",
    description: "We help agencies and businesses automate lead response, customer support, appointment booking, and outreach using modern AI workflows.",
    type: "website",
    url: "https://relayops.ai",
    siteName: "RelayOps",
    images: [
      {
        url: "https://relayops.ai/og-image.png",
        alt: "RelayOps home page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RelayOps — Automation Systems for Modern Businesses",
    description: "We help agencies and businesses automate lead response, customer support, appointment booking, and outreach using modern AI workflows.",
    images: ["https://relayops.ai/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
