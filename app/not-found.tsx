import Link from "next/link";
import { PageHead } from "@/components/PageParts";

export default function NotFound() {
  return (
    <>
      <PageHead crumbs={[{ name: "Page not found", href: "/404" }]} title="That page is not here." lede="The link may be old or mistyped. These will get you back on track." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Link className="btn" href="/">Go to the homepage</Link>
          <Link className="btn btn-ghost" href="/solutions">Browse solutions</Link>
        </div>
      </section>
    </>
  );
}
