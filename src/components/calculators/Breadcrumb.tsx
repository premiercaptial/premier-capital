import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types/calculator";

const SITE_URL = "https://www.premiercapitaladvisor.com"; // update to production domain

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD for SEO. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 font-body text-sm text-navy/50">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-gold-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-navy" : ""} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-navy/25" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
