"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const FIELD_IDS = {
  name: "form-name",
  email: "form-email",
  message: "form-message",
} as const;

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", business: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState({ name: "", email: "", message: "", general: "" });

  // Auto-reset success state after 4 seconds
  useEffect(() => {
    if (formState !== "success") return;
    const id = setTimeout(() => setFormState("idle"), 4000);
    return () => clearTimeout(id);
  }, [formState]);

  // Auto-scroll to the first invalid field on mobile after validation failure
  useEffect(() => {
    const firstErrorKey = (["name", "email", "message"] as const).find(
      (k) => fieldErrors[k]
    );
    if (!firstErrorKey) return;

    const el = document.getElementById(FIELD_IDS[firstErrorKey]);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "center" });
    // Move focus to the field so screen readers announce the error
    el.focus({ preventScroll: true });
  }, [fieldErrors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: "", general: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "", general: "" };

    if (!fields.name.trim()) {
      errors.name = "Please enter your name.";
      isValid = false;
    }
    if (!fields.email.trim() || !/^\S+@\S+\.\S+$/.test(fields.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!fields.message.trim() || fields.message.length < 15) {
      errors.message = "Please add a few more details (at least 15 characters).";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState("loading");
    const targetEndpointId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!targetEndpointId) {
      setFormState("error");
      setFieldErrors((prev) => ({
        ...prev,
        general: "Something went wrong on our end. Please email us directly at brian@relayops.site.",
      }));
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${targetEndpointId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (response.ok) {
        setFormState("success");
        setFields({ name: "", email: "", business: "", message: "" });
      } else {
        setFormState("error");
        setFieldErrors((prev) => ({
          ...prev,
          general: "Something went wrong sending this. Please email us directly at brian@relayops.site.",
        }));
      }
    } catch {
      setFormState("error");
      setFieldErrors((prev) => ({
        ...prev,
        general: "Network error - please check your connection and try again.",
      }));
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded text-xs bg-white/[0.01] border text-white placeholder-[#94A3B8]/30 focus:outline-none transition-colors font-mono";
  const inputNormal = `${inputBase} border-white/[0.06] focus:border-[#F5A623]/40`;
  const inputError = `${inputBase} border-red-500/50 focus:border-red-400`;

  return (
    <section id="contact" className="relative py-32 overflow-hidden" aria-labelledby="contact-heading">
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

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-[#F5A623] uppercase tracking-widest block mb-2">
              [ GET STARTED ]
            </span>
            <h2
              id="contact-heading"
              className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 font-space"
            >
              Let&apos;s fix the bottlenecks costing you{" "}
              <span className="gradient-text">leads and time.</span>
            </h2>
            <p className="text-[#94A3B8] text-base font-light leading-relaxed mb-8">
              Tell us where the manual work is happening in your business - slow lead
              replies, missed follow-ups, repetitive admin. We&apos;ll review it and map out
              exactly what we&apos;d automate, no obligation.
            </p>

            <div className="space-y-4" role="list">
              {[
                {
                  phase: "01",
                  title: "Send us the details",
                  text: "Fill in the form with a quick overview of where things are slow or manual.",
                },
                {
                  phase: "02",
                  title: "We review your process",
                  text: "We look at what you've shared and identify the highest-impact automation within 24 hours.",
                },
                {
                  phase: "03",
                  title: "30-minute call",
                  text: "We walk you through exactly what we'd build, how it works, and what it costs.",
                },
                {
                  phase: "04",
                  title: "We build and hand it off",
                  text: "Once you're ready, we build it, test it thoroughly, and hand it off with a walkthrough.",
                },
              ].map((item) => (
                <div key={item.phase} className="flex items-start gap-4" role="listitem">
                  <span className="font-mono text-xs font-semibold w-6 mt-0.5 block text-[#F5A623]">
                    {item.phase}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-white block tracking-wide mb-0.5 font-space">
                      {item.title}
                    </span>
                    <span className="text-xs text-[#94A3B8] leading-relaxed block">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {formState === "success" ? (
              <div
                className="glass rounded-xl border border-[#F5A623]/20 p-12 flex flex-col items-center text-center gap-5"
                aria-live="polite"
                role="status"
              >
                <div className="w-12 h-12 rounded border border-[#F5A623]/20 flex items-center justify-center bg-[#F5A623]/5">
                  <CheckCircle size={22} className="text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide font-space">
                  Thanks - message received!
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
                  We&apos;ll take a look and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="glass rounded-xl border border-white/[0.04] p-8 flex flex-col gap-5"
              >
                <div className="text-sm font-semibold tracking-wide text-white mb-1 font-space">
                  Get your free automation plan
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={FIELD_IDS.name} className="text-xs font-mono text-[#94A3B8] uppercase">
                      Your Name{" "}
                      <span className="text-[#F5A623]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={FIELD_IDS.name}
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "error-name" : undefined}
                      placeholder="e.g., Sarah Mitchell"
                      className={fieldErrors.name ? inputError : inputNormal}
                    />
                    {fieldErrors.name && (
                      <span
                        id="error-name"
                        className="text-[10px] text-red-400 font-mono"
                        role="alert"
                      >
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor={FIELD_IDS.email} className="text-xs font-mono text-[#94A3B8] uppercase">
                      Email{" "}
                      <span className="text-[#F5A623]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id={FIELD_IDS.email}
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "error-email" : undefined}
                      placeholder="sarah@yourcompany.com"
                      className={fieldErrors.email ? inputError : inputNormal}
                    />
                    {fieldErrors.email && (
                      <span
                        id="error-email"
                        className="text-[10px] text-red-400 font-mono"
                        role="alert"
                      >
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Business */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-business" className="text-xs font-mono text-[#94A3B8] uppercase">
                    Company / Business
                  </label>
                  <input
                    id="form-business"
                    type="text"
                    name="business"
                    value={fields.business}
                    onChange={handleChange}
                    placeholder="e.g., Acme Marketing Agency"
                    className={inputNormal}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={FIELD_IDS.message} className="text-xs font-mono text-[#94A3B8] uppercase">
                    What&apos;s slowing you down?{" "}
                    <span className="text-[#F5A623]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id={FIELD_IDS.message}
                    name="message"
                    rows={4}
                    value={fields.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "error-message" : undefined}
                    placeholder="e.g., We're slow to respond to new leads and lose deals to faster competitors"
                    className={`${fieldErrors.message ? inputError : inputNormal} resize-none leading-relaxed`}
                  />
                  {fieldErrors.message && (
                    <span
                      id="error-message"
                      className="text-[10px] text-red-400 font-mono"
                      role="alert"
                    >
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {fieldErrors.general && (
                  <div
                    className="flex items-center gap-2 text-xs text-red-400 font-mono mt-1"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{fieldErrors.general}</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: formState === "loading" ? 1 : 1.005 }}
                  whileTap={{ scale: formState === "loading" ? 1 : 0.995 }}
                  className="btn-primary w-full py-4 rounded text-xs tracking-wider font-semibold uppercase flex items-center justify-center gap-2 disabled:opacity-70 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Free Plan</span>
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