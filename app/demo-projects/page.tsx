"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import {
  Bot,
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  MessageSquare,
  Database,
  Webhook,
  GitBranch,
  Users,
  Zap,
  FileText,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Play,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const techStack = [
  { category: "Frontend / form", tools: ["Next.js (App Router)", "React Hook Form + Zod"] },
  { category: "AI / qualification", tools: ["Google Gemini 2.5 Flash", "Structured output (JSON)"] },
  { category: "Automation layer", tools: ["n8n (self-hosted)", "Webhook orchestration"] },
  { category: "Scheduling", tools: ["Calendly", "Webhook signature verification"] },
  { category: "CRM & data", tools: ["Google Sheets", "Adapter pattern (swappable)"] },
  { category: "Notifications", tools: ["Gmail SMTP", "Lead + founder emails"] },
];

const workflowSteps = [
  {
    id: "01",
    color: "#F5A623",
    icon: <MessageSquare size={16} />,
    title: "Lead submits form or messages the chatbot",
    desc: "A prospect fills in a contact form, sends a WhatsApp message, or interacts with the embedded chat widget. The trigger fires immediately — no polling delay.",
  },
  {
    id: "02",
    color: "#0EA5E9",
    icon: <Bot size={16} />,
    title: "AI runs a qualifying conversation",
    desc: "The chatbot asks 3–5 discovery questions: business size, current challenge, monthly lead volume, urgency. Responses are scored against a qualification rubric defined by the agency.",
  },
  {
    id: "03",
    color: "#6366F1",
    icon: <GitBranch size={16} />,
    title: "Routing decision is made",
    desc: "Qualified leads are sent to the booking flow. Unqualified leads receive a helpful response and are tagged in the CRM for a future nurture sequence. Unclear cases are escalated to a human.",
  },
  {
    id: "04",
    color: "#00E5A0",
    icon: <Calendar size={16} />,
    title: "Qualified lead books a call",
    desc: "The chatbot surfaces available slots directly in the conversation. The prospect picks a time, the invite is created, a Zoom link is generated, and a confirmation is sent — all without human input.",
  },
  {
    id: "05",
    color: "#F5A623",
    icon: <Database size={16} />,
    title: "Lead record written to CRM",
    desc: "Name, contact details, qualification score, responses, booked time, and source are written to Google Sheets. The sales rep opens their day with a populated CRM, not an inbox full of raw form submissions.",
  },
  {
    id: "06",
    color: "#0EA5E9",
    icon: <Clock size={16} />,
    title: "Reminder sequence fires automatically",
    desc: "A 24-hour and 1-hour reminder are sent via WhatsApp or email. If the lead no-shows, a re-booking message fires within 30 minutes — no manual follow-up required.",
  },
];

const keyAutomations = [
  {
    title: "Instant lead response",
    desc: "Responds in under 5 seconds regardless of time zone or day of week. No lead goes unanswered because a team member is asleep.",
    color: "#F5A623",
  },
  {
    title: "Qualification scoring",
    desc: "Each lead is scored 1–10 against criteria you define. The threshold for booking vs. nurture is configurable without touching the workflow.",
    color: "#0EA5E9",
  },
  {
    title: "Calendar sync",
    desc: "Reads real-time availability from Google Calendar. Never double-books. Respects buffer times and working hours.",
    color: "#6366F1",
  },
  {
    title: "Human escalation",
    desc: "Any lead that asks an out-of-scope question or scores in an ambiguous range is flagged to a Slack channel or email for a human reply.",
    color: "#00E5A0",
  },
  {
    title: "CRM hydration",
    desc: "Every lead interaction — message sent, question answered, score assigned, slot booked — is logged. The record is useful before the call even happens.",
    color: "#F5A623",
  },
  {
    title: "No-show recovery",
    desc: "A no-show triggers an automatic re-booking offer within 30 minutes. Recovery rate on no-shows typically runs 30–40% with a well-timed message.",
    color: "#0EA5E9",
  },
];

