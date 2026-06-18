"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Financial Services Automation",
    category: "Enterprise Automation",
    challenge:
      "Large financial institution needed to automate manual compliance reporting that took 200+ hours per month across multiple teams.",
    solution:
      "Designed and implemented an AI-powered workflow system that integrates with existing banking systems to automatically extract, validate, and report compliance metrics in real-time.",
    results: [
      "92% reduction in manual reporting hours",
      "100% compliance accuracy achieved",
      "ROI achieved in 4 months",
      "$500K+ annual savings",
    ],
    tags: ["AI Automation", "Compliance", "Enterprise"],
  },
  {
    id: "case-2",
    title: "Supply Chain Intelligence Platform",
    category: "Data & Analytics",
    challenge:
      "Manufacturing company lacked visibility into supply chain disruptions, losing $2M+ annually to inefficient sourcing decisions.",
    solution:
      "Built an AI-driven supply chain intelligence platform that monitors supplier performance, predicts disruptions, and recommends optimal sourcing strategies using real-time market data.",
    results: [
      "73% improvement in supplier reliability",
      "41% reduction in procurement costs",
      "$2.1M cost recovery in year one",
      "15% faster sourcing cycle times",
    ],
    tags: ["Analytics", "AI", "Supply Chain"],
  },
  {
    id: "case-3",
    title: "Customer Support Automation",
    category: "Service Operations",
    challenge:
      "SaaS company struggling with 8-hour average response times, impacting retention and NPS scores.",
    solution:
      "Implemented an AI agent system that handles 70% of customer inquiries autonomously while intelligently routing complex issues to human specialists.",
    results: [
      "94% first-response automation rate",
      "Average response time reduced from 8 hours to 2 minutes",
      "35% improvement in customer satisfaction",
      "22% team productivity increase",
    ],
    tags: ["Customer Service", "AI Agents", "SaaS"],
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
              Our Work
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl">
              Real project writeups demonstrating how we help enterprises automate
              workflows, reduce costs, and scale operations with AI-driven solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <article
                  key={study.id}
                  className="group relative p-6 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/10 cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    {/* Category Tag */}
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wide">
                        {study.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#0EA5E9]">
                      {study.title}
                    </h3>

                    {/* Challenge */}
                    <div className="mb-6 flex-1">
                      <p className="text-sm text-[#94A3B8]">{study.challenge}</p>
                    </div>

                    {/* Results Preview */}
                    <div className="mb-6 pt-6 border-t border-white/10">
                      <h4 className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-wide mb-3">
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-sm text-[#94A3B8] flex items-start gap-2">
                            <span className="text-[#F5A623] mt-0.5">&rarr;</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to solve your challenges?</h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Let&apos;s discuss how we can drive measurable results for your organization.
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
