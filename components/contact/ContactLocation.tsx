"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  MapPin,
  Navigation,
  ShieldCheck,
} from "lucide-react";

const offices = [
  {
    name: "Hanspura Office",
    address:
      "Shop No. 8, Dev Ashish Divine, Opposite Gayatri Green, Near Sadguru Circle, Hanspura, Naroda, Ahmedabad, Gujarat, India.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shop%20No.%208%2C%20Dev%20Ashish%20Divine%2C%20Opposite%20Gayatri%20Green%2C%20Near%20Sadguru%20Circle%2C%20Hanspura%2C%20Naroda%2C%20Ahmedabad%2C%20Gujarat%2C%20India",
  },
  {
    name: "Durganagar Office",
    address:
      "62, Durganagar Society, Near Naroda Police Station, Naroda, Ahmedabad, Gujarat - 382330.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=62%2C%20Durganagar%20Society%2C%20Near%20Naroda%20Police%20Station%2C%20Naroda%2C%20Ahmedabad%2C%20Gujarat%20382330",
  },
];

const visitDetails = [
  {
    icon: Clock3,
    title: "Before Visiting",
    description:
      "Please contact the office to confirm appointment availability.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare Your Enquiry",
    description:
      "Bring relevant documents only if they are requested for your appointment.",
  },
];

export default function ContactLocation() {
  return (
    <section
      id="office-locations"
      className="relative overflow-hidden bg-[#F5F2EB] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-9 max-w-3xl sm:mb-12"
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

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#647180] sm:text-base sm:leading-8">
            V&amp;P Advocates and Notary serves legal enquiries in Ahmedabad,
            Gujarat. Review the office addresses below and confirm your
            appointment before visiting.
          </p>
        </motion.div>

        {/* Main location layout */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Visit information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col border border-[#DED8CD] bg-white p-6 sm:p-8 lg:p-9"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543]">
                <MapPin size={22} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A98543]">
                  Office Information
                </p>

                <h3 className="mt-2 font-serif text-2xl leading-snug text-[#0E2238] sm:text-3xl">
                  V&amp;P Advocates and Notary
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#647180]">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            <div className="my-7 border-t border-[#E7E1D6]" />

            {/* Visit checklist */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
                Before Your Visit
              </h4>

              <div className="mt-5 space-y-5">
                {visitDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <Icon
                        size={19}
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

          {/* Office address cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {offices.map((office, index) => (
              <article
                key={office.name}
                className="flex flex-1 flex-col border border-[#DED8CD] bg-white p-6 transition-colors duration-300 hover:border-[#C9A45C] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0E2238] text-[#E4CC98]">
                      <MapPin size={20} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A98543]">
                        Office {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-1.5 font-serif text-xl text-[#0E2238] sm:text-2xl">
                        {office.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-[#E7E1D6] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8993A0]">
                    Office Address
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#536273]">
                    {office.address}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Find ${office.name} on Google Maps`}
                    className="group inline-flex min-h-11 items-center justify-center gap-2 border border-[#D8C7A3] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#0E2238] transition-all duration-300 ease-in-out hover:!border-[#0E2238] hover:!bg-[#0E2238] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] focus-visible:ring-offset-2"
                  >
                    <Navigation
                      size={16}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#A98543] transition-colors duration-300 group-hover:!text-[#E4CC98]"
                    />

                    <span className="transition-colors duration-300 group-hover:!text-white">
                      Get Directions
                    </span>

                    <ExternalLink
                      size={14}
                      className="ml-1 shrink-0 text-[#0E2238] opacity-70 transition-all duration-300 group-hover:!text-white group-hover:opacity-100"
                    />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex items-start gap-3 border-l-2 border-[#C9A45C] bg-white/60 px-4 py-4 sm:px-5">
          <ShieldCheck
            size={18}
            strokeWidth={1.6}
            className="mt-0.5 shrink-0 text-[#A98543]"
          />

          <p className="text-xs leading-6 text-[#647180] sm:text-sm">
            Please confirm the appropriate office and appointment availability
            before travelling. Google Maps links open address searches; verify
            the displayed location before following directions.
          </p>
        </div>
      </div>
    </section>
  );
}
