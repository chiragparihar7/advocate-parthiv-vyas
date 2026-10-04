import {
  getPracticeAreaBySlug,
  practiceAreas,
  type PracticeArea,
} from "@/data/practiceAreas";

/* =========================================================
   PRACTICE AREA UTILITIES
   ========================================================= */

/**
 * Get a practice area safely from a slug.
 */
export function findPracticeArea(
  slug: string
): PracticeArea | null {
  return getPracticeAreaBySlug(slug) ?? null;
}

/**
 * Get all practice area slugs.
 *
 * Used by generateStaticParams().
 */
export function getAllPracticeAreaSlugs() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

/**
 * Get related practice areas.
 *
 * Excludes the current practice area.
 */
export function getRelatedPracticeAreas(
  currentSlug: string,
  limit = 3
): PracticeArea[] {
  return practiceAreas
    .filter((area) => area.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Create the canonical URL path for a practice area.
 */
export function getPracticeAreaUrl(slug: string): string {
  return `/practice-areas/${slug}`;
}

/**
 * Create breadcrumb data for a practice-area detail page.
 */
export function getPracticeAreaBreadcrumbs(area: PracticeArea) {
  return [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Practice Areas",
      href: "/practice-areas",
    },
    {
      name: area.title,
      href: getPracticeAreaUrl(area.slug),
    },
  ];
}