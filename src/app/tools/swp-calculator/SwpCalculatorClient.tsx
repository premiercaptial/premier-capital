"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateSWP } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("swp-calculator", 4));

export function SwpCalculatorClient() {
  const [investment, setInvestment] = useState(2500000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(15000);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => calculateSWP(investment, monthlyWithdrawal, expectedReturn, years),
    [investment, monthlyWithdrawal, expectedReturn, years]
  );

  const depletionYears = result.depletionMonth ? (result.depletionMonth / 12).toFixed(1) : null;

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "SWP Calculator" },
      ]}
      hero={{
        eyebrow: "Investment Calculators",
        title: "SWP Calculator",
        description:
          "See how long a fixed monthly withdrawal can be sustained from your investment corpus, and what's left at the end of your chosen period.",
        icon: "swp",
      }}
      calculator={{
        inputsTitle: "Your withdrawal plan",
        inputs: (
          <>
            <InputSlider
              label="Initial Investment"
              value={investment}
              min={50000}
              max={50000000}
              step={50000}
              unit="₹"
              onChange={setInvestment}
            />
            <InputSlider
              label="Monthly Withdrawal"
              value={monthlyWithdrawal}
              min={1000}
              max={500000}
              step={1000}
              unit="₹"
              onChange={setMonthlyWithdrawal}
            />
            <InputSlider
              label="Expected Return (p.a.)"
              value={expectedReturn}
              min={1}
              max={20}
              step={0.5}
              unit="%"
              unitPosition="suffix"
              onChange={setExpectedReturn}
            />
            <InputSlider
              label="Withdrawal Period"
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
                label="Remaining Corpus"
                value={result.remainingCorpus}
                emphasis="primary"
                sublabel={
                  result.isDepleted
                    ? `Corpus depletes around year ${depletionYears}`
                    : `After ${years} ${years === 1 ? "year" : "years"} of withdrawals`
                }
                index={0}
              />
            </div>
            <ResultCard label="Initial Investment" value={investment} index={1} />
            <ResultCard label="Total Withdrawn" value={result.totalWithdrawn} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Corpus over time"
          description="How your remaining corpus changes as withdrawals continue"
          data={result.yearlyBreakdown}
          series={[{ key: "value", label: "Remaining Corpus", color: "#C6A15B" }]}
        />
      }
      educational={{
        title: "How the SWP calculator works",
        content: (
          <>
            <p>
              A Systematic Withdrawal Plan (SWP) lets you withdraw a fixed amount from an
              existing investment corpus at regular intervals, while the remaining balance
              stays invested and continues earning returns. It's commonly used to generate
              a regular income stream from a lump-sum corpus, particularly in retirement.
            </p>
            <h3>How the calculation works</h3>
            <p>
              Each month, the calculator applies your expected rate of return to the
              current corpus, then deducts the withdrawal amount. If withdrawals exceed
              what the corpus can sustain, the balance gradually shrinks toward zero; if
              returns outpace withdrawals, the corpus can actually keep growing even as
              you draw from it.
            </p>
            <h3>What determines sustainability</h3>
            <p>
              The relationship between your withdrawal rate and expected return is what
              matters most. A monthly withdrawal that's small relative to your corpus and
              expected return can sustain indefinitely; a withdrawal rate that's too
              aggressive will deplete the corpus within a defined period, as shown when
              this calculator flags a depletion year.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "What is a Systematic Withdrawal Plan (SWP)?",
          answer:
            "An SWP is a facility, typically offered by mutual funds, that lets you withdraw a fixed amount at regular intervals from your investment while the rest stays invested. It works in the opposite direction of a SIP.",
        },
        {
          question: "Can my corpus run out with an SWP?",
          answer:
            "Yes, if your withdrawal amount exceeds what your expected returns can sustain, the corpus will gradually deplete. This calculator shows an estimated depletion point if that's the case with your current inputs.",
        },
        {
          question: "Is SWP income taxable?",
          answer:
            "Each SWP withdrawal is treated as a partial redemption of mutual fund units, and is taxed as capital gains — the rate depends on the fund type and holding period, not your income slab directly. Consult a tax advisor for your specific situation.",
        },
        {
          question: "How is SWP different from a dividend or interest payout?",
          answer:
            "Unlike a dividend or fixed deposit interest, an SWP withdrawal draws down your invested units directly, so both your principal and returns are gradually returned to you over time — which is also why sustainability depends on your withdrawal rate.",
        },
        {
          question: "What withdrawal rate is generally considered sustainable?",
          answer:
            "This depends heavily on expected returns, inflation, and time horizon, and there's no universal number that fits everyone. A Premier Capital advisor can help you model a withdrawal rate against your specific corpus and return expectations.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Planning a regular income from your investments?",
        description:
          "A Premier Capital advisor can help you structure an SWP that balances income needs against corpus longevity.",
      }}
    />
  );
}
