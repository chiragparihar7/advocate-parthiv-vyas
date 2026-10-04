/* =========================================================
   ADVOCATE PARTHIV VYAS
   PRACTICE AREAS DATA

   NOTE:
   The practice areas below are structured as working content.
   Final practice areas and descriptions should be verified
   and approved before publication.
   ========================================================= */

export interface PracticeAreaScopeItem {
  title: string;
  description: string;
}

export interface PracticeAreaProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface PracticeAreaFAQItem {
  question: string;
  answer: string;
}

export interface PracticeArea {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  icon: string;

  overview: string;

  scope: PracticeAreaScopeItem[];

  matters: string[];

  process: PracticeAreaProcessItem[];

  considerations: string[];

  faqs: PracticeAreaFAQItem[];

  metaTitle: string;
  metaDescription: string;
}

/* =========================================================
   PRACTICE AREAS
   ========================================================= */

export const practiceAreas: PracticeArea[] = [
  {
    slug: "civil-law",
    number: "01",
    title: "Civil Law",
    icon: "scale",

    shortDescription:
      "General information relating to civil disputes, claims, notices and related legal procedures.",

    overview:
      "Civil legal matters may involve disputes, claims, agreements, notices and other issues arising between individuals or entities. The appropriate legal process depends on the facts, documents and circumstances of each matter.",

    scope: [
      {
        title: "Civil Disputes",
        description:
          "General information relating to disputes involving private rights, obligations and legal claims.",
      },
      {
        title: "Legal Claims",
        description:
          "Information concerning selected civil claims and the procedural considerations that may arise.",
      },
      {
        title: "Legal Notices",
        description:
          "General information regarding notices and correspondence used in connection with civil matters.",
      },
      {
        title: "Civil Procedures",
        description:
          "An overview of selected procedural steps and documentation relevant to civil legal matters.",
      },
    ],

    matters: [
      "Civil disputes",
      "Legal claims",
      "Legal notices",
      "Civil documentation",
      "Related procedural matters",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "Understand the facts, circumstances and nature of the legal matter.",
      },
      {
        step: "02",
        title: "Review",
        description:
          "Review relevant documents and information connected with the matter.",
      },
      {
        step: "03",
        title: "Assess",
        description:
          "Consider the applicable legal and procedural context.",
      },
      {
        step: "04",
        title: "Next Steps",
        description:
          "Identify appropriate legal or procedural steps based on the matter.",
      },
    ],

    considerations: [
      "Facts and circumstances of the matter",
      "Relevant documents and records",
      "Applicable legal provisions",
      "Procedural requirements",
      "Relevant timelines or deadlines",
    ],

    faqs: [
      {
        question:
          "What information may be relevant to a civil legal matter?",
        answer:
          "The relevant information depends on the nature of the matter. Facts, documents, correspondence and other records connected with the issue may be important for understanding the legal position.",
      },
      {
        question:
          "What documents should I keep for a civil matter?",
        answer:
          "Relevant agreements, notices, correspondence, records and other documents connected with the matter may be useful. The specific documents required depend on the circumstances.",
      },
      {
        question:
          "Does the information on this page constitute legal advice?",
        answer:
          "No. The information provided on this website is for general informational purposes and does not constitute advice specific to an individual's legal circumstances.",
      },
    ],

    metaTitle:
      "Civil Law | Advocate Parthiv Vyas | Ahmedabad",

    metaDescription:
      "General information about civil law, civil disputes, legal claims, notices and related legal procedures.",
  },

  {
    slug: "criminal-law",
    number: "02",
    title: "Criminal Law",
    icon: "gavel",

    shortDescription:
      "General information relating to criminal proceedings, bail-related matters and legal procedures.",

    overview:
      "Criminal legal matters can involve different stages of investigation, proceedings and court processes. The applicable procedure depends on the facts, allegations, documents and circumstances of each matter.",

    scope: [
      {
        title: "Criminal Proceedings",
        description:
          "General information concerning selected stages and procedures associated with criminal matters.",
      },
      {
        title: "Bail-Related Matters",
        description:
          "Information relating generally to bail procedures and associated legal considerations.",
      },
      {
        title: "Legal Remedies",
        description:
          "General information about legal remedies that may arise within applicable criminal procedures.",
      },
      {
        title: "Procedural Matters",
        description:
          "An overview of selected procedural requirements relevant to criminal proceedings.",
      },
    ],

    matters: [
      "Criminal proceedings",
      "Bail-related matters",
      "Legal remedies",
      "Criminal documentation",
      "Related procedural matters",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "Understand the circumstances and nature of the legal matter.",
      },
      {
        step: "02",
        title: "Review",
        description:
          "Review relevant documents, notices and available information.",
      },
      {
        step: "03",
        title: "Assess",
        description:
          "Consider the applicable legal and procedural framework.",
      },
      {
        step: "04",
        title: "Next Steps",
        description:
          "Identify appropriate procedural or legal steps based on the matter.",
      },
    ],

    considerations: [
      "Nature and circumstances of the matter",
      "Relevant notices and documents",
      "Applicable legal provisions",
      "Procedural requirements",
      "Relevant dates and timelines",
    ],

    faqs: [
      {
        question:
          "What information may be relevant to a criminal legal matter?",
        answer:
          "The relevant information depends on the circumstances. Documents, notices, records and other information connected with the matter may be important for understanding the situation.",
      },
      {
        question:
          "What should I do with documents relating to a criminal matter?",
        answer:
          "Relevant documents and correspondence should generally be preserved carefully. The documents required depend on the specific circumstances of the matter.",
      },
      {
        question:
          "Does this website provide advice about a specific criminal matter?",
        answer:
          "No. Website content is provided for general informational purposes and does not replace advice relating to an individual's specific circumstances.",
      },
    ],

    metaTitle:
      "Criminal Law | Advocate Parthiv Vyas | Ahmedabad",

    metaDescription:
      "General information about criminal proceedings, bail-related matters, legal remedies and related procedures.",
  },

  {
    slug: "property-matters",
    number: "03",
    title: "Property Matters",
    icon: "building",

    shortDescription:
      "General information relating to property documentation, disputes, agreements and related matters.",

    overview:
      "Property-related legal matters may involve documentation, agreements, ownership questions, disputes and other legal considerations. The appropriate approach depends on the documents, facts and applicable legal framework.",

    scope: [
      {
        title: "Property Documentation",
        description:
          "General information concerning documents and records associated with property matters.",
      },
      {
        title: "Property Disputes",
        description:
          "Information relating generally to disputes and legal issues concerning property.",
      },
      {
        title: "Property Agreements",
        description:
          "General information about agreements and documentation connected with property transactions.",
      },
      {
        title: "Related Legal Matters",
        description:
          "An overview of selected legal and procedural considerations associated with property matters.",
      },
    ],

    matters: [
      "Property documentation",
      "Property disputes",
      "Property agreements",
      "Ownership-related matters",
      "Related legal procedures",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "Understand the property matter and the circumstances involved.",
      },
      {
        step: "02",
        title: "Review",
        description:
          "Review relevant property documents, agreements and records.",
      },
      {
        step: "03",
        title: "Assess",
        description:
          "Consider the relevant legal and procedural context.",
      },
      {
        step: "04",
        title: "Next Steps",
        description:
          "Identify appropriate steps based on the available information.",
      },
    ],

    considerations: [
      "Property-related documents",
      "Agreements and records",
      "Ownership and transaction details",
      "Applicable legal provisions",
      "Relevant procedural requirements",
    ],

    faqs: [
      {
        question:
          "What documents may be relevant to a property matter?",
        answer:
          "The relevant documents depend on the nature of the matter. Agreements, records, title-related documents and other property documentation may be relevant.",
      },
      {
        question:
          "Can property disputes involve different legal procedures?",
        answer:
          "Yes. The applicable procedure can depend on the nature of the dispute, the documents involved and the circumstances of the matter.",
      },
      {
        question:
          "Does the website information determine my legal position?",
        answer:
          "No. Website information is general in nature and should not be treated as an assessment of a specific legal matter.",
      },
    ],

    metaTitle:
      "Property Matters | Advocate Parthiv Vyas | Ahmedabad",

    metaDescription:
      "General information about property documentation, disputes, agreements and related legal matters.",
  },

  {
    slug: "legal-documentation",
    number: "04",
    title: "Legal Documentation",
    icon: "file-text",

    shortDescription:
      "General information relating to legal notices, agreements, applications and related documentation.",

    overview:
      "Legal documentation can form an important part of different legal matters. The appropriate document, wording and procedure depend on the purpose, circumstances and applicable legal requirements.",

    scope: [
      {
        title: "Legal Notices",
        description:
          "General information concerning legal notices and related correspondence.",
      },
      {
        title: "Agreements",
        description:
          "Information relating generally to agreements and legal documentation.",
      },
      {
        title: "Applications",
        description:
          "General information concerning selected applications and procedural documentation.",
      },
      {
        title: "Legal Correspondence",
        description:
          "An overview of documentation and correspondence that may arise in legal matters.",
      },
    ],

    matters: [
      "Legal notices",
      "Agreements",
      "Applications",
      "Legal correspondence",
      "Related documentation",
    ],

    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "Understand the purpose and circumstances behind the documentation.",
      },
      {
        step: "02",
        title: "Review",
        description:
          "Review relevant facts, documents and information.",
      },
      {
        step: "03",
        title: "Prepare",
        description:
          "Consider the appropriate documentation and legal requirements.",
      },
      {
        step: "04",
        title: "Proceed",
        description:
          "Follow the appropriate procedural or legal route for the matter.",
      },
    ],

    considerations: [
      "Purpose of the document",
      "Relevant facts and information",
      "Supporting documentation",
      "Applicable legal requirements",
      "Procedural requirements",
    ],

    faqs: [
      {
        question:
          "Why is legal documentation important?",
        answer:
          "Legal documentation can record rights, obligations, communications or procedural steps. Its relevance depends on the particular matter and applicable legal requirements.",
      },
      {
        question:
          "Can the same document be used for every legal matter?",
        answer:
          "No. The appropriate document and its contents depend on the purpose, facts and legal requirements of the particular matter.",
      },
      {
        question:
          "Is information on this website a substitute for legal advice?",
        answer:
          "No. Website content is provided for general informational purposes and does not replace advice specific to an individual's circumstances.",
      },
    ],

    metaTitle:
      "Legal Documentation | Advocate Parthiv Vyas | Ahmedabad",

    metaDescription:
      "General information about legal notices, agreements, applications and related legal documentation.",
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

/**
 * Find a practice area using its URL slug.
 */
export function getPracticeAreaBySlug(
  slug: string
): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

/**
 * Get all available practice-area slugs.
 */
export function getPracticeAreaSlugs(): string[] {
  return practiceAreas.map((area) => area.slug);
}