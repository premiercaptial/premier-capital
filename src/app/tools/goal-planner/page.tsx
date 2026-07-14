import type { Metadata } from "next";
import { buildCalculatorMetadata, buildCalculatorSchema } from "@/lib/seo";
import { SchemaScript } from "@/components/calculators";
import { GoalPlannerClient } from "./GoalPlannerClient";

export const metadata: Metadata = buildCalculatorMetadata({
  slug: "goal-planner",
  title: "Goal Planner — Calculate the SIP Needed for Any Goal",
  description:
    "Work out the monthly SIP required to reach any financial goal — a down payment, education fund, wedding, or major purchase — by target date.",
  keywords: [
    "goal planner calculator",
    "goal based sip calculator",
    "financial goal calculator",
    "sip for goal calculator",
    "savings goal calculator",
  ],
});

const schema = buildCalculatorSchema({
  slug: "goal-planner",
  name: "Goal Planner",
  description:
    "Free calculator to determine the monthly SIP required to reach a specific financial goal by a target date.",
});

export default function GoalPlannerPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <GoalPlannerClient />
    </>
  );
}
