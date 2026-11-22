"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // honeypot

    const next: Errors = {};
    if (!String(data.get("name") || "").trim()) next.name = "Tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") || ""))) next.email = "Enter an email we can reply to.";
    if (String(data.get("message") || "").trim().length < 10) next.message = "A sentence or two is enough, so we can point you the right way.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    if (!endpoint) { setStatus("error"); return; }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${endpoint}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" style={{ padding: "2rem", border: "1px solid var(--ink)", borderRadius: 6 }}>
        <p className="display-m">Got it. We will reply within 24 hours.</p>
        <p className="muted" style={{ marginTop: "0.75rem" }}>
          Prefer to talk now? <a className="ulink ulink-static" href={SITE.calendly} target="_blank" rel="noopener">Book a 30-minute call</a>.
        </p>
      </div>
    );
  }

  const field = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-err` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: "1.25rem" }}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required {...field("name")} />
        {errors.name && <span id="name-err" className="err">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required {...field("email")} />
        {errors.email && <span id="email-err" className="err">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="company">Company or business <span className="muted" style={{ fontWeight: 400 }}>(optional)</span></label>
        <input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="message">Where is the manual work happening?</label>
        <textarea id="message" name="message" rows={5} required {...field("message")} />
        {errors.message && <span id="message-err" className="err">{errors.message}</span>}
      </div>
      <div className="hp" aria-hidden="true"><label>Leave empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
        <button className="btn" type="submit" disabled={status === "sending"} style={{ opacity: status === "sending" ? 0.7 : 1 }}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <a className="ulink" href={`mailto:${SITE.email}`}>or email {SITE.email}</a>
      </div>
      <p role="alert" aria-live="polite" className="err" style={{ color: "#b3261e", minHeight: "1.25rem", fontSize: "0.9375rem" }}>
        {status === "error" && (<>That did not send. Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> directly and we will pick it up.</>)}
      </p>
    </form>
  );
}
