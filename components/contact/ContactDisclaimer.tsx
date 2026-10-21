
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const disclaimerPoints = [
  {
    number: "01",
    icon: FileText,
    title: "General Information",
    description:
      "Website content is provided for general informational purposes and should not be treated as advice on the facts of your specific legal matter.",
  },
  {
    number: "02",
    icon: LockKeyhole,
    title: "Protect Your Privacy",
    description:
      "Avoid submitting confidential documents, sensitive personal data, or detailed case materials through an initial website enquiry.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "No Automatic Engagement",
    description:
      "Submitting a form or receiving an initial response does not, by itself, establish an advocate-client relationship.",
  },
];

export default function ContactDisclaimer() {
  return (
    <section
      aria-labelledby="contact-disclaimer-heading"
      className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-[#C9A45C]/15" />
        <div className="absolute -right-12 top-12 h-56 w-56 rounded-full border border-[#C9A45C]/10" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#0E2238]/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C9A45C]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8D713A]">
              Please Read Before Enquiring
            </span>
          </div>

          <h2
            id="contact-disclaimer-heading"
            className="font-serif text-3xl leading-tight tracking-tight text-[#0E2238] sm:text-4xl lg:text-5xl"
          >
            A few important points
            <span className="block text-[#9B7B3D]">
              before you contact us.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#526071] sm:text-base">
            Please review the following information before sharing
            details about your legal enquiry through this website.
          </p>
        </motion.div>

        {/* Guidance cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {disclaimerPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.article
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="group border border-[#E5E0D5] bg-white p-6 transition-colors duration-300 hover:border-[#C9A45C]/60 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#C9A45C]/30 bg-[#F5F2EB] text-[#8D713A] transition-colors duration-300 group-hover:bg-[#0E2238] group-hover:text-[#E4CC98]">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <span className="font-serif text-sm text-[#A8A092]">
                    {point.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#0E2238]">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#647080]">
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Disclaimer panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 grid gap-6 border border-[#0E2238]/10 bg-[#F2EFE7] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-9"
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-[#C9A45C]/20 text-[#80642E]">
              <AlertTriangle size={19} strokeWidth={1.5} />
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#0E2238] sm:text-xl">
                Important legal notice
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#596575]">
                An enquiry does not guarantee that the matter will be
                accepted or that a particular outcome can be achieved.
                Any engagement is subject to further communication and
                confirmation by the advocate.
              </p>

              <Link
                href="/disclaimer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#8D713A] transition-colors hover:text-[#0E2238] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
              >
                Read the full disclaimer
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <Link
            href="/contact#contact-form"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#0E2238] px-5 py-3 text-sm font-medium !text-white transition-colors hover:bg-[#173650] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] focus-visible:ring-offset-2 md:min-w-[175px]"
          >
            <span className="!text-white">Continue to Enquiry</span>
            <ArrowRight size={16} className="!text-white" />
          </Link>
        </motion.div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs leading-6 text-[#858477]">
          Please share only the information reasonably necessary for an
          initial enquiry. Avoid sending sensitive documents through
          unverified communication channels.
        </p>
      </div>
    </section>
  );
}
