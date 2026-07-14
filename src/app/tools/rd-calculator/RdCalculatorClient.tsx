"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateRD } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("rd-calculator", 4));

export function RdCalculatorClient() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(10000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const result = useMemo(
    () => calculateRD(monthlyDeposit, interestRate, years),
    [monthlyDeposit, interestRate, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "RD Calculator" },
      ]}
      hero={{
        eyebrow: "Investment Calculators",
        title: "RD Calculator",
        description:
          "Work out how a fixed monthly deposit grows into a maturity amount, with interest compounded quarterly as per standard banking convention.",
        icon: "rd",
      }}
      calculator={{
        inputsTitle: "Your deposit details",
        inputs: (
          <>
            <InputSlider
              label="Monthly Deposit"
              value={monthlyDeposit}
              min={500}
              max={200000}
              step={500}
              unit="₹"
              onChange={setMonthlyDeposit}
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
            <ResultCard label="Total Deposited" value={result.investedAmount} index={1} />
            <ResultCard label="Interest Earned" value={result.interestEarned} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="growth"
          title="Growth over time"
          description="How your monthly deposits accumulate toward maturity"
          data={result.yearlyBreakdown}
          series={[
            { key: "invested", label: "Amount Deposited", color: "#0B1F3A" },
            { key: "value", label: "Maturity Value", color: "#C6A15B" },
          ]}
        />
      }
      educational={{
        title: "How the RD calculator works",
        content: (
          <>
            <p>
              A Recurring Deposit (RD) lets you build savings through fixed monthly
              instalments over a chosen tenure, earning a guaranteed interest rate
              similar to a fixed deposit. It suits investors who want to save
              consistently without a large lump sum upfront.
            </p>
            <h3>How interest is calculated</h3>
            <p>
              Indian banks typically compound RD interest quarterly. Each monthly
              instalment earns interest only for its own remaining tenure — the first
              instalment earns interest for the full period, while the last instalment
              earns interest for barely any time at all. This calculator applies that
              same convention.
            </p>
            <h3>RD vs. SIP</h3>
            <p>
              An RD offers a fixed, guaranteed return and is backed by deposit insurance
              up to the prescribed limit, making it very low-risk. A SIP into a mutual
              fund carries market risk but has historically offered higher long-term
              returns. The right choice depends on your risk tolerance and how the money
              will be used.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "How is RD interest calculated?",
          answer:
            "Each monthly deposit earns compound interest — typically compounded quarterly — for the remaining period until maturity. Because earlier deposits stay invested longer, they accumulate proportionally more interest than deposits made near the end of the tenure.",
        },
        {
          question: "What happens if I miss a monthly instalment?",
          answer:
            "Most banks charge a small penalty for missed or delayed RD instalments, and some may reduce the effective maturity value. Policies vary by bank — check your specific RD's terms if you're concerned about consistency.",
        },
        {
          question: "Is RD interest taxable?",
          answer:
            "Yes, interest earned on a recurring deposit is fully taxable as per your income tax slab, and TDS may apply if interest exceeds the prescribed annual threshold, similar to fixed deposits.",
        },
        {
          question: "Can I withdraw an RD before maturity?",
          answer:
            "Most banks allow premature closure of an RD, usually at a reduced interest rate and sometimes with a penalty. Check your bank's specific terms before committing if you might need the funds early.",
        },
        {
          question: "Is RD better than SIP for short-term goals?",
          answer:
            "For goals under 2-3 years, an RD's guaranteed, low-volatility return is often preferable to market-linked SIP investments, which can lose value in a short window. For longer horizons, a SIP has historically offered better growth potential — worth discussing with an advisor for your specific timeline.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Building a savings habit?",
        description:
          "A Premier Capital advisor can help you decide whether an RD, SIP, or a mix of both fits your goals and risk comfort best.",
      }}
    />
  );
}