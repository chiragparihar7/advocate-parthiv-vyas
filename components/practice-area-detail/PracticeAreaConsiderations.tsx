"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileText, Scale, Clock, ShieldCheck } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";

interface PracticeAreaConsiderationsProps {
  area: PracticeArea;
}

const icons = [
  FileText,
  Scale,
  Clock,
  ShieldCheck,
  AlertCircle,
];

export default function PracticeAreaConsiderations({
  area,
}: PracticeAreaConsiderationsProps) {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Important Considerations
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[36px] leading-[1] !text-[#0E2238] sm:text-[42px]">
              Every legal matter
              <span className="block !text-[#A98543]">
                is fact-specific.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-[12px] leading-6 !text-[#737F8B]">
              Several factors may be relevant when understanding a{" "}
              {area.title.toLowerCase()} matter. The applicable considerations
              depend on the circumstances and available information.
            </p>
          </motion.div>

          {/* Right */}
          <div className="border-y border-[#E7E1D6]">
            {area.considerations.map((item, index) => {
              const Icon = icons[index] ?? FileText;

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-4 border-b border-[#E7E1D6] py-4 last:border-b-0"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
                    <Icon
                      size={14}
                      strokeWidth={1.3}
                      className="!text-[#A98543]"
                    />
                  </div>

                  <span className="flex-1 text-[11px] leading-5 !text-[#4D5A67]">
                    {item}
                  </span>

                  <span className="font-serif text-[16px] !text-[#C9A45C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 border-l-2 border-[#C9A45C] bg-[#FBF7ED] px-5 py-4"
        >
          <p className="text-[10px] leading-5 !text-[#737F8B]">
            The information above is general in nature. The relevance of any
            particular consideration depends on the facts, documents and
            circumstances of the individual matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}