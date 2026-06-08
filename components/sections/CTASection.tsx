"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", business: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("https://formspree.io/f/xdavedqy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", business: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Structural Geometry Overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,166,35,0.02) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Structural Evaluation Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mono text-xs text-[#F5A623] uppercase tracking-widest block mb-2">
              [ PIPELINE AUDITING INTAKE NODE ]
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Initiate a systemic validation protocol for your{" "}
              <span className="gradient-text">operational bottlenecks.</span>
            </h2>
            <p className="text-[#64748B] text-base font-light leading-relaxed mb-8">
              Provide an engineering summary of your highest-friction asynchronous dependencies or manually executed routines. Our system analysts will evaluate your data pathing and map out a precise, custom architecture profile—delivered without transaction overhead.
            </p>

            {/* Phased Blueprint Progression */}
            <div className="space-y-4">
              {[
                { phase: "01", title: "Intake Transmission", text: "Submit your operational parameters via the structural diagnostic terminal." },
                { phase: "02", title: "Algorithmic Analysis", text: "Our senior software developers dissect and profile runtime friction spots within 24 hours." },
                { phase: "03", title: "Architecture Blueprint", text: "30-minute structured mapping call presenting systemic mitigation loops." },
                { phase: "04", title: "Integration Buildout", text: "Production-grade codebase generation featuring multi-layered validation layers." },
              ].map((item) => (
                <div key={item.phase} className="flex items-start gap-4">
                  <span className="mono text-xs font-semibold w-6 mt-0.5 block text-[#F5A623]">
                    {item.phase}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-white block tracking-wide mb-0.5" style={{ fontFamily: "Space Grotesk" }}>
                      {item.title}
                    </span>
                    <span className="text-xs text-[#64748B] leading-relaxed block">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Assertions */}
            <div className="flex flex-wrap gap-5 mt-12 pt-8 border-t border-white/[0.04]">
              {[
                "Strict Data Non-Disclosure",
                "Deterministic Evaluation Models",
                "Direct Senior Developer Contact",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs mono text-[#64748B]">
                  <div className="w-1 h-1 rounded-full bg-[#F5A623]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secure Diagnostic Terminal Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {formState === "success" ? (
              <div className="glass rounded-xl border border-[#F5A623]/20 p-12 flex flex-col items-center text-center gap-5">
                <div className="w-12 h-12 rounded border border-[#F5A623]/20 flex items-center justify-center bg-[#F5A623]/05">
                  <CheckCircle size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "Space Grotesk" }}>
                  Telemetry Transmission Success
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-sm">
                  Your workflow parameters have been ingested into our evaluation queue. A system analyst will initiate feedback pathways within a 24-hour window.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-xs mono text-[#F5A623] hover:underline mt-2"
                >
                  // RE-OPEN TERMINAL INTENT
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-xl border border-white/[0.04] p-8 flex flex-col gap-5"
              >
                <div className="text-sm font-semibold tracking-wide text-white mb-1" style={{ fontFamily: "Space Grotesk" }}>
                  Submit Architecture Requirements
                </div>

                {/* Grid Inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs mono text-[#64748B] uppercase">Origin Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="e.g., Alexander"
                      className="w-full px-4 py-3 rounded text-xs bg-white/[0.01] border border-white/[0.06] text-white placeholder-[#64748B]/40 focus:outline-none focus:border-[#F5A623]/40 transition-colors mono"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs mono text-[#64748B] uppercase">Transport Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="alex@enterprise.io"
                      className="w-full px-4 py-3 rounded text-xs bg-white/[0.01] border border-white/[0.06] text-white placeholder-[#64748B]/40 focus:outline-none focus:border-[#F5A623]/40 transition-colors mono"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs mono text-[#64748B] uppercase">Institutional Entity</label>
                  <input
                    type="text"
                    name="business"
                    value={fields.business}
                    onChange={handleChange}
                    placeholder="e.g., Nexus Logistics Ltd"
                    className="w-full px-4 py-3 rounded text-xs bg-white/[0.01] border border-white/[0.06] text-white placeholder-[#64748B]/40 focus:outline-none focus:border-[#F5A623]/40 transition-colors mono"
                  />
                </div>

                {/* Core Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs mono text-[#64748B] uppercase">Bottleneck Vector Diagnosis</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Outline your runtime manual interventions, un-synchronized API states, or distributed routing data errors..."
                    className="w-full px-4 py-3 rounded text-xs bg-white/[0.01] border border-white/[0.06] text-white placeholder-[#64748B]/40 focus:outline-none focus:border-[#F5A623]/40 transition-colors resize-none mono leading-relaxed"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-xs text-red-400 mono">
                    [EXCEPTION ERROR]: Data transmission failure. Route directly to: hello@relayops.ai
                  </p>
                )}

                {/* Action Frame */}
                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: formState === "loading" ? 1 : 1.005 }}
                  whileTap={{ scale: formState === "loading" ? 1 : 0.995 }}
                  className="btn-primary w-full py-4 rounded text-xs tracking-wider font-semibold uppercase flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      <span>Executing Secure Packet Upload...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Pipeline Requirements</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}