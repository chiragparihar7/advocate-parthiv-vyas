
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Scale } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] text-white">
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#C9A45C]/[0.06] blur-3xl" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#C9A45C]/15" />

        <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-14 sm:py-16 lg:px-10 lg:py-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C9A45C]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E4CC98]">
            About the Advocate
          </span>

          <span className="text-white/20">/</span>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
            Professional Profile
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A45C]">
              Advocate Parthiv Vyas
            </p>

            <h1 className="max-w-3xl font-serif text-[48px] leading-[0.95] tracking-[-0.04em] text-[#FAF8F3] sm:text-[60px] lg:text-[72px]">
              A professional
              <span className="block text-[#C9A45C]">
                approach to law.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[14px] leading-6 text-[#AAB6C1] sm:text-[15px]">
              Explore the professional background, legal approach and
              principles that shape the practice of Advocate Parthiv Vyas.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/practice-areas"
                className="group inline-flex items-center gap-3 bg-[#C9A45C] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0E2238] transition hover:bg-[#E4CC98]"
              >
                Practice Areas

                <ArrowRight
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#C9A45C] hover:text-[#E4CC98]"
              >
                Contact
              </Link>
            </div>

            {/* Compact information */}
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#C9A45C]" />

                <span className="text-[9px] uppercase tracking-[0.15em] text-white/50">
                  Ahmedabad, Gujarat
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Scale size={13} className="text-[#C9A45C]" />

                <span className="text-[9px] uppercase tracking-[0.15em] text-white/50">
                  Legal Practice
                </span>
              </div>
            </div>
          </motion.div>

          {/* Profile panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-[340px]">
              <div className="border border-[#C9A45C]/20 bg-[#081725] p-2">
                <div className="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#193750] to-[#081725]" />

                  <div className="relative text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A45C]/30">
                      <Scale
                        size={30}
                        strokeWidth={1}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <p className="mt-5 font-serif text-2xl text-[#FAF8F3]">
                      Parthiv Vyas
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
                      Advocate
                    </p>
                  </div>

                  <span className="absolute bottom-4 left-4 font-serif text-6xl text-white/[0.04]">
                    01
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 border border-[#C9A45C]/20 bg-[#FAF8F3] px-4 py-3">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                  Professional Profile
                </p>

                <p className="mt-1 text-[8px] text-[#8993A0]">
                  Verified information
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
