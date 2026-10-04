"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaScopeProps {
  area: PracticeArea;
}

export default function PracticeAreaScope({
  area,
}: PracticeAreaScopeProps) {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 border-b border-[#E7E1D6] pb-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-[21px] !text-[#C9A45C]">
                {area.number}
              </span>

              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Scope of Practice
              </span>
            </div>

            <h2 className="mt-4 font-serif text-[36px] leading-tight !text-[#0E2238] sm:text-[42px]">
              Areas of focus.
            </h2>
          </div>

          <p className="max-w-md text-[11px] leading-5 !text-[#8993A0] lg:text-right">
            General information about selected matters associated with{" "}
            {area.title.toLowerCase()}.
          </p>
        </motion.div>

        {/* Scope Items */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {area.scope.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="group relative border border-[#E5DFD4] bg-[#FAF8F3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]"
            >
              {/* Accent */}
              <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex items-start justify-between gap-5">
                <span className="font-serif text-[22px] !text-[#C9A45C]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="!text-[#A98543] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <h3 className="mt-7 font-serif text-[25px] leading-tight !text-[#0E2238]">
                {item.title}
              </h3>

              <p className="mt-3 text-[11px] leading-5 !text-[#737F8B]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}