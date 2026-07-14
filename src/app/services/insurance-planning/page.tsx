import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Insurance Planning | Premier Capital",
  description: "Comprehensive protection planning across life, health, and general insurance. We assess your actual risk exposure and build a cover structure that genuinely protects what matters.",
};

export default function InsurancePlanningPage() {
  return (
    <ServicePageLayout data={{
      title: "Insurance Planning",
      tagline: "Comprehensive protection planning across life, health, and general insurance.",
      heroDescription: "We assess your actual risk exposure — not a generic formula — and build a protection structure that genuinely covers what matters. The right cover, at the right cost, held the right way.",
      icon: <Shield size={26} className="text-[#C6A15B]" />,
      problem: {
        heading: "Most people are either over-insured, under-insured, or both.",
        body: "Insurance is rarely planned — it's sold. The result is policies purchased under pressure, bundled with investment products that underperform, held in amounts disconnected from actual need, and never reviewed after the first year. When a claim is needed, the gaps become apparent at the worst possible moment.",
      },
      solution: {
        heading: "We build a protection structure based on your actual exposure.",
        body: "Premier Capital calculates your genuine insurance requirement — accounting for outstanding liabilities, income replacement, dependant needs, and existing cover — and recommends the right products from the right insurers at the most efficient cost. We review this regularly as your life changes.",
      },
      benefits: [
        { title: "Needs-Based Assessment", description: "We calculate your actual insurance requirement based on your specific liabilities, income, dependants, and goals — not a generic multiple." },
        { title: "Unbiased Product Selection", description: "We compare products across insurers on cover, premium, claim settlement ratio, policy terms, and long-term reliability — not commission." },
        { title: "Term vs. Investment Clarity", description: "We give you an honest view of when pure term cover outperforms bundled products — and vice versa — based on your specific situation." },
        { title: "Health Cover Review", description: "We assess your employer and personal health cover for gaps — portability, adequacy, and what happens when your employment changes." },
        { title: "Claims Support", description: "When you need to make a claim, we guide you through the process — documentation, timelines, and follow-up — so you're not navigating it alone." },
        { title: "Annual Review", description: "Your insurance needs change with your life. We review your cover after every major event and annually as a minimum." },
      ],
      process: [
        { step: "01", title: "Risk & Gap Assessment", description: "We map your liabilities, income, dependants, and existing cover to identify exactly where you are exposed and by how much." },
        { step: "02", title: "Cover Design & Comparison", description: "We recommend the right type, quantum, and structure of cover — and compare specific products across leading insurers." },
        { step: "03", title: "Onboarding & Review", description: "We assist with application, medical disclosures, and policy issuance — then review annually and after significant life events." },
      ],
      trust: {
        heading: "Independent. Transparent. Thorough.",
        points: [
          "We are not tied to any single insurer — our recommendations are based on what's best for you, not what earns the highest commission.",
          "All insurance recommendations are accompanied by a clear explanation of what the policy covers and — critically — what it doesn't.",
          "We maintain full documentation of every recommendation and its rationale, so you have a clear record of why each policy was chosen.",
          "We operate in compliance with IRDAI regulations and maintain all required registrations and disclosures.",
        ],
      },
      faqs: [
        { question: "How much life insurance do I actually need?", answer: "This depends on your outstanding liabilities, future income replacement needs, dependants' requirements, and existing assets. We calculate this precisely — the answer is almost always different from a generic 10x income multiple." },
        { question: "Should I buy a term plan or a ULIP?", answer: "For most people, a pure term plan combined with separate investments delivers better outcomes than a bundled product. However, we advise based on your specific situation — not a blanket rule." },
        { question: "My employer provides health insurance — do I need personal cover?", answer: "Yes, in most cases. Employer cover lapses when you change jobs or retire — often when you need it most. Personal health cover is portable and should form the foundation of your health protection, independent of your employment." },
        { question: "Can you review my existing policies?", answer: "Absolutely. We review existing policies in detail, identify overlaps and gaps, and recommend whether to retain, restructure, or replace individual covers. Most clients find they are misaligned in at least one area." },
        { question: "What is critical illness cover and do I need it?", answer: "Critical illness cover pays a lump sum on diagnosis of specified serious conditions — cancer, heart attack, stroke — regardless of your treatment cost. For high-income earners with significant financial obligations, it is an important layer of protection beyond standard health insurance." },
      ],
      relatedServices: [
        { title: "Wealth Management", href: "/services/wealth-management" },
        { title: "Investment Solutions", href: "/services/Investment solutions" },
        { title: "Loans Against Property", href: "/services/loans-against-property" },
      ],
    }} />
  );
}