const architectureNodes = [
  { label: "Lead form (Next.js)", sub: "Entry point", col: 0, row: 0, color: "#F5A623" },
  { label: "API route /api/leads", sub: "Server logic", col: 1, row: 0, color: "#0EA5E9" },
  { label: "n8n workflow", sub: "Orchestration", col: 2, row: 0, color: "#6366F1" },
  { label: "Gemini 2.5 Flash", sub: "Qualification AI", col: 1, row: 1, color: "#6366F1" },
  { label: "Calendly", sub: "Scheduling", col: 2, row: 1, color: "#00E5A0" },
  { label: "Google Sheets", sub: "CRM & data", col: 3, row: 0, color: "#F5A623" },
  { label: "Gmail SMTP", sub: "Notifications", col: 3, row: 1, color: "#0EA5E9" },
];

const mockConversation = [
  { role: "bot", text: "Hi! I'm the RelayOps assistant. What's the main challenge you're trying to solve?" },
  { role: "user", text: "Our sales team spends hours qualifying leads manually every week." },
  { role: "bot", text: "Got it. How many inbound leads do you handle in a typical month?" },
  { role: "user", text: "Usually 150–200, mix of web forms and WhatsApp." },
  { role: "bot", text: "And what's your current response time from lead in to first human reply?" },
  { role: "user", text: "Honestly, sometimes a few hours if it comes in after 6pm." },
  { role: "bot", text: "That's a real gap — the first 5 minutes matter most for conversion. Based on what you've shared, this looks like a strong fit. I can grab you a slot with Brian this week. Tuesday or Thursday — which works better?" },
  { role: "user", text: "Thursday works." },
  { role: "bot", text: "Confirmed — Thursday 2pm EAT. You'll get a calendar invite and Zoom link in the next 60 seconds. See you then." },
  { role: "system", text: "✓ Invite sent · CRM record created · Reminder scheduled" },
];

