"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2238] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#C9A45C]/15" />
        <div className="absolute -right-20 -top-28 h-[300px] w-[300px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -bottom-32 -left-28 h-[320px] w-[320px] rounded-full bg-[#193750]/40 blur-3xl" />

        <div className="absolute right-[14%] top-[30%] h-1 w-1 rounded-full bg-[#C9A45C]" />
        <div className="absolute right-[19%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#C9A45C]/50" />
        <div className="absolute left-[12%] bottom-[20%] h-1 w-1 rounded-full bg-white/30" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-12 sm:pb-10 sm:pt-10 lg:px-10 lg:pb-10 lg:pt-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-2 text-sm text-white/55"
        >
          <span>Home</span>
          <span className="text-[#C9A45C]">/</span>
          <span className="text-white/85">Contact</span>
        </motion.div>

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E4CC98]">
                Professional Enquiries
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl"
            >
              Let&apos;s discuss your
              <span className="block text-[#E4CC98]">
                legal enquiry.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg"
            >
              For professional enquiries, appointments and general
              information, use the appropriate contact channel below.
              Please provide only the relevant information needed for
              your initial enquiry.
            </motion.p>
          </div>

          {/* Contact summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="hidden w-[250px] border-l border-white/10 pl-7 lg:block"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[#C9A45C]/40 bg-[#C9A45C]/10 text-[#E4CC98]">
              <Scale size={20} strokeWidth={1.5} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E4CC98]">
              Contact
            </p>

            <p className="mt-3 text-sm leading-6 text-white/55">
              Ahmedabad, Gujarat
            </p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-3 text-xs text-white/50">
                <Phone size={14} className="text-[#C9A45C]" />
                <span>Phone</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-white/50">
                <Mail size={14} className="text-[#C9A45C]" />
                <span>Email</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-white/50">
                <MapPin size={14} className="text-[#C9A45C]" />
                <span>Office Location</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35"
        >
          <ArrowDown size={15} className="text-[#C9A45C]" />
          <span>Continue below</span>
        </motion.div>
      </div>
    </section>
  );
}