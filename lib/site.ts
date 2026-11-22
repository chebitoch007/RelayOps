export const SITE = {
  name: "RelayOps",
  url: "https://www.relayops.site",
  email: "brian@relayops.site",
  calendly: "https://calendly.com/brian-relayops/discovery",
  linkedin: "https://www.linkedin.com/company/relayops",
  github: "https://github.com/chebitoch007/RelayOps",
  tagline: "AI automation for agencies and service businesses",
  description:
    "RelayOps builds AI systems that reply to leads in seconds, qualify them, book calls and send follow-ups, so your team stops chasing and starts closing. Built for agencies and service businesses.",
  gaId: "G-BQP2H77QJ9",
} as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  h1: string;
  intro: string;
  problem: string;
  does: string[];
  humanHandoff: string;
  tools: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "lead-follow-up-automation",
    title: "Lead follow-up and qualification",
    summary:
      "Capture, score and route every inbound lead, and reply while they are still looking at your site.",
    h1: "Lead follow-up automation that replies before a competitor does",
    intro:
      "Every inbound enquiry gets a personal-sounding reply within seconds, a few qualifying questions, and a route: book a call, nurture, or hand to a person.",
    problem:
      "Leads sit in a shared inbox until someone is free. By the time you reply, they have already spoken to whoever answered first. Hiring someone to watch the inbox does not fix a process that still breaks at 9 p.m. on a Friday.",
    does: [
      "Replies to new form submissions, emails and ad leads within seconds, day or night",
      "Asks the qualifying questions your best salesperson would ask",
      "Scores the answers against a rubric you define and routes the lead",
      "Sends qualified leads straight to your calendar and logs everything to your CRM or sheet",
      "Escalates anything unclear to a human instead of guessing",
    ],
    humanHandoff:
      "Unclear, sensitive or high-value conversations are routed to you with the full transcript and a short summary.",
    tools: ["n8n", "Make.com", "Google Sheets", "Calendly", "Cal.com"],
    metaTitle: "Lead Follow-Up Automation for Agencies",
    metaDescription:
      "Automated lead follow-up and qualification: reply to every inbound lead in seconds, score them, and book calls without manual chasing. Built by RelayOps.",
  },
  {
    slug: "ai-chatbots",
    title: "AI chatbots",
    summary:
      "A trained, on-brand assistant on your site that answers questions, qualifies visitors and hands off cleanly.",
    h1: "AI chatbots that answer, qualify and hand off to a human",
    intro:
      "A conversational assistant trained on your services and rules, deployed on your website or platform, handling first-touch conversations around the clock.",
    problem:
      "Visitors have questions and nobody answers them in real time, so they leave. A generic widget that guesses is worse than no widget.",
    does: [
      "Answers common questions from your own material, not from guesswork",
      "Qualifies the visitor and offers a booking link or contact form",
      "Hands the conversation to a person, with context, when it is out of its depth",
      "Logs every conversation so you can see what people actually ask",
    ],
    humanHandoff:
      "Anything outside the scope you define is passed to you live or by email with the conversation attached.",
    tools: ["Custom-trained LLM", "Website embed", "Live handoff", "CRM sync"],
    metaTitle: "AI Chatbots for Service Businesses",
    metaDescription:
      "Custom-trained AI chatbots for your website that answer questions, qualify visitors and hand off to your team. Built and documented by RelayOps.",
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp automation",
    summary:
      "Respond, qualify, book and follow up on the channel your customers already use.",
    h1: "WhatsApp automation for businesses that sell over chat",
    intro:
      "Automated replies and follow-up sequences on the WhatsApp Business API, with qualification logic and a person ready to step in.",
    problem:
      "Customers message on WhatsApp, and answering every thread by hand does not scale. Leads who do not book on the first message usually never hear from you again.",
    does: [
      "Replies to new conversations immediately, in your tone",
      "Runs multi-touch follow-up on a schedule nobody has to remember",
      "Handles FAQs so leads are not left waiting",
      "Flags warm leads to a human at the right moment and stops when a lead opts out",
    ],
    humanHandoff:
      "Warm or unclear conversations are flagged to you, and automation pauses the moment a person takes over.",
    tools: ["WhatsApp Business API", "Broadcast", "Bot flows", "n8n"],
    metaTitle: "WhatsApp Automation for Agencies & Local Businesses",
    metaDescription:
      "WhatsApp Business API automation: instant replies, qualification and follow-up sequences that hand off to a human. Built by RelayOps.",
  },
  {
    slug: "appointment-booking",
    title: "Appointment booking",
    summary:
      "Scheduling, reminders, rescheduling and no-show recovery without anyone touching the calendar.",
    h1: "Appointment booking and no-show recovery on autopilot",
    intro:
      "Leads book straight onto your calendar, get reminders ahead of time, and are offered an easy re-book if they miss the call.",
    problem:
      "Booked calls quietly no-show because there is no reminder system, and re-booking them takes manual chasing that often never happens.",
    does: [
      "Books directly onto your calendar with no back-and-forth",
      "Sends confirmations and reminders at set intervals",
      "Puts one-tap rescheduling inside the reminder itself",
      "Triggers no-show follow-up without anyone tracking it by hand",
    ],
    humanHandoff:
      "Edge cases such as double bookings or special requests are flagged to you instead of being guessed at.",
    tools: ["Cal.com", "Calendly", "Google Calendar", "Auto-reminders"],
    metaTitle: "Appointment Booking Automation",
    metaDescription:
      "Automated appointment booking, reminders and no-show recovery so your calendar stays accurate without manual work. Built by RelayOps.",
  },
  {
    slug: "cold-email-automation",
    title: "Cold email automation",
    summary:
      "Researched, personalised outreach sequences that follow up at scale without sounding like a template.",
    h1: "Cold email automation that still sounds like a person",
    intro:
      "Outreach sequences that research each prospect, write a relevant first line, send on schedule and follow up, with reporting on what works.",
    problem:
      "Manual outreach stops when the founder gets busy, and bulk templates get ignored. Consistency and relevance rarely survive together without a system.",
    does: [
      "Researches each prospect and drafts a personalised opener",
      "Sends and follows up on a schedule with sensible limits",
      "Stops the sequence when someone replies",
      "Reports on opens, replies and what to change, with A/B testing",
    ],
    humanHandoff:
      "Every reply lands in your inbox for you to answer. The system does the sending, not the selling.",
    tools: ["Personalisation", "A/B testing", "Analytics", "n8n"],
    metaTitle: "Cold Email Automation for Agencies",
    metaDescription:
      "AI-assisted cold email sequences with research, personalisation and automatic follow-up, and clear reporting. Built by RelayOps.",
  },
  {
    slug: "ai-workflow-integrations",
    title: "Workflow integrations",
    summary:
      "The glue between your CRM, calendar, Slack and spreadsheets, wired together and documented.",
    h1: "AI workflow integrations that connect the tools you already use",
    intro:
      "We connect your CRM, inbox, chat and spreadsheets so information moves without copy-paste, and write down how it works.",
    problem:
      "The repetitive admin between tools fills afternoons and gets dropped when things get busy. Most of it can be automated reliably.",
    does: [
      "Moves data between your CRM, forms, calendar, Slack and sheets",
      "Handles errors, retries and duplicate submissions",
      "Keeps a log so you can see what ran and what failed",
      "Ships with a plain-English guide for making common changes",
    ],
    humanHandoff:
      "Failures raise an alert to you rather than failing silently, and the handover guide explains what to check first.",
    tools: ["Make.com", "n8n", "Zapier", "Webhooks"],
    metaTitle: "AI Workflow Integrations & Automation",
    metaDescription:
      "Connect your CRM, calendar, Slack and spreadsheets with reliable, documented automation. Built with n8n, Make and Zapier by RelayOps.",
  },
];

