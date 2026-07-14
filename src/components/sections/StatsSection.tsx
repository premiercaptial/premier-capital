"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience", sublabel: "Navigating markets since 2015" },
  { value: 1000, suffix: "+", label: "Clients Served", sublabel: "Across India and globally" },
  { value: 1000, prefix: "", suffix: "Cr+", label: "Assets Guided", sublabel: "Wealth managed & advised" },
  { value: 250, prefix: "", suffix: "Cr+", label: "Loans Facilitated", sublabel: "Home, business & corporate" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate);
  return (
    <div className="text-center lg:text-left py-10 lg:py-0 px-6 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0">
      <div
        className="text-5xl lg:text-6xl font-bold text-white mb-2 tabular-nums"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {stat.prefix ?? ""}{count}{stat.suffix}
      </div>
      <div className="text-base font-semibold text-[#C6A15B] mb-1">{stat.label}</div>
      <div className="text-xs text-white/50 tracking-wide">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0B1F3A] relative overflow-hidden">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C6A15B 0px, #C6A15B 1px, transparent 0px, transparent 50%)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Our Impact in Numbers</div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Measurable Results,{" "}
            <span className="italic text-[#C6A15B]">Lasting Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 border border-white/10">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
    </section>
  );
}
