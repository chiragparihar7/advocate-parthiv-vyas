"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  FileText,
  Gavel,
  Scale,
} from "lucide-react";
import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Civil Law",
    description:
      "Civil disputes, claims, notices and related legal procedures.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Criminal Law",
    description:
      "Criminal proceedings, bail-related matters and legal remedies.",
    icon: Gavel,
  },
  {
    number: "03",
    title: "Property Matters",
    description:
      "Property documentation, disputes, agreements and related matters.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Legal Documentation",
    description:
      "Legal notices, agreements, applications and related documentation.",
    icon: FileText,
  },
];

export default function AreasOfPractice() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Areas of Practice
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[52px]">
              Areas of
              <span className="block text-[#A98543]">
                legal practice.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[12px] leading-6 text-[#647180] lg:pb-1">
            Selected areas of legal practice presented for general
            informational purposes.
          </p>
        </motion.div>

        {/* Practice Areas */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group relative border border-[#DDD6CA] bg-white p-6 transition-all duration-300 hover:border-[#C9A45C]/50 hover:-translate-y-0.5 sm:p-7"
              >
                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-300 group-hover:scale-y-100" />

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl text-[#C9A45C]">
                      {area.number}
                    </span>

                    <span className="h-px w-7 bg-[#DDD6CA]" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
                    <Icon
                      size={16}
                      strokeWidth={1.3}
                      className="text-[#A98543]"
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <h3 className="font-serif text-[27px] text-[#0E2238]">
                    {area.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-[11px] leading-5 text-[#647180]">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
                  <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#999188]">
                    Practice Area
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-4 border-t border-[#DDD6CA] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[8px] uppercase tracking-[0.14em] text-[#999188]">
            Practice areas subject to advocate verification
          </p>

          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.17em] text-[#0E2238]"
          >
            Explore All Areas

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}