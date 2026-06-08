"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Bot, TrendingUp } from "lucide-react";

const floatingCards = [
  {
    icon: <Bot size={14} />,
    label: "Lead qualified",
    value: "2 seconds",
    color: "#F5A623",
    position: "top-[15%] right-[8%]",
    delay: 0,
  },
  {
    icon: <Zap size={14} />,
    label: "Workflows automated",
    value: "47 this week",
    color: "#0EA5E9",
    position: "top-[55%] right-[3%]",
    delay: 0.5,
  },
  {
    icon: <TrendingUp size={14} />,
    label: "Hours saved",
    value: "12h / week",
    color: "#6366F1",
    position: "bottom-[20%] right-[12%]",
    delay: 1,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mesh-bg overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-[-20%] w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo-full.png"
                alt="RelayOps"
                width={340}
                height={120}
                priority
                className="mb-2"
              />
            </motion.div>

            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <span
                className="glass-accent px-4 py-1.5 rounded-full text-xs font-medium mono flex items-center gap-2"
                style={{ color: "#F5A623" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] pulse-glow inline-block" />
                AI automation for agencies &amp; service businesses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                Stop following{" "}
                <br />
                up leads{" "}
                <span className="gradient-text">manually.</span>
                <br />
                <span className="text-white/30 text-4xl lg:text-5xl">We automate it.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-[#7B8FAB] leading-relaxed max-w-lg font-light"
            >
              We build AI systems that respond to new leads in seconds, book appointments automatically,
              and follow up without anyone on your team lifting a finger.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary px-7 py-3.5 rounded-xl text-base flex items-center gap-2 group"
              >
                <span>Book a Free Call</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform relative z-10"
                />
              </a>
              <a href="#services" className="btn-outline px-7 py-3.5 rounded-xl text-base">
                See What We Build
              </a>
            </motion.div>

            {/* Proof tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                "Lead Follow-Up",
                "AI Chatbots",
                "WhatsApp Automation",
                "Appointment Booking",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs mono text-[#7B8FAB] px-3 py-1 rounded-md border border-white/5 bg-white/2"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard visual */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Dashboard card */}
              <div className="glass rounded-2xl border border-white/8 p-6 relative overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs mono text-[#7B8FAB]">relayops_dashboard.ai</span>
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9] pulse-glow" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Leads Captured", value: "1,247", delta: "+12%" },
                    { label: "Response Time", value: "1.8s", delta: "-94%" },
                    { label: "Hours Saved", value: "184h", delta: "+38%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/4 rounded-xl p-3 border border-white/5"
                    >
                      <div className="text-xs text-[#7B8FAB] mb-1">{stat.label}</div>
                      <div className="text-xl font-bold" style={{ fontFamily: "Syne" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs mt-1" style={{ color: "#0EA5E9" }}>
                        {stat.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity graph */}
                <div className="mb-5">
                  <div className="text-xs text-[#7B8FAB] mb-3 flex justify-between">
                    <span>Automation Activity</span>
                    <span className="text-[#0EA5E9]">Live</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[30, 55, 40, 80, 60, 90, 70, 95, 65, 88, 72, 100, 85, 92].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: 0.5 + i * 0.04,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className="flex-1 rounded-sm origin-bottom"
                          style={{
                            height: `${h}%`,
                            background:
                              i === 13
                                ? "linear-gradient(180deg, #F5A623, #0EA5E9)"
                                : `rgba(245,166,35,${0.15 + (i / 14) * 0.25})`,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Workflows */}
                <div className="space-y-2">
                  {[
                    { name: "Lead Qualification Bot", status: "running", color: "#F5A623" },
                    { name: "WhatsApp Follow-up", status: "queued", color: "#0EA5E9" },
                    { name: "Email Drip Sequence", status: "running", color: "#6366F1" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/3"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: item.color }}
                        />
                        <span className="text-xs text-[#EDF2FF]">{item.name}</span>
                      </div>
                      <span className="text-xs mono" style={{ color: item.color }}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 shimmer rounded-2xl pointer-events-none" />
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 -z-10 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(245,166,35,0.08) 0%, transparent 70%)",
                }}
              />
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                className={`absolute ${card.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + card.delay, duration: 0.5 }}
                style={{
                  animation: `float ${4 + card.delay}s ease-in-out ${card.delay}s infinite`,
                }}
              >
                <div className="glass-accent rounded-xl px-4 py-3 flex items-center gap-3 whitespace-nowrap shadow-xl">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.color}18`, color: card.color }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#7B8FAB]">{card.label}</div>
                    <div
                      className="text-sm font-semibold"
                      style={{ fontFamily: "Syne", color: card.color }}
                    >
                      {card.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-[#7B8FAB]">
            <span className="text-xs mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-[#0EA5E9] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
