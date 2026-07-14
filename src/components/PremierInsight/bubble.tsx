"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bubbleTeasers } from "./data";
import type { BubbleTeaser } from "./types";

interface BubbleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function Bubble({ isOpen, onClick }: BubbleProps) {
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentTeaser: BubbleTeaser = bubbleTeasers[teaserIndex];

  // Avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rotate teasers every 10–12 seconds
  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setTeaserIndex((prev) => (prev + 1) % bubbleTeasers.length);
    }, 11000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Gentle pulse every 15 seconds
  useEffect(() => {
    if (isOpen) return;
    const pulse = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1200);
    }, 15000);
    return () => clearInterval(pulse);
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={onClick}
      aria-label="Open Premier Insights"
      // Floating idle animation
      animate={
        isPulsing
          ? { y: [0, -6, 0, -4, 0], scale: [1, 1.06, 1] }
          : { y: [0, -5, 0] }
      }
      transition={
        isPulsing
          ? { duration: 1.2, ease: "easeInOut" }
          : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
      }
      whileHover={{ scale: 1.06, y: -6 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        width: 80,
        height: 80,
        borderRadius: 22,
        background: "#FFFFFF",
        border: "1.5px solid rgba(198,161,91,0.55)",
        boxShadow:
          "0 4px 12px rgba(11,31,58,0.10), 0 12px 32px rgba(11,31,58,0.08)",
        outline: "none",
      }}
    >
      {/* Gold accent top line */}
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: 28,
          height: 2,
          background: "#C6A15B",
          opacity: 0.7,
        }}
      />

      {/* Rotating teaser content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={teaserIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-center gap-1 px-2"
        >
          <span style={{ fontSize: 22, lineHeight: 1 }}>{currentTeaser.emoji}</span>
          <span
            className="text-center leading-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "#0B1F3A",
              opacity: 0.7,
              textTransform: "uppercase",
              maxWidth: 58,
            }}
          >
            {currentTeaser.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
