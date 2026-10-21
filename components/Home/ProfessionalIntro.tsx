"use client";
import Image from "next/image";
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
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[500px] lg:mx-0"
          >
            {/* Courtroom Image */}
            <div className="relative h-[420px] w-full overflow-hidden bg-[#0E2238] sm:h-[520px] lg:h-[650px]">
              <Image
                src="/courtroom-legal.png"
                alt="Elegant courtroom featuring the scales of justice and a judge's gavel"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 500px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
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
                V&P Advocates and Notary
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
              V&P Advocates and Notary is a legal practice based in Ahmedabad,
              Gujarat, providing assistance across litigation, property and
              revenue disputes, family matters, commercial disputes, tribunal
              proceedings, legal drafting, and notary services.
            </p>

            {/* Second paragraph */}
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#647180]">
              We believe that effective legal assistance begins with
              understanding the matter, examining the relevant documents, and
              explaining the available legal options clearly. Our approach
              emphasizes careful preparation, professional responsibility,
              confidentiality, and clear communication throughout the legal
              process.
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
                  Legal Representation
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#8993A0]">
                  Assistance with civil, criminal, property, family, and
                  commercial disputes, subject to the firm's practice and
                  jurisdiction.
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
                  Legal Drafting & Documentation
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#8993A0]">
                  Preparation and review of agreements, contracts, sale deeds,
                  affidavits, and other legal documents.
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
                  Professional Responsibility
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#8993A0]">
                  A focus on careful preparation, clear explanations,
                  discretion, and responsible legal assistance.
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
                      Legal Practice
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#8993A0]">
                      Litigation, Advisory & Documentation
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
              Learn More About the Firm
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
