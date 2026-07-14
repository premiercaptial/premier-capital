import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Briefcase } from "lucide-react";

export const metadata = {
  title: "Business Loans & Working Capital | Premier Capital",
  description: "Flexible credit solutions for SMEs and growing businesses — working capital, term loans, overdraft facilities, and more. Right lender, right terms, end to end.",
};

export default function BusinessLoansPage() {
  return (
    <ServicePageLayout data={{
      title: "Business Loans & Working Capital",
      tagline: "Flexible credit solutions for SMEs and growing businesses — working capital, term loans, overdraft facilities, and more.",
      heroDescription: "We match your specific credit requirement to the right lender and product, negotiate terms on your behalf, and manage the process from application to disbursement — so you can focus on running the business.",
      icon: <Briefcase size={26} className="text-[#C6A15B]" />,
      problem: {
        heading: "Good businesses lose opportunities because capital isn't available when it's needed.",
        body: "Most SMEs approach only their primary bank for credit — often receiving slow responses, conservative terms, or outright rejections. The range of lenders and products available in the market is far broader than most business owners realise. And navigating that landscape without expertise is time-consuming, frustrating, and often unsuccessful.",
      },
      solution: {
        heading: "We match your requirement to the right lender — and manage the process.",
        body: "Premier Capital works across 20+ banks, NBFCs, and fintech lenders to identify the most suitable credit solution for your specific business requirement. We prepare your case professionally, negotiate terms, and track the application through to disbursement. You get faster approvals, better pricing, and less distraction from the business.",
      },
      benefits: [
        { title: "Wide Lender Access", description: "PSU banks, private banks, NBFCs, and fintech lenders — we find the best fit for your requirement, not just your primary banker's product shelf." },
        { title: "Right Product Selection", description: "Working capital, term loan, overdraft, invoice discounting, or LAP — we match the product to the nature and timing of your capital need." },
        { title: "Faster Approvals", description: "Our credit team relationships and professional application preparation consistently reduce time from application to sanction." },
        { title: "Better Pricing", description: "We create lender competition for your business — which typically results in better rates and terms than direct bilateral applications." },
        { title: "Credit Profile Advisory", description: "Before you apply, we advise on how to strengthen your credit profile and present your financials most effectively to maximise approval probability." },
        { title: "Restructuring Support", description: "If existing debt is creating cash flow strain, we advise on consolidation, refinancing, or restructuring options available in the market." },
      ],
      process: [
        { step: "01", title: "Business & Credit Assessment", description: "We review your financials, credit history, collateral, and capital requirement to identify the right products and lenders for your situation." },
        { step: "02", title: "Application & Negotiation", description: "We prepare your documentation, submit to shortlisted lenders, and negotiate on rate, tenure, and structure on your behalf." },
        { step: "03", title: "Disbursement & Beyond", description: "We track your file to disbursement and remain available for renewals, top-ups, and any future credit requirements as your business grows." },
      ],
      trust: {
        heading: "Transparent. Compliant. Results-Focused.",
        points: [
          "We disclose all lender relationships and compensation arrangements before you engage — no hidden incentives.",
          "All facilities are arranged in compliance with RBI guidelines and applicable banking regulations.",
          "We give you an honest assessment of your creditworthiness before approaching lenders — protecting your credit score from unnecessary enquiries.",
          "We work exclusively in your interest — not on behalf of any lender — throughout the arrangement process.",
        ],
      },
      faqs: [
        { question: "What types of business credit can you arrange?", answer: "Working capital loans, term loans, overdraft facilities, invoice discounting, loan against property for business use, equipment finance, and MSME-specific schemes. The right product depends on your capital requirement and business profile." },
        { question: "My business is relatively new — can I still get a loan?", answer: "It depends on your revenue, profitability, and specific lender appetite. Some NBFCs and fintech lenders accommodate younger businesses that traditional banks won't. We assess your options honestly — and if timing isn't right, we'll tell you what to work on first." },
        { question: "Do I need collateral?", answer: "Not necessarily. Many lenders offer unsecured working capital facilities based on revenue and credit score. Larger or longer-tenor facilities may require property or other security. We structure based on what's most efficient for your situation." },
        { question: "How long does approval take?", answer: "Fintech lenders can disburse in 48–72 hours for smaller facilities. PSU and private banks take 2–6 weeks for larger structured credit. We set realistic expectations upfront and push hard on timelines." },
        { question: "Can you help if our bank has already rejected us?", answer: "Yes — and this is a situation we handle regularly. A rejection from one lender does not mean the market has closed. We assess the reason for the rejection and identify lenders with appetite for your specific profile." },
      ],
      relatedServices: [
        { title: "Loans Against Property", href: "/services/loans-against-property" },
        { title: "Construction Finance", href: "/services/construction-finance" },
        { title: "Wealth Management", href: "/services/wealth-management" },
      ],
    }} />
  );
}
