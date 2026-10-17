"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function PracticeAreasHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#C9A45C]/10" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#C9A45C]/[0.06]" />

      <div className="pointer-events-none absolute -bottom-44 -left-40 h-[420px] w-[420px] rounded-full border border-white/[0.035]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em]"
        >
          <Link
            href="/"
            className="!text-[#9AA7B4] transition-colors hover:!text-[#E4CC98]"
          >
            Home
          </Link>

          <span aria-hidden="true" className="!text-[#506477]">
            /
          </span>

          <span aria-current="page" className="!text-[#E4CC98]">
            Practice Areas
          </span>
        </motion.nav>

        {/* Main content */}
        <div className="mt-10 grid items-end gap-12 lg:mt-14 lg:grid-cols-[1fr_300px] lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] !text-[#E4CC98]">
                V&P Advocates and Notary
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl font-serif text-[42px] leading-[1.04] tracking-[-0.035em] !text-[#FAF8F3] sm:text-[56px] lg:text-[70px]">
              Legal services and
              <span className="block !text-[#E4CC98]">
                areas of practice.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[13px] leading-7 !text-[#C0C9D1] sm:text-[14px]">
              Explore legal practice areas handled by V&P Advocates and
              Notary in Ahmedabad, Gujarat. Find general information about
              civil and criminal matters, family disputes, property issues,
              cheque bounce cases, commercial disputes, and legal documentation.
            </p>

            <p className="mt-3 max-w-2xl text-[12px] leading-6 !text-[#8999A8]">
              Every matter depends on its specific facts, available documents,
              applicable law, and procedural requirements. The information on
              this page is intended to help you understand the nature of
              different legal issues.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#practice-areas"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#081725] transition-colors duration-300 hover:bg-[#E4CC98]"
              >
                <span className="!text-[#081725]">
                  Explore Practice Areas
                </span>

                <ArrowDown
                  size={15}
                  strokeWidth={1.7}
                  className="!text-[#081725] transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 border border-white/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#FAF8F3] transition-all duration-300 hover:border-[#C9A45C] hover:bg-white/[0.03]"
              >
                <span className="!text-[#FAF8F3] transition-colors duration-300 group-hover:!text-[#E4CC98]">
                  Discuss Your Enquiry
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="!text-[#E4CC98] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right information panel */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/10 pt-6 lg:mb-1"
          >
            {/* Practice overview */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.07]">
                <Scale
                  size={20}
                  strokeWidth={1.4}
                  className="!text-[#E4CC98]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] !text-[#C9A45C]">
                  Legal Practice
                </p>

                <p className="mt-2 font-serif text-[23px] leading-tight !text-[#FAF8F3]">
                  Guidance for your matter.
                </p>

                <p className="mt-2 text-[11px] leading-6 !text-[#9AA7B4]">
                  Explore relevant areas of law and identify the next steps
                  to consider for your circumstances.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-7 flex items-start gap-3 border-t border-white/10 pt-5">
              <MapPin
                size={16}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0 !text-[#C9A45C]"
              />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#C9A45C]">
                  Location
                </p>

                <p className="mt-1 text-[12px] !text-[#C0C9D1]">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            {/* Information notice */}
            <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-5">
              <ShieldCheck
                size={16}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0 !text-[#C9A45C]"
              />

              <p className="text-[10px] leading-5 !text-[#8999A8]">
                General legal information only. The appropriate legal approach
                depends on the individual facts and circumstances of a matter.
              </p>
            </div>
          </motion.aside>
        </div>

        {/* Bottom section divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 border-t border-white/10 pt-5 sm:mt-16"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] !text-[#81909E]">
              Areas of Legal Practice
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] !text-[#C9A45C]">
              Civil · Criminal · Property · Family · Commercial
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}