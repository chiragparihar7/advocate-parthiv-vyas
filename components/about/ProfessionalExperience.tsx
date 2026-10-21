"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  FileSearch,
  GraduationCap,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const experienceDetails = [
  {
    number: "01",
    title: "Legal Practice",
    description:
      "Legal assistance across relevant practice areas, guided by the facts and circumstances of each matter.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Matter Preparation",
    description:
      "Careful consideration of relevant documents, supporting information, and applicable legal procedures.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Legal Knowledge",
    description:
      "Attention to relevant laws, procedural requirements, and legal developments applicable to a matter.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Professional Responsibility",
    description:
      "Clear communication, appropriate discretion, and responsible consideration of available legal options.",
    icon: ShieldCheck,
  },
];

export default function ProfessionalExperience() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 h-[380px] w-[380px] rounded-full border border-[#C9A45C]/10 sm:h-[480px] sm:w-[480px]"
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
                Professional Overview
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#0E2238] sm:text-[48px] lg:text-[56px]">
              A thoughtful approach to
              <span className="block text-[#A98543]">
                legal representation.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-7 text-[#647180] lg:pb-1">
            Effective legal assistance begins with understanding the matter,
            examining relevant information, and considering the legal options
            available under the circumstances.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Introductory Panel */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative flex flex-col items-start border-l-2 border-[#C9A45C] pl-6 sm:pl-8"
          >
            <div className="flex h-12 w-12 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
              <BriefcaseBusiness
                size={21}
                strokeWidth={1.35}
                className="text-[#A98543]"
              />
            </div>

            <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
              V&P Advocates and Notary
            </p>

            <h3 className="mt-4 font-serif text-[34px] leading-[1.08] tracking-[-0.025em] text-[#0E2238] sm:text-[42px]">
              Understanding the matter.
              <span className="mt-1 block text-[#A98543]">
                Considering the options.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-[12px] leading-7 text-[#647180]">
              Each legal issue presents different facts, documents, and
              procedural considerations. A structured approach helps identify
              the relevant issues and clarify possible next steps.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#C9A45C]/60 pb-2 text-[10px] font-bold uppercase tracking-[0.15em] !text-[#0E2238] transition-colors duration-300 hover:border-[#0E2238]"
            >
              <span className="!text-[#0E2238]">
                Learn About the Firm
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="text-[#A98543] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* Professional Focus Grid */}
          <div className="grid border-t border-[#DDD6CA] sm:grid-cols-2">
            {experienceDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className={[
                    "group border-b border-[#DDD6CA] py-7 sm:px-6 sm:py-8",
                    index % 2 === 0
                      ? "sm:border-r sm:border-[#DDD6CA]"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-colors duration-300 group-hover:border-[#C9A45C]/60 group-hover:bg-[#FBF7ED]">
                      <Icon
                        size={19}
                        strokeWidth={1.35}
                        className="text-[#A98543]"
                      />
                    </div>

                    <span className="font-serif text-[28px] text-[#C9A45C]/40 transition-colors duration-300 group-hover:text-[#C9A45C]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-[23px] leading-tight text-[#0E2238]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[12px] leading-7 text-[#647180]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col gap-6 border-t border-[#E7E1D6] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
              <Scale
                size={18}
                strokeWidth={1.4}
                className="text-[#A98543]"
              />
            </div>

            <div>
              <h3 className="font-serif text-[24px] leading-tight text-[#0E2238]">
                Have a legal matter to discuss?
              </h3>

              <p className="mt-2 max-w-xl text-[12px] leading-6 text-[#647180]">
                Contact the firm to discuss your requirements and the nature
                of your legal concern.
              </p>
            </div>
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

       
      </div>
    </section>
  );
}