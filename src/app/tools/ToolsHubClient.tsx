"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Lock } from "lucide-react";
import { CalculatorCTA } from "@/components/calculators";
import { getCalculatorIcon } from "@/components/calculators/icons";
import { CALCULATORS } from "@/lib/calculators-registry";
import type { CalculatorMeta } from "@/types/calculator";

// All 10 calculators are now live.
const LIVE_SLUGS = new Set(CALCULATORS.map((c) => c.slug));

const CATEGORIES: { key: "all" | CalculatorMeta["category"]; label: string }[] = [
  { key: "all", label: "All Calculators" },
  { key: "invest", label: "Invest" },
  { key: "borrow", label: "Borrow" },
  { key: "plan", label: "Plan" },
];

export function ToolsHubClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]["key"]>("all");

  const filtered = useMemo(() => {
    return CALCULATORS.filter((c) => {
      const matchesCategory = category === "all" || c.category === category;
      const matchesQuery =
        query.trim() === "" ||
        c.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        c.description.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="bg-background">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-border bg-navy-gradient">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #C6A15B 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-gold-200"
          >
            Financial Calculators
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl"
          >
            Plan every number before you commit to it.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 h-px w-24 origin-center bg-gold-line"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Ten calculators covering investing, borrowing, and retirement — built to give
            you a real number to plan around, not just a rough guess.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mx-auto mt-9 max-w-md"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 backdrop-blur-sm transition-colors duration-300 focus-within:border-gold/50">
              <Search className="h-4 w-4 flex-shrink-0 text-white/40" aria-hidden />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search calculators — SIP, EMI, retirement..."
                aria-label="Search calculators"
                className="w-full bg-transparent font-body text-sm text-white placeholder:text-white/35 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Category filters ---------- */}
      <section className="mx-auto max-w-6xl px-6 pt-10 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => {
            const isActive = category === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setCategory(c.key)}
                className={
                  isActive
                    ? "rounded-full bg-navy px-5 py-2 font-body text-sm font-medium text-white transition-all duration-300 ease-premium"
                    : "rounded-full border border-border bg-card px-5 py-2 font-body text-sm font-medium text-navy/60 transition-all duration-300 ease-premium hover:border-gold/40 hover:text-navy"
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ---------- Calculator grid ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${category}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((calc, index) => (
                <CalculatorCard key={calc.slug} calc={calc} index={index} isLive={LIVE_SLUGS.has(calc.slug)} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center font-body text-sm text-navy/50"
            >
              No calculators match &ldquo;{query}&rdquo;. Try a different search term.
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      <div className="border-t border-border">
        <CalculatorCTA
          title="Not sure which number matters most?"
          description="A Premier Capital advisor can walk through your full financial picture and tell you exactly which plan to run — no calculator required."
        />
      </div>
    </main>
  );
}

function CalculatorCard({
  calc,
  index,
  isLive,
}: {
  calc: CalculatorMeta;
  index: number;
  isLive: boolean;
}) {
  const Icon = getCalculatorIcon(calc.icon);

  const cardContent = (
    <>
      <div className="mb-5 flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold-600">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        {isLive ? (
          <ArrowUpRight className="h-4 w-4 text-navy/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
        ) : (
          <span className="flex items-center gap-1 rounded-full bg-navy/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-navy/40">
            <Lock className="h-2.5 w-2.5" aria-hidden />
            Soon
          </span>
        )}
      </div>
      <h3 className="font-display text-lg font-medium text-navy">{calc.name}</h3>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-navy/50">{calc.description}</p>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 ease-premium";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      {isLive ? (
        <Link href={`/tools/${calc.slug}`} className={`${className} hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover`}>
          {cardContent}
        </Link>
      ) : (
        <div className={`${className} cursor-not-allowed opacity-70`} aria-disabled>
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}
