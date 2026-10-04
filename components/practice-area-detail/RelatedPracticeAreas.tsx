"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, FileText, Gavel, Scale } from "lucide-react";
import Link from "next/link";
import type { PracticeArea } from "@/data/practiceAreas";

interface RelatedPracticeAreasProps {
  areas: PracticeArea[];
}

const icons = {
  scale: Scale,
  gavel: Gavel,
  building: Building2,
  "file-text": FileText,
};

export default function RelatedPracticeAreas({
  areas,
}: RelatedPracticeAreasProps) {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 border-b border-[#E7E1D6] pb-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] !text-[#A98543]">
                Continue Exploring
              </span>
            </div>

            <h2 className="mt-4 font-serif text-[36px] leading-tight !text-[#0E2238] sm:text-[42px]">
              Related practice areas.
            </h2>
          </div>

          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238]"
          >
            View All Areas

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="!text-[#A98543] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Related Cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = icons[area.icon as keyof typeof icons] ?? Scale;

            return (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="group"
              >
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="relative block h-full border border-[#E4DED3] bg-[#FAF8F3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-[21px] !text-[#C9A45C]">
                      {area.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] bg-white">
                      <Icon
                        size={16}
                        strokeWidth={1.25}
                        className="!text-[#A98543]"
                      />
                    </div>
                  </div>

                  <h3 className="mt-7 font-serif text-[24px] !text-[#0E2238]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 !text-[#737F8B]">
                    {area.shortDescription}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#E7E1D6] pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] !text-[#8993A0] group-hover:!text-[#A98543]">
                      Explore
                    </span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                      className="!text-[#A98543] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}