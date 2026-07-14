import ServicePageLayout from "@/components/services/ServicePageLayout";
import { TrendingUp } from "lucide-react";

export const metadata = {
  title: "Stock Picks Powered by Motilal Oswal | Premier Capital",
  description: "Access institutional-grade equity research and curated stock recommendations backed by Motilal Oswal Financial Services, delivered through Premier Capital's personalised service.",
};

export default function StockPicksPage() {
  return (
    <ServicePageLayout data={{
      title: "Stock Picks",
      tagline: "Institutional-grade equity research and curated stock recommendations — powered by Motilal Oswal Financial Services.",
      heroDescription: "Access the research depth of one of India's most respected equity franchises, delivered through Premier Capital's personalised client service. Curated recommendations, clear rationale, and ongoing position monitoring.",
      icon: <TrendingUp size={26} className="text-[#C6A15B]" />,
      problem: {
        heading: "Retail investors lack access to institutional-quality research.",
        body: "Most individual investors make equity decisions based on tips, social media, or brokerage calls with no depth of analysis behind them. The result is poor entry points, no exit discipline, and portfolios driven by emotion rather than fundamentals. Access to the quality of research available to institutional investors has historically been out of reach for individual clients.",
      },
      solution: {
        heading: "Motilal Oswal research. Premier Capital service.",
        body: "Through our partnership with Motilal Oswal Financial Services — one of India's foremost equity research houses — Premier Capital clients access curated stock recommendations backed by deep fundamental research. We translate institutional analysis into clear, actionable guidance delivered with the personal attention of a dedicated relationship.",
      },
      benefits: [
        { title: "Institutional Research Access", description: "Motilal Oswal's equity research team covers 250+ companies across sectors, providing depth of analysis that most retail investors cannot access independently." },
        { title: "Curated Recommendations", description: "Not every research call is relevant to every client. We curate recommendations based on your portfolio, risk profile, and investment horizon." },
        { title: "Entry & Exit Discipline", description: "Clear buy, hold, and sell levels backed by fundamental analysis — removing emotion from the most critical investment decisions." },
        { title: "Sector & Thematic Insight", description: "Access to sector-level research and thematic calls — identifying structural opportunities before they become consensus trades." },
        { title: "Position Monitoring", description: "We track open positions continuously and alert you to material developments that affect the thesis behind each recommendation." },
        { title: "Portfolio Integration", description: "Stock picks are integrated into your broader investment portfolio — ensuring concentration, sector exposure, and overall risk are managed coherently." },
      ],
      process: [
        { step: "01", title: "Portfolio & Profile Review", description: "We review your existing equity holdings, risk tolerance, and investment horizon to determine how stock picks fit into your overall strategy." },
        { step: "02", title: "Curated Recommendation Delivery", description: "We share relevant stock recommendations from Motilal Oswal's research universe, with a clear rationale, target, and stop-loss for each." },
        { step: "03", title: "Ongoing Monitoring & Updates", description: "We track positions, communicate material developments, and advise on exits — so you're never holding a position without current context." },
      ],
      trust: {
        heading: "Backed by Research. Delivered with Accountability.",
        points: [
          "All stock recommendations are backed by published research from Motilal Oswal Financial Services — one of SEBI's registered research entities.",
          "We maintain full transparency on the research source, analyst conviction, and any conflicts of interest associated with each recommendation.",
          "Past performance of research recommendations is available for review — we do not selectively present only winning calls.",
          "All equity transactions are executed through SEBI-registered brokers with full audit trails and contract notes.",
        ],
        partner: "Powered by Motilal Oswal Financial Services Ltd. — one of India's leading equity research and broking firms with over three decades of market expertise and a research universe spanning 250+ companies across sectors.",
      },
      faqs: [
        { question: "How many stock picks will I receive?", answer: "The frequency depends on market conditions and available high-conviction opportunities. Quality over quantity is our principle — we would rather recommend three well-researched ideas per month than fifteen marginal ones." },
        { question: "Is this suitable for long-term investors or traders?", answer: "Primarily long-term investors with a 12–36 month horizon on most recommendations, though some tactical calls with shorter timeframes are included. We are not a trading tip service." },
        { question: "What research does Motilal Oswal provide?", answer: "Motilal Oswal's research team produces detailed company reports, sector analyses, quarterly earnings reviews, and thematic research — covering both large-cap and select mid-cap companies across all major sectors." },
        { question: "Do I have to act on every recommendation?", answer: "No. Each recommendation is presented with full context. You and your advisor decide together which positions are appropriate for your portfolio based on your current exposure and risk parameters." },
        { question: "How is performance tracked?", answer: "We maintain a transparent record of all recommendations — entry point, target, stop-loss, and outcome. This is reviewed with you periodically so you have a clear picture of recommendation quality over time." },
      ],
      relatedServices: [
        { title: "Investment Solutions", href: "/services/Investment-Solutions" },
        { title: "Wealth Management", href: "/services/wealth-management" },
        { title: "Insurance Planning", href: "/services/insurance-planning" },
      ],
    }} />
  );
}
