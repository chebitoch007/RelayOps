"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface ExampleBuild {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  capabilities: string[];
  tags: string[];
}

// RelayOps is a new agency — these are illustrative builds (how we'd approach
// each problem), not past client results. No company names, no invented metrics.
const exampleBuilds: ExampleBuild[] = [
  {
    id: "build-1",
    title: "Lead Qualification & Booking System",
    category: "Marketing & Service Agencies",
    problem:
      "Inbound leads sit in a shared inbox for hours before anyone replies, and by the time someone does, the lead has already talked to a competitor.",
    approach:
      "An AI assistant on the website or ad funnel responds the moment a lead comes in, asks a few qualifying questions, and books a call directly onto the team's calendar for the leads worth a human's time.",
    capabilities: [
      "Responds to new leads within seconds, day or night",
      "Asks the same qualifying questions a salesperson would",
      "Books straight to your calendar — no back-and-forth scheduling",
      "Routes anything unclear to a human instead of guessing",
    ],
    tags: ["Lead Follow-Up", "Booking Automation", "Agencies"],
  },
  {
    id: "build-2",
    title: "WhatsApp / SMS Follow-Up Sequences",
    category: "Local & Service Businesses",
    problem:
      "Leads who don't book on the first message usually never hear from the business again — there's no time to chase every cold lead manually.",
    approach:
      "An automated follow-up sequence checks back in over WhatsApp or SMS on a set schedule, answers common questions, and hands off to a person as soon as the lead is ready to talk.",
    capabilities: [
      "Multi-touch follow-up without anyone remembering to send it",
      "Handles FAQs so leads aren't left waiting on a reply",
      "Flags warm leads to a human at the right moment",
      "Stops automatically once a lead replies they're not interested",
    ],
    tags: ["WhatsApp Automation", "Follow-Up", "Service Businesses"],
  },
  {
    id: "build-3",
    title: "Appointment Reminders & No-Show Recovery",
    category: "Coaches & Consultants",
    problem:
      "Booked calls quietly no-show because there's no reminder system, and re-booking them takes manual follow-up that often just doesn't happen.",
    approach:
      "An automated reminder sequence confirms the appointment ahead of time and, if someone no-shows, immediately offers an easy way to re-book without anyone having to chase them down.",
    capabilities: [
      "Automatic reminders at set intervals before the call",
      "One-tap rescheduling built into the reminder itself",
      "No-show follow-up triggered without manual tracking",
      "Calendar stays accurate without anyone checking it by hand",
    ],
    tags: ["Appointment Booking", "Automation", "Calendars"],
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What We Build
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl">
              RelayOps is a new agency — we don&apos;t have client logos to show off yet.
              What we can show you is exactly how we&apos;d approach the most common
              problems agencies and service businesses bring to us, and what the
              system would actually do once it&apos;s live.
            </p>
          </div>
        </section>

        {/* Example Builds Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleBuilds.map((build) => (
                <article
                  key={build.id}
                  className="group relative p-6 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/10 cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    {/* Category Tag */}
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wide">
                        {build.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#0EA5E9]">
                      {build.title}
                    </h3>

                    {/* Problem */}
                    <div className="mb-6 flex-1">
                      <p className="text-sm text-[#94A3B8]">{build.problem}</p>
                    </div>

                    {/* What it does */}
                    <div className="mb-6 pt-6 border-t border-white/10">
                      <h4 className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-wide mb-3">
                        What It Would Do
                      </h4>
                      <ul className="space-y-2">
                        {build.capabilities.slice(0, 2).map((capability, idx) => (
                          <li key={idx} className="text-sm text-[#94A3B8] flex items-start gap-2">
                            <span className="text-[#F5A623] mt-0.5">&rarr;</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {build.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-[#7B8FAB] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#F5A623] to-[#0EA5E9]" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Have something like this in mind?</h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Tell us what&apos;s eating up your team&apos;s time, and we&apos;ll tell you honestly whether automation is the right fix.
            </p>
            <Link
              href="/#contact"
              className="inline-flex px-8 py-3 rounded-xl bg-[#F5A623] text-[#04060A] font-bold hover:bg-[#E59512] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
            >
              Schedule a Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}