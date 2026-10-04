import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactProcess from "@/components/contact/ContactProcess";
import ContactDisclaimer from "@/components/contact/ContactDisclaimer";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Advocate Parthiv Vyas | Ahmedabad",
  description:
    "Contact Advocate Parthiv Vyas for professional enquiries, appointments and general information regarding legal matters in Ahmedabad, Gujarat.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Advocate Parthiv Vyas | Ahmedabad",
    description:
      "Get in touch for professional enquiries, appointments and general information regarding legal matters.",
    url: "/contact",
    type: "website",
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