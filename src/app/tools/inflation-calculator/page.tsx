import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { InflationCalculatorClient } from "./InflationCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "inflation-calculator",
  title: "Inflation Calculator — See What Today's Money Will Be Worth",
  description:
    "Calculate what today's expenses or savings goal will cost in the future, adjusted for inflation. Free inflation calculator for financial planning.",
  keywords: [
    "inflation calculator",
    "inflation calculator india",
    "future cost calculator",
    "purchasing power calculator",
    "cost of living calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "inflation-calculator",
  name: "Inflation Calculator",
  description:
    "Free calculator to estimate the future cost of today's expenses, adjusted for inflation over time.",
});

export default function InflationCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <InflationCalculatorClient />
    </>
  );
}
