"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Shield, ChevronRight } from "lucide-react";

// ─── tiny Google SVG icon ───────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  );
}

// ─── animated background lines (client-side only) ───────────────────────────
function BackgroundLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C6A15B" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// ─── trust metrics shown on left panel ──────────────────────────────────────
const metrics = [
  { value: "₹1000Cr+", label: "Assets under advisory" },
  { value: "1500+",    label: "Families served" },
  { value: "20 yrs",  label: "Advisory excellence" },
];

// ─── field component ────────────────────────────────────────────────────────
interface FieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  suffix?: React.ReactNode;
  error?: string;
}
function Field({ id, label, type, placeholder, value, onChange, autoComplete, suffix, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B7A8F]">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          autoComplete={autoComplete}
          className={`w-full bg-white/60 backdrop-blur-sm border px-4 py-3.5 text-sm text-[#0B1F3A] placeholder:text-[#9AACBE] focus:outline-none transition-all duration-200 pr-${suffix ? "11" : "4"} ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-[#D4C9B0] focus:border-[#C6A15B] focus:bg-white/80"
          }`}
        />
        {suffix && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{suffix}</div>
        )}
      </div>
      {error && <p className="text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

// ─── main page ──────────────────────────────────────────────────────────────
export default function LoginPage() {
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [remember, setRemember]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [errors, setErrors]       = useState<{ email?: string; password?: string }>({});
  const [mounted, setMounted]     = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  // fade-in on mount
  useEffect(() => { setMounted(true); }, []);

  // cycle through metrics
  useEffect(() => {
    const t = setInterval(() => setActiveMetric(m => (m + 1) % metrics.length), 3000);
    return () => clearInterval(t);
  }, []);

  function validate() {
    const e: typeof errors = {};
    if (!email)                        e.email    = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email address.";
    if (!password)                     e.password = "Password is required.";
    else if (password.length < 6)      e.password = "Password must be at least 6 characters.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row"
      style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease" }}
    >

      {/* ══════════════════════════════════════════
          LEFT PANEL — Luxury Brand Stage
      ══════════════════════════════════════════ */}
      <div className="relative hidden lg:flex lg:w-[48%] xl:w-[52%] flex-col overflow-hidden bg-[#060F1E]">

        {/* Layered background */}
        <BackgroundLines />

        {/* Radial gold glow — bottom left */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(198,161,91,0.18) 0%, transparent 70%)" }}
        />
        {/* Radial navy-blue glow — top right */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(11,31,58,0.9) 0%, transparent 70%)" }}
        />

        {/* Vertical gold rule */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C6A15B]/40 to-transparent" />

        {/* ── Top: logo ── */}
        <div className="relative z-10 p-10 xl:p-14">
          <Link href="/" className="group inline-flex flex-col leading-none">
            <span className="text-[1.1rem] font-bold tracking-[0.12em] text-white uppercase group-hover:text-[#C6A15B] transition-colors duration-300">
              Premier Capital
            </span>
            <span className="text-[0.58rem] font-semibold tracking-[0.32em] text-[#C6A15B] uppercase mt-0.5">
              Advisor
            </span>
          </Link>
        </div>

        {/* ── Centre: hero statement ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 xl:px-14 pb-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#C6A15B]" />
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#C6A15B]">
              Client Portal
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl xl:text-[2.8rem] font-bold leading-[1.08] text-white mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Your wealth,
            <br />
            <em className="not-italic text-[#C6A15B]">always</em>
            <br />
            in motion.
          </h1>

          <p className="text-sm text-white/55 leading-relaxed max-w-[340px] mb-12">
            One secure window into your entire financial world — portfolios,
            advisory reports, and direct access to your advisor.
          </p>

          {/* Animated cycling metric */}
          <div className="mb-12 h-16 relative overflow-hidden">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="absolute inset-0 flex items-center gap-4 transition-all duration-700"
                style={{
                  opacity:    i === activeMetric ? 1 : 0,
                  transform:  i === activeMetric ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <span
                  className="text-4xl font-bold text-white tabular-nums"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {m.value}
                </span>
                <span className="text-sm text-white/45 leading-tight max-w-[100px]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Metric dots */}
          <div className="flex gap-2 mb-14">
            {metrics.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveMetric(i)}
                className={`h-0.5 transition-all duration-400 ${i === activeMetric ? "w-6 bg-[#C6A15B]" : "w-2 bg-white/20"}`}
                aria-label={`Show metric ${i + 1}`}
              />
            ))}
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C6A15B]/10 border border-[#C6A15B]/25 flex items-center justify-center shrink-0">
              <Shield size={13} className="text-[#C6A15B]" />
            </div>
            <p className="text-[11px] text-white/35 leading-snug">
              256-bit SSL · SEBI-registered · Data never shared with third parties
            </p>
          </div>
        </div>

        {/* ── Bottom: footer note ── */}
        <div className="relative z-10 px-10 xl:px-14 pb-8">
          <p className="text-[10px] text-white/20">
            © {new Date().getFullYear()} Premier Capital . Investments are subject to market risks.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT PANEL — Login Form
      ══════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col bg-[#F5F3EE] relative overflow-hidden">

        {/* Subtle warm texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse at 70% 20%, rgba(198,161,91,0.08) 0%, transparent 60%),
                              radial-gradient(ellipse at 20% 80%, rgba(11,31,58,0.06) 0%, transparent 50%)`,
          }}
        />

        {/* Mobile logo */}
        <div className="lg:hidden relative z-10 p-6 border-b border-[#E2DDD4]">
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="text-base font-bold tracking-[0.1em] text-[#0B1F3A] uppercase">Premier Capital</span>
            <span className="text-[0.55rem] font-semibold tracking-[0.28em] text-[#C6A15B] uppercase">Advisor</span>
          </Link>
        </div>

        {/* ── Centred form area ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-[420px]">

            {/* Card — glassmorphism */}
            <div
              className="relative rounded-none bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_48px_rgba(11,31,58,0.10)] p-8 xl:p-10"
              style={{ boxShadow: "0 2px 0 0 #C6A15B, 0 8px 48px rgba(11,31,58,0.10)" }}
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C6A15B] via-[#E8D49A] to-[#C6A15B]" />

              {/* Heading */}
              <div className="mb-8">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C6A15B] mb-2">
                  Secure Sign-In
                </p>
                <h2
                  className="text-2xl xl:text-[1.7rem] font-bold text-[#0B1F3A] leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Welcome back.
                </h2>
                <p className="text-sm text-[#6B7A8F] mt-1.5">
                  Access your financial dashboard.
                </p>
              </div>

              {/* ── Form ── */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={v => { setEmail(v); setErrors(prev => ({ ...prev, email: undefined })); }}
                  autoComplete="email"
                  error={errors.email}
                />

                <Field
                  id="password"
                  label="Password"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={v => { setPassword(v); setErrors(prev => ({ ...prev, password: undefined })); }}
                  autoComplete="current-password"
                  error={errors.password}
                  suffix={
                    <button
                      type="button"
                      onClick={() => setShowPass(s => !s)}
                      className="text-[#9AACBE] hover:text-[#C6A15B] transition-colors"
                      aria-label={showPass ? "Hide password" : "Show password"}
                    >
                      {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  }
                />

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 border transition-all duration-200 flex items-center justify-center ${remember ? "bg-[#0B1F3A] border-[#0B1F3A]" : "border-[#C4B99A] bg-white/60 group-hover:border-[#C6A15B]"}`}>
                        {remember && (
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden>
                            <path d="M1 3L3.5 5.5L8 1" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#6B7A8F] group-hover:text-[#0B1F3A] transition-colors">
                      Keep me signed in
                    </span>
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#C6A15B] hover:text-[#0B1F3A] transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full mt-2 flex items-center justify-center gap-2.5 px-6 py-4 bg-[#0B1F3A] text-white text-[0.78rem] font-semibold tracking-[0.14em] uppercase overflow-hidden group transition-all duration-300 hover:bg-[#162d52] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Gold shimmer on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A15B]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                      <span>Signing in…</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Portal</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    </>
                  )}
                </button>
              </form>

              {/* ── Divider ── */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-[#E2DDD4]" />
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#B0A898]">or</span>
                <div className="flex-1 h-px bg-[#E2DDD4]" />
              </div>

              {/* ── Google SSO ── */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-5 py-3.5 bg-white/80 border border-[#E2DDD4] text-[#0B1F3A] text-[0.78rem] font-medium hover:border-[#C6A15B] hover:bg-white transition-all duration-200 group"
              >
                <GoogleIcon />
                <span className="group-hover:text-[#0B1F3A] transition-colors">
                  Continue with Google
                </span>
              </button>

              {/* ── Request access ── */}
              <div className="mt-7 pt-6 border-t border-[#E8E4DA] text-center">
                <p className="text-xs text-[#9AACBE] mb-2">Not a client yet?</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#C6A15B] transition-colors group"
                >
                  Request portal access
                  <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ── Below-card security note ── */}
            <div className="flex items-start gap-2.5 mt-6 px-1">
              <Shield size={12} className="text-[#B0A898] shrink-0 mt-0.5" />
              <p className="text-[10px] text-[#B0A898] leading-relaxed">
                Your session is protected by 256-bit TLS encryption. Premier Capital  will
                never request your password via phone or email.
              </p>
            </div>

            {/* ── Mobile: back link ── */}
            <div className="lg:hidden mt-6 text-center">
              <Link href="/" className="text-xs text-[#9AACBE] hover:text-[#C6A15B] transition-colors">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
