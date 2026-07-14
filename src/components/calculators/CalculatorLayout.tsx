import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { CalculatorHero } from "./CalculatorHero";
import { CalculatorContainer } from "./CalculatorContainer";
import { EducationalSection } from "./EducationalSection";
import { FAQSection } from "./FAQSection";
import { RelatedCalculators } from "./RelatedCalculators";
import { CalculatorCTA } from "./CalculatorCTA";
import type { BreadcrumbItem, CalculatorIconName, FAQItem, RelatedCalculatorItem } from "@/types/calculator";

interface CalculatorLayoutProps {
  breadcrumb: BreadcrumbItem[];
  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    icon: CalculatorIconName;
  };
  calculator: {
    inputs: ReactNode;
    results: ReactNode;
    inputsTitle?: string;
  };
  /** Optional chart(s), rendered directly beneath the calculator card, full width. */
  chart?: ReactNode;
  educational: {
    title: string;
    content: ReactNode;
  };
  faq: FAQItem[];
  related: RelatedCalculatorItem[];
  cta?: {
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

/**
 * The single page skeleton every calculator route (`/tools/[slug]/page.tsx`)
 * renders inside. Assembles, in fixed order:
 * Breadcrumb → Hero → Calculator card → Chart → Educational copy → FAQ →
 * Related calculators → CTA. Individual calculators only ever supply
 * content, never restructure this order — that consistency is what makes
 * the suite feel like one product.
 */
export function CalculatorLayout({
  breadcrumb,
  hero,
  calculator,
  chart,
  educational,
  faq,
  related,
  cta,
}: CalculatorLayoutProps) {
  return (
    <main className="bg-background">
      <CalculatorHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} icon={hero.icon} />

      <div className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
        <Breadcrumb items={breadcrumb} />
      </div>

      <CalculatorContainer
        inputs={calculator.inputs}
        results={calculator.results}
        inputsTitle={calculator.inputsTitle}
      />

      {chart && (
        <section className="mx-auto max-w-6xl px-6 py-4 lg:px-8">{chart}</section>
      )}

      <EducationalSection title={educational.title}>{educational.content}</EducationalSection>

      <div className="border-t border-border">
        <FAQSection items={faq} />
      </div>

      <div className="border-t border-border">
        <RelatedCalculators items={related} />
      </div>

      <CalculatorCTA {...cta} />
    </main>
  );
}
