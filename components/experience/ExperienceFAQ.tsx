"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does professional legal experience involve?",
    answer:
      "Professional legal experience can involve understanding facts, reviewing documents, analysing relevant legal considerations, preparing appropriate materials and communicating procedural information clearly.",
  },
  {
    question: "Why is preparation important in a legal matter?",
    answer:
      "Preparation helps organise relevant facts and documents and provides a clearer basis for considering the legal and procedural issues involved in a particular matter.",
  },
  {
    question: "Does every legal matter follow the same process?",
    answer:
      "No. The appropriate process can vary depending on the nature of the matter, applicable law, jurisdiction, documents, facts and procedural requirements.",
  },
  {
    question: "Where can I learn more about the areas of legal practice?",
    answer:
      "The Practice Areas section provides general information about the areas of practice presented on this website. The information should be read together with the applicable facts and circumstances of an individual matter.",
  },
  {
    question: "Can information on this website be treated as legal advice?",
    answer:
      "Website content is provided for general informational purposes. It should not be treated as legal advice for a specific matter. Appropriate professional advice should be obtained based on the particular circumstances.",
  },
];

export default function ExperienceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1000px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a45c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
              Frequently Asked Questions
            </span>

            <span className="h-px w-8 bg-[#c9a45c]" />
          </div>

          <h2 className="font-serif text-4xl tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
            Questions about professional experience.
          </h2>
        </div>

        {/* FAQ */}
        <div className="border-y border-[#e7e1d6]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#e7e1d6] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="flex items-start gap-4">
                    <span className="pt-0.5 font-serif text-sm text-[#c9a45c]">
                      0{index + 1}
                    </span>

                    <span className="font-serif text-lg text-[#0e2238] sm:text-xl">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#a98543] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 pl-10 text-sm leading-7 text-[#647180]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}