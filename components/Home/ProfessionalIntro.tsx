"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function ProfessionalIntro() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Large circle */}
        <div className="absolute -right-[220px] top-[5%] h-[520px] w-[520px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -right-[145px] top-[12%] h-[370px] w-[370px] rounded-full border border-[#C9A45C]/10" />

        {/* Small gold glow */}
        <div className="absolute left-[-180px] bottom-[5%] h-[400px] w-[400px] rounded-full bg-[#C9A45C]/[0.035] blur-3xl" />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
   

        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* =====================================================
              LEFT PROFILE VISUAL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-[500px] lg:mx-0"
          >
            {/* Main profile card */}
            <div className="relative overflow-hidden bg-[#0E2238] shadow-[0_25px_65px_rgba(14,34,56,0.14)]">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Decorative circles */}
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#C9A45C]/10" />

              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-[#C9A45C]/10" />

              {/* Gold vertical accent */}
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#C9A45C]" />

              {/* Inner frame */}
              <div className="absolute inset-5 border border-white/[0.08]" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between px-8 pt-7">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#E4CC98]">
                    Advocate
                  </p>

                  <div className="mt-2 h-px w-9 bg-[#C9A45C]" />
                </div>

                <span className="font-serif text-2xl text-[#C9A45C]">
                  P.V.
                </span>
              </div>

              {/* =================================================
                  PROFILE IMAGE PLACEHOLDER
              ================================================= */}

              <div className="relative mx-10 mt-7 h-[350px] overflow-hidden bg-[#193750]">
                {/* Approved professional photograph can replace this area */}

                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Abstract portrait frame */}
                <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A45C]/30">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C9A45C]/20 bg-[#0E2238]/40">
                    <Scale
                      size={42}
                      strokeWidth={0.9}
                      className="text-[#C9A45C]"
                    />
                  </div>
                </div>

                {/* Vertical line */}
                <div className="absolute bottom-0 left-1/2 top-0 w-px bg-[#C9A45C]/10" />

                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#C9A45C]/10" />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#081725] via-[#081725]/50 to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-7 left-7">
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#C9A45C]">
                    Professional Profile
                  </p>

                  <p className="mt-2 font-serif text-3xl text-[#FAF8F3]">
                    Parthiv Vyas
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#9BA9B5]">
                    Advocate • Ahmedabad
                  </p>
                </div>
              </div>

              {/* Bottom profile details */}
              <div className="relative z-10 px-8 py-7">
                <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#718291]">
                      Location
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-[#F5F1E8]">
                      Ahmedabad, Gujarat
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#718291]">
                      Professional
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-[#F5F1E8]">
                      Advocate
                    </p>
                  </div>
                </div>
              </div>
            </div>

  
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#A98543]">
                About the Advocate
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-3xl font-serif text-[48px] leading-[0.94] tracking-[-0.035em] text-[#0E2238] sm:text-[58px] lg:text-[66px]">
              A considered
              <span className="block text-[#A98543]">
                approach to legal practice.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#647180]">
              Advocate Parthiv Vyas is presented through a professional
              platform designed to make information about legal practice,
              professional background and legal resources easier to understand
              and navigate.
            </p>

            {/* Second paragraph */}
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#647180]">
              The practice profile can include verified information concerning
              education, professional experience, enrolment, areas of practice
              and the legal forums or authorities relevant to the advocate's
              work. Final details should be confirmed before publication.
            </p>

            {/* =================================================
                FEATURE HIGHLIGHTS
            ================================================= */}

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {/* Experience */}
              <div className="group border border-[#E7E1D6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50 hover:shadow-[0_12px_30px_rgba(14,34,56,0.07)]">
                <div className="flex items-center justify-between">
                  <Award
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#C9A45C]"
                  />

                  <span className="text-[9px] font-semibold text-[#C9A45C]">
                    01
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0E2238]">
                  Experience
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#8993A0]">
                  Professional experience and career details.
                </p>
              </div>

              {/* Education */}
              <div className="group border border-[#E7E1D6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50 hover:shadow-[0_12px_30px_rgba(14,34,56,0.07)]">
                <div className="flex items-center justify-between">
                  <BookOpen
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#C9A45C]"
                  />

                  <span className="text-[9px] font-semibold text-[#C9A45C]">
                    02
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0E2238]">
                  Education
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#8993A0]">
                  Academic and professional qualifications.
                </p>
              </div>

              {/* Practice */}
              <div className="group border border-[#E7E1D6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/50 hover:shadow-[0_12px_30px_rgba(14,34,56,0.07)]">
                <div className="flex items-center justify-between">
                  <BriefcaseBusiness
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#C9A45C]"
                  />

                  <span className="text-[9px] font-semibold text-[#C9A45C]">
                    03
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0E2238]">
                  Practice
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#8993A0]">
                  Confirmed areas of legal practice.
                </p>
              </div>
            </div>

            {/* =================================================
                AT A GLANCE
            ================================================= */}

            <div className="mt-8 border-y border-[#E7E1D6] py-5">
              <div className="grid gap-5 sm:grid-cols-3">
                {/* Item */}
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0E2238]">
                      Professional Profile
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#8993A0]">
                      Verified advocate information
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0E2238]">
                      Location
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#8993A0]">
                      Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-3">
                  <Scale
                    size={16}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0E2238]">
                      Legal Resources
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#8993A0]">
                      Practice areas, articles & FAQs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#0E2238] transition-colors hover:text-[#A98543]"
            >
              View Professional Profile

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}