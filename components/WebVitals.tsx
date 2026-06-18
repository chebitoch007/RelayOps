"use client";

import { useReportWebVitals } from "next/web-vitals";
import { reportWebVitals } from "@/lib/analytics";

/**
 * Thin client component that registers the Web Vitals reporter.
 * Imported once in RootLayout  -  zero render output.
 */
export default function WebVitals() {
  useReportWebVitals(reportWebVitals);
  return null;
}