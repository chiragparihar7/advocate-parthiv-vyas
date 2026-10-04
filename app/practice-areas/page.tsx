import type { Metadata } from "next";

import PracticeAreasHero from "@/components/practice-areas/PracticeAreasHero";
import PracticeAreasIntro from "@/components/practice-areas/PracticeAreasIntro";
import PracticeAreasGrid from "@/components/practice-areas/PracticeAreasGrid";
import PracticeAreasApproach from "@/components/practice-areas/PracticeAreasApproach";
import PracticeAreasKnowledge from "@/components/practice-areas/PracticeAreasKnowledge";
import PracticeAreasFAQ from "@/components/practice-areas/PracticeAreasFAQ";
import PracticeAreasCTA from "@/components/practice-areas/PracticeAreasCTA";

export const metadata: Metadata = {
  title: "Practice Areas | Advocate Parthiv Vyas | Ahmedabad",
  description:
    "Explore selected areas of legal practice and general information about related legal matters, procedures and considerations.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | Advocate Parthiv Vyas",
    description:
      "Explore selected areas of legal practice and related legal information.",
    url: "/practice-areas",
    type: "website",
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