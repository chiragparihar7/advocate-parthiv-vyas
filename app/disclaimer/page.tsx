
import type { Metadata } from "next";
import DisclaimerPageClient from "./DisclaimerPageClient";

const SITE_URL = "https://www.vpadvocates.in";

const PAGE_TITLE =
  "Legal Disclaimer | V&P Advocates and Notary, Ahmedabad";

const PAGE_DESCRIPTION =
  "Read the website disclaimer of V&P Advocates and Notary, Ahmedabad, covering general legal information, professional engagement, and limitations.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "V&P Advocates and Notary disclaimer",
    "legal disclaimer Ahmedabad",
    "Advocate Parthiv Vyas",
    "website disclaimer for legal information",
    "legal information disclaimer India",
    "no legal advice disclaimer",
    "advocate client relationship disclaimer",
    "legal website terms Ahmedabad",
    "confidentiality and legal enquiries",
    "legal services Ahmedabad Gujarat",
  ],

  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/disclaimer`,
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

export default function DisclaimerPage() {
  return <DisclaimerPageClient />;
}
