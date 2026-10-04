"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  HelpCircle,
  Scale,
} from "lucide-react";
import Link from "next/link";

const resources = [
  {
    number: "01",
    title: "Legal Articles",
    description:
      "Educational articles covering selected legal topics, procedures and general legal awareness.",
    icon: BookOpen,
    href: "/legal-articles",
  },
  {
    number: "02",
    title: "FAQs",
    description:
      "Answers to common questions about legal processes and general website information.",
    icon: HelpCircle,
    href: "/faqs",
  },
  {
    number: "03",
    title: "Practice Areas",
    description:
      "Explore selected areas of legal practice and related legal information.",
    icon: Scale,
    href: "/practice-areas",
  },
];

export default function LegalKnowledge() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Legal Knowledge
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[52px]">
              Information that helps
              <span className="block text-[#A98543]">
                explain the law.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-6 text-[#647180] lg:pb-1">
            Explore educational resources designed to provide general legal
            information and useful context.
          </p>
        </motion.div>

        {/* Resources */}
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                key={resource.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <Link
                  href={resource.href}
                  className="group relative block h-full border border-[#DDD6CA] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50 sm:p-7"
                >
                  {/* Gold accent */}
                  <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
                      <Icon
                        size={17}
                        strokeWidth={1.3}
                        className="text-[#A98543]"
                      />
                    </div>

                    <span className="font-serif text-2xl text-[#C9A45C]/45">
                      {resource.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-serif text-[26px] text-[#0E2238]">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-5 text-[#647180]">
                      {resource.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#999188]">
                      Explore
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                      className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-4 border-t border-[#DDD6CA] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-[8px] leading-5 text-[#999188]">
            Educational content is provided for general information and does
            not replace advice specific to an individual legal matter.
          </p>

          <Link
            href="/legal-articles"
            className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#0E2238]"
          >
            Knowledge Centre

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}