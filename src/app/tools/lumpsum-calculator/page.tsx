import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { LumpsumCalculatorClient } from "./LumpsumCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "lumpsum-calculator",
  title: "Lumpsum Calculator — Mutual Fund Lumpsum Return Calculator",
  description:
    "Calculate the future value of a one-time lumpsum mutual fund investment. See total investment, estimated returns, and year-by-year growth.",
  keywords: [
    "lumpsum calculator",
    "lumpsum investment calculator",
    "mutual fund lumpsum calculator",
    "one time investment calculator",
    "lumpsum return calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "lumpsum-calculator",
  name: "Lumpsum Calculator",
  description:
    "Free calculator to estimate the future value and returns of a one-time lumpsum investment.",
});

export default function LumpsumCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <LumpsumCalculatorClient />
    </>
  );
}
