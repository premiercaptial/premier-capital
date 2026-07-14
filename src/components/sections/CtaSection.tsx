"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const suggestions = [
    { label: "Your financial goals", value: "My financial goals" },
    { label: "Current financial situation", value: "My current financial situation" },
    { label: "Questions", value: "Questions I'd like us to answer" },
    { label: "Loans", value: "Explore loan options, eligibility, and EMI details" },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleSuggestion = (value: string) => {
    let updated: string[];
    if (selected.includes(value)) {
      updated = selected.filter((item) => item !== value);
    } else {
      updated = [...selected, value];
    }
    setSelected(updated);
    const bullets = updated.map((item) => `• ${item}`);
    const customText = form.message
      .split("\n")
      .filter((line) => !suggestions.some((s) => line.trim() === `• ${s.value}`));
    setForm({
      ...form,
      message: [...bullets, "", ...customText].join("\n").trim(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setSelected([]);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#FAFAF8] section-pad border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top banner */}
        <div className="bg-[#0B1F3A] px-10 py-14 mb-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `radial-gradient(circle at 80% 50%, #C6A15B 0%, transparent 60%)` }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="eyebrow mb-3">Take the First Step</div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Your Financial Future
                <br />
                Starts with One{" "}
                <span className="italic text-[#C6A15B]">Conversation</span>
              </h2>
            </div>
            <div className="shrink-0">
              <p className="text-white/60 text-sm max-w-xs mb-6">
                Book a complimentary 30-minute consultation with Dilawar
                Dawoodani and gain clarity on your financial path forward.
              </p>
              <div className="flex gap-3">
                <a
  href="#"
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=info@premiercapitaladvisor.com",
      "_blank"
    )
  }
  className="inline-flex items-center gap-2 px-5 py-3 bg-[#C6A15B] text-[#0B1F3A] text-xs font-semibold tracking-widest uppercase hover:bg-white transition-all duration-300"
>
  <Mail size={12} /> Email Us
</a>
         <a
  href="https://wa.me/919833483002?text=Hello%20I%20want%20financial%20advice"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-3 bg-[#0B1F3A] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#C6A15B] transition-all duration-300"
>
  WhatsApp Us
</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form + contact info */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact info */}
          <div>
            <h3
              className="text-xl font-bold text-[#0B1F3A] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Get in Touch
            </h3>
            <div className="space-y-6 mb-10">
              {[
  {
    icon: MapPin,
    label: "Office",
    value: "Mumbai, Maharashtra, India",
    href: "https://maps.app.goo.gl/i8vYcodWtYpPH31h7",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9833483002",
    href: "tel:+919833483002",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@premiercapitaladvisor.com",
    href: "mailto:info@premiercapitaladvisor.com",
  },
].map(({ icon: Icon, label, value, href }) => (
  <a
    key={label}
    href={href}
    target={label === "Office" ? "_blank" : undefined}
    rel={label === "Office" ? "noopener noreferrer" : undefined}
    className="group flex gap-4 items-start rounded-xl p-3 -m-3 cursor-pointer"
  >
    <div className="w-9 h-9 bg-[#f5edd9] flex items-center justify-center shrink-0 mt-0.5">
      <Icon size={14} className="text-[#C6A15B]" />
    </div>

    <div>
      <div className="text-[0.65rem] font-semibold uppercase text-[#C6A15B]">
        {label}
      </div>
      <div className="text-sm text-[#0B1F3A]">
        {value}
      </div>
    </div>
  </a>
))} (
            </div>
            <div className="border-t border-[#E8E4DC] pt-8">
              <div className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568] mb-3">
                Business Hours
              </div>
              <p className="text-sm text-[#0B1F3A]">Monday – Saturday</p>
              <p className="text-sm text-[#4A5568]">24 hours</p>
            </div>
          </div>

          {/* Form area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">

              {/* Success state */}
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-white border border-[#E8E4DC] p-12 text-center h-full flex flex-col items-center justify-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-14 h-14 bg-[#f5edd9] flex items-center justify-center rounded-full mb-2"
                  >
                    <Send size={22} className="text-[#C6A15B]" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl font-bold text-[#0B1F3A]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Message Received
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-sm text-[#4A5568] max-w-xs"
                  >
                    Thank you for reaching out. Dilawar or a member of the Premier Capital
                    team will contact you within one business day.
                  </motion.p>
                </motion.div>

              ) : (

                // Form state
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E8E4DC] p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { name: "email", label: "Email Address (optional)", type: "email", placeholder: "your@email.com" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        className="border border-[#E8E4DC] px-4 py-3 text-sm text-[#0B1F3A] placeholder:text-[#4A5568]/40 focus:outline-none focus:border-[#C6A15B] transition-colors bg-[#FAFAF8]"
                        required
                      />
                    </div>
                  ))}

                  {/* Service select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568]">
                      I'm interested in (optional)
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="border border-[#E8E4DC] px-4 py-3 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#C6A15B] transition-colors bg-[#FAFAF8] appearance-none"
                    >
                      <option value="">Select a service</option>
                      {["Wealth Management", "stock picks", "Insurance Planning", "Loans Against Property / LRD","Construction Finance","Business Loans & Working Capital"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 flex flex-col gap-4">
                    <label className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#4A5568]">
                      How Can We Help You Today?
                    </label>
                    <p className="text-sm text-[#4A5568]">
                      Click any topic below to quickly start your message.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {suggestions.map((item) => {
                        const active = selected.includes(item.value);
                        return (
                          <button
                            type="button"
                            key={item.value}
                            onClick={() => toggleSuggestion(item.value)}
                            className={`rounded-full px-4 py-2 text-sm transition-all duration-200 border ${
                              active
                                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                                : "bg-[#FAFAF8] text-[#0B1F3A] border-[#E8E4DC] hover:border-[#C6A15B] hover:text-[#C6A15B]"
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                    <textarea
                      rows={6}
                      placeholder="Tell us a little about how we can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="border border-[#E8E4DC] px-4 py-4 text-sm text-[#0B1F3A] placeholder:text-[#4A5568]/40 focus:outline-none focus:border-[#C6A15B] transition-colors bg-[#FAFAF8] resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0B1F3A] text-white text-sm font-semibold tracking-[0.12em] uppercase hover:bg-[#C6A15B] transition-all duration-300 group"
                    >
                      Book My Consultation
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <p className="text-[0.65rem] text-[#4A5568] text-center mt-3">
                      Your information is kept strictly confidential and never shared with third parties.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
