"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function ContactDisclaimer() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#0E2238]/5" />

        <span className="absolute right-[7%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[130px] font-semibold tracking-[-0.04em] text-[#0E2238]/[0.025] lg:block">
          NOTICE
        </span>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[#0E2238] text-white shadow-[0_18px_55px_rgba(14,34,56,0.10)]"
        >
          {/* Gold vertical accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A45C]" />

          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/10" />

          <div className="relative grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* =====================================================
                LEFT
            ===================================================== */}
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/35 bg-[#C9A45C]/10 text-[#E4CC98]">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.4}
                />
              </div>

              <div className="mt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E4CC98]">
                  Important Information
                </p>

                <h2 className="mt-3 max-w-xs font-serif text-3xl leading-tight tracking-[-0.015em] text-white sm:text-4xl">
                  Before submitting an enquiry.
                </h2>
              </div>

              <div className="mt-7 flex items-center gap-2 text-xs text-white/40">
                <span className="h-px w-7 bg-[#C9A45C]" />

                <span>Professional communication</span>
              </div>
            </div>

            {/* =====================================================
                RIGHT
            ===================================================== */}
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex gap-4">
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-[#E4CC98] sm:flex">
                  <AlertCircle
                    size={17}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="max-w-2xl">
                  <p className="text-sm leading-7 text-white/72">
                    Information provided through this website is
                    intended for general professional enquiry
                    purposes. Website content and an initial enquiry
                    should not be treated as legal advice specific to
                    an individual matter.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/72">
                    Please do not submit unnecessary confidential or
                    sensitive information through the website form.
                    A professional relationship should not be assumed
                    solely because an enquiry has been submitted.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Bottom information */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#C9A45C]/10 text-[#E4CC98]">
                    <ShieldCheck
                      size={14}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Protect your information
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Share only the information necessary for an
                      initial enquiry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#C9A45C]/10 text-[#E4CC98]">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Professional enquiry
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Further communication can follow through the
                      appropriate professional channel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}