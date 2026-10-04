import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  findPracticeArea,
  getAllPracticeAreaSlugs,
  getRelatedPracticeAreas,
} from "@/lib/practiceAreaUtils";

import PracticeAreaHero from "@/components/practice-area-detail/PracticeAreaHero";
import PracticeAreaOverview from "@/components/practice-area-detail/PracticeAreaOverview";
import PracticeAreaScope from "@/components/practice-area-detail/PracticeAreaScope";
import PracticeAreaMatters from "@/components/practice-area-detail/PracticeAreaMatters";
import PracticeAreaProcess from "@/components/practice-area-detail/PracticeAreaProcess";
import PracticeAreaConsiderations from "@/components/practice-area-detail/PracticeAreaConsiderations";
import PracticeAreaFAQ from "@/components/practice-area-detail/PracticeAreaFAQ";
import RelatedPracticeAreas from "@/components/practice-area-detail/RelatedPracticeAreas";
import PracticeAreaCTA from "@/components/practice-area-detail/PracticeAreaCTA";

type PracticeAreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return getAllPracticeAreaSlugs();
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;

  const area = findPracticeArea(slug);

  if (!area) {
    return {
      title: "Practice Area Not Found | Advocate Parthiv Vyas",
      description:
        "The requested practice area could not be found.",
    };
  }

  return {
    title: area.metaTitle,

    description: area.metaDescription,

    alternates: {
      canonical: `/practice-areas/${area.slug}`,
    },

    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/practice-areas/${area.slug}`,
      type: "article",
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function PracticeAreaDetailPage({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;

  const area = findPracticeArea(slug);

  if (!area) {
    notFound();
  }

  const relatedAreas = getRelatedPracticeAreas(area.slug, 3);

  return (
    <main className="bg-[#faf8f3]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <PracticeAreaHero area={area} />

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <PracticeAreaOverview area={area} />

      {/* =====================================================
          SCOPE
      ===================================================== */}

      <PracticeAreaScope area={area} />

      {/* =====================================================
          MATTERS
      ===================================================== */}

      <PracticeAreaMatters area={area} />

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <PracticeAreaProcess area={area} />

      {/* =====================================================
          CONSIDERATIONS
      ===================================================== */}

      <PracticeAreaConsiderations area={area} />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <PracticeAreaFAQ area={area} />

      {/* =====================================================
          RELATED PRACTICE AREAS
      ===================================================== */}

      <RelatedPracticeAreas areas={relatedAreas} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <PracticeAreaCTA area={area} />
    </main>
  );
}