import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { RetirementCalculatorClient } from "./RetirementCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "retirement-calculator",
  title: "Retirement Calculator — Estimate Your Retirement Corpus",
  description:
    "Calculate the retirement corpus you'll need based on your current expenses, inflation, and expected returns, plus the monthly SIP required to get there.",
  keywords: [
    "retirement calculator",
    "retirement planning calculator india",
    "retirement corpus calculator",
    "how much do i need to retire",
    "retirement sip calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "retirement-calculator",
  name: "Retirement Calculator",
  description:
    "Free calculator to estimate the retirement corpus and monthly SIP required based on current expenses, inflation, and expected returns.",
});

export default function RetirementCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <RetirementCalculatorClient />
    </>
  );
}
