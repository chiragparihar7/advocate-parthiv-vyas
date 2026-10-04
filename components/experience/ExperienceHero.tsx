"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
import Link from "next/link";

export default function ExperienceHero() {
  return (
    <section className="relative overflow-hidden bg-[#0e2238] text-white">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#c9a45c]/10" />
      <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full border border-[#c9a45c]/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#193750]/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex items-center gap-2 text-sm text-white/55"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#e4cc98]"
          >
            Home
          </Link>

          <span className="text-[#c9a45c]">/</span>

          <span className="text-white/80">Experience</span>
        </motion.nav>

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px]">
          {/* Main Content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e4cc98]">
                Professional Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.025em] text-[#faf8f3] sm:text-6xl lg:text-7xl"
            >
              Experience shaped by
              <span className="block text-[#c9a45c]">
                knowledge and preparation.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 max-w-2xl text-[16px] leading-8 text-white/68 sm:text-[17px]"
            >
              An overview of professional development, legal practice,
              knowledge and the principles that guide a careful approach
              to legal matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-md bg-[#c9a45c] px-5 py-3 text-sm font-semibold !text-[#0e2238] transition-all duration-300 hover:bg-[#e4cc98]"
              >
                About the Advocate
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold !text-white transition-all duration-300 hover:border-[#c9a45c]/60 hover:bg-white/5"
              >
                Practice Areas
              </Link>
            </motion.div>
          </div>

          {/* Side Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l border-white/10 pl-6 lg:pb-2"
          >
            <div className="mb-7">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a45c]">
                Professional Profile
              </div>

              <p className="text-sm leading-7 text-white/60">
                Verified professional information, career development
                and areas of experience can be presented here.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <BriefcaseBusiness
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c9a45c]"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/40">
                    Focus
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Legal practice & professional development
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c9a45c]"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/40">
                    Professional Location
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center gap-4 border-t border-white/10 pt-5"
        >
          <span className="font-serif text-2xl text-[#c9a45c]">
            01
          </span>

          <span className="h-px w-10 bg-white/20" />

          <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            Experience & Professional Development
          </span>
        </motion.div>
      </div>
    </section>
  );
}