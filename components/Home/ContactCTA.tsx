"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-14 text-[#1D2935] sm:py-16 lg:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0E2238 1px, transparent 1px), linear-gradient(90deg, #0E2238 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#C9A45C]/[0.07] blur-3xl" />

        <div className="absolute -bottom-52 -left-40 h-[480px] w-[480px] rounded-full border border-[#C9A45C]/15" />

        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-[#0E2238]/[0.04] lg:block" />

        <div className="absolute bottom-0 right-[7%] top-0 hidden w-px bg-[#0E2238]/[0.04] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Main CTA */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-center py-2 lg:py-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A98543]">
                V&P Advocates and Notary
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-serif text-[42px] leading-[1.05] tracking-[-0.025em] text-[#0E2238] sm:text-[54px] lg:text-[66px]">
              Every legal matter
              <span className="mt-1 block text-[#A98543]">
                starts with a conversation.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[13px] leading-7 text-[#647180] sm:text-[14px]">
              Whether you need assistance with a civil dispute, property
              matter, family issue, cheque bounce case, legal documentation
              or notary services, use the contact page to make an enquiry
              about your requirements.
            </p>

            <p className="mt-4 max-w-xl text-[11px] leading-6 text-[#8993A0]">
              Share only the information necessary for your initial enquiry.
              Your matter will require individual consideration, and an
              enquiry does not itself establish an advocate-client
              relationship.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#0E2238] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] !text-white opacity-100 transition-colors duration-300 hover:bg-[#193750]"
              >
                <span className="!text-white">
                  Contact the Office
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#C9A45C] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice-areas"
                className="group inline-flex items-center justify-center gap-3 border border-[#D9D2C6] bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E2238] transition-colors duration-300 hover:border-[#C9A45C] hover:bg-[#FBF7ED]"
              >
                <span>Explore Practice Areas</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#A98543] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust Details */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E7E1D6] pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={14}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#A98543]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#647180]">
                  Matter-specific consideration
                </span>
              </div>

              <span className="hidden h-3 w-px bg-[#E7E1D6] sm:block" />

              <div className="flex items-center gap-2">
                <MapPin
                  size={14}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#A98543]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#647180]">
                  Ahmedabad, Gujarat
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-[#C9A45C]/25 bg-[#0E2238] shadow-[0_20px_55px_rgba(14,34,56,0.14)]">
              {/* Panel Background */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#C9A45C]/15" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#C9A45C]/10" />

              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

              <div className="relative z-10 p-6 sm:p-9 lg:p-10">
                {/* Panel Heading */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#C9A45C]">
                      Get in Touch
                    </p>

                    <h3 className="mt-3 font-serif text-[30px] leading-tight text-[#FAF8F3] sm:text-[36px]">
                      Let us understand
                      <span className="block text-[#E4CC98]">
                        your legal concern.
                      </span>
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/25 bg-[#C9A45C]/[0.06] sm:flex">
                    <Scale
                      size={20}
                      strokeWidth={1.3}
                      className="text-[#C9A45C]"
                    />
                  </div>
                </div>

                <p className="mt-4 max-w-md text-[12px] leading-6 text-[#AAB7C2]">
                  Begin with a clear enquiry about your legal requirements
                  and the assistance you are seeking.
                </p>

                {/* Contact Information */}
                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.06]">
                      <Phone
                        size={17}
                        strokeWidth={1.4}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#E4CC98]">
                        Telephone Enquiries
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#AAB7C2]">
                        Use the contact page for available contact details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.06]">
                      <Mail
                        size={17}
                        strokeWidth={1.4}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#E4CC98]">
                        Written Enquiries
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#AAB7C2]">
                        Submit your enquiry through the contact page.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/20 bg-[#C9A45C]/[0.06]">
                      <MapPin
                        size={17}
                        strokeWidth={1.4}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#E4CC98]">
                        Practice Location
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#AAB7C2]">
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main CTA */}
                <Link
                  href="/contact"
                  className="group mt-5 flex items-center justify-between gap-4 border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06] p-5 transition-colors duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C]/10"
                >
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E4CC98]">
                      Start an Enquiry
                    </p>

                    <p className="mt-1 font-serif text-[22px] text-[#FAF8F3]">
                      Visit the Contact Page
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/30">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>

                {/* Professional Note */}
                <div className="mt-5 flex items-start gap-3">
                  <ShieldCheck
                    size={14}
                    strokeWidth={1.4}
                    className="mt-0.5 shrink-0 text-[#C9A45C]"
                  />

                  <p className="text-[10px] leading-5 text-[#91A1AE]">
                    Please avoid sharing confidential documents or sensitive
                    personal information until an appropriate communication
                    process has been established.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />
            </div>

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -left-3 hidden border border-[#C9A45C]/20 bg-white px-4 py-3 shadow-[0_15px_35px_rgba(14,34,56,0.12)] sm:block lg:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#F5F2EB]">
                  <Scale
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#A98543]"
                  />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#A98543]">
                    V&P Advocates and Notary
                  </p>

                  <p className="mt-1 text-[9px] text-[#8993A0]">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 border-t border-[#E7E1D6] pt-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A98543]">
                V&P Advocates and Notary
              </p>

              <p className="mt-2 max-w-xl text-[11px] leading-6 text-[#647180]">
                Legal representation, procedural guidance, legal drafting
                and notary-related enquiries in Ahmedabad, Gujarat.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2">
                <Scale
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#A98543]"
                />

                <span className="text-[9px] uppercase tracking-[0.12em] text-[#647180]">
                  Legal Assistance
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#A98543]"
                />

                <span className="text-[9px] uppercase tracking-[0.12em] text-[#647180]">
                  Ahmedabad, Gujarat
                </span>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#0E2238]"
              >
                <span>Contact Us</span>

                <ArrowRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#A98543] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}