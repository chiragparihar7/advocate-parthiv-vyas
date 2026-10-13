"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Scale,
} from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 sm:py-12 lg:py-14">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-[#C9A45C]/10" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-[320px] w-[320px] rounded-full border border-[#C9A45C]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Main CTA */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] !text-[#E4CC98]">
                V&P Advocates and Notary
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-3xl font-serif text-[38px] leading-[1.08] tracking-[-0.035em] !text-[#FAF8F3] sm:text-[48px] lg:text-[58px]">
              Every legal matter
              <span className="block !text-[#E4CC98]">
                deserves careful consideration.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[13px] leading-7 !text-[#B8C2CC] sm:text-[14px]">
              Whether you need guidance on a dispute, property-related matter,
              family issue, cheque bounce case, or legal documentation, begin
              by understanding the options relevant to your situation.
            </p>

            <p className="mt-3 max-w-2xl text-[12px] leading-6 !text-[#8999A8]">
              Explore the firm’s areas of practice or get in touch to discuss
              the nature of your legal enquiry.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/practice-areas"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] !text-[#081725] transition-colors duration-300 hover:bg-[#E4CC98]"
              >
                <span className="!text-[#081725]">
                  Explore Practice Areas
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  className="!text-[#081725] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 border border-white/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] !text-[#FAF8F3] transition-all duration-300 hover:border-[#C9A45C] hover:bg-white/[0.03]"
              >
                <span className="!text-[#FAF8F3] transition-colors duration-300 group-hover:!text-[#E4CC98]">
                  Make an Enquiry
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="!text-[#E4CC98] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right information panel */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.08]">
                <Scale
                  size={22}
                  strokeWidth={1.3}
                  className="!text-[#E4CC98]"
                />
              </div>

              <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.22em] !text-[#C9A45C]">
                Start With Clarity
              </p>

              <h3 className="mt-3 font-serif text-[26px] leading-tight !text-[#FAF8F3]">
                Understand your legal options.
              </h3>

              <p className="mt-3 text-[12px] leading-6 !text-[#AEB8C2]">
                Share the general nature of your matter to identify an
                appropriate next step for your enquiry.
              </p>

              {/* Contact link */}
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-3 border-b border-[#C9A45C]/40 pb-2 text-[10px] font-bold uppercase tracking-[0.15em] !text-[#E4CC98] transition-colors duration-300 hover:border-[#E4CC98]"
              >
                <span className="!text-[#E4CC98]">
                  Contact the Firm
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="!text-[#E4CC98] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              {/* Location */}
              <div className="mt-7 flex items-start gap-3 border-t border-white/10 pt-5">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 !text-[#C9A45C]"
                />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#C9A45C]">
                    Location
                  </p>
                  <p className="mt-1 text-[12px] !text-[#B8C2CC]">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-start sm:justify-between"
        >
          <div className="flex max-w-3xl items-start gap-3">
            <ShieldCheck
              size={15}
              strokeWidth={1.4}
              className="mt-0.5 shrink-0 !text-[#C9A45C]"
            />
            <p className="text-[10px] leading-6 !text-[#8999A8]">
              Website content is provided for general informational purposes
              only and is not legal advice. Submitting an enquiry does not, by
              itself, establish an advocate-client relationship. Legal outcomes
              depend on the facts, applicable law, and circumstances of each
              matter.
            </p>
          </div>

          <Link
            href="/disclaimer"
            className="group inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] !text-[#C9A45C] transition-colors duration-300 hover:!text-[#E4CC98]"
          >
            <span className="!text-inherit">Read Disclaimer</span>
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="!text-inherit transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}