
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Info,
  LockKeyhole,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "general-information",
    number: "01",
    title: "General Information",
    icon: Info,
    content: [
      "The content published on this website is intended solely for general informational and educational purposes. It may include descriptions of legal practice areas, general legal concepts, and information intended to help visitors understand legal matters.",
      "Website content should not be treated as legal advice for any particular situation. Laws, procedures, limitation periods, and judicial interpretations may change. The applicability of any legal principle depends on the specific facts and circumstances of a matter.",
    ],
  },
  {
    id: "no-legal-advice",
    number: "02",
    title: "No Substitute for Legal Advice",
    icon: BookOpen,
    content: [
      "Information available on this website is not a substitute for consultation with a qualified legal professional who can assess the relevant facts, documents, and applicable law.",
      "Visitors should obtain appropriate professional advice before making decisions, commencing legal proceedings, responding to a legal notice, signing an agreement, or taking any other action that may affect their legal rights or obligations.",
    ],
  },
  {
    id: "advocate-client",
    number: "03",
    title: "No Advocate–Client Relationship",
    icon: Scale,
    content: [
      "Accessing this website, reading its content, submitting a general enquiry, or communicating through the website does not, by itself, establish an advocate–client relationship.",
      "Any professional engagement is subject to appropriate communication, acceptance of the matter, and mutually agreed arrangements in accordance with applicable law and professional obligations.",
    ],
  },
  {
    id: "no-guarantee",
    number: "04",
    title: "No Guarantee of Outcomes",
    icon: ShieldCheck,
    content: [
      "Every legal matter depends on its individual facts, available evidence, applicable law, procedural requirements, and decisions made by the relevant court, tribunal, authority, or other decision-maker.",
      "Nothing on this website should be understood as a promise, assurance, or guarantee of a particular result, outcome, timeline, or remedy in any legal matter.",
    ],
  },
  {
    id: "confidentiality",
    number: "05",
    title: "Confidentiality and Communications",
    icon: LockKeyhole,
    content: [
      "Visitors should exercise caution when submitting personal information, legal documents, case details, or other sensitive material through online forms or electronic communications.",
      "Please do not transmit confidential or sensitive information until appropriate arrangements for handling that information have been discussed and confirmed. Sending information through this website does not, by itself, establish a confidential professional engagement.",
    ],
  },
  {
    id: "external-links",
    number: "06",
    title: "External Links and Third-Party Content",
    icon: ArrowUpRight,
    content: [
      "This website may contain links to external websites, public resources, or third-party platforms for convenience and reference.",
      "We do not necessarily control or endorse the content, accuracy, availability, privacy practices, or security of external websites. Visitors should review the relevant third party's terms and policies before using those services.",
    ],
  },
  {
    id: "accuracy",
    number: "07",
    title: "Accuracy and Updates",
    icon: FileText,
    content: [
      "Reasonable efforts may be made to keep website information useful and current. However, no representation is made that all content is complete, accurate, up to date, or applicable to every legal situation.",
      "Content may be revised, corrected, updated, or removed without prior notice. Visitors should independently verify important legal information and applicable procedural requirements before relying on it.",
    ],
  },
  {
    id: "limitation",
    number: "08",
    title: "Limitation of Responsibility",
    icon: ShieldAlert,
    content: [
      "To the extent permitted by applicable law, the website and its content are provided on an informational basis without a guarantee of uninterrupted availability, completeness, or suitability for a particular purpose.",
      "Nothing in this disclaimer excludes or limits any responsibility that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    id: "professional-standards",
    number: "09",
    title: "Professional and Regulatory Requirements",
    icon: CheckCircle2,
    content: [
      "All information on this website is subject to applicable Indian law and professional rules governing advocates and legal practice.",
      "Nothing on this website is intended to override applicable professional obligations, statutory requirements, or directions issued by a competent court or authority.",
    ],
  },
];

