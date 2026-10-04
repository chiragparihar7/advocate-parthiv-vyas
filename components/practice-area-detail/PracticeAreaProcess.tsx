"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  Search,
} from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaProcessProps {
  area: PracticeArea;
}

const icons = [
  Search,
  FileSearch,
  ClipboardCheck,
  MessageCircle,
];

export default function PracticeAreaProcess({
  area,
}: PracticeAreaProcessProps) {
  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#C9A45C]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
              General Approach
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[36px] leading-tight !text-[#0E2238] sm:text-[42px]">
            Understanding the
            <span className="block !text-[#A98543]">
              process.
            </span>
          </h2>

          <p className="mt-4 text-[12px] leading-6 !text-[#737F8B]">
            A legal matter may involve different steps depending on its facts,
            documents and procedural requirements. The following provides a
            general framework rather than a fixed process.
          </p>
        </motion.div>

        {/* Process */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {area.process.map((item, index) => {
            const Icon = icons[index] ?? Search;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="relative border border-[#E4DED3] bg-white p-6"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[24px] !text-[#C9A45C]">
                    {item.step}
                  </span>

                  <Icon
                    size={17}
                    strokeWidth={1.25}
                    className="!text-[#A98543]"
                  />
                </div>

                <h3 className="mt-8 font-serif text-[24px] !text-[#0E2238]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 !text-[#737F8B]">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-8 bg-[#C9A45C]" />
              </motion.div>
            );
          })}
        </div>

        {/* Context */}
        <div className="mt-8 border-t border-[#E7E1D6] pt-5">
          <p className="text-[9px] leading-5 !text-[#8993A0]">
            The process described above is general in nature. The appropriate
            steps for a specific {area.title.toLowerCase()} matter depend on
            the circumstances and applicable legal requirements.
          </p>
        </div>
      </div>
    </section>
  );
}