"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaHeroProps {
  area: PracticeArea;
}

export default function PracticeAreaHero({
  area,
}: PracticeAreaHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-36 -top-36 h-[460px] w-[460px] rounded-full border border-[#C9A45C]/10" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em]"
        >
          <Link
            href="/"
            className="!text-[#718291] transition-colors hover:!text-[#E4CC98]"
          >
            Home
          </Link>

          <ChevronRight
            size={12}
            strokeWidth={1.4}
            className="!text-[#506477]"
          />

          <Link
            href="/practice-areas"
            className="!text-[#718291] transition-colors hover:!text-[#E4CC98]"
          >
            Practice Areas
          </Link>

          <ChevronRight
            size={12}
            strokeWidth={1.4}
            className="!text-[#506477]"
          />

          <span className="!text-[#C9A45C]">
            {area.title}
          </span>
        </motion.nav>

        {/* Main */}
        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="flex items-center gap-3">
              <span className="font-serif text-[22px] !text-[#C9A45C]">
                {area.number}
              </span>

              <span className="h-px w-9 bg-[#C9A45C]/60" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#C9A45C]">
                Practice Area
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-serif text-[46px] leading-[0.95] tracking-[-0.035em] !text-[#FAF8F3] sm:text-[58px] lg:text-[68px]">
              {area.title}
            </h1>

            <p className="mt-5 max-w-2xl text-[13px] leading-7 !text-[#AEB8C2] sm:text-[14px]">
              {area.shortDescription}
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238] transition-all duration-300 hover:bg-[#E4CC98]"
            >
              Contact

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="!text-[#0E2238] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="border-t border-white/10 pt-5"
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={15}
                strokeWidth={1.3}
                className="shrink-0 !text-[#C9A45C]"
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

              <p className="mt-2 text-[11px] leading-5 !text-[#718291]">
                General information about this selected area of legal practice.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 border-t border-white/10 pt-5"
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] !text-[#506477]">
            General Legal Information
          </span>
        </motion.div>
      </div>
    </section>
  );
}