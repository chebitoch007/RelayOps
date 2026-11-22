import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHead } from "@/components/PageParts";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About RelayOps",
  description: "RelayOps is a lean AI automation studio run by Brian Chebitoch. Reliable, documented systems for agencies and service businesses, with direct access to the person who builds them.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { h: "Honest over impressive", p: "RelayOps is a small, new agency and does not pretend otherwise. Every page on this site reflects what we have built or can demonstrably build, not what sounds good in a pitch." },
  { h: "Reliable over clever", p: "A system that works quietly every day is worth more than a demo that impresses once. Every workflow is designed to handle failure gracefully and to be easy to understand months later." },
  { h: "Direct access, always", p: "There is no account manager between you and the person building your system. You talk to Brian during scoping, during the build and after it is live." },
];

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Chebitoch",
  jobTitle: "Founder & Automation Engineer",
  worksFor: { "@id": `${SITE.url}/#org` },
  alumniOf: "Multimedia University of Kenya",
  sameAs: [SITE.linkedin],
};

export default function About() {
  return (
    <>
      <PageHead crumbs={[{ name: "About", href: "/about" }]} title={<>Reliable systems, built by <em>one engineer</em>.</>} lede="RelayOps builds AI automation that runs in the background, hands off cleanly to a human, and is still working six months later." />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <h2 className="display-l">Why RelayOps exists</h2>
          <div className="prose">
            <p>Agencies and service businesses lose deals not because they are bad at what they do, but because they are slow to respond. A lead submits a form at 9 p.m. Nobody sees it until the next morning. By then, whoever replied first at 9:01 has already had the conversation.</p>
            <p>The common advice is to hire someone to manage leads. That does not solve the structural problem. It adds headcount to a process that is still manual and still breaks at 9 p.m. on a Friday. The right answer is a system, not a person.</p>
            <p>RelayOps was started to build those systems: not flashy AI demos, but reliable operational infrastructure that runs without anyone babysitting it and hands off to a human when a human is actually needed.</p>
          </div>
        </div>
      </section>

      <section className="section on-night">
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <div>
            <h2 className="display-l">The mission</h2>
          </div>
          <div>
            <p className="display-m" style={{ lineHeight: 1.2 }}>Build AI automation that is reliable enough to trust, transparent enough to understand, and documented well enough to outlast the person who built it.</p>
            <p className="muted" style={{ marginTop: "1.5rem", maxWidth: "58ch" }}>Most automation projects fail not because the technology does not work, but because the system was built for a demo and not for daily operation. RelayOps exists to close that gap.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <div>
            <h2 className="display-l">Brian Chebitoch</h2>
            <p className="label" style={{ marginTop: "0.75rem" }}>Founder and automation engineer · Kenya</p>
          </div>
          <div>
            <p className="prose">IT and systems engineering background, studying Information Technology at Multimedia University of Kenya. Brian approaches AI automation as an engineering problem, not a sales pitch, which means the systems are designed to be reliable, documented, and possible to maintain without a technical team standing by.</p>
            <p style={{ marginTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <a className="ulink ulink-static" href={SITE.linkedin} target="_blank" rel="noopener" style={{ fontWeight: 600 }}>LinkedIn</a>
              <a className="ulink ulink-static" href={SITE.github} target="_blank" rel="noopener" style={{ fontWeight: 600 }}>GitHub</a>
              <a className="ulink ulink-static" href={`mailto:${SITE.email}`} style={{ fontWeight: 600 }}>{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="display-l" style={{ marginBottom: "2.5rem" }}>How we work</h2>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 17rem), 1fr))", gap: "2rem 2.5rem" }}>
            {VALUES.map((v) => (
              <div key={v.h} style={{ borderTop: "1px solid var(--ink)", paddingTop: "1rem" }}>
                <dt className="display-m" style={{ fontSize: "1.6rem" }}>{v.h}</dt>
                <dd style={{ margin: "0.6rem 0 0", color: "var(--ink-2)" }}>{v.p}</dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: "2.5rem" }}>Curious how delivery works? <Link className="ulink ulink-static" href="/#process" style={{ fontWeight: 600 }}>See the eight steps</Link>.</p>
        </div>
      </section>
      <CtaBand />
      <JsonLd data={personLd} />
    </>
  );
}
