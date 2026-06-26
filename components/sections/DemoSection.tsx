"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, MessageSquare, Calendar, ChevronRight } from "lucide-react";
import SkeletonCard from "@/components/SkeletonCard";

const demos = [
  {
    id: "lead-bot",
    icon: <Bot size={18} />,
    label: "Lead Bot",
    title: "AI Lead Qualification Bot",
    description:
      "For an agency website - the bot qualifies inbound leads, asks discovery questions, scores them, and books calls with qualified prospects automatically.",
    highlights: [
      { label: "Response time", value: "Seconds, not hours" },
      { label: "Works", value: "24/7, no missed leads" },
      { label: "Booking", value: "Straight to your calendar" },
    ],
    color: "#00E5A0",
    mockItems: [
      { role: "bot", text: "Hi! I can help you explore our services. What's your main challenge?" },
      { role: "user", text: "We need to automate our lead follow-up process" },
      { role: "bot", text: "Got it. What's your current monthly lead volume?" },
      { role: "user", text: "Around 200-300 per month" },
      { role: "bot", text: "Perfect fit. I'm booking you a strategy call - what time works?" },
    ],
  },
  {
    id: "whatsapp",
    icon: <MessageSquare size={18} />,
    label: "WhatsApp",
    title: "Automated WhatsApp Assistant",
    description:
      "For an e-commerce brand - handles order status queries, product FAQs, and re-engagement campaigns over WhatsApp with zero human intervention.",
    highlights: [
      { label: "Coverage", value: "Order status & FAQs" },
      { label: "Response time", value: "Instant" },
      { label: "Escalation", value: "Hands off to a human" },
    ],
    color: "#0A84FF",
    mockItems: [
      { role: "user", text: "Hey, where is my order #4521?" },
      { role: "bot", text: "Your order is out for delivery! ETA: today 2-4 PM." },
      { role: "user", text: "Can I change the delivery address?" },
      { role: "bot", text: "Yes, sending you a secure link to update it now ->" },
    ],
  },
  {
    id: "booking",
    icon: <Calendar size={18} />,
    label: "Booking System",
    title: "AI Appointment Booking Workflow",
    description:
      "For a coaching business - from intake form to calendar invite, reminder sequences, and no-show re-scheduling. Fully hands-free.",
    highlights: [
      { label: "Reminders", value: "Sent automatically" },
      { label: "No-shows", value: "Auto re-booking offered" },
      { label: "Setup", value: "Runs without manual checks" },
    ],
    color: "#7B61FF",
    mockItems: [
      { role: "system", text: "New booking request received" },
      { role: "system", text: "Checking calendar availability..." },
      { role: "system", text: "Slot confirmed: Thu 3 PM" },
      { role: "system", text: "Confirmation + Zoom link sent" },
      { role: "system", text: "Reminder scheduled: 24h & 1h before" },
    ],
  },
];

function DemoMockChat({
  items,
  color,
}: {
  items: (typeof demos)[0]["mockItems"];
  color: string;
}) {
  return (
    <div className="space-y-2.5 py-1">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className="max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed"
            style={
              item.role === "user"
                ? { background: `${color}20`, color: "#EDF2FF", border: `1px solid ${color}25` }
                : item.role === "system"
                ? {
                    background: "rgba(255,255,255,0.04)",
                    color: "#7B8FAB",
                    border: "1px solid rgba(255,255,255,0.06)",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                  }
                : {
                    background: "rgba(255,255,255,0.06)",
                    color: "#EDF2FF",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }
            }
          >
            {item.role === "system" && (
              <span style={{ color }} className="mr-1">
                &rsaquo;
              </span>
            )}
            {item.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function DemoSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const demo = demos[active];

  if (!inView) {
    return (
      <section id="work" className="relative py-28 overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <SkeletonCard hasIcon lines={5} hasTags />
            <SkeletonCard hasIcon={false} lines={8} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="relative py-28 overflow-hidden" ref={ref}>
      <div
        className="absolute left-0 bottom-0 w-[600px] h-[400px] rounded-full -z-10"
        style={{
          background: "radial-gradient(ellipse, rgba(0,229,160,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mono text-xs text-[#00E5A0] tracking-widest uppercase"
          >
            Conceptual Demos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mt-4"
          >
            Systems <span className="gradient-text">we deploy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#7B8FAB] mt-4 max-w-md mx-auto font-light"
          >
            Three examples of how we&apos;d approach common automation needs. Illustrative, not client work.
          </motion.p>
        </div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-10"
          role="tablist"
          aria-label="Demo selector"
        >
          <div className="glass border border-white/8 rounded-2xl p-1.5 flex gap-1">
            {demos.map((d, i) => (
              <button
                key={d.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`demo-panel-${d.id}`}
                id={`demo-tab-${d.id}`}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                style={{
                  background: active === i ? `${d.color}15` : "transparent",
                  color: active === i ? d.color : "#7B8FAB",
                  border: active === i ? `1px solid ${d.color}25` : "1px solid transparent",
                }}
              >
                {d.icon}
                <span className="hidden sm:inline">{d.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Demo content */}
        <motion.div
          key={active}
          id={`demo-panel-${demo.id}`}
          role="tabpanel"
          aria-labelledby={`demo-tab-${demo.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: `${demo.color}20`, color: demo.color }}
                >
                  {demo.icon}
                </div>
                <span className="text-xs mono" style={{ color: demo.color }}>
                  Example Build
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-space">{demo.title}</h3>
              <p className="text-[#7B8FAB] leading-relaxed font-light">{demo.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {demo.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: `${demo.color}08`,
                    border: `1px solid ${demo.color}15`,
                  }}
                >
                  <div
                    className="text-sm font-bold mb-1 font-space leading-snug"
                    style={{ color: demo.color }}
                  >
                    {h.value}
                  </div>
                  <div className="text-xs text-[#7B8FAB]">{h.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
              style={{ color: demo.color }}
            >
              Build something similar <ChevronRight size={14} />
            </a>
          </div>

          {/* Mock UI */}
          <div className="glass rounded-2xl border border-white/8 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs mono text-[#7B8FAB]">{demo.title}</span>
              <div
                className="w-2 h-2 rounded-full pulse-glow"
                style={{ background: demo.color }}
              />
            </div>

            <div className="p-5 min-h-[260px] flex flex-col justify-end">
              <DemoMockChat items={demo.mockItems} color={demo.color} />
            </div>

            <div className="px-5 pb-5">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/6">
                <span className="text-xs text-[#7B8FAB] flex-1">AI is processing...</span>
                <div className="flex gap-1">
                  {[0, 150, 300].map((delay) => (
                    <div
                      key={delay}
                      className="w-1 h-3 rounded-full bg-[#00E5A0]/60 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}