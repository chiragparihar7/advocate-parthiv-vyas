"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileText,
  Gavel,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const practiceAreas = [
  {
    number: "01",
    title: "Civil Litigation",
    shortTitle: "Civil Matters",
    description:
      "Informational guidance relating to civil disputes, claims, notices, pleadings and court procedures, subject to the specific facts and applicable law.",
    icon: Scale,
    topics: ["Civil Disputes", "Claims & Notices", "Court Proceedings"],
  },
  {
    number: "02",
    title: "Criminal Law",
    shortTitle: "Criminal Matters",
    description:
      "General information concerning criminal-law processes, procedural stages, legal remedies and matters requiring careful consideration of the facts.",
    icon: Gavel,
    topics: ["Criminal Proceedings", "Bail Matters", "Legal Remedies"],
  },
  {
    number: "03",
    title: "Property & Disputes",
    shortTitle: "Property Matters",
    description:
      "Information relating to property documentation, disputes, agreements and legal issues that may arise in property-related transactions.",
    icon: Building2,
    topics: ["Property Disputes", "Documentation", "Agreements"],
  },
  {
    number: "04",
    title: "Legal Documentation",
    shortTitle: "Documentation",
    description:
      "Professional information concerning legal notices, agreements, applications and other documentation based on the nature of the matter.",
    icon: FileText,
    topics: ["Legal Notices", "Agreements", "Applications"],
  },
];

export default function PracticeAreas() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Gold glow */}
        <div className="absolute -right-52 -top-52 h-[600px] w-[600px] rounded-full bg-[#C9A45C]/[0.045] blur-3xl" />

        {/* Decorative circles */}
        <div className="absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -left-24 bottom-[-110px] h-[280px] w-[280px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end"
        >
          {/* Left heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Areas of Practice
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[50px] leading-[0.93] tracking-[-0.035em] text-[#0E2238] sm:text-[60px] lg:text-[70px]">
              Legal practice,
              <span className="block text-[#A98543]">
                clearly explained.
              </span>
            </h2>
          </div>

          {/* Right intro */}
          <div className="lg:pb-1">
            <p className="max-w-md text-[14px] leading-7 text-[#647180]">
              Explore selected areas of legal practice through concise,
              informative descriptions of common matters, procedures and
              documentation. Final practice-area information should be
              confirmed and approved before publication.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8993A0]">
                Professional & Informational
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            PRACTICE AREA GRID
        ======================================================= */}

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden border border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A45C]/40 hover:shadow-[0_18px_45px_rgba(14,34,56,0.08)]"
              >
                {/* Hover background */}
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#0E2238] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                {/* Gold side accent */}
                <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                {/* Decorative number */}
                <div className="absolute -right-3 -top-7 select-none font-serif text-[150px] leading-none text-[#0E2238]/[0.035] transition-colors duration-500 group-hover:text-white/[0.035]">
                  {area.number}
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 sm:p-8 lg:p-9">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl text-[#C9A45C]">
                        {area.number}
                      </span>

                      <span className="h-px w-8 bg-[#C9A45C]/40 transition-colors duration-500 group-hover:bg-[#C9A45C]/60" />
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-white transition-all duration-500 group-hover:border-[#C9A45C]/30 group-hover:bg-[#C9A45C]/10">
                      <Icon
                        size={21}
                        strokeWidth={1.25}
                        className="text-[#0E2238] transition-colors duration-500 group-hover:text-[#C9A45C]"
                      />
                    </div>
                  </div>

                  {/* Main title */}
                  <div className="mt-14">
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#A98543] transition-colors duration-500 group-hover:text-[#E4CC98]">
                      {area.shortTitle}
                    </p>

                    <h3 className="mt-2 font-serif text-[32px] leading-tight text-[#0E2238] transition-colors duration-500 group-hover:text-white sm:text-[36px]">
                      {area.title}
                    </h3>

                    <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-[#647180] transition-colors duration-500 group-hover:text-[#B8C3CD]">
                      {area.description}
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="border border-[#E7E1D6] bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#647180] transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.04] group-hover:text-[#B8C3CD]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Bottom link */}
                  <div className="mt-8 flex items-center justify-between border-t border-[#E7E1D6] pt-5 transition-colors duration-500 group-hover:border-white/10">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0] transition-colors duration-500 group-hover:text-[#718291]">
                      Explore information
                    </span>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#C9A45C] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM INFORMATION BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 grid gap-6 border-t border-[#E7E1D6] pt-6 lg:grid-cols-[1fr_auto]"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#FBF7ED]">
              <Scale
                size={15}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                Practice Areas
              </p>

              <p className="mt-1 max-w-xl text-[10px] leading-5 text-[#8993A0]">
                The areas shown above are illustrative website content. The
                final list should reflect only practice areas confirmed by the
                advocate.
              </p>
            </div>
          </div>

          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-3 self-start text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E2238] lg:self-center"
          >
            View All Practice Areas

            <ArrowRight
              size={16}
              strokeWidth={1.7}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}