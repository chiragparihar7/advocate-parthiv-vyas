"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Gavel,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    number: "01",
    label: "ENROLMENT",
    title: "Entry into Legal Practice",
    description:
      "Verified professional enrolment information can be presented here, including the relevant year and registration details after advocate approval.",
    icon: Scale,
  },
  {
    number: "02",
    label: "DEVELOPMENT",
    title: "Professional Development",
    description:
      "Relevant chambers, firms, assignments, professional development and verified experience can be documented at this stage.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    label: "PRACTICE",
    title: "Areas of Practice",
    description:
      "Confirmed areas of current legal practice can be presented with appropriate information about the nature and scope of professional work.",
    icon: Gavel,
  },
  {
    number: "04",
    label: "CURRENT",
    title: "Current Practice",
    description:
      "Current professional location, practice information and other approved details can provide a clear picture of the present practice.",
    icon: CheckCircle2,
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 text-white sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold glow */}
        <div className="absolute -right-60 -top-60 h-[650px] w-[650px] rounded-full bg-[#C9A45C]/[0.045] blur-3xl" />

        {/* Bottom circles */}
        <div className="absolute -bottom-64 -left-40 h-[500px] w-[500px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -bottom-40 -left-16 h-[300px] w-[300px] rounded-full border border-[#C9A45C]/10" />

        {/* Vertical architectural lines */}
        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/[0.035] lg:block" />

        <div className="absolute bottom-0 right-[7%] top-0 hidden w-px bg-white/[0.025] lg:block" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =======================================================
            EDITORIAL HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E4CC98]">
                Professional Experience
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[50px] leading-[0.94] tracking-[-0.035em] text-[#FAF8F3] sm:text-[60px] lg:text-[70px]">
              A journey through
              <span className="block text-[#C9A45C]">
                professional practice.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:pb-2">
            <p className="max-w-lg text-[13px] leading-7 text-[#AEB9C5] sm:text-[14px]">
              A clear professional timeline can present verified milestones,
              experience and current practice information in a structured and
              accessible format.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#81909F]">
                Verified information only
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            TIMELINE
        ======================================================= */}

        <div className="relative mt-14 lg:mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[12%] right-[12%] top-[27px] hidden h-px bg-gradient-to-r from-transparent via-[#C9A45C]/50 to-transparent lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* =================================================
                      NUMBER NODE
                  ================================================= */}

                  <div className="relative z-20 flex items-center justify-between lg:justify-center">
                    <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[#C9A45C]/40 bg-[#0E2238] transition-all duration-500 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:shadow-[0_0_0_8px_rgba(201,164,92,0.06)]">
                      <span className="font-serif text-[20px] text-[#C9A45C] transition-colors duration-500 group-hover:text-[#0E2238]">
                        {item.number}
                      </span>
                    </div>

                    {/* Mobile connector */}
                    <div className="h-px flex-1 bg-white/10 lg:hidden" />
                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div className="relative mt-4 overflow-hidden border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#C9A45C]/35 group-hover:bg-white/[0.045] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)] sm:p-7">
                    {/* Gold left accent */}
                    <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                    {/* Decorative number */}
                    <div className="pointer-events-none absolute -right-3 -top-8 font-serif text-[130px] leading-none text-white/[0.025]">
                      {item.number}
                    </div>

                    <div className="relative z-10">
                      {/* Icon + label */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.05]">
                          <Icon
                            size={18}
                            strokeWidth={1.3}
                            className="text-[#C9A45C]"
                          />
                        </div>

                        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
                          {item.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-8 min-h-[68px] font-serif text-[27px] leading-[1.05] text-[#FAF8F3] transition-colors duration-300 group-hover:text-[#E4CC98] sm:text-[29px]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-5 text-[11px] leading-6 text-[#8F9EAC]">
                        {item.description}
                      </p>

                      {/* Bottom */}
                      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#627484]">
                          Milestone
                        </span>

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          className="text-[#C9A45C] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            PROFESSIONAL INFORMATION BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-12 border-y border-white/10 py-6 lg:mt-14"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center lg:gap-8">
            {/* Main */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
                Professional Timeline
              </p>

              <p className="mt-1 max-w-md text-[10px] leading-5 text-[#718291]">
                A structured overview of verified professional milestones and
                current practice information.
              </p>
            </div>

            {/* Info */}
            <div className="flex items-center gap-3">
              <Scale
                size={15}
                strokeWidth={1.3}
                className="shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#D9E0E6]">
                  Legal Practice
                </p>

                <p className="mt-0.5 text-[8px] text-[#687988]">
                  Confirmed areas
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-center gap-3">
              <BriefcaseBusiness
                size={15}
                strokeWidth={1.3}
                className="shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#D9E0E6]">
                  Experience
                </p>

                <p className="mt-0.5 text-[8px] text-[#687988]">
                  Verified milestones
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/experience"
              className="group inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition-colors hover:text-[#E4CC98]"
            >
              Full Experience

              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* =======================================================
            DISCLAIMER
        ======================================================= */}

        <p className="mt-6 max-w-3xl text-[8px] leading-5 text-[#536575]">
          The timeline currently contains illustrative website-development
          content. Enrolment details, dates, professional associations,
          experience and other credentials should be replaced with information
          verified and approved by the advocate before publication.
        </p>
      </div>
    </section>
  );
}