"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          SUBTLE DECORATIVE ACCENT
      ========================================================= */}
      <div className="pointer-events-none absolute right-[-120px] top-[-140px] h-[420px] w-[420px] rounded-full border border-[#C9A45C]/10" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =========================================================
            MAIN CTA
        ========================================================= */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.28em] !text-[#C9A45C]">
                Continue Exploring
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-3xl font-serif text-[42px] leading-[0.98] tracking-[-0.03em] !text-[#FAF8F3] sm:text-[52px] lg:text-[60px]">
              Learn more about
              <span className="block !text-[#E4CC98]">
                the legal practice.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[13px] leading-7 !text-[#AEB8C2]">
              Explore areas of practice, professional information and legal
              resources, or use the appropriate contact route for an enquiry.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* Primary */}
              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238] transition-all duration-300 hover:bg-[#E4CC98]"
              >
                <span className="!text-[#0E2238]">
                  Explore Practice Areas
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                  className="!text-[#0E2238] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#FAF8F3] transition-all duration-300 hover:border-[#C9A45C]"
              >
                <span className="!text-[#FAF8F3] transition-colors duration-300 group-hover:!text-[#E4CC98]">
                  Contact
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="!text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* =======================================================
              CONTACT SUMMARY
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[270px]"
          >
            {/* Enquiry */}
            <div className="border-t border-white/10 pt-5">
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] !text-[#C9A45C]">
                Professional Enquiry
              </p>

              <p className="mt-2 font-serif text-[23px] leading-tight !text-[#FAF8F3]">
                Appropriate contact route.
              </p>

              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#E4CC98]"
              >
                <span className="!text-[#E4CC98] transition-colors duration-300 group-hover:!text-[#C9A45C]">
                  Send an enquiry
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="!text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Location */}
            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
              <MapPin
                size={15}
                strokeWidth={1.3}
                className="shrink-0 !text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] !text-[#C9A45C]">
                  Location
                </p>

                <p className="mt-1 text-[11px] !text-[#AEB8C2]">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM DISCLAIMER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={14}
              strokeWidth={1.3}
              className="mt-0.5 shrink-0 !text-[#C9A45C]"
            />

            <p className="max-w-3xl text-[9px] leading-5 !text-[#7F8D9A]">
              Website information is provided for general informational
              purposes. An enquiry through this website does not by itself
              establish an advocate-client relationship.
            </p>
          </div>

          <span className="shrink-0 text-[8px] font-bold uppercase tracking-[0.18em] !text-[#A98543]">
            Advocate Parthiv Vyas
          </span>
        </motion.div>
      </div>
    </section>
  );
}