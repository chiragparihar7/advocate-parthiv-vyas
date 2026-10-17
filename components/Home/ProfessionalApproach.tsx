
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
      "Understand relevant legal procedures, available options, and the considerations that may affect your matter.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Informed Guidance",
    description:
      "Explore legal concepts, documentation requirements, and procedures relevant to your specific circumstances.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Discuss your concerns and receive clear explanations of relevant processes and potential next steps.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Professional Responsibility",
    description:
      "Approach legal matters with careful preparation, appropriate discretion, and attention to relevant details.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ProfessionalApproach() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute -left-56 -top-56 h-[620px] w-[620px] rounded-full bg-[#C9A45C]/[0.055] blur-3xl" />

        <div className="absolute -right-48 bottom-[-220px] h-[550px] w-[550px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -right-24 bottom-[-140px] h-[340px] w-[340px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-10"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98543] sm:tracking-[0.28em]">
                Our Professional Approach
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0]">
                Principles of Legal Practice
              </span>

              <span className="h-px w-8 bg-[#C9A45C]/40" />
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-[38px] leading-[1.02] tracking-[-0.035em] text-[#0E2238] sm:text-[52px] lg:text-[64px]">
              A considered approach
              <span className="block text-[#A98543]">
                to legal assistance.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="mt-9 grid gap-6 lg:mt-11 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8 xl:gap-10">
          {/* Left statement panel */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden bg-[#0E2238] p-6 text-white sm:p-8 lg:p-9"
          >
            {/* Background grid */}
            <div
              aria-hidden="true"
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

            <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-[#C9A45C]/20" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06]">
                <Scale
                  size={19}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />
              </div>

              {/* Statement */}
              <h3 className="mt-7 max-w-md font-serif text-[30px] leading-[1.1] text-[#FAF8F3] sm:text-[36px]">
                Every matter
                <span className="block text-[#C9A45C]">
                  deserves careful consideration.
                </span>
              </h3>

              <p className="mt-4 max-w-md text-[12px] leading-[1.8] text-[#AEB9C5] sm:text-[13px]">
                Legal matters often involve important decisions and
                documentation. Understanding the circumstances, reviewing
                relevant information, and explaining available legal options
                are essential parts of a considered approach.
              </p>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-white/10" />

              {/* Bottom statement */}
              <div className="mt-5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#C9A45C]"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E4CC98] sm:tracking-[0.18em]">
                    Clarity • Preparation • Responsibility
                  </span>
                </div>

                <p className="mt-2.5 max-w-sm text-[10px] leading-5 text-[#8998A6]">
                  The appropriate legal approach depends on the facts,
                  documents, applicable law, and circumstances of each matter.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right principles grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4"
          >
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={itemVariants}
                  className="group relative overflow-hidden border border-[#E2DDD3] bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A45C]/50 hover:shadow-[0_16px_36px_rgba(14,34,56,0.08)] sm:p-5 lg:p-6"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#0E2238] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                  {/* Gold side accent */}
                  <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Decorative number */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-7 font-serif text-[100px] leading-none text-[#0E2238]/[0.035] transition-colors duration-500 group-hover:text-white/[0.035]"
                  >
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    {/* Card header */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-500 group-hover:border-[#C9A45C]/30 group-hover:bg-[#C9A45C]/[0.08]">
                        <Icon
                          size={18}
                          strokeWidth={1.35}
                          className="text-[#C9A45C]"
                        />
                      </div>

                      <span className="font-serif text-lg text-[#C9A45C]">
                        {item.number}
                      </span>
                    </div>

                    {/* Card content */}
                    <div className="mt-5">
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#A98543] transition-colors duration-500 group-hover:text-[#E4CC98]">
                        Our Principle
                      </p>

                      <h3 className="mt-2 font-serif text-[23px] leading-[1.2] text-[#0E2238] transition-colors duration-500 group-hover:text-[#FAF8F3] sm:text-[25px]">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[11px] leading-[1.75] text-[#647180] transition-colors duration-500 group-hover:text-[#B8C3CD] sm:text-[12px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Card footer */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#E7E1D6] pt-3 transition-colors duration-500 group-hover:border-white/10">
                      <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#8993A0] transition-colors duration-500 group-hover:text-[#AEB9C5]">
                        V&P Advocates
                      </span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-[#C9A45C] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom principles bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-7 border-t border-[#DDD7CC] pt-5 sm:mt-8"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto_auto_auto] lg:items-center lg:gap-7">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
                Our Commitment
              </p>

              <p className="mt-1 max-w-xl text-[10px] leading-5 text-[#8993A0]">
                A professional approach grounded in clear communication,
                careful preparation, and responsible legal assistance.
              </p>
            </div>

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

     
      </div>
    </section>
  );
}
