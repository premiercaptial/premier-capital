"use client";

import { motion } from "framer-motion";

interface EducationalSectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Houses the "how this works" explainer copy every calculator needs for
 * both users and SEO. Deliberately plain prose styling — this section's
 * job is readability, not decoration. Content is authored per-calculator
 * (H2/H3/p/ul) and passed as children; this just applies consistent type
 * rhythm and measure.
 */
export function EducationalSection({ title, children }: EducationalSectionProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-display text-2xl font-medium text-navy sm:text-3xl"
      >
        {title}
      </motion.h2>
      <div
        className="
          font-body text-[15px] leading-relaxed text-navy/65
          [&>h3]:mt-8 [&>h3]:mb-2.5 [&>h3]:font-display [&>h3]:text-lg [&>h3]:font-medium [&>h3]:text-navy
          [&>p]:mb-4
          [&>ul]:mb-4 [&>ul]:ml-5 [&>ul]:list-disc [&>ul]:space-y-1.5
          [&>ol]:mb-4 [&>ol]:ml-5 [&>ol]:list-decimal [&>ol]:space-y-1.5
          [&_strong]:font-semibold [&_strong]:text-navy
          [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-700
        "
      >
        {children}
      </div>
    </section>
  );
}