const quickNotices = [
  {
    icon: Info,
    title: "Informational content",
    description:
      "Website material is general in nature and is not tailored legal advice.",
  },
  {
    icon: Scale,
    title: "Engagement is separate",
    description:
      "A website visit or enquiry does not automatically create an advocate–client relationship.",
  },
  {
    icon: ShieldCheck,
    title: "No promised results",
    description:
      "No specific legal outcome or timeline is guaranteed.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#0E2238]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#081725]">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#C9A45C]/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#C9A45C]/15"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#C1CBD5] transition-colors hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to Home
            </Link>

            <div className="mt-12 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E4CC98]">
                V&P Advocates and Notary
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
              <div className="max-w-3xl">
                <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#FAF8F3] sm:text-5xl lg:text-6xl">
                  Website Disclaimer
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#B9C4CF] sm:text-lg">
                  Important information about the nature of website content,
                  professional engagement, confidentiality, and the limitations
                  of general legal information.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.04] p-6">
                <Scale
                  size={25}
                  strokeWidth={1.35}
                  className="text-[#C9A45C]"
                />
                <p className="mt-4 text-sm font-semibold text-[#FAF8F3]">
                  Please read before relying on website information.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#AEB9C5]">
                  This notice applies to your use of this website and its
                  published content.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notice strip */}
      <section className="border-b border-[#E5DED1] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-0 px-6 sm:px-8 md:grid-cols-3 lg:px-10">
          {quickNotices.map((notice, index) => {
            const Icon = notice.icon;

            return (
              <motion.div
                key={notice.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex gap-4 py-6 md:px-5 lg:py-8 ${
                  index !== 0 ? "border-t border-[#E5DED1] md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F5F2EB] text-[#A9823D]">
                  <Icon size={19} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-[#0E2238]">
                    {notice.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#687786]">
                    {notice.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          {/* Contents navigation */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="border border-[#E5DED1] bg-white p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A9823D]">
                On This Page
              </p>

              <nav aria-label="Disclaimer sections" className="mt-5">
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-start gap-3 py-2 text-sm text-[#687786] transition-colors hover:text-[#0E2238]"
                      >
                        <span className="pt-0.5 text-[10px] font-semibold tracking-wide text-[#B59A69]">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-[#E5DED1] pt-5">
                <p className="text-xs leading-6 text-[#687786]">
                  Have a question about contacting the office?
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#A9823D] transition-colors hover:text-[#0E2238]"
                >
                  Contact Information
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Disclaimer sections */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="border-l-2 border-[#C9A45C] bg-[#F5F2EB] px-5 py-5 sm:px-7 sm:py-6"
            >
              <div className="flex items-start gap-3">
                <Info
                  size={19}
                  className="mt-0.5 shrink-0 text-[#A9823D]"
                />
                <div>
                  <h2 className="text-sm font-semibold text-[#0E2238]">
                    Important Notice
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#586979]">
                    Please read this disclaimer together with our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-[#8C6A2F] underline underline-offset-4 hover:text-[#0E2238]"
                    >
                      Privacy Policy
                    </Link>
                    . If you require advice about a specific matter, seek
                    appropriate professional guidance based on your individual
                    circumstances.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-10 divide-y divide-[#E5DED1]">
              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.4, delay: 0.03 }}
                    className="scroll-mt-8 py-8 first:pt-2 sm:py-9"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E5DED1] bg-white text-[#A9823D]">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#A9823D]">
                            SECTION {section.number}
                          </span>
                        </div>

                        <h2 className="mt-2 font-serif text-2xl font-medium leading-snug text-[#0E2238] sm:text-[28px]">
                          {section.title}
                        </h2>

                        <div className="mt-4 space-y-4">
                          {section.content.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-sm leading-7 text-[#586979] sm:text-[15px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>

            {/* Closing note */}
            <div className="mt-8 border border-[#E5DED1] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F5F2EB] text-[#A9823D]">
                  <FileText size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-medium text-[#0E2238]">
                    Questions About This Disclaimer?
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#687786]">
                    For general enquiries about the website or professional
                    services, please use the contact page. Do not include
                    confidential case details or sensitive documents in an
                    initial enquiry.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex min-h-11 items-center gap-3 bg-[#0E2238] px-5 py-3 text-sm font-medium !text-white transition-colors hover:bg-[#17384F]"
                  >
                    <span className="!text-white">Go to Contact Page</span>
                    <ArrowRight size={16} className="!text-white" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs leading-6 text-[#89939C]">
              This disclaimer should be reviewed by the advocate before
              publication to confirm that it accurately reflects the practice,
              website operations, and applicable professional requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
