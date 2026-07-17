import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Syne: display/heading font — powers font-space (brand voice, headings, CTAs)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// JetBrains Mono: terminal/code aesthetic — powers font-mono (.mono class, labels, badges)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.relayops.site"),
  title: {
    default: "RelayOps - AI Automation for Agencies & Service Businesses",
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
    title: "RelayOps - AI Automation for Agencies & Service Businesses",
    description:
      "Stop following up leads manually. We build AI systems that respond in seconds, qualify leads, and book calls - without your team touching it.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "RelayOps - AI Automation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RelayOps - AI Automation for Agencies",
    description:
      "Stop following up leads manually. AI responds in 2 seconds, qualifies, and books calls automatically.",
    images: ["/opengraph-image.png"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${syne.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQP2H77QJ9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BQP2H77QJ9');
          `}
        </Script>

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}