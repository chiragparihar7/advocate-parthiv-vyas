
import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactProcess from "@/components/contact/ContactProcess";
import ContactDisclaimer from "@/components/contact/ContactDisclaimer";
import ContactCTA from "@/components/contact/ContactCTA";

const SITE_URL = "https://vpadvocates.in";

const PAGE_TITLE =
  "Contact Advocate Parthiv Vyas | Ahmedabad, Gujarat";

const PAGE_DESCRIPTION =
  "Contact Advocate Parthiv Vyas at V&P Advocates and Notary in Ahmedabad for legal enquiries, appointment requests and office location details.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "contact Advocate Parthiv Vyas",
    "V&P Advocates and Notary contact",
    "advocate in Ahmedabad contact",
    "lawyer in Ahmedabad contact",
    "legal enquiry in Ahmedabad",
    "legal consultation enquiry Ahmedabad",
    "advocate in Naroda Ahmedabad",
    "lawyer near Hanspura Ahmedabad",
    "notary services Ahmedabad",
    "V&P Advocates Ahmedabad address",
    "Advocate Parthiv Vyas phone number",
    "legal services in Ahmedabad Gujarat",
  ],

  alternates: {
    canonical: `${SITE_URL}/contact`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/contact`,
    siteName: "V&P Advocates and Notary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/footerlogo1.png`,
        alt: "V&P Advocates and Notary",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/footerlogo1.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F3]">
      <ContactHero />

      <ContactIntro />

      <section className="relative bg-[#FAF8F3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <ContactInformation />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactLocation />

      <ContactProcess />

      <ContactDisclaimer />

      <ContactCTA />
    </main>
  );
}
