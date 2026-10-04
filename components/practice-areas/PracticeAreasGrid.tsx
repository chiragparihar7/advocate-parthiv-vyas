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
          className="mb-8 flex flex-col gap-3 border-b border-[#E7E1D6] pb-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] !text-[#A98543]">
              Selected Areas
            </p>

            <h2 className="mt-2 font-serif text-[34px] leading-tight !text-[#0E2238] sm:text-[40px]">
              Areas of legal practice.
            </h2>
          </div>

          <p className="max-w-md text-[11px] leading-5 !text-[#8993A0] sm:text-right">
            Explore each area to understand its general scope, associated
            matters and relevant considerations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.slug}
              number={area.number}
              title={area.title}
              description={area.shortDescription}
              slug={area.slug}
              icon={area.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}