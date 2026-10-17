"use client";

import { motion } from "framer-motion";
import PracticeAreaCard from "./PracticeAreaCard";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreasGrid() {
  return (
    <section
      id="practice-areas"
      className="bg-[#FAF8F3] pb-10 sm:pb-12 lg:pb-14"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col gap-4 border-b border-[#E7E1D6] pb-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] !text-[#A98543]">
              V&P Advocates and Notary
            </p>

            <h2 className="mt-2 font-serif text-[32px] leading-tight !text-[#0E2238] sm:text-[40px]">
              Areas of Legal Practice
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-6 !text-[#8993A0] sm:text-right">
            Explore our areas of legal practice and learn about the types of
            matters associated with each service.
          </p>
        </motion.div>

        {/* Practice Area Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.number}
              number={area.number}
              title={area.title}
              description={area.shortDescription}
              icon={area.icon}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 border-t border-[#E7E1D6] pt-5 text-[11px] leading-6 !text-[#8993A0]">
          The information above is for general informational purposes only.
          The availability and suitability of legal services depend on the
          facts and circumstances of each matter.
        </p>
      </div>
    </section>
  );
}