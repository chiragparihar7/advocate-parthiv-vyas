"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export default function ContactIntro() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543]">
              <FileText size={19} strokeWidth={1.5} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98543]">
                Before you enquire
              </p>
              <p className="mt-1 text-sm text-[#8993A0]">
                A clear starting point
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.015em] text-[#0E2238] sm:text-4xl">
              A clear understanding is an important first step.
            </h2>

            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#647180]">
              Whether you are looking for general information, wishing to
              enquire about an appointment, or seeking information about
              a particular area of legal practice, the contact page
              provides a straightforward starting point.
            </p>

            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#647180]">
              Please keep your initial enquiry concise and include only
              information that is relevant to your request. Avoid
              submitting unnecessary confidential or sensitive information
              through the website form.
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#0E2238]">
              <span>Professional and purposeful communication</span>
              <ArrowUpRight size={16} className="text-[#A98543]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}