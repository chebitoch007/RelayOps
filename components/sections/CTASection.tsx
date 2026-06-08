"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Loader } from "lucide-react";

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
    <section id="contact" className="relative py-28 overflow-hidden noise">
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,229,160,0.05) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.15] grid-pattern" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Block info structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="mono text-xs text-[#00E5A0] tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6 leading-tight">
              Let{"'"}s automate your{" "}
              <span className="gradient-text">biggest bottleneck</span>
            </h2>
            <p className="text-[#7B8FAB] text-lg font-light leading-relaxed mb-8">
              Tell us about your business operations and what your workflows manually track right now.
              We will craft a tailored technical blueprint mapping an exact custom automation solution.
            </p>

            {/* Strategic Workflow Roadmap */}
            <div className="space-y-4">
              {[
                { step: "01", text: "Submit your operational bottlenecks via form" },
                { step: "02", text: "Our engineering studio reviews parameters within 24h" },
                { step: "03", text: "Secure a strategy mapping slot with senior developers" },
                { step: "04", text: "We engineer your deployment. You save functional hours weekly." },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 group">
                  <span
                    className="mono text-xs w-8 flex-shrink-0 transition-colors duration-300 group-hover:text-[#0A84FF]"
                    style={{ color: "#00E5A0" }}
                  >
                    {item.step}
                  </span>
                  <span className="text-sm text-[#7B8FAB] group-hover:text-[#EDF2FF] transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Verification anchors */}
            <div className="flex flex-wrap gap-5 mt-10 pt-10 border-t border-white/5">
              {["Zero locked contract", "Response window < 24h", "Technical strategy roadmap included"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#7B8FAB]">
                  <div className="w-1 h-1 rounded-full bg-[#00E5A0]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            {formState === "success" ? (
              <div className="glass-accent rounded-2xl p-10 flex flex-col items-center text-center gap-5 optimize-gpu">
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,229,160,0.1)" }}>
                  <CheckCircle size={24} style={{ color: "#00E5A0" }} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Syne" }}>
                  Parameters Transmitted Successfully
                </h3>
                <p className="text-[#7B8FAB] text-sm leading-relaxed">
                  Our system has recorded your input. An engineer will deliver a concrete architectural execution plan inside 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-xs text-[#00E5A0] hover:underline mt-2 cursor-pointer"
                >
                  Transmit another submission
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 flex flex-col gap-5 optimize-gpu border-white/5 relative z-10"
              >
                <div className="text-sm font-semibold mb-1" style={{ fontFamily: "Syne" }}>
                  Initiate Strategy Blueprint Request
                </div>

                {/* Input components explicitly use 16px text size parameters (`text-base`) to suppress Safari auto-zoom bugs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#7B8FAB]">Your name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="Brian"
                      className="w-full px-4 py-3 rounded-xl text-base bg-white/[0.03] border border-white/5 text-white placeholder-[#7B8FAB]/30 focus:outline-none focus:border-[#00E5A0]/30 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#7B8FAB]">Work email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl text-base bg-white/[0.03] border border-white/5 text-white placeholder-[#7B8FAB]/30 focus:outline-none focus:border-[#00E5A0]/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#7B8FAB]">Business / agency name</label>
                  <input
                    type="text"
                    name="business"
                    value={fields.business}
                    onChange={handleChange}
                    placeholder="Acme Growth Systems"
                    className="w-full px-4 py-3 rounded-xl text-base bg-white/[0.03] border border-white/5 text-white placeholder-[#7B8FAB]/30 focus:outline-none focus:border-[#00E5A0]/30 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#7B8FAB]">
                    What operations or data pipelines do you track manually?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Describe your current manual steps, lead follow ups, booking handoffs, or custom platform sync errors..."
                    className="w-full px-4 py-3 rounded-xl text-base bg-white/[0.03] border border-white/5 text-white placeholder-[#7B8FAB]/30 focus:outline-none focus:border-[#00E5A0]/30 transition-colors resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-xs text-red-400">
                    Transmission fault detected. Contact engineering directly at{" "}
                    <a href="mailto:hello@relayops.ai" className="underline font-medium">
                      hello@relayops.ai
                    </a>
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: formState === "loading" ? 1 : 1.005 }}
                  whileTap={{ scale: formState === "loading" ? 1 : 0.995 }}
                  className="btn-primary w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 group mt-1 disabled:opacity-60 cursor-pointer"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader size={16} className="animate-spin relative z-10" />
                      <span className="relative z-10">Transmitting payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Strategic Blueprint</span>
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform relative z-10"
                      />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-[#7B8FAB]/40 font-light">
                  Direct encrypted connection. Zero unsolicited communication distributions.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}