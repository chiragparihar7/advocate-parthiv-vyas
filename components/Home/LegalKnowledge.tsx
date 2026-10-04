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
    title: "Understanding Your Legal Rights",
    description:
      "Educational content explaining general legal rights, important considerations and practical questions that may arise in a legal matter.",
    time: "5 min read",
    featured: true,
  },
  {
    number: "02",
    category: "LEGAL PROCEDURE",
    title: "Understanding a Legal Process",
    description:
      "Clear and structured explanations of relevant legal procedures, documentation and important stages.",
    time: "6 min read",
    featured: false,
  },
  {
    number: "03",
    category: "LEGAL AWARENESS",
    title: "Common Legal Questions",
    description:
      "General answers to genuine questions visitors may have about relevant legal matters and procedures.",
    time: "4 min read",
    featured: false,
  },
];

export default function LegalKnowledge() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
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

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-end"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Legal Knowledge
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-3xl font-serif text-[50px] leading-[0.94] tracking-[-0.035em] text-[#0E2238] sm:text-[60px] lg:text-[70px]">
              Legal knowledge,
              <span className="block text-[#A98543]">
                made easier to understand.
              </span>
            </h2>
          </div>

          {/* Intro */}
          <div className="lg:pb-1">
            <p className="max-w-lg text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              Educational articles and legal resources can help visitors
              understand general legal concepts, procedures and questions
              without replacing advice specific to an individual matter.
            </p>

            <div className="mt-5 flex items-center gap-3">
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

        {/* =======================================================
            FEATURED + ARTICLES
        ======================================================= */}

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:mt-14">
          {/* =====================================================
              FEATURED ARTICLE
          ===================================================== */}

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="group relative min-h-[470px] overflow-hidden bg-[#0E2238] p-8 text-white sm:p-10 lg:p-11"
          >
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Gold glow */}
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-[360px] w-[360px] rounded-full bg-[#C9A45C]/[0.055] blur-3xl" />

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#C9A45C]/10" />

            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#C9A45C]/10" />

            {/* Large number */}
            <div className="pointer-events-none absolute -bottom-12 right-2 select-none font-serif text-[220px] leading-none text-white/[0.025]">
              {articles[0].number}
            </div>

            <div className="relative z-10 flex h-full flex-col">
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A45C]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E4CC98]">
                      Featured Knowledge
                    </span>
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#81909F]">
                    {articles[0].category}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.05]">
                  <BookOpen
                    size={20}
                    strokeWidth={1.25}
                    className="text-[#C9A45C]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto max-w-2xl pt-20">
                <h3 className="font-serif text-[38px] leading-[1.02] tracking-[-0.02em] text-[#FAF8F3] sm:text-[46px] lg:text-[50px]">
                  {articles[0].title}
                </h3>

                <p className="mt-5 max-w-xl text-[13px] leading-7 text-[#AEB9C5]">
                  {articles[0].description}
                </p>

                {/* Bottom */}
                <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
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

                  <Link
                    href="/legal-articles"
                    className="group/link inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white"
                  >
                    Read Article

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#C9A45C] transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              SECONDARY ARTICLES
          ===================================================== */}

          <div className="grid gap-5">
            {articles.slice(1).map((article, index) => {
              return (
                <motion.article
                  key={article.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden border border-[#E7E1D6] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A45C]/45 hover:shadow-[0_18px_45px_rgba(14,34,56,0.08)] sm:p-8"
                >
                  {/* Gold side accent */}
                  <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Decorative number */}
                  <div className="pointer-events-none absolute -right-2 -top-7 font-serif text-[130px] leading-none text-[#0E2238]/[0.035] transition-colors duration-500 group-hover:text-[#0E2238]/[0.05]">
                    {article.number}
                  </div>

                  <div className="relative z-10">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
                        {article.category}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-300 group-hover:border-[#C9A45C]/40">
                        <FileText
                          size={17}
                          strokeWidth={1.3}
                          className="text-[#C9A45C]"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-9 max-w-lg font-serif text-[29px] leading-[1.05] text-[#0E2238] transition-colors duration-300 group-hover:text-[#A98543] sm:text-[32px]">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 max-w-xl text-[12px] leading-6 text-[#647180]">
                      {article.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-[#E7E1D6] pt-4">
                      <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8993A0]">
                        <Clock3
                          size={13}
                          strokeWidth={1.4}
                          className="text-[#C9A45C]"
                        />

                        {article.time}
                      </div>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#C9A45C] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            KNOWLEDGE FOOTER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 border-t border-[#E1DBD0] pt-6 lg:grid-cols-[1fr_auto]"
        >
          {/* Info */}
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
                Articles should provide general educational information and be
                reviewed for legal accuracy and currency before publication.
              </p>
            </div>
          </div>

          {/* CTA */}
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

        {/* Disclaimer */}
        <p className="mt-6 max-w-3xl text-[8px] leading-5 text-[#8993A0]">
          Legal articles and educational resources are intended for general
          informational purposes and should not be treated as legal advice or
          as a substitute for advice based on the specific facts of a matter.
        </p>
      </div>
    </section>
  );
}