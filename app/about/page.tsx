"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  CheckCircle,
  Shield,
  Cpu,
  Terminal,
  Users,
  Zap,
  BookOpen,
  MessageSquare,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: <Shield size={18} />,
    title: "Honest over impressive",
    desc: "RelayOps is a small, new agency. We don't pretend otherwise. Every page on this site reflects what we've actually built or can demonstrably build — not what sounds good in a pitch.",
    color: "#F5A623",
  },
  {
    icon: <Cpu size={18} />,
    title: "Reliable over clever",
    desc: "A system that works quietly every day is worth more than a demo that impresses once. We design every workflow to handle failure gracefully — and to be easy to understand months later.",
    color: "#0EA5E9",
  },
  {
    icon: <Users size={18} />,
    title: "Direct access, always",
    desc: "There's no account manager between you and the person building your system. You talk directly to Brian throughout — during scoping, during the build, and after it's live.",
    color: "#6366F1",
  },
];

const deliverySteps = [
  {
    id: "01",
    title: "Discovery",
    color: "#F5A623",
    icon: <MessageSquare size={15} />,
    duration: "30–60 min",
    desc: "A single call to understand your current workflow, where time is being lost, and what a working solution actually needs to do. No commitment required.",
  },
  {
    id: "02",
    title: "Workflow Audit",
    color: "#0EA5E9",
    icon: <BookOpen size={15} />,
    duration: "Async",
    desc: "We map the current process end-to-end — every manual step, every handoff, every tool involved. This is where the real problems surface, not what was described in the call.",
  },
  {
    id: "03",
    title: "Solution Design",
    color: "#6366F1",
    icon: <Terminal size={15} />,
    duration: "2–5 days",
    desc: "A written spec covering the proposed automation, the tools used, what it handles, what it escalates to a human, and what it doesn't do. You approve this before any build starts.",
  },
  {
    id: "04",
    title: "Build",
    color: "#00E5A0",
    icon: <Cpu size={15} />,
    duration: "1–3 weeks",
    desc: "The actual build — workflow logic, integrations, conversation flows, error handling. Progress is shared as it develops, not revealed as a final deliverable.",
  },
  {
    id: "05",
    title: "Testing",
    color: "#F5A623",
    icon: <Shield size={15} />,
    duration: "3–7 days",
    desc: "The system is tested against real-world edge cases — duplicate submissions, API failures, unexpected inputs, off-hours behaviour. Issues are fixed before your team sees it.",
  },
  {
    id: "06",
    title: "Deployment",
    color: "#0EA5E9",
    icon: <Zap size={15} />,
    duration: "1–2 days",
    desc: "Goes live with a rollback plan. We monitor the first 48–72 hours closely and stay available for anything that surfaces in production.",
  },
  {
    id: "07",
    title: "Documentation & Handover",
    color: "#6366F1",
    icon: <BookOpen size={15} />,
    duration: "Included",
    desc: "Every build ships with a plain-English guide covering what it does, how to make common changes, what to check if something breaks, and who to contact. Not a diagram — a document your team can actually use.",
  },
  {
    id: "08",
    title: "Ongoing Support",
    color: "#00E5A0",
    icon: <Users size={15} />,
    duration: "Optional",
    desc: "Available for monitoring, tweaks, and expansion. Some clients want a retainer; others prefer to call when they need something. Both are fine.",
  },
];

