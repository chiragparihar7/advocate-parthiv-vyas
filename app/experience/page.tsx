import type { Metadata } from "next";

import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceIntro from "@/components/experience/ExperienceIntro";
import ProfessionalJourney from "@/components/experience/ProfessionalJourney";
import PracticeExperience from "@/components/experience/PracticeExperience";
import ProfessionalFocus from "@/components/experience/ProfessionalFocus";
import LegalApproach from "@/components/experience/LegalApproach";
import ExperienceHighlights from "@/components/experience/ExperienceHighlights";
import LegalKnowledge from "@/components/experience/LegalKnowledge";
import ExperienceFAQ from "@/components/experience/ExperienceFAQ";
import ExperienceCTA from "@/components/experience/ExperienceCTA";

export const metadata: Metadata = {
  title: "Professional Experience | Advocate Parthiv Vyas | Ahmedabad",
  description:
    "Explore the professional experience, development, legal approach and professional focus of Advocate Parthiv Vyas.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Professional Experience | Advocate Parthiv Vyas",
    description:
      "Explore professional experience, development and legal approach.",
    url: "/experience",
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />

      <ExperienceIntro />

      <ProfessionalJourney />

      <PracticeExperience />

      <ProfessionalFocus />

      <LegalApproach />

      <ExperienceHighlights />

      <LegalKnowledge />

      <ExperienceFAQ />

      <ExperienceCTA />
    </main>
  );
}