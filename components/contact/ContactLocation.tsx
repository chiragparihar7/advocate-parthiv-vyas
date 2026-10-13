
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Navigation,
  ShieldCheck,
} from "lucide-react";

const visitDetails = [
  {
    icon: MapPin,
    title: "Practice Location",
    description: "Ahmedabad, Gujarat, India",
  },
  {
    icon: Clock3,
    title: "Before Visiting",
    description: "Confirm appointment availability in advance.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare Your Enquiry",
    description: "Bring only relevant documents if requested.",
  },
];

export default function ContactLocation() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C9A45C]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A98543]">
              Find Our Practice
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#0E2238] sm:text-4xl lg:text-5xl">
            Legal assistance in
            <span className="text-[#A98543]"> Ahmedabad.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#647180] sm:text-base sm:leading-8">
            V&amp;P Advocates and Notary serves enquiries relating to legal
            services in Ahmedabad, Gujarat. Confirm the office address and
            appointment arrangements before planning an in-person visit.
          </p>
        </motion.div>

        {/* Main location layout */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Location information card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col border border-[#DED8CD] bg-white p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A98543]">
                  Location Details
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#0E2238] sm:text-3xl">
                  V&amp;P Advocates and Notary
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543]">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
            </div>

            {/* City location panel */}
            <div className="mt-8 flex items-center gap-4 border-y border-[#E7E1D6] py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0E2238] text-[#E4CC98]">
                <Navigation size={19} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8993A0]">
                  City &amp; Region
                </p>
                <p className="mt-1.5 text-base font-semibold text-[#0E2238]">
                  Ahmedabad, Gujarat, India
                </p>
                <p className="mt-1 text-xs leading-5 text-[#8993A0]">
                  Exact office address to be confirmed.
                </p>
              </div>
            </div>

            {/* Visit checklist */}
            <div className="mt-7">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
                Before Your Visit
              </h4>

              <div className="mt-5 space-y-5">
                {visitDetails.slice(1).map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 text-[#A98543]"
                      />

                      <div>
                        <p className="text-sm font-semibold text-[#0E2238]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#647180]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Link
                href="/contact#contact-form"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#0E2238] px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#17384F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] focus-visible:ring-offset-2 sm:w-auto"
              >
                <span className="!text-white">Contact the Office</span>
                <ArrowRight
                  size={17}
                  className="!text-white transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Illustrative location graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative flex min-h-[380px] flex-col overflow-hidden border border-[#DED8CD] bg-[#EAE6DD] sm:min-h-[460px] lg:min-h-full"
          >
            {/* Decorative grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(#CEC6B8 1px, transparent 1px), linear-gradient(90deg, #CEC6B8 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            {/* Abstract roads */}
            <div
              aria-hidden="true"
              className="absolute -left-[10%] top-[15%] h-10 w-[125%] rotate-[18deg] bg-[#F8F6F0]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-[25%] top-[48%] h-12 w-[125%] -rotate-[32deg] bg-[#F8F6F0]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[28%] top-[-20%] h-[145%] w-9 rotate-[25deg] bg-[#F8F6F0]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[-25%] right-[20%] h-[100%] w-8 -rotate-[20deg] bg-[#F8F6F0]"
            />

            {/* Decorative blocks */}
            <div
              aria-hidden="true"
              className="absolute left-[12%] top-[17%] h-14 w-20 border border-[#D5CDBF] bg-[#DFDACF]/70"
            />
            <div
              aria-hidden="true"
              className="absolute right-[12%] top-[18%] h-20 w-24 border border-[#D5CDBF] bg-[#DFDACF]/70"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[27%] left-[12%] h-16 w-24 border border-[#D5CDBF] bg-[#DFDACF]/70"
            />

            {/* Center marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute top-1 h-20 w-20 animate-pulse rounded-full border border-[#C9A45C]/50" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#0E2238] text-[#E4CC98] shadow-xl">
                  <MapPin size={27} strokeWidth={1.5} />
                </div>

                <div className="mt-4 border border-white/70 bg-white/95 px-5 py-3 text-center shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A98543]">
                    Ahmedabad
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#0E2238]">
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Graphic label */}
            <div className="relative mt-auto border-t border-[#DED8CD] bg-white/95 p-5 backdrop-blur-sm sm:p-6">
              <p className="text-sm font-semibold text-[#0E2238]">
                Location overview
              </p>
              <p className="mt-1.5 text-xs leading-5 text-[#647180]">
                This is an illustrative graphic, not a navigable map or an
                indication of the exact office location.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <p className="mt-6 text-xs leading-6 text-[#8993A0]">
          For directions, please use the verified office address once it has
          been provided by the practice.
        </p>
      </div>
    </section>
  );
}
