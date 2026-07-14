export default function SebiRegistration() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#07192F]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#07192F]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#C6A15B_0%,transparent_35%)]" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.35em] text-[#C6A15B] text-sm">
            Premier Capital
          </p>

          <h1
            className="text-5xl font-bold text-white mt-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            SEBI Registration & Disclosures
          </h1>

          <p className="text-gray-300 mt-4">
            Transparency. Compliance. Investor Protection.
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-gray-200 leading-8">

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              About Premier Capital
            </h2>

            <p>
              Premier Capital is committed to maintaining the highest standards
              of ethics, transparency, and regulatory compliance while serving
              clients across investment, wealth management, insurance, and loan
              solutions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              Registration Details
            </h2>

            <div className="space-y-3">

              <p>
                <strong>Firm Name:</strong> Premier Capital Advisor
              </p>

              <p>
                <strong>SEBI Registration Number:</strong> (BSE/NSE/MCX/NCDEX): INZ000158836
              </p>

              <p>
                <strong>Validity:</strong> To be updated
              </p>

              <p>
                <strong>Principal Officer:</strong> To be updated
              </p>

              <p>
                <strong>Registered Office:</strong> To be updated
              </p>

            </div>

          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              Important Disclosure
            </h2>

            <p>
              Investments in securities are subject to market risks. Read all
              related documents carefully before investing. Past performance
              does not guarantee future returns.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              Third-Party Products
            </h2>

            <p>
              Certain products and services available through Premier Capital
              may be offered by regulated third-party institutions including
              banks, NBFCs, insurers, mutual fund houses, and registered
              intermediaries.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              Grievance Redressal
            </h2>

            <p>
              Clients who have concerns or complaints may contact Premier
              Capital through the Contact page. We are committed to resolving
              grievances promptly and fairly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              Regulatory Resources
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>SEBI Investor Portal</li>
              <li>SCORES Complaint Portal</li>
              <li>Investor Awareness Resources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#C6A15B] mb-4">
              Disclaimer
            </h2>

            <p>
              The information available on this website is intended solely for
              educational and informational purposes and should not be treated
              as personalized investment advice. Please consult a qualified
              financial professional before making investment decisions.
            </p>
          </section>

        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex px-8 py-4 bg-[#C6A15B] text-[#07192F] font-semibold rounded-lg hover:scale-105 transition"
          >
            ← Back to Home
          </a>
        </div>

      </div>

    </main>
  );
}