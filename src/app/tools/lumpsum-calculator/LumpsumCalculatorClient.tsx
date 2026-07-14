"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateLumpsum } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("lumpsum-calculator", 4));

export function LumpsumCalculatorClient() {
  const [investment, setInvestment] = useState(500000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => calculateLumpsum(investment, expectedReturn, years),
    [investment, expectedReturn, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "Lumpsum Calculator" },
      ]}
      hero={{
        eyebrow: "Investment Calculators",
        title: "Lumpsum Calculator",
        description:
          "See how a one-time investment could grow over time, compounding at your expected annual rate of return.",
        icon: "lumpsum",
      }}
      calculator={{
        inputsTitle: "Your investment details",
        inputs: (
          <>
            <InputSlider
              label="Investment Amount"
              value={investment}
              min={5000}
              max={20000000}
              step={5000}
              unit="₹"
              onChange={setInvestment}
            />
            <InputSlider
              label="Expected Return (p.a.)"
              value={expectedReturn}
              min={1}
              max={30}
              step={0.5}
              unit="%"
              unitPosition="suffix"
              onChange={setExpectedReturn}
            />
            <InputSlider
              label="Investment Period"
              value={years}
              min={1}
              max={40}
              step={1}
              unit="yrs"
              unitPosition="suffix"
              onChange={setYears}
            />
          </>
        ),
        results: (
          <ResultCardGrid>
            <div className="sm:col-span-2 lg:col-span-3">
              <ResultCard
                label="Future Value"
                value={result.futureValue}
                emphasis="primary"
                sublabel={`After ${years} ${years === 1 ? "year" : "years"}`}
                index={0}
              />
            </div>
            <ResultCard label="Investment Amount" value={result.investedAmount} index={1} />
            <ResultCard label="Estimated Returns" value={result.estimatedReturns} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Growth over time"
          description="How your one-time investment compounds year over year"
          data={result.yearlyBreakdown}
          series={[
            { key: "invested", label: "Investment Amount", color: "#0B1F3A" },
            { key: "value", label: "Projected Value", color: "#C6A15B" },
          ]}
        />
      }
      educational={{
        title: "How the lumpsum calculator works",
        content: (
          <>
            <p>
              A lumpsum investment puts your full amount into a mutual fund or other
              instrument on day one, rather than spreading it across instalments. Every
              rupee starts compounding immediately, which is why the growth curve on a
              lumpsum investment looks smoother and steeper than a SIP over the same
              period and total amount.
            </p>
            <h3>The formula</h3>
            <p>
              Future value is calculated by compounding your investment annually at the
              expected rate of return: FV = P × (1 + r)ⁿ, where P is your principal, r is
              the annual return rate, and n is the number of years invested.
            </p>
            <h3>Lumpsum vs. SIP</h3>
            <p>
              A lumpsum investment carries more timing risk — investing right before a
              market downturn affects the entire amount at once, whereas a SIP averages
              your entry price over time. Lumpsum investing tends to suit investors with
              a large one-time amount (like a bonus or inheritance) and a long time
              horizon that can absorb short-term volatility. Compare with our SIP
              Calculator if you're deciding between the two approaches.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "What is a lumpsum investment?",
          answer:
            "A lumpsum investment is a single, one-time investment of a fixed amount into a mutual fund or other instrument, as opposed to spreading it across regular instalments like a SIP.",
        },
        {
          question: "Is lumpsum investing riskier than SIP?",
          answer:
            "It can carry more short-term timing risk, since the full amount is exposed to the market from day one. A SIP averages your purchase price across market cycles. Over long horizons, the difference in outcomes tends to narrow, but lumpsum results are more sensitive to when you invest.",
        },
        {
          question: "When does lumpsum investing make sense?",
          answer:
            "It often suits situations where you already have a large sum available — a bonus, inheritance, or maturity proceeds from another investment — and have a long enough time horizon to ride out short-term market swings.",
        },
        {
          question: "Can I combine lumpsum and SIP investing?",
          answer:
            "Yes, many investors do both — investing a lumpsum when funds are available and running a parallel SIP for ongoing savings. A Premier Capital advisor can help you structure a combined approach around your cash flow.",
        },
        {
          question: "Does this calculator account for taxes or exit load?",
          answer:
            "No, this shows pre-tax growth only. Capital gains tax and any applicable exit load depend on the fund type and holding period, and would reduce your actual take-home returns.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Have a lumpsum ready to invest?",
        description:
          "A Premier Capital advisor can help you choose the right funds and timing strategy for a one-time investment.",
      }}
    />
  );
}
