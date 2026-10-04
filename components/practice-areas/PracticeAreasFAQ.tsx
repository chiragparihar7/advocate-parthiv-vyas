"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What areas of legal practice are covered on this website?",
    answer:
      "The Practice Areas section provides general information about selected areas of legal practice. The scope of practice should be confirmed with the advocate before relying on any particular information.",
  },
  {
    question:
      "How do I know which practice area relates to my legal matter?",
    answer:
      "The nature of a legal matter depends on its facts, documents and circumstances. The practice-area pages provide general information to help explain different areas of legal practice.",
  },
  {
    question: "What information may be useful before making an enquiry?",
    answer:
      "Depending on the matter, relevant facts, documents, notices, correspondence and other records may help explain the circumstances. The specific information required depends on the individual matter.",
  },
  {
    question:
      "Does information on this website constitute legal advice?",
    answer:
      "No. Website content is provided for general informational purposes and does not constitute legal advice specific to an individual's circumstances.",
  },
];

export default function PracticeAreasFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C9A45C]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] !text-[#A98543]">
              Frequently Asked Questions
            </span>

            <span className="h-px w-9 bg-[#C9A45C]" />
          </div>

          <h2 className="mt-4 font-serif text-[36px] leading-tight !text-[#0E2238] sm:text-[42px]">
            Understanding the
            <span className="block !text-[#A98543]">
              practice areas.
            </span>
          </h2>
        </motion.div>

        {/* FAQ */}
        <div className="mt-10 border-t border-[#E7E1D6]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="border-b border-[#E7E1D6]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-4">
                    <span className="pt-0.5 font-serif text-[17px] !text-[#C9A45C]">
                      0{index + 1}
                    </span>

                    <span className="text-[13px] font-medium !text-[#0E2238]">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.4}
                    className={`shrink-0 !text-[#A98543] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 pl-10 text-[11px] leading-6 !text-[#727E8A]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}