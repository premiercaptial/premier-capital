import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { EmiCalculatorClient } from "./EmiCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "emi-calculator",
  title: "EMI Calculator — Calculate Your Loan EMI Online",
  description:
    "Calculate your monthly loan EMI, total interest payable, and total payment for home, personal, or car loans with our free EMI calculator.",
  keywords: [
    "emi calculator",
    "loan emi calculator",
    "home loan emi calculator",
    "personal loan emi calculator",
    "emi calculation formula",
    "monthly installment calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "emi-calculator",
  name: "EMI Calculator",
  description:
    "Free calculator to estimate the monthly EMI, total interest, and total payment for any loan.",
});

export default function EMICalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <EmiCalculatorClient />
    </>
  );
}
