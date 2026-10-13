
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CircleHelp,
  Scale,
} from "lucide-react";

const resources = [
  {
    number: "01",
    icon: BookOpen,
    title: "Practice Areas",
    description:
      "Review the legal services and areas of practice covered on this website.",
    href: "/practice-areas",
    linkText: "Explore services",
  },
  {
    number: "02",
    icon: CircleHelp,
    title: "Frequently Asked Questions",
    description:
      "Find general information about enquiries, documentation, and the legal process.",
    href: "/faqs",
    linkText: "Browse FAQs",
  },
];

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] py-10 text-white sm:py-12 lg:py-14">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#C9A45C]/15" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C9A45C]/10" />
        <div className="absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-[#193750]/50 blur-3xl" />

        <span className="absolute bottom-0 right-[5%] hidden select-none font-serif text-[190px] leading-none text-white/[0.025] xl:block">
          V&P
        </span>
      </div>

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E4CC98]">
                Your Next Step
              </span>
            </div>

            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#C9A45C]/35 bg-[#C9A45C]/10 text-[#E4CC98]">
              <Scale size={23} strokeWidth={1.4} />
            </div>

            <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Start with the
              <span className="block text-[#E4CC98]">
                information
              </span>
              you need.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              Every legal matter has its own circumstances. Explore
              the information available on our website to better
              understand the relevant practice areas before making
              an enquiry.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs leading-5 text-white/45">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15">
                <ArrowDownRight
                  size={15}
                  className="text-[#E4CC98]"
                />
              </span>
              <span>
                Explore the resources below to continue.
              </span>
            </div>
          </motion.div>

          {/* Right resource cards */}
          <div className="space-y-4">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.div
                  key={resource.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                >
                  <Link
                    href={resource.href}
                    className="group relative block border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:border-[#C9A45C]/45 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] sm:p-7"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/10 text-[#E4CC98] transition-colors duration-300 group-hover:bg-[#C9A45C] group-hover:text-[#081725]">
                        <Icon size={21} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-[10px] font-medium tracking-[0.18em] text-[#E4CC98]/70">
                            RESOURCE {resource.number}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl leading-snug text-white sm:text-2xl">
                          {resource.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/55">
                          {resource.description}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#E4CC98]">
                          {resource.linkText}
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>

                      <span className="hidden font-serif text-sm text-white/25 sm:block">
                        {resource.number}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-xs leading-6 text-white/40">
            Website information is general in nature and is not a
            substitute for legal advice specific to your circumstances.
          </p>

          <Link
            href="/disclaimer"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
          >
            Read website disclaimer
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
