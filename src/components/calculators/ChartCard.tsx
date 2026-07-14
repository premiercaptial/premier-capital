"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import type { ChartSeriesPoint } from "@/types/calculator";
import { formatCurrencyCompact, formatCurrency } from "@/lib/finance/format";

const NAVY = "#0B1F3A";
const GOLD = "#C6A15B";
const GOLD_LIGHT = "#E3CD9F";
const GRID = "#E8E4DC";

interface GrowthChartCardProps {
  type: "growth";
  title: string;
  description?: string;
  data: ChartSeriesPoint[];
  /** keys in `data` to plot, e.g. { invested: "Invested", value: "Value" } */
  series: { key: string; label: string; color?: string }[];
}

interface BreakdownChartCardProps {
  type: "breakdown";
  title: string;
  description?: string;
  data: { label: string; value: number }[];
}

type ChartCardProps = GrowthChartCardProps | BreakdownChartCardProps;

function ChartFrame({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="mb-6">
        <h3 className="font-display text-xl font-medium text-navy">{title}</h3>
        {description && (
          <p className="mt-1 font-body text-sm text-navy/50">{description}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white px-4 py-3 shadow-card-hover">
      <p className="mb-1.5 font-body text-xs font-medium uppercase tracking-wide text-navy/40">
        {label}
      </p>
      {payload.map((entry: any) => (
        <p key={entry.dataKey} className="font-mono text-sm text-navy">
          <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
          {entry.name}: {formatCurrency(entry.value)}
        </p>
      ))}
    </div>
  );
}

/**
 * Single entry point for every chart in the calculator suite. Pass
 * `type="growth"` for SIP/lumpsum/FD/RD/SWP style value-over-time charts,
 * or `type="breakdown"` for EMI-style principal vs interest pies.
 */
export function ChartCard(props: ChartCardProps) {
  if (props.type === "breakdown") {
    const { title, description, data } = props;
    const colors = [NAVY, GOLD];
    return (
      <ChartFrame title={title} description={description}>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
                strokeWidth={0}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
             <Tooltip
  formatter={(value) => formatCurrency(Number(value ?? 0))}
  contentStyle={{
    borderRadius: 12,
    border: `1px solid ${GRID}`,
    fontFamily: "var(--font-body)",
    fontSize: 13,
  }}
/>
              
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value) => <span className="font-body text-sm text-navy/70">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ChartFrame>
    );
  }

  const { title, description, data, series } = props;
  const defaultColors = [GOLD, NAVY];

  return (
    <ChartFrame title={title} description={description}>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              {series.map((s, i) => (
                <linearGradient key={s.key} id={`fill-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={s.color ?? defaultColors[i % defaultColors.length]}
                    stopOpacity={0.28}
                  />
                  <stop
                    offset="100%"
                    stopColor={s.color ?? defaultColors[i % defaultColors.length]}
                    stopOpacity={0}
                  />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontFamily: "var(--font-body)", fontSize: 12, fill: "#0B1F3A99" }}
              axisLine={{ stroke: GRID }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => formatCurrencyCompact(v)}
              tick={{ fontFamily: "var(--font-mono)", fontSize: 11, fill: "#0B1F3A99" }}
              axisLine={false}
              tickLine={false}
              width={64}
            />
            <Tooltip content={<CustomTooltip />} />
            {series.map((s, i) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color ?? defaultColors[i % defaultColors.length]}
                strokeWidth={2}
                fill={`url(#fill-${s.key})`}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap gap-5">
        {series.map((s, i) => (
          <div key={s.key} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: s.color ?? defaultColors[i % defaultColors.length] }}
            />
            <span className="font-body text-sm text-navy/60">{s.label}</span>
          </div>
        ))}
      </div>
    </ChartFrame>
  );
}

export { GOLD_LIGHT };
