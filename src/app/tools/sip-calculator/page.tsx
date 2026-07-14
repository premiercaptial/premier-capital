import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { SipCalculatorClient } from "./SipCalculatorClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "sip-calculator",
  title: "SIP Calculator — Estimate Your Mutual Fund SIP Returns",
  description:
    "Calculate the future value of your monthly SIP investment. See total investment, estimated returns, and year-by-year growth with our free SIP calculator.",
  keywords: [
    "sip calculator",
    "sip calculator india",
    "mutual fund sip calculator",
    "systematic investment plan calculator",
    "sip return calculator",
    "monthly sip calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "sip-calculator",
  name: "SIP Calculator",
  description:
    "Free calculator to estimate the future value, total investment, and returns of a monthly SIP investment.",
});

export default function SIPCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <SipCalculatorClient />
    </>
  );
}
