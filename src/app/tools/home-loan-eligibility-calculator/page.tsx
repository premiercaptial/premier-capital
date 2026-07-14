import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { HomeLoanEligibilityCalculatorClient } from "./HomeLoanEligibilityCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "home-loan-eligibility-calculator",
  title: "Home Loan Eligibility Calculator — Check Your Max Loan Amount",
  description:
    "Estimate the maximum home loan amount you're eligible for based on your salary, existing EMIs, interest rate, and tenure.",
  keywords: [
    "home loan eligibility calculator",
    "home loan amount calculator",
    "maximum loan eligibility calculator",
    "housing loan eligibility",
    "how much home loan can i get",
  ],
});

const schema = buildCalculatorSchema({
  slug: "home-loan-eligibility-calculator",
  name: "Home Loan Eligibility Calculator",
  description:
    "Free calculator to estimate the maximum home loan amount based on income, existing obligations, interest rate, and tenure.",
});

export default function HomeLoanEligibilityCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <HomeLoanEligibilityCalculatorClient />
    </>
  );
}
