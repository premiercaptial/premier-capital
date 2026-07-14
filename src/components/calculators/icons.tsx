import {
  TrendingUp,
  Landmark,
  PiggyBank,
  Repeat,
  Wallet,
  ArrowDownToLine,
  Umbrella,
  Target,
  LineChart,
  Home,
  type LucideIcon,
} from "lucide-react";
import type { CalculatorIconName } from "@/types/calculator";

export const CALCULATOR_ICONS: Record<CalculatorIconName, LucideIcon> = {
  sip: TrendingUp,
  emi: Landmark,
  fd: PiggyBank,
  rd: Repeat,
  lumpsum: Wallet,
  swp: ArrowDownToLine,
  retirement: Umbrella,
  goal: Target,
  inflation: LineChart,
  homeLoan: Home,
};

export function getCalculatorIcon(name: CalculatorIconName): LucideIcon {
  return CALCULATOR_ICONS[name];
}
