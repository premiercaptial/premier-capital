"use client";

import { useMemo, useState } from "react";
import {
  CalculatorLayout,
  InputSlider,
  ResultCard,
  ResultCardGrid,
  ChartCard,
} from "@/components/calculators";
import { calculateEMI } from "@/lib/finance/formulas";
import { getRelatedCalculators, toRelatedCalculatorItems } from "@/lib/calculators-registry";

const relatedItems = toRelatedCalculatorItems(getRelatedCalculators("emi-calculator", 4));

export function EmiCalculatorClient() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(9);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => calculateEMI(loanAmount, interestRate, years),
    [loanAmount, interestRate, years]
  );

  return (
    <CalculatorLayout
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Calculators", href: "/tools" },
        { label: "EMI Calculator" },
      ]}
      hero={{
        eyebrow: "Loan Calculators",
        title: "EMI Calculator",
        description:
          "Work out your monthly loan instalment, and see exactly how much of your total repayment goes toward principal versus interest.",
        icon: "emi",
      }}
      calculator={{
        inputsTitle: "Your loan details",
        inputs: (
          <>
            <InputSlider
              label="Loan Amount"
              value={loanAmount}
              min={100000}
              max={20000000}
              step={50000}
              unit="₹"
              onChange={setLoanAmount}
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
                label="Monthly EMI"
                value={result.emi}
                emphasis="primary"
                sublabel={`Over ${years} ${years === 1 ? "year" : "years"}`}
                index={0}
              />
            </div>
            <ResultCard label="Total Interest" value={result.totalInterest} index={1} />
            <ResultCard label="Total Payment" value={result.totalPayment} index={2} />
          </ResultCardGrid>
        ),
      }}
      chart={
        <ChartCard
          type="breakdown"
          title="Principal vs. interest"
          description="How your total repayment splits between the amount borrowed and the interest paid"
          data={[
            { label: "Principal", value: Math.round(loanAmount) },
            { label: "Interest", value: Math.round(result.totalInterest) },
          ]}
        />
      }
      educational={{
        title: "How the EMI calculator works",
        content: (
          <>
            <p>
              An EMI (Equated Monthly Installment) is the fixed amount you pay each month
              toward a loan until it's fully repaid. Every EMI is a mix of principal
              (what you borrowed) and interest (the cost of borrowing) — early in the
              loan, a larger share goes to interest, and that shifts toward principal as
              the balance shrinks.
            </p>
            <h3>The formula</h3>
            <p>
              EMI is calculated as P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1], where P is the loan
              principal, r is the monthly interest rate, and n is the number of monthly
              instalments. This calculator applies that formula and then simulates the
              full amortization schedule to work out the total interest paid over the
              loan's life.
            </p>
            <h3>Ways to reduce total interest</h3>
            <ul>
              <li>Choose a shorter tenure if the higher EMI is affordable</li>
              <li>Make partial prepayments whenever you have surplus funds</li>
              <li>Compare rates across lenders before finalizing the loan</li>
              <li>Consider a shorter fixed-rate period if rates are expected to fall</li>
            </ul>
          </>
        ),
      }}
      faq={[
        {
          question: "How is EMI calculated?",
          answer:
            "EMI is calculated using the loan amount, interest rate, and tenure, applying a standard amortization formula. This calculator uses the reducing-balance method, where interest is charged only on the outstanding principal each month.",
        },
        {
          question: "Does a longer tenure always mean I pay more interest?",
          answer:
            "Generally yes. A longer tenure lowers your monthly EMI but increases the total interest paid over the life of the loan, since the principal reduces more slowly. A shorter tenure raises the EMI but reduces total interest.",
        },
        {
          question: "What is a good interest rate to assume?",
          answer:
            "This varies by loan type, lender, your credit profile, and prevailing market rates. Use the rate quoted by your lender for an accurate estimate, or a recent market average if you're comparing options before applying.",
        },
        {
          question: "Can I prepay my loan to reduce the EMI or tenure?",
          answer:
            "Most lenders allow partial or full prepayment, which can either reduce your EMI (keeping tenure the same) or shorten your tenure (keeping EMI the same), lowering total interest either way. Check your loan's prepayment terms and any applicable charges.",
        },
        {
          question: "Does this calculator include processing fees or other charges?",
          answer:
            "No — this shows principal, interest, and EMI only. Processing fees, insurance, and other charges vary by lender and aren't included here. A Premier Capital advisor can help you compare the full cost across lenders.",
        },
      ]}
      related={relatedItems}
      cta={{
        title: "Comparing loan offers?",
        description:
          "A Premier Capital advisor can help you evaluate lenders, negotiate rates, and structure repayment around your broader financial plan.",
      }}
    />
  );
}
