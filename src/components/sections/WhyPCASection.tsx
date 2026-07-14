import { CheckCircle2, ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Independent & Conflict-Free Advice",
    description:
      "We are not tied to any single product manufacturer. Our recommendations are purely driven by what's best for you.",
  },
  {
    title: "Holistic Financial Planning",
    description:
      "We look at your complete financial picture — investments, insurance, loans, and taxes — to create a unified strategy.",
  },
  {
    title: "Proven Track Record",
    description:
      "20 years of navigating market cycles, helping clients grow and protect wealth through volatility and opportunity alike.",
  },
  {
    title: "NRI-Friendly Advisory",
    description:
      "Specialized expertise in cross-border financial planning, repatriation, FEMA compliance, and India-linked investments.",
  },
  {
    title: "Transparent Fee Structure",
    description:
      "Clear, straightforward fees with no hidden charges. You always know exactly what you're paying and what you're getting.",
  },
  {
    title: "Ongoing Support & Reviews",
    description:
      "Our relationship doesn't end at onboarding. Regular portfolio reviews and proactive rebalancing keep your plan current.",
  },
];

export default function WhyPCASection() {
  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-32">
            <div className="eyebrow mb-5">Why Premier Capital </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-tight mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Advisor You've
              <br />
              Always Needed,{" "}
              <span className="italic text-[#C6A15B]">Finally</span>
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed max-w-sm mb-10">
              Many financial advisors sell products. We build futures. Here's
              what sets Premier Capital  apart from the rest.
            </p>

            {/* Large visual stat */}
            <div className="bg-[#0B1F3A] p-8 max-w-xs">
              <div
                className="text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                97%
              </div>
              <div className="text-sm text-white/60 leading-relaxed mb-5">
                of our clients choose to continue and expand their relationship
                with us after Year 1.
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#C6A15B] text-xs font-semibold tracking-widest uppercase group"
              >
                Start Your Journey
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right: reasons list */}
          <div className="space-y-0 divide-y divide-[#E8E4DC]">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="py-7 group flex gap-5 items-start hover:pl-2 transition-all duration-300"
              >
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2
                    size={18}
                    className="text-[#C6A15B] group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                <div className="ml-auto pl-4 shrink-0">
                  <span className="text-[0.6rem] font-bold text-[#E8E4DC] group-hover:text-[#C6A15B] transition-colors duration-300 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
