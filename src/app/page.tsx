import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import FounderSection from "@/components/sections/FounderSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyPCASection from "@/components/sections/WhyPCASection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CtaSection from "@/components/sections/CtaSection";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import InsightsSection from "@/components/InsightsSection";

import ConsultationWidget from "@/components/ui/consultation";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      
      <Navbar />
      <ScrollProgress />

      <HeroSection />
      <TrustSection />

      {/* ABOUT */}
      <FounderSection />

      {/* SERVICES */}
      <ServicesSection />

      <WhyPCASection />
      <StatsSection />
      <TestimonialsSection />

      {/* INSIGHTS */}
      <InsightsSection />

      <FAQSection />

      {/* CONTACT */}
      <CtaSection />

      <ScrollToTop />
      <Footer />

      {/* Existing consultation widget */}
      <ConsultationWidget />
    </main>
  );
}