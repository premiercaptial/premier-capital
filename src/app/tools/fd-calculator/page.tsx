import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { FdCalculatorClient } from "./FdCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "fd-calculator",
  title: "FD Calculator — Fixed Deposit Maturity Calculator",
  description:
    "Calculate your fixed deposit maturity amount and interest earned. Compare annual, quarterly, and monthly compounding with our free FD calculator.",
  keywords: [
    "fd calculator",
    "fixed deposit calculator",
    "fd maturity calculator",
    "fd interest calculator",
    "bank fd calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "fd-calculator",
  name: "FD Calculator",
  description:
    "Free calculator to estimate fixed deposit maturity value and interest earned across different compounding frequencies.",
});

export default function FDCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <FdCalculatorClient />
    </>
  );
}
