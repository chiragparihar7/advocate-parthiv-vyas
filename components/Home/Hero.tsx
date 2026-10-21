
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] text-white">
      {/* Background */}
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

        {/* Architectural circles */}
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

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1280px] px-6 py-10 sm:py-12 lg:px-10 lg:py-[60px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          {/* LEFT CONTENT */}
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
                V&P ADVOCATES AND NOTARY · LEGAL PRACTICE · AHMEDABAD
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 max-w-[760px] font-serif text-[52px] font-medium leading-[0.9] tracking-[-0.045em] text-[#FAF8F3] sm:text-[64px] md:text-[70px] lg:text-[76px] xl:text-[82px]">
              V&P Advocates
              <span className="block text-[#C9A45C]">
                and Notary
              </span>
            </h1>

            {/* Gold Divider */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-16 bg-[#C9A45C]" />
              <span className="h-1 w-1 rounded-full bg-[#C9A45C]" />
              <span className="h-px w-8 bg-[#C9A45C]/40" />
            </div>

            {/* Main Statement */}
            <h2 className="mt-6 max-w-[760px] font-serif text-2xl leading-[1.25] text-[#F1E8D6] sm:text-[27px] lg:text-[29px]">
              Clear Legal Guidance. Thoughtful Representation.
            </h2>

            {/* Supporting Content */}
            <p className="mt-5 max-w-[680px] text-[14px] leading-6 text-[#B7C3CE] sm:text-[15px] sm:leading-7">
              V&P Advocates and Notary provides legal assistance across civil
              and criminal litigation, property and revenue disputes, family
              matters, commercial disputes, tribunal proceedings, legal
              drafting, and notary services. Our approach focuses on
              understanding each matter, explaining available legal options,
              and preparing carefully for the steps ahead.
            </p>

            <p className="mt-5 max-w-[680px] text-[14px] leading-6 text-[#B7C3CE] sm:text-[15px] sm:leading-7">
              Explore our practice areas, learn about our professional
              approach, and find the appropriate way to contact our office
              in Ahmedabad, Gujarat.
            </p>

            {/* CTA Buttons */}
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

            {/* Professional Information */}
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
                      Litigation, Advisory & Documentation
                    </p>
                  </div>
                </div>

                {/* Professional Approach */}
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
                      Our Approach
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-[#81909F]">
                      Careful Preparation & Clear Communication
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

          {/* RIGHT IMAGE */}
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
