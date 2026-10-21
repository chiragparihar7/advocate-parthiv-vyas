
import type { Metadata } from "next";
import FAQsPageClient from "./FAQsPageClient";

const SITE_URL = "https://vpadvocates.in";

const PAGE_TITLE =
  "Legal FAQs in Ahmedabad | V&P Advocates and Notary";

const PAGE_DESCRIPTION =
  "Find answers to common legal questions about civil, criminal, family, property and notary matters from V&P Advocates and Notary in Ahmedabad.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "legal FAQs in Ahmedabad",
    "legal questions and answers",
    "Advocate Parthiv Vyas",
    "V&P Advocates and Notary",
    "legal information in Ahmedabad",
    "civil law FAQs",
    "criminal law FAQs",
    "family law FAQs",
    "property law FAQs",
    "notary services in Ahmedabad",
    "legal consultation questions",
    "legal procedures in Gujarat",
    "advocate in Ahmedabad",
    "lawyer in Naroda Ahmedabad",
  ],

  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/faqs`,
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

export default function FAQsPage() {
  return <FAQsPageClient />;
}
