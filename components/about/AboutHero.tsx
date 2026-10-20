"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] text-white">
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-[#C9A45C]/[0.07] blur-3xl" />

        <div className="absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full border border-[#C9A45C]/10" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />

        <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
        {/* Breadcrumb / Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-9 flex flex-wrap items-center gap-3 sm:mb-12"
        >
          <span className="h-px w-8 bg-[#C9A45C]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4CC98]">
            About the Firm
          </span>

          <span className="text-white/25">/</span>

          <span className="text-[9px] uppercase tracking-[0.16em] text-white/50">
            Professional Approach
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <Scale size={16} strokeWidth={1.4} className="text-[#C9A45C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A45C]">
                V&P Advocates and Notary
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-[44px] leading-[1.02] tracking-[-0.035em] text-[#FAF8F3] sm:text-[58px] lg:text-[70px]">
              A considered approach
              <span className="mt-1 block text-[#C9A45C]">
                to legal assistance.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[13px] leading-7 text-[#B4C0CB] sm:text-[15px]">
              Explore the professional approach of Advocate Parthiv Vyas and the
              legal services offered through V&P Advocates and Notary in
              Ahmedabad, Gujarat.
            </p>

            <p className="mt-4 max-w-xl text-[12px] leading-7 text-[#91A1AE] sm:text-[13px]">
              From disputes and property-related matters to legal drafting and
              notary services, each enquiry calls for careful consideration of
              the relevant facts, documents and applicable legal procedures.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] !text-[#081725] opacity-100 transition-colors duration-300 hover:bg-[#E4CC98]"
              >
                <span className="!text-[#081725]">Explore Practice Areas</span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#081725] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] !text-white transition-colors duration-300 hover:border-[#C9A45C] hover:bg-white/[0.04] hover:!text-[#E4CC98]"
              >
                <span>Make an Enquiry</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Professional Information */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2.5">
                <MapPin
                  size={14}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#C9A45C]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  Ahmedabad, Gujarat
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  size={14}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#C9A45C]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  Matter-specific consideration
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Professional Profile Panel */}

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Keep the original 3:2 landscape ratio to prevent cropping */}
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#F0EAE0] rounded-[10px]">
              <Image
                src="/advocate-parthiv-vyas.png"
                alt="Advocate Parthiv Vyas in a professional legal setting"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 560px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
