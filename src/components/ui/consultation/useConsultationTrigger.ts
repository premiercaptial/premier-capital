"use client";

// ─────────────────────────────────────────────────────────────
// src/components/ui/consultation/useConsultationTrigger.ts
// Auto-opens the consultation widget once per browser session,
// triggered by whichever happens first:
//   1. Exit intent (cursor moves above the viewport, toward tab/close)
//   2. Scroll depth (visitor scrolls past a given % of the page)
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

const STORAGE_KEY = "pca-consultation-auto-prompt-shown";
const SCROLL_DEPTH_THRESHOLD = 0.5; // 50% of page height

interface UseConsultationTriggerOptions {
  /** Called once, the first time either trigger condition is met. */
  onTrigger: () => void;
  /** Set to false to disable the auto-trigger entirely (e.g. on /contact). */
  enabled?: boolean;
  /** Scroll depth threshold, 0–1. Defaults to 0.5 (50%). */
  scrollThreshold?: number;
}

export function useConsultationTrigger({
  onTrigger,
  enabled = true,
  scrollThreshold = SCROLL_DEPTH_THRESHOLD,
}: UseConsultationTriggerOptions) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    // Already shown this session — do nothing.
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "true") return;

    const fire = () => {
      if (firedRef.current) return;
      if (sessionStorage.getItem(STORAGE_KEY) === "true") return;

      firedRef.current = true;
      sessionStorage.setItem(STORAGE_KEY, "true");
      onTrigger();

      // Clean up both listeners immediately once fired.
      document.removeEventListener("mouseleave", handleExitIntent);
      window.removeEventListener("scroll", handleScroll);
    };

    // ── Exit intent: cursor leaves through the top of the viewport ──
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        fire();
      }
    };

    // ── Scroll depth ──
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrolled = scrollTop / docHeight;
      if (scrolled >= scrollThreshold) {
        fire();
      }
    };

    document.addEventListener("mouseleave", handleExitIntent);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleExitIntent);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enabled, onTrigger, scrollThreshold]);
}
