"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  FileSearch,
  MessageSquareText,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Submit an enquiry",
    description:
      "Provide the basic information relevant to your enquiry through the appropriate contact channel.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Initial review",
    description:
      "The enquiry can be considered for the appropriate next step based on the information provided.",
  },
  {
    number: "03",
    icon: UserRoundCheck,
    title: "Further communication",
    description:
      "Further communication or an appointment can be arranged through the appropriate professional channel.",
  },
];

export default function ContactProcess() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A45C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98543]">
              How it works
            </span>

            <span className="h-px w-8 bg-[#C9A45C]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0E2238]">
            A straightforward way to begin.
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#647180]">
            The contact process is designed to keep the first stage clear,
            focused and professional.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 grid gap-0 border-y border-[#E7E1D6] md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative border-b border-[#E7E1D6] p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543]">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <span className="font-serif text-3xl text-[#0E2238]/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold text-[#0E2238]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#647180]">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute right-[-8px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 items-center justify-center bg-white text-[#C9A45C] md:flex">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}