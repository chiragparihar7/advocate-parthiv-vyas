"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  FileText,
  Gavel,
  Scale,
} from "lucide-react";
import Link from "next/link";

interface PracticeAreaCardProps {
  number: string;
  title: string;
  description: string;
  slug: string;
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
  slug,
  icon,
}: PracticeAreaCardProps) {
  const Icon = icons[icon as keyof typeof icons] ?? Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link
        href={`/practice-areas/${slug}`}
        className="relative block h-full overflow-hidden border border-[#E4DED3] bg-white p-7 transition-all duration-300 hover:border-[#C9A45C] hover:-translate-y-1"
      >
        {/* Hover Accent */}
        <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#C9A45C] transition-transform duration-300 group-hover:scale-y-100" />

        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="font-serif text-[24px] !text-[#C9A45C]">
            {number}
          </span>

          <div className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3] transition-colors duration-300 group-hover:border-[#C9A45C]/40 group-hover:bg-[#FBF7ED]">
            <Icon
              size={17}
              strokeWidth={1.25}
              className="!text-[#A98543]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-9">
          <h3 className="font-serif text-[27px] leading-tight !text-[#0E2238]">
            {title}
          </h3>

          <p className="mt-3 max-w-md text-[12px] leading-6 !text-[#6B7785]">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] !text-[#8993A0] transition-colors duration-300 group-hover:!text-[#A98543]">
            Explore
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.4}
            className="!text-[#A98543] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}