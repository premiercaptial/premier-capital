"use client";

// ─────────────────────────────────────────────────────────────
// src/components/services/ServicePageLayout.tsx
// Shared layout for all 7 Premier Capital service pages.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ServiceLeadPrompt from "./ServiceLeadPrompt";
import { useServiceConsultationTrigger } from "./useServiceConsultationTrigger";
import GoldLine from "@/components/GoldLine";


export interface Benefit { title: string; description: string }
export interface ProcessStep { step: string; title: string; description: string }
export interface FAQ { question: string; answer: string }
export interface TrustItem { label: string }

export interface ServicePageData {
  title: string;
  tagline: string;
  heroDescription: string;
  icon: React.ReactNode;
  problem: { heading: string; body: string };
  solution: { heading: string; body: string };
  benefits: Benefit[];
  process: ProcessStep[];
  trust: { heading: string; points: string[]; partner?: string };
  faqs: FAQ[];
  relatedServices: { title: string; href: string }[];
  cta?: {
  label: string;
  href: string;
};
}

// ── Easing ──────────────────────────────────────────────────
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease, delay },
});

// ── FAQ Item ─────────────────────────────────────────────────
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8E4DC] last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center gap-5 py-6 text-left"
      >
        <span className="text-sm font-bold text-[#C6A15B] w-8 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
       <h3 className="flex-1 text-base font-semibold text-[#0B1F3A] group-hover:text-[#C6A15B] transition-colors duration-300">
  {question}
</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <ChevronDown size={18} className={open ? "text-[#C6A15B]" : "text-slate-400"} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.4, ease }, opacity: { duration: 0.3 } }}
            style={{ overflow: "hidden" }}
          >
            <p className="pl-13 pr-6 pb-6 text-sm leading-relaxed text-slate-600 pl-[52px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Shared CTA Button ────────────────────────────────────────
