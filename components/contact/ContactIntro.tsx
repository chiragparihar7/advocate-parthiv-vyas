
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const enquirySteps = [
  {
    number: "01",
    title: "Explain Your Enquiry",
    description:
      "Briefly describe your legal concern, appointment request, or document-related requirement.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Share Relevant Details",
    description:
      "Provide the basic information needed to understand the nature of your enquiry.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Consider the Next Step",
    description:
      "Discuss the appropriate way to proceed based on the details and circumstances of your matter.",
    icon: ArrowRight,
  },
];

export default function ContactIntro() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#C9A45C]/15 sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Centered introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C9A45C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A98543]">
              Getting Started
            </span>

            <span className="h-px w-8 bg-[#C9A45C]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#0E2238] sm:text-4xl lg:text-5xl">
            Start with the right
            <span className="text-[#A98543]"> information.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#647180] sm:text-base sm:leading-8">
            Contacting V&amp;P Advocates and Notary is an opportunity to
            explain your enquiry and identify what information may be
            relevant. A concise, clear introduction can help establish
            the context of your request.
          </p>
        </motion.div>

        {/* Three-step process */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {enquirySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative flex h-full flex-col border border-[#E7E1D6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/60 hover:shadow-[0_16px_40px_rgba(14,34,56,0.06)] sm:p-7 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#F5F2EB] text-[#A98543] transition-colors duration-300 group-hover:bg-[#0E2238] group-hover:text-[#E4CC98]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <span className="font-serif text-3xl text-[#E7E1D6] transition-colors group-hover:text-[#C9A45C]/60">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-xl leading-snug text-[#0E2238] sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#647180]">
                  {step.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-[#E7E1D6]" />
                  <div className="mt-4 h-0.5 w-10 bg-[#C9A45C] transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Privacy note and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 grid gap-6 border border-[#E7E1D6] bg-[#F5F2EB] p-6 sm:mt-10 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/30 bg-white text-[#A98543]">
              <ShieldCheck size={20} strokeWidth={1.6} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0E2238] sm:text-base">
                Please protect your confidential information
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#647180]">
                Keep your initial enquiry focused. Avoid sending sensitive
                personal information or confidential legal documents
                through a general website form unless an appropriate
                communication channel has been confirmed.
              </p>
            </div>
          </div>

          <Link
            href="/contact#contact-form"
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#0E2238] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#17384F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] focus-visible:ring-offset-2"
          >
            <span className="!text-white">Make an Enquiry</span>

            <ArrowRight
              size={17}
              className="!text-white transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Legal disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-[#8993A0]">
          Website information is provided for general informational
          purposes only. It does not constitute legal advice or establish
          an advocate-client relationship. Read our{" "}
          <Link
            href="/disclaimer"
            className="font-medium text-[#0E2238] underline decoration-[#C9A45C] underline-offset-4 hover:text-[#A98543] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
          >
            legal disclaimer
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
