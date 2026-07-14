"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { InsightCard } from "@/components/insights/InsightCard";
import type { Insight } from "@/data/insights";

interface InsightsGridProps {
  insights: Insight[];
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export function InsightsGrid({ insights }: InsightsGridProps) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(insights.map((insight) => insight.category)));
    return ["All", ...unique];
  }, [insights]);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featuredId = insights.find((i) => i.featured)?.id;

const filtered =
  activeCategory === "All"
    ? insights
    : insights.filter((insight) => insight.category === activeCategory);

  return (
    <div>
      <div
        className="mb-12 flex flex-wrap gap-3"
        role="tablist"
        aria-label="Filter insights by category"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`border px-5 py-2 text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                isActive
                  ? "border-[#0B1F3A] bg-[#0B1F3A] text-white"
                  : "border-[#E8E4DC] bg-white text-[#4A5568] hover:border-[#C6A15B] hover:text-[#0B1F3A]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((insight) => (
          <motion.div key={insight.id} variants={fadeUp}>
            <InsightCard insight={insight} variant="grid" />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-[#4A5568]">
          No articles in this category yet. Check back soon.
        </p>
      )}
    </div>
  );
}
