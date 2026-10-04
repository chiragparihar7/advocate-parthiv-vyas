"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Scale,
} from "lucide-react";

/*
  NOTE:
  Next.js does not allow exporting Metadata from a "use client" page.
  If your Next.js version requires metadata in a Server Component,
  move the metadata object to a separate layout.tsx or remove "use client"
  and extract only the accordion into a small client component.

  For the current single-file implementation, the metadata object below
  is provided as a reference and should be moved if your build reports
  the client/server metadata restriction.
*/

// =========================================================
// FAQ DATA
// =========================================================

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is a legal consultation?",
    answer:
      "A legal consultation generally involves discussing the relevant facts, documents and circumstances of a legal matter so that the applicable legal and procedural considerations can be understood. The appropriate advice may depend on the specific facts of each matter.",
  },
  {
    question: "Why is legal advice dependent on the facts of a matter?",
    answer:
      "Different matters can involve different facts, documents, applicable laws, jurisdictions and procedural requirements. As a result, a general explanation may not address the specific circumstances of an individual matter.",
  },
  {
    question: "What information should I prepare before discussing a legal matter?",
    answer:
      "Where relevant, it can be useful to have a clear summary of the circumstances, important dates and documents connected with the matter. The information required will depend on the nature of the legal issue.",
  },
  {
    question: "What types of matters may require legal assistance?",
    answer:
      "Legal assistance may be relevant to a wide range of civil, criminal, property, documentation and other legal matters. The appropriate legal approach depends on the nature and circumstances of the particular issue.",
  },
  {
    question: "Why are documents important in a legal matter?",
    answer:
      "Documents can help establish relevant facts, understand the background of a matter and identify the legal or procedural issues that may need to be considered. The importance of particular documents varies according to the matter.",
  },
  {
    question: "Does every legal matter follow the same process?",
    answer:
      "No. The process can differ depending on the nature of the matter, applicable law, jurisdiction, documents, procedural requirements and other relevant circumstances.",
  },
  {
    question: "Can I understand my legal position from information on this website?",
    answer:
      "The website provides general legal information intended to help visitors understand legal concepts, procedures and areas of practice. Website content should not be treated as advice for a specific legal matter.",
  },
  {
    question: "How can I make a legal enquiry?",
    answer:
      "You can use the contact options provided on the website to submit an appropriate professional enquiry. Where possible, provide a concise description of the matter and relevant basic information without sharing unnecessary confidential or sensitive information through a general enquiry form.",
  },
  {
    question: "Can I request an appointment?",
    answer:
      "Appointment requests can be made through the appropriate contact route provided on the website. Availability and the appropriate consultation process may depend on the circumstances and professional schedule.",
  },
  {
    question: "Where does Advocate Parthiv Vyas practise?",
    answer:
      "The website is intended to provide professional information relating to Advocate Parthiv Vyas and the approved professional practice location. Please refer to the Contact or Location information on the website for the current verified details.",
  },
];

