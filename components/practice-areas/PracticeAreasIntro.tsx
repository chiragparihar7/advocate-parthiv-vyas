"use client";

import { motion } from "framer-motion";

export default function PracticeAreasIntro() {
  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Understanding the Scope
              </span>
            </div>

            <p className="mt-5 font-serif text-[28px] leading-tight !text-[#0E2238]">
              Legal matters require
              <span className="block !text-[#A98543]">
                careful context.
              </span>
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="text-[14px] leading-7 !text-[#52606D]">
              Different legal matters can involve different facts, documents,
              procedures and legal considerations. This section provides an
              overview of selected areas of legal practice and the types of
              matters that may be associated with them.
            </p>

            <div className="mt-7 flex items-center gap-4 border-t border-[#E7E1D6] pt-5">
              <span className="font-serif text-[22px] !text-[#C9A45C]">
                01
              </span>

              <p className="text-[10px] uppercase tracking-[0.16em] !text-[#8993A0]">
                Explore the areas below
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}