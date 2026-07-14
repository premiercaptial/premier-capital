// ============================================================================
// Formatting helpers — Indian numbering system (lakh/crore), used everywhere
// results are displayed so every calculator reads identically.
// ============================================================================

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const inrFormatterPrecise = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

const plainNumberFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

/** ₹12,34,567 style formatting. Use for all headline result values. */
export function formatCurrency(value: number, precise = false): string {
  if (!Number.isFinite(value)) return "₹0";
  return precise ? inrFormatterPrecise.format(value) : inrFormatter.format(value);
}

/** Compact form for space-constrained UI, e.g. sliders: ₹12.3L, ₹1.2Cr */
export function formatCurrencyCompact(value: number): string {
  if (!Number.isFinite(value)) return "₹0";
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_00_00_000) return `${sign}₹${(abs / 1_00_00_000).toFixed(2)}Cr`;
  if (abs >= 1_00_000) return `${sign}₹${(abs / 1_00_000).toFixed(2)}L`;
  if (abs >= 1_000) return `${sign}₹${(abs / 1_000).toFixed(1)}K`;
  return `${sign}₹${abs.toFixed(0)}`;
}

export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return "0";
  return plainNumberFormatter.format(Math.round(value));
}

export function formatPercent(value: number, fractionDigits = 1): string {
  if (!Number.isFinite(value)) return "0%";
  return `${value.toFixed(fractionDigits)}%`;
}

export function formatYears(value: number): string {
  if (!Number.isFinite(value)) return "0 yrs";
  const isWhole = Number.isInteger(value);
  return `${isWhole ? value : value.toFixed(1)} ${value === 1 ? "yr" : "yrs"}`;
}

/** Dispatches to the right formatter for a ResultCard's `format` prop. */
export function formatByType(
  value: number,
  type: "currency" | "number" | "percent" | "years" = "currency"
): string {
  switch (type) {
    case "currency":
      return formatCurrency(value);
    case "percent":
      return formatPercent(value);
    case "years":
      return formatYears(value);
    case "number":
    default:
      return formatNumber(value);
  }
}