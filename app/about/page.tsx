
import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AdvocateProfile from "@/components/about/AdvocateProfile";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import PracticePhilosophy from "@/components/about/PracticePhilosophy";
import AreasOfPractice from "@/components/about/AreasOfPractice";
import ProfessionalExperience from "@/components/about/ProfessionalExperience";
import LegalKnowledge from "@/components/about/LegalKnowledge";
import AboutCTA from "@/components/about/AboutCTA";

const SITE_URL = "https://www.vpadvocates.in";

const PAGE_TITLE =
  "About Advocate Parthiv Vyas | V&P Advocates, Ahmedabad";

const PAGE_DESCRIPTION =
  "Learn about Advocate Parthiv Vyas at V&P Advocates and Notary, Ahmedabad. Explore his legal background, approach, practice areas and professional journey.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "Advocate Parthiv Vyas",
    "V&P Advocates and Notary",
    "advocate in Ahmedabad",
    "lawyer in Ahmedabad",
    "about Advocate Parthiv Vyas",
    "legal professional in Ahmedabad",
    "legal services in Ahmedabad",
    "advocate in Naroda Ahmedabad",
    "civil litigation in Ahmedabad",
    "property law in Ahmedabad",
    "family law in Ahmedabad",
    "criminal law in Ahmedabad",
    "notary services in Ahmedabad",
  ],

  alternates: {
    canonical: `${SITE_URL}/about`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/about`,
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

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AdvocateProfile />
      <ProfessionalJourney />
      <PracticePhilosophy />
      <AreasOfPractice />
      <ProfessionalExperience />
      <LegalKnowledge />
      <AboutCTA />
    </>
  );
}
