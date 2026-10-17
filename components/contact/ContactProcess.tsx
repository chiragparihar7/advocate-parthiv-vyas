
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  MessageSquareText,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Share Your Enquiry",
    description:
      "Briefly explain your legal concern, appointment request, or document-related requirement through the available contact channel.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Provide Relevant Details",
    description:
      "Share the basic information needed to understand the nature of your enquiry and identify possible next steps.",
  },
  {
    number: "03",
    icon: UserRoundCheck,
    title: "Discuss the Next Step",
    description:
      "Further communication or an appointment may be considered, subject to the nature of the matter and availability.",
  },
];

const reminders = [
  "Keep your initial enquiry concise and relevant.",
  "Confirm appointment arrangements before visiting.",
  "Avoid sending sensitive documents through an unverified channel.",
];

export default function ContactProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl sm:mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C9A45C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A98543]">
              The Enquiry Process
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#0E2238] sm:text-4xl lg:text-5xl">
            A considered first step
            <span className="text-[#A98543]"> towards clarity.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#647180] sm:text-base sm:leading-8">
            Getting in touch begins with explaining your request clearly.
            The following steps provide a general overview of how to prepare
            for an initial enquiry with V&amp;P Advocates and Notary.
          </p>
        </motion.div>

        {/* Timeline + information panel */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Vertical timeline */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-[23px] top-10 w-px bg-[#E7E1D6] sm:left-[27px]"
            />

            <div className="space-y-8 sm:space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative flex gap-5 sm:gap-7"
                  >
                    {/* Timeline icon */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543] sm:h-14 sm:w-14">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    {/* Step content */}
                    <div className="flex-1 border-b border-[#E7E1D6] pb-7 sm:pb-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A98543]">
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className="mt-2 font-serif text-xl text-[#0E2238] sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#647180] sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Enquiry guidance panel */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden bg-[#0E2238] p-7 text-white sm:p-9 lg:p-10"
          >
            {/* Decorative detail */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#C9A45C]/20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#C9A45C]/15"
            />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/40 bg-[#C9A45C]/10 text-[#E4CC98]">
                <ShieldCheck size={22} strokeWidth={1.5} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
                Before You Contact Us
              </p>

              <h3 className="mt-3 max-w-sm font-serif text-2xl leading-snug sm:text-3xl">
                A little preparation can make your enquiry clearer.
              </h3>

              <div className="mt-7 space-y-5">
                {reminders.map((reminder) => (
                  <div key={reminder} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#E4CC98]"
                      strokeWidth={1.6}
                    />
                    <p className="text-sm leading-6 text-white/75">
                      {reminder}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-7">
                <p className="text-sm leading-6 text-white/60">
                  Ready to get in touch? Visit the contact section to review
                  the available enquiry options.
                </p>

                <Link
                  href="/contact#contact-form"
                  className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#C9A45C] px-5 py-3 text-sm font-semibold !text-[#081725] transition-colors hover:bg-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2238] sm:w-auto"
                >
                  <span className="!text-[#081725]">Make an Enquiry</span>
                  <ArrowRight
                    size={17}
                    className="!text-[#081725] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Legal disclaimer */}
        <p className="mt-8 max-w-3xl text-xs leading-6 text-[#8993A0]">
          This describes a general enquiry process and does not guarantee
          acceptance of a matter, an appointment, or any particular legal
          outcome. Website information does not constitute legal advice.
        </p>
      </div>
    </section>
  );
}
