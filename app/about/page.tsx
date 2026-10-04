import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AdvocateProfile from "@/components/about/AdvocateProfile";
import ProfessionalJourney from "@/components/about/ProfessionalJourney";
import PracticePhilosophy from "@/components/about/PracticePhilosophy";
import AreasOfPractice from "@/components/about/AreasOfPractice";
import ProfessionalExperience from "@/components/about/ProfessionalExperience";
import LegalKnowledge from "@/components/about/LegalKnowledge";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Advocate Parthiv Vyas",
  description:
    "Learn about Advocate Parthiv Vyas, professional background, approach to legal practice, areas of practice and legal knowledge.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Advocate Parthiv Vyas",
    description:
      "Professional information, legal practice areas, experience and approach of Advocate Parthiv Vyas.",
    url: "/about",
    type: "website",
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