function CTAButton({ label = "Book a Consultation", href = "/#contact", large = false }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 bg-[#C6A15B] text-[#0B1F3A] font-bold tracking-wide uppercase group transition-all duration-300 hover:bg-white ${
        large ? "px-10 py-5 text-sm" : "px-7 py-4 text-xs"
      }`}
    >
      {label}
      <ArrowRight size={large ? 16 : 13} className="group-hover:translate-x-1 transition-transform" />
    </motion.a>
  );
}

// ── Main Layout ──────────────────────────────────────────────
export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  // ── Lead form state (Name / Phone / Message only — no email on service pages) ──
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // ── Floating prompt: fires once per session via 30s timer or exit intent ──
  const [showPrompt, setShowPrompt] = useState(false);
  useServiceConsultationTrigger({
    serviceKey: data.title,
    onTrigger: () => setShowPrompt(true),
    enabled: !showPrompt,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          service: data.title,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ── 1. HERO ── */}
      <section className="relative bg-[#0B1F3A] overflow-hidden pt-36 pb-28 px-6">
        {/* Gold radial glow */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{ backgroundImage: "radial-gradient(ellipse at 75% 40%, #C6A15B 0%, transparent 65%)" }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, #C6A15B 0px, #C6A15B 1px, transparent 0px, transparent 60px), repeating-linear-gradient(90deg, #C6A15B 0px, #C6A15B 1px, transparent 0px, transparent 60px)" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Back link */}
          <motion.div {...fadeUp(0)}>
            <Link href="/#services"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#C6A15B] text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 mb-12"
            >
              <ArrowLeft size={12} /> All Services
            </Link>
          </motion.div>

          <div className="flex items-start gap-7">
            {/* Icon */}
            <motion.div
              {...fadeUp(0.1)}
              className="w-16 h-16 bg-[#C6A15B]/15 border border-[#C6A15B]/30 flex items-center justify-center shrink-0 mt-1"
            >
              {data.icon}
            </motion.div>

            <div>
              <motion.p {...fadeUp(0.1)}
                className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#C6A15B] mb-4"
              >
                Premier Capital
              </motion.p>
              <motion.h1
                {...fadeUp(0.18)}
                className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {data.title}
              </motion.h1>
              <motion.p {...fadeUp(0.26)}
                className="text-white/60 text-lg max-w-2xl leading-relaxed mb-4"
              >
                {data.tagline}
              </motion.p>
              <motion.p {...fadeUp(0.3)}
                className="text-white/45 text-sm max-w-xl leading-relaxed mb-10"
              >
                {data.heroDescription}
              </motion.p>
              <motion.div {...fadeUp(0.36)}>
                <CTAButton large />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <GoldLine />
      {/* ── 2. PROBLEM → SOLUTION ── */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Problem */}
          <motion.div {...fadeUp(0)}
            className="bg-white border border-[#E8E4DC] p-9"
          >
            <div className="w-8 h-1 bg-slate-300 mb-6" />
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">
              The Challenge
            </p>
            <h2 className="text-xl font-bold text-[#0B1F3A] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {data.problem.heading}
            </h2>
            <p className="text-sm leading-relaxed text-[#4A5568]">{data.problem.body}</p>
          </motion.div>
          {/* Solution */}
          <motion.div {...fadeUp(0.1)}
            className="bg-[#0B1F3A] border border-[#0B1F3A] p-9"
          >
            <div className="w-8 h-1 bg-[#C6A15B] mb-6" />
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#C6A15B] mb-3">
              Our Approach
            </p>
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {data.solution.heading}
            </h2>
            <p className="text-sm leading-relaxed text-white/65">{data.solution.body}</p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. BENEFITS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-14">
            <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#C6A15B] mb-3">
              Why Premier Capital
            </p>
            <h2 className="text-3xl font-bold text-[#0B1F3A]" style={{ fontFamily: "Georgia, serif" }}>
              What You Get
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="group border border-[#E8E4DC] p-7 hover:border-[#C6A15B]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 bg-[#f5edd9] flex items-center justify-center mb-5 group-hover:bg-[#C6A15B]/20 transition-colors duration-300">
                  <CheckCircle2 size={15} className="text-[#C6A15B]" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">{b.title}</h3>
                <p className="text-xs leading-relaxed text-[#4A5568]">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-14">
            <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#C6A15B] mb-3">
              The Process
            </p>
            <h2 className="text-3xl font-bold text-[#0B1F3A]" style={{ fontFamily: "Georgia, serif" }}>
              How It Works
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.process.map((p, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="relative">
                {/* Connector line */}
                {i < data.process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%)] w-full h-px bg-[#E8E4DC] z-0" style={{ width: "calc(100% - 40px)", left: "calc(40px)" }} />
                )}
                <div className="relative z-10 flex flex-col">
                  <div className="w-10 h-10 bg-[#0B1F3A] text-white text-xs font-bold flex items-center justify-center mb-5 shrink-0">
                    {p.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">{p.title}</h3>
                  <p className="text-xs leading-relaxed text-[#4A5568]">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TRUST & COMPLIANCE ── */}
      <section className="py-24 px-6 bg-[#0B1F3A]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#C6A15B] mb-3">
              Trust & Compliance
            </p>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
              {data.trust.heading}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {data.trust.points.map((point, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className="flex items-start gap-4 bg-white/5 border border-white/10 p-5"
              >
                <span className="text-[#C6A15B] shrink-0 mt-0.5">✦</span>
                <p className="text-sm text-white/75 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
          {data.trust.partner && (
            <motion.div {...fadeUp(0.2)}
              className="border border-[#C6A15B]/30 bg-[#C6A15B]/5 p-6 flex items-center gap-5"
            >
              <div className="w-10 h-10 bg-[#C6A15B]/20 flex items-center justify-center shrink-0">
                <span className="text-[#C6A15B] text-lg">✦</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">{data.trust.partner}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#C6A15B] mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold text-[#0B1F3A]" style={{ fontFamily: "Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div>
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA + INLINE LEAD FORM ── */}
      <section className="py-28 px-6 bg-[#FAFAF8] border-t border-[#E8E4DC]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: heading / copy */}
          <motion.div {...fadeUp(0)}>
            <p className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#C6A15B] mb-4">
              Ready to Begin
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Start Your Financial
              <br />
              <span className="italic text-[#C6A15B]">Journey Today</span>
            </h2>
            <p className="text-[#4A5568] text-sm leading-relaxed mb-6 max-w-md">
              Book a complimentary consultation with the Premier Capital team
              for {data.title}. No obligation, no pressure — just clarity on
              your next steps.
            </p>
            <p className="text-[0.65rem] text-slate-400 tracking-wide">
              Complimentary · Confidential · No obligation
            </p>
          </motion.div>

          {/* Right: inline lead form (Name / Phone / Message only) */}
          <motion.div {...fadeUp(0.1)}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease }}
                  className="bg-white border border-[#E8E4DC] p-10 text-center flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-12 h-12 bg-[#f5edd9] flex items-center justify-center rounded-full mb-1">
                    <Send size={20} className="text-[#C6A15B]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#0B1F3A]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Message Received
                  </h3>
                  <p className="text-sm text-[#4A5568] max-w-xs">
                    Thank you for reaching out about {data.title}. Our team
                    will contact you within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E8E4DC] p-8 flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="border border-[#E8E4DC] px-4 py-3 text-sm text-[#0B1F3A] placeholder:text-[#4A5568]/40 focus:outline-none focus:border-[#C6A15B] transition-colors bg-[#FAFAF8]"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="border border-[#E8E4DC] px-4 py-3 text-sm text-[#0B1F3A] placeholder:text-[#4A5568]/40 focus:outline-none focus:border-[#C6A15B] transition-colors bg-[#FAFAF8]"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568]">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder={`Tell us a little about your ${data.title.toLowerCase()} needs...`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="border border-[#E8E4DC] px-4 py-3 text-sm text-[#0B1F3A] placeholder:text-[#4A5568]/40 focus:outline-none focus:border-[#C6A15B] transition-colors bg-[#FAFAF8] resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mt-1 w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0B1F3A] text-white text-sm font-semibold tracking-[0.12em] uppercase hover:bg-[#C6A15B] transition-all duration-300 group"
                  >
                    Book My Consultation
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── Related Services ── */}
      {data.relatedServices.length > 0 && (
        <section className="py-12 px-6 bg-white border-t border-[#E8E4DC]">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-4">
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-slate-400 mr-4">
              Explore More
            </p>
            {data.relatedServices.map((s, i) => (
              <Link key={i} href={s.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E8E4DC] text-sm text-[#0B1F3A] font-medium hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300"
              >
                {s.title} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Floating lead prompt (30s timer / exit intent) ── */}
      <AnimatePresence>
        {showPrompt && (
          <ServiceLeadPrompt
            serviceName={data.title}
            onClose={() => setShowPrompt(false)}
          />
        )}
      </AnimatePresence>

    </main>
  );
}
