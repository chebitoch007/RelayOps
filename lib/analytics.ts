import type { Metric } from "web-vitals";

/**
 * Reports Web Vitals metrics to your analytics endpoint.
 * In development, metrics are logged to the console.
 * In production, replace the console.log with a POST to your analytics service.
 *
 * Tracked metrics:
 * - LCP  (Largest Contentful Paint)   — loading performance
 * - FID  (First Input Delay)          — interactivity
 * - CLS  (Cumulative Layout Shift)    — visual stability
 * - FCP  (First Contentful Paint)     — first render speed
 * - TTFB (Time to First Byte)         — server response speed
 * - INP  (Interaction to Next Paint)  — responsiveness (Core Web Vital)
 */
export function reportWebVitals(metric: Metric): void {
  if (process.env.NODE_ENV === "development") {
    const { name, value, rating, id } = metric;
    console.log(
      `%c[Web Vitals] %c${name}`,
      "color: #F5A623; font-weight: bold;",
      "color: #0EA5E9; font-weight: bold;",
      { value: Math.round(value), rating, id }
    );
    return;
  }

  // Production: send to your analytics endpoint.
  // Example using Navigator.sendBeacon for non-blocking delivery:
  //
  // const body = JSON.stringify({
  //   name: metric.name,
  //   value: metric.value,
  //   rating: metric.rating,
  //   id: metric.id,
  //   navigationType: metric.navigationType,
  // });
  //
  // navigator.sendBeacon("/api/vitals", body);
  //
  // Or send to a third-party service like Datadog, PostHog, etc.
}