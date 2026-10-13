
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Search,
} from "lucide-react";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Understand the Matter",
    description:
      "Consider the facts and circumstances of the matter, whether it involves civil litigation, criminal proceedings, property disputes, family matters or commercial disagreements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Prepare with Care",
    description:
      "Give careful attention to relevant documents, legal notices, contracts, property records and procedural requirements applicable to the matter.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Communicate Clearly",
    description:
      "Explain relevant legal and procedural considerations in a clear, professional manner, helping clients understand the issues involved in their matter.",
    icon: MessageSquare,
  },
];

export default function PracticeAreasApproach() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] !text-[#A98543]">
                Professional Approach
              </span>
            </div>

            <h2 className="mt-5 max-w-md font-serif text-[38px] leading-[1] tracking-[-0.025em] !text-[#0E2238] sm:text-[46px]">
              Thoughtful preparation.
              <span className="block !text-[#A98543]">
                Clear communication.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-[13px] leading-7 !text-[#687582]">
              At V&P Advocates and Notary, each legal matter must be
              considered in its own context. Understanding the facts,
              reviewing relevant documents and explaining procedural
              considerations are important parts of a considered
              professional approach.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#0E2238]"
            >
              About the Firm

              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="!text-[#A98543] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Right Content */}
          <div className="divide-y divide-[#E7E1D6] border-y border-[#E7E1D6]">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex gap-5 py-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-colors duration-300 group-hover:border-[#C9A45C]/50 group-hover:bg-[#FBF7ED]">
                    <Icon
                      size={17}
                      strokeWidth={1.3}
                      className="!text-[#A98543]"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-serif text-[18px] !text-[#C9A45C]">
                        {item.number}
                      </span>

                      <h3 className="font-serif text-[22px] !text-[#0E2238] sm:text-[23px]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-xl text-[11px] leading-6 !text-[#788490] sm:text-[12px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <p className="mt-8 border-t border-[#E7E1D6] pt-4 text-[10px] leading-5 !text-[#7A8490]">
          Every legal matter depends on its individual facts and
          circumstances. Information on this website is for general
          informational purposes and does not constitute legal advice.
        </p>
      </div>
    </section>
  );
}
