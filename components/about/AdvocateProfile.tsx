"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Languages,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const profileDetails = [
  {
    icon: Scale,
    label: "Legal Practice",
    value: "Legal representation and procedural guidance",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
  {
    icon: Languages,
    label: "Communication",
    value: "Discuss language preferences when enquiring",
  },
  {
    icon: GraduationCap,
    label: "Professional Background",
    value: "Contact the office for verified profile details",
  },
];

export default function AdvocateProfile() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#C9A45C]/[0.05] blur-3xl" />

        <div className="absolute -bottom-48 -left-36 h-[430px] w-[430px] rounded-full border border-[#C9A45C]/10" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Meet the Advocate
              </span>
            </div>

            <h2 className="mt-5 max-w-xl font-serif text-[42px] leading-[1.02] tracking-[-0.035em] text-[#0E2238] sm:text-[52px] lg:text-[58px]">
              Advocate
              <span className="mt-1 block text-[#A98543]">
                Parthiv Vyas.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              V&P Advocates and Notary provides legal assistance across
              a range of legal matters, with an emphasis on understanding
              the circumstances, reviewing relevant documents and
              explaining appropriate procedural options.
            </p>

            <p className="mt-3 text-[11px] leading-6 text-[#8993A0]">
              Professional qualifications, enrolment particulars and
              other credentials should be confirmed through verified
              information before publication.
            </p>
          </div>
        </motion.div>

        {/* Main Profile */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Statement Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between overflow-hidden bg-[#0E2238] p-7 sm:p-9 lg:min-h-[330px]"
          >
            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#C9A45C]/15" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A45C]/50 to-transparent" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06]">
                <Scale
                  size={20}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />
              </div>

              <p className="mt-7 max-w-md font-serif text-[28px] leading-[1.2] tracking-[-0.02em] text-[#FAF8F3] sm:text-[34px]">
                Thoughtful preparation.
                <span className="block text-[#E4CC98]">
                  Clear communication.
                </span>
              </p>

              <p className="mt-5 max-w-md text-[12px] leading-7 text-[#AAB6C1] sm:text-[13px]">
                Every legal matter has its own facts and considerations.
                Understanding the issue and the available documentation
                is an important part of considering the next steps.
              </p>
            </div>

            <Link
              href="/experience"
              className="group relative mt-8 inline-flex w-fit items-center gap-3 border-b border-[#C9A45C]/40 pb-2 text-[9px] font-bold uppercase tracking-[0.16em] !text-[#E4CC98] transition-colors hover:border-[#E4CC98] hover:!text-white"
            >
              <span>Our Approach</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="shrink-0 text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Professional Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C9A45C]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A98543]">
                Profile Overview
              </p>
            </div>

            <div className="grid border-t border-[#DDD6CA] sm:grid-cols-2">
              {profileDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="border-b border-[#DDD6CA] py-6 sm:px-5 sm:py-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-white">
                        <Icon
                          size={17}
                          strokeWidth={1.35}
                          className="text-[#A98543]"
                        />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#A98543]">
                          {item.label}
                        </p>

                        <p className="mt-2 text-[12px] leading-6 text-[#526170]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="group mt-6 flex items-center justify-between gap-4 border border-[#DDD6CA] bg-white p-5 transition-colors duration-300 hover:border-[#C9A45C]/60 hover:bg-[#FBF7ED]"
            >
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#A98543]">
                  Further Information
                </p>

                <p className="mt-1 font-serif text-[21px] text-[#0E2238]">
                  Contact the Office
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/30">
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#A98543] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#DDD6CA] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2.5">
            <MapPin
              size={14}
              strokeWidth={1.4}
              className="shrink-0 text-[#A98543]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#647180]">
              Ahmedabad, Gujarat, India
            </span>
          </div>

          <p className="max-w-2xl text-[10px] leading-5 text-[#8993A0] sm:text-right">
            Information about qualifications, professional enrolment and
            languages should be published only after confirmation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}