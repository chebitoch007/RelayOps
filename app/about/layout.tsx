import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RelayOps — AI Automation Agency",
  description:
    "RelayOps is a small, hands-on AI automation studio based in Nairobi, Kenya. Learn about the founder, the story behind the agency, and how every build gets done.",
  openGraph: {
    title: "About RelayOps | AI Automation for Agencies & Service Businesses",
    description:
      "Meet the founder, understand the mission, and see how RelayOps approaches every automation build — from discovery to deployment.",
    url: "https://www.relayops.site/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}