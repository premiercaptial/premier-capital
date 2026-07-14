import type { Metadata } from "next";
import { CALCULATORS } from "@/lib/calculators-registry";

const SITE_URL = "https://www.premiercapitaladvisor.com"; // update to production domain

export const metadata: Metadata = {
  title: "Financial Calculators | Premier Capital",
  description:
    "Free financial calculators for investing, loans, and retirement planning — SIP, EMI, FD, RD, lumpsum, SWP, retirement corpus, goal planning, inflation, and home loan eligibility.",
  keywords: [
    "financial calculators",
    "sip calculator",
    "emi calculator",
    "investment calculator",
    "retirement calculator india",
    "loan calculator",
  ],
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: "Financial Calculators | Premier Capital",
    description:
      "Free calculators for investing, loans, and retirement planning — built by Premier Capital.",
    url: `${SITE_URL}/tools`,
    siteName: "Premier Capital",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Premier Capital Financial Calculators",
  description:
    "A collection of free financial calculators for investment planning, loan repayment, and retirement.",
  url: `${SITE_URL}/tools`,
  hasPart: CALCULATORS.map((c) => ({
    "@type": "WebApplication",
    name: c.name,
    url: `${SITE_URL}/tools/${c.slug}`,
    applicationCategory: "FinanceApplication",
  })),
};

import { ToolsHubClient } from "./ToolsHubClient";

export default function ToolsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ToolsHubClient />
    </>
  );
}
