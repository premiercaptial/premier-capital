


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Premier Capital Advisors",
  description:
    "Read the Privacy Policy of Premier Capital Advisors to understand how we collect, use, protect and process your personal information.",
};

const sections = [
  "Introduction",
  "Information We Collect",
  "How We Collect Information",
  "How We Use Your Information",
  "Sharing of Information",
  "Data Security",
  "Cookies & Analytics",
  "Data Retention",
  "Your Rights",
  "Third-Party Links",
  "SEBI Regulatory Compliance",
  "Changes to this Privacy Policy",
  "Contact Us",
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">

      {/* Hero */}
      <section className="bg-[#07192F] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="uppercase tracking-[0.3em] text-[#C8A45D] text-sm font-semibold">
            Legal
          </p>

          <h1
            className="mt-4 text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-8">
            At Premier Capital Advisors, protecting your privacy is a
            responsibility we take seriously. This Privacy Policy explains how
            we collect, use, store and safeguard your personal information when
            you interact with our website or our advisory services.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm">
            Last Updated: June 30, 2026
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">

          {/* TOC */}

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

          {/* Content */}

          <article className="lg:col-span-3">

            <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8 md:p-12 space-y-14">

              <section id="section-1">
                <h2 className="text-3xl font-bold text-[#07192F]">
                  1. Introduction
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Premier Capital Advisors ("Company", "we", "our" or "us")
                  respects your privacy and is committed to protecting the
                  personal information you share with us. This Privacy Policy
                  explains our practices relating to the collection, use,
                  storage and protection of information obtained through our
                  website, consultations, enquiry forms and other interactions.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  By accessing this website or providing your information, you
                  acknowledge that you have read and understood this Privacy
                  Policy.
                </p>
              </section>

              <section id="section-2">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  2. Information We Collect
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Depending on your interaction with us, we may collect:
                </p>

                <ul className="mt-6 space-y-3 list-disc pl-6 text-slate-700 leading-8">

                  <li>Full Name</li>

                  <li>Email Address</li>

                  <li>Mobile Number</li>

                  <li>City and State</li>

                  <li>Financial goals and enquiry details</li>

                  <li>Loan or investment related requirements</li>

                  <li>Documents voluntarily submitted by you</li>

                  <li>Website usage information including browser and device data</li>

                  <li>IP address and cookies where applicable</li>

                </ul>

              </section>

              <section id="section-3">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  3. How We Collect Information
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Information may be collected when you submit an enquiry,
                  schedule a consultation, communicate with us by email or
                  telephone, subscribe to updates, complete forms on our
                  website, or otherwise interact with our services.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  We may also collect certain technical information
                  automatically using cookies, analytics tools and server logs
                  to improve website performance and user experience.
                </p>

              </section>
                            <section id="section-4">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  4. How We Use Your Information
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  We use your personal information only for legitimate business
                  and regulatory purposes. This may include:
                </p>

                <ul className="mt-6 space-y-3 list-disc pl-6 text-slate-700 leading-8">
                  <li>Responding to your enquiries and requests.</li>
                  <li>Scheduling consultations with our advisors.</li>
                  <li>Providing investment, insurance, loan or wealth management related assistance.</li>
                  <li>Improving our website, services and customer experience.</li>
                  <li>Maintaining records required under applicable laws.</li>
                  <li>Communicating important updates about our services.</li>
                  <li>Preventing fraud, misuse and unauthorized activities.</li>
                </ul>

              </section>

              <section id="section-5">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  5. Sharing of Information
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  We do not sell, rent or trade your personal information.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  Information may be shared only where necessary with trusted
                  technology providers, banking partners, insurance companies,
                  mutual fund AMCs, regulatory authorities or government bodies
                  where legally required or for providing the services requested
                  by you.
                </p>

              </section>

              <section id="section-6">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  6. Data Security
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  We maintain reasonable administrative, technical and physical
                  safeguards to protect your information against unauthorized
                  access, alteration, disclosure or destruction.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  While we strive to protect your information, no method of
                  electronic transmission or storage is completely secure.
                  Accordingly, we cannot guarantee absolute security.
                </p>

              </section>

              <section id="section-7">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  7. Cookies & Analytics
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Our website may use cookies and similar technologies to
                  enhance your browsing experience, remember preferences,
                  measure website performance and understand visitor behaviour.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  You may disable cookies through your browser settings,
                  although certain website features may not function correctly.
                </p>

              </section>

              <section id="section-8">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  8. Data Retention
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Personal information will be retained only for as long as
                  necessary to fulfil the purposes described in this Privacy
                  Policy, comply with regulatory obligations, resolve disputes
                  and enforce our agreements.
                </p>

              </section>

              <section id="section-9">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  9. Your Rights
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Subject to applicable laws, you may request access to your
                  personal information, correction of inaccurate information,
                  deletion where legally permissible, or withdrawal of consent
                  for specific processing activities.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  Such requests may be made by contacting us using the details
                  provided at the end of this Privacy Policy.
                </p>

              </section>
                            <section id="section-10">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  10. Third-Party Links
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Our website may contain links to third-party websites,
                  applications or services for your convenience. We are not
                  responsible for the privacy practices, security or content of
                  those external websites. We encourage you to review their
                  respective privacy policies before sharing any personal
                  information.
                </p>

              </section>

              <section id="section-11">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  11. SEBI Regulatory Compliance
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  Premier Capital Advisors is committed to conducting its
                  business in accordance with applicable laws, regulations and
                  guidelines issued by the Securities and Exchange Board of
                  India (SEBI) and other regulatory authorities, wherever
                  applicable.
                </p>

                <p className="mt-5 text-slate-700 leading-8">
                  Information collected through this website may be maintained
                  to satisfy regulatory, compliance, audit and record-keeping
                  obligations under applicable Indian laws.
                </p>

                <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5">
                  <p className="text-[#07192F]">
                    <strong>SEBI Registration Number:</strong>{" "}
                    [Insert SEBI Registration Number]
                  </p>
                </div>

              </section>

              <section id="section-12">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  12. Changes to this Privacy Policy
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, legal requirements or regulatory
                  obligations. Any updates will be posted on this page together
                  with the revised "Last Updated" date.
                </p>

              </section>

              <section id="section-13">

                <h2 className="text-3xl font-bold text-[#07192F]">
                  13. Contact Us
                </h2>

                <p className="mt-6 text-slate-700 leading-8">
                  If you have any questions regarding this Privacy Policy or the
                  manner in which your personal information is processed, please
                  contact us using the details below.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-50 border border-slate-200 p-8">
                  <div className="space-y-4 text-slate-700">
                    <p>
                      <strong>Premier Capital Advisors</strong>
                    </p>

                    <p>
                      📍 Registered Office: [Registered Office Address]
                    </p>

                    <p>
                      📧 Email: [Official Email Address]
                    </p>

                    <p>
                      📞 Phone: [Official Contact Number]
                    </p>
                  </div>
                </div>

              </section>

            </div>

            {/* CTA */}

            <div className="mt-12 rounded-[32px] bg-[#07192F] text-white p-10 md:p-14">

              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Need Assistance?
              </h2>

              <p className="mt-5 text-slate-300 max-w-2xl leading-8">
                If you have questions regarding our privacy practices or would
                like to know more about our financial services, our team is here
                to help.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="/#contact"
                  className="rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-[#07192F] transition hover:opacity-90"
                >
                  Contact Us
                </a>

               <a
  href="/#contact"
  className="rounded-full border border-white/30 px-7 py-3 font-semibold transition hover:bg-white hover:text-[#07192F]"
>
  Book Consultation
</a>
              </div>

            </div>

          </article>

        </div>
      </section>
      </main>
  );
}