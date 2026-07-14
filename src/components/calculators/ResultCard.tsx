"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";
import { formatByType } from "@/lib/finance/format";

interface ResultCardProps {
  label: string;
  value: number;
  format?: "currency" | "number" | "percent" | "years";
  sublabel?: string;
  emphasis?: "primary" | "secondary";
  index?: number; // for stagger
}

/**
 * The headline output card. `emphasis="primary"` renders as the deep-navy
 * hero figure (e.g. Future Value); `secondary` renders as a quiet white
 * card for supporting figures (e.g. Invested Amount, Est. Returns).
 */
export function ResultCard({
  label,
  value,
  format = "currency",
  sublabel,
  emphasis = "secondary",
  index = 0,
}: ResultCardProps) {
  const isPrimary = emphasis === "primary";
  const formatter = (v: number) => formatByType(v, format);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={
        isPrimary
          ? "relative overflow-hidden rounded-2xl bg-navy-gradient p-7 shadow-card"
          : "rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      }
    >
      {isPrimary && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl"
        />
      )}

      <p
        className={
          isPrimary
            ? "font-body text-xs font-medium uppercase tracking-widest text-gold-200"
            : "font-body text-xs font-medium uppercase tracking-widest text-navy/45"
        }
      >
        {label}
      </p>

      <AnimatedNumber
        value={value}
        formatter={formatter}
        className={
          isPrimary
            ? "mt-3 block font-display text-4xl font-medium tabular-nums text-white sm:text-[2.75rem]"
            : "mt-3 block font-display text-3xl font-medium tabular-nums text-navy"
        }
      />

      {sublabel && (
        <p
          className={
            isPrimary
              ? "mt-2 font-body text-sm text-white/60"
              : "mt-2 font-body text-sm text-navy/45"
          }
        >
          {sublabel}
        </p>
      )}
    </motion.div>
  );
}

/** Lays out a primary card alongside 1-3 secondary cards, staggered. */
export function ResultCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
