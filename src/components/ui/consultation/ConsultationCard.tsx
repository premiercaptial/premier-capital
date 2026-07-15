"use client";

import { BRAND, TRUST_ITEMS } from "./constants";
import Link from "next/link";

interface ConsultationCardProps {
  onClose: () => void;
}

export default function ConsultationCard({
  onClose,
}: ConsultationCardProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] rounded-3xl border border-[#C6A15B]/20 bg-white shadow-2xl">

      {/* Gold top line */}
      <div className="h-1 rounded-t-3xl bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="p-7">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              Private Consultation
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A]">
              {BRAND.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {BRAND.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xl"
          >
            ×
          </button>

        </div>

        <div className="my-6 h-px bg-slate-200" />

        <h3 className="text-2xl font-semibold text-[#0B1F3A]">
          Planning Your Financial Future?
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Speak with our financial specialists for tailored wealth,
          investment, insurance and lending solutions.
        </p>

        <div className="mt-6 space-y-3">

          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-[#C6A15B]" />

              <span className="text-sm text-slate-700">
                {item}
              </span>
            </div>
          ))}

        </div>

        <Link
  href="/#contact"
  onClick={onClose}
  className="mt-8 flex w-full items-center justify-center rounded-2xl bg-[#0B1F3A] py-4 font-semibold text-white transition hover:bg-[#14345f]"
>
  Schedule Consultation
</Link>

        <button
          onClick={onClose}
          className="mt-3 w-full rounded-xl py-3 text-sm text-slate-500 hover:bg-slate-100"
        >
          Maybe Later
        </button>

      </div>

    </div>
  );
}