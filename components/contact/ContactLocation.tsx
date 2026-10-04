"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Navigation,
} from "lucide-react";

export default function ContactLocation() {
  return (
    <section className="bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9A45C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98543]">
                Location
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#0E2238]">
              Professional presence in Ahmedabad.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#647180]">
              The practice is based in Ahmedabad, Gujarat. Please verify
              the office address and appointment availability before
              visiting.
            </p>

            <div className="mt-7 flex items-start gap-4 border-y border-[#DED8CD] py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FBF7ED] text-[#A98543]">
                <MapPin size={19} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8993A0]">
                  Location
                </p>

                <p className="mt-1.5 text-sm font-medium text-[#0E2238]">
                  Ahmedabad, Gujarat
                </p>

                <p className="mt-1 text-xs text-[#8993A0]">
                  Exact public office address to be verified.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#8993A0]">
              <Navigation size={14} className="text-[#A98543]" />
              <span>Appointment-based visits are recommended.</span>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[360px] overflow-hidden border border-[#DDD7CD] bg-[#EAE6DD]"
          >
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(#cfc8ba 1px, transparent 1px), linear-gradient(90deg, #cfc8ba 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Road-like elements */}
            <div className="absolute left-[15%] top-0 h-full w-10 rotate-[25deg] bg-[#F5F2EB]" />
            <div className="absolute right-[20%] top-[-10%] h-[120%] w-12 -rotate-[35deg] bg-[#F5F2EB]" />
            <div className="absolute left-0 top-[55%] h-8 w-full rotate-[8deg] bg-[#F5F2EB]" />

            {/* Center location */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-5 animate-pulse rounded-full border border-[#C9A45C]/30" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#0E2238] text-[#E4CC98] shadow-xl">
                  <MapPin size={23} fill="currentColor" strokeWidth={1.3} />
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/70 bg-white/90 p-4 backdrop-blur-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A98543]">
                  Ahmedabad
                </p>
                <p className="mt-1 text-xs text-[#647180]">
                  Gujarat, India
                </p>
              </div>

              <span className="flex h-9 w-9 items-center justify-center border border-[#DDD7CD] text-[#0E2238]">
                <ExternalLink size={15} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}