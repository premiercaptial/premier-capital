"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateGoalSIP, calculateSIP } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("goal-planner", 4));

export function GoalPlannerClient() {
  const [goalCost, setGoalCost] = useState(2000000);
  const [years, setYears] = useState(7);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const result = useMemo(
    () => calculateGoalSIP(goalCost, years, expectedReturn),
    [goalCost, years, expectedReturn]
  );

  const chartData = useMemo(
    () => calculateSIP(result.monthlySIPRequired, expectedReturn, years).yearlyBreakdown,
    [result.monthlySIPRequired, expectedReturn, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "Goal Planner" },
      ]}
      hero={{
        eyebrow: "Planning Calculators",
        title: "Goal Planner",
        description:
          "Turn any target amount — a down payment, education fund, or major purchase — into a concrete monthly SIP you can start today.",
        icon: "goal",
      }}
      calculator={{
        inputsTitle: "Your goal",
        inputs: (
          <>
            <InputSlider
              label="Goal Amount"
              value={goalCost}
              min={50000}
              max={50000000}
              step={50000}
              unit="₹"
              onChange={setGoalCost}
            />
            <InputSlider
              label="Time to Goal"
              value={years}
              min={1}
              max={30}
              step={1}
              unit="yrs"
              unitPosition="suffix"
              onChange={setYears}
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
          </>
        ),
        results: (
          <ResultCardGrid>
            <div className="sm:col-span-2 lg:col-span-3">
              <ResultCard
                label="Monthly SIP Required"
                value={result.monthlySIPRequired}
                emphasis="primary"
                sublabel={`To reach ₹${goalCost.toLocaleString("en-IN")} in ${years} ${years === 1 ? "year" : "years"}`}
                index={0}
              />
            </div>
            <ResultCard label="Total You'll Invest" value={result.totalInvested} index={1} />
            <ResultCard label="Wealth Gained" value={result.wealthGained} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Path to your goal"
          description="How your monthly SIP compounds toward the target amount"
          data={chartData}
          series={[
            { key: "invested", label: "Amount Invested", color: "#0B1F3A" },
            { key: "value", label: "Projected Value", color: "#C6A15B" },
          ]}
        />
      }
      educational={{
        title: "How the goal planner works",
        content: (
          <>
            <p>
              Rather than starting from a monthly amount and seeing what it grows into,
              the goal planner works backward: you tell it the amount you need and by
              when, and it calculates the monthly SIP required to get there at your
              expected rate of return.
            </p>
            <h3>The calculation</h3>
            <p>
              This uses the same compound growth formula as a SIP calculator, solved in
              reverse — for a given target future value, time horizon, and expected
              return, there's a unique monthly contribution that reaches exactly that
              value through monthly compounding.
            </p>
            <h3>Using this for multiple goals</h3>
            <p>
              If you're planning for several goals at once — a home down payment, a
              child's education, a wedding — it's worth running each through separately
              with its own timeline and return assumption, since a goal five years away
              usually calls for a more conservative return assumption than one twenty
              years out. A Premier Capital advisor can help you prioritize and fund
              multiple goals without them competing for the same monthly budget.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "How is the required monthly SIP calculated?",
          answer:
            "It uses the same future-value formula as a SIP calculator, solved backward: given your goal amount, time horizon, and expected return, it finds the fixed monthly contribution that would compound to exactly that amount.",
        },
        {
          question: "What if I can't afford the suggested SIP amount?",
          answer:
            "You have a few levers to adjust: extend your timeline, increase your expected return by taking on more risk (with more volatility), or reduce the goal amount. A Premier Capital advisor can help you find the right balance across multiple goals.",
        },
        {
          question: "Should I use the same return assumption for every goal?",
          answer:
            "Not necessarily. Goals with a shorter timeline are generally better funded with more conservative assumptions and lower-volatility instruments, since there's less time to recover from a market downturn. Longer-term goals can typically afford a higher equity allocation and return assumption.",
        },
        {
          question: "Can I increase my SIP over time instead of a fixed amount?",
          answer:
            "Yes — many investors use a 'step-up SIP' that increases annually with income growth, which can reach the same goal with a lower starting contribution than a flat SIP. This calculator shows the flat-SIP equivalent; ask an advisor about modeling a step-up approach.",
        },
        {
          question: "Does this account for inflation in the goal amount?",
          answer:
            "No — enter the goal amount in today's terms if it's already inflation-adjusted, or inflate it yourself first using our Inflation Calculator if you're planning a goal several years out where prices will likely rise.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Juggling more than one financial goal?",
        description:
          "A Premier Capital advisor can help you sequence and fund multiple goals without any one of them crowding out the others.",
      }}
    />
  );
}
