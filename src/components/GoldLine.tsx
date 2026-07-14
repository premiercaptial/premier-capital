"use client";

import { motion } from "framer-motion";

export default function GoldLine() {
  return (
    <div className="relative w-full h-px overflow-hidden bg-[#C6A15B]/15">
      {/* Draw the line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-0 bg-[#C6A15B]"
      />

      {/* Luxury shimmer */}
      <motion.div
        initial={{ x: "-120%" }}
        whileInView={{ x: "220%" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          delay: 0.9,
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
      />
    </div>
  );
}