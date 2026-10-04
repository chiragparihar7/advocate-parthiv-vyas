"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaOverviewProps {
  area: PracticeArea;
}

export default function PracticeAreaOverview({
  area,
}: PracticeAreaOverviewProps) {
  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Overview
              </span>
            </div>

            <p className="mt-5 font-serif text-[28px] leading-tight !text-[#0E2238]">
              Understanding
              <span className="block !text-[#A98543]">
                {area.title}.
              </span>
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-[14px] leading-8 !text-[#52606D]">
              {area.overview}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#E7E1D6] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-[10px] leading-5 !text-[#8993A0]">
                The appropriate legal approach depends on the facts,
                documentation and circumstances of the individual matter.
              </p>

              <Link
                href="/practice-areas"
                className="group inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238]"
              >
                All Practice Areas

                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                  className="!text-[#A98543] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}