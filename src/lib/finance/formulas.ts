// ============================================================================
// Financial formula engine
// Every calculator page imports from here — no calculator re-implements
// its own math. Keeping this pure (no React, no formatting) makes it
// trivially unit-testable and reusable in the API/artifact layer too.
// ============================================================================

import type { ChartSeriesPoint, CompoundingFrequency } from "@/types/calculator";

// ---------------------------------------------------------------------------
// SIP (Systematic Investment Plan)
// ---------------------------------------------------------------------------

export interface SIPResult {
  investedAmount: number;
  estimatedReturns: number;
  futureValue: number;
  yearlyBreakdown: ChartSeriesPoint[];
}

/**
 * Future value of a monthly SIP using the standard ordinary-annuity
 * formula, compounded monthly.
 */
export function calculateSIP(
  monthlyInvestment: number,
  annualReturnPercent: number,
  years: number
): SIPResult {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualReturnPercent / 100 / 12;

  const yearlyBreakdown: ChartSeriesPoint[] = [];
  let futureValue = 0;

  for (let month = 1; month <= months; month++) {
    futureValue = monthlyRate === 0
      ? monthlyInvestment * month
      : monthlyInvestment * (((Math.pow(1 + monthlyRate, month) - 1) / monthlyRate) * (1 + monthlyRate));

    if (month % 12 === 0 || month === months) {
      const yearIndex = Math.ceil(month / 12);
      const invested = monthlyInvestment * month;
      yearlyBreakdown.push({
        label: `Year ${yearIndex}`,
        invested: Math.round(invested),
        value: Math.round(futureValue),
      });
    }
  }

  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = Math.max(0, futureValue - investedAmount);

  return {
    investedAmount,
    estimatedReturns,
    futureValue,
    yearlyBreakdown,
  };
}

// ---------------------------------------------------------------------------
// Lumpsum
// ---------------------------------------------------------------------------

export interface LumpsumResult {
  investedAmount: number;
  estimatedReturns: number;
  futureValue: number;
  yearlyBreakdown: ChartSeriesPoint[];
}

export function calculateLumpsum(
  investment: number,
  annualReturnPercent: number,
  years: number
): LumpsumResult {
  const rate = annualReturnPercent / 100;
  const yearlyBreakdown: ChartSeriesPoint[] = [];

  for (let year = 1; year <= Math.round(years); year++) {
    yearlyBreakdown.push({
      label: `Year ${year}`,
      invested: Math.round(investment),
      value: Math.round(investment * Math.pow(1 + rate, year)),
    });
  }

  const futureValue = investment * Math.pow(1 + rate, years);

  return {
    investedAmount: investment,
    estimatedReturns: Math.max(0, futureValue - investment),
    futureValue,
    yearlyBreakdown,
  };
}

// ---------------------------------------------------------------------------
// EMI (Equated Monthly Installment)
// ---------------------------------------------------------------------------

export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  amortization: ChartSeriesPoint[]; // yearly principal vs interest split
}

export function calculateEMI(
  loanAmount: number,
  annualInterestPercent: number,
  years: number
): EMIResult {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualInterestPercent / 100 / 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  let balance = loanAmount;
  const amortization: ChartSeriesPoint[] = [];
  let yearPrincipal = 0;
  let yearInterest = 0;

  for (let month = 1; month <= months; month++) {
    const interestPortion = balance * monthlyRate;
    const principalPortion = emi - interestPortion;
    balance = Math.max(0, balance - principalPortion);
    yearPrincipal += principalPortion;
    yearInterest += interestPortion;

    if (month % 12 === 0 || month === months) {
      amortization.push({
        label: `Year ${Math.ceil(month / 12)}`,
        principal: Math.round(yearPrincipal),
        interest: Math.round(yearInterest),
      });
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }

  const totalPayment = emi * months;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  return { emi, totalInterest, totalPayment, amortization };
}

// ---------------------------------------------------------------------------
// FD (Fixed Deposit)
// ---------------------------------------------------------------------------

export interface FDResult {
  maturityAmount: number;
  interestEarned: number;
  yearlyBreakdown: ChartSeriesPoint[];
}

const COMPOUNDING_PERIODS: Record<CompoundingFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
};

