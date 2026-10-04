"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
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
      "Professional legal practice and relevant experience based on verified information.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Professional Experience",
    description:
      "Relevant professional experience and areas of legal work approved for publication.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Education",
    description:
      "Verified legal qualifications and educational background.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Professional Credentials",
    description:
      "Enrolment and other professional information as approved by the advocate.",
    icon: ShieldCheck,
  },
];

export default function ProfessionalExperience() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
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
                Professional Experience
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[52px]">
              Experience grounded in
              <span className="block text-[#A98543]">
                professional practice.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-6 text-[#647180] lg:pb-1">
            A concise overview of professional background, qualifications and
            experience based on verified information.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">

          {/* Intro Statement */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative border-l-2 border-[#C9A45C] pl-6 sm:pl-8"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
              Professional Background
            </p>

            <h3 className="mt-5 font-serif text-[34px] leading-[1.05] text-[#0E2238] sm:text-[40px]">
              A foundation of
              <span className="block text-[#A98543]">
                legal knowledge.
              </span>
            </h3>

            <p className="mt-5 max-w-sm text-[11px] leading-6 text-[#647180]">
              Professional experience, education and credentials should be
              presented clearly and updated using advocate-approved
              information.
            </p>

            <Link
              href="/experience"
              className="group mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#0E2238]"
            >
              View Full Experience

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Experience Grid */}
          <div className="grid border-t border-[#DDD6CA] sm:grid-cols-2">
            {experienceDetails.map((item, index) => {
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
                  className="group border-b border-[#DDD6CA] py-6 sm:px-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center border border-[#C9A45C]/25 bg-[#FAF8F3]">
                      <Icon
                        size={16}
                        strokeWidth={1.3}
                        className="text-[#A98543]"
                      />
                    </div>

                    <span className="font-serif text-2xl text-[#C9A45C]/40 transition-colors group-hover:text-[#C9A45C]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[23px] text-[#0E2238]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-[10px] leading-5 text-[#647180]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex items-center gap-3 border-t border-[#E7E1D6] pt-5"
        >
          <span className="h-px w-7 bg-[#C9A45C]" />

          <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#999188]">
            Professional information subject to advocate verification
          </p>
        </motion.div>
      </div>
    </section>
  );
}