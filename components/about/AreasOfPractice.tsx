"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileCheck2,
  FileText,
  Gavel,
  Handshake,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "Civil Litigation",
    description:
      "Assistance with civil disputes, recovery claims, injunctions, specific performance, and related court proceedings.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Criminal Law",
    description:
      "Legal representation and procedural guidance in criminal matters, including bail applications, trials, and appeals.",
    icon: Gavel,
  },
  {
    number: "03",
    title: "Family & Matrimonial Disputes",
    description:
      "Legal assistance concerning divorce, maintenance, child custody, and other family-related disputes.",
    icon: Users,
  },
  {
    number: "04",
    title: "Land & Property Disputes",
    description:
      "Matters involving property title, possession, partition, tenancy, revenue issues, and document verification.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Cheque Bounce Cases",
    description:
      "Assistance with Section 138 matters under the Negotiable Instruments Act, including legal notices and complaints.",
    icon: FileCheck2,
  },
  {
    number: "06",
    title: "Contracts & Commercial Disputes",
    description:
      "Legal assistance concerning contractual obligations, breach of contract, recovery, and enforcement of agreements.",
    icon: Handshake,
  },
  {
    number: "07",
    title: "Cyber Law",
    description:
      "Legal guidance for matters involving online fraud, identity theft, digital misuse, and relevant legal remedies.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Tribunal & Revenue Matters",
    description:
      "Assistance with relevant proceedings before RERA, SSRD, Gujarat Revenue Tribunal, and other applicable forums.",
    icon: Landmark,
  },
];

export default function AreasOfPractice() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-10 h-[360px] w-[360px] rounded-full border border-[#C9A45C]/10 sm:h-[480px] sm:w-[480px]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                Areas of Practice
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#0E2238] sm:text-[48px] lg:text-[56px]">
              Legal assistance for
              <span className="block text-[#A98543]">
                matters that matter.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-[13px] leading-7 text-[#647180]">
              Explore the areas of law covered by V&P Advocates and Notary.
              Each matter is considered according to its circumstances,
              relevant documents, and applicable law.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A98543]">
              <Scale size={15} strokeWidth={1.5} />
              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
        </motion.div>

        {/* Practice Area Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.06,
                }}
                className="group relative flex min-h-[280px] flex-col border border-[#DDD6CA] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C]/60 hover:shadow-[0_14px_35px_rgba(14,34,56,0.06)] sm:p-7"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[28px] leading-none text-[#C9A45C]">
                    {area.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-colors duration-300 group-hover:border-[#C9A45C]/50 group-hover:bg-[#FBF7ED]">
                    <Icon
                      size={20}
                      strokeWidth={1.35}
                      className="text-[#A98543]"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-7 flex-1">
                  <h3 className="font-serif text-[23px] leading-[1.2] text-[#0E2238]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-7 text-[#647180]">
                    {area.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#999188]">
                    Legal Services
                  </span>

                  <Link
                    href="/practice-areas"
                    aria-label={`Explore ${area.title}`}
                    className="flex h-8 w-8 items-center justify-center border border-[#E7E1D6] text-[#A98543] transition-all duration-300 hover:border-[#0E2238] hover:bg-[#0E2238] hover:text-white"
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-6 border-t border-[#DDD6CA] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="max-w-xl">
            <h3 className="font-serif text-[25px] leading-tight text-[#0E2238] sm:text-[28px]">
              Looking for guidance on a specific legal matter?
            </h3>

            <p className="mt-2 text-[12px] leading-6 text-[#647180]">
              Get in touch to discuss your circumstances and understand the
              appropriate next steps.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 bg-[#0E2238] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] !text-white transition-colors duration-300 hover:bg-[#081725]"
          >
            <span className="!text-white">Discuss Your Matter</span>

            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="text-[#E4CC98] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      
      </div>
    </section>
  );
}