
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative overflow-hidden bg-[#0E2238] text-white"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#C9A45C]/15" />
        <div className="absolute -right-20 -top-28 h-[300px] w-[300px] rounded-full border border-[#C9A45C]/10" />
        <div className="absolute -bottom-32 -left-28 h-[320px] w-[320px] rounded-full bg-[#193750]/50 blur-3xl" />
        <div className="absolute right-[14%] top-[30%] h-1 w-1 rounded-full bg-[#C9A45C]" />
        <div className="absolute right-[19%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#C9A45C]/50" />
        <div className="absolute bottom-[20%] left-[12%] h-1 w-1 rounded-full bg-white/30" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-10 lg:pb-20 lg:pt-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="mb-12 flex items-center gap-2 text-sm text-white/55 sm:mb-14"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98]"
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

        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          {/* Main content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#C9A45C]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E4CC98] sm:tracking-[0.24em]">
                Contact V&P Advocates and Notary
              </span>
            </motion.div>

            <motion.h1
              id="contact-hero-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let&apos;s discuss your
              <span className="mt-1 block text-[#E4CC98]">
                legal enquiry.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
            >
              Contact V&P Advocates and Notary for enquiries about legal
              services, appointments, document drafting, and notary
              requirements in Ahmedabad, Gujarat. Share the relevant details
              of your enquiry so the appropriate next steps can be considered.
            </motion.p>

            {/* Primary actions */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/contact#contact-form"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#C9A45C] px-6 py-3 text-sm font-semibold !text-[#081725] transition-colors hover:bg-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2238]"
              >
                <span className="!text-[#081725]">Send an Enquiry</span>
                <ArrowRight
                  size={17}
                  className="!text-[#081725] transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium !text-white transition-colors hover:border-[#C9A45C]/70 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98]"
              >
                <span className="!text-white">Explore Practice Areas</span>
                <ArrowRight size={16} className="!text-white" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-7 flex max-w-2xl items-start gap-3 text-sm leading-6 text-white/50"
            >
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />
              <p>
                Please avoid including sensitive personal information or
                confidential documents in an initial enquiry unless an
                appropriate channel has been confirmed.
              </p>
            </motion.div>
          </div>

          {/* Contact information panel */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="hidden border-l border-white/10 pl-7 lg:block"
            aria-label="Contact overview"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#C9A45C]/40 bg-[#C9A45C]/10 text-[#E4CC98]">
              <Scale size={22} strokeWidth={1.5} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
              Get in touch
            </p>

            <h2 className="mt-3 font-serif text-2xl leading-snug text-white">
              Clear communication starts here.
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/55">
              For legal service enquiries and appointment-related information,
              use the contact details provided on this website.
            </p>

            <div className="mt-7 space-y-5 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C9A45C]"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    Location
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C9A45C]"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    Phone enquiries
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Refer to the contact details listed on the Contact page.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C9A45C]"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    Email enquiries
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Use the published email address, if available.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] sm:mt-14"
        >
          <ArrowDown size={15} className="text-[#C9A45C]" />
          <span>Continue to contact form</span>
        </motion.a>
      </div>
    </section>
  );
}
