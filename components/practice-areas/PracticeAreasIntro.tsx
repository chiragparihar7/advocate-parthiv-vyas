"use client";

import { motion } from "framer-motion";
import { ArrowDown, Scale } from "lucide-react";

export default function PracticeAreasIntro() {
  return (
    <section className="bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Areas of Legal Practice
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[28px] leading-tight tracking-[-0.02em] !text-[#0E2238] sm:text-[32px]">
              Every matter has
              <span className="block !text-[#A98543]">
                its own context.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <Scale
                size={19}
                strokeWidth={1.4}
                className="shrink-0 !text-[#A98543]"
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] !text-[#687583]">
                Understand the legal issue
              </p>
            </div>
          </motion.div>

          {/* Introductory Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="text-[14px] leading-7 !text-[#52606D] sm:text-[15px]">
              Legal issues can arise from disputes, property transactions,
              family circumstances, business arrangements, criminal
              allegations, or documentation requirements. Each type of matter
              may involve different legal provisions, supporting documents,
              procedures, and available remedies.
            </p>

            <p className="mt-4 text-[13px] leading-7 !text-[#687583]">
              V&P Advocates and Notary provides information about selected
              areas of legal practice relevant to individuals and businesses
              in Ahmedabad, Gujarat. Explore the sections below to understand
              the general scope of each area and the issues that may need
              consideration in your circumstances.
            </p>

            {/* Bottom Information Strip */}
            <div className="mt-7 flex items-center gap-4 border-t border-[#E7E1D6] pt-5">
              <span className="font-serif text-[22px] !text-[#A98543]">
                01
              </span>

              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] !text-[#0E2238]">
                  Explore the practice areas
                </p>
                <p className="mt-1 text-[11px] leading-5 !text-[#8993A0]">
                  Review the general scope of each legal service.
                </p>
              </div>

              <a
                href="#practice-areas"
                aria-label="Explore the practice areas below"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DCD4C6] text-[#A98543] transition-colors duration-300 hover:border-[#C9A45C] hover:bg-[#F1EADF]"
              >
                <ArrowDown size={16} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Legal Information Note */}
        <div className="mt-10 border-l-2 border-[#C9A45C] bg-[#F5F2EB] px-5 py-4 sm:px-6">
          <p className="text-[11px] leading-6 !text-[#687583]">
            <span className="font-semibold !text-[#0E2238]">
              Please note:{" "}
            </span>
            This information is for general educational purposes and does not
            constitute legal advice. The applicability of any law or remedy
            depends on the specific facts and circumstances of the matter.
          </p>
        </div>
      </div>
    </section>
  );
}