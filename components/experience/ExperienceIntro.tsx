"use client";

import { motion } from "framer-motion";
import { ArrowDown, Scale } from "lucide-react";

export default function ExperienceIntro() {
  return (
    <section className="bg-[#faf8f3]">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a45c]/40 text-[#a98543]">
                <Scale size={17} strokeWidth={1.6} />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a98543]">
                  Professional Perspective
                </p>

                <p className="mt-1 text-xs text-[#8993a0]">
                  Experience in practice
                </p>
              </div>
            </div>

            <div className="mt-10 hidden items-center gap-3 text-xs text-[#8993a0] lg:flex">
              <ArrowDown size={14} />
              <span>Continue reading</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
              Experience is built through
              <span className="text-[#a98543]">
                {" "}
                careful legal work.
              </span>
            </h2>

            <div className="mt-7 max-w-3xl space-y-5 text-[15px] leading-8 text-[#647180] sm:text-base">
              <p>
                Professional experience in legal practice involves more
                than a timeline of years. It develops through continued
                learning, preparation, review of legal materials,
                understanding of facts and careful communication.
              </p>

              <p>
                This page provides a structured overview of professional
                development and approach. Specific qualifications,
                enrolment information, memberships and career milestones
                should be published only after they have been verified
                and approved for the website.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#c9a45c] pl-5">
              <p className="font-serif text-lg leading-7 text-[#0e2238]">
                “Professional credibility begins with accuracy,
                preparation and responsible communication.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}