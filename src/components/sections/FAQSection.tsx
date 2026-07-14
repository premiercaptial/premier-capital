"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What financial services does Premier Capital offer?",
    answer:
      "Premier Capital offers a comprehensive range of financial services, including Wealth Management, Investment Solutions, Mutual Funds, PMS, AIFs, Bonds, Insurance Planning, Retirement Planning, Home Loans, Loan Against Property (LAP), Loan Against Securities (LAS), Business Loans, Working Capital Finance, and Construction Finance. Our solutions are tailored to help individuals, families, entrepreneurs, and businesses achieve their financial goals.",
  },
  {
    question: "Do you provide financial advisory services in Chembur and beyond?",
    answer:
      "Yes. Premier Capital proudly serves clients in Chembur, Ghatkopar, Kurla, Tilak Nagar, Govandi, Deonar, Wadala, Sion, Navi Mumbai, South Mumbai, and across the Mumbai Metropolitan Region, while also assisting clients throughout India and internationally through secure virtual consultations. Whether you need wealth management, investment planning, insurance solutions, retirement planning, or business finance advisory, our experienced advisors provide personalized guidance tailored to your financial goals—wherever you are.",
  },
  {
    question: "Do you provide financial planning and investment services for NRIs?",
    answer:
      "Yes. Premier Capital works with Non-Resident Indians (NRIs) seeking professional financial guidance in India. We assist with NRI wealth management, investment planning, mutual fund investments, portfolio management, insurance solutions, home loans, and other financial services while helping clients make informed and compliant investment decisions.",
  },
  {
    question: "Can Premier Capital help with home loans and business financing?",
    answer:
      "Absolutely. We help individuals and businesses access a wide range of financing solutions, including Home Loans, Loan Against Property (LAP), Loan Against Securities (LAS), Business Loans, Working Capital Finance, and Construction Finance. Our team works with leading banks and financial institutions to identify financing options that align with your needs.",
  },
  {
    question: "Why choose Premier Capital as your financial advisor?",
    answer:
      "With over 20 years of experience, Premier Capital is committed to providing transparent, personalized, and goal-based financial advice. We focus on building long-term relationships by offering tailored wealth management, investment planning, insurance, and lending solutions designed to help clients grow, protect, and preserve their wealth with confidence.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-[#0B1F3A]">
            Questions Before You Begin
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Everything you need to know before scheduling your
            complimentary consultation.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className="border-b border-slate-200 last:border-none"
              >
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="group flex w-full items-center gap-8 py-8 text-left"
                >
                  <div
                    className={`w-12 text-lg font-semibold transition ${
                      active ? "text-[#C6A15B]" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#0B1F3A] transition group-hover:text-[#C6A15B]">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`transition duration-300 ${
                      active
                        ? "rotate-180 text-[#C6A15B]"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    active ? "max-h-96 pb-8" : "max-h-0"
                  }`}
                >
                  <div className="pl-20 pr-10">
                    <p className="leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
            {/* Final CTA */}
      <div className="mx-auto mt-20 max-w-5xl px-6">
        <div className="rounded-[32px] border border-[#C6A15B]/20 bg-[#FAFAF8] px-10 py-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
            Still Have Questions?
          </p>

          <h3 className="mt-4 text-4xl font-bold text-[#0B1F3A]">
            Let's Talk About Your Goals
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Our team is here to answer your questions and help you explore
            financial solutions tailored to your needs. Every conversation is
            completely confidential and without obligation.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#0B1F3A] px-8 py-4 text-white font-medium transition duration-300 hover:-translate-y-1 hover:bg-[#132d50]"
          >
            Schedule Consultation
          </Link>

          <p className="mt-5 text-sm text-slate-500">
            Complimentary consultation • Confidential discussion • No obligation
          </p>

        </div>
      </div>
          </section>
  );
}