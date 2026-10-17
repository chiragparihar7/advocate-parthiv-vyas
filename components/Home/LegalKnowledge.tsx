"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  FileText,
  Scale,
} from "lucide-react";
import Link from "next/link";

const articles = [
  {
    number: "01",
    category: "LEGAL GUIDE",
    title: "Understanding Legal Notices",
    description:
      "Learn about the general purpose of a legal notice, common situations in which one may be sent, and important considerations before responding.",
    time: "5 min read",
    featured: true,
  },
  {
    number: "02",
    category: "CHEQUE BOUNCE LAW",
    title: "Understanding Section 138",
    description:
      "An introduction to cheque dishonour proceedings under the Negotiable Instruments Act, including notices, timelines, and court procedures.",
    time: "6 min read",
    featured: false,
  },
  {
    number: "03",
    category: "PROPERTY LAW",
    title: "Property Documents to Review",
    description:
      "Explore common property documents and understand why title records, agreements, and relevant supporting documents deserve careful review.",
    time: "4 min read",
    featured: false,
  },
];

export default function LegalKnowledge() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute -right-56 -top-56 h-[600px] w-[600px] rounded-full bg-[#C9A45C]/[0.045] blur-3xl" />

        <div className="absolute -left-40 bottom-[-200px] h-[480px] w-[480px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -left-20 bottom-[-120px] h-[300px] w-[300px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[1fr_0.58fr] lg:items-end lg:gap-10"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Legal Knowledge
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[38px] leading-[1.02] tracking-[-0.035em] text-[#0E2238] sm:text-[52px] lg:text-[64px]">
              Legal knowledge,
              <span className="block text-[#A98543]">
                made easier to understand.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-lg text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              Explore educational articles about legal procedures,
              documentation, property matters, and common legal questions.
              Our aim is to make general legal information easier to
              understand and navigate.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <BookOpen
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0]">
                Articles • Guides • Legal Awareness
              </span>
            </div>
          </div>
        </motion.div>

        {/* Featured article and secondary articles */}
        <div className="mt-9 grid gap-4 lg:mt-11 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          {/* Featured article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="group relative flex min-h-[400px] flex-col overflow-hidden bg-[#0E2238] p-6 text-white sm:min-h-[420px] sm:p-8 lg:p-9"
          >
            {/* Background grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Decorative glow and circles */}
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-[360px] w-[360px] rounded-full bg-[#C9A45C]/[0.055] blur-3xl" />

            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#C9A45C]/10" />

            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#C9A45C]/10" />

            {/* Decorative number */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 right-2 select-none font-serif text-[180px] leading-none text-white/[0.025] sm:text-[220px]"
            >
              {articles[0].number}
            </div>

            <div className="relative z-10 flex flex-1 flex-col">
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A45C]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E4CC98]">
                      Featured Article
                    </span>
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#81909F]">
                    {articles[0].category}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.05]">
                  <BookOpen
                    size={19}
                    strokeWidth={1.25}
                    className="text-[#C9A45C]"
                  />
                </div>
              </div>

              {/* Article content */}
              <div className="mt-auto pt-12 sm:pt-14">
                <h3 className="max-w-xl font-serif text-[34px] leading-[1.05] tracking-[-0.02em] text-[#FAF8F3] transition-colors duration-300 group-hover:text-[#E4CC98] sm:text-[42px] lg:text-[46px]">
                  {articles[0].title}
                </h3>

                <p className="mt-4 max-w-xl text-[12px] leading-6 text-[#AEB9C5] sm:text-[13px] sm:leading-7">
                  {articles[0].description}
                </p>

                {/* Footer */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 sm:mt-7 sm:gap-5 sm:pt-5">
                  <div className="flex items-center gap-2">
                    <Clock3
                      size={14}
                      strokeWidth={1.4}
                      className="text-[#C9A45C]"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8998A6]">
                      {articles[0].time}
                    </span>
                  </div>

                  <span className="h-3 w-px bg-white/10" />

                 
                </div>
              </div>
            </div>
          </motion.article>

          {/* Secondary articles */}
          <div className="grid gap-4">
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.number}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden border border-[#E7E1D6] bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A45C]/45 hover:shadow-[0_16px_36px_rgba(14,34,56,0.08)] sm:p-6"
              >
                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                {/* Decorative number */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 font-serif text-[105px] leading-none text-[#0E2238]/[0.035]"
                >
                  {article.number}
                </div>

                <div className="relative z-10">
                  {/* Card header */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#A98543] sm:text-[9px] sm:tracking-[0.2em]">
                      {article.category}
                    </span>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
                      <FileText
                        size={16}
                        strokeWidth={1.3}
                        className="text-[#C9A45C]"
                      />
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="mt-4 max-w-lg font-serif text-[25px] leading-[1.1] text-[#0E2238] transition-colors duration-300 group-hover:text-[#A98543] sm:text-[29px]">
                    {article.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-[11px] leading-[1.75] text-[#647180] sm:text-[12px] sm:leading-6">
                    {article.description}
                  </p>

                  {/* Card footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#E7E1D6] pt-3">
                    <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8993A0] sm:text-[9px]">
                      <Clock3
                        size={13}
                        strokeWidth={1.4}
                        className="text-[#C9A45C]"
                      />

                      {article.time}
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Knowledge footer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-5 border-t border-[#E1DBD0] pt-5 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-[#FBF7ED]">
              <Scale
                size={16}
                strokeWidth={1.3}
                className="text-[#C9A45C]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                Legal Knowledge Library
              </p>

              <p className="mt-1 max-w-2xl text-[10px] leading-5 text-[#8993A0]">
                Explore general legal information relating to litigation,
                property matters, legal documentation, and applicable
                procedures.
              </p>
            </div>
          </div>

          <Link
            href="/legal-articles"
            className="group inline-flex items-center gap-3 self-center text-[10px] font-bold uppercase tracking-[0.17em] text-[#0E2238]"
          >
            Explore All Articles

            <ArrowRight
              size={16}
              strokeWidth={1.6}
              className="text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

     
      </div>
    </section>
  );
}