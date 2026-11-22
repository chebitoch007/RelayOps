import Link from "next/link";
import Logo from "./Logo";
import { NAV, SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer on-night" style={{ paddingBlock: "4.5rem 2.5rem" }}>
      <div className="wrap">
        <div style={{ display: "grid", gap: "3rem 2rem", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))" }}>
          <div style={{ maxWidth: "22rem" }}>
            <Logo />
            <p className="muted" style={{ marginTop: "1rem", fontSize: "0.9375rem" }}>
              A lean AI automation studio helping agencies and service businesses reply faster, book more calls and scale without hiring.
            </p>
            <p style={{ marginTop: "1.25rem", fontSize: "0.9375rem" }}>
              <span aria-hidden="true" style={{ display: "inline-block", width: 8, height: 8, borderRadius: 8, background: "var(--signal-night)", marginRight: 8 }} />
              Taking on new projects
            </p>
          </div>
          <nav aria-label="Solutions">
            <h2 className="label" style={{ color: "var(--night-ink)", fontFamily: "var(--font-body)", fontSize: "0.8125rem", marginBottom: "0.9rem" }}>Solutions</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
              {SERVICES.map((s) => (
                <li key={s.slug}><Link className="ulink" href={`/solutions/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="label" style={{ color: "var(--night-ink)", fontFamily: "var(--font-body)", fontSize: "0.8125rem", marginBottom: "0.9rem" }}>Company</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
              {NAV.map((n) => (<li key={n.href}><Link className="ulink" href={n.href}>{n.label}</Link></li>))}
              <li><Link className="ulink" href="/#contact">Contact</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="label" style={{ color: "var(--night-ink)", fontFamily: "var(--font-body)", fontSize: "0.8125rem", marginBottom: "0.9rem" }}>Talk to us</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
              <li><a className="ulink" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a className="ulink" href={SITE.linkedin} rel="noopener" target="_blank">LinkedIn</a></li>
              <li><a className="ulink" href={SITE.github} rel="noopener" target="_blank">GitHub</a></li>
            </ul>
          </div>
        </div>
        <hr className="rule" style={{ marginBlock: "3rem 1.25rem" }} />
        <p className="muted" style={{ fontSize: "0.8125rem", display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", justifyContent: "space-between" }}>
          <span>© {new Date().getFullYear()} RelayOps. All rights reserved.</span>
          <span>
            Photos by{" "}
            <a className="ulink ulink-static" href="https://unsplash.com/@chappelldigitalmarketing" rel="noopener" target="_blank">Chase Chappell</a>
            {" "}and{" "}
            <a className="ulink ulink-static" href="https://unsplash.com/@lreverchuk" rel="noopener" target="_blank">Lyubomyr Reverchuk</a>
            {" "}on Unsplash
          </span>
        </p>
      </div>
    </footer>
  );
}
