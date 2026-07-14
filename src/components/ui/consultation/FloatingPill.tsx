"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const MODAL_SHOWN_KEY = "modal_shown";
const USER_INTERACTED_KEY = "user_interacted";
const ONE_MINUTE = 60000;
const EXIT_INTENT_DELAY = 20000; // 20s minimum engagement

type FloatingPillProps = {
  onOpen?: () => void;
};

export default function FloatingPill({ onOpen }: FloatingPillProps)  {
  const [showModal, setShowModal] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitIntentTriggered = useRef(false);

  // 🔒 MASTER CHECK (blocks everything if user already converted)
  const isBlocked = () => {
    if (typeof window === "undefined") return true;

    const interacted = sessionStorage.getItem(USER_INTERACTED_KEY);
    return !!interacted;
  };

  const openModal = useCallback(() => {
    if (isBlocked()) return;

    setShowModal(true);
    sessionStorage.setItem(MODAL_SHOWN_KEY, "true");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(USER_INTERACTED_KEY)) return;

    // prevent duplicate modal in same session
    if (sessionStorage.getItem(MODAL_SHOWN_KEY)) return;

    // 🟡 1 MIN TIMER
    timerRef.current = setTimeout(() => {
      openModal();
    }, ONE_MINUTE);

    // 🟠 EXIT INTENT (heavily restricted)
    const handleMouseLeave = (e: MouseEvent) => {
      if (isBlocked()) return;

      if (exitIntentTriggered.current) return;

      const timeOnPage = Date.now() - performance.timeOrigin;
      if (timeOnPage < EXIT_INTENT_DELAY) return;

      if (e.clientY <= 0) {
        exitIntentTriggered.current = true;
        openModal();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [openModal]);

  // ✅ CALL THIS ON CTA / CONTACT CLICK (IMPORTANT)
  const markUserInteracted = () => {
    sessionStorage.setItem(USER_INTERACTED_KEY, "true");
    setShowModal(false);
  };

  return (
    <>
      {/* Floating CTA Button */}
     <button
  onClick={() => {
    onOpen?.();
    setShowModal(true);
  }}
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0B1F3A] px-5 py-3 text-white shadow-2xl transition hover:scale-105"
>
        <span className="h-2.5 w-2.5 rounded-full bg-[#C6A15B] animate-pulse" />
        <span className="font-medium">Need Financial Expertise?</span>
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-[#FAFAF8] p-8 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-[#0B1F3A]/60 hover:text-[#0B1F3A]"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">
              Talk to a Financial Expert
            </h3>

            <p className="text-[#0B1F3A]/70 mb-6">
              Get personalized advice on wealth management, loans, and investments.
            </p>

            {/* CTA */}
            <a
              href="/#contact"
              onClick={markUserInteracted}
              className="block w-full rounded-full bg-[#C6A15B] px-5 py-3 text-center font-medium text-white transition hover:opacity-90"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}