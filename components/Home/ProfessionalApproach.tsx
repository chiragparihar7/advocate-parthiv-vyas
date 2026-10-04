"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  MessageSquare,
  Scale,
  ShieldCheck,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Scale,
    title: "Legal Clarity",
    description:
      "Legal information should be communicated in a clear, structured and understandable manner.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Knowledge",
    description:
      "Educational resources can help visitors understand relevant legal concepts, terminology and procedures.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Communication",
    description:
      "Professional information should provide a clear and appropriate pathway for enquiries and communication.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Professional Responsibility",
    description:
      "Published professional information should remain accurate, verified and appropriately reviewed.",
  },
];

export default function ProfessionalApproach() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold glow */}
        <div className="absolute -left-56 -top-56 h-[620px] w-[620px] rounded-full bg-[#C9A45C]/[0.055] blur-3xl" />

        {/* Decorative circles */}
        <div className="absolute -right-48 bottom-[-220px] h-[550px] w-[550px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -right-24 bottom-[-140px] h-[340px] w-[340px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =======================================================
            TOP INTRO
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          {/* Left label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Professional Approach
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0]">
                Principles of presentation
              </span>

              <span className="h-px w-8 bg-[#C9A45C]/40" />
            </div>
          </div>

          {/* Main heading */}
          <div>
            <h2 className="max-w-4xl font-serif text-[50px] leading-[0.94] tracking-[-0.035em] text-[#0E2238] sm:text-[60px] lg:text-[70px]">
              Information presented
              <span className="block text-[#A98543]">
                with clarity and purpose.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN EDITORIAL AREA
        ======================================================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          {/* =====================================================
              LEFT STATEMENT PANEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden bg-[#0E2238] p-8 text-white sm:p-10 lg:p-11"
          >
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/15" />

            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#C9A45C]/10" />

            {/* Gold corner */}
            <div className="absolute right-0 top-0 h-20 w-20 border-l border-b border-[#C9A45C]/20" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06]">
                <Scale
                  size={21}
                  strokeWidth={1.25}
                  className="text-[#C9A45C]"
                />
              </div>

              {/* Statement */}
              <h3 className="mt-10 max-w-md font-serif text-[36px] leading-[1.05] text-[#FAF8F3] sm:text-[42px]">
                A professional
                <span className="block text-[#C9A45C]">
                  approach to information.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-[13px] leading-7 text-[#AEB9C5]">
                The website is structured to present professional information,
                legal resources and communication pathways in a way that is
                clear, measured and appropriate for visitors.
              </p>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-white/10" />

              {/* Bottom statement */}
              <div className="mt-auto pt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.4}
                    className="text-[#C9A45C]"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#E4CC98]">
                    Clear • Informative • Responsible
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-[10px] leading-5 text-[#718291]">
                  Website information should remain subject to professional
                  verification and appropriate review.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT PRINCIPLES GRID
          ===================================================== */}

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden border border-[#E2DDD3] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A45C]/50 hover:shadow-[0_18px_45px_rgba(14,34,56,0.09)] sm:p-8"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#0E2238] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                  {/* Gold side line */}
                  <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Decorative number */}
                  <div className="pointer-events-none absolute -right-2 -top-8 font-serif text-[125px] leading-none text-[#0E2238]/[0.035] transition-colors duration-500 group-hover:text-white/[0.035]">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-500 group-hover:border-[#C9A45C]/30 group-hover:bg-[#C9A45C]/[0.08]">
                        <Icon
                          size={20}
                          strokeWidth={1.3}
                          className="text-[#C9A45C]"
                        />
                      </div>

                      <span className="font-serif text-xl text-[#C9A45C]">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#A98543] transition-colors duration-500 group-hover:text-[#E4CC98]">
                        Principle
                      </p>

                      <h3 className="mt-2 font-serif text-[28px] leading-tight text-[#0E2238] transition-colors duration-500 group-hover:text-[#FAF8F3]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[12px] leading-6 text-[#647180] transition-colors duration-500 group-hover:text-[#B8C3CD]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-7 flex items-center justify-between border-t border-[#E7E1D6] pt-4 transition-colors duration-500 group-hover:border-white/10">
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#8993A0] transition-colors duration-500 group-hover:text-[#718291]">
                        Professional principle
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#C9A45C] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM PRINCIPLE BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 border-t border-[#DDD7CC] pt-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_auto_auto] lg:items-center lg:gap-8">
            {/* Main */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
                Professional Approach
              </p>

              <p className="mt-1 max-w-xl text-[10px] leading-5 text-[#8993A0]">
                These principles describe the intended approach to presenting
                professional and educational information through the website.
              </p>
            </div>

            {/* Small points */}
            <div className="flex items-center gap-2.5">
              <Scale
                size={14}
                strokeWidth={1.3}
                className="text-[#C9A45C]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#647180]">
                Clarity
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <BookOpen
                size={14}
                strokeWidth={1.3}
                className="text-[#C9A45C]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#647180]">
                Knowledge
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck
                size={14}
                strokeWidth={1.3}
                className="text-[#C9A45C]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#647180]">
                Responsibility
              </span>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-[8px] leading-5 text-[#8993A0]">
          The information presented on this website is intended for general
          informational purposes. Professional and legal information should be
          verified and reviewed appropriately before publication or reliance.
        </p>
      </div>
    </section>
  );
}