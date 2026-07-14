"use client";

// ─────────────────────────────────────────────────────────────
// src/components/services/useServiceConsultationTrigger.ts
// Auto-opens a small floating lead card on service pages,
// triggered by whichever happens first:
//   1. 30 seconds spent on the page
//   2. Exit intent (cursor moves above the viewport)
// Fires once per session, per service page (keyed by slug).
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

const STORAGE_PREFIX = "pca-service-prompt-shown:";
const TIME_THRESHOLD_MS = 30_000;

interface UseServiceConsultationTriggerOptions {
  /** Unique key for this service page, e.g. data.title or the slug. */
  serviceKey: string;
  /** Called once, the first time either trigger condition is met. */
  onTrigger: () => void;
  /** Set to false to disable the auto-trigger entirely. */
  enabled?: boolean;
  /** Time threshold in ms before the timer fires. Defaults to 30s. */
  timeThreshold?: number;
}

export function useServiceConsultationTrigger({
  serviceKey,
  onTrigger,
  enabled = true,
  timeThreshold = TIME_THRESHOLD_MS,
}: UseServiceConsultationTriggerOptions) {
  const firedRef = useRef(false);
  const storageKey = `${STORAGE_PREFIX}${serviceKey}`;

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(storageKey) === "true") return;

    const fire = () => {
      if (firedRef.current) return;
      if (sessionStorage.getItem(storageKey) === "true") return;

      firedRef.current = true;
      sessionStorage.setItem(storageKey, "true");
      onTrigger();

      document.removeEventListener("mouseleave", handleExitIntent);
      clearTimeout(timer);
    };

    // ── Exit intent: cursor leaves through the top of the viewport ──
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        fire();
      }
    };

    // ── 30 second timer ──
    const timer = setTimeout(fire, timeThreshold);

    document.addEventListener("mouseleave", handleExitIntent);

    return () => {
      document.removeEventListener("mouseleave", handleExitIntent);
      clearTimeout(timer);
    };
  }, [enabled, onTrigger, serviceKey, storageKey, timeThreshold]);
}
