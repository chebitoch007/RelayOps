import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHead } from "@/components/PageParts";
import { SERVICES, SITE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return SERVICES.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: { title: `${s.metaTitle} | RelayOps`, description: s.metaDescription, url: `${SITE.url}/solutions/${s.slug}` },
  };
}

export default async function Solution({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.metaDescription,
    url: `${SITE.url}/solutions/${s.slug}`,
    provider: { "@id": `${SITE.url}/#org` },
    areaServed: "Worldwide",
    audience: { "@type": "Audience", audienceType: "Marketing agencies and service businesses" },
  };

  return (
    <>
      <PageHead crumbs={[{ name: "Solutions", href: "/solutions" }, { name: s.title, href: `/solutions/${s.slug}` }]} title={s.h1} lede={s.intro} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gap: "3rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <div>
            <h2 className="display-m">The problem</h2>
            <p className="prose" style={{ marginTop: "1rem" }}>{s.problem}</p>
            <h2 className="display-m" style={{ marginTop: "2.5rem" }}>When a human steps in</h2>
            <p className="prose" style={{ marginTop: "1rem" }}>{s.humanHandoff}</p>
            <h2 className="display-m" style={{ marginTop: "2.5rem" }}>Built with</h2>
            <p className="prose" style={{ marginTop: "1rem" }}>{s.tools.join(", ")}. We work with the tools you already use where we can.</p>
          </div>
          <div>
            <h2 className="display-m">What it does</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0" }}>
              {s.does.map((d) => (
                <li key={d} style={{ padding: "1rem 0", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "1.5rem 1fr", gap: "0.75rem" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ marginTop: "0.3rem" }}><path d="M3 9.5 7 13.5 15 4.5" stroke="var(--signal-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>{d}</span>
                </li>
              ))}
              <li style={{ borderTop: "1px solid var(--line)" }} aria-hidden="true" />
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="display-m">Related systems</h2>
          <ul className="ledger" style={{ marginTop: "1.5rem" }}>
            {others.map((o) => (
              <li key={o.slug}><Link href={`/solutions/${o.slug}`}><div><h3>{o.title}</h3></div><div className="muted">{o.summary}</div><span className="go" aria-hidden="true">→</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title={`Want ${s.title.toLowerCase()} for your business?`} />
      <JsonLd data={ld} />
    </>
  );
}
