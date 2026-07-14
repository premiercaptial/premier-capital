"use client";

import { motion, Variants } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "20+ Years Experience",
    description:
      "Over a decade and a half of guiding high-net-worth individuals and businesses through complex financial landscapes with proven expertise.",
  },
  {
    number: "02",
    title: "Personalized Strategies",
    description:
      "No two clients are alike. Every financial plan is crafted around your unique circumstances, risk appetite, and long-term aspirations.",
  },
  {
    number: "03",
    title: "End-to-End Solutions",
    description:
      "From Wealth Creation, Protection to Capital Access and Business Finance—a complete financial ecosystem, all in one place.",
  },
  {
    number: "04",
    title: "Long-Term Relationships",
    description:
      "We measure success by the enduring relationships we build, not just the transactions we complete. Your journey is our commitment.",
  },
];

const cardVariants: Variants = {
  rest: {},
  hover: {},
};

const lineVariants: Variants = {
  rest: {
    width: 40,
  },
  hover: {
    width: 220,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function TrustSection() {
  return (
    <section className="bg-[#FAFAF8] section-pad border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="eyebrow mb-4">Why Clients Choose Us</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The partnership of
              <br />
              <span className="italic text-[#C6A15B]">Trusted</span> Advisory
            </h2>
          </div>

          <p className="text-[#4A5568] max-w-sm text-sm leading-relaxed lg:text-right">
            Premier Capital has been a trusted partner for families,
            entrepreneurs, and corporates seeking clarity in their financial decisions.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E4DC]">

          {pillars.map((p) => (
            <motion.div
              key={p.number}
              className="bg-white p-8 group hover:bg-[#0B1F3A] transition-all duration-500"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
            >
              <div className="text-[0.65rem] font-bold tracking-[0.25em] text-[#C6A15B] mb-6">
                {p.number}
              </div>

              <h3 className="text-base font-bold text-[#0B1F3A] group-hover:text-white mb-4 transition-colors duration-500">
                {p.title}
              </h3>

              <p className="text-sm text-[#4A5568] group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                {p.description}
              </p>

              {/* Gold line — inherits rest/hover state from parent variants */}
              <motion.div
                className="mt-8 h-[2px] bg-[#C6A15B]"
                variants={lineVariants}
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}