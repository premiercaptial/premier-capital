import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";
import { InsightCard } from "@/components/insights/InsightCard";

// Fully static export: every slug must be known at build time.
export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}
export const dynamicParams = false;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return { title: "Article Not Found | Premier Capital" };
  }

  return {
    title: `${insight.title} | Premier Capital Insights`,
    description: insight.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  const related = insights
    .filter((item) => item.slug !== insight.slug && item.category === insight.category)
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : insights.filter((item) => item.slug !== insight.slug).slice(0, 3);

  return (
    <main className="bg-[#FAFAF8]">
      <article className="mx-auto max-w-3xl px-6 py-16 md:px-0 md:py-24">
        {/* Back links */}
        <div className="mb-10 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#4A5568] transition-colors duration-300 hover:text-[#C6A15B]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#4A5568] transition-colors duration-300 hover:text-[#C6A15B]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All Insights
          </Link>
        </div>

        {/* Headline first */}
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
          {insight.category}
        </span>
        <h1
          className="mt-3 text-3xl leading-tight text-[#0B1F3A] md:text-[42px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {insight.title}
        </h1>
        <div className="mt-5 flex items-center gap-3 border-b border-[#E8E4DC] pb-8 text-xs uppercase tracking-wide text-[#4A5568]">
          <span>{insight.date}</span>
          <span aria-hidden="true">·</span>
          <span>{insight.readTime}</span>
        </div>

        {/* Contained supporting image — small fixed square, not a full-bleed hero */}
        <div className="relative mt-10 aspect-square w-[220px] overflow-hidden border border-[#E8E4DC] md:w-[280px]">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            sizes="280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Body */}
        <div className="mt-12 space-y-6">
          {insight.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-[16px] leading-relaxed text-[#4A5568] first-letter:text-[#0B1F3A]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-[#E8E4DC] bg-white px-8 py-12 text-center">
          <h3
            className="text-xl text-[#0B1F3A] md:text-2xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Have Questions About Your Own Portfolio?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#4A5568]">
            Speak with a Premier Capital advisor for guidance tailored to your goals.
          </p>
          <Link
            href="/#contact"
            className="group mt-6 inline-flex items-center gap-2 border border-[#0B1F3A] px-7 py-3 text-sm font-medium uppercase tracking-wide text-[#0B1F3A] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#0B1F3A] hover:text-white"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </article>

      {/* Related Insights */}
      <section className="border-t border-[#E8E4DC] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2
            className="mb-8 text-2xl text-[#0B1F3A]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Related Insights
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((item) => (
              <InsightCard key={item.id} insight={item} variant="grid" />
            ))}
          </div>

          <div className="mt-14 flex justify-center border-t border-[#E8E4DC] pt-12">
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