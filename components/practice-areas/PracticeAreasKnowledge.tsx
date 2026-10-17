
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FileText, Scale } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    number: "01",
    title: "Legal Articles",
    description:
      "Learn about legal notices, cheque dishonour proceedings, property documents and other legal topics through general educational information.",
    href: "/legal-articles",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Legal Guidance",
    description:
      "Understand the legal services available for civil disputes, criminal matters, family disputes, property issues and documentation.",
    href: "/contact",
    icon: FileText,
  },
  {
    number: "03",
    title: "Areas of Practice",
    description:
      "Explore legal services including civil litigation, criminal law, matrimonial disputes, revenue matters, cheque bounce cases, legal drafting and notary services.",
    href: "/practice-areas",
    icon: Scale,
  },
];

export default function PracticeAreasKnowledge() {
  return (
    <section className="bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 border-b border-[#DDD6C9] pb-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] !text-[#A98543]">
                Legal Knowledge
              </span>
            </div>

            <h2 className="mt-4 font-serif text-[36px] leading-tight !text-[#0E2238] sm:text-[42px]">
              Understand your legal options.
              <span className="block !text-[#A98543]">
                Start with the right information.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[11px] leading-5 !text-[#7A8490] sm:text-right">
            Explore general legal information and available services.
            Every matter is different, and legal guidance depends on
            its specific facts and circumstances.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                key={resource.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group"
              >
                <Link
                  href={resource.href}
                  className="relative flex h-full flex-col border border-[#DED8CC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-[22px] !text-[#C9A45C]">
                      {resource.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
                      <Icon
                        size={16}
                        strokeWidth={1.3}
                        className="!text-[#A98543]"
                      />
                    </div>
                  </div>

                  <h3 className="mt-7 font-serif text-[24px] leading-snug !text-[#0E2238]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[11px] leading-5 !text-[#727E8A]">
                    {resource.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#8993A0] transition-colors group-hover:!text-[#A98543]">
                      Explore
                    </span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                      className="!text-[#A98543] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Disclaimer */}
        <p className="mt-5 text-[10px] leading-5 !text-[#7A8490]">
          Information on this website is for general educational purposes
          only and does not constitute legal advice or guarantee any
          particular outcome.
        </p>
      </div>
    </section>
  );
}
