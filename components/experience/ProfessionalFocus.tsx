"use client";

import { motion } from "framer-motion";
import {
  FileText,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";

const focusAreas = [
  {
    icon: Search,
    title: "Legal Analysis",
    text: "Careful consideration of relevant legal issues, facts and circumstances.",
  },
  {
    icon: FileText,
    title: "Documentation",
    text: "Attention to relevant records, documents and procedural requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Preparation",
    text: "Structured preparation based on the specific requirements of a matter.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    text: "Clear and responsible communication of legal information and considerations.",
  },
];

export default function ProfessionalFocus() {
  return (
    <section className="bg-[#f5f2eb]">
      <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-8 lg:px-10 sm:py-12 lg:py-14">
        <div className="mb-11 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-9 bg-[#c9a45c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a98543]">
              Professional Focus
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0e2238] sm:text-5xl">
            The elements behind
            <span className="text-[#a98543]"> careful legal work.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#e7e1d6] bg-[#e7e1d6] sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group bg-white p-7 transition-colors duration-300 hover:bg-[#fbf7ed]"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-[#c9a45c]/40 text-[#a98543] transition-all duration-300 group-hover:bg-[#0e2238] group-hover:text-[#e4cc98]">
                  <Icon size={19} strokeWidth={1.5} />
                </div>

                <h3 className="mt-7 font-serif text-2xl text-[#0e2238]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#647180]">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-7 bg-[#c9a45c] transition-all duration-300 group-hover:w-12" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}