const businessOutcomes = [
  {
    metric: "< 5 sec",
    label: "First response to any inbound lead",
    note: "Regardless of time zone or hour",
  },
  {
    metric: "Zero",
    label: "Manual steps to book a qualified call",
    note: "From lead-in to calendar invite",
  },
  {
    metric: "100%",
    label: "Leads logged with full context",
    note: "Score, responses, source, time",
  },
  {
    metric: "30–40%",
    label: "No-show recovery rate (typical)",
    note: "With automated re-booking message",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono text-xs text-[#F5A623] uppercase tracking-widest block mb-3">
      [ {children} ]
    </span>
  );
}

function MockChat() {
  const [visible, setVisible] = useState(4);

  return (
    <div className="glass rounded-2xl border border-white/8 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/6">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs mono text-[#7B8FAB]">lead_qualification_bot.demo</span>
        <div className="w-2 h-2 rounded-full bg-[#00E5A0] pulse-glow" />
      </div>

      {/* Messages */}
      <div className="p-5 space-y-3 min-h-[280px]">
        {mockConversation.slice(0, visible).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[88%] px-3 py-2 rounded-xl text-xs leading-relaxed"
              style={
                msg.role === "user"
                  ? {
                      background: "rgba(245,166,35,0.12)",
                      color: "#EDF2FF",
                      border: "1px solid rgba(245,166,35,0.18)",
                    }
                  : msg.role === "system"
                  ? {
                      background: "rgba(0,229,160,0.06)",
                      color: "#00E5A0",
                      border: "1px solid rgba(0,229,160,0.15)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                    }
                  : {
                      background: "rgba(255,255,255,0.06)",
                      color: "#EDF2FF",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show more / disclaimer */}
      <div className="px-5 pb-5 space-y-3">
        {visible < mockConversation.length && (
          <button
            onClick={() => setVisible(mockConversation.length)}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs text-[#7B8FAB] border border-white/6 bg-white/2 hover:bg-white/4 hover:text-white transition-all"
          >
            <ChevronDown size={12} />
            Show full conversation
          </button>
        )}
        <p className="text-[10px] text-[#64748B] text-center font-light">
          Illustrative demo — not a live client conversation
        </p>
      </div>
    </div>
  );
}

function WorkflowStep({
  step,
  index,
  isLast,
}: {
  step: (typeof workflowSteps)[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="flex gap-4"
    >
      {/* Spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0"
          style={{ background: `${step.color}10`, color: step.color }}
          aria-hidden="true"
        >
          {step.icon}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2 mb-0"
            style={{ background: `linear-gradient(to bottom, ${step.color}30, transparent)` }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? "" : ""}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs mono" style={{ color: step.color }}>
            {step.id}
          </span>
          <h3 className="text-sm font-semibold text-white">{step.title}</h3>
        </div>
        <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">{step.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DemoProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">

        {/* ── Hero header ── */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 grid-pattern opacity-100 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-[20%] w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(245,166,35,0.06) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <SectionLabel>Demo Projects</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]"
            >
              AI Lead Qualification
              <br />
              <span className="gradient-text">&amp; Appointment Booking</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="text-lg text-[#7B8FAB] max-w-2xl font-light leading-relaxed mb-8"
            >
              A fully-documented build for marketing and service agencies. Shows the
              architecture, tooling, workflow logic, and business outcomes of a production-grade
              lead qualification system.
            </motion.p>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 items-center"
            >
              {[
                { label: "Client profile", value: "Marketing & service agencies" },
                { label: "Build type", value: "Demo / reference architecture" },
                { label: "Status", value: "Available to deploy", highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/6 bg-white/2 text-xs"
                >
                  <span className="text-[#64748B]">{item.label}:</span>
                  <span
                    className={item.highlight ? "text-[#00E5A0] font-medium" : "text-[#94A3B8]"}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
              <span className="text-xs text-[#64748B] mono px-3 py-1.5 rounded-lg border border-white/[0.04] bg-white/[0.01]">
                This is a reference build, not a past client engagement
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── Business problem ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]"
          style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-6">
              Agencies lose deals in the gap between lead-in and first reply
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  stat: "78%",
                  desc: "of leads go with the first vendor that responds",
                  color: "#F5A623",
                },
                {
                  stat: "5 min",
                  desc: "is the window where response rate drops sharply after contact",
                  color: "#0EA5E9",
                },
                {
                  stat: "Hours",
                  desc: "is what most agency teams actually take to reply after 6pm",
                  color: "#6366F1",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <div
                    className="text-3xl font-bold mb-2 font-space"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </div>
                  <p className="text-xs text-[#7B8FAB] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass-accent rounded-xl p-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                For a typical agency handling 150–200 inbound leads per month, even a 20% improvement
                in lead response speed translates directly into pipeline. The problem isn&apos;t that
                the team doesn&apos;t care — it&apos;s that manual follow-up doesn&apos;t scale,
                and after-hours leads get treated as second-class contacts. This system fixes the
                structural gap, not just the symptom.
              </p>
            </div>
          </div>
        </section>

        {/* ── Client profile ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Client Profile</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8">
              Who this is built for
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Users size={16} />,
                  title: "Team size",
                  detail:
                    "2–15 person agencies. Large enough to have a lead volume problem, small enough that hiring a full-time SDR isn't the answer.",
                  color: "#F5A623",
                },
                {
                  icon: <MessageSquare size={16} />,
                  title: "Lead sources",
                  detail:
                    "Website contact forms, Meta / Google ad funnels, WhatsApp Business, referral links — any channel that produces inbound enquiries.",
                  color: "#0EA5E9",
                },
                {
                  icon: <Clock size={16} />,
                  title: "Core pain",
                  detail:
                    "Leads come in faster than the team can process them. After-hours and weekend enquiries go unanswered for hours. Qualification is inconsistent.",
                  color: "#6366F1",
                },
                {
                  icon: <Calendar size={16} />,
                  title: "Desired outcome",
                  detail:
                    "Every qualified lead gets a booked call without a team member having to touch it. Every unqualified lead gets a useful response and a CRM record.",
                  color: "#00E5A0",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10"
                    style={{ background: `${item.color}08`, color: item.color }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                    <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflow overview + live mock ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-6xl mx-auto pt-2">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Workflow steps */}
              <div>
                <SectionLabel>Workflow Overview</SectionLabel>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-10">
                  How the system handles a lead end-to-end
                </h2>

                <div>
                  {workflowSteps.map((step, i) => (
                    <WorkflowStep
                      key={step.id}
                      step={step}
                      index={i}
                      isLast={i === workflowSteps.length - 1}
                    />
                  ))}
                </div>
              </div>

              {/* Live mock conversation */}
              <div className="lg:sticky lg:top-24">
                <SectionLabel>Example Conversation</SectionLabel>
                <p className="text-xs text-[#64748B] mb-5 font-light">
                  Illustrative walkthrough of the bot qualifying a lead and booking a call.
                </p>
                <MockChat />
              </div>
            </div>
          </div>
          <div className="section-divider mt-16" />
        </section>

        {/* ── Tech stack ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Technologies Used</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              The stack
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-10 font-light max-w-xl">
              Tools are chosen for reliability and replaceability — every component can be swapped
              if a client already has a preferred vendor.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((layer) => (
                <div
                  key={layer.category}
                  className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-3">
                    {layer.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded text-xs border text-[#E2E8F0]"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-[#64748B] font-light">
              Each layer is interchangeable. Zapier instead of n8n, HubSpot instead of Google Sheets,
              Resend instead of Gmail SMTP — the workflow logic is the same regardless of vendor.
            </p>
          </div>
        </section>

        {/* ── Architecture diagram ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-2">
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              System diagram
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-10 font-light">
              Data flow from entry point through qualification, routing, booking, and CRM logging.
            </p>

            {/* Architecture diagram */}
            <div className="glass rounded-2xl border border-white/[0.06] p-8 overflow-x-auto">
              <div className="min-w-[560px]">
                {/* Row labels */}
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {["Entry", "Conversation", "Orchestration", "Outputs"].map((label) => (
                    <div key={label} className="text-[10px] mono text-[#64748B] uppercase tracking-widest text-center">
                      {label}
                    </div>
                  ))}
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-4 gap-3 mb-3">
                  {[
                    { label: "Lead form (Next.js)", sub: "Lead entry", color: "#F5A623" },
                    { label: "API /api/leads", sub: "Server logic", color: "#0EA5E9" },
                    { label: "n8n workflow", sub: "Orchestration", color: "#6366F1" },
                    { label: "Google Sheets", sub: "CRM & logging", color: "#F5A623" },
                  ].map((node, i) => (
                    <div key={node.label} className="relative">
                      <div
                        className="rounded-xl p-3 text-center border"
                        style={{
                          background: `${node.color}08`,
                          borderColor: `${node.color}25`,
                        }}
                      >
                        <div className="text-xs font-semibold text-white mb-0.5 leading-snug">
                          {node.label}
                        </div>
                        <div className="text-[10px] text-[#64748B]">{node.sub}</div>
                      </div>
                      {i < 3 && (
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 z-10 text-[#64748B]">
                          <ChevronRight size={12} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Connector down from col 2 (n8n) */}
                <div className="grid grid-cols-4 gap-3 mb-3">
                  <div /> {/* col 0 empty */}
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gradient-to-b from-[#6366F1]/40 to-transparent" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gradient-to-b from-[#6366F1]/40 to-transparent" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-gradient-to-b from-[#F5A623]/40 to-transparent" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-4 gap-3">
                  <div /> {/* col 0 empty */}
                  {[
                    { label: "Gemini 2.5 Flash", sub: "Qualification AI", color: "#6366F1" },
                    { label: "Calendly", sub: "Booking & calendar", color: "#00E5A0" },
                    { label: "Gmail SMTP", sub: "Notifications", color: "#0EA5E9" },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className="rounded-xl p-3 text-center border"
                      style={{
                        background: `${node.color}08`,
                        borderColor: `${node.color}25`,
                      }}
                    >
                      <div className="text-xs font-semibold text-white mb-0.5 leading-snug">
                        {node.label}
                      </div>
                      <div className="text-[10px] text-[#64748B]">{node.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[10px] text-[#64748B] mt-6 font-light text-center">
                Illustrative architecture — actual implementation varies by client stack
              </p>
            </div>
          </div>
          <div className="section-divider mt-16" />
        </section>

        {/* ── Screenshots placeholder ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Screenshots</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              Build in progress
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-8 font-light">
              Screenshots from the n8n workflow, lead qualification form, and Google Sheets CRM
              view will be added once the reference build recording is complete.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "n8n workflow canvas", icon: <Webhook size={20} /> },
                { label: "Lead qualification form", icon: <MessageSquare size={20} /> },
                { label: "Google Sheets CRM view", icon: <Database size={20} /> },
                { label: "Calendly booking flow", icon: <Calendar size={20} /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="aspect-video rounded-xl border border-white/[0.05] bg-white/[0.01] flex flex-col items-center justify-center gap-3"
                >
                  <div className="text-[#64748B]" aria-hidden="true">{item.icon}</div>
                  <span className="text-xs text-[#64748B] font-light">{item.label}</span>
                  <span className="text-[10px] mono text-[#3D4F6B]">Coming soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Loom walkthrough ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-2">
            <SectionLabel>Walkthrough</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              Video walkthrough
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-8 font-light">
              A Loom walkthrough covering the full workflow — from lead submission through
              qualification, booking, and CRM record creation — will be published here.
            </p>

            {/* Loom embed placeholder */}
            <div
              className="aspect-video rounded-2xl border border-white/[0.06] bg-white/[0.01] flex flex-col items-center justify-center gap-4 relative overflow-hidden"
              role="img"
              aria-label="Video walkthrough coming soon"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(245,166,35,0.04) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center"
                style={{ background: "rgba(245,166,35,0.08)" }}
                aria-hidden="true"
              >
                <Play size={22} className="text-[#F5A623] ml-1" />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#7B8FAB] font-light">Loom walkthrough</p>
                <p className="text-xs text-[#64748B] mt-1 mono">Recording in progress</p>
              </div>
            </div>
            {/* When ready, replace the div above with:
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.loom.com/embed/YOUR_LOOM_ID"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
            */}
          </div>
          <div className="section-divider mt-16" />
        </section>

        {/* ── Key automations ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Key Automations</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-10">
              What the system actually does
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {keyAutomations.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.02] group"
                >
                  <div
                    className="w-1.5 rounded-full flex-shrink-0 mt-0.5"
                    style={{ background: item.color, minHeight: "100%" }}
                    aria-hidden="true"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle size={12} style={{ color: item.color }} aria-hidden="true" />
                      <span className="text-sm font-semibold text-white">{item.title}</span>
                    </div>
                    <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business outcomes ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-2">
            <SectionLabel>Business Outcomes</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              What changes after this goes live
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-10 font-light max-w-xl">
              These are the target outcomes for a well-configured deployment. Actual results
              depend on lead quality, qualification criteria, and how well the conversation
              flow is tuned.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {businessOutcomes.map((item) => (
                <div
                  key={item.metric}
                  className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div
                    className="text-3xl lg:text-4xl font-bold mb-2 font-space gradient-text"
                  >
                    {item.metric}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs text-[#64748B] font-light">{item.note}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 border flex items-start gap-3"
              style={{
                background: "rgba(245,166,35,0.04)",
                borderColor: "rgba(245,166,35,0.12)",
              }}
            >
              <FileText size={14} className="text-[#F5A623] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                <strong className="text-[#F5A623] font-semibold">Honest note:</strong> These are
                target figures based on how well-designed lead qualification systems perform. They
                are not results from a specific client engagement. RelayOps will update this page
                with real outcomes once client work is published with permission.
              </p>
            </div>
          </div>
          <div className="section-divider mt-16" />
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Book call */}
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <SectionLabel>Ready to build this?</SectionLabel>
                <h3 className="text-xl font-bold text-white mb-3">
                  Book a discovery call
                </h3>
                <p className="text-sm text-[#7B8FAB] mb-6 font-light leading-relaxed">
                  Describe your current lead flow and we&apos;ll tell you honestly whether
                  this system is the right fit — and what it would cost to build.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5A623] text-[#04060A] text-sm font-bold hover:bg-[#E59512] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
                >
                  Schedule a call
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* View more */}
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <SectionLabel>More work</SectionLabel>
                <h3 className="text-xl font-bold text-white mb-3">
                  See example builds
                </h3>
                <p className="text-sm text-[#7B8FAB] mb-6 font-light leading-relaxed">
                  Browse the full catalogue of documented build types — WhatsApp automation,
                  appointment booking, CRM workflows, and more.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#94A3B8] text-sm font-medium hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  View all builds
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}