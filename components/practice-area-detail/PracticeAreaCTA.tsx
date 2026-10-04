"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaCTAProps {
  area: PracticeArea;
}

export default function PracticeAreaCTA({
  area,
}: PracticeAreaCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* Decorative Accent */}
      <div className="pointer-events-none absolute -right-36 -top-40 h-[460px] w-[460px] rounded-full border border-[#C9A45C]/10" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* Main */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.26em] !text-[#C9A45C]">
                Further Enquiry
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl font-serif text-[40px] leading-[1] tracking-[-0.025em] !text-[#FAF8F3] sm:text-[50px]">
              Have a question about
              <span className="block !text-[#E4CC98]">
                {area.title.toLowerCase()}?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[12px] leading-6 !text-[#AEB8C2]">
              Use the appropriate contact route to make an enquiry about your
              legal matter. Information on this website is general in nature.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238] transition-all duration-300 hover:bg-[#E4CC98]"
              >
                Contact

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="!text-[#0E2238] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#FAF8F3] transition-all duration-300 hover:border-[#C9A45C] hover:!text-[#E4CC98]"
              >
                All Practice Areas

                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="!text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="border-t border-white/10 pt-5 lg:w-[250px]"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={15}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 !text-[#C9A45C]"
              />

              <p className="text-[9px] leading-5 !text-[#7F8D9A]">
                Website information is provided for general informational
                purposes and does not replace advice specific to an individual
                legal matter.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#506477]">
              Advocate Parthiv Vyas
            </span>

            <span className="text-[8px] uppercase tracking-[0.16em] !text-[#667786]">
              {area.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}