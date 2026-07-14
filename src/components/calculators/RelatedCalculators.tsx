"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { RelatedCalculatorItem } from "@/types/calculator";
import { getCalculatorIcon } from "./icons";

interface RelatedCalculatorsProps {
  title?: string;
  items: RelatedCalculatorItem[];
}

/**
 * Cross-links to adjacent calculators. Beyond navigation, this is the
 * internal-linking backbone the SEO brief calls for — every calculator
 * page passes 2-4 relevant siblings here.
 */
export function RelatedCalculators({
  title = "Related calculators",
  items,
}: RelatedCalculatorsProps) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
        className="mb-8 font-display text-2xl font-medium text-navy sm:text-3xl"
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = getCalculatorIcon(item.icon);
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-navy/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
                </div>
                <h3 className="font-display text-lg font-medium text-navy">{item.title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-navy/50">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
