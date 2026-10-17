
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Gavel,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    number: "01",
    label: "UNDERSTANDING",
    title: "Understanding Your Matter",
    description:
      "Every legal matter begins with understanding the circumstances, identifying the concerns involved, and clarifying the objectives and available legal options.",
    icon: Scale,
  },
  {
    number: "02",
    label: "REVIEW",
    title: "Careful Document Review",
    description:
      "Relevant documents, agreements, notices and records are examined in the context of the matter to identify important facts, legal issues and procedural requirements.",
    icon: FileText,
  },
  {
    number: "03",
    label: "PREPARATION",
    title: "A Considered Legal Approach",
    description:
      "The next steps are considered in light of the facts, applicable law and available remedies, whether the matter involves litigation, documentation or advisory assistance.",
    icon: Gavel,
  },
  {
    number: "04",
    label: "GUIDANCE",
    title: "Clarity Through the Process",
    description:
      "Clients are guided through relevant procedures, documentation requirements and subsequent steps, with an emphasis on clear communication and professional responsibility.",
    icon: CheckCircle2,
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-12 text-white sm:py-14 lg:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
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

        {/* Decorative circles */}
        <div className="absolute -bottom-64 -left-40 h-[500px] w-[500px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -bottom-40 -left-16 h-[300px] w-[300px] rounded-full border border-[#C9A45C]/10" />

        {/* Architectural lines */}
        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/[0.035] lg:block" />

        <div className="absolute bottom-0 right-[7%] top-0 hidden w-px bg-white/[0.025] lg:block" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section header */}
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
                Our Approach
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[43px] leading-[0.98] tracking-[-0.035em] text-[#FAF8F3] sm:text-[56px] lg:text-[68px]">
              Thoughtful preparation,
              <span className="block text-[#C9A45C]">
                considered representation.
              </span>
            </h2>
          </div>

          {/* Introduction */}
          <div className="lg:pb-2">
            <p className="max-w-lg text-[13px] leading-7 text-[#AEB9C5] sm:text-[14px]">
              At V&amp;P Advocates and Notary, legal assistance begins with
              understanding the matter and examining its details. Our approach
              emphasizes careful preparation, clear explanations and attention
              to the legal procedures relevant to each case.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#81909F]">
                Clarity · Preparation · Professional Responsibility
              </span>
            </div>
          </div>
        </motion.div>

        {/* Legal assistance timeline */}
        <div className="relative mt-14 lg:mt-10">
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
                  {/* Timeline node */}
                  <div className="relative z-20 flex items-center justify-between lg:justify-center">
                    <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[#C9A45C]/40 bg-[#0E2238] transition-all duration-500 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:shadow-[0_0_0_8px_rgba(201,164,92,0.06)]">
                      <span className="font-serif text-[20px] text-[#C9A45C] transition-colors duration-500 group-hover:text-[#0E2238]">
                        {item.number}
                      </span>
                    </div>

                    {/* Mobile connector */}
                    <div className="h-px flex-1 bg-white/10 lg:hidden" />
                  </div>

                  {/* Timeline card */}
                  <div className="relative mt-4 h-full overflow-hidden border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#C9A45C]/35 group-hover:bg-white/[0.045] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)] sm:p-7">
                    {/* Gold accent */}
                    <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                    {/* Decorative number */}
                    <div className="pointer-events-none absolute -right-3 -top-8 font-serif text-[130px] leading-none text-white/[0.025]">
                      {item.number}
                    </div>

                    <div className="relative z-10">
                      {/* Icon and label */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.05]">
                          <Icon
                            size={18}
                            strokeWidth={1.3}
                            className="text-[#C9A45C]"
                          />
                        </div>

                        <span className="text-right text-[8px] font-bold uppercase tracking-[0.16em] text-[#C9A45C]">
                          {item.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-8 min-h-[66px] font-serif text-[26px] leading-[1.08] text-[#FAF8F3] transition-colors duration-300 group-hover:text-[#E4CC98] sm:text-[28px]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-5 text-[12px] leading-6 text-[#8F9EAC]">
                        {item.description}
                      </p>

                      {/* Bottom indicator */}
                      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#718291]">
                          Our Approach
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

        {/* Professional information bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-12 border-y border-white/10 py-6 lg:mt-14"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center lg:gap-8">
            {/* Introduction */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
                V&amp;P Advocates and Notary
              </p>

              <p className="mt-2 max-w-md text-[11px] leading-5 text-[#8F9EAC]">
                Legal assistance shaped around the circumstances, documents
                and requirements of each matter.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <Scale
                size={16}
                strokeWidth={1.3}
                className="shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D9E0E6]">
                  Legal Practice
                </p>

                <p className="mt-1 text-[10px] text-[#81909F]">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Practice focus */}
            <div className="flex items-center gap-3">
              <BriefcaseBusiness
                size={16}
                strokeWidth={1.3}
                className="shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D9E0E6]">
                  Practice Focus
                </p>

                <p className="mt-1 text-[10px] text-[#81909F]">
                  Litigation &amp; Documentation
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/practice-areas"
              className="group inline-flex items-center gap-3 self-start text-[9px] font-bold uppercase tracking-[0.17em] text-white transition-colors hover:text-[#E4CC98] lg:self-center"
            >
              Explore Practice Areas

              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* Closing note */}
        <p className="mt-6 max-w-3xl text-[10px] leading-5 text-[#718291]">
          The appropriate legal approach depends on the facts of each matter,
          the documents available and the applicable law. Specific outcomes
          cannot be guaranteed.
        </p>
      </div>
    </section>
  );
}
