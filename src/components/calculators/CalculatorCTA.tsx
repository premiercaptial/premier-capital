"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CalculatorCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * The bridge from "I ran a number" to "I spoke to an advisor" — every
 * calculator ends here. Kept visually distinct (full navy) so it reads
 * as a firm decision point, not another content section.
 */
export function CalculatorCTA({
  title = "Turn this estimate into a plan.",
  description = "A Premier Capital advisor can stress-test this projection against your full portfolio, tax position, and goals — at no cost for an initial consultation.",
  primaryLabel = "Book a consultation",
  primaryHref = "/#contact",
  secondaryLabel = "Explore all calculators",
  secondaryHref = "/tools",
}: CalculatorCTAProps) {
  return (
    <section className="px-6 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy-gradient px-8 py-14 text-center sm:px-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #C6A15B 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto h-px w-16 bg-gold-line" />

        <h2 className="relative mx-auto mt-6 max-w-xl font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-white/60">
          {description}
        </p>

        <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-navy transition-all duration-300 ease-premium hover:bg-gold-200 hover:shadow-gold"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-body text-sm font-medium text-white/85 transition-all duration-300 ease-premium hover:border-white/40 hover:text-white"
          >
            {secondaryLabel}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
