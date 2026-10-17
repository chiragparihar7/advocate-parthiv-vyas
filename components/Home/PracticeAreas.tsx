
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  BriefcaseBusiness,
  FileCheck,
  FileText,
  Gavel,
  Landmark,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Stamp,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

const practiceAreas = [
  {
    number: "01",
    title: "Civil Litigation",
    shortTitle: "Civil Disputes",
    description:
      "We handle suits for recovery, injunctions, specific performance and other civil disputes. Each matter is prepared with careful drafting and clear strategy, and presented with firm representation before the City Civil Court.",
    icon: Scale,
    topics: ["Recovery Suits", "Injunctions", "Civil Proceedings"],
  },
  {
    number: "02",
    title: "Criminal Law",
    shortTitle: "Criminal Matters",
    description:
      "We represent clients in bail, trial and appeal matters before the Sessions and District Courts. Our approach is to protect your rights, build a strong defence and guide you through every stage of the process.",
    icon: Gavel,
    topics: ["Bail Matters", "Criminal Trials", "Appeals"],
  },
  {
    number: "03",
    title: "Family & Matrimonial Disputes",
    shortTitle: "Family Matters",
    description:
      "We assist with divorce, maintenance, child custody and domestic disputes before the Family Court. These sensitive matters are handled with discretion, empathy and a focus on fair, practical outcomes.",
    icon: UsersRound,
    topics: ["Divorce", "Maintenance", "Child Custody"],
  },
  {
    number: "04",
    title: "Land, Property & Revenue Disputes",
    shortTitle: "Property & Revenue",
    description:
      "We advise and represent clients in title disputes, partition, possession, tenancy and revenue matters. We also help verify property documents, so your ownership and investment stay secure.",
    icon: Building2,
    topics: ["Title Disputes", "Land Matters", "Document Verification"],
  },
  {
    number: "05",
    title: "Cheque Bounce Cases",
    shortTitle: "Section 138 Matters",
    description:
      "We handle the full process of cheque dishonour cases under Section 138, from sending the legal notice to filing the complaint and following it through trial. We act for both complainants and accused with timely, well-prepared representation.",
    icon: Banknote,
    topics: ["Section 138", "Legal Notices", "Cheque Dishonour"],
  },
  {
    number: "06",
    title: "Contract & Commercial Disputes",
    shortTitle: "Commercial Matters",
    description:
      "We advise on contractual rights and obligations and represent clients in breach, recovery and enforcement disputes. Our aim is to protect your interests and resolve disagreements efficiently.",
    icon: BriefcaseBusiness,
    topics: ["Contract Breach", "Recovery Claims", "Enforcement"],
  },
  {
    number: "07",
    title: "Cyber Law",
    shortTitle: "Cyber & Technology",
    description:
      "We assist with online fraud, identity theft, defamation, data misuse and other offences under the Information Technology Act. We guide you on complaints, evidence and legal remedies, and represent you before the courts.",
    icon: ShieldCheck,
    topics: ["Online Fraud", "Identity Theft", "Cyber Complaints"],
  },
  {
    number: "08",
    title: "Preventive Detention (PASA)",
    shortTitle: "PASA Matters",
    description:
      "We represent clients challenging detention orders under the Prevention of Anti-Social Activities Act, including the filing of representations and writ petitions. We work with urgency and close attention to procedure, since personal liberty is at stake.",
    icon: ShieldAlert,
    topics: ["Detention Orders", "Representations", "Writ Petitions"],
  },
  {
    number: "09",
    title: "Labour & Employment Law",
    shortTitle: "Employment Matters",
    description:
      "We advise employees and employers on wrongful termination, unpaid wages, service conditions and industrial disputes. We represent clients before the relevant labour courts and forums.",
    icon: UsersRound,
    topics: ["Wrongful Termination", "Unpaid Wages", "Industrial Disputes"],
  },
  {
    number: "10",
    title: "Tribunal Practice",
    shortTitle: "RERA, SSRD & GRT",
    description:
      "We represent clients before the Real Estate Regulatory Authority and its Appellate Tribunal, the Special Secretary (Revenue Department) and the Gujarat Revenue Tribunal. Our work covers homebuyer and promoter disputes, revenue appeals and revisions, and land-related matters, each prepared with close attention to procedure and presented with clarity and precision.",
    icon: Landmark,
    topics: ["RERA", "SSRD", "Gujarat Revenue Tribunal"],
  },
  {
    number: "11",
    title: "Legal Drafting & Documentation",
    shortTitle: "Legal Documents",
    description:
      "We draft and review contracts, agreements, sale deeds, wills and other legal documents with precision. Well-drafted documents protect your rights and prevent disputes later.",
    icon: FileText,
    topics: ["Contracts", "Sale Deeds", "Agreements & Wills"],
  },
  {
    number: "12",
    title: "Notary Services",
    shortTitle: "Notarisation",
    description:
      "We provide prompt and reliable notarisation of affidavits, agreements, declarations and other documents. The process is simple, accurate and compliant with legal requirements.",
    icon: Stamp,
    topics: ["Affidavits", "Declarations", "Document Notarisation"],
  },
];