export function calculateFD(
  principal: number,
  annualInterestPercent: number,
  years: number,
  compounding: CompoundingFrequency = "quarterly"
): FDResult {
  const n = COMPOUNDING_PERIODS[compounding];
  const rate = annualInterestPercent / 100;
  const yearlyBreakdown: ChartSeriesPoint[] = [];

  for (let year = 1; year <= Math.round(years); year++) {
    const value = principal * Math.pow(1 + rate / n, n * year);
    yearlyBreakdown.push({
      label: `Year ${year}`,
      invested: Math.round(principal),
      value: Math.round(value),
    });
  }

  const maturityAmount = principal * Math.pow(1 + rate / n, n * years);

  return {
    maturityAmount,
    interestEarned: Math.max(0, maturityAmount - principal),
    yearlyBreakdown,
  };
}

// ---------------------------------------------------------------------------
// RD (Recurring Deposit)
// ---------------------------------------------------------------------------

export interface RDResult {
  investedAmount: number;
  maturityAmount: number;
  interestEarned: number;
  yearlyBreakdown: ChartSeriesPoint[];
}

/**
 * RDs compound quarterly in the Indian banking convention, with each
 * monthly instalment earning interest for its own remaining tenure.
 */
export function calculateRD(
  monthlyDeposit: number,
  annualInterestPercent: number,
  years: number
): RDResult {
  const months = Math.max(0, Math.round(years * 12));
  const quarterlyRate = annualInterestPercent / 100 / 4;

  let maturityAmount = 0;
  const yearlyBreakdown: ChartSeriesPoint[] = [];
  let investedSoFar = 0;

  for (let month = 1; month <= months; month++) {
    const remainingMonths = months - month + 1;
    const remainingQuarters = remainingMonths / 3;
    maturityAmount += monthlyDeposit * Math.pow(1 + quarterlyRate, remainingQuarters);
    investedSoFar += monthlyDeposit;

    if (month % 12 === 0 || month === months) {
      yearlyBreakdown.push({
        label: `Year ${Math.ceil(month / 12)}`,
        invested: Math.round(investedSoFar),
        value: Math.round(maturityAmount),
      });
    }
  }

  const investedAmount = monthlyDeposit * months;

  return {
    investedAmount,
    maturityAmount,
    interestEarned: Math.max(0, maturityAmount - investedAmount),
    yearlyBreakdown,
  };
}

// ---------------------------------------------------------------------------
// SWP (Systematic Withdrawal Plan)
// ---------------------------------------------------------------------------

export interface SWPResult {
  remainingCorpus: number;
  totalWithdrawn: number;
  isDepleted: boolean;
  depletionMonth: number | null;
  yearlyBreakdown: ChartSeriesPoint[];
}

export function calculateSWP(
  initialInvestment: number,
  monthlyWithdrawal: number,
  annualReturnPercent: number,
  years: number
): SWPResult {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualReturnPercent / 100 / 12;

  let corpus = initialInvestment;
  let totalWithdrawn = 0;
  let depletionMonth: number | null = null;
  const yearlyBreakdown: ChartSeriesPoint[] = [];

  for (let month = 1; month <= months; month++) {
    corpus = corpus * (1 + monthlyRate) - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;

    if (corpus <= 0 && depletionMonth === null) {
      depletionMonth = month;
      corpus = 0;
    }

    if (month % 12 === 0 || month === months) {
      yearlyBreakdown.push({
        label: `Year ${Math.ceil(month / 12)}`,
        value: Math.round(Math.max(0, corpus)),
      });
    }

    if (corpus <= 0) break;
  }

  return {
    remainingCorpus: Math.max(0, corpus),
    totalWithdrawn,
    isDepleted: depletionMonth !== null,
    depletionMonth,
    yearlyBreakdown,
  };
}

// ---------------------------------------------------------------------------
// Retirement Planning
// ---------------------------------------------------------------------------

export interface RetirementResult {
  yearsToRetirement: number;
  futureMonthlyExpense: number;
  requiredCorpus: number;
  monthlySIPRequired: number;
}

/**
 * Required corpus is sized to sustain inflation-adjusted monthly expenses
 * indefinitely off the *real* (inflation-adjusted) return during
 * retirement — the standard "safe withdrawal" style approach.
 */
