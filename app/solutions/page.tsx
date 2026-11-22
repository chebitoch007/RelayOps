import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { CtaBand, PageHead } from "@/components/PageParts";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Automation Solutions for Agencies & Service Businesses",
  description: "Lead follow-up, AI chatbots, WhatsApp automation, appointment booking, cold email and workflow integrations, built and documented by RelayOps.",
  alternates: { canonical: "/solutions" },
};

export default function Solutions() {
  return (
    <>
      <PageHead crumbs={[{ name: "Solutions", href: "/solutions" }]} title="Six systems. Each has one job." lede="Practical, deployed AI automation for agencies and service businesses. Every system is scoped, built, tested and handed over with a plain-English guide." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul className="ledger">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`}>
                  <div><h2 style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>{s.title}</h2><p className="tools">{s.tools.join(" · ")}</p></div>
                  <div className="muted" style={{ maxWidth: "36rem" }}>{s.summary}</div>
                  <span className="go" aria-hidden="true"><Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
