"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareText,
  Scale,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Clarity in Guidance",
    icon: Scale,
    description:
      "Legal issues and available options should be explained in clear, accessible language, with appropriate context.",
  },
  {
    number: "02",
    title: "Careful Preparation",
    icon: BookOpen,
    description:
      "Relevant facts, supporting documents, and applicable legal considerations deserve thoughtful attention.",
  },
  {
    number: "03",
    title: "Meaningful Communication",
    icon: MessageSquareText,
    description:
      "Understanding the process and potential next steps helps clients make more informed decisions about their matters.",
  },
  {
    number: "04",
    title: "Professional Responsibility",
    icon: ShieldCheck,
    description:
      "Legal assistance should be approached with discretion, accuracy, and respect for professional obligations.",
  },
];

export default function PracticePhilosophy() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 text-white sm:py-12 lg:py-14">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#C9A45C]/10 sm:h-[540px] sm:w-[540px]" />

        <div className="absolute -right-16 -top-24 h-[300px] w-[300px] rounded-full border border-[#C9A45C]/[0.07] sm:h-[400px] sm:w-[400px]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A45C]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#C9A45C]/[0.025] blur-3xl" />
      </div>

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

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4CC98]">
                Our Philosophy
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#FAF8F3] sm:text-[48px] lg:text-[56px]">
              Legal assistance built around
              <span className="block text-[#C9A45C]">
                clarity and consideration.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-7 text-[#B0BBC5] lg:pb-1">
            Every legal matter has its own circumstances. A thoughtful
            approach begins with understanding the issue, examining the
            available information, and explaining relevant legal considerations.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Guiding Statement */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-start border-l border-[#C9A45C] pl-6 sm:pl-9"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9A45C]">
              Guiding Principles
            </span>

            <h3 className="mt-7 font-serif text-[40px] leading-[1.08] tracking-[-0.025em] text-[#FAF8F3] sm:text-[48px]">
              Understand.
              <span className="block text-[#E4CC98]">Prepare.</span>
              <span className="block text-[#E4CC98]">Communicate.</span>
            </h3>

            <p className="mt-6 max-w-sm text-[12px] leading-7 text-[#A5B2BE]">
              The circumstances of a matter guide the questions to consider,
              the documents to review, and the legal options that may be
              available. Clear communication helps keep the process
              understandable.
            </p>

            <Link
              href="/practice-areas"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#C9A45C]/50 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] !text-white transition-colors duration-300 hover:border-[#E4CC98]"
            >
              <span className="!text-white">
                Explore Practice Areas
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="text-[#E4CC98] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className={[
                    "group border-b border-white/10 py-7 sm:px-6 sm:py-8",
                    index % 2 === 0 ? "sm:border-r sm:border-white/10" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#C9A45C]/30 bg-white/[0.025] transition-colors duration-300 group-hover:border-[#C9A45C]/70 group-hover:bg-[#C9A45C]/[0.07]">
                      <Icon
                        size={19}
                        strokeWidth={1.35}
                        className="text-[#E4CC98]"
                      />
                    </div>

                    <span className="font-serif text-[28px] text-white/15 transition-colors duration-300 group-hover:text-[#C9A45C]/50">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-[24px] leading-tight text-[#FAF8F3]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[300px] text-[12px] leading-7 text-[#A5B2BE]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#C9A45C]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C0C9D1]">
              A Considered Approach to Legal Work
            </p>
          </div>

          <p className="max-w-md text-[10px] leading-6 text-[#8999A8] sm:text-right">
            Legal options and procedures depend on the facts, applicable law,
            and circumstances of each individual matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}