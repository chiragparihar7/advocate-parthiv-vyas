
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
  Route,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const officeAddresses = [
  {
    title: "Office Address 1",
    address:
      "Shop No. 8, Dev Ashish Divine, Opposite Gayatri Green, Near Sadguru Circle, Hanspura, Naroda, Ahmedabad, Gujarat, India.",
    icon: Navigation,
  },
  {
    title: "Office Address 2",
    address:
      "62, Durganagar Society, Near Naroda Police Station, Naroda, Ahmedabad, Gujarat - 382330.",
    icon: MapPin,
  },
];

export default function Location() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
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

        <div className="absolute -left-56 -top-56 h-[600px] w-[600px] rounded-full bg-[#C9A45C]/[0.045] blur-3xl" />

        <div className="absolute -right-44 bottom-[-200px] h-[500px] w-[500px] rounded-full border border-[#C9A45C]/10" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A98543]">
                Our Location
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] text-[#0E2238] sm:text-[58px] lg:text-[68px]">
              Legal assistance
              <span className="block text-[#A98543]">
                in Ahmedabad.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-lg text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              V&P Advocates and Notary provides legal assistance across a
              range of practice areas. Contact the firm to enquire about
              your matter and confirm the appropriate office location
              before visiting.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <ShieldCheck
                size={16}
                strokeWidth={1.4}
                className="text-[#C9A45C]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8993A0]">
                Ahmedabad, Gujarat
              </span>
            </div>
          </div>
        </motion.div>

        {/* Location Experience */}
        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden border border-[#E2DDD3] bg-white p-7 sm:p-9 lg:p-10"
          >
            {/* Decorative Number */}
            <div className="pointer-events-none absolute -right-3 -top-10 select-none font-serif text-[170px] leading-none text-[#0E2238]/[0.025]">
              01
            </div>

            <div className="relative z-10">
              {/* Location Label */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#E7E1D6] bg-[#FAF8F3]">
                  <MapPin
                    size={19}
                    strokeWidth={1.3}
                    className="text-[#C9A45C]"
                  />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
                    City of Practice
                  </p>

                  <p className="mt-1 text-[10px] text-[#8993A0]">
                    Gujarat, India
                  </p>
                </div>
              </div>

              {/* Main Location */}
              <div className="mt-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8993A0]">
                  Legal Practice
                </p>

                <h3 className="mt-3 font-serif text-[38px] leading-[1.02] text-[#0E2238] sm:text-[44px]">
                  Ahmedabad
                  <span className="block text-[#A98543]">
                    Gujarat
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-[12px] leading-6 text-[#647180]">
                  For enquiries regarding civil, criminal, property,
                  family, commercial, tribunal, drafting, and notary
                  matters, contact the firm to discuss your requirements
                  and confirm the next steps.
                </p>
              </div>

              {/* Office Addresses */}
              <div className="mt-8 border-t border-[#E7E1D6] pt-7">
                <div className="space-y-6">
                  {officeAddresses.map((office) => {
                    const OfficeIcon = office.icon;

                    return (
                      <div
                        key={office.title}
                        className="flex gap-4"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#FBF7ED]">
                          <OfficeIcon
                            size={16}
                            strokeWidth={1.3}
                            className="text-[#C9A45C]"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                            {office.title}
                          </p>

                          <p className="mt-1 text-[11px] leading-5 text-[#647180]">
                            {office.address}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Appointment Information */}
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#FBF7ED]">
                      <Clock3
                        size={16}
                        strokeWidth={1.3}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0E2238]">
                        Office Visit
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#647180]">
                        Contact the firm to confirm availability and
                        appointment arrangements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center justify-center gap-3 bg-[#0E2238] px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.17em] !text-white opacity-100 transition-colors duration-300 hover:bg-[#081725]"
              >
                <span className="!text-white opacity-100">
                  Contact the Firm
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Location Visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-h-[440px] overflow-hidden bg-[#0E2238] sm:min-h-[500px]"
          >
            {/* Map Grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />

            {/* Abstract Roads */}
            <div className="absolute left-[8%] top-[22%] h-px w-[82%] rotate-[18deg] bg-white/[0.08]" />

            <div className="absolute left-[15%] top-[48%] h-px w-[78%] -rotate-[11deg] bg-white/[0.08]" />

            <div className="absolute left-[34%] top-[5%] h-[90%] w-px rotate-[19deg] bg-white/[0.07]" />

            <div className="absolute left-[64%] top-[8%] h-[86%] w-px -rotate-[27deg] bg-white/[0.06]" />

            <div className="absolute left-[5%] top-[68%] h-px w-[95%] rotate-[7deg] bg-[#C9A45C]/10" />

            {/* Decorative Blocks */}
            <div className="absolute left-[9%] top-[17%] h-16 w-28 border border-white/[0.05]" />

            <div className="absolute left-[57%] top-[20%] h-24 w-36 border border-white/[0.05]" />

            <div className="absolute bottom-[18%] left-[14%] h-20 w-32 border border-white/[0.05]" />

            <div className="absolute bottom-[15%] right-[10%] h-28 w-40 border border-white/[0.05]" />

            {/* Radar Circles */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A45C]/10" />

            <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A45C]/15" />

            <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A45C]/20" />

            {/* Gold Glow */}
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-2xl" />

            {/* Central Location Graphic */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 animate-pulse rounded-full border border-[#C9A45C]/20" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A45C]/50 bg-[#C9A45C]/10 backdrop-blur-sm">
                  <Scale
                    size={29}
                    strokeWidth={1.25}
                    className="text-[#C9A45C]"
                  />
                </div>
              </motion.div>

              <div className="mt-5 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E4CC98]">
                  V&P Advocates
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#718291]">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Top Label */}
            <div className="absolute left-5 top-5 border border-white/10 bg-[#081725]/75 px-4 py-3 backdrop-blur-sm sm:left-7 sm:top-7 sm:px-5 sm:py-4">
              <div className="flex items-center gap-3">
                <Route
                  size={15}
                  strokeWidth={1.3}
                  className="text-[#C9A45C]"
                />

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#81909F]">
                    Legal Practice
                  </p>

                  <p className="mt-1 font-serif text-[18px] text-white">
                    Ahmedabad
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Information Card */}
            <div className="absolute bottom-5 left-5 right-5 border border-white/10 bg-[#081725]/80 p-4 backdrop-blur-md sm:bottom-7 sm:left-auto sm:right-7 sm:w-[310px] sm:p-5">
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
                V&P Advocates and Notary
              </p>

              <p className="mt-2 font-serif text-[23px] leading-tight text-white">
                Legal Assistance
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[8px] uppercase tracking-[0.15em] text-[#9AA7B3]">
                  Ahmedabad, Gujarat
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#C9A45C]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Location Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 border-t border-[#DDD7CC] pt-6"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin
                size={15}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#0E2238]">
                  City
                </p>

                <p className="mt-1 text-[10px] text-[#8993A0]">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Navigation
                size={15}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#0E2238]">
                  Office Addresses
                </p>

                <p className="mt-1 text-[10px] leading-5 text-[#8993A0]">
                  Two office locations in Naroda, Ahmedabad. Please
                  confirm your appointment before visiting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock3
                size={15}
                strokeWidth={1.3}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#0E2238]">
                  Office Visits
                </p>

                <p className="mt-1 text-[10px] text-[#8993A0]">
                  Confirm availability before visiting.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
