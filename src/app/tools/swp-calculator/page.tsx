import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { SwpCalculatorClient } from "./SwpCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "swp-calculator",
  title: "SWP Calculator — Systematic Withdrawal Plan Calculator",
  description:
    "Calculate how long your investment corpus will last with a Systematic Withdrawal Plan (SWP). See remaining corpus and total withdrawals over time.",
  keywords: [
    "swp calculator",
    "systematic withdrawal plan calculator",
    "mutual fund swp calculator",
    "retirement withdrawal calculator",
    "swp corpus calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "swp-calculator",
  name: "SWP Calculator",
  description:
    "Free calculator to estimate remaining corpus and sustainability of a systematic withdrawal plan.",
});

export default function SWPCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <SwpCalculatorClient />
    </>
  );
}
