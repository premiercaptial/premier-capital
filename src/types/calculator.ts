// ============================================================================
// Shared types for the Premier Capital calculator suite
// ============================================================================

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit on the current/last page
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedCalculatorItem {
  title: string;
  description: string;
  href: string;
  icon: CalculatorIconName;
}

export interface ResultCardData {
  label: string;
  value: number;
  format?: "currency" | "number" | "percent" | "years";
  sublabel?: string;
  emphasis?: "primary" | "secondary";
}

// Central registry of calculator icon keys so every card/hero/link
// draws from the same icon, never an arbitrary one-off.
export type CalculatorIconName =
  | "sip"
  | "emi"
  | "fd"
  | "rd"
  | "lumpsum"
  | "swp"
  | "retirement"
  | "goal"
  | "inflation"
  | "homeLoan";

export interface CalculatorMeta {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: CalculatorIconName;
  category: "invest" | "borrow" | "plan";
}

export type CompoundingFrequency = "annually" | "semiannually" | "quarterly" | "monthly";

export interface ChartSeriesPoint {
  label: string | number;
  [key: string]: string | number;
}
