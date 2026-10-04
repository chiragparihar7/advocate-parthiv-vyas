"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileSearch,
  MessageSquareText,
  Scale,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Understand",
    description:
      "Review the relevant facts, documents and circumstances surrounding a legal matter.",
  },
  {
    number: "02",
    icon: Scale,
    title: "Analyse",
    description:
      "Consider the relevant legal principles, procedural requirements and issues involved.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Prepare",
    description:
      "Organise relevant information and documentation required for the matter.",
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "Communicate",
    description:
      "Explain relevant legal considerations and procedural steps in clear language.",
  },
];

export default function PracticeExperience() {
  return (
    <section className="bg-[#0e2238] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e4cc98]">
                Practical Experience
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
              A structured approach to
              <span className="text-[#c9a45c]"> legal matters.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Every legal matter has its own facts, documents, procedural
              requirements and context. A careful approach begins with
              understanding those elements.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group border-t border-white/10 pt-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-[#c9a45c]">
                      {step.number}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-white/35 transition-colors duration-300 group-hover:text-[#c9a45c]"
                    />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}