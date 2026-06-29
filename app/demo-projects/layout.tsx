import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Qualification & Appointment Booking — Demo Project",
  description:
    "Full architecture, workflow, and tooling documentation for a production-grade AI lead qualification and appointment booking system built for marketing and service agencies.",
  openGraph: {
    title: "AI Lead Qualification & Appointment Booking | RelayOps Demo",
    description:
      "See exactly how RelayOps builds AI systems that qualify leads, book calls, and run follow-up automatically — with architecture diagrams, tech stack, and workflow documentation.",
    url: "https://www.relayops.site/demo-projects",
  },
};

export default function DemoProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}