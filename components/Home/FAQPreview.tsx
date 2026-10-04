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
    question: "What information is available on this website?",
    answer:
      "The website provides general professional information, practice-area details, legal educational resources, frequently asked questions and appropriate contact information.",
  },
  {
    number: "02",
    question: "Does the information on this website constitute legal advice?",
    answer:
      "No. Website content is intended for general informational and educational purposes. Legal advice depends on the specific facts, circumstances and applicable law relating to an individual matter.",
  },
  {
    number: "03",
    question: "Can I contact the advocate about a legal matter?",
    answer:
      "Visitors may use the appropriate contact channel provided on the website to submit an enquiry. Any professional engagement remains subject to the nature of the matter and appropriate communication.",
  },
  {
    number: "04",
    question: "Are all legal matters covered by the information provided?",
    answer:
      "No. Legal matters can vary significantly based on facts, documents, jurisdiction and applicable law. The website presents selected general information and should not be treated as an exhaustive resource.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

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

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[50px] leading-[0.94] tracking-[-0.035em] text-[#0E2238] sm:text-[60px] lg:text-[70px]">
              Common questions,
              <span className="block text-[#A98543]">
                clearly answered.
              </span>
            </h2>
          </div>

          {/* Right intro */}
          <div className="lg:pb-1 lg:pl-8">
            <p className="max-w-lg text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              Find general information about the website, legal resources,
              professional enquiries and the nature of information provided
              through this platform.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <HelpCircle
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0]">
                General Information
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN FAQ AREA
        ======================================================= */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:mt-14">
          {/* =====================================================
              LEFT INFORMATION PANEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden bg-[#0E2238] p-8 text-white sm:p-9 lg:p-10"
          >
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            {/* Gold glow */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#C9A45C]/[0.05] blur-2xl" />

            {/* Decorative circles */}
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
              <h3 className="mt-9 max-w-sm font-serif text-[34px] leading-[1.05] text-[#FAF8F3] sm:text-[39px]">
                Need more
                <span className="block text-[#C9A45C]">
                  information?
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-[12px] leading-6 text-[#AEB9C5]">
                The answers provided here are general in nature. A specific
                legal matter may require consideration of its individual facts,
                documents and applicable law.
              </p>

              {/* Divider */}
              <div className="mt-8 h-px bg-white/10" />

              {/* Information points */}
              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-3">
                  <Scale
                    size={15}
                    strokeWidth={1.3}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E4CC98]">
                      General Legal Information
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-[#718291]">
                      Explore educational resources and selected legal topics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={15}
                    strokeWidth={1.3}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E4CC98]">
                      Professional Information
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-[#718291]">
                      Review professional details and appropriate contact
                      pathways.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-9">
                <Link
                  href="/faqs"
                  className="group inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition-colors hover:text-[#E4CC98]"
                >
                  View All FAQs

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              FAQ ACCORDION
          ===================================================== */}

          <div className="border-t border-[#E7E1D6]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

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
                    className="group flex w-full items-start gap-5 py-6 text-left sm:gap-7 sm:py-7"
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

                    {/* Question */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <h3
                          className={`pr-4 font-serif text-[22px] leading-[1.2] transition-colors duration-300 sm:text-[25px] ${
                            isOpen
                              ? "text-[#A98543]"
                              : "text-[#0E2238] group-hover:text-[#A98543]"
                          }`}
                        >
                          {faq.question}
                        </h3>

                        {/* Plus / minus */}
                        <span
                          className={`relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "border-[#C9A45C] bg-[#C9A45C]"
                              : "border-[#E7E1D6] bg-white"
                          }`}
                        >
                          <span
                            className={`absolute h-px w-3 transition-colors ${
                              isOpen
                                ? "bg-[#0E2238]"
                                : "bg-[#A98543]"
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

                      {/* Answer */}
                      <motion.div
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
                        <p className="max-w-2xl pt-4 pr-8 text-[12px] leading-6 text-[#647180] sm:text-[13px] sm:leading-7">
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

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 border-t border-[#E7E1D6] pt-6 lg:grid-cols-[1fr_auto]"
        >
          {/* Information */}
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
                Frequently Asked Questions
              </p>

              <p className="mt-1 max-w-2xl text-[10px] leading-5 text-[#8993A0]">
                FAQs are intended to provide general information and should be
                reviewed for accuracy and currency before publication.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/faqs"
            className="group inline-flex items-center gap-3 self-center text-[10px] font-bold uppercase tracking-[0.17em] text-[#0E2238]"
          >
            Explore All Questions

            <ArrowRight
              size={16}
              strokeWidth={1.6}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-[8px] leading-5 text-[#8993A0]">
          FAQ content is provided for general informational purposes only and
          does not constitute legal advice or create an advocate-client
          relationship.
        </p>
      </div>
    </section>
  );
}