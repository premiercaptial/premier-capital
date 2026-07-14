import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";
import { InsightsGrid } from "@/components/insights/InsightsGrid";

export const metadata: Metadata = {
  title: "Financial Insights | Premier Capital",
  description:
    "Practical insights on wealth management, investment advisory, loans and insurance planning from Premier Capital's Mumbai advisory team.",
};

export default function InsightsPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <section className="border-b border-[#E8E4DC] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#4A5568] transition-colors duration-300 hover:text-[#C6A15B]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
            PCA Insights
          </span>
          <h1
            className="mt-3 max-w-2xl text-4xl leading-tight text-[#0B1F3A] md:text-5xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Financial Clarity, <em className="italic text-[#C6A15B]">Simplified</em>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#4A5568]">
            Practical guides on investing, wealth creation, retirement, insurance and financing
            — written by the Premier Capital advisory team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InsightsGrid insights={insights} />

          <div className="mt-16 flex justify-center border-t border-[#E8E4DC] pt-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 border border-[#0B1F3A] px-7 py-3 text-sm font-medium uppercase tracking-wide text-[#0B1F3A] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#0B1F3A] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}