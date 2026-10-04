
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Languages,
  MapPin,
  Scale,
} from "lucide-react";
import Link from "next/link";

const profileDetails = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Verified qualification",
  },
  {
    icon: Scale,
    label: "Enrolment",
    value: "Bar Council details",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat",
  },
  {
    icon: Languages,
    label: "Languages",
    value: "To be confirmed",
  },
];

export default function AdvocateProfile() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Professional Profile
              </span>
            </div>

            <h2 className="mt-4 max-w-xl font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[52px]">
              Advocate
              <span className="block text-[#A98543]">
                Parthiv Vyas.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-[13px] leading-6 text-[#647180] lg:ml-auto">
            A concise professional profile presenting background, legal
            practice and relevant professional information.
          </p>
        </motion.div>

        {/* Main Profile */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative border-l-2 border-[#C9A45C] pl-6 sm:pl-8"
          >
            <p className="font-serif text-[27px] leading-[1.2] tracking-[-0.02em] text-[#0E2238] sm:text-[32px]">
              Clear communication,
              <span className="text-[#A98543]">
                {" "}
                professional practice.
              </span>
            </p>

            <p className="mt-5 max-w-lg text-[13px] leading-6 text-[#647180]">
              This profile introduces Advocate Parthiv Vyas and provides
              visitors with relevant professional context, including legal
              practice, background and verified professional information.
            </p>

            <Link
              href="/experience"
              className="group mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0E2238]"
            >
              Professional Experience

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="grid border-t border-[#DDD6CA] sm:grid-cols-2">
              {profileDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="border-b border-[#DDD6CA] py-5 sm:px-5"
                  >
                    <div className="flex items-start gap-4">
                      <Icon
                        size={17}
                        strokeWidth={1.3}
                        className="mt-0.5 shrink-0 text-[#C9A45C]"
                      />

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#A98543]">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[12px] text-[#526170]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-[#DDD6CA]" />

          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#9A948A]">
            Ahmedabad · Gujarat
          </span>

          <span className="h-px flex-1 bg-[#DDD6CA]" />
        </motion.div>
      </div>
    </section>
  );
}
