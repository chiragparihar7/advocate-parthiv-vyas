
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";

const offices = [
  {
    number: "01",
    title: "Hanspura Office",
    address:
      "Shop No. 8, Dev Ashish Divine, Opposite Gayatri Green, Near Sadguru Circle, Hanspura, Naroda, Ahmedabad, Gujarat, India.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shop+No+8+Dev+Ashish+Divine+Opposite+Gayatri+Green+Near+Sadguru+Circle+Hanspura+Naroda+Ahmedabad",
  },
  {
    number: "02",
    title: "Durganagar Office",
    address:
      "62, Durganagar Society, Near Naroda Police Station, Naroda, Ahmedabad, Gujarat - 382330.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=62+Durganagar+Society+Near+Naroda+Police+Station+Naroda+Ahmedabad+382330",
  },
];

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative isolate overflow-hidden bg-[#0B1C2D] text-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="absolute -right-40 -top-48 h-[560px] w-[560px] rounded-full border border-[#C9A45C]/15" />

        <div className="absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-[#C9A45C]/10" />

        <div className="absolute -bottom-60 -left-40 h-[560px] w-[560px] rounded-full bg-[#17334B]/60 blur-3xl" />
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-14 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:px-10 lg:pb-20 lg:pt-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-9 flex items-center gap-3 text-xs sm:mb-12"
        >
          <Link
            href="/"
            className="text-white/50 transition-colors hover:text-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98]"
          >
            Home
          </Link>

          <span aria-hidden="true" className="text-[#C9A45C]">
            /
          </span>

          <span aria-current="page" className="text-white/90">
            Contact
          </span>
        </motion.nav>

        {/* Equal-height two-column layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left: Hero content */}
          <div className="flex min-w-0 flex-col justify-center lg:h-full lg:py-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E4CC98] sm:text-xs sm:tracking-[0.25em]">
                V&amp;P Advocates and Notary
              </span>
            </motion.div>

            <motion.h1
              id="contact-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="max-w-2xl font-serif text-[43px] leading-[1.08] tracking-[-0.035em] text-[#FAF8F3] sm:text-6xl xl:text-[72px]"
            >
              The first step
              <span className="block text-[#E4CC98]">
                is a conversation.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-sm leading-7 text-[#B8C2CC] sm:text-base sm:leading-8"
            >
              Connect with V&amp;P Advocates and Notary for enquiries about
              legal services, appointments, document drafting, and notary
              requirements in Ahmedabad, Gujarat. Share the general details
              of your enquiry to help identify the appropriate next step.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/contact#contact-form"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#C9A45C] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#081725] transition-colors duration-300 hover:bg-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2D] sm:text-xs"
              >
                Send an Enquiry

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 border border-white/20 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:border-[#C9A45C]/70 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] sm:text-xs"
              >
                Explore Practice Areas

                <ArrowUpRight
                  size={16}
                  className="text-[#E4CC98] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Trust note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex max-w-xl items-start gap-3 border-t border-white/10 pt-5"
            >
              <ShieldCheck
                size={17}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />

              <p className="text-[11px] leading-6 text-white/50">
                Avoid sharing confidential documents or sensitive personal
                information until an appropriate communication channel has
                been established.
              </p>
            </motion.div>
          </div>

          {/* Right: Compact contact card */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            aria-label="Contact details and office locations"
            className="relative flex min-w-0 flex-col lg:h-full"
          >
            <div className="absolute -inset-1.5 border border-[#C9A45C]/10" />

            <div className="relative flex flex-1 flex-col overflow-hidden border border-[#C9A45C]/30 bg-[#10263B] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              {/* Card accents */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

              <div className="relative flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
                {/* Card heading */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E4CC98]">
                      Contact Information
                    </p>

                    <h2 className="mt-2.5 font-serif text-[27px] leading-tight text-[#FAF8F3] sm:text-[31px]">
                      We&apos;re here to
                      <span className="block text-[#E4CC98]">
                        hear from you.
                      </span>
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.07]">
                    <Scale
                      size={20}
                      strokeWidth={1.3}
                      className="text-[#E4CC98]"
                    />
                  </div>
                </div>

                <p className="mt-2 text-xs leading-5 text-[#AAB7C2]">
                  Contact our office for enquiries and appointments.
                </p>

                {/* Phone and email */}
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href="tel:+919879811440"
                    className="group flex min-w-0 items-start gap-3 border border-white/10 bg-white/[0.025] p-3 transition-colors hover:border-[#C9A45C]/40 hover:bg-[#C9A45C]/[0.05]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.06]">
                      <Phone
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#E4CC98]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">
                        Phone
                      </p>

                      <p className="mt-1.5 break-words text-xs font-semibold text-[#FAF8F3] group-hover:text-[#E4CC98]">
                        +91 98798 11440
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:vyas.parthiv8049@yahoo.com"
                    className="group flex min-w-0 items-start gap-3 border border-white/10 bg-white/[0.025] p-3 transition-colors hover:border-[#C9A45C]/40 hover:bg-[#C9A45C]/[0.05]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.06]">
                      <Mail
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#E4CC98]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">
                        Email
                      </p>

                      <p className="mt-1.5 break-all text-[11px] leading-4 text-[#E4CC98] group-hover:text-white">
                        vyas.parthiv8049@yahoo.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Offices */}
                <div className="mt-5">
                  <div className="mb-3 flex items-center gap-3">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E4CC98]">
                      Office Locations
                    </p>

                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="space-y-2.5">
                    {offices.map((office) => (
                      <div
                        key={office.number}
                        className="group border border-white/10 bg-white/[0.02] p-3.5 transition-colors duration-300 hover:border-[#C9A45C]/30 hover:bg-white/[0.035] sm:p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.06]">
                            <MapPin
                              size={15}
                              strokeWidth={1.4}
                              className="text-[#E4CC98]"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="text-xs font-semibold text-[#FAF8F3] sm:text-sm">
                                {office.title}
                              </h3>

                              <span className="font-serif text-xs text-[#C9A45C]/70">
                                {office.number}
                              </span>
                            </div>

                            <p className="mt-1.5 text-[11px] leading-[1.7] text-[#AAB7C2]">
                              {office.address}
                            </p>

                            <a
                              href={office.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#E4CC98] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98]"
                            >
                              Get Directions
                              <ArrowUpRight size={12} />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note stays at the bottom */}
                <div className="mt-auto flex items-start gap-2.5 border-t border-white/10 pt-4 sm:mt-4">
                  <Clock3
                    size={14}
                    strokeWidth={1.4}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <p className="text-[10px] leading-5 text-white/45">
                    Contact the office directly to confirm appointment
                    availability and timings.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />
            </div>
          </motion.aside>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] sm:mt-12"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-white/15">
            <ArrowDown size={14} className="text-[#C9A45C]" />
          </span>

          Continue to contact form
        </motion.a>
      </div>
    </section>
  );
}
