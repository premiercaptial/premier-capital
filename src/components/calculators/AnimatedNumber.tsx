"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  formatter: (value: number) => string;
  className?: string;
}

/**
 * Counts smoothly from its previous value to the new one whenever `value`
 * changes, and animates in on first scroll into view. Every ResultCard
 * routes its headline figure through this so numbers never "pop" — they
 * settle, matching the restrained motion language of the rest of the site.
 */
export function AnimatedNumber({ value, formatter, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatter(latest);
      }
    });
    return unsubscribe;
  }, [spring, formatter]);

  return (
    <span ref={ref} className={className} aria-live="polite">
      {formatter(0)}
    </span>
  );
}
