"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 text-[#1D2935] sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold Glow */}
        <div className="absolute -right-64 -top-64 h-[700px] w-[700px] rounded-full bg-[#C9A45C]/[0.06] blur-3xl" />

        {/* Decorative Circles */}
        <div className="absolute -bottom-64 -left-48 h-[600px] w-[600px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full border border-[#0E2238]/[0.04]" />

        {/* Architectural Lines */}
        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-[#0E2238]/[0.035] lg:block" />

        <div className="absolute bottom-0 right-[7%] top-0 hidden w-px bg-[#0E2238]/[0.025] lg:block" />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =======================================================
            MAIN CTA GRID
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-center py-4 lg:py-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Professional Contact
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-3xl font-serif text-[48px] leading-[0.94] tracking-[-0.035em] text-[#0E2238] sm:text-[60px] lg:text-[70px]">
              The right place
              <span className="block text-[#A98543]">
                to begin an enquiry.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              Use the appropriate contact route to enquire about the legal
              practice, professional information or a matter requiring
              communication with the office.
            </p>

            <p className="mt-4 max-w-xl text-[11px] leading-6 text-[#8993A0]">
              Contact information shown on this website should be verified
              before publication. An enquiry does not by itself establish an
              advocate-client relationship.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#0E2238] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:bg-[#193750]"
              >
                Contact the Office

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 border border-[#D9D2C6] bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#0E2238] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#FBF7ED]"
              >
                About Advocate

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="text-[#C9A45C] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Bottom Details */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E7E1D6] pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={14}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#8993A0]">
                  Professional information
                </span>
              </div>

              <span className="hidden h-3 w-px bg-[#E7E1D6] sm:block" />

              <div className="flex items-center gap-2">
                <MapPin
                  size={14}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#8993A0]">
                  Ahmedabad, Gujarat
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTACT PANEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-[#C9A45C]/25 bg-[#0E2238] shadow-[0_20px_50px_rgba(14,34,56,0.12)]">
              {/* Internal Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              {/* Gold Circles */}
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#C9A45C]/10" />

              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#C9A45C]/10" />

              {/* Gold Top Line */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

              <div className="relative z-10 p-7 sm:p-9 lg:p-10">
                {/* Panel Heading */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#C9A45C]">
                      Contact Information
                    </p>

                    <h3 className="mt-3 font-serif text-[31px] leading-tight text-[#FAF8F3] sm:text-[36px]">
                      Professional
                      <span className="block text-[#E4CC98]">
                        enquiry channels.
                      </span>
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.05] sm:flex">
                    <Scale
                      size={20}
                      strokeWidth={1.25}
                      className="text-[#C9A45C]"
                    />
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="mt-9 space-y-3">
                  {/* Phone */}
                  <div className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#C9A45C]/25 hover:bg-white/[0.04]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.05]">
                      <Phone
                        size={17}
                        strokeWidth={1.3}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#C9A45C]">
                        Professional Contact
                      </p>

                      <p className="mt-1 text-[11px] text-[#8998A6]">
                        Verified phone number to be added
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#C9A45C]/25 hover:bg-white/[0.04]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.05]">
                      <Mail
                        size={17}
                        strokeWidth={1.3}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#C9A45C]">
                        Email Enquiry
                      </p>

                      <p className="mt-1 text-[11px] text-[#8998A6]">
                        Verified email address to be added
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Contact CTA */}
                <Link
                  href="/contact"
                  className="group mt-6 flex items-center justify-between border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06] p-5 transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C]/10"
                >
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E4CC98]">
                      Appropriate Contact Route
                    </p>

                    <p className="mt-1 font-serif text-[21px] text-[#FAF8F3]">
                      Send an enquiry
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center border border-[#C9A45C]/30">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>

                {/* Small Note */}
                <div className="mt-6 flex items-start gap-3">
                  <ShieldCheck
                    size={14}
                    strokeWidth={1.3}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <p className="text-[9px] leading-5 text-[#687988]">
                    Contact details and professional information should be
                    verified and approved before publication.
                  </p>
                </div>
              </div>

              {/* Bottom Gold Line */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />
            </div>

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -left-4 hidden border border-[#C9A45C]/20 bg-white px-4 py-3 shadow-[0_15px_35px_rgba(14,34,56,0.12)] sm:block lg:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#C9A45C]" />

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#A98543]">
                    Professional Enquiry
                  </p>

                  <p className="mt-0.5 text-[8px] text-[#8993A0]">
                    Contact information
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================================
            FINAL FOOTER STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 border-t border-[#E7E1D6] pt-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
                Advocate Parthiv Vyas
              </p>

              <p className="mt-1 max-w-xl text-[10px] leading-5 text-[#8993A0]">
                Professional legal information, practice resources and
                appropriate contact pathways.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <Phone
                  size={13}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />

                <span className="text-[8px] uppercase tracking-[0.16em] text-[#8993A0]">
                  Contact Office
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail
                  size={13}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />

                <span className="text-[8px] uppercase tracking-[0.16em] text-[#8993A0]">
                  Professional Enquiry
                </span>
              </div>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#0E2238]"
              >
                Contact Page

                <ArrowRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-[8px] leading-5 text-[#8993A0]">
          Contact through this website is intended as an enquiry pathway only.
          Website information does not constitute legal advice and does not by
          itself create an advocate-client relationship.
        </p>
      </div>
    </section>
  );
}