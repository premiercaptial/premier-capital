"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Had a great experience with Mr. Dilawar Dawoodani -Premier Capital Advisor. He has excellent knowledge and vast experience in financial planning. He understood my financial needs perfectly and guided me with the right planning and investment solutions. His approach is professional, transparent, and customer-focused. Highly recommended for anyone looking for reliable financial advice and future financial planning.",
    name: "Rajvinder Kaur",
    title: "Client",
    location: "Mumbai",
    initials: "RK",
  },
  {
    quote:
      "Excellent wealth management service! Dilawar Dawoodani at Premier Capital Advisor is knowledgeable, professional, and truly client-focused. He takes the time to understand your financial goals and offers smart, personalized strategies. Highly recommend!",
    name: "Rohini Patil",
    title: "Client",
    location: "Mumbai",
    initials: "RP",
  },
  {
    quote:
      "Premier capital advisor has been amazing in suggesting me to invest in india as I am NRI Dilawar Helped me to find a suitable mix of investment product like stock broking PMS AIF AND Mutuals funds.",
    name: "Pooja Baweja",
    title: "Client",
    location: "Pune",
    initials: "PB",
  },
  {
    quote:
      "Have taken loan against property from premier capital advisor. They are realistic and got the my loan done in 15 days TAT. I recommended them for loan against property any where in Mumbai. They are specialist in construction finance working capital and LRD.",
    name: "Manish Narkar",
    title: "working professional",
    location: "mumbai",
    initials: "MN",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="bg-[#FAFAF8] section-pad border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left heading */}
          <div className="lg:w-80 shrink-0">
            <div className="eyebrow mb-4">Client Stories</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Trusted by Those Who
              <br />
              <span className="italic text-[#C6A15B]">Value</span> Their
              <br />
              Financial Future
            </h2>

            {/* Navigation */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={prev}
                className="w-11 h-11 border border-[#E8E4DC] flex items-center justify-center text-[#0B1F3A] hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-[#0B1F3A] bg-[#0B1F3A] flex items-center justify-center text-white hover:bg-[#C6A15B] hover:border-[#C6A15B] transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 h-1 ${
                    i === active ? "w-6 bg-[#C6A15B]" : "w-3 bg-[#E8E4DC]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial card */}
          <div className="flex-1">
            <div className="bg-white border border-[#E8E4DC] p-10 relative">
              {/* Quote icon */}
              <Quote size={36} className="text-[#C6A15B]/30 absolute top-8 right-8" />

              <p
                className="text-lg text-[#0B1F3A] leading-relaxed mb-10"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0B1F3A] flex items-center justify-center text-[#C6A15B] font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#0B1F3A] text-sm">{t.name}</div>
                  <div className="text-xs text-[#4A5568]">
                    {t.title} · {t.location}
                  </div>
                </div>
              </div>

              {/* Gold bottom bar */}
             {/* Gold bottom bar */}
<motion.div
  className="absolute bottom-0 left-0 h-0.5 bg-[#C6A15B]"
  animate={{
    width: `${((active + 1) / testimonials.length) * 100}%`,
  }}
  transition={{
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
  }}
/>
            </div>

            {/* All testimonials preview row */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`p-3 text-left border transition-all duration-300 ${
                    i === active
                      ? "border-[#C6A15B] bg-[#f5edd9]"
                      : "border-[#E8E4DC] bg-white hover:border-[#C6A15B]/50"
                  }`}
                >
                  <div className="text-[0.65rem] font-bold text-[#0B1F3A] truncate">
                    {item.name}
                  </div>
                  <div className="text-[0.6rem] text-[#4A5568] truncate">
                    {item.location}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
