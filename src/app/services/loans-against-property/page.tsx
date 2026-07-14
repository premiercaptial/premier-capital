import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Home } from "lucide-react";

export const metadata = {
  title: "Loans Against Property & Lease Rental Discount | Premier Capital",
  description: "Unlock the value in your property or rental income with structured LAP and LRD financing. Competitive terms across leading banks and NBFCs.",
};

export default function LoansAgainstPropertyPage() {
  return (
    <ServicePageLayout data={{
      title: "Loans Against Property / Lease Rental Discount",
      tagline: "Unlock the value in your property or rental income with structured financing solutions.",
      heroDescription: "Whether you hold commercial or residential property, or generate rental income from leased assets, we structure LAP and LRD facilities that release capital at competitive terms — without disrupting ownership.",
      icon: <Home size={26} className="text-[#C6A15B]" />,
      cta: {
  label: "Get Loan",
  href: "/apply-loan",
},
      problem: {
        heading: "Significant capital sits locked in property — unused.",
        body: "Property owners and landlords often hold substantial asset value or steady rental income streams, but accessing that capital for business growth, investment, or personal needs requires navigating complex lender criteria, documentation requirements, and valuation processes. Most people either don't know what's available or receive unfavourable terms through direct bank approaches.",
      },
      solution: {
        heading: "We structure LAP and LRD facilities at optimal terms.",
        body: "Premier Capital works with your specific property profile and financial situation to design the right facility structure — LAP for capital requirements, LRD for monetising rental income — and sources competitive terms from our network of 20+ banks and NBFCs. We negotiate on your behalf and manage the process end to end.",
      },
      benefits: [
        { title: "LAP Expertise", description: "Loan Against Property structures for residential, commercial, or industrial assets — with LTV ratios and pricing tailored to your property type and creditworthiness." },
        { title: "LRD Structuring", description: "Lease Rental Discount facilities that allow you to monetise future rental income streams at attractive rates, without selling or vacating the asset." },
        { title: "Competitive Rate Sourcing", description: "Access to 20+ lenders means we find the most competitive rate and terms for your specific asset profile — not just your primary banker's offering." },
        { title: "High LTV Navigation", description: "We know which lenders approve higher loan-to-value ratios for specific property types, and how to present your case to maximise the facility size." },
        { title: "End-to-End Processing", description: "From property valuation coordination and legal title review to application, negotiation, and disbursement — we manage the entire process." },
        { title: "Balance Transfer Support", description: "If you have an existing LAP at a higher rate, we evaluate whether refinancing makes financial sense and manage the switch." },
      ],
      process: [
        { step: "01", title: "Property & Profile Assessment", description: "We assess your property, existing obligations, credit profile, and capital requirement to map the right facility type and lender shortlist." },
        { step: "02", title: "Lender Matching & Negotiation", description: "We approach the most suitable lenders, negotiate rate and structure, and present you with a clear comparison of the best options available." },
        { step: "03", title: "Documentation to Disbursement", description: "We manage all documentation — legal, valuation, financial — and track the file from sanction through to final disbursement." },
      ],
      trust: {
        heading: "Transparent. Compliant. Client-First.",
        points: [
          "We disclose all lender relationships and compensation arrangements upfront before you engage.",
          "All facilities are arranged in full compliance with RBI guidelines and applicable banking regulations.",
          "Legal and valuation processes are conducted through empanelled professionals — we do not cut corners on due diligence.",
          "We give you honest feedback on your property's financing potential before you invest time in an application.",
        ],
      },
      faqs: [
        { question: "What types of property qualify for LAP?", answer: "Residential, commercial, and industrial properties typically qualify. The LTV ratio and rate will vary based on property type, location, and your creditworthiness. Self-occupied residential properties typically attract the most competitive terms." },
        { question: "What is Lease Rental Discounting (LRD)?", answer: "LRD is a facility where a lender advances funds against future rental receivables from a leased property. The loan is repaid from rental income as it comes in. It's particularly useful for owners of commercial properties with strong, creditworthy tenants." },
        { question: "What LTV can I expect on a LAP?", answer: "Typically between 50–75% of the property's market value, depending on the lender, property type, and borrower profile. We work to maximise this within the bounds of what different lenders will approve for your specific situation." },
        { question: "How long does the process take?", answer: "A typical LAP takes 3–5 weeks from application to disbursement. LRD facilities can be faster if the lease documentation is clean. We provide realistic timelines based on your specific lender and property." },
        { question: "Can I use LAP proceeds for business purposes?", answer: "Yes — LAP proceeds can typically be used for business expansion, working capital, debt consolidation, or other legitimate business or personal requirements. The lender may ask for the end-use purpose at the application stage." },
      ],
      relatedServices: [
        { title: "Business Loans & Working Capital", href: "/services/business-loans-working-capital" },
        { title: "Construction Finance", href: "/services/construction-finance" },
        { title: "Wealth Management", href: "/services/wealth-management" },
      ],
    }} />
  );
}
