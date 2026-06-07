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
      // Replace YOUR_FORM_ID with your Formspree form ID
      // Sign up free at formspree.io → New Form → copy the ID
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
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,160,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="mono text-xs text-[#00E5A0] tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Let{"'"}s automate your{" "}
              <span className="gradient-text">biggest bottleneck</span>
            </h2>
            <p className="text-[#7B8FAB] text-lg font-light leading-relaxed mb-8">
              Tell us about your business and what you{"'"}re manually doing right now.
              We{"'"}ll come back with a specific system that solves it — free, no strings attached.
            </p>

            {/* What happens next */}
            <div className="space-y-4">
              {[
                { step: "01", text: "Fill in the form — takes 60 seconds" },
                { step: "02", text: "We review and respond within 24 hours" },
                { step: "03", text: "Free 30-min call to map your automation" },
                { step: "04", text: "We build it. You save hours every week." },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <span
                    className="mono text-xs w-8 flex-shrink-0"
                    style={{ color: "#00E5A0" }}
                  >
                    {item.step}
                  </span>
                  <span className="text-sm text-[#7B8FAB]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5 mt-10 pt-10 border-t border-white/6">
              {[
                "No commitment",
                "Reply within 24h",
                "Free strategy call",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#7B8FAB]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {formState === "success" ? (
              /* Success state */
              <div className="glass rounded-2xl border border-[#00E5A0]/20 p-10 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,229,160,0.12)" }}>
                  <CheckCircle size={28} style={{ color: "#00E5A0" }} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Syne" }}>
                  Message received!
                </h3>
                <p className="text-[#7B8FAB] text-sm leading-relaxed">
                  We{"'"}ll review your details and reply within 24 hours with a specific plan for your business.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-xs text-[#00E5A0] hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl border border-white/8 p-8 flex flex-col gap-5"
              >
                <div className="text-sm font-semibold mb-1" style={{ fontFamily: "Syne" }}>
                  Book a free strategy call
                </div>

                {/* Name + Email row */}
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
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white/4 border border-white/8 text-white placeholder-[#7B8FAB]/50 focus:outline-none focus:border-[#00E5A0]/40 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl text-sm bg-white/4 border border-white/8 text-white placeholder-[#7B8FAB]/50 focus:outline-none focus:border-[#00E5A0]/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Business */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#7B8FAB]">Business / agency name</label>
                  <input
                    type="text"
                    name="business"
                    value={fields.business}
                    onChange={handleChange}
                    placeholder="Acme Marketing Agency"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white/4 border border-white/8 text-white placeholder-[#7B8FAB]/50 focus:outline-none focus:border-[#00E5A0]/40 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#7B8FAB]">
                    What are you doing manually right now?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="E.g. We manually follow up with leads by email, check enquiries every morning, and book appointments by hand..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white/4 border border-white/8 text-white placeholder-[#7B8FAB]/50 focus:outline-none focus:border-[#00E5A0]/40 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {formState === "error" && (
                  <p className="text-xs text-red-400">
                    Something went wrong. Email us directly at{" "}
                    <a href="mailto:hello@relayops.ai" className="underline">
                      hello@relayops.ai
                    </a>
                  </p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: formState === "loading" ? 1 : 1.01 }}
                  whileTap={{ scale: formState === "loading" ? 1 : 0.99 }}
                  className="btn-primary w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 group mt-1 disabled:opacity-70"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader size={15} className="animate-spin relative z-10" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Free Strategy Call</span>
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform relative z-10"
                      />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-[#7B8FAB]/60">
                  We reply within 24 hours. No spam, no pressure.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