export function calculateRetirement(
  currentAge: number,
  retirementAge: number,
  currentMonthlyExpenses: number,
  inflationPercent: number,
  expectedReturnPercent: number
): RetirementResult {
  const yearsToRetirement = Math.max(0, retirementAge - currentAge);
  const inflation = inflationPercent / 100;
  const expectedReturn = expectedReturnPercent / 100;

  const futureMonthlyExpense =
    currentMonthlyExpenses * Math.pow(1 + inflation, yearsToRetirement);
  const futureAnnualExpense = futureMonthlyExpense * 12;

  // Real rate of return sustained through retirement.
  const realReturn = (1 + expectedReturn) / (1 + inflation) - 1;
  const safeRealReturn = Math.max(realReturn, 0.005); // floor to avoid divide-by-~0
  const requiredCorpus = futureAnnualExpense / safeRealReturn;

  // Monthly SIP needed to accumulate requiredCorpus by retirement.
  const months = yearsToRetirement * 12;
  const monthlyRate = expectedReturn / 12;
  const monthlySIPRequired =
    months === 0
      ? requiredCorpus
      : monthlyRate === 0
      ? requiredCorpus / months
      : requiredCorpus /
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  return {
    yearsToRetirement,
    futureMonthlyExpense,
    requiredCorpus,
    monthlySIPRequired,
  };
}

// ---------------------------------------------------------------------------
// Goal Planner
// ---------------------------------------------------------------------------

export interface GoalResult {
  monthlySIPRequired: number;
  totalInvested: number;
  wealthGained: number;
}

/** Monthly SIP required to reach a target `goalCost` in `years`. */
export function calculateGoalSIP(
  goalCost: number,
  years: number,
  annualReturnPercent: number
): GoalResult {
  const months = Math.max(1, Math.round(years * 12));
  const monthlyRate = annualReturnPercent / 100 / 12;

  const monthlySIPRequired =
    monthlyRate === 0
      ? goalCost / months
      : goalCost /
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  const totalInvested = monthlySIPRequired * months;

  return {
    monthlySIPRequired,
    totalInvested,
    wealthGained: Math.max(0, goalCost - totalInvested),
  };
}

// ---------------------------------------------------------------------------
// Inflation
// ---------------------------------------------------------------------------

export interface InflationResult {
  futureCost: number;
  yearlyBreakdown: ChartSeriesPoint[];
}

export function calculateInflation(
  todaysValue: number,
  inflationPercent: number,
  years: number
): InflationResult {
  const rate = inflationPercent / 100;
  const yearlyBreakdown: ChartSeriesPoint[] = [];

  for (let year = 0; year <= Math.round(years); year++) {
    yearlyBreakdown.push({
      label: year === 0 ? "Today" : `Year ${year}`,
      value: Math.round(todaysValue * Math.pow(1 + rate, year)),
    });
  }

  return {
    futureCost: todaysValue * Math.pow(1 + rate, years),
    yearlyBreakdown,
  };
}

// ---------------------------------------------------------------------------
// Home Loan Eligibility
// ---------------------------------------------------------------------------

export interface HomeLoanEligibilityResult {
  maxLoanAmount: number;
  approxEMI: number;
  maxAffordableEMI: number;
}

/**
 * Uses a standard FOIR (Fixed Obligation to Income Ratio) of 50%: lenders
 * generally cap total EMIs (existing + new) at half of net monthly income.
 */
export function calculateHomeLoanEligibility(
  monthlySalary: number,
  existingEMIs: number,
  annualInterestPercent: number,
  years: number,
  foirPercent = 50
): HomeLoanEligibilityResult {
  const maxAffordableEMI = Math.max(0, (monthlySalary * foirPercent) / 100 - existingEMIs);

  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualInterestPercent / 100 / 12;

  const maxLoanAmount =
    monthlyRate === 0
      ? maxAffordableEMI * months
      : (maxAffordableEMI * (Math.pow(1 + monthlyRate, months) - 1)) /
        (monthlyRate * Math.pow(1 + monthlyRate, months));

  return {
    maxLoanAmount,
    approxEMI: maxAffordableEMI,
    maxAffordableEMI,
  };
}