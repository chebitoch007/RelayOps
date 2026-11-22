import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHead } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Example Builds: What We Would Build for Agencies & Service Businesses",
  description: "Illustrative AI automation builds for lead qualification, WhatsApp follow-up and no-show recovery. RelayOps is new, so these show our approach, not past client results.",
  alternates: { canonical: "/work" },
};

// Illustrative builds: how we would approach each problem. Not past client results.
const BUILDS = [
  {
    title: "Lead qualification and booking system", who: "Marketing and service agencies", href: "/solutions/lead-follow-up-automation",
    problem: "Inbound leads sit in a shared inbox for hours before anyone replies, and by then the lead has already talked to a competitor.",
    approach: "An AI assistant on the website or ad funnel responds the moment a lead arrives, asks a few qualifying questions, and books a call directly onto the team's calendar for the leads worth a human's time.",
    does: ["Responds to new leads within seconds, day or night", "Asks the same qualifying questions a salesperson would", "Books straight to your calendar with no back-and-forth", "Routes anything unclear to a human instead of guessing"],
  },
  {
    title: "WhatsApp and SMS follow-up sequences", who: "Local and service businesses", href: "/solutions/whatsapp-automation",
    problem: "Leads who do not book on the first message usually never hear from the business again. There is no time to chase every cold lead by hand.",
    approach: "An automated sequence checks back in over WhatsApp or SMS on a set schedule, answers common questions, and hands off to a person as soon as the lead is ready to talk.",
    does: ["Multi-touch follow-up without anyone remembering to send it", "Handles FAQs so leads are not left waiting", "Flags warm leads to a human at the right moment", "Stops automatically when a lead says they are not interested"],
  },
  {
    title: "Appointment reminders and no-show recovery", who: "Coaches and consultants", href: "/solutions/appointment-booking",
    problem: "Booked calls quietly no-show because there is no reminder system, and re-booking them takes manual follow-up that often does not happen.",
    approach: "A reminder sequence confirms the appointment ahead of time and, if someone no-shows, immediately offers an easy way to re-book without anyone chasing them.",
    does: ["Automatic reminders at set intervals before the call", "One-tap rescheduling built into the reminder", "No-show follow-up triggered without manual tracking", "A calendar that stays accurate without checking it by hand"],
  },
];

export default function Work() {
  return (
    <>
      <PageHead crumbs={[{ name: "Work", href: "/work" }]} title="What we would build, and why." lede="RelayOps is a new agency, so we do not have client logos to show. What we can show is how we would approach the most common problems agencies and service businesses bring us, and what the system would do once live." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {BUILDS.map((b) => (
            <article key={b.title} className="rise" style={{ display: "grid", gap: "1.5rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))", padding: "3rem 0", borderTop: "1px solid var(--ink)" }}>
              <div>
                <p className="label">{b.who}</p>
                <h2 className="display-m" style={{ marginTop: "0.6rem", fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}>{b.title}</h2>
                <p className="prose" style={{ marginTop: "1.25rem" }}><strong style={{ color: "var(--ink)" }}>The problem. </strong>{b.problem}</p>
                <p className="prose" style={{ marginTop: "0.9rem" }}><strong style={{ color: "var(--ink)" }}>The approach. </strong>{b.approach}</p>
                <p style={{ marginTop: "1.5rem" }}><Link className="ulink ulink-static" href={b.href} style={{ fontWeight: 600 }}>How this solution works →</Link></p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {b.does.map((d) => (<li key={d} style={{ padding: "0.95rem 0", borderTop: "1px solid var(--line)" }}>{d}</li>))}
                <li style={{ borderTop: "1px solid var(--line)" }} aria-hidden="true" />
              </ul>
            </article>
          ))}
          <p className="prose" style={{ marginTop: "1rem" }}>Want proof it is real? Read the <Link className="ulink ulink-static" href="/demo-projects" style={{ fontWeight: 600 }}>fully documented reference build</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
