"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 text-white sm:py-12 lg:py-14">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/15" />

        <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#193750]/50 blur-3xl" />

        <div className="absolute right-[20%] top-[25%] h-px w-20 bg-[#C9A45C]/30" />
      </div>

      <div className="relative mx-auto max-w-[1000px] px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A45C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
              Explore Further
            </span>

            <span className="h-px w-8 bg-[#C9A45C]" />
          </div>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
            Looking for information before making an enquiry?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/60">
            Explore the practice areas and frequently asked questions
            to understand the available information before getting in
            touch.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/practice-areas"
              className="group inline-flex h-12 items-center justify-center gap-2 bg-[#C9A45C] px-6 text-sm font-semibold !text-[#081725] transition-all hover:bg-[#E4CC98]"
            >
              <BookOpen size={17} />
              Explore Practice Areas
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/faqs"
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/20 px-6 text-sm font-semibold !text-white transition-colors hover:border-[#C9A45C]/60 hover:bg-white/5"
            >
              <HelpCircle size={17} />
              View Legal FAQs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}