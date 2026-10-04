"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, HelpCircle, Scale } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: BookOpen,
    number: "01",
    title: "Legal Articles",
    description:
      "Explore educational content explaining legal concepts, procedures and common questions.",
    href: "/legal-articles",
  },
  {
    icon: HelpCircle,
    number: "02",
    title: "Legal FAQs",
    description:
      "Find concise answers to common questions about legal matters and procedures.",
    href: "/faqs",
  },
  {
    icon: Scale,
    number: "03",
    title: "Practice Areas",
    description:
      "Explore the areas of legal practice presented on the website.",
    href: "/practice-areas",
  },
];

export default function LegalKnowledge() {
  return (
    <section className="bg-[#f5f2eb]">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
                Legal Knowledge
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
              Experience supported by
              <span className="text-[#a98543]"> legal knowledge.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#647180]">
            Continue exploring the website for educational legal
            information and an overview of areas of practice.
          </p>
        </div>

        <div className="mt-11 grid gap-4 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.div
                key={resource.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <Link
                  href={resource.href}
                  className="group block h-full border border-[#e7e1d6] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/50 hover:shadow-[0_14px_35px_rgba(14,34,56,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#0e2238] text-[#e4cc98]">
                      <Icon size={17} strokeWidth={1.5} />
                    </span>

                    <span className="font-serif text-2xl text-[#c9a45c]">
                      {resource.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-2xl text-[#0e2238]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#647180]">
                    {resource.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#a98543]">
                    Explore
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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