export const STEPS = [
  { title: "Discovery", desc: "One call to understand your business, your current workflow and where time is actually being lost. No commitment, just a direct conversation about whether automation is the right fix." },
  { title: "Workflow audit", desc: "We map the process end to end: every manual step, every handoff, every tool in the chain. This is where the real problems surface." },
  { title: "Solution design", desc: "A written spec of what the automation handles, what it routes to a human, what it does not do, and which tools it uses. You approve it before any build starts." },
  { title: "Build", desc: "Workflow logic, integrations, conversation flows and error handling. Progress is shared as it develops, not revealed at the end." },
  { title: "Testing", desc: "Tested against real edge cases: duplicate submissions, API failures, off-hours behaviour, unexpected inputs. Issues are fixed before your team sees it." },
  { title: "Deployment", desc: "Goes live with a rollback plan. The first 48 to 72 hours are monitored closely and we stay available for anything that surfaces." },
  { title: "Training and handover", desc: "A plain-English guide: what it does, how to make common changes, what to check if something breaks. A document your team can actually use." },
  { title: "Ongoing support", desc: "Optional. Some clients want a monthly retainer, others call when they need something. Both are fine." },
] as const;

export const FAQ = [
  { q: "How long does a project take?", a: "Most projects take two to five weeks depending on scope. After the kick-off call, the time we need from you is minimal." },
  { q: "Do I need a technical team to run it?", a: "No. Every build ships with a plain-English handover guide covering what the system does, how to make common changes and what to check if something breaks." },
  { q: "What happens when the AI is not sure?", a: "It hands the conversation to a person, with the transcript and a short summary, instead of guessing. You define where that line sits during solution design." },
  { q: "Which tools do you build with?", a: "n8n, Make.com and Zapier for workflows, the WhatsApp Business API for chat, Cal.com or Calendly for booking, and your existing CRM or Google Sheets for data. We work with what you already use where we can." },
  { q: "Do you have client case studies yet?", a: "Not yet. RelayOps is new, so we show a fully documented reference build instead of borrowed logos or invented numbers. You can read how it works on the demo project page." },
] as const;

export const NAV = [
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/demo-projects", label: "Reference build" },
  { href: "/about", label: "About" },
] as const;
