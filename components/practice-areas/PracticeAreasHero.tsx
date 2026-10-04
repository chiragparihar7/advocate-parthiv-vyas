"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function PracticeAreasHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* Subtle Decorative Circle */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#C9A45C]/10" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full border border-white/[0.035]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em]"
        >
          <Link
            href="/"
            className="!text-[#81909E] transition-colors hover:!text-[#E4CC98]"
          >
            Home
          </Link>

          <span className="!text-[#506477]">/</span>

          <span className="!text-[#C9A45C]">
            Practice Areas
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_300px] lg:gap-20">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] !text-[#C9A45C]">
                Legal Practice
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl font-serif text-[46px] leading-[0.96] tracking-[-0.035em] !text-[#FAF8F3] sm:text-[58px] lg:text-[72px]">
              Areas of
              <span className="block !text-[#E4CC98]">
                legal practice.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[13px] leading-7 !text-[#AEB8C2] sm:text-[14px]">
              Explore selected areas of legal practice and understand the
              general matters, procedures and considerations associated with
              each area.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#practice-areas"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238] transition-all duration-300 hover:bg-[#E4CC98]"
              >
                Explore Areas

                <ArrowDown
                  size={14}
                  strokeWidth={1.7}
                  className="!text-[#0E2238] transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#FAF8F3] transition-all duration-300 hover:border-[#C9A45C]"
              >
                Contact

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="!text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Meta */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-white/10 pt-5 lg:mb-1"
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={15}
                strokeWidth={1.3}
                className="!text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#C9A45C]">
                  Location
                </p>

                <p className="mt-1 text-[11px] !text-[#AEB8C2]">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#C9A45C]">
                Information
              </p>

              <p className="mt-2 text-[11px] leading-5 !text-[#81909E]">
                General information about selected areas of legal practice.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 border-t border-white/10 pt-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] !text-[#506477]">
              Practice Areas
            </span>

            <span className="font-serif text-[22px] !text-[#C9A45C]">
              01—04
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}