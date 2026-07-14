import type { Metadata } from "next";

const SITE_URL = "https://www.premiercapitaladvisor.com"; // update to production domain
const SITE_NAME = "Premier Capital";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/tools-default.jpg`;

interface CalculatorMetadataInput {
  slug: string; // e.g. "sip-calculator" — path is /tools/{slug}
  title: string; // page <title>, keep under ~60 chars
  description: string; // ~150-160 chars, keyword-rich
  keywords: string[];
  ogImage?: string;
}

/** Use inside each calculator's `export const metadata = buildCalculatorMetadata({...})`. */
export function buildCalculatorMetadata({
  slug,
  title,
  description,
  keywords,
  ogImage,
}: CalculatorMetadataInput): Metadata {
  const url = `${SITE_URL}/tools/${slug}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

interface CalculatorSchemaInput {
  slug: string;
  name: string;
  description: string;
}

/** WebApplication schema — pairs with the FAQPage and BreadcrumbList schema
 *  already emitted by FAQSection and Breadcrumb on the same page. */
export function buildCalculatorSchema({ slug, name, description }: CalculatorSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}/tools/${slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@type": "FinancialService",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
