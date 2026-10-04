"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Gavel,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Large architectural circles */}
        <div className="absolute -right-[240px] -top-[240px] h-[620px] w-[620px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -right-[165px] -top-[165px] h-[470px] w-[470px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -right-[90px] -top-[90px] h-[320px] w-[320px] rounded-full border border-[#C9A45C]/10" />

        {/* Gold glow */}
        <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#C9A45C]/[0.035] blur-3xl" />

        {/* Navy glow */}
        <div className="absolute -bottom-60 -left-60 h-[500px] w-[500px] rounded-full bg-[#193750]/50 blur-3xl" />

        {/* Architectural lines */}
        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/[0.035] lg:block" />

        <div className="absolute bottom-0 right-[7%] top-0 hidden w-px bg-white/[0.025] xl:block" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 py-10 sm:py-12 lg:px-10 lg:py-[60px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#E4CC98] sm:text-[10px]">
                Advocate • Legal Practice • Ahmedabad
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 max-w-[760px] font-serif text-[52px] font-medium leading-[0.9] tracking-[-0.045em] text-[#FAF8F3] sm:text-[64px] md:text-[70px] lg:text-[76px] xl:text-[82px]">
              Advocate
              <span className="block text-[#C9A45C]">Parthiv Vyas</span>
            </h1>

            {/* Gold divider */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-16 bg-[#C9A45C]" />
              <span className="h-1 w-1 rounded-full bg-[#C9A45C]" />
              <span className="h-px w-8 bg-[#C9A45C]/40" />
            </div>

            {/* Main Statement */}
            <h2 className="mt-6 max-w-[760px] font-serif text-2xl leading-[1.25] text-[#F1E8D6] sm:text-[27px] lg:text-[29px]">
              A professional legal website presenting legal information,
              practice areas and professional details with clarity and
              discretion.
            </h2>

            {/* Supporting Content */}
            <p className="mt-5 max-w-[680px] text-[14px] leading-6 text-[#B7C3CE] sm:text-[15px] sm:leading-7">
              Explore information about Advocate Parthiv Vyas, areas of legal
              practice, professional experience, legal articles, frequently
              asked questions and appropriate ways to contact the office.
              Information on this website is provided for general
              informational purposes and should be considered in the context
              of the specific legal matter.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E2238] transition-all duration-300 hover:bg-[#E4CC98]"
              >
                Explore Practice Areas

                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#C9A45C] hover:text-[#E4CC98]"
              >
                Contact Office

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="text-[#C9A45C] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* ===================================================
                PROFESSIONAL INFORMATION
            =================================================== */}

            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                {/* Legal Practice */}
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.045]">
                    <Scale
                      size={16}
                      strokeWidth={1.4}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#F5F1E8]">
                      Legal Practice
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#81909F]">
                      Practice areas & resources
                    </p>
                  </div>
                </div>

                {/* Professional */}
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.045]">
                    <ShieldCheck
                      size={16}
                      strokeWidth={1.4}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#F5F1E8]">
                      Professional
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#81909F]">
                      Clear & responsible
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.045]">
                    <MapPin
                      size={16}
                      strokeWidth={1.4}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#F5F1E8]">
                      Location
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#81909F]">
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT PROFILE PANEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            {/* Main Profile Card */}
            <div className="relative overflow-hidden border border-[#C9A45C]/25 bg-[#081725] shadow-[0_25px_70px_rgba(0,0,0,0.22)]">
              {/* Inner frames */}
              <div className="absolute inset-4 border border-white/[0.08]" />

              <div className="absolute inset-8 border border-[#C9A45C]/10" />

              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "46px 46px",
                }}
              />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between px-7 pt-6">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#E4CC98]">
                    Professional Profile
                  </p>

                  <div className="mt-2 h-px w-9 bg-[#C9A45C]" />
                </div>

                <div className="font-serif text-xl text-[#C9A45C]">
                  P.V.
                </div>
              </div>

              {/* Profile Visual */}
              <div className="relative mx-9 mt-5 h-[290px] overflow-hidden bg-[#193750]/30">
                {/* Approved professional photograph can be added here */}

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/[0.045]">
                    <Gavel
                      size={30}
                      strokeWidth={1}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A45C]">
                    Advocate
                  </p>

                  <p className="mt-2 font-serif text-[30px] text-[#FAF8F3]">
                    Parthiv Vyas
                  </p>

                  <p className="mt-2 max-w-[220px] text-[10px] leading-5 text-[#81909F]">
                    Professional legal information and practice resources
                  </p>
                </div>

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081725] to-transparent" />
              </div>

              {/* Profile Footer */}
              <div className="relative z-10 px-7 pb-7 pt-4">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="font-serif text-[28px] leading-none text-[#FAF8F3]">
                      Parthiv Vyas
                    </p>

                    <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.22em] text-[#81909F]">
                      Advocate • Ahmedabad, Gujarat
                    </p>
                  </div>

                  <div className="hidden text-right sm:block">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-[#687988]">
                      Legal
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#E4CC98]">
                      Practice
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-70" />
            </div>

        
          </motion.div>
        </div>


       
      </div>
    </section>
  );
}