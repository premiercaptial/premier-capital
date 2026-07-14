// ─────────────────────────────────────────────────────────────
// src/lib/serviceMetadata.ts
// Drop this into each service's page.tsx as the `generateMetadata`
// export, OR import buildServiceMetadata() and pass per-service values.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";

const SITE_URL = "https://premiercapital.in"; // update to actual domain
const BUSINESS_NAME = "Premier Capital";
const LOCALITY = "Chembur, Mumbai";

interface ServiceMetaInput {
  serviceName: string;      // "Wealth Management"
  serviceSlug: string;      // "wealth-management"
  shortDescription: string; // ~150-160 chars, must mention Chembur/Mumbai naturally
  ogImage?: string;         // optional og:image path
}

export function buildServiceMetadata({
  serviceName,
  serviceSlug,
  shortDescription,
  ogImage = "/og-default.jpg",
}: ServiceMetaInput): Metadata {
  const title = `${serviceName} Services in ${LOCALITY} | ${BUSINESS_NAME}`;
  const url = `${SITE_URL}/services/${serviceSlug}`;

  return {
    title,
    description: shortDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: shortDescription,
      url,
      siteName: BUSINESS_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: shortDescription,
      images: [ogImage],
    },
  };
}

// ── Example usage in src/app/services/wealth-management/page.tsx ──
//
// import { buildServiceMetadata } from "@/lib/serviceMetadata";
//
// export const metadata = buildServiceMetadata({
//   serviceName: "Wealth Management",
//   serviceSlug: "wealth-management",
//   shortDescription:
//     "Premier Capital offers personalised wealth management advisory in Chembur, Mumbai — portfolio strategy, asset allocation, and long-term planning for HNI clients.",
// });
