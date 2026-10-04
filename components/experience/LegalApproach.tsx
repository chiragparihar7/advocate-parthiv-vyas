"use client";

import { motion } from "framer-motion";
import { Check, Compass, Eye, Scale } from "lucide-react";

const principles = [
  {
    icon: Eye,
    number: "01",
    title: "Clarity",
    text: "Understand the legal position and relevant circumstances before moving forward.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Preparation",
    text: "Approach documentation, facts and procedural requirements with appropriate care.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Responsibility",
    text: "Present legal information and considerations in a professional and measured manner.",
  },
];

export default function LegalApproach() {
  return (
    <section className="bg-[#faf8f3]">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
                Professional Approach
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
              Knowledge is valuable
              <span className="block text-[#a98543]">
                when applied carefully.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#647180]">
              A professional approach to legal work requires attention
              to context, preparation and clear communication. Each
              matter should be considered according to its own facts
              and legal circumstances.
            </p>
          </motion.div>

          {/* Principles */}
          <div className="space-y-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group flex gap-5 border border-[#e7e1d6] bg-white p-5 transition-all duration-300 hover:border-[#c9a45c]/50 hover:shadow-[0_10px_30px_rgba(14,34,56,0.06)] sm:p-6"
                >
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="font-serif text-xl text-[#c9a45c]">
                      {item.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e2238] text-[#e4cc98]">
                      <Icon size={17} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-[#0e2238]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#647180]">
                      {item.text}
                    </p>
                  </div>

                  <Check
                    size={17}
                    className="mt-1 hidden text-[#c9a45c] sm:block"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}