import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const instrument = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});
const schibsted = localFont({
  src: "./fonts/SchibstedGrotesk-Variable.woff2",
  weight: "400 900",
  variable: "--font-schibsted",
  display: "swap",
});
const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-Regular.woff2",
  weight: "400",
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

const TITLE = "RelayOps | AI Automation for Agencies & Service Businesses";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | RelayOps" },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "RelayOps", url: SITE.url }],
  creator: "RelayOps",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description:
      "Stop following up leads manually. We build AI systems that reply in seconds, qualify leads and book calls without your team touching them.",
  },
  twitter: { card: "summary_large_image", title: TITLE },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3eee4",
  colorScheme: "light",
};

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logo-icon.png`,
      email: SITE.email,
      sameAs: [SITE.linkedin, SITE.github],
      founder: { "@type": "Person", name: "Brian Chebitoch" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#org` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${schibsted.variable} ${jetbrains.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} style={{ outline: "none" }}>{children}</main>
        <Footer />
        <JsonLd data={orgLd} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${SITE.gaId}');`}</Script>
      </body>
    </html>
  );
}
