"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  Scale,
  MessagesSquare,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const journey = [
  {
    number: "01",
    title: "Understanding Your Matter",
    icon: MessagesSquare,
    description:
      "Understanding the circumstances, concerns, and objectives that shape your legal matter.",
  },
  {
    number: "02",
    title: "Careful Document Review",
    icon: FileSearch,
    description:
      "Reviewing relevant documents and available information to identify important legal considerations.",
  },
  {
    number: "03",
    title: "A Considered Legal Approach",
    icon: Scale,
    description:
      "Evaluating applicable legal options and procedural requirements based on the matter presented.",
  },
  {
    number: "04",
    title: "Clarity Through the Process",
    icon: ShieldCheck,
    description:
      "Providing clear communication about relevant steps, documentation, and the way forward.",
  },
];

export default function ProfessionalJourney() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Our Approach
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#0E2238] sm:text-[48px] lg:text-[54px]">
              Thoughtful preparation,
              <span className="block text-[#A98543]">
                considered representation.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-7 text-[#647180] lg:pb-1">
            Every legal matter has its own circumstances. A structured approach
            helps bring focus to the issues, relevant documents, and available
            legal options.
          </p>
        </motion.div>

        {/* Approach Timeline */}
        <div className="relative mt-14 lg:mt-16">
          {/* Desktop Connector */}
          <div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-[#DDD6CA] lg:block" />

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* Icon Node */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/50 bg-white transition-all duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#FBF7ED]">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#A98543] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Step Content */}
                  <div className="mt-6 border-t border-[#E7E1D6] pt-5 transition-colors duration-300 group-hover:border-[#C9A45C]/70">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-[#A98543]">
                        {item.number}
                      </span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-[#C9A45C] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="mt-4 max-w-[260px] font-serif text-[23px] leading-tight text-[#0E2238]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[280px] text-[12px] leading-7 text-[#647180]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col gap-6 border-t border-[#E7E1D6] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-8 shrink-0 bg-[#C9A45C]" />

            <div>
              <p className="text-[13px] font-medium leading-6 text-[#0E2238]">
                Have a legal matter you would like to discuss?
              </p>

              <p className="mt-1 text-[11px] leading-6 text-[#647180]">
                Explore the available practice areas or get in touch to discuss
                your requirements.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 bg-[#0E2238] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] !text-white opacity-100 transition-colors duration-300 hover:bg-[#081725]"
          >
            <span className="!text-white">Contact the Firm</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.6}
              className="text-[#E4CC98] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Legal Notice */}
        <p className="mt-8 text-[9px] leading-5 text-[#999188]">
          Information on this page describes the firm&apos;s general approach
          to legal assistance. The appropriate course of action depends on the
          facts and circumstances of each matter. No particular legal outcome
          is guaranteed.
        </p>
      </div>
    </section>
  );
}