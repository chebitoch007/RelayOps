import type { Metadata } from "next";
import { CtaBand, PageHead } from "@/components/PageParts";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Lead Qualification & Appointment Booking: Reference Build",
  description: "A fully documented reference build: an AI lead qualification and appointment booking system using Next.js, Gemini, n8n, Calendly and Google Sheets.",
  alternates: { canonical: "/demo-projects" },
};

const FLOW = [
  ["Lead submits a form or messages the chatbot", "A prospect fills in a contact form, sends a WhatsApp message or uses the chat widget. The trigger fires immediately, with no polling delay."],
  ["AI runs a qualifying conversation", "The assistant asks three to five discovery questions: business size, current challenge, monthly lead volume, urgency. Responses are scored against a rubric defined by the agency."],
  ["A routing decision is made", "Qualified leads go to the booking flow. Unqualified leads get a helpful reply and are tagged for a future nurture sequence. Unclear cases are escalated to a human."],
  ["Qualified lead books a call", "Available slots are shown in the conversation. The prospect picks a time, the invite is created and a confirmation is sent, without human input."],
  ["Lead record is written to the CRM", "Name, contact details, score, responses, booked time and source are written to Google Sheets, so the day starts with a populated CRM instead of raw form submissions."],
  ["Reminders fire automatically", "Reminders go out 24 hours and 1 hour before the call by WhatsApp or email. If the lead no-shows, a re-booking message follows within 30 minutes."],
];
const AUTOMATIONS = [
  ["Instant lead response", "Replies in seconds regardless of time zone or day of the week, so no lead goes unanswered because someone is asleep."],
  ["Qualification scoring", "Each lead is scored 1 to 10 against criteria you define. The threshold for booking versus nurture is configurable without touching the workflow."],
  ["Calendar sync", "Reads availability from Google Calendar, never double-books, and respects buffer times and working hours."],
  ["Human escalation", "Out-of-scope questions and ambiguous scores are flagged to a Slack channel or email for a human reply."],
  ["CRM hydration", "Every interaction is logged, so the record is useful before the call even happens."],
  ["No-show recovery", "A no-show triggers an automatic re-booking offer within 30 minutes."],
];
const STACK = [
  ["Frontend and form", "Next.js (App Router), React Hook Form, Zod"],
  ["AI qualification", "Google Gemini 2.5 Flash, structured JSON output"],
  ["Automation layer", "n8n (self-hosted), webhook orchestration"],
  ["Scheduling", "Calendly, webhook signature verification"],
  ["CRM and data", "Google Sheets, adapter pattern (swappable)"],
  ["Notifications", "Gmail SMTP to the lead and the founder"],
];

export default function Demo() {
  const ld = { "@context": "https://schema.org", "@type": "TechArticle", headline: "AI Lead Qualification & Appointment Booking: Reference Build", author: { "@type": "Person", name: "Brian Chebitoch" }, publisher: { "@id": `${SITE.url}/#org` }, mainEntityOfPage: `${SITE.url}/demo-projects` };
  return (
    <>
      <PageHead crumbs={[{ name: "Reference build", href: "/demo-projects" }]} title="A lead qualification and booking system, documented end to end." lede="This is an internal reference build, not a client result. It exists so you can inspect how we engineer a system before you book a call." />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <h2 className="display-l">The problem it solves</h2>
          <p className="prose">Agencies lose deals in the gap between a lead arriving and the first reply. Speed to first response is one of the few levers that is entirely in your control, and it is the one most teams leave to whoever happens to be at their desk. This system removes the gap: every lead gets an immediate, relevant reply, is qualified, and is booked without a person in the loop.</p>
        </div>
      </section>

      <section className="section on-night">
        <div className="wrap" style={{ display: "grid", gap: "3rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 21rem), 1fr))", alignItems: "start" }}>
          <h2 className="display-l proc-side" style={{ position: "sticky", top: "calc(var(--header-h) + 2rem)" }}>How a lead moves through it</h2>
          <ol className="steps">
            {FLOW.map(([h, p]) => (<li key={h}><div><h3>{h}</h3><p>{p}</p></div></li>))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display-l" style={{ marginBottom: "2.5rem" }}>Six automations inside it</h2>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 17rem), 1fr))", gap: "2rem 2.5rem" }}>
            {AUTOMATIONS.map(([h, p]) => (
              <div key={h} className="rise" style={{ borderTop: "1px solid var(--ink)", paddingTop: "1rem" }}>
                <dt className="display-m" style={{ fontSize: "1.5rem" }}>{h}</dt>
                <dd style={{ margin: "0.6rem 0 0", color: "var(--ink-2)", fontSize: "0.97rem" }}>{p}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="wrap" style={{ display: "grid", gap: "2rem clamp(2rem, 6vw, 6rem)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
          <div>
            <h2 className="display-l">The stack</h2>
            <p className="lede" style={{ marginTop: "1rem" }}>Chosen to be boring and replaceable. The CRM sits behind an adapter, so Google Sheets can become HubSpot without rebuilding the workflow.</p>
          </div>
          <dl style={{ margin: 0 }}>
            {STACK.map(([k, v]) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "minmax(8rem, 11rem) 1fr", gap: "1rem", padding: "0.9rem 0", borderTop: "1px solid var(--line)" }}>
                <dt style={{ fontWeight: 600 }}>{k}</dt><dd style={{ margin: 0, color: "var(--ink-2)" }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand title="Want a system like this for your business?" />
      <JsonLd data={ld} />
    </>
  );
}