// =========================================================
// PAGE
// =========================================================

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="bg-[#faf8f3] text-[#1d2935]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0e2238] text-white">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#c9a45c]/10" />

        <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full border border-[#c9a45c]/10" />

        <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-[#193750]/40 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="!text-white/50 transition-colors duration-200 hover:!text-[#e4cc98]"
            >
              Home
            </Link>

            <span className="text-[#c9a45c]">/</span>

            <span className="text-white/80">FAQs</span>
          </motion.nav>

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main Hero Content */}
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#c9a45c]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e4cc98]">
                  Legal Knowledge
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.025em] text-[#faf8f3] sm:text-6xl lg:text-7xl"
              >
                Legal questions,
                <span className="block text-[#c9a45c]">
                  explained clearly.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-7 max-w-2xl text-[16px] leading-8 text-white/65 sm:text-[17px]"
              >
                Find general information about common legal questions,
                procedures, documentation and professional enquiries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  href="#faqs"
                  className="group inline-flex items-center gap-2 rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold !text-[#0e2238] transition-all duration-300 hover:bg-[#e4cc98]"
                >
                  Browse Questions
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold !text-white transition-all duration-300 hover:border-[#c9a45c]/60 hover:bg-white/5"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Hero Side Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="border-l border-white/10 pl-6 lg:pb-2"
            >
              <div className="mb-7">
                <div className="mb-3 flex h-11 w-11 items-center justify-center border border-[#c9a45c]/40 text-[#e4cc98]">
                  <HelpCircle size={20} strokeWidth={1.5} />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
                  Frequently Asked Questions
                </p>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  General information designed to help visitors understand
                  common legal concepts and website processes.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-[#c9a45c]">
                  {String(faqs.length).padStart(2, "0")}
                </span>

                <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                  Questions
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-14 flex items-center gap-4 border-t border-white/10 pt-5"
          >
            <span className="font-serif text-2xl text-[#c9a45c]">
              01
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Legal FAQs & General Information
            </span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-[#faf8f3]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a45c]/40 text-[#a98543]">
                  <Scale size={17} strokeWidth={1.5} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a98543]">
                    Understanding Legal Questions
                  </p>

                  <p className="mt-1 text-xs text-[#8993a0]">
                    General information
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Intro Content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
                Useful answers begin with
                <span className="text-[#a98543]">
                  {" "}
                  the right context.
                </span>
              </h2>

              <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-8 text-[#647180] sm:text-base">
                <p>
                  Legal questions often depend on the facts, documents,
                  applicable law and circumstances of an individual matter.
                  These FAQs provide general information to help visitors
                  understand common legal concepts and processes.
                </p>

                <p>
                  They are intended as an educational starting point and
                  should not be treated as a substitute for advice relating
                  to a specific legal matter.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ ACCORDION
      ===================================================== */}

      <section
        id="faqs"
        className="scroll-mt-20 bg-white"
      >
        <div className="mx-auto max-w-[1000px] px-6 py-16 sm:px-8 lg:py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
                Frequently Asked Questions
              </span>
            </div>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
                Common legal questions.
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[#8993a0]">
                Select a question to read the general information provided.
              </p>
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="border-y border-[#e7e1d6]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.025, 0.2),
                  }}
                  className="border-b border-[#e7e1d6] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="flex min-w-0 items-start gap-4">
                      <span className="mt-0.5 shrink-0 font-serif text-sm text-[#c9a45c]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`font-serif text-lg leading-7 transition-colors duration-200 sm:text-xl ${
                          isOpen
                            ? "text-[#a98543]"
                            : "text-[#0e2238] group-hover:text-[#a98543]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#c9a45c] bg-[#0e2238] text-[#e4cc98]"
                          : "border-[#e7e1d6] text-[#647180] group-hover:border-[#c9a45c]/60"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-10 pr-10 sm:pl-12 sm:pr-16">
                          <div className="border-l-2 border-[#c9a45c] pl-5">
                            <p className="text-sm leading-7 text-[#647180] sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL DISCLAIMER
      ===================================================== */}

      <section className="bg-[#f5f2eb]">
        <div className="mx-auto max-w-[1000px] px-6 py-12 sm:px-8 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#e7e1d6] bg-[#fbf7ed] p-6 sm:p-7"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0e2238] text-[#e4cc98]">
                <Scale size={17} strokeWidth={1.5} />
              </div>

              <div>
                <h2 className="font-serif text-xl text-[#0e2238]">
                  Important information
                </h2>

                <p className="mt-2 text-sm leading-7 text-[#647180]">
                  The answers provided on this page are for general
                  informational purposes only. Legal rights, procedures
                  and available options may depend on the facts,
                  applicable law and jurisdiction of an individual matter.
                  Information on this website should not be treated as
                  legal advice for a specific matter.
                </p>

                <p className="mt-3 text-xs leading-6 text-[#8993a0]">
                  Website information should be reviewed against the
                  circumstances of the particular matter and applicable
                  law. Final disclaimer wording should be reviewed and
                  approved before publication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0e2238] text-white">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c9a45c]/10" />

        <div className="pointer-events-none absolute -right-8 top-8 h-48 w-48 rounded-full border border-[#c9a45c]/10" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#c9a45c]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e4cc98]">
                  Still Have a Question?
                </span>
              </div>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
                Discuss your enquiry through the
                <span className="text-[#c9a45c]">
                  {" "}
                  appropriate contact route.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                If your question is not addressed here, you can use the
                appropriate professional contact route to make an enquiry.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-col gap-3 sm:flex-row lg:flex-col"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#c9a45c] px-6 py-3.5 text-sm font-semibold !text-[#0e2238] transition-all duration-300 hover:bg-[#e4cc98]"
              >
                <MessageCircle size={17} />

                Contact

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:border-[#c9a45c]/60 hover:bg-white/5"
              >
                <Scale size={17} />

                Practice Areas
              </Link>
            </motion.div>
          </div>

          {/* Bottom note */}
          <div className="mt-12 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-2 text-[11px] leading-6 text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <span>
                Advocate Parthiv Vyas · Ahmedabad, Gujarat
              </span>

              <span>
                General information only · Not legal advice
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}   