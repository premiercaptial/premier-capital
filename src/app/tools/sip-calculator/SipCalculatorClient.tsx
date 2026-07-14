"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateSIP } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("sip-calculator", 4));

export function SipCalculatorClient() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(15000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(15);

  const result = useMemo(
    () => calculateSIP(monthlyInvestment, expectedReturn, years),
    [monthlyInvestment, expectedReturn, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "SIP Calculator" },
      ]}
      hero={{
        eyebrow: "Investment Calculators",
        title: "SIP Calculator",
        description:
          "Estimate how a disciplined monthly investment could grow over time, and see the split between what you invest and what the market compounds for you.",
        icon: "sip",
      }}
      calculator={{
        inputsTitle: "Your SIP details",
        inputs: (
          <>
            <InputSlider
              label="Monthly Investment"
              value={monthlyInvestment}
              min={500}
              max={500000}
              step={500}
              unit="₹"
              onChange={setMonthlyInvestment}
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
                sublabel={`After ${years} ${years === 1 ? "year" : "years"} of investing`}
                index={0}
              />
            </div>
            <ResultCard label="Total Investment" value={result.investedAmount} index={1} />
            <ResultCard label="Estimated Returns" value={result.estimatedReturns} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Growth over time"
          description="How your invested amount compares to the projected value each year"
          data={result.yearlyBreakdown}
          series={[
            { key: "invested", label: "Amount Invested", color: "#0B1F3A" },
            { key: "value", label: "Projected Value", color: "#C6A15B" },
          ]}
        />
      }
      educational={{
        title: "How the SIP calculator works",
        content: (
          <>
            <p>
              A Systematic Investment Plan (SIP) lets you invest a fixed amount into a
              mutual fund at regular intervals — typically monthly — rather than as a
              single lump sum. This calculator projects the future value of that habit
              using compound growth, assuming your chosen rate of return holds steady
              across the full investment period.
            </p>
            <h3>The formula</h3>
            <p>
              Future value is calculated using the standard ordinary-annuity formula for
              a monthly SIP, compounded monthly at your expected annual rate of return.
              Each month's contribution earns returns for the remaining duration of the
              investment, which is why the growth curve steepens in later years — the
              earlier contributions have had the most time to compound.
            </p>
            <h3>What the expected return should reflect</h3>
            <p>
              The expected return is an assumption, not a guarantee. Equity mutual funds
              have historically delivered returns in a wide range depending on the
              market cycle and fund category; this calculator does not predict actual
              fund performance. Use a conservative estimate if you're planning around
              this number, and revisit your plan periodically as markets and your goals
              change.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "What is a SIP calculator?",
          answer:
            "A SIP calculator estimates the future value of a recurring mutual fund investment based on your monthly contribution, an assumed annual rate of return, and the investment duration. It shows how much of the final amount is your own capital versus market-driven growth.",
        },
        {
          question: "Is the SIP return guaranteed?",
          answer:
            "No. Mutual fund returns are market-linked and not guaranteed. The percentage you enter is an assumption for planning purposes, not a promised outcome. Actual returns will vary based on market performance and the specific fund chosen.",
        },
        {
          question: "Can I change my SIP amount later?",
          answer:
            "Yes, most fund houses allow you to increase, decrease, pause, or stop a SIP at any time. Many investors use a 'step-up SIP,' increasing the monthly amount each year in line with rising income, which this basic calculator does not model but a Premier Capital advisor can help you plan for.",
        },
        {
          question: "How is SIP different from a lumpsum investment?",
          answer:
            "A SIP spreads your investment across many smaller instalments over time, which averages your purchase cost across market ups and downs. A lumpsum investment puts the full amount in on day one. Our Lumpsum Calculator can help you compare the two approaches for your situation.",
        },
        {
          question: "What is a realistic expected return to use?",
          answer:
            "This depends on the asset class and your risk profile — equity, hybrid, and debt funds have historically shown very different long-term return ranges. Rather than picking a number in isolation, it's worth discussing your risk tolerance and time horizon with an advisor before finalizing a planning assumption.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Ready to put this SIP plan into action?",
        description:
          "A Premier Capital advisor can help you choose the right funds, structure a step-up SIP, and align this plan with your broader portfolio.",
      }}
    />
  );
}
