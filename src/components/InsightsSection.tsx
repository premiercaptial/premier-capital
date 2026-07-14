"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";
import { InsightCard } from "@/components/insights/InsightCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function InsightsSection() {
  const featured = insights.find((insight) => insight.featured);
  const sidebar = insights.filter((insight) => !insight.featured).slice(0, 1);

  if (!featured) return null;

  return (
    <section
  id="insights"
  className="bg-[#FAFAF8] py-20 md:py-28"
>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
              PCA Insights
            </span>

            <h2
              className="mt-3 text-3xl leading-tight text-[#0B1F3A] md:text-4xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Financial Clarity,{" "}
              <em className="italic text-[#C6A15B]">Simplified</em>
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4A5568]">
              Practical insights on wealth creation, investments, loans and insurance planning.
            </p>
          </div>

          <Link
            href="/insights"
            className="group hidden shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#0B1F3A] transition-colors duration-300 hover:text-[#C6A15B] md:flex"
          >
            Explore All Articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10 lg:gap-10">
          {/* Featured */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <InsightCard insight={featured} variant="featured" />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col gap-5 lg:col-span-3"
          >
            {sidebar.map((insight) => (
              <motion.div key={insight.id} variants={fadeUp}>
                <InsightCard insight={insight} variant="sidebar" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile link */}
        <div className="mt-10 flex md:hidden">
          <Link
            href="/insights"
            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#0B1F3A] transition-colors duration-300 hover:text-[#C6A15B]"
          >
            Explore All Articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-24 border border-[#E8E4DC] bg-white px-8 py-16 text-center md:px-16"
        >
          <h3
            className="text-2xl text-[#0B1F3A] md:text-3xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Explore Our Financial Insights
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#4A5568]">
            Practical guides on investing, wealth creation, retirement, insurance and financing.
          </p>

          <Link
            href="/insights"
            className="group mt-8 inline-flex items-center gap-2 border border-[#0B1F3A] px-8 py-3 text-sm font-medium uppercase tracking-wide text-[#0B1F3A] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#0B1F3A] hover:text-white"
          >
            Explore All Articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}