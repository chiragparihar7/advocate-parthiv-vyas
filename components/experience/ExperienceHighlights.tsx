"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Landmark,
} from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    label: "Qualifications",
    title: "Legal Education",
    description:
      "Verified academic qualifications and legal education can be presented here.",
  },
  {
    icon: Landmark,
    label: "Professional Status",
    title: "Enrolment",
    description:
      "Verified enrolment and Bar Council information can be added after approval.",
  },
  {
    icon: BriefcaseBusiness,
    label: "Experience",
    title: "Professional Practice",
    description:
      "Approved professional experience and career milestones can be presented here.",
  },
  {
    icon: Award,
    label: "Professional Development",
    title: "Continuing Learning",
    description:
      "Relevant verified professional development or approved credentials may be included.",
  },
];

export default function ExperienceHighlights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
                Professional Highlights
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
              Verified information,
              <span className="block text-[#a98543]">
                presented with clarity.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#647180] lg:justify-self-end">
            Professional credentials and milestones should communicate
            useful information without exaggeration. Only information
            confirmed and approved by the advocate should appear in the
            final published version.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="border border-[#e7e1d6] bg-[#faf8f3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/50 hover:shadow-[0_12px_30px_rgba(14,34,56,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center bg-[#0e2238] text-[#e4cc98]">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>

                  <span className="font-serif text-2xl text-[#c9a45c]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a98543]">
                  {item.label}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#0e2238]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#647180]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Verification Notice */}
        <div className="mt-8 flex gap-4 border-l-2 border-[#c9a45c] bg-[#fbf7ed] px-5 py-4">
          <p className="text-xs leading-6 text-[#647180]">
            <strong className="text-[#0e2238]">
              Verification note:
            </strong>{" "}
            Specific qualifications, dates, enrolment details,
            memberships and other professional credentials should be
            added only after advocate approval.
          </p>
        </div>
      </div>
    </section>
  );
}