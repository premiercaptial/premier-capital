import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { RdCalculatorClient } from "./RdCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "rd-calculator",
  title: "RD Calculator — Recurring Deposit Maturity Calculator",
  description:
    "Calculate the maturity value of your recurring deposit. See total deposits, interest earned, and maturity amount with our free RD calculator.",
  keywords: [
    "rd calculator",
    "recurring deposit calculator",
    "rd maturity calculator",
    "rd interest calculator",
    "monthly deposit calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "rd-calculator",
  name: "RD Calculator",
  description:
    "Free calculator to estimate recurring deposit maturity value and interest earned.",
});

export default function RDCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <RdCalculatorClient />
    </>
  );
}
