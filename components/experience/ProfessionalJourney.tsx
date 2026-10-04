"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, RefreshCw } from "lucide-react";

const journey = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Legal Education",
    description:
      "A foundation in legal education provides the basis for understanding legal principles, procedures and professional responsibilities.",
  },
  {
    number: "02",
    icon: Briefcase,
    title: "Professional Development",
    description:
      "Legal practice develops through practical exposure, continued learning and engagement with the requirements of individual matters.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Legal Knowledge",
    description:
      "Ongoing study of legislation, procedures and legal developments supports informed professional work.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Continuing Learning",
    description:
      "Legal practice requires continued attention to changes in law, procedure and professional standards.",
  },
];

export default function ProfessionalJourney() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
                Professional Journey
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
              A career shaped by
              <span className="text-[#a98543]"> continuous development.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#647180]">
            A structured framework for presenting verified stages of
            professional development without overstating experience or
            achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-[#e7e1d6] lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative border border-[#e7e1d6] bg-[#faf8f3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/50 hover:shadow-[0_12px_35px_rgba(14,34,56,0.07)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-3xl text-[#c9a45c]">
                      {item.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e2238] text-[#e4cc98]">
                      <Icon size={17} strokeWidth={1.6} />
                    </span>
                  </div>

                  <h3 className="mt-9 font-serif text-2xl text-[#0e2238]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#647180]">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#c9a45c] transition-all duration-300 group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Verification Note */}
        <div className="mt-8 border border-[#e7e1d6] bg-[#fbf7ed] px-5 py-4">
          <p className="text-xs leading-6 text-[#647180]">
            <span className="font-semibold text-[#0e2238]">
              Professional information:
            </span>{" "}
            Specific dates, institutions, enrolment details and previous
            professional associations should be added only after verification.
          </p>
        </div>
      </div>
    </section>
  );
}   