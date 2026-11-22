import Link from "next/link";
import Arrow from "./Arrow";
import JsonLd from "./JsonLd";
import { SITE } from "@/lib/site";

type Crumb = { name: string; href: string };

export function PageHead({ title, lede, crumbs }: { title: React.ReactNode; lede?: string; crumbs: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return (
    <section style={{ paddingBlock: "clamp(3rem, 7vw, 5.5rem) clamp(2.5rem, 5vw, 4rem)" }}>
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="label" style={{ marginBottom: "1.75rem" }}>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <li><Link className="ulink" href="/">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.href} style={{ display: "flex", gap: "0.5rem" }}>
                <span aria-hidden="true">/</span>
                {i === crumbs.length - 1 ? <span aria-current="page" style={{ color: "var(--ink)" }}>{c.name}</span> : <Link className="ulink" href={c.href}>{c.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display-xl" data-enter style={{ fontSize: "clamp(2.5rem, 6.4vw, 5rem)", maxWidth: "20ch" }}>{title}</h1>
        {lede && <p className="lede" data-enter style={{ "--i": 1, marginTop: "1.5rem" } as React.CSSProperties}>{lede}</p>}
      </div>
      <JsonLd data={ld} />
    </section>
  );
}

export function CtaBand({ title = "Tell us where the manual work is." }: { title?: string }) {
  return (
    <section className="section on-night">
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "end" }}>
        <div style={{ maxWidth: "40rem" }}>
          <h2 className="display-l">{title}</h2>
          <p className="lede" style={{ marginTop: "1rem" }}>A 30-minute call to map what we would automate and what it would cost. No obligation.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <a className="btn" href={SITE.calendly} target="_blank" rel="noopener">Book a free call <Arrow /></a>
          <Link className="btn btn-ghost" href="/#contact">Send a message</Link>
        </div>
      </div>
    </section>
  );
}
