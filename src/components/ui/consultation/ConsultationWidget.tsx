"use client";

import { useState } from "react";
import FloatingPill from "./FloatingPill";
import ConsultationCard from "./ConsultationCard";
import { useConsultationTrigger } from "./useConsultationTrigger";

export default function ConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-opens once per session on exit intent or 50% scroll depth.
  // Won't fire again if the user already opened it manually first.
  useConsultationTrigger({
    onTrigger: () => setIsOpen(true),
    enabled: !isOpen,
  });

  return (
    <>
      {isOpen ? (
        <ConsultationCard
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <FloatingPill
          onOpen={() => setIsOpen(true)}
        />
      )}
    </>
  );
}
