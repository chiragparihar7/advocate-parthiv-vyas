"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    number: "01",
    question: "What legal matters does V&P Advocates and Notary handle?",
    answer:
      "The firm provides legal assistance across civil litigation, criminal law, family and matrimonial disputes, land and property matters, cheque bounce cases, contract and commercial disputes, cyber law, preventive detention under PASA, labour and employment law, tribunal matters, legal drafting, and notary services.",
  },
  {
    number: "02",
    question: "How can I discuss my legal matter with the firm?",
    answer:
      "You can use the contact details or enquiry form provided on this website to get in touch. Briefly explain the nature of your matter and any relevant deadlines. The next steps will depend on the circumstances, documents, and applicable law.",
  },
  {
    number: "03",
    question: "What documents should I bring for a legal consultation?",
    answer:
      "Bring documents relevant to your matter, such as agreements, notices, court orders, correspondence, identity documents where required, or property records. The specific documents needed will depend on the type of dispute and the legal assistance being sought.",
  },
  {
    number: "04",
    question: "Can I seek assistance with property or revenue disputes?",
    answer:
      "Legal assistance may be sought for matters involving property title, possession, partition, tenancy, property documents, and revenue proceedings. Depending on the nature of the matter, the appropriate forum may include a civil court, the Special Secretary (Revenue Department), or the Gujarat Revenue Tribunal.",
  },
  {
    number: "05",
    question: "Can the firm assist with cheque bounce cases?",
    answer:
      "The firm handles matters relating to cheque dishonour under Section 138 of the Negotiable Instruments Act, including relevant legal notices, complaints, and court proceedings. The applicable procedure and timelines depend on the facts and circumstances of the case.",
  },
  {
    number: "06",
    question: "Does the firm provide legal drafting and notary services?",
    answer:
      "The firm offers legal drafting for documents such as contracts, agreements, and sale deeds, along with notary services for documents including affidavits and declarations. Requirements depend on the document, its purpose, and applicable legal formalities.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute -left-60 -top-60 h-[650px] w-[650px] rounded-full bg-[#C9A45C]/[0.04] blur-3xl" />

        <div className="absolute -right-44 bottom-[-200px] h-[500px] w-[500px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -right-20 bottom-[-110px] h-[300px] w-[300px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[44px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[56px] lg:text-[66px]">
              Your legal questions,
              <span className="block text-[#A98543]">
                addressed clearly.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1 lg:pl-8">
            <p className="max-w-lg text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              Learn more about our legal practice areas, documentation,
              consultations, and the types of legal assistance available
              through V&P Advocates and Notary in Ahmedabad.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <HelpCircle
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0]">
                General Legal Information
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main FAQ Area */}
        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Left Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden bg-[#0E2238] p-7 text-white sm:p-9 lg:p-10"
          >
            {/* Decorative Background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#C9A45C]/[0.05] blur-2xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full border border-[#C9A45C]/10" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06]">
                <MessageCircle
                  size={21}
                  strokeWidth={1.25}
                  className="text-[#C9A45C]"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-8 max-w-sm font-serif text-[32px] leading-[1.08] text-[#FAF8F3] sm:text-[38px]">
                Need guidance with
                <span className="block text-[#C9A45C]">
                  a legal matter?
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-[12px] leading-6 text-[#AEB9C5]">
                Every legal matter has its own facts and requirements.
                Understanding your circumstances and reviewing relevant
                documents can help identify the appropriate next steps.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              {/* Information Points */}
              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-3">
                  <Scale
                    size={16}
                    strokeWidth={1.3}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E4CC98]">
                      Legal Practice Areas
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-[#AEB9C5]">
                      Explore civil, criminal, property, family, and other
                      legal practice areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={16}
                    strokeWidth={1.3}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E4CC98]">
                      Clear Communication
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-[#AEB9C5]">
                      Share the nature of your matter and the relevant
                      information through the available contact channels.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-9">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition-colors hover:text-[#E4CC98]"
                >
                  Contact the Firm

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="border-t border-[#E7E1D6]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${faq.number}`;

              return (
                <motion.div
                  key={faq.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="border-b border-[#E7E1D6]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="group flex w-full items-start gap-4 py-5 text-left sm:gap-6 sm:py-6"
                  >
                    {/* Number */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border text-[9px] font-bold transition-all duration-300 ${
                        isOpen
                          ? "border-[#C9A45C] bg-[#C9A45C] text-[#0E2238]"
                          : "border-[#E7E1D6] bg-[#FAF8F3] text-[#A98543] group-hover:border-[#C9A45C]"
                      }`}
                    >
                      {faq.number}
                    </span>

                    {/* Question and Answer */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={`pr-2 font-serif text-[19px] leading-[1.3] transition-colors duration-300 sm:text-[22px] ${
                            isOpen
                              ? "text-[#A98543]"
                              : "text-[#0E2238] group-hover:text-[#A98543]"
                          }`}
                        >
                          {faq.question}
                        </h3>

                        {/* Plus / Minus */}
                        <span
                          aria-hidden="true"
                          className={`relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "border-[#C9A45C] bg-[#C9A45C]"
                              : "border-[#E7E1D6] bg-white"
                          }`}
                        >
                          <span
                            className={`absolute h-px w-3 transition-colors ${
                              isOpen ? "bg-[#0E2238]" : "bg-[#A98543]"
                            }`}
                          />

                          <span
                            className={`absolute h-3 w-px transition-all duration-300 ${
                              isOpen
                                ? "scale-y-0 bg-[#0E2238]"
                                : "scale-y-100 bg-[#A98543]"
                            }`}
                          />
                        </span>
                      </div>

                      {/* Animated Answer */}
                      <motion.div
                        id={answerId}
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pt-4 pr-4 text-[12px] leading-6 text-[#647180] sm:pr-8 sm:text-[13px] sm:leading-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Information Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 border-t border-[#E7E1D6] pt-6 lg:grid-cols-[1fr_auto]"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-[#FBF7ED]">
              <HelpCircle
                size={16}
                strokeWidth={1.3}
                className="text-[#C9A45C]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                V&P Advocates and Notary
              </p>

              <p className="mt-1 max-w-2xl text-[10px] leading-5 text-[#8993A0]">
                These answers provide general information. The appropriate
                legal procedure depends on the facts, documents, applicable
                law, and circumstances of each matter.
              </p>
            </div>
          </div>

          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-3 self-center text-[10px] font-bold uppercase tracking-[0.17em] text-[#0E2238]"
          >
            Explore Practice Areas

            <ArrowRight
              size={16}
              strokeWidth={1.6}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

  
      </div>
    </section>
  );
}