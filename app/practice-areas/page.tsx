
import type { Metadata } from "next";

import PracticeAreasHero from "@/components/practice-areas/PracticeAreasHero";
import PracticeAreasIntro from "@/components/practice-areas/PracticeAreasIntro";
import PracticeAreasGrid from "@/components/practice-areas/PracticeAreasGrid";
import PracticeAreasApproach from "@/components/practice-areas/PracticeAreasApproach";
import PracticeAreasKnowledge from "@/components/practice-areas/PracticeAreasKnowledge";
import PracticeAreasFAQ from "@/components/practice-areas/PracticeAreasFAQ";
import PracticeAreasCTA from "@/components/practice-areas/PracticeAreasCTA";

const SITE_URL = "https://vpadvocates.in";

const PAGE_TITLE =
  "Legal Practice Areas in Ahmedabad | V&P Advocates";

const PAGE_DESCRIPTION =
  "Explore civil, criminal, family and property law information, along with notary services from V&P Advocates and Notary in Ahmedabad, Gujarat.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "legal practice areas in Ahmedabad",
    "Advocate Parthiv Vyas",
    "V&P Advocates and Notary",
    "advocate in Ahmedabad",
    "lawyer in Ahmedabad",
    "civil litigation in Ahmedabad",
    "criminal law in Ahmedabad",
    "family law in Ahmedabad",
    "property law in Ahmedabad",
    "notary services in Ahmedabad",
    "legal guidance in Ahmedabad",
    "advocate in Naroda Ahmedabad",
    "legal services in Gujarat",
  ],

  alternates: {
    canonical: `${SITE_URL}/practice-areas`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/practice-areas`,
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

export default function PracticeAreasPage() {
  return (
    <main>
      <PracticeAreasHero />
      <PracticeAreasIntro />
      <PracticeAreasGrid />
      <PracticeAreasApproach />
      <PracticeAreasKnowledge />
      <PracticeAreasFAQ />
      <PracticeAreasCTA />
    </main>
  );
}
