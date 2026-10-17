"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  FileText,
  Gavel,
  Scale,
} from "lucide-react";

interface PracticeAreaCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const icons = {
  scale: Scale,
  gavel: Gavel,
  building: Building2,
  "file-text": FileText,
};

export default function PracticeAreaCard({
  number,
  title,
  description,
  icon,
}: PracticeAreaCardProps) {
  const Icon = icons[icon as keyof typeof icons] ?? Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45 }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden border border-[#E4DED3] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A45C] hover:shadow-[0_12px_30px_rgba(14,34,56,0.06)] sm:p-7">
        {/* Hover Accent */}
        <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-300 group-hover:scale-y-100" />

        {/* Card Header */}
        <div className="flex items-start justify-between">
          <span className="font-serif text-[24px] !text-[#C9A45C]">
            {number}
          </span>

          <div className="flex h-10 w-10 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-colors duration-300 group-hover:border-[#C9A45C]/40 group-hover:bg-[#FBF7ED]">
            <Icon
              size={18}
              strokeWidth={1.35}
              className="!text-[#A98543]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="mt-7 flex-1">
          <h3 className="font-serif text-[24px] leading-tight !text-[#0E2238] transition-colors duration-300 group-hover:!text-[#A98543]">
            {title}
          </h3>

          <p className="mt-3 text-[12px] leading-6 !text-[#6B7785]">
            {description}
          </p>
        </div>

        {/* Footer — informational, not a link */}
        <div className="mt-7 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] !text-[#8993A0]">
            Legal Practice
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.4}
            className="!text-[#A98543] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.div>
  );
}