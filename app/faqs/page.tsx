
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";

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
      "Where relevant, it can be useful to have a clear summary of the circumstances, important dates and documents connected with the matter. These may include agreements, legal notices, property records, court documents or relevant correspondence. The information required depends on the nature of the legal issue.",
  },
  {
    question: "What types of matters may require legal assistance?",
    answer:
      "The firm's listed practice areas include civil litigation, criminal law, family and matrimonial disputes, land, property and revenue disputes, cheque bounce cases, contract law and commercial disputes, cyber law, preventive detention under PASA, labour and employment law, tribunal practice, legal drafting and notary services. The availability of assistance for a particular matter should be confirmed with the office.",
  },
  {
    question: "Why are documents important in a legal matter?",
    answer:
      "Documents can help establish relevant facts, understand the background of a matter and identify legal or procedural issues that may need to be considered. The importance of particular documents varies according to the nature of the matter.",
  },
  {
    question: "Does every legal matter follow the same process?",
    answer:
      "No. The process can differ depending on the nature of the matter, applicable law, jurisdiction, available documents, procedural requirements and other relevant circumstances.",
  },
  {
    question: "Can I understand my legal position from information on this website?",
    answer:
      "The website provides general legal information intended to help visitors understand legal concepts, procedures and areas of practice. Website content should not be treated as advice for a specific legal matter.",
  },
  {
    question: "How can I make a legal enquiry?",
    answer:
      "You can use the contact options provided on the website to submit a professional enquiry. Where possible, provide a concise description of the matter and relevant basic information. Avoid sharing unnecessary confidential or sensitive information through a general enquiry form.",
  },
  {
    question: "Can I request an appointment?",
    answer:
      "You can submit an appointment request through the contact options provided on the website. Appointment availability and the appropriate consultation process should be confirmed with the office.",
  },
  {
    question: "Where does Advocate Parthiv Vyas practise?",
    answer:
      "This website provides professional information about Advocate Parthiv Vyas and V&P Advocates and Notary in Ahmedabad, Gujarat. Please refer to the Contact page for the current verified office location and available contact details.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="bg-[#FAF8F3] text-[#1D2935]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0E2238] text-white">
        {/* Decorative Elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C9A45C]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full border border-[#C9A45C]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#193750]/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-xs sm:text-sm"
          >
            <Link
              href="/"
              className="text-white/60 transition-colors hover:text-[#E4CC98]"
            >
              Home
            </Link>

            <span aria-hidden="true" className="text-[#C9A45C]">
              /
            </span>

            <span aria-current="page" className="text-white/90">
              FAQs
            </span>
          </motion.nav>

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main Hero Content */}
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E4CC98]">
                  Legal Knowledge
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.025em] text-[#FAF8F3] sm:text-6xl lg:text-7xl"
              >
                Legal questions,
                <span className="block text-[#C9A45C]">
                  explained clearly.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Find general information about common legal questions,
                procedures, documentation and professional enquiries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="#faqs"
                  className="group inline-flex items-center gap-2 rounded-sm bg-[#C9A45C] px-5 py-3 text-xs font-semibold !text-[#081725] transition-colors duration-300 hover:bg-[#E4CC98]"
                >
                  <span className="!text-[#081725]">
                    Browse Questions
                  </span>

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="!text-[#081725] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-xs font-semibold !text-white transition-all duration-300 hover:border-[#C9A45C]/60 hover:bg-white/5"
                >
                  Contact the Office
                </Link>
              </motion.div>
            </div>

            {/* Hero Side Panel */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pb-2 lg:pl-6 lg:pt-0"
            >
              <div className="mb-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-[#C9A45C]/40 text-[#E4CC98]">
                  <HelpCircle size={20} strokeWidth={1.5} />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
                  Frequently Asked Questions
                </p>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  General information to help visitors understand common
                  legal concepts and website processes.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-[#C9A45C]">
                  {String(faqs.length).padStart(2, "0")}
                </span>

                <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Questions
                </span>
              </div>
            </motion.aside>
          </div>

          {/* Bottom Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-12 flex items-center gap-4 border-t border-white/10 pt-5 sm:mt-14"
          >
            <span className="font-serif text-2xl text-[#C9A45C]">
              01
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
              Legal FAQs &amp; General Information
            </span>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#FAF8F3]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Introduction Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A45C]/40 text-[#A98543]">
                  <Scale size={17} strokeWidth={1.5} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A98543]">
                    Understanding Legal Questions
                  </p>

                  <p className="mt-1 text-xs text-[#8993A0]">
                    General information
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Introduction Content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#0E2238] sm:text-5xl">
                Useful answers begin with
                <span className="text-[#A98543]">
                  {" "}
                  the right context.
                </span>
              </h2>

              <div className="mt-6 max-w-3xl space-y-4 text-sm leading-8 text-[#647180] sm:text-base">
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

      {/* FAQ Accordion */}
      <section id="faqs" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1000px] px-6 py-14 sm:px-8 sm:py-16 lg:py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A98543]">
                Frequently Asked Questions
              </span>
            </div>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0E2238] sm:text-5xl">
                Common legal questions.
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[#8993A0]">
                Select a question to read the general information provided.
              </p>
            </div>
          </motion.div>

          {/* Accordion Items */}
          <div className="border-y border-[#E7E1D6]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const buttonId = `faq-question-${index}`;

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
                  className="border-b border-[#E7E1D6] last:border-b-0"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6"
                    >
                      <span className="flex min-w-0 items-start gap-4">
                        <span className="mt-1 shrink-0 font-serif text-sm text-[#C9A45C]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`font-serif text-base leading-7 transition-colors duration-200 sm:text-xl ${
                            isOpen
                              ? "text-[#A98543]"
                              : "text-[#0E2238] group-hover:text-[#A98543]"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#C9A45C] bg-[#0E2238] text-[#E4CC98]"
                            : "border-[#E7E1D6] text-[#647180] group-hover:border-[#C9A45C]/60"
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
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-9 pr-1 sm:pl-12 sm:pr-16">
                          <div className="border-l-2 border-[#C9A45C] pl-5">
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

      {/* Professional Disclaimer */}
      <section className="bg-[#F5F2EB]">
        <div className="mx-auto max-w-[1000px] px-6 py-12 sm:px-8 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#E7E1D6] bg-[#FBF7ED] p-6 sm:p-7"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#0E2238] text-[#E4CC98]">
                <ShieldCheck size={18} strokeWidth={1.5} />
              </div>

              <div>
                <h2 className="font-serif text-xl text-[#0E2238]">
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

                <Link
                  href="/disclaimer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#A98543] transition-colors hover:text-[#0E2238]"
                >
                  Read Full Disclaimer
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-[#0E2238] text-white">
        {/* Decorative Elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C9A45C]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-8 h-48 w-48 rounded-full border border-[#C9A45C]/10"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#C9A45C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E4CC98]">
                  Still Have a Question?
                </span>
              </div>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] text-[#FAF8F3] sm:text-5xl">
                Make your enquiry through the
                <span className="text-[#C9A45C]">
                  {" "}
                  appropriate contact route.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                If your question is not addressed here, use the contact
                options available on the website to make an enquiry about
                your circumstances.
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
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#C9A45C] px-6 py-3.5 text-sm font-semibold !text-[#081725] transition-colors duration-300 hover:bg-[#E4CC98]"
              >
                <MessageCircle
                  size={17}
                  aria-hidden="true"
                  className="!text-[#081725]"
                />

                <span className="!text-[#081725]">Contact the Office</span>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="!text-[#081725] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-6 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:border-[#C9A45C]/60 hover:bg-white/5"
              >
                <Scale size={17} aria-hidden="true" />

                <span>Practice Areas</span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-2 text-[10px] leading-6 text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <span>V&amp;P Advocates and Notary · Ahmedabad, Gujarat</span>

              <span>General information only · Not legal advice</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
