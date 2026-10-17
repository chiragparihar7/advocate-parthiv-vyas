
"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PracticeAreasCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* Decorative Accent */}
      <div className="pointer-events-none absolute right-[-130px] top-[-180px] h-[480px] w-[480px] rounded-full border border-[#C9A45C]/10" />
      <div className="pointer-events-none absolute bottom-[-220px] left-[-160px] h-[380px] w-[380px] rounded-full border border-[#C9A45C]/10" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.26em] !text-[#C9A45C]">
                Discuss Your Legal Matter
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl font-serif text-[40px] leading-[1] tracking-[-0.025em] !text-[#FAF8F3] sm:text-[50px]">
              Every legal matter deserves
              <span className="block !text-[#E4CC98]">
                careful consideration.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[12px] leading-6 !text-[#AEB8C2]">
              From civil and property disputes to cheque bounce cases,
              legal drafting and notary services, explore the firm's
              listed practice areas or make an enquiry about your
              specific circumstances.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#081725] transition-all duration-300 hover:bg-[#E4CC98]"
              >
                <span className="!text-[#081725]">Make an Enquiry</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="!text-[#081725] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#FAF8F3] transition-all duration-300 hover:border-[#C9A45C] hover:!text-[#E4CC98]"
              >
                <span>Explore Practice Areas</span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="!text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Side Note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="border-t border-white/10 pt-5 lg:w-[250px]"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 !text-[#C9A45C]"
              />

              <div>
                <h3 className="text-[11px] font-medium !text-[#E4CC98]">
                  Clear and Considered Guidance
                </h3>

                <p className="mt-2 text-[10px] leading-5 !text-[#AEB8C2]">
                  The appropriate legal approach depends on the facts,
                  documents and circumstances of each individual matter.
                </p>

                <Link
                  href="/disclaimer"
                  className="mt-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] !text-[#C9A45C] transition-colors hover:!text-[#E4CC98]"
                >
                  Read Disclaimer
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#C9A45C]">
              V&P Advocates and Notary
            </span>

            <span className="text-[9px] uppercase tracking-[0.16em] !text-[#AEB8C2]">
              Legal Services · Ahmedabad, Gujarat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
