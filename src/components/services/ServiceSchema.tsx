// ─────────────────────────────────────────────────────────────
// src/components/services/ServiceSchema.tsx
// JSON-LD structured data for each Premier Capital service page.
// Injects Service + FAQPage schema so Google can surface rich
// results and match this page against the GBP listing for
// "[service] + Chembur / Mumbai" queries.
// ─────────────────────────────────────────────────────────────

import { FAQ } from "./ServicePageLayout";

interface ServiceSchemaProps {
  serviceName: string;       // e.g. "Wealth Management"
  serviceSlug: string;       // e.g. "wealth-management"
  description: string;       // 1-2 sentence summary, should mention Chembur/Mumbai
  faqs: FAQ[];
}

const SITE_URL = "https://premiercapital.in"; // update to actual domain
const BUSINESS_NAME = "Premier Capital";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Chembur",
  addressLocality: "Chembur",
  addressRegion: "Maharashtra",
  addressCountry: "IN",
};

export default function ServiceSchema({ serviceName, serviceSlug, description, faqs }: ServiceSchemaProps) {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `${serviceName} | ${BUSINESS_NAME}`,
    description,
    url: `${SITE_URL}/services/${serviceSlug}`,
    areaServed: {
      "@type": "City",
      name: "Mumbai",
    },
    provider: {
      "@type": "FinancialService",
      name: BUSINESS_NAME,
      address: ADDRESS,
      url: SITE_URL,
    },
    serviceType: serviceName,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
