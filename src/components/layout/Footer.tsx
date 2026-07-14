"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const services = [
  "Wealth Management",
  "Investment Solutions",
  "Mutual Funds",
  "Insurance Planning",
  "Business Loans and working capital",
  "Construction Finance",
];

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Insight", href: "/#insight" },
  { label: "Book Consultation", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="text-xl font-bold tracking-tight">
                PREMIER CAPITAL
              </div>
              <div className="text-[0.6rem] font-semibold tracking-[0.25em] text-[#C6A15B] uppercase">
                Advisor
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Empowering individuals, entrepreneurs, NRIs, and businesses to
              achieve lasting financial prosperity through trusted advisory and
              personalized wealth solutions.
            </p>

            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dilawar-dawoodani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#C6A15B] mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="/#services"
                    className="text-sm text-white/60 hover:text-[#C6A15B] transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
                    {/* Quick Links */}
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#C6A15B] mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-[#C6A15B] transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#C6A15B] mb-5">
                Disclosures
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-white/60 hover:text-[#C6A15B] transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-sm text-white/60 hover:text-[#C6A15B] transition-colors duration-300"
                  >
                    Terms of Use
                  </Link>
                </li>

                <li>
                  <Link
                    href="/sebi-registration"
                    className="text-sm text-white/60 hover:text-[#C6A15B] transition-colors duration-300"
                  >
                    SEBI Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#C6A15B] mb-5">
              Get in Touch
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="text-[#C6A15B] mt-0.5 shrink-0" />

                <a
                  href="https://maps.app.goo.gl/42FajN1Da74UE16NA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 leading-relaxed hover:text-[#C6A15B] transition-colors"
                >
                  Mumbai, Maharashtra, India
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-[#C6A15B] shrink-0" />

                <a
                  href="tel:+919833483002"
                  className="text-sm text-white/60 hover:text-[#C6A15B] transition-colors"
                >
                  +91 9833483002
                </a>
              </li>

             <li className="flex gap-3 items-center">
  <Mail size={14} className="text-[#C6A15B] shrink-0" />

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@premiercapitaladvisor.com",
        "_blank"
      );
    }}
    className="hover:text-[#C6A15B] transition-colors"
  >
    info@premiercapitaladvisor.com
  </a>
</li>
            </ul>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center px-5 py-2.5 border border-[#C6A15B] text-[#C6A15B] text-xs font-semibold tracking-widest uppercase hover:bg-[#C6A15B] hover:text-[#0B1F3A] transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
                  </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} Premier Capital. All rights reserved.
          </p>

          <p className="text-xs text-white/30 text-center">
            Investments are subject to market risks. Please read all offer
            documents carefully.
          </p>

          <div className="border-t border-[#E8E4DC] mt-10 pt-6 text-center">
  <p className="text-xs text-[#4A5568]/70">
    © 2026 Premier Capital. All rights reserved.
  </p>

  <p className="mt-2 text-xs text-[#4A5568]/60">
    Designed &amp; Developed by{" "}
    <a
      href="https://yourportfolio.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C6A15B] hover:underline transition-colors"
    >
      Sahil Bhoir
    </a>
  </p>
</div>
        </div>
      </div>
    </footer>
  );
}