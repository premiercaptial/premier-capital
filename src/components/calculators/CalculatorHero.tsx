"use client";

import { motion } from "framer-motion";
import type { CalculatorIconName } from "@/types/calculator";
import { getCalculatorIcon } from "./icons";

interface CalculatorHeroProps {
  eyebrow?: string; // e.g. "Investment Calculators"
  title: string; // H1
  description: string;
  icon: CalculatorIconName;
}

/**
 * The signature moment on every calculator page: an icon badge, a serif
 * H1, and a thin gold rule that draws itself in on load — a restrained
 * nod to a ticker/underline-your-numbers motif without leaning on charts
 * before the user has even entered a figure.
 */
export function CalculatorHero({ eyebrow, title, description, icon }: CalculatorHeroProps) {
  const Icon = getCalculatorIcon(icon);

  return (
    <section className="relative overflow-hidden border-b border-border bg-navy-gradient">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C6A15B 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-white/5 backdrop-blur-sm"
        >
          <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} aria-hidden />
        </motion.div>

        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-gold-200"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px w-24 origin-left bg-gold-line"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/65 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
