
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What areas of legal practice does V&P Advocates and Notary cover?",
    answer:
      "The listed practice areas include civil litigation, criminal law, family and matrimonial disputes, land, property and revenue disputes, cheque bounce cases, contract law and commercial disputes, cyber law, preventive detention under PASA, labour and employment law, tribunal practice, legal drafting and notary services.",
  },
  {
    question: "Can I seek assistance with a land or property dispute?",
    answer:
      "The listed services include title disputes, partition, possession, tenancy and revenue matters. Assistance with property document verification is also included in the firm's stated areas of practice. The appropriate approach depends on the facts and documents involved.",
  },
  {
    question: "What assistance is available for cheque bounce cases?",
    answer:
      "The firm's stated services include handling cheque dishonour cases under Section 138 of the Negotiable Instruments Act, from legal notices and complaint filing through trial representation. The document states that representation is offered to both complainants and accused.",
  },
  {
    question: "Does the practice include revenue matters and tribunal proceedings?",
    answer:
      "The listed tribunal practice includes matters before the Real Estate Regulatory Authority and its Appellate Tribunal, the Special Secretary (Revenue Department), and the Gujarat Revenue Tribunal. These matters include homebuyer and promoter disputes, revenue appeals and revisions, and land-related matters.",
  },
  {
    question: "Can I enquire about legal drafting and notary services?",
    answer:
      "The listed services include drafting and reviewing contracts, agreements, sale deeds, wills and other legal documents. Notary services include notarisation of affidavits, agreements, declarations and other documents, subject to applicable legal requirements.",
  },
  {
    question: "What should I prepare before making a legal enquiry?",
    answer:
      "You may find it useful to organise the relevant facts, documents, notices and correspondence relating to your matter. The documents needed will depend on the nature of the issue and should be confirmed when making your enquiry.",
  },
  {
    question: "Does the information on this website constitute legal advice?",
    answer:
      "No. Website content is provided for general informational and educational purposes only. It does not replace advice based on the specific facts and documents of an individual matter, nor does it guarantee any particular outcome.",
  },
];

export default function PracticeAreasFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        {/* Section Header */}
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
            Questions about our
            <span className="block !text-[#A98543]">
              legal services.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 !text-[#727E8A]">
            Find general information about the firm's listed practice
            areas, legal documentation and available services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mt-10 border-t border-[#E7E1D6]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `practice-area-faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="border-b border-[#E7E1D6]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="flex items-start gap-4">
                    <span className="pt-0.5 font-serif text-[15px] !text-[#C9A45C] sm:text-[17px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[12px] font-medium leading-6 !text-[#0E2238] sm:text-[13px]">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className={`shrink-0 !text-[#A98543] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-5 pl-9 text-[11px] leading-6 !text-[#727E8A] sm:pl-11 sm:text-[12px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-[10px] leading-5 !text-[#7A8490]">
          These answers provide general information only. The applicability
          of any legal service depends on the facts and circumstances of
          the individual matter.
        </p>
      </div>
    </section>
  );
}
