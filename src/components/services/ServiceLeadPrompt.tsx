"use client";

// ─────────────────────────────────────────────────────────────
// src/components/services/ServiceLeadPrompt.tsx
// Small floating lead card shown on service pages after the
// 30s timer or exit intent fires. Same fields as the inline
// form at the bottom of the page (name / phone / message).
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface ServiceLeadPromptProps {
  serviceName: string;
  onClose: () => void;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ServiceLeadPrompt({ serviceName, onClose }: ServiceLeadPromptProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          service: serviceName,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.4, ease }}
     className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-[2px] px-4"
      style={{ borderRadius: 12 }}
    >
      <div className="relative w-full max-w-md bg-white border border-[#C6A15B]/20 shadow-2xl rounded-xl overflow-hidden">

  <div className="h-[3px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

    <div className="p-8">

  <div className="flex justify-between items-start mb-6">

    <div>

      <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#C6A15B]">
        Premier Capital
      </p>

      <h2
        className="mt-2 text-[28px] leading-tight font-bold text-[#0B1F3A]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Book a
        <br />
        Complimentary Consultation
      </h2>

      <p className="mt-4 text-sm leading-6 text-[#667085] max-w-[300px]">
        Speak with an experienced financial advisor and get
        personalised guidance with absolutely no obligation.
      </p>

    </div>

    <button
      type="button"
      onClick={onClose}
      className="w-9 h-9 rounded-full hover:bg-[#F6F6F6] flex items-center justify-center transition"
    >
      <X size={18} className="text-[#98A2B3]" />
    </button>

  </div>

  <AnimatePresence mode="wait">
  {submitted ? (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="py-6 text-center"
    >
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EDD9]">
        <Send size={18} className="text-[#C6A15B]" />
      </div>

      <h3
        className="text-2xl font-bold text-[#0B1F3A]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Thank You
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#667085]">
        Our advisory team will contact you shortly.
      </p>
    </motion.div>
  ) : (
    <motion.form
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="w-full rounded-xl border border-[#E4E7EC] bg-[#FAFAFA] px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B] focus:bg-white"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
        className="w-full rounded-xl border border-[#E4E7EC] bg-[#FAFAFA] px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B] focus:bg-white"
      />

      <textarea
        rows={3}
        placeholder="How can we help you?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full resize-none rounded-xl border border-[#E4E7EC] bg-[#FAFAFA] px-4 py-3 text-sm outline-none transition focus:border-[#C6A15B] focus:bg-white"
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 w-full rounded-xl bg-[#0B1F3A] py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#C6A15B]"
      >
        Schedule Consultation
      </motion.button>

      <div className="flex justify-center gap-6 pt-2 text-[11px] text-[#667085]">
        <span>✓ No Obligation</span>
        <span>✓ Confidential</span>
      </div>
    </motion.form>
  )}
</AnimatePresence>

      </div>
    </div>
  </motion.div>
);
}