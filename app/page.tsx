import type { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import ProfessionalIntro from "@/components/Home/ProfessionalIntro";
import PracticeAreas from "@/components/Home/PracticeAreas";
import Experience from "@/components/Home/Experience";
import ProfessionalApproach from "@/components/Home/ProfessionalApproach";
import LegalKnowledge from "@/components/Home/LegalKnowledge";
import FAQPreview from "@/components/Home/FAQPreview";
import Location from "@/components/Home/Location";
import ContactCTA from "@/components/Home/ContactCTA";
import DisclaimerNotice from "@/components/Home/DisclaimerNotice";

const SITE_URL = "https://vpadvocates.in";
const PAGE_URL = `${SITE_URL}/`;

export const metadata: Metadata = {
  title: "Advocate in Ahmedabad | Parthiv Vyas – V&P Advocates",
  description:
    "Advocate Parthiv Vyas at V&P Advocates and Notary offers legal assistance for civil, criminal, family, property and notary matters in Ahmedabad, Gujarat.",
  keywords: [
    "advocate in Ahmedabad",
    "lawyer in Ahmedabad",
    "Advocate Parthiv Vyas",
    "V&P Advocates and Notary",
    "legal services in Ahmedabad",
    "advocate in Naroda",
    "lawyer in Naroda Ahmedabad",
    "advocate near Hanspura Ahmedabad",
    "civil lawyer in Ahmedabad",
    "criminal lawyer in Ahmedabad",
    "property lawyer in Ahmedabad",
    "family lawyer in Ahmedabad",
    "notary services in Ahmedabad",
  ],
  alternates: {
    canonical: "https://vpadvocates.in/",
  },
  openGraph: {
    type: "website",
    url: "https://vpadvocates.in/",
    siteName: "V&P Advocates and Notary",
    title: "Advocate in Ahmedabad | Parthiv Vyas",
    description:
      "Explore legal services and practice areas offered by V&P Advocates and Notary in Ahmedabad, Gujarat.",
    locale: "en_IN",
    images: [
      {
        url: "https://vpadvocates.in/footerlogo1.png",
        alt: "V&P Advocates and Notary",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Advocate in Ahmedabad | Parthiv Vyas",
    description:
      "Explore legal services and practice areas in Ahmedabad, Gujarat.",
    images: ["https://vpadvocates.in/footerlogo1.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#legal-service`,
      name: "V&P Advocates and Notary",
      alternateName: "Advocate Parthiv Vyas",
      url: SITE_URL,
      logo: `${SITE_URL}/footerlogo1.png`,
      image: `${SITE_URL}/footerlogo1.png`,
      description:
        "V&P Advocates and Notary provides legal services and legal information for individuals and businesses in Ahmedabad, Gujarat, India.",
      telephone: "+919879811440",
      email: "vyas.parthiv8049@yahoo.com",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "Shop No. 8, Dev Ashish Divine, Opposite Gayatri Green, Near Sadguru Circle, Hanspura, Naroda",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "62, Durganagar Society, Near Naroda Police Station, Naroda",
          postalCode: "382330",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Ahmedabad",
        },
        {
          "@type": "AdministrativeArea",
          name: "Gujarat",
        },
      ],
      founder: {
        "@type": "Person",
        name: "Parthiv Vyas",
        jobTitle: "Advocate",
      },
      knowsAbout: [
        "Civil Litigation",
        "Criminal Law",
        "Property and Revenue Matters",
        "Family and Matrimonial Matters",
        "Notary Services",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "V&P Advocates and Notary",
      alternateName: "Advocate Parthiv Vyas",
      inLanguage: "en-IN",
      publisher: {
        "@id": `${SITE_URL}/#legal-service`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Advocate Parthiv Vyas | Legal Services in Ahmedabad, Gujarat",
      description:
        "Explore legal services, practice areas, legal resources, and contact information for V&P Advocates and Notary in Ahmedabad, Gujarat.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#legal-service`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />

      <ProfessionalIntro />

      <PracticeAreas />

      <Experience />

      <ProfessionalApproach />

      <LegalKnowledge />

      <FAQPreview />

      <Location />

      <ContactCTA />

      <DisclaimerNotice />
    </>
  );
}
