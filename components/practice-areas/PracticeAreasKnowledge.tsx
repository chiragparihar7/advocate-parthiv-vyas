"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FileText, Scale } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    number: "01",
    title: "Legal Articles",
    description:
      "Explore educational information about selected legal topics, procedures and general legal awareness.",
    href: "/legal-articles",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Legal FAQs",
    description:
      "Find answers to common questions about legal processes and general information available on the website.",
    href: "/faqs",
    icon: FileText,
  },
  {
    number: "03",
    title: "Practice Areas",
    description:
      "Explore individual areas of legal practice and the general matters associated with them.",
    href: "/practice-areas",
    icon: Scale,
  },
];

export default function PracticeAreasKnowledge() {
  return (
    <section className="bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
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
              Information that helps
              <span className="block !text-[#A98543]">
                explain the law.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[11px] leading-5 !text-[#7A8490] sm:text-right">
            General legal information is provided for educational purposes and
            should be considered in the context of the individual matter.
          </p>
        </motion.div>

        {/* Resources */}
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

                  <h3 className="mt-7 font-serif text-[24px] !text-[#0E2238]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[11px] leading-5 !text-[#727E8A]">
                    {resource.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#8993A0] group-hover:!text-[#A98543]">
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
      </div>
    </section>
  );
}