"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateFD } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";
import type { CompoundingFrequency } from "@/types/calculator";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("fd-calculator", 4));

const COMPOUNDING_OPTIONS: { value: CompoundingFrequency; label: string }[] = [
  { value: "annually", label: "Annually" },
  { value: "semiannually", label: "Half-yearly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "monthly", label: "Monthly" },
];

export function FdCalculatorClient() {
  const [principal, setPrincipal] = useState(500000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(5);
  const [compounding, setCompounding] = useState<CompoundingFrequency>("quarterly");

  const result = useMemo(
    () => calculateFD(principal, interestRate, years, compounding),
    [principal, interestRate, years, compounding]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "FD Calculator" },
      ]}
      hero={{
        eyebrow: "Investment Calculators",
        title: "FD Calculator",
        description:
          "Estimate the maturity value of a fixed deposit, and see how compounding frequency changes the interest you earn.",
        icon: "fd",
      }}
      calculator={{
        inputsTitle: "Your deposit details",
        inputs: (
          <>
            <InputSlider
              label="Deposit Amount"
              value={principal}
              min={5000}
              max={10000000}
              step={5000}
              unit="₹"
              onChange={setPrincipal}
            />
            <InputSlider
              label="Interest Rate (p.a.)"
              value={interestRate}
              min={1}
              max={12}
              step={0.1}
              unit="%"
              unitPosition="suffix"
              onChange={setInterestRate}
            />
            <InputSlider
              label="Tenure"
              value={years}
              min={1}
              max={10}
              step={1}
              unit="yrs"
              unitPosition="suffix"
              onChange={setYears}
            />

            <div className="space-y-3">
              <label className="font-body text-sm font-medium text-navy">
                Compounding Frequency
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {COMPOUNDING_OPTIONS.map((option) => {
                  const isActive = compounding === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setCompounding(option.value)}
                      className={
                        isActive
                          ? "rounded-lg bg-navy px-3 py-2.5 font-body text-xs font-medium text-white transition-all duration-300 ease-premium sm:text-sm"
                          : "rounded-lg border border-border bg-background px-3 py-2.5 font-body text-xs font-medium text-navy/60 transition-all duration-300 ease-premium hover:border-gold/40 hover:text-navy sm:text-sm"
                      }
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        ),
        results: (
          <ResultCardGrid>
            <div className="sm:col-span-2 lg:col-span-3">
              <ResultCard
                label="Maturity Amount"
                value={result.maturityAmount}
                emphasis="primary"
                sublabel={`After ${years} ${years === 1 ? "year" : "years"}`}
                index={0}
              />
            </div>
            <ResultCard label="Deposit Amount" value={principal} index={1} />
            <ResultCard label="Interest Earned" value={result.interestEarned} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Growth over time"
          description="How your deposit compounds toward maturity"
          data={result.yearlyBreakdown}
          series={[
            { key: "invested", label: "Deposit Amount", color: "#0B1F3A" },
            { key: "value", label: "Maturity Value", color: "#C6A15B" },
          ]}
        />
      }
      educational={{
        title: "How the FD calculator works",
        content: (
          <>
            <p>
              A Fixed Deposit (FD) is a lump-sum investment held with a bank or NBFC for
              a fixed tenure at a guaranteed interest rate. Unlike market-linked
              investments, the return on an FD is locked in at the time of booking,
              making it a predictable, low-risk part of a portfolio.
            </p>
            <h3>Why compounding frequency matters</h3>
            <p>
              Interest can be compounded annually, half-yearly, quarterly, or monthly.
              The more frequently interest compounds, the more often your accumulated
              interest itself starts earning interest — so a monthly-compounding FD will
              yield marginally more than an annual-compounding FD at the same stated
              rate. Most Indian bank FDs compound quarterly by default.
            </p>
            <h3>FD vs. other fixed-income options</h3>
            <p>
              FDs offer capital protection and a guaranteed rate, but returns are fully
              taxable as per your income slab and are typically lower than long-term
              equity or hybrid fund returns. They work best for short-term goals, an
              emergency fund, or the conservative portion of a larger, diversified plan.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "How is FD interest calculated?",
          answer:
            "FD interest is calculated using compound interest: the deposit grows by the stated annual rate, divided across the compounding periods you choose (annual, half-yearly, quarterly, or monthly), with each period's interest added back to the principal for the next period.",
        },
        {
          question: "Is FD interest taxable?",
          answer:
            "Yes, interest earned on a fixed deposit is fully taxable as per your income tax slab, and banks deduct TDS if the interest exceeds the prescribed annual threshold. This calculator shows gross interest before any tax deduction.",
        },
        {
          question: "Can I withdraw an FD before maturity?",
          answer:
            "Most FDs allow premature withdrawal, but typically at a reduced interest rate and sometimes a penalty. Terms vary by bank — check your specific FD's premature withdrawal policy before booking if liquidity might be a concern.",
        },
        {
          question: "Which compounding frequency gives the best return?",
          answer:
            "Monthly compounding yields marginally more than annual compounding at the same quoted rate, since interest is credited and starts earning interest more often. The difference is usually small — the quoted interest rate itself matters far more than compounding frequency.",
        },
        {
          question: "How does an FD compare to a Recurring Deposit (RD)?",
          answer:
            "An FD is a one-time lump-sum deposit, while an RD builds up through fixed monthly instalments. If you already have a lump sum to invest, an FD is usually simpler; if you're saving up gradually, our RD Calculator may be more relevant.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Deciding between an FD and other options?",
        description:
          "A Premier Capital advisor can help you weigh fixed deposits against other fixed-income instruments for your specific tax situation and timeline.",
      }}
    />
  );
}
