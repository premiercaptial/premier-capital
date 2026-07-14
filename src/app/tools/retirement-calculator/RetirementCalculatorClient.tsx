"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateRetirement, calculateSIP } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("retirement-calculator", 4));

export function RetirementCalculatorClient() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(11);

  const result = useMemo(
    () => calculateRetirement(currentAge, retirementAge, monthlyExpenses, inflation, expectedReturn),
    [currentAge, retirementAge, monthlyExpenses, inflation, expectedReturn]
  );

  const chartData = useMemo(() => {
    if (result.yearsToRetirement <= 0) return [];
    return calculateSIP(result.monthlySIPRequired, expectedReturn, result.yearsToRetirement)
      .yearlyBreakdown;
  }, [result.monthlySIPRequired, result.yearsToRetirement, expectedReturn]);

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "Retirement Calculator" },
      ]}
      hero={{
        eyebrow: "Planning Calculators",
        title: "Retirement Calculator",
        description:
          "Find out how large a corpus you'll need to maintain your lifestyle in retirement, and the monthly SIP required to build it.",
        icon: "retirement",
      }}
      calculator={{
        inputsTitle: "Your retirement plan",
        inputs: (
          <>
            <InputSlider
              label="Current Age"
              value={currentAge}
              min={18}
              max={65}
              step={1}
              unit="yrs"
              unitPosition="suffix"
              onChange={setCurrentAge}
            />
            <InputSlider
              label="Retirement Age"
              value={retirementAge}
              min={Math.max(currentAge + 1, 40)}
              max={75}
              step={1}
              unit="yrs"
              unitPosition="suffix"
              onChange={setRetirementAge}
            />
            <InputSlider
              label="Current Monthly Expenses"
              value={monthlyExpenses}
              min={10000}
              max={1000000}
              step={5000}
              unit="₹"
              onChange={setMonthlyExpenses}
            />
            <InputSlider
              label="Expected Inflation"
              value={inflation}
              min={2}
              max={12}
              step={0.5}
              unit="%"
              unitPosition="suffix"
              onChange={setInflation}
            />
            <InputSlider
              label="Expected Return (p.a.)"
              value={expectedReturn}
              min={4}
              max={20}
              step={0.5}
              unit="%"
              unitPosition="suffix"
              onChange={setExpectedReturn}
            />
          </>
        ),
        results: (
          <ResultCardGrid>
            <div className="sm:col-span-2 lg:col-span-3">
              <ResultCard
                label="Required Corpus"
                value={result.requiredCorpus}
                emphasis="primary"
                sublabel={`By age ${retirementAge}, in ${result.yearsToRetirement} ${result.yearsToRetirement === 1 ? "year" : "years"}`}
                index={0}
              />
            </div>
            <ResultCard label="Monthly SIP Required" value={result.monthlySIPRequired} index={1} />
            <ResultCard
              label="Future Monthly Expense"
              value={result.futureMonthlyExpense}
              index={2}
            />
          </ResultCardGrid>
        ),
      }}
      chart={
        chartData.length > 0 ? (
          <ChartCard
            type="growth"
            title="Building your retirement corpus"
            description="How the required monthly SIP compounds toward your retirement corpus"
            data={chartData}
            series={[
              { key: "invested", label: "Amount Invested", color: "#0B1F3A" },
              { key: "value", label: "Projected Corpus", color: "#C6A15B" },
            ]}
          />
        ) : undefined
      }
      educational={{
        title: "How the retirement calculator works",
        content: (
          <>
            <p>
              This calculator estimates the corpus you'd need at retirement to sustain
              your current lifestyle, adjusted for inflation between now and your
              retirement date, and then converts that into a monthly SIP target.
            </p>
            <h3>Two steps in the calculation</h3>
            <p>
              First, your current monthly expenses are inflated forward to what they'll
              cost at your retirement age. Second, that future expense is sized into a
              required corpus using the real (inflation-adjusted) rate of return your
              investments are expected to sustain during retirement — a standard
              approach for estimating how large a corpus needs to be to support ongoing
              withdrawals without running out.
            </p>
            <h3>Why this is a starting estimate, not a fixed plan</h3>
            <p>
              Actual retirement needs depend on factors this simple calculator doesn't
              capture — healthcare costs, life expectancy, other income sources like
              pensions, and changes in lifestyle. Use this as a directional starting
              point, and revisit the numbers with an advisor as your situation evolves.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "How much money do I need to retire comfortably?",
          answer:
            "It depends on your current expenses, how many years until retirement, expected inflation, and how long your money needs to last after retirement. This calculator gives a starting estimate based on sustaining your inflation-adjusted expenses indefinitely off investment returns.",
        },
        {
          question: "Why does inflation matter so much for retirement planning?",
          answer:
            "Your expenses today will cost significantly more by the time you retire, especially over a 20-30 year horizon. Planning around today's expense number without adjusting for inflation typically leads to a corpus that falls short.",
        },
        {
          question: "What return assumption should I use for retirement planning?",
          answer:
            "This depends on your asset allocation both before and after retirement. A higher equity allocation earlier in life, shifting toward more conservative investments closer to retirement, is a common approach — worth discussing with an advisor rather than picking one fixed number.",
        },
        {
          question: "Does this calculator account for pension or other income?",
          answer:
            "No, this estimates the corpus needed to fund your full expenses from investments alone. If you expect pension income, rental income, or other sources in retirement, your actual required corpus would likely be lower.",
        },
        {
          question: "What if I start planning for retirement late?",
          answer:
            "Starting later means a higher required monthly SIP to reach the same corpus, since there's less time for compounding. It doesn't mean retirement planning isn't worthwhile — an advisor can help you find a realistic combination of savings rate, retirement age, and expected returns.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Want a retirement plan tailored to your full picture?",
        description:
          "A Premier Capital advisor can factor in your existing investments, other income, and life expectancy to build a more precise retirement plan.",
      }}
    />
  );
}
