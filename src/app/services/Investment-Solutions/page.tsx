import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BarChart2 } from "lucide-react";

export const metadata = {
  title: "Investment Solutions | Premier Capital",
  description: "Data-driven guidance across equities, bonds, real estate, and alternative assets. Portfolios grounded in research, managed with discipline across market cycles.",
};

export default function InvestmentSolutionPage() {
  return (
    <ServicePageLayout data={{
      title: "Investment Solutions",
      tagline: "Data-driven guidance across equities, bonds, real estate, and alternative assets.",
      heroDescription: "Portfolios grounded in research — not noise — managed with discipline across market cycles. We help you invest with conviction, structure, and a clear understanding of what you own and why.",
      icon: <BarChart2 size={26} className="text-[#C6A15B]" />,
      problem: {
        heading: "Most investors make decisions driven by noise, not strategy.",
        body: "Tips from social media, reactive moves during market swings, and products sold by incentivised agents — this is how most people invest. The result is a fragmented portfolio with no coherent logic, unclear risk exposure, and returns that consistently underperform even simple benchmarks.",
      },
      solution: {
        heading: "We build portfolios grounded in research and long-term thinking.",
        body: "Every position in your portfolio has a reason — a thesis, a valuation context, and a defined role. We construct across asset classes, monitor continuously, and act when the data demands it — not when the market panics. Discipline replaces impulse.",
      },
      benefits: [
        { title: "Research-Backed Decisions", description: "Every recommendation is grounded in rigorous analysis — macro conditions, sector outlook, individual asset quality, and valuation." },
        { title: "Multi-Asset Construction", description: "We invest across equities, bonds, REITs, gold, and alternatives to build portfolios that don't depend on any single market's performance." },
        { title: "Active Monitoring", description: "We track your portfolio continuously and act when the data demands it — without emotional bias or short-term market noise." },
        { title: "Unbiased Guidance", description: "Our recommendations are not driven by commissions. We advise on what is right for your portfolio, not what earns us the highest margin." },
        { title: "Downside Protection", description: "We structure portfolios with explicit attention to downside risk — not just upside potential. Preservation is as important as growth." },
        { title: "Transparent Reporting", description: "Clear, regular performance reporting with no jargon — so you always know exactly how your investments are performing and why." },
      ],
      process: [
        { step: "01", title: "Investment Profile", description: "We establish your horizon, risk tolerance, liquidity requirements, and return expectations before recommending anything." },
        { step: "02", title: "Portfolio Design & Selection", description: "We construct a diversified portfolio across asset classes and geographies, selecting specific instruments based on quality and fit." },
        { step: "03", title: "Ongoing Management", description: "We review performance against benchmarks quarterly, rebalance on drift, and communicate proactively on material developments." },
      ],
      trust: {
        heading: "Structured. Transparent. Accountable.",
        points: [
          "All investment recommendations are accompanied by a documented rationale — you always know why we are recommending what we recommend.",
          "We operate within applicable regulatory frameworks and maintain clear records of all advice provided.",
          "We do not receive hidden commissions on the instruments we recommend in our advisory mandates — our incentives align with your outcomes.",
          "Complete portfolio transparency at all times — every position, its value, and its contribution to your overall portfolio is visible to you.",
        ],
      },
      faqs: [
        { question: "Do you manage investments directly or just advise?", answer: "We offer both models — structured advisory where you make final decisions, or a discretionary arrangement where we manage within agreed parameters on your behalf." },
        { question: "What is the minimum investment?", answer: "We typically work with clients who have a minimum of ₹10 lakhs to invest. For systematic investors starting smaller, we'll advise on the right approach for your stage." },
        { question: "How do you handle market downturns?", answer: "We assess whether the original thesis for each position holds, avoid panic selling, and where appropriate, use downturns as opportunities to add to quality positions at better valuations." },
        { question: "Can I see exactly what I'm invested in?", answer: "Yes — complete transparency is non-negotiable. You have full visibility into every position, current value, and portfolio contribution at any time." },
        { question: "How is performance measured?", answer: "We benchmark your portfolio against appropriate indices based on your asset allocation — not against cherry-picked comparisons. We share this in every review." },
      ],
      relatedServices: [
        { title: "Wealth Management", href: "/services/wealth-management" },
        { title: "Stock Picks", href: "/services/stock-picks" },
        { title: "Business Loans & Working Capital", href: "/services/business-loans-working-capital" },
      ],
    }} />
  );
}
