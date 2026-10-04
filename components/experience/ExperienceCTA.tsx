"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ExperienceCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0e2238] text-white">
      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#c9a45c]/10" />
      <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full border border-[#c9a45c]/10" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e4cc98]">
                Continue Exploring
              </span>
            </div>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
              Looking for more information about
              <span className="text-[#c9a45c]">
                {" "}
                legal practice?
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Explore the practice areas and legal knowledge resources
              available on the website, or use the appropriate contact
              pathway for a professional enquiry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-3 sm:flex-row lg:flex-col"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#c9a45c] px-6 py-3.5 text-sm font-semibold !text-[#0e2238] transition-all duration-300 hover:bg-[#e4cc98]"
            >
              <MessageCircle size={17} />
              Contact
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:border-[#c9a45c]/60 hover:bg-white/5"
            >
              <BookOpen size={17} />
              Practice Areas
            </Link>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-5">
          <p className="max-w-4xl text-[11px] leading-6 text-white/38">
            Information presented on this website is intended for general
            informational purposes and should not be treated as legal advice
            for a specific matter. Professional advice should be considered
            based on the particular facts and circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}