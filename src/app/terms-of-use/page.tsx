import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Premier Capital Advisors",
  description:
    "Read the Terms of Use of Premier Capital Advisors governing the use of our website, services, and advisory offerings.",
};

const sections = [
  "Introduction",
  "Eligibility",
  "Use of Website",
  "Financial Disclaimer",
  "No Investment Advice Guarantee",
  "User Responsibilities",
  "Intellectual Property",
  "Third-Party Services",
  "Limitation of Liability",
  "Indemnification",
  "SEBI Compliance",
  "Modifications to Terms",
  "Governing Law",
  "Contact Information",
];

export default function TermsOfUse() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">

      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8A45D] hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HERO */}
      <section className="bg-[#07192F] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

          <p className="uppercase tracking-[0.3em] text-[#C8A45D] text-sm font-semibold">
            Legal
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Terms of Use
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-8">
            These Terms of Use govern your access and use of Premier Capital Advisors
            website and services. By using our platform, you agree to these terms.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm">
            Last Updated: June 30, 2026
          </div>

        </div>
      </section>

      {/* BODY WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">

          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

              <h2 className="font-bold text-xl text-[#07192F]">
                Contents
              </h2>

              <div className="mt-6 space-y-3">
                {sections.map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index + 1}`}
                    className="block text-slate-600 hover:text-[#07192F] transition"
                  >
                    {index + 1}. {item}
                  </a>
                ))}
              </div>

            </div>
          </aside>

                    {/* CONTENT */}
          <article className="lg:col-span-3">

            <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8 md:p-12 space-y-14">

              <section id="section-1">
                <h2 className="text-3xl font-bold text-[#07192F]">1. Introduction</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  These Terms of Use apply to your access and use of the website
                  and services provided by Premier Capital Advisors.
                </p>
              </section>

              <section id="section-2">
                <h2 className="text-3xl font-bold text-[#07192F]">2. Eligibility</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  You must be legally capable of entering into binding agreements
                  under applicable laws to use our services.
                </p>
              </section>

              <section id="section-3">
                <h2 className="text-3xl font-bold text-[#07192F]">3. Use of Website</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  You agree to use this website only for lawful purposes and not
                  for any unauthorized or harmful activities.
                </p>
              </section>

              <section id="section-4">
                <h2 className="text-3xl font-bold text-[#07192F]">4. Financial Disclaimer</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  All information provided is for informational purposes only and
                  should not be considered as guaranteed financial advice.
                </p>
              </section>

              <section id="section-5">
                <h2 className="text-3xl font-bold text-[#07192F]">5. No Investment Guarantee</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  Investments are subject to market risks and past performance
                  does not guarantee future results.
                </p>
              </section>

              <section id="section-6">
                <h2 className="text-3xl font-bold text-[#07192F]">6. User Responsibilities</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  You are responsible for providing accurate information and
                  maintaining confidentiality of your data.
                </p>
              </section>

              <section id="section-7">
                <h2 className="text-3xl font-bold text-[#07192F]">7. Intellectual Property</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  All content on this website is owned by Premier Capital Advisors
                  and protected under applicable laws.
                </p>
              </section>

              <section id="section-8">
                <h2 className="text-3xl font-bold text-[#07192F]">8. Third-Party Services</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  We may use third-party services, but we are not responsible for
                  their content or policies.
                </p>
              </section>

              <section id="section-9">
                <h2 className="text-3xl font-bold text-[#07192F]">9. Limitation of Liability</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  We are not liable for any losses arising from the use of our
                  website or services.
                </p>
              </section>

              <section id="section-10">
                <h2 className="text-3xl font-bold text-[#07192F]">10. Indemnification</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  You agree to indemnify us against any claims arising from misuse
                  of our services.
                </p>
              </section>

              <section id="section-11">
                <h2 className="text-3xl font-bold text-[#07192F]">11. SEBI Compliance</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  We comply with SEBI regulations where applicable in our advisory
                  services.
                </p>
              </section>

              <section id="section-12">
                <h2 className="text-3xl font-bold text-[#07192F]">12. Modifications</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  We may update these Terms at any time without prior notice.
                </p>
              </section>

              <section id="section-13">
                <h2 className="text-3xl font-bold text-[#07192F]">13. Governing Law</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  These Terms are governed by the laws of India.
                </p>
              </section>

              <section id="section-14">
                <h2 className="text-3xl font-bold text-[#07192F]">14. Contact Information</h2>
                <p className="mt-6 text-slate-700 leading-8">
                  For any queries, contact Premier Capital Advisors via the contact
                  section on our website.
                </p>
              </section>

            </div>

          </article>
        </div>
      </section>
      {/* BACK TO HOME */}
{/* BACK TO HOME */}
<div className="w-full flex justify-center mt-[30px] mb-12">
  <Link
    href="/"
    className="inline-flex items-center justify-center rounded-full bg-[#C8A45D] px-7 py-3 text-sm font-semibold text-[#07192F] hover:opacity-90 transition"
  >
    ← Back to Home
  </Link>
</div>

    </main>
  );
}