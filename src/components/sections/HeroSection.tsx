"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";

    const t = setTimeout(() => {
      el.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);

    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-[#0B1F3A]" />

        <div
          className="absolute top-0 bottom-0 bg-[#C6A15B]"
          style={{
            right: "38%",
            width: "80px",
            clipPath: "polygon(100% 0,100% 100%,0 100%,60% 0)",
            opacity: 0.9,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-2 gap-24 items-center min-h-screen">

        {/* LEFT SIDE */}
        <div>

          <div className="eyebrow mb-6">
            Wealth Management · Est. 2015
          </div>

          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[#0B1F3A] leading-[1.1] tracking-tight mb-7"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Financial Decisions
            <br />
            That Create{" "}
            <span className="italic text-[#C6A15B]">
              Long-Term
            </span>
            <br />
            Wealth
          </h1>

          <p className="text-base md:text-lg text-[#4A5568] leading-relaxed max-w-xl mb-10">
            Personalized wealth management, investment management,
insurance planning and funding services tailored for
individuals, entrepreneurs, NRIs and businesses.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#0B1F3A] text-white text-sm font-semibold tracking-[0.1em] uppercase hover:bg-[#C6A15B] transition-all duration-300 group"
            >
              Book Free Consultation

              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[#0B1F3A] text-[#0B1F3A] text-sm font-semibold tracking-[0.1em] uppercase hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300"
            >
              Explore Services
            </a>

          </div>
                    {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-8 lg:gap-10">

            <div>
              <div
                className="text-3xl font-bold text-[#0B1F3A]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                20+
              </div>
              <div className="text-xs text-[#4A5568] tracking-wide">
                Years of Experience
              </div>
              <div className="text-[11px] text-[#8A8A8A] mt-1">
                Navigating markets since 2015
              </div>
            </div>

            <div className="w-px h-10 bg-[#E8E4DC]" />

            <div>
              <div
                className="text-3xl font-bold text-[#0B1F3A]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                1000+
              </div>
              <div className="text-xs text-[#4A5568] tracking-wide">
                Clients Served
              </div>
              <div className="text-[11px] text-[#8A8A8A] mt-1">
                Across India & globally
              </div>
            </div>

            <div className="w-px h-10 bg-[#E8E4DC]" />

            <div>
              <div
                className="text-3xl font-bold text-[#0B1F3A]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ₹1000Cr+
              </div>
              <div className="text-xs text-[#4A5568] tracking-wide">
                Assets Guided
              </div>
              <div className="text-[11px] text-[#8A8A8A] mt-1">
                Wealth managed
              </div>
            </div>

            <div className="w-px h-10 bg-[#E8E4DC]" />

            <div>
              <div
                className="text-3xl font-bold text-[#0B1F3A]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ₹250Cr+
              </div>
              <div className="text-xs text-[#4A5568] tracking-wide">
                Loans Facilitated
              </div>
              <div className="text-[11px] text-[#8A8A8A] mt-1">
                Home, Business & Corporate
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex justify-center items-start">

          <div className="relative mt-4">

            <div className="w-80 bg-white shadow-2xl p-8 relative z-10 rounded-sm">

              <div className="eyebrow mb-5">
                Your Financial Journey
              </div>

              <div className="space-y-4 mb-6">

                {[
                  {
                    label: "Portfolio Growth",
                    value: "+18.4%",
                    up: true,
                  },
                  {
                    label: "Risk Score",
                    value: "Moderate",
                    up: false,
                  },
                  {
                    label: "Next Review",
                    value: "July 2026",
                    up: false,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-[#E8E4DC] last:border-0"
                  >
                    <span className="text-xs text-[#4A5568] tracking-wide">
                      {item.label}
                    </span>

                    <span
                      className={`text-sm font-semibold ${
                        item.up
                          ? "text-emerald-600"
                          : "text-[#0B1F3A]"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}

              </div>

              <div className="bg-[#0B1F3A] text-white text-xs text-center py-3 tracking-widest uppercase font-medium">
                View Full Report
              </div>

            </div>

            <div className="absolute -bottom-4 -right-4 w-80 h-full bg-[#C6A15B]/20 -z-10 rounded-sm" />
          </div>
      </div>
          </div>

        {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A5568] animate-bounce">
        <span className="text-[0.6rem] tracking-widest uppercase">
          Scroll
        </span>

        <ChevronDown size={16} />
      </div>
                  
    </section>
  );
}