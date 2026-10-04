"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaMattersProps {
  area: PracticeArea;
}

export default function PracticeAreaMatters({
  area,
}: PracticeAreaMattersProps) {
  return (
    <section className="bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:items-center">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Related Matters
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[36px] leading-[1] !text-[#0E2238] sm:text-[42px]">
              Matters commonly
              <span className="block !text-[#A98543]">
                associated with this area.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-[12px] leading-6 !text-[#737F8B]">
              The following provides a general overview and may not apply to
              every individual matter.
            </p>
          </motion.div>

          {/* Matters */}
          <div className="border-y border-[#DDD6C9]">
            {area.matters.map((matter, index) => (
              <motion.div
                key={matter}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="flex items-center gap-4 border-b border-[#E3DDD2] py-4 last:border-b-0"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#C9A45C]/30 bg-[#FBF7ED]">
                  <Check
                    size={13}
                    strokeWidth={1.6}
                    className="!text-[#A98543]"
                  />
                </div>

                <span className="text-[12px] !text-[#394754]">
                  {matter}
                </span>

                <span className="ml-auto font-serif text-[15px] !text-[#C9A45C]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}