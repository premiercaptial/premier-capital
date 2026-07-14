import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Building2 } from "lucide-react";

export const metadata = {
  title: "Construction Finance | Premier Capital",
  description: "Structured financing for real estate developers and construction projects. We arrange project-level debt, construction loans, and mezzanine funding through our lender network.",
};

export default function ConstructionFinancePage() {
  return (
    <ServicePageLayout data={{
      title: "Construction Finance",
      tagline: "Structured financing for real estate developers and construction projects.",
      heroDescription: "We arrange project-level debt, construction loans, and mezzanine funding through our network of banks, NBFCs, and alternative credit providers — structured to match your project timeline and cash flow requirements.",
      icon: <Building2 size={26} className="text-[#C6A15B]" />,
      problem: {
        heading: "Construction projects stall when the right financing isn't in place at the right time.",
        body: "Real estate developers face a uniquely complex financing challenge — capital requirements are large, timelines are long, cash flows are uneven, and lender appetite varies significantly by project type, location, and developer track record. Approaching lenders without structured preparation results in delays, unfavourable terms, or outright rejections that can derail projects.",
      },
      solution: {
        heading: "We structure and arrange construction financing that fits your project.",
        body: "Premier Capital works with developers from the pre-application stage to design a financing structure suited to your project's specific profile — ticket size, development type, pre-sales position, and timeline. We then approach the right lenders, manage due diligence, and negotiate terms that protect your project economics.",
      },
      benefits: [
        { title: "Project-Specific Structuring", description: "No two construction projects are the same. We design financing structures — senior debt, mezzanine, or a combination — matched to your project's cash flow and risk profile." },
        { title: "Broad Lender Network", description: "Access to banks, housing finance companies, NBFCs, and alternative credit funds with active construction finance mandates — far beyond any single developer's existing relationships." },
        { title: "Competitive Term Negotiation", description: "We run a structured lender approach process that creates competition — resulting in better pricing, higher LTC ratios, and improved covenant terms." },
        { title: "RERA-Compliant Structures", description: "We structure facilities in compliance with RERA requirements, ensuring escrow arrangements and fund utilisation meet regulatory requirements." },
        { title: "Draw-Down Scheduling", description: "Construction facilities require careful draw-down management. We structure repayment and draw-down schedules aligned to your construction milestones." },
        { title: "Mezzanine & Gap Funding", description: "Where senior debt leaves a funding gap, we identify and structure mezzanine or equity-linked solutions to bridge the shortfall." },
      ],
      process: [
        { step: "01", title: "Project Assessment & Structure Design", description: "We review your project — approvals, sales status, cost estimates, timeline, and developer track record — and design the optimal financing structure." },
        { step: "02", title: "Lender Approach & Negotiation", description: "We prepare an information memorandum, approach shortlisted lenders, manage due diligence, and negotiate term sheets on your behalf." },
        { step: "03", title: "Documentation & Drawdown", description: "We manage conditions precedent, coordinate legal and technical due diligence, and ensure the facility is structured for efficient ongoing drawdowns." },
      ],
      trust: {
        heading: "Structured. Compliant. Execution-Focused.",
        points: [
          "All financing arrangements comply with RBI guidelines, NHB regulations, and RERA requirements applicable to the project.",
          "We work with established legal and technical due diligence firms — not shortcuts — to ensure your facility is built on a solid foundation.",
          "Our compensation structure is disclosed upfront in the mandate letter before any work commences.",
          "We provide honest assessments of project bankability before approaching lenders — protecting your time and market relationships.",
        ],
      },
      faqs: [
        { question: "What project sizes do you work with?", answer: "We typically work on construction finance requirements from ₹10 crores upward. For larger projects above ₹200 crores, we work in conjunction with specialised lending and arrangement partners where appropriate." },
        { question: "Do you work with first-time developers?", answer: "Yes, though lender appetite for first-time developers is more limited. Strong pre-sales, clear approvals, and a credible construction partner significantly improve bankability for developers without an established track record." },
        { question: "What is the typical LTC (Loan to Cost) ratio for construction finance?", answer: "Typically 60–75% of project cost, depending on the developer's track record, pre-sales position, project location, and lender. We work to maximise this within what the market will support for your specific project." },
        { question: "How long does it take to arrange construction finance?", answer: "From mandate to first drawdown, a typical construction finance arrangement takes 8–14 weeks. This covers due diligence, documentation, and regulatory requirements. We provide a realistic timeline at the outset of the mandate." },
        { question: "Can you help with refinancing an existing construction facility?", answer: "Yes — if your current facility has unfavourable terms, insufficient availability, or a lender that is no longer supportive of the project, we assess whether refinancing is viable and manage the transition." },
        { question: "What documents are needed to begin?", answer: "Typically: project approvals, land title documents, cost estimates from the project management consultant, sales data, developer financials, and entity KYC. We provide a precise checklist tailored to your project type at the outset." },
      ],
      relatedServices: [
        { title: "Business Loans & Working Capital", href: "/services/business-loans-working-capital" },
        { title: "Loans Against Property", href: "/services/loans-against-property" },
        { title: "Investment Solutions", href: "/services/Investment solutions" },
      ],
    }} />
  );
}
