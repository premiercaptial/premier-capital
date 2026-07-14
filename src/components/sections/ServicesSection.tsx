"use client";

import {
  TrendingUp, BarChart2, Home, Shield,
  Building2, Briefcase, ArrowUpRight, PieChart,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Wealth Management",
    href: "/services/wealth-management",
    description:
      "Structured wealth planning built around your life goals, risk appetite, and financial stage. We help you grow, protect, and transfer wealth with clarity and purpose.",
    highlight: true,
  },
  {
    icon: PieChart,
    title: "Stock Picks",
    href: "/services/stock-picks",
    description:
      "Institutional-grade equity research and curated stock recommendations backed by Motilal Oswal Financial Services.",
    highlight: false,
  },
  {
    icon: BarChart2,
    title: "Investment Solutions",
    href: "/services/Investment-Solutions",
    description:
      "Data-driven guidance across equities, bonds, real estate, and alternative assets. Portfolios grounded in research — not noise — managed with discipline across market cycles.",
    highlight: false,
  },
  {
    icon: Home,
    title: "Loans Against Property / LRD",
    href: "/services/loans-against-property",
    description:
      "Unlock the value in your property or rental income with structured financing solutions. Competitive terms across leading banks and NBFCs.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Insurance Planning",
    href: "/services/insurance-planning",
    description:
      "Comprehensive protection planning across life, health, and general insurance. We build cover that genuinely protects what matters.",
    highlight: false,
  },
  
  {
    icon: Briefcase,
    title: "Business Loans & Working Capital",
    href: "/services/business-loans-working-capital",
    description:
      "Flexible credit solutions for SMEs and growing businesses with the right lender and structure.",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Construction Finance",
    href: "/services/construction-finance",
    description:
      "Structured financing for real estate developers and construction projects through our lender network.",
    highlight: false,
  },
];

export default function ServicesSection() {
   console.log("SERVICES SECTION RENDERED");
  return (
    <section id="services" className="bg-white section-pad scroll-mt-[90px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow mb-4">Our Services</div>

          <h2
            className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-tight mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            A Complete Suite of
            <br />
            <span className="italic text-[#C6A15B]">
              Financial Solutions
            </span>
          </h2>

          <p className="text-[#4A5568] text-sm leading-relaxed">
            Whether you're building wealth, protecting assets, or scaling your business,
            our expertise spans every dimension of your financial life.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {services.map((service) => {
            const Icon = service.icon;
            const isHighlight = service.highlight;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={
                  isHighlight
                    ? {}
                    : {
                        y: -6,
                        boxShadow: "0 18px 50px rgba(11,31,58,0.10)",
                        borderColor: "rgba(198,161,91,0.6)",
                      }
                }
                className={`group relative p-7 border transition-all duration-300 ${
                  isHighlight
                    ? "bg-[#0B1F3A] border-[#0B1F3A] text-white"
                    : "bg-white border-[#E8E4DC]"
                }`}
              >
                {/* ICON */}
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 ${
                    isHighlight
                      ? "bg-[#C6A15B]/20"
                      : "bg-[#f5edd9] group-hover:bg-[#C6A15B]/20"
                  }`}
                >
                  <Icon size={18} className="text-[#C6A15B]" />
                </div>

                {/* TITLE */}
                <h3
                  className={`text-sm font-bold mb-3 ${
                    isHighlight ? "text-white" : "text-[#0B1F3A]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-[13px] leading-relaxed mb-6 ${
                    isHighlight ? "text-white/70" : "text-[#4A5568]"
                  }`}
                >
                  {service.description}
                </p>

                {/* LINK */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 group/link"
                >
                  <span className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#C6A45D] group-hover/link:underline">
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={11}
                    className="text-[#C6A45D] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#f5edd9] border border-[#C6A45D]/30 p-7 flex flex-col justify-between"
          >
            <div>
              <div className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#C6A45D] mb-4">
                Not sure where to start?
              </div>

              <p className="text-sm font-medium text-[#0B1F3A] leading-relaxed">
                Let us understand your financial situation and guide you to the right solution.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center px-5 py-3 bg-[#0B1F3A] text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#C6A45D] transition-all duration-300"
            >
              Book a Free Call
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}