const techPhilosophy = [
  {
    point: "Tools are chosen for the job, not for the portfolio",
    detail:
      "n8n if you want self-hosted control, Make.com if you want a managed platform, Zapier if your team already knows it. The workflow logic is what matters — the wrapper is secondary.",
  },
  {
    point: "AI is used where it genuinely helps, not everywhere",
    detail:
      "GPT-4 for qualifying conversation and intent classification. Structured logic for routing and CRM writes. Using LLMs for things rules handle better creates unpredictability.",
  },
  {
    point: "Every integration is treated as a potential failure point",
    detail:
      "Webhooks time out. APIs return unexpected formats. Rate limits hit at 2am. Every build includes error handling for the things that will definitely go wrong, not just the happy path.",
  },
  {
    point: "Clients should be able to understand what they've paid for",
    detail:
      "If the documentation requires technical knowledge the client doesn't have, it's not good documentation. Every handover is written for the person who will actually use it.",
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

function DeliveryStep({
  step,
  index,
  isLast,
}: {
  step: (typeof deliverySteps)[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 + index * 0.06, duration: 0.45 }}
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
            className="w-px flex-1 mt-2"
            style={{
              background: `linear-gradient(to bottom, ${step.color}30, transparent)`,
              minHeight: "24px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className="mono text-xs" style={{ color: step.color }}>
            {step.id}
          </span>
          <h3 className="text-sm font-semibold text-white">{step.title}</h3>
          <span
            className="text-[10px] mono px-2 py-0.5 rounded border"
            style={{
              color: step.color,
              borderColor: `${step.color}30`,
              background: `${step.color}08`,
            }}
          >
            {step.duration}
          </span>
        </div>
        <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">{step.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">

        {/* ── Header ── */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 grid-pattern pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-[30%] w-[500px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(245,166,35,0.06) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <SectionLabel>About</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]"
            >
              A small agency that{" "}
              <span className="gradient-text">builds things that work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="text-lg text-[#7B8FAB] max-w-2xl font-light leading-relaxed"
            >
              RelayOps is a one-person AI automation studio based in Nairobi, Kenya.
              We build systems that handle the operational gaps — slow lead follow-up,
              manual appointment booking, repetitive admin — for agencies and service
              businesses that can't afford to hire their way out of the problem.
            </motion.p>
          </div>
        </section>

        {/* ── Origin story ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-2">
            <SectionLabel>The Story</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8">
              Why RelayOps exists
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-[#94A3B8] leading-relaxed font-light">
                The problem that led to RelayOps is simple: agencies and service businesses
                lose deals not because they're bad at what they do, but because they're slow
                to respond. A lead submits a form at 9pm. Nobody sees it until the next morning.
                By then, whoever replied first — at 9:01pm — has already had a conversation.
              </p>
              <p className="text-[#94A3B8] leading-relaxed font-light">
                The common advice is to hire someone to manage leads. But that doesn't solve
                the structural problem — it just adds headcount to a process that's still
                fundamentally manual and still breaks at 9pm on a Friday. The right answer
                is a system, not a person.
              </p>
              <p className="text-[#94A3B8] leading-relaxed font-light">
                RelayOps was started to build those systems. Not as flashy AI demos, but as
                reliable operational infrastructure — the kind that runs in the background
                without anyone needing to babysit it, and that hands off cleanly to a human
                when a human is actually needed.
              </p>
            </div>

            {/* Founder card */}
            <div className="glass rounded-2xl border border-white/[0.06] p-8">
              <div className="flex items-start gap-5">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl border border-white/10 flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(245,166,35,0.06)" }}
                  aria-hidden="true"
                >
                  {/* Replace with <Image src="/brian.jpg" ... /> when photo is available */}
                  <span className="text-xl font-bold mono" style={{ color: "#F5A623" }}>
                    BC
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-bold text-white">Brian Chebitoch</h3>
                    <span className="text-xs text-[#64748B]">·</span>
                    <span className="text-xs text-[#7B8FAB]">Founder & Automation Engineer</span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <MapPin size={11} className="text-[#64748B]" aria-hidden="true" />
                    <span className="text-xs text-[#64748B]">Nairobi, Kenya</span>
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed font-light mb-5">
                    IT and systems engineering background. Studying Information Technology
                    at Multimedia University of Kenya. Approaches AI automation as an
                    engineering problem, not a sales pitch — which means the systems are
                    designed to be reliable, documented, and possible to maintain without
                    a technical team standing by.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/relayops",
                      },
                      {
                        label: "GitHub",
                        href: "https://github.com/chebitoch007",
                      },
                      {
                        label: "brian@relayops.site",
                        href: "mailto:brian@relayops.site",
                      },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#7B8FAB] hover:text-white transition-colors border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                      >
                        {link.href.startsWith("mailto") ? (
                          <Mail size={11} aria-hidden="true" />
                        ) : (
                          <ExternalLink size={11} aria-hidden="true" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-divider mt-16" />
        </section>

        {/* ── Mission ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Mission</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8">
              What we're trying to do
            </h2>

            <div className="glass-accent rounded-2xl p-8 mb-8">
              <p className="text-lg text-white font-light leading-relaxed">
                Build AI automation systems that are reliable enough to trust, transparent
                enough to understand, and documented well enough to outlast the person who
                built them.
              </p>
            </div>

            <p className="text-sm text-[#7B8FAB] leading-relaxed font-light">
              That sounds simple. It's harder than it sounds. Most automation projects fail
              not because the technology doesn't work, but because the system was built for
              a demo, not for daily operation. RelayOps exists to close that gap — to build
              things that are still working six months later, that the client understands,
              and that don't require a technical co-founder to maintain.
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-2">
            <SectionLabel>Values</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-10">
              How we operate
            </h2>

            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="p-6 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 mb-5"
                    style={{ background: `${v.color}08`, color: v.color }}
                    aria-hidden="true"
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="section-divider mt-16" />
        </section>

        {/* ── Technology philosophy ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Technology Philosophy</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              How we think about tools and AI
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-10 font-light">
              Opinions developed from building systems that had to work in production,
              not in a sandbox.
            </p>

            <div className="space-y-4">
              {techPhilosophy.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle
                      size={14}
                      className="text-[#F5A623]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.point}</p>
                    <p className="text-xs text-[#7B8FAB] leading-relaxed font-light">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Delivery process ── */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-2">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
              The delivery process
            </h2>
            <p className="text-sm text-[#7B8FAB] mb-10 font-light">
              Every engagement follows the same structure. Steps may compress or expand
              depending on scope — but none are skipped.
            </p>

            <div>
              {deliverySteps.map((step, i) => (
                <DeliveryStep
                  key={step.id}
                  step={step}
                  index={i}
                  isLast={i === deliverySteps.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="section-divider mt-4" />
        </section>

        {/* ── Transparency note ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel>Transparency</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8">
              What RelayOps is right now
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  label: "Company size",
                  value: "One person",
                  note: "Brian handles scoping, building, testing, and support directly.",
                  color: "#F5A623",
                },
                {
                  label: "Client history",
                  value: "New agency",
                  note: "No past client logos to show — but the builds are documented and demonstrable.",
                  color: "#0EA5E9",
                },
                {
                  label: "Capacity",
                  value: "Limited monthly",
                  note: "A small number of new projects per month to maintain quality.",
                  color: "#6366F1",
                },
                {
                  label: "Location",
                  value: "Nairobi, Kenya",
                  note: "Works with clients globally. EAT timezone (UTC+3). Async-friendly.",
                  color: "#00E5A0",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]"
                >
                  <div className="text-xs mono text-[#64748B] uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div
                    className="text-lg font-bold mb-1"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <p className="text-xs text-[#7B8FAB] font-light">{item.note}</p>
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
              <CheckCircle
                size={14}
                className="text-[#F5A623] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                <strong className="text-[#F5A623] font-semibold">Why the transparency? </strong>
                Because agencies vetting vendors do their homework, and a site that overstates
                its history gets caught immediately. RelayOps is small and new — and that's
                fine. Being small means direct access to the person building your system, a
                genuine interest in making it work, and no incentive to oversell scope.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="section-divider mb-0" />
          <div className="max-w-4xl mx-auto pt-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <SectionLabel>Work together</SectionLabel>
                <h3 className="text-xl font-bold text-white mb-3">
                  Book a discovery call
                </h3>
                <p className="text-sm text-[#7B8FAB] mb-6 font-light leading-relaxed">
                  Tell us what's eating up your team's time. We'll tell you honestly
                  whether automation is the right fix — and what it would involve.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F5A623] text-[#04060A] text-sm font-bold hover:bg-[#E59512] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
                >
                  Schedule a call
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <SectionLabel>See the work</SectionLabel>
                <h3 className="text-xl font-bold text-white mb-3">
                  View demo projects
                </h3>
                <p className="text-sm text-[#7B8FAB] mb-6 font-light leading-relaxed">
                  See a fully-documented build — architecture, workflow, tooling,
                  and expected outcomes — before you commit to anything.
                </p>
                <Link
                  href="/demo-projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#94A3B8] text-sm font-medium hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  View demo projects
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