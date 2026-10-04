"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Scale,
  ArrowUpRight,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Legal Education",
    icon: GraduationCap,
    description:
      "Academic qualifications and legal education forming the foundation of professional practice.",
  },
  {
    number: "02",
    title: "Legal Enrolment",
    icon: Scale,
    description:
      "Professional enrolment and the beginning of legal practice, based on verified information.",
  },
  {
    number: "03",
    title: "Professional Growth",
    icon: BriefcaseBusiness,
    description:
      "Relevant experience, professional development and areas of legal practice.",
  },
  {
    number: "04",
    title: "Current Practice",
    icon: Scale,
    description:
      "Current professional focus and approved areas of legal work.",
  },
];

export default function ProfessionalJourney() {
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
                Professional Journey
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[52px]">
              A journey shaped by
              <span className="block text-[#A98543]">
                legal practice.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-6 text-[#647180] lg:pb-1">
            A concise overview of professional development, presented through
            verified milestones and relevant experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Desktop Line */}
          <div className="absolute left-[8%] right-[8%] top-[24px] hidden h-px bg-[#DDD6CA] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => {
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
                  className="group relative"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/50 bg-white transition-all duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#FBF7ED]">
                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-[0.18em] text-[#A98543]">
                        {item.number}
                      </span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.4}
                        className="text-[#C9A45C] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#0E2238]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[270px] text-[11px] leading-6 text-[#647180]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center gap-4 border-t border-[#E7E1D6] pt-5"
        >
          <span className="h-px w-8 bg-[#C9A45C]" />

          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#999188]">
            Professional milestones subject to advocate verification
          </p>
        </motion.div>
      </div>
    </section>
  );
}