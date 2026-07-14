"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Users, TrendingUp } from "lucide-react";


// import Image from "next/image"; // Uncomment when you have the founder photo

const credentials = [
  {
    icon: Award,
    text: "20+ Years in Financial Advisory",
  },
  {
    icon: Users,
    text: "Served 500+ HNI & Retail Clients",
  },
  {
    icon: TrendingUp,
    text: "₹1000Cr+ in Assets Guided",
  },
];

const stats = [
  {
    number: "20",
    label: "Years",
  },
  {
    number: "500+",
    label: "Clients",
  },
  {
    number: "₹1000Cr+",
    label: "Guided",
  },
];

const badges = [
  "Investment ",
  "Loan ",
  "Wealth",
];

function FounderPortrait() {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  const active = hovered || tapped;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchEnd={() => setTapped((v) => !v)}
      animate={{
        scale: active ? 1.02 : 1,
      }}
      transition={{
        duration: 0.45,
      }}
      className="group relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-sm bg-[#0B1F3A] shadow-2xl cursor-pointer"
    >
      {/* Replace with Image later */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-5 h-28 w-28 rounded-full bg-white/10" />
          <div className="h-44 w-52 rounded-t-full bg-white/10" />
        </div>
      </div>

      {/* Luxury Shine */}

      <motion.div
        animate={{
          x: active ? "170%" : "-170%",
        }}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.12) 50%, transparent 65%)",
        }}
      />

      {/* Bottom Label */}

      <AnimatePresence>

        {!active && (

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/60 to-transparent p-7"
          >
            <p className="eyebrow mb-2">
              Founder 
            </p>

            <h3
              className="text-2xl font-bold text-white"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Dilawar Dawoodani
            </h3>

          </motion.div>

        )}

      </AnimatePresence>

      {/* Premium Bottom Card */}

      <AnimatePresence>

        {active && (

          <motion.div
            initial={{
              y: 120,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 120,
              opacity: 0,
            }}
            transition={{
              duration: .45,
            }}
            className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-[#0B1F3A]/75 border-t border-[#C6A15B]/30 p-6"
          >

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .08 }}
              className="text-white text-xl font-bold"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Dilawar Dawoodani
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .14 }}
              className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#C6A15B]"
            >
              Founder & Principal Consultant
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .2 }}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {stats.map((item) => (

                <div
                  key={item.label}
                  className="text-center"
                >

                  <p className="text-lg font-bold text-white">
                    {item.number}
                  </p>

                  <p className="text-[10px] uppercase tracking-wider text-white/60">
                    {item.label}
                  </p>

                </div>

              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {badges.map((badge, index) => (

                <motion.span
                  key={badge}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: .35 + index * .08,
                  }}
                  className="rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 px-3 py-1 text-[10px] font-medium text-[#E5C98B]"
                >
                  {badge}
                </motion.span>

              ))}
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .55,
              }}
              className="mt-6 border-t border-white/10 pt-5 text-center"
            >

              <p
                className="text-[13px] italic leading-relaxed text-white/80"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                "Every financial decision deserves
                clarity, confidence and trust."
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#C6A15B]">
                Client First • Always
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}
export default function FounderSection() {
  return (
    <section
  id="about"
  className="scroll-mt-24 bg-[#FAFAF8] py-28 lg:py-36"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <FounderPortrait />

            {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="absolute -right-6 top-12 hidden w-56 border-t-2 border-[#C6A15B] bg-white p-6 shadow-2xl lg:block"
            >
              <div className="text-4xl font-bold text-[#0B1F3A]">
                20+
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Years of helping individuals,
                entrepreneurs and families make
                smarter financial decisions.
              </p>
            </motion.div>

            <div className="absolute -bottom-6 -left-6 hidden h-36 w-36 bg-[#C6A15B]/10 lg:block" />

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
              About Premier Capital
            </p>

            <h2
              className="text-4xl font-bold leading-tight text-[#0B1F3A] lg:text-5xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Built on Trust,
              <br />

              <span className="italic text-[#C6A15B]">
                 Delivered with Excellence.
              </span>

            </h2>

            <div className="mt-10 space-y-6 text-[15px] leading-8 text-slate-600">

              <p>
                
At Premier Capital Advisor, we believe great financial relationships begin with trust and are strengthened through consistent execution.
              </p>

              <p>
                For over 20 years, Dilawar Dawoodani has helped entrepreneurs, professionals, families, and investors make informed financial decisions with confidence. Our approach combines personalized financial planning, wealth creation, wealth protection, investment solutions, and capital access to support every stage of your financial journey.
              </p>

              <p>
                From Mutual Funds, PMS, AIF, Bonds,  Wealth Management, Retirement Planning, and Insurance Solutions to Home Loans, Business Finance, Working Capital Solutions, Loan Against Property, and Loan Against Securities, every solution is carefully aligned with your goals and delivered with precision.

We don't believe in one-size-fits-all recommendations. We believe in understanding your priorities, building lasting relationships, and ensuring every step—from planning to execution—is handled with care, transparency, and professionalism.

Because trust is earned through every conversation, and strengthened through every commitment we deliver.
              </p>

            </div>

            {/* Credentials */}

            <div className="mt-12 space-y-5">

              {credentials.map(({ icon: Icon, text }, index) => (

                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * .15,
                    duration: .45,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EDD9]">

                    <Icon
                      size={18}
                      className="text-[#C6A15B]"
                    />

                  </div>

                  <span className="font-medium text-[#0B1F3A]">
                    {text}
                  </span>

                </motion.div>

              ))}

            </div>

            {/* Quote */}

            <div className="mt-12 border-l-4 border-[#C6A15B] pl-6">

              <p
                className="text-xl italic leading-9 text-[#0B1F3A]"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                “Our responsibility isn't just to help
                clients grow wealth —
                it's to help them make better financial
                decisions with complete confidence.”
              </p>

            </div>

            {/* Signature */}

            <div className="mt-12 border-t border-[#E5E5E5] pt-8">

              <h3
                className="text-xl font-bold text-[#0B1F3A]"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                Dilawar Dawoodani
              </h3>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
                Founder
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}