"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HelpCircle,
  Scale,
} from "lucide-react";
import Link from "next/link";

const resources = [
  {
    number: "01",
    eyebrow: "Legal Insights",
    title: "Legal Articles",
    description:
      "Explore educational articles explaining selected areas of law, legal procedures, documentation, and general legal awareness.",
    icon: BookOpen,
    href: "/legal-articles",
    action: "Read Articles",
  },
  {
    number: "02",
    eyebrow: "Common Questions",
    title: "Legal FAQs",
    description:
      "Find general information about legal processes, preparing for a consultation, and understanding common legal concerns.",
    icon: HelpCircle,
    href: "/contact",
    action: "Ask a Question",
  },
  {
    number: "03",
    eyebrow: "Legal Services",
    title: "Practice Areas",
    description:
      "Discover the legal matters covered by the firm, from civil and property disputes to documentation and other legal services.",
    icon: Scale,
    href: "/practice-areas",
    action: "Explore Services",
  },
];

export default function LegalKnowledge() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-[340px] w-[340px] rounded-full border border-[#C9A45C]/10 sm:h-[440px] sm:w-[440px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Legal Knowledge Centre
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#0E2238] sm:text-[48px] lg:text-[56px]">
              Understand your legal options.
              <span className="block text-[#A98543]">
                Start with knowledge.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-7 text-[#647180] lg:pb-1">
            Access general legal information to better understand common
            issues, relevant procedures, and the services available through
            V&P Advocates and Notary.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.article
                key={resource.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group h-full"
              >
                <Link
                  href={resource.href}
                  className="relative flex h-full min-h-[340px] flex-col overflow-hidden border border-[#DDD6CA] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/60 hover:shadow-[0_16px_40px_rgba(14,34,56,0.07)] sm:p-8"
                >
                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />

                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-colors duration-300 group-hover:border-[#C9A45C]/50 group-hover:bg-[#FBF7ED]">
                      <Icon
                        size={21}
                        strokeWidth={1.35}
                        className="text-[#A98543]"
                      />
                    </div>

                    <span className="font-serif text-[29px] leading-none text-[#C9A45C]/45 transition-colors duration-300 group-hover:text-[#C9A45C]">
                      {resource.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-8 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#A98543]">
                      {resource.eyebrow}
                    </p>

                    <h3 className="mt-3 font-serif text-[27px] leading-tight text-[#0E2238]">
                      {resource.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-7 text-[#647180]">
                      {resource.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-[#EEEAE2] pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#0E2238]">
                      {resource.action}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] transition-all duration-300 group-hover:border-[#0E2238] group-hover:bg-[#0E2238]">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#A98543] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E4CC98]"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-6 border-t border-[#DDD6CA] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="font-serif text-[25px] leading-tight text-[#0E2238] sm:text-[28px]">
              Need information specific to your matter?
            </h3>

            <p className="mt-2 max-w-xl text-[12px] leading-6 text-[#647180]">
              General legal resources are a starting point. Your circumstances
              may require an individual assessment.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 bg-[#0E2238] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] !text-white transition-colors duration-300 hover:bg-[#081725]"
          >
            <span className="!text-white">Contact the Firm</span>

            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="text-[#E4CC98] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Legal Disclaimer */}
        <p className="mt-7 text-[10px] leading-6 text-[#999188]">
          The resources provided are for general informational and educational
          purposes only. They do not constitute legal advice and should not
          replace advice based on the facts and circumstances of an individual
          matter.
        </p>
      </div>
    </section>
  );
}