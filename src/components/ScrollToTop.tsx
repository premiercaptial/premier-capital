"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 350); // ✅ changed here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] group">
      
      <button
        onClick={scrollToTop}
        className="
          w-12 h-12
          flex items-center justify-center
          rounded-full
          bg-[#C8A45D]/80
          text-[#07192F]
          shadow-lg

          backdrop-blur-md
          opacity-70

          hover:opacity-100
          hover:scale-110
          hover:shadow-[0_0_20px_rgba(200,164,93,0.6)]

          transition-all duration-300
        "
      >
        <ArrowUp size={20} className="block" />
      </button>

      {/* Tooltip */}
      <span className="
        absolute bottom-full mb-2
        left-1/2 -translate-x-1/2
        text-xs
        bg-[#07192F]
        text-white
        px-3 py-1
        rounded-md

        opacity-0 group-hover:opacity-100
        transition
        whitespace-nowrap
      ">
        Scroll to top
      </span>
    </div>
  );
}