export default function PracticeAreas() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute -right-52 -top-52 h-[600px] w-[600px] rounded-full bg-[#C9A45C]/[0.045] blur-3xl" />

        <div className="absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -left-24 bottom-[-110px] h-[280px] w-[280px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Areas of Practice
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[44px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[56px] lg:text-[68px]">
              Legal experience,
              <span className="block text-[#A98543]">
                across key practice areas.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-md text-[14px] leading-7 text-[#647180]">
              V&amp;P Advocates and Notary provides legal assistance across
              civil and criminal litigation, family matters, property and
              revenue disputes, commercial matters, tribunal proceedings,
              legal documentation and notary services in Ahmedabad, Gujarat.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8993A0]">
                Representation · Advisory · Documentation
              </span>
            </div>
          </div>
        </motion.div>

        {/* Practice area cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.07,
                }}
                className="group relative flex h-full flex-col overflow-hidden border border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A45C]/40 hover:shadow-[0_18px_45px_rgba(14,34,56,0.08)]"
              >
                {/* Hover background */}
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#0E2238] transition-transform duration-500 ease-out group-hover:scale-y-100" />

                {/* Gold side accent */}
                <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                {/* Decorative number */}
                <div className="pointer-events-none absolute -right-3 -top-7 select-none font-serif text-[130px] leading-none text-[#0E2238]/[0.035] transition-colors duration-500 group-hover:text-white/[0.035]">
                  {area.number}
                </div>

                {/* Card content */}
                <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl text-[#C9A45C]">
                        {area.number}
                      </span>

                      <span className="h-px w-8 bg-[#C9A45C]/40 transition-colors duration-500 group-hover:bg-[#C9A45C]/60" />
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] bg-white transition-all duration-500 group-hover:border-[#C9A45C]/30 group-hover:bg-[#C9A45C]/10">
                      <Icon
                        size={21}
                        strokeWidth={1.25}
                        className="text-[#0E2238] transition-colors duration-500 group-hover:text-[#C9A45C]"
                      />
                    </div>
                  </div>

                  {/* Title and description */}
                  <div className="mt-10 flex-1">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#A98543] transition-colors duration-500 group-hover:text-[#E4CC98]">
                      {area.shortTitle}
                    </p>

                    <h3 className="mt-2 font-serif text-[27px] leading-tight text-[#0E2238] transition-colors duration-500 group-hover:text-white sm:text-[29px]">
                      {area.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-6 text-[#647180] transition-colors duration-500 group-hover:text-[#B8C3CD]">
                      {area.description}
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="border border-[#E7E1D6] bg-white px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.08em] text-[#647180] transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.04] group-hover:text-[#B8C3CD]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-7 flex items-center justify-between border-t border-[#E7E1D6] pt-5 transition-colors duration-500 group-hover:border-white/10">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8993A0] transition-colors duration-500 group-hover:text-[#B8C3CD]">
                      Legal assistance
                    </span>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#C9A45C] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom information bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 border-t border-[#E7E1D6] pt-6 lg:grid-cols-[1fr_auto]"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#FBF7ED]">
              <FileCheck
                size={15}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                Legal Assistance in Ahmedabad
              </p>

              <p className="mt-1 max-w-2xl text-[11px] leading-5 text-[#8993A0]">
                Every matter depends on its specific facts, documents and
                applicable law. Contact the office to discuss your
                requirements and determine the appropriate next steps.
              </p>
            </div>
          </div>

          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-3 self-start text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E2238] lg:self-center"
          >
            View All Practice Areas

            <ArrowRight
              size={16}
              strokeWidth={1.7}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
