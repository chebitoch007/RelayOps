"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, MessageSquare, Calendar, ChevronRight } from "lucide-react";

const demos = [
  {
    id: "lead-bot",
    icon: <Bot size={18} />,
    label: "Lead Bot",
    title: "AI Lead Qualification Bot",
    description:
      "Deployed on a B2B agency's website — the bot qualifies inbound leads, asks discovery questions, scores them, and books calls with qualified prospects automatically.",
    metrics: [
      { label: "Response time", value: "< 2s" },
      { label: "Qualification rate", value: "68%" },
      { label: "Hours saved/week", value: "14h" },
    ],
    color: "#00E5A0",
    mockItems: [
      { role: "bot", text: "Hi! I can help you explore our services. What's your main challenge?" },
      { role: "user", text: "We need to automate our lead follow-up process" },
      { role: "bot", text: "Got it. What's your current monthly lead volume?" },
      { role: "user", text: "Around 200–300 per month" },
      { role: "bot", text: "Perfect fit. I'm booking you a strategy call — what time works?" },
    ],
  },
  {
    id: "whatsapp",
    icon: <MessageSquare size={18} />,
    label: "WhatsApp",
    title: "Automated WhatsApp Assistant",
    description:
      "Built for an e-commerce brand — handles order status queries, product FAQs, and re-engagement campaigns over WhatsApp with zero human intervention.",
    metrics: [
      { label: "Messages handled", value: "1,200+/mo" },
      { label: "Avg response time", value: "3s" },
      { label: "Support tickets saved", value: "80%" },
    ],
    color: "#0A84FF",
    mockItems: [
      { role: "user", text: "Hey, where is my order #4521?" },
      { role: "bot", text: "Your order is out for delivery! ETA: today 2–4 PM 📦" },
      { role: "user", text: "Can I change the delivery address?" },
      { role: "bot", text: "Yes, sending you a secure link to update it now →" },
    ],
  },
  {
    id: "booking",
    icon: <Calendar size={18} />,
    label: "Booking System",
    title: "AI Appointment Booking Workflow",
    description:
      "Complete booking automation for a coaching business — from intake form to calendar invite, reminder sequences, and no-show re-scheduling. Fully hands-free.",
    metrics: [
      { label: "No-shows reduced", value: "65%" },
      { label: "Bookings automated", value: "100%" },
      { label: "Admin time saved", value: "18h/mo" },
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

function DemoMockChat({ items, color }: { items: typeof demos[0]["mockItems"], color: string }) {
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
                : { background: "rgba(255,255,255,0.06)", color: "#EDF2FF", border: "1px solid rgba(255,255,255,0.08)" }
            }
          >
            {item.role === "system" && (
              <span style={{ color }} className="mr-1">›</span>
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

  return (
    <section id="work" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[600px] h-[400px] rounded-full -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,160,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mono text-xs text-[#00E5A0] tracking-widest uppercase"
          >
            Conceptual Demos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mt-4"
          >
            Systems{" "}
            <span className="gradient-text">we deploy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#7B8FAB] mt-4 max-w-md mx-auto font-light"
          >
            Three examples of automation systems we build for clients.
          </motion.p>
        </div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="glass border border-white/8 rounded-2xl p-1.5 flex gap-1">
            {demos.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: active === i ? `${d.color}15` : "transparent",
                  color: active === i ? d.color : "#7B8FAB",
                  border: active === i ? `1px solid ${d.color}25` : "1px solid transparent",
                  fontFamily: "Outfit, sans-serif",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left: Info */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: `${demo.color}20`, color: demo.color }}>
                  {demo.icon}
                </div>
                <span className="text-xs mono" style={{ color: demo.color }}>
                  Deployed System
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: "Syne" }}>
                {demo.title}
              </h3>
              <p className="text-[#7B8FAB] leading-relaxed font-light">
                {demo.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {demo.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: `${demo.color}08`,
                    border: `1px solid ${demo.color}15`,
                  }}
                >
                  <div className="text-xl font-bold mb-1" style={{ fontFamily: "Syne", color: demo.color }}>
                    {m.value}
                  </div>
                  <div className="text-xs text-[#7B8FAB]">{m.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: demo.color }}
            >
              Build something similar <ChevronRight size={14} />
            </a>
          </div>

          {/* Right: Mock UI */}
          <div className="glass rounded-2xl border border-white/8 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs mono text-[#7B8FAB]">{demo.title}</span>
              <div className="w-2 h-2 rounded-full pulse-glow" style={{ background: demo.color }} />
            </div>

            {/* Chat interface */}
            <div className="p-5 min-h-[260px] flex flex-col justify-end">
              <DemoMockChat items={demo.mockItems} color={demo.color} />
            </div>

            {/* Input mock */}
            <div className="px-5 pb-5">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/6">
                <span className="text-xs text-[#7B8FAB] flex-1">AI is processing...</span>
                <div className="flex gap-1">
                  <div className="w-1 h-3 rounded-full bg-[#00E5A0]/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1 h-3 rounded-full bg-[#00E5A0]/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1 h-3 rounded-full bg-[#00E5A0]/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
