import ServicePageLayout from "@/components/services/ServicePageLayout";
import { TrendingUp } from "lucide-react";

export const metadata = {
  title: "Wealth Management | Premier Capital",
  description: "Structured wealth planning built around your life goals, risk appetite, and financial stage. Grow, protect, and transfer wealth with clarity and purpose.",
};

export default function WealthManagementPage() {
  return (
    <ServicePageLayout data={{
      title: "Wealth Management",
      tagline: "Structured wealth planning built around your life goals, risk appetite, and financial stage.",
      heroDescription: "We help you grow, protect, and transfer wealth with clarity and purpose — combining disciplined investment strategy, tax efficiency, and long-term financial planning into one coherent plan.",
      icon: <TrendingUp size={26} className="text-[#C6A15B]" />,
      problem: {
        heading: "Most people accumulate wealth without a plan.",
        body: "Savings sit in underperforming instruments. Investments are made reactively. Insurance is inadequate. Tax is paid without optimisation. The result is wealth that grows far slower than it should — or worse, erodes quietly over time without the owner realising it.",
      },
      solution: {
        heading: "We build a single, coordinated wealth strategy.",
        body: "Premier Capital takes a holistic view of your financial life — assets, liabilities, income, goals, and protection needs — and builds a strategy where every element works together. No silos. No conflicting products. One coherent plan reviewed regularly as your life evolves.",
      },
      benefits: [
        { title: "Goal-Based Architecture", description: "Every investment, policy, and savings vehicle is mapped to a specific financial goal — retirement, education, legacy — with a clear target and timeline." },
        { title: "Risk-Aligned Portfolios", description: "Your portfolio reflects your actual risk tolerance, not a generic category. We revisit and recalibrate as your circumstances and markets evolve." },
        { title: "Tax Efficiency", description: "We structure your wealth to minimise unnecessary tax drag across investments, income streams, and intergenerational transfer." },
        { title: "Holistic Financial View", description: "We look at your entire financial picture — not just investments — to ensure your protection, credit, and growth strategies reinforce each other." },
        { title: "Ongoing Review", description: "Markets and life both change. We review your portfolio regularly and rebalance when your strategy drifts from its targets." },
        { title: "Single Point of Accountability", description: "One dedicated professional who knows your full financial life — no hand-offs, no confusion, no conflicting advice from different quarters." },
      ],
      process: [
        { step: "01", title: "Discovery & Goal Mapping", description: "We begin with a detailed conversation covering your current position, goals, timeline, risk appetite, and existing financial commitments." },
        { step: "02", title: "Strategy & Plan", description: "We design a personalised wealth plan covering asset allocation, investment selection, tax structuring, protection gaps, and priority sequencing." },
        { step: "03", title: "Implementation & Review", description: "We execute the plan alongside you and conduct regular reviews — rebalancing, optimising, and adapting as your life and markets change." },
      ],
      trust: {
        heading: "Professional. Transparent. Accountable.",
        points: [
          "All recommendations are made in your interest — we disclose our compensation structure before you commit to anything.",
          "We operate within a regulated framework and maintain full documentation of every recommendation and its rationale.",
          "Your financial information is handled with strict confidentiality and never shared without your explicit consent.",
          "We do not sell products. We build strategies — and recommend instruments only when they serve the strategy.",
        ],
      },
      faqs: [
        { question: "How much do I need to start wealth management?", answer: "Our structured service is most impactful for those with investable assets above ₹25 lakhs, but we welcome conversations at any stage. If you're earlier in your journey, we'll give you an honest view of where to focus first." },
        { question: "How is Premier Capital compensated?", answer: "We operate on a transparent fee model — either a flat advisory fee or a percentage of assets under advice, depending on the engagement. This is always disclosed upfront before any commitment." },
        { question: "How often will you review my portfolio?", answer: "At minimum every six months. For clients going through significant life changes or with more active portfolios, we meet more frequently. You have direct access to your advisor between scheduled reviews." },
        { question: "Can you work with my existing investments?", answer: "Yes. We audit what you currently hold, retain what makes sense, and restructure what doesn't — building forward from your current position rather than starting from zero." },
        { question: "What if my financial situation changes significantly?", answer: "That's exactly when you should call us. We treat major life events — job change, inheritance, marriage, business exit — as triggers for a full plan review, not something to address at the next scheduled meeting." },
      ],
      relatedServices: [
        { title: "Investment Solutions", href: "/services/investment-solutions" },
        { title: "Insurance Planning", href: "/services/insurance-planning" },
        { title: "Stock Picks", href: "/services/stock-picks" },
      ],
    }} />
  );
}
