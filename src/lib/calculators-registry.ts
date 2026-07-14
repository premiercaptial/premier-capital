import type { CalculatorMeta } from "@/types/calculator";

export const CALCULATORS: CalculatorMeta[] = [
  {
    slug: "sip-calculator",
    name: "SIP Calculator",
    shortName: "SIP",
    description: "Project the future value of a monthly SIP investment.",
    icon: "sip",
    category: "invest",
  },
  {
    slug: "lumpsum-calculator",
    name: "Lumpsum Calculator",
    shortName: "Lumpsum",
    description: "See how a one-time investment grows over time.",
    icon: "lumpsum",
    category: "invest",
  },
  {
    slug: "fd-calculator",
    name: "FD Calculator",
    shortName: "FD",
    description: "Calculate fixed deposit maturity value and interest earned.",
    icon: "fd",
    category: "invest",
  },
  {
    slug: "rd-calculator",
    name: "RD Calculator",
    shortName: "RD",
    description: "Work out your recurring deposit maturity amount.",
    icon: "rd",
    category: "invest",
  },
  {
    slug: "swp-calculator",
    name: "SWP Calculator",
    shortName: "SWP",
    description: "Plan systematic withdrawals without depleting your corpus.",
    icon: "swp",
    category: "invest",
  },
  {
    slug: "emi-calculator",
    name: "EMI Calculator",
    shortName: "EMI",
    description: "Calculate your monthly loan instalment and total interest.",
    icon: "emi",
    category: "borrow",
  },
  {
    slug: "home-loan-eligibility-calculator",
    name: "Home Loan Eligibility Calculator",
    shortName: "Loan Eligibility",
    description: "Estimate the maximum home loan you qualify for.",
    icon: "homeLoan",
    category: "borrow",
  },
  {
    slug: "retirement-calculator",
    name: "Retirement Calculator",
    shortName: "Retirement",
    description: "Find the corpus you'll need to retire comfortably.",
    icon: "retirement",
    category: "plan",
  },
  {
    slug: "goal-planner",
    name: "Goal Planner",
    shortName: "Goal Planner",
    description: "Work out the monthly SIP needed to hit any goal.",
    icon: "goal",
    category: "plan",
  },
  {
    slug: "inflation-calculator",
    name: "Inflation Calculator",
    shortName: "Inflation",
    description: "See what today's expenses will cost in the future.",
    icon: "inflation",
    category: "plan",
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

/** Returns up to `limit` other calculators, preferring the same category. */
export function getRelatedCalculators(currentSlug: string, limit = 4): CalculatorMeta[] {
  const current = getCalculatorBySlug(currentSlug);
  const others = CALCULATORS.filter((c) => c.slug !== currentSlug);

  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((c) => c.category === current.category);
  const rest = others.filter((c) => c.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}

export function toRelatedCalculatorItems(calculators: CalculatorMeta[]) {
  return calculators.map((c) => ({
    title: c.name,
    description: c.description,
    href: `/tools/${c.slug}`,
    icon: c.icon,
  }));
}