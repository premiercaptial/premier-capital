"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateInflation } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("inflation-calculator", 4));

export function InflationCalculatorClient() {
  const [todaysValue, setTodaysValue] = useState(100000);
  const [inflation, setInflation] = useState(6);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => calculateInflation(todaysValue, inflation, years),
    [todaysValue, inflation, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "Inflation Calculator" },
      ]}
      hero={{
        eyebrow: "Planning Calculators",
        title: "Inflation Calculator",
        description:
          "See what today's expenses, savings goal, or cost of living will look like years from now once inflation is factored in.",
        icon: "inflation",
      }}
      calculator={{
        inputsTitle: "Your figures",
        inputs: (
          <>
            <InputSlider
              label="Today's Value"
              value={todaysValue}
              min={1000}
              max={50000000}
              step={1000}
              unit="₹"
              onChange={setTodaysValue}
            />
            <InputSlider
              label="Expected Inflation (p.a.)"
              value={inflation}
              min={1}
              max={15}
              step={0.5}
              unit="%"
              unitPosition="suffix"
              onChange={setInflation}
            />
            <InputSlider
              label="Time Period"
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
                label="Future Cost"
                value={result.futureCost}
                emphasis="primary"
                sublabel={`What ₹${todaysValue.toLocaleString("en-IN")} today will cost in ${years} ${years === 1 ? "year" : "years"}`}
                index={0}
              />
            </div>
            <ResultCard label="Today's Value" value={todaysValue} index={1} />
            <ResultCard
              label="Increase in Cost"
              value={Math.max(0, result.futureCost - todaysValue)}
              index={2}
            />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Rising cost over time"
          description="How the same amount's future cost increases year by year"
          data={result.yearlyBreakdown}
          series={[{ key: "value", label: "Future Cost", color: "#C6A15B" }]}
        />
      }
      educational={{
        title: "How the inflation calculator works",
        content: (
          <>
            <p>
              Inflation gradually reduces what a fixed amount of money can buy. This
              calculator projects what today's value — an expense, a savings goal, or
              any fixed figure — would cost at a future date, assuming a constant annual
              inflation rate.
            </p>
            <h3>The formula</h3>
            <p>
              Future cost is calculated as FV = P × (1 + i)ⁿ, where P is today's value, i
              is the annual inflation rate, and n is the number of years. This is the
              mirror image of compound interest — instead of money growing, purchasing
              power required to buy the same thing grows.
            </p>
            <h3>Why this matters for financial planning</h3>
            <p>
              Any long-term goal — retirement expenses, a child's education, a future
              purchase — should be planned around its inflated future cost, not today's
              price tag. Skipping this step is one of the most common reasons financial
              plans fall short: the target quietly moves further away every year.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "What inflation rate should I use?",
          answer:
            "India's long-term average consumer inflation has generally been in the mid-single digits, though it varies by category — education and healthcare costs, for instance, often rise faster than general inflation. Consider using a higher rate for those specific categories.",
        },
        {
          question: "How is this different from investment growth?",
          answer:
            "This calculator shows how costs rise, not how investments grow — they're opposite effects. To see if your savings will keep pace with rising costs, compare this future cost against a projection from our SIP or Lumpsum Calculator using your expected investment return.",
        },
        {
          question: "Why do prices increase over time?",
          answer:
            "Inflation results from many factors — currency supply, demand for goods and services, input costs, and broader economic policy. It's a normal, ongoing feature of most economies rather than an occasional event.",
        },
        {
          question: "Should every financial goal use the same inflation rate?",
          answer:
            "Not necessarily — categories like healthcare and education have often outpaced general inflation historically, while other categories may lag it. Using a single blended rate is a reasonable simplification for most planning purposes.",
        },
        {
          question: "How does inflation affect my retirement planning?",
          answer:
            "It significantly increases the corpus you'll need, since your expenses in retirement will be far higher in nominal terms than they are today. Our Retirement Calculator factors inflation directly into its corpus estimate.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Making sure your plan keeps pace with rising costs?",
        description:
          "A Premier Capital advisor can help you build a plan that accounts for inflation across all your major goals, not just one at a time.",
      }}
    />
  );
}
