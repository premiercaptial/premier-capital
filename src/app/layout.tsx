import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://premiercapitaladvisor.com"),

  title: {
    default:
      "Premier Capital Advisor | Business Loans, Home Loans & Financial Advisory in Mumbai",
    template: "%s | Premier Capital Advisor",
  },

  description:
    "Premier Capital Advisor helps individuals and businesses secure business loans, home loans, MSME finance, working capital solutions, and corporate funding across Mumbai.",

  keywords: [
    "Business Loan Mumbai",
    "Home Loan Mumbai",
    "MSME Loan",
    "Working Capital Loan",
    "Financial Advisor Mumbai",
    "Premier Capital Advisor",
  ],

  openGraph: {
    title: "Premier Capital Advisor",
    description:
      "Business Loans, Home Loans, MSME Finance & Financial Advisory in Mumbai.",
    url: "https://premiercapitaladvisor.com",
    siteName: "Premier Capital Advisor",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Premier Capital Advisor",
    description:
      "Business Loans, Home Loans, MSME Finance & Financial Advisory in Mumbai.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <WhatsAppButton />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Premier Capital Advisor",
              url: "https://premiercapitaladvisor.com",
              logo: "https://premiercapitaladvisor.com/logo.png",
              description:
                "Premier Capital Advisor helps individuals and businesses secure business loans, home loans, MSME finance, and corporate funding solutions across Mumbai.",
              areaServed: "India",
              priceRange: "$$",
              serviceType: [
                "Business Loans",
                "Working Capital Loans",
                "Home Loans",
                "MSME Loans",
                "Corporate Funding",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}