"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Calculators", href: "/tools", isPage: true },
 { label: "Insights", href: "#insights"},
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);

    const scrollPosition = window.scrollY + 150;

    const sections = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => document.getElementById(link.href.replace("#", "")));

    let current = "home";

    sections.forEach((section) => {
      if (!section) return;

      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        current = section.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E4DC]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
  href="#home"
  className="flex items-center shrink-0 mr-10"
>
  <Image
    src="/Premier cap logo.png"
    alt="Premier Capital Advisor"
    width={170}
    height={55}
    priority
    className="h-10 w-auto"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
  {navLinks.map((link) => {
    const isPage = (link as any).isPage;
    const isComingSoon = (link as any).comingSoon;

    const isActive =
      link.href.startsWith("#") &&
      activeSection === link.href.replace("#", "");

    return (
      <div key={link.label} className="relative group">

        {/* PAGE LINKS */}
        {isPage ? (
          <Link
            href={link.href}
            className="relative inline-block text-[0.8rem] font-medium tracking-wide uppercase transition-colors duration-300 text-[#0B1F3A] hover:text-[#C6A15B]"
          >
            {link.label}

          <motion.span
  initial={{ scaleX: 0 }}
  whileHover={{ scaleX: 1 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="absolute left-0 -bottom-2 h-[2px] w-full origin-left bg-[#C6A15B]"
/>
          </Link>
        ) : !isComingSoon ? (

          /* NORMAL LINKS */

         <a
  href={link.href}
  onClick={(e) => {
    e.preventDefault();

    const element = document.querySelector(link.href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className={`relative inline-block text-[0.8rem] font-medium tracking-wide uppercase transition-colors duration-300 ${
    isActive
      ? "text-[#C6A15B]"
      : "text-[#0B1F3A] hover:text-[#C6A15B]"
  }`}
>
  {link.label}

  <motion.span
    initial={{ scaleX: 0 }}
    animate={{ scaleX: isActive ? 1 : 0 }}
    whileHover={{ scaleX: 1 }}
    transition={{
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute left-0 -bottom-2 h-[2px] w-full origin-left bg-[#C6A15B]"
  />
</a>
        ) : (

          /* COMING SOON */

          <span className="relative inline-block cursor-default text-[0.8rem] font-medium tracking-wide uppercase text-[#0B1F3A] transition-colors duration-300 group-hover:text-[#C6A15B]">

            {link.label}

            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-full
                bg-[#C6A15B]
                origin-left
                scale-x-0
                transition-transform
                duration-500
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:scale-x-100
              "
            />

            <span className="absolute left-1/2 top-6 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#C6A15B] px-2 py-1 text-[0.55rem] text-[#0B1F3A] group-hover:block">
              Coming Soon
            </span>

          </span>

        )}
      </div>
    );
  })}
</nav>
          {/* CTA */}
          <div className="flex items-center gap-3">

            <Link
              href="/login"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#C6A15B] text-[#C6A15B] text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#C6A15B] hover:text-white"
            >
              <LogIn size={13} />
              Client Login
            </Link>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                const element = document.querySelector("#contact");

                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="
                hidden
                lg:inline-flex
                items-center
                px-6
                py-3
                rounded-md
                bg-[#0B1F3A]
                text-white
                text-[0.75rem]
                font-semibold
                tracking-[0.12em]
                uppercase
                shadow-lg
                transition-all
                duration-300
                hover:bg-[#C6A15B]
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              Free Book Consultation
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#0B1F3A]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>
      </div>
            {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-[#E8E4DC] bg-white transition-all duration-300 ${
          mobileOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">

          {navLinks.map((link) => {
            const isComingSoon = (link as any).comingSoon;
            const isPage = (link as any).isPage;

            if (isPage) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium uppercase tracking-wide text-[#0B1F3A]"
                >
                  {link.label}
                </Link>
              );
            }

            if (isComingSoon) {
              return (
                <div key={link.label}>
                  <span className="block text-sm font-medium uppercase tracking-wide text-[#0B1F3A] opacity-60">
                    {link.label}
                  </span>

                  <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#C6A15B]">
                    Coming Soon
                  </span>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);

                  const element = document.querySelector(link.href);

                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="text-sm font-medium uppercase tracking-wide text-[#0B1F3A]"
              >
                {link.label}
              </a>
            );
          })}

          <div className="border-t border-[#E8E4DC] pt-5 flex flex-col gap-3">

            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 border border-[#C6A15B] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#C6A15B] transition-all duration-300 hover:bg-[#C6A15B] hover:text-white"
            >
              <LogIn size={13} />
              Client Login
            </Link>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);

                const element = document.querySelector("#contact");

                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="inline-flex items-center justify-center bg-[#0B1F3A] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#C6A15B]"
            >
              Book Consultation
            </a>

          </div>
        </div>
      </div>
          </header>
  );
}