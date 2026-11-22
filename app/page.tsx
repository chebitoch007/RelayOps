import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { FAQ, SERVICES, SITE, STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "RelayOps | AI Automation for Agencies & Service Businesses" },
  alternates: { canonical: "/" },
};

const photo = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

const TIMELINE = [
  { t: "21:04:11", h: "A lead fills in your form", b: "Friday night. Your team is offline. “We run a six-person clinic and miss most evening enquiries.”" },
  { t: "21:04:13", h: "Reply sent", b: "A relevant answer and one qualifying question, in your tone, two seconds later." },
  { t: "21:05:02", h: "Qualified and booked", b: "Answers are scored, the lead picks a slot, and the call lands on your calendar." },
  { t: "Mon 09:00", h: "You open your inbox", b: "A booked call, a short summary and the full transcript. Nothing to chase." },
];

const OUTCOMES = [
  { h: "No lead goes cold overnight", p: "Enquiries get a response in seconds, are qualified and routed before a competitor is awake. Being first to reply wins deals." },
  { h: "Hours back every week", p: "Repetitive replies, reminders and CRM updates run on their own, every time, including when things get busy." },
  { h: "Nothing done twice", p: "Follow-up sequences, confirmations and data entry are written once and then happen without anyone remembering." },
  { h: "Scale without hiring", p: "Handle more volume without adding headcount. The system costs the same to run at ten leads as at a hundred." },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#service`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  areaServed: "Worldwide",
  serviceType: SERVICES.map((s) => s.title),
  provider: { "@id": `${SITE.url}/#org` },
};

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="section" style={{ paddingBlock: "clamp(3.5rem, 8vw, 6.5rem) clamp(3rem, 6vw, 5rem)" }}>
        <div className="wrap">
          <div className="hero-grid">
            <h1 className="display-xl" data-enter style={{ "--i": 0 } as React.CSSProperties}>
              Stop following up leads manually. <em>We automate it.</em>
            </h1>
            <div>
              <p className="lede" data-enter style={{ "--i": 1 } as React.CSSProperties}>
                Your next qualified lead gets a reply in seconds, a call booked on your calendar and a follow-up sent, without anyone on your team touching it.
              </p>
              <div data-enter style={{ "--i": 2, marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" } as React.CSSProperties}>
                <a className="btn" href={SITE.calendly} target="_blank" rel="noopener">Book a free call <Arrow /></a>
                <a className="btn btn-ghost" href="#process">See how it works</a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "clamp(3.5rem, 8vw, 6rem)" }}>
            <p className="label" style={{ marginBottom: "1.5rem" }}>
              A Friday night, as it would run. <span style={{ color: "var(--ink-3)" }}>Illustrative example, not a client result.</span>
            </p>
            <ol className="tl">
              {TIMELINE.map((e, i) => (
                <li key={e.t} className={`tl-item${i === 1 ? " is-now" : ""}`} style={{ "--n": i } as React.CSSProperties}>
                  <span className="tl-time">{e.t}</span>
                  <h2 className="tl-title">{e.h}</h2>
                  <p className="tl-body">{e.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───── The gap ───── */}
      <section className="section" style={{ background: "var(--paper-2)" }} aria-labelledby="gap-h">
        <div className="wrap" style={{ display: "grid", gap: "clamp(2rem, 5vw, 5rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))", alignItems: "center" }}>
          <div className="photo rise" style={{ aspectRatio: "4 / 3.4" }}>
            <Image src={photo("photo-1586996157503-9587db867a20", 1200)} alt="A business owner on the phone at his desk while working on a computer" fill sizes="(min-width: 64rem) 560px, 100vw" />
          </div>
          <div className="rise">
            <h2 id="gap-h" className="display-l">Deals are lost between the form and the first reply.</h2>
            <div className="prose" style={{ marginTop: "1.5rem" }}>
              <p>Agencies and service businesses rarely lose work because they are bad at it. They lose it because they are slow to respond. A lead submits a form at 9 p.m., nobody sees it until morning, and whoever replied at 9:01 has already had the conversation.</p>
              <p>Hiring someone to watch the inbox does not change the structure of the problem. A system does.</p>
            </div>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 15rem), 1fr))", gap: "2rem 2.5rem" }}>
            {OUTCOMES.map((o) => (
              <div key={o.h} className="rise" style={{ borderTop: "1px solid var(--ink)", paddingTop: "1rem" }}>
                <dt className="display-m" style={{ fontSize: "1.5rem" }}>{o.h}</dt>
                <dd style={{ margin: "0.6rem 0 0", color: "var(--ink-2)", fontSize: "0.97rem" }}>{o.p}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───── Who it's for ───── */}
      <section className="section" aria-labelledby="who-h">
        <div className="wrap" style={{ display: "grid", gap: "clamp(2rem, 5vw, 5rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))", alignItems: "center" }}>
          <div className="rise">
            <h2 id="who-h" className="display-l">Built for teams where the founder is also the inbox.</h2>
            <div className="prose" style={{ marginTop: "1.5rem" }}>
              <p><strong style={{ color: "var(--ink)" }}>Marketing and creative agencies</strong> that get leads from ads, forms and referrals and need every one answered, qualified and booked.</p>
              <p><strong style={{ color: "var(--ink)" }}>Local and service businesses, coaches and consultants</strong> who sell over WhatsApp, email and calls and lose leads when nobody has time to chase.</p>
            </div>
            <p style={{ marginTop: "1.75rem" }}><Link className="ulink ulink-static" href="/work" style={{ fontWeight: 600 }}>See example builds →</Link></p>
          </div>
          <div className="photo rise" style={{ aspectRatio: "4 / 3.4" }}>
            <Image src={photo("photo-1690378820474-b468b8ee64d3", 1200)} alt="A small team seated around a table with laptops, discussing plans" fill sizes="(min-width: 64rem) 560px, 100vw" />
          </div>
        </div>
      </section>

      {/* ───── Solutions ───── */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="sol-h" id="solutions">
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <h2 id="sol-h" className="display-l" style={{ maxWidth: "16ch" }}>Six systems. Each has one job.</h2>
            <p className="lede" style={{ maxWidth: "30rem" }}>Deployed and documented, not prototypes. Every system is scoped, built and handed off ready to run.</p>
          </div>
          <ul className="ledger">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`}>
                  <div>
                    <h3>{s.title}</h3>
                    <p className="tools">{s.tools.join(" · ")}</p>
                  </div>
                  <div className="muted" style={{ maxWidth: "36rem" }}>{s.summary}</div>
                  <span className="go" aria-hidden="true"><Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Process ───── */}
      <section id="process" className="section on-night" aria-labelledby="proc-h">
        <div className="wrap" style={{ display: "grid", gap: "3rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 21rem), 1fr))", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "calc(var(--header-h) + 2rem)" }} className="proc-side">
            <h2 id="proc-h" className="display-l">Eight steps. <em>None skipped.</em></h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>Steps compress or expand with scope, but each exists for a reason. Most automation fails after launch, so testing, documentation and handover are not extras. They are why the system still works six months later.</p>
            <dl style={{ margin: "2rem 0 0", display: "grid", gap: "0.9rem" }}>
              {[["Typical project", "2 to 5 weeks"], ["Your time", "Minimal after kick-off"], ["First results", "From deployment day"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid var(--night-line)", paddingTop: "0.7rem" }}>
                  <dt className="muted">{k}</dt><dd style={{ margin: 0, fontWeight: 600 }}>{v}</dd>
                </div>
              ))}
            </dl>
            <p style={{ marginTop: "2rem" }}><a className="btn" href="#contact">Start with a free call <Arrow /></a></p>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title}><div><h3>{s.title}</h3><p>{s.desc}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Reference build ───── */}
      <section className="section" style={{ background: "var(--paper-2)" }} aria-labelledby="ref-h">
        <div className="wrap" style={{ display: "grid", gap: "3rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <div className="rise">
            <h2 id="ref-h" className="display-l">No client logos yet. Here is a build you can inspect.</h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>RelayOps is new, so we would rather show our work than borrow credibility. The reference build is a complete lead qualification and booking system, documented end to end.</p>
            <p style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link className="btn" href="/demo-projects">Read the reference build <Arrow /></Link>
              <Link className="btn btn-ghost" href="/work">Example builds</Link>
            </p>
          </div>
          <div className="rise">
            <p className="label" style={{ marginBottom: "0.75rem" }}>What it is made of</p>
            <dl style={{ margin: 0 }}>
              {[
                ["Form and chat", "Next.js, React Hook Form, Zod"],
                ["Qualification", "Google Gemini 2.5 Flash, structured JSON output"],
                ["Automation", "n8n (self-hosted), webhook orchestration"],
                ["Booking", "Calendly with webhook signature verification"],
                ["Data", "Google Sheets behind a swappable adapter"],
                ["Notifications", "Gmail SMTP to the lead and to the founder"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "minmax(7rem, 9rem) 1fr", gap: "1rem", padding: "0.85rem 0", borderTop: "1px solid var(--line)" }}>
                  <dt style={{ fontWeight: 600 }}>{k}</dt><dd style={{ margin: 0, color: "var(--ink-2)" }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ───── Founder ───── */}
      <section className="section" aria-labelledby="who-b">
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <h2 id="who-b" className="display-l rise">One engineer. Not a sales team.</h2>
          <div className="rise">
            <div className="prose">
              <p>RelayOps is run by Brian Chebitoch, an automation engineer with an IT and systems background, studying Information Technology at Multimedia University of Kenya.</p>
              <p>He treats automation as an engineering problem, not a sales pitch. That means systems designed to be reliable, documented and possible to maintain without a technical team standing by. Working with one person is a transparency advantage: the person on the discovery call is the person who builds it.</p>
            </div>
            <p style={{ marginTop: "1.5rem" }}><Link className="ulink ulink-static" href="/about" style={{ fontWeight: 600 }}>Read the full story →</Link></p>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="faq-h">
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <h2 id="faq-h" className="display-l">Questions, answered plainly.</h2>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Contact ───── */}
      <section id="contact" className="section on-night" aria-labelledby="contact-h">
        <div className="wrap" style={{ display: "grid", gap: "3rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <div>
            <h2 id="contact-h" className="display-l">Let&rsquo;s fix the bottleneck that is costing you leads and time.</h2>
            <p className="lede" style={{ marginTop: "1.25rem" }}>Tell us where the manual work is: slow lead replies, missed follow-ups, repetitive admin. We will review it and map out exactly what we would automate. No obligation.</p>
            <p style={{ marginTop: "2rem" }}><a className="btn" href={SITE.calendly} target="_blank" rel="noopener">Book a discovery call <Arrow /></a></p>
            <ol className="muted" style={{ marginTop: "2.5rem", paddingLeft: "1.25rem", display: "grid", gap: "0.7rem", maxWidth: "30rem" }}>
              <li>Send the details, or book straight away.</li>
              <li>We review your process and pick the highest-impact automation within 24 hours.</li>
              <li>A 30-minute call: what we would build, how it works and what it costs.</li>
              <li>If you are in, we build it, test it thoroughly and hand it over with a walkthrough.</li>
            </ol>
          </div>
          <div>
            <h3 className="display-m" style={{ marginBottom: "0.5rem" }}>Prefer to write it out?</h3>
            <p className="muted" style={{ marginBottom: "1.75rem" }}>We reply within 24 hours.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
    </>
  );
}
