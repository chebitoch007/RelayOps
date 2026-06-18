import React from "react";

interface SkeletonCardProps {
  /** Number of text lines to render inside the card */
  lines?: number;
  /** Show a large icon placeholder at the top */
  hasIcon?: boolean;
  /** Show tag chips at the bottom */
  hasTags?: boolean;
  /** Extra className for sizing/layout overrides */
  className?: string;
}

/**
 * Pure-CSS shimmer skeleton card.
 * Matches the general proportions of ServiceCard, BenefitCard, and StepCard.
 * Uses CSS animation only  -  no Framer Motion overhead.
 */
export default function SkeletonCard({
  lines = 3,
  hasIcon = true,
  hasTags = false,
  className = "",
}: SkeletonCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 border border-white/[0.04] bg-white/[0.02] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {hasIcon && (
        <div className="flex items-start gap-4 mb-4">
          <div className="skeleton w-11 h-11 rounded-xl flex-shrink-0" />
          <div className="skeleton h-5 w-32 rounded mt-1" />
        </div>
      )}

      <div className="space-y-2.5 mb-5">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton h-3 rounded"
            style={{ width: `${i === lines - 1 ? 65 : 100}%` }}
          />
        ))}
      </div>

      {hasTags && (
        <div className="flex gap-2">
          {[60, 72, 56].map((w, i) => (
            <div key={i} className="skeleton h-6 rounded-md" style={{ width: `${w}px` }} />
          ))}
        </div>
      )}
    </div>
  );
}