"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareText,
  Scale,
  ShieldCheck,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Clarity",
    icon: Scale,
    description:
      "Legal information should be presented clearly, with appropriate context.",
  },
  {
    number: "02",
    title: "Preparation",
    icon: BookOpen,
    description:
      "Relevant facts, documents and legal considerations should be carefully reviewed.",
  },
  {
    number: "03",
    title: "Communication",
    icon: MessageSquareText,
    description:
      "Professional communication should make processes and next steps easier to understand.",
  },
  {
    number: "04",
    title: "Responsibility",
    icon: ShieldCheck,
    description:
      "Professional information should remain accurate, responsible and appropriate.",
  },
];

export default function PracticePhilosophy() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 text-white sm:py-12 lg:py-14">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#C9A45C]/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
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

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4CC98]">
                Professional Philosophy
              </span>
            </div>

            <h2 className="mt-4 max-w-3xl font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#FAF8F3] sm:text-[52px]">
              A considered approach to
              <span className="block text-[#C9A45C]">
                professional legal work.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-6 text-[#9EACB9] lg:pb-1">
            A professional approach built around clarity, preparation,
            communication and responsibility.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="border-l border-[#C9A45C] pl-6 sm:pl-8"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
              Guiding Approach
            </p>

            <h3 className="mt-5 font-serif text-[38px] leading-[1] tracking-[-0.025em] text-[#FAF8F3] sm:text-[46px]">
              Understand.
              <span className="block text-[#E4CC98]">
                Prepare.
              </span>
              <span className="block text-[#E4CC98]">
                Communicate.
              </span>
            </h3>

            <p className="mt-6 max-w-sm text-[11px] leading-6 text-[#718291]">
              The approach focuses on understanding the matter, reviewing
              relevant information and communicating the appropriate legal
              context clearly.
            </p>
          </motion.div>

          {/* Principles */}
          <div className="grid border-t border-white/10 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group border-b border-white/10 py-6 sm:px-6 sm:even:border-l"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center border border-[#C9A45C]/25">
                      <Icon
                        size={16}
                        strokeWidth={1.3}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <span className="font-serif text-2xl text-white/15 transition-colors group-hover:text-[#C9A45C]/40">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-[23px] text-[#FAF8F3]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-[10px] leading-5 text-[#718291]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5"
        >
          <span className="h-px w-7 bg-[#C9A45C]" />

          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#687988]">
            Professional Standards
          </p>
        </motion.div>
      </div>
    </section>
  );
}