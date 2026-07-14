"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateHomeLoanEligibility } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(
  getRelatedCalculators("home-loan-eligibility-calculator", 4)
);

export function HomeLoanEligibilityCalculatorClient() {
  const [monthlySalary, setMonthlySalary] = useState(100000);
  const [existingEMIs, setExistingEMIs] = useState(0);
  const [interestRate, setInterestRate] = useState(9);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => calculateHomeLoanEligibility(monthlySalary, existingEMIs, interestRate, years),
    [monthlySalary, existingEMIs, interestRate, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "Home Loan Eligibility Calculator" },
      ]}
      hero={{
        eyebrow: "Loan Calculators",
        title: "Home Loan Eligibility Calculator",
        description:
          "Estimate the maximum home loan you're likely to qualify for, based on your income, existing obligations, and the loan terms.",
        icon: "homeLoan",
      }}
      calculator={{
        inputsTitle: "Your income details",
        inputs: (
          <>
            <InputSlider
              label="Monthly Salary (net)"
              value={monthlySalary}
              min={15000}
              max={2000000}
              step={5000}
              unit="₹"
              onChange={setMonthlySalary}
            />
            <InputSlider
              label="Existing Monthly EMIs"
              value={existingEMIs}
              min={0}
              max={500000}
              step={1000}
              unit="₹"
              onChange={setExistingEMIs}
            />
            <InputSlider
              label="Interest Rate (p.a.)"
              value={interestRate}
              min={1}
              max={20}
              step={0.1}
              unit="%"
              unitPosition="suffix"
              onChange={setInterestRate}
            />
            <InputSlider
              label="Loan Tenure"
              value={years}
              min={1}
              max={30}
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
                label="Maximum Loan Amount"
                value={result.maxLoanAmount}
                emphasis="primary"
                sublabel={`Over a ${years}-${years === 1 ? "year" : "year"} tenure`}
                index={0}
              />
            </div>
            <ResultCard label="Approx. Monthly EMI" value={result.approxEMI} index={1} />
            <ResultCard
              label="Max Affordable EMI"
              value={result.maxAffordableEMI}
              index={2}
            />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="breakdown"
          title="Your monthly EMI budget"
          description="How your affordable EMI capacity splits between existing obligations and this new loan"
          data={[
            { label: "Existing EMIs", value: Math.round(existingEMIs) },
            { label: "New Home Loan EMI", value: Math.round(result.approxEMI) },
          ]}
        />
      }
      educational={{
        title: "How home loan eligibility is calculated",
        content: (
          <>
            <p>
              Lenders assess home loan eligibility primarily through your ability to
              repay — commonly measured using a Fixed Obligation to Income Ratio (FOIR),
              which caps your total monthly EMIs (existing plus the new loan) at a
              percentage of your net monthly income, typically around 50%.
            </p>
            <h3>How this calculator works</h3>
            <p>
              It first works out your maximum affordable EMI by applying a 50% FOIR to
              your salary and subtracting your existing EMIs. It then converts that
              affordable EMI into a maximum loan amount using the standard EMI formula,
              based on your chosen interest rate and tenure.
            </p>
            <h3>What else lenders consider</h3>
            <p>
              Actual eligibility also depends on your credit score, employment stability,
              age, existing assets, the property's value, and the specific lender's
              policies — this calculator gives a directional estimate based on income
              alone, not a guaranteed sanction amount.
            </p>
          </>
        ),
      }}
      faq={[
        {
          question: "What is FOIR and why does it matter?",
          answer:
            "FOIR (Fixed Obligation to Income Ratio) is the percentage of your monthly income that lenders allow toward all EMIs combined, typically around 50%. It's one of the primary factors lenders use to size how much you can responsibly borrow.",
        },
        {
          question: "Does my credit score affect my loan eligibility?",
          answer:
            "Yes, significantly. A strong credit score can improve both your approved loan amount and the interest rate offered, while a weak score may reduce eligibility or increase the rate. This calculator doesn't factor in credit score.",
        },
        {
          question: "Can a longer tenure increase my loan eligibility?",
          answer:
            "Yes — a longer tenure lowers the EMI for a given loan amount, which means a larger loan fits within the same affordable EMI budget. The tradeoff is more total interest paid over the life of the loan.",
        },
        {
          question: "Does adding a co-applicant increase eligibility?",
          answer:
            "Often, yes — lenders typically combine both applicants' incomes when assessing a joint home loan application, which can meaningfully increase the maximum eligible loan amount. This calculator only considers a single applicant's income.",
        },
        {
          question: "Is this the exact amount a bank will approve?",
          answer:
            "No — this is a planning estimate based on income and EMI obligations alone. Actual sanctioned amounts vary by lender and also depend on credit score, property valuation, employment type, and the lender's specific underwriting policies.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Ready to explore home loan options?",
        description:
          "A Premier Capital advisor can help you compare lenders and structure your application to maximize eligibility.",
      }}
    />
  );
}
