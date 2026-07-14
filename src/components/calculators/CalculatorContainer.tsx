"use client";

import { motion } from "framer-motion";

interface CalculatorContainerProps {
  inputs: React.ReactNode;
  results: React.ReactNode;
  inputsTitle?: string;
}

/**
 * The core interactive card every calculator page centers on: inputs in
 * a quiet white panel on the left, results (cards + chart) on the right,
 * sticky on desktop so the numbers stay visible while adjusting sliders.
 * Individual calculators pass their own <InputSlider>s and <ResultCard>s
 * as `inputs` / `results` — this component owns only the shell.
 */
export function CalculatorContainer({
  inputs,
  results,
  inputsTitle = "Your details",
}: CalculatorContainerProps) {
  return (
    <section className="mx-auto -mt-10 max-w-6xl px-6 pb-4 sm:-mt-14 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8"
      >
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="mb-6 font-display text-lg font-medium text-navy">{inputsTitle}</h2>
          <div className="space-y-7">{inputs}</div>
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <div className="space-y-6">{results}</div>
        </div>
      </motion.div>
    </section>
  );
}
