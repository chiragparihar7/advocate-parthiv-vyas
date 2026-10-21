"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone Enquiries",
    value: "+91 98798 11440",
    note: "For professional enquiries and appointments",
    href: "tel:+919879811440",
  },
  {
    icon: Mail,
    label: "Email Enquiries",
    value: "vyas.parthiv8049@yahoo.com",
    note: "For written communication",
    href: "mailto:vyas.parthiv8049@yahoo.com",
  },
];

const offices = [
  {
    number: "01",
    title: "Hanspura Office",
    address:
      "Shop No. 8, Dev Ashish Divine, Opposite Gayatri Green, Near Sadguru Circle, Hanspura, Naroda, Ahmedabad, Gujarat, India.",
    href: "https://www.google.com/maps/search/?api=1&query=Shop+No+8+Dev+Ashish+Divine+Opposite+Gayatri+Green+Near+Sadguru+Circle+Hanspura+Naroda+Ahmedabad",
  },
  {
    number: "02",
    title: "Durganagar Office",
    address:
      "62, Durganagar Society, Near Naroda Police Station, Naroda, Ahmedabad, Gujarat - 382330.",
    href: "https://www.google.com/maps/search/?api=1&query=62+Durganagar+Society+Near+Naroda+Police+Station+Naroda+Ahmedabad+382330",
  },
];

export default function ContactInformation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="h-fit"
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-[#0E2238] p-6 text-white sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[#C9A45C]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-9 h-32 w-32 rounded-full border border-[#C9A45C]/15"
        />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/40 bg-[#C9A45C]/10 text-[#E4CC98]">
            <Scale size={22} strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
            Contact Details
          </p>

          <h2 className="mt-3 max-w-md font-serif text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
            Connect through the appropriate channel.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
            Contact V&amp;P Advocates and Notary for professional enquiries,
            appointment information, and details about legal services in
            Ahmedabad, Gujarat.
          </p>
        </div>
      </div>

      {/* Phone, email and office hours */}
      <div className="border-x border-b border-[#E7E1D6] bg-white px-5 sm:px-7">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              className={`group flex items-start gap-4 py-5 sm:py-6 ${
                index !== contactItems.length - 1
                  ? "border-b border-[#E7E1D6]"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543] transition-colors duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#F5F2EB]">
                <Icon size={19} strokeWidth={1.5} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
                  {item.label}
                </p>

                <p className="mt-1.5 break-words text-sm font-semibold leading-6 text-[#0E2238] sm:text-[15px]">
                  {item.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#8993A0]">
                  {item.note}
                </p>
              </div>

              {item.href && (
                <a
                  href={item.href}
                  aria-label={`Open ${item.label}`}
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[#A98543] transition-colors hover:text-[#0E2238] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                >
                  <ArrowUpRight size={17} />
                </a>
              )}
            </motion.div>
          );
        })}

        {/* Office locations */}
        <div className="border-t border-[#E7E1D6] py-5 sm:py-6">
          <div className="mb-4 flex items-center gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
              Office Locations
            </p>

            <span className="h-px flex-1 bg-[#E7E1D6]" />
          </div>

          <div className="space-y-4">
            {offices.map((office) => (
              <div
                key={office.number}
                className="group border border-[#E7E1D6] bg-[#FAF8F3] p-4 transition-colors duration-300 hover:border-[#C9A45C]/60 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#E7E1D6] bg-white text-[#A98543] transition-colors group-hover:border-[#C9A45C]/60">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-[#0E2238]">
                        {office.title}
                      </h3>

                      <span className="font-serif text-xs text-[#A98543]">
                        {office.number}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-6 text-[#687586]">
                      {office.address}
                    </p>

                    <a
                      href={office.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A98543] transition-colors hover:text-[#0E2238] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                    >
                      Get Directions
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry CTA */}
      <Link
        href="/contact#contact-form"
        className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#C9A45C] px-5 py-3 text-sm font-semibold !text-[#081725] transition-colors hover:bg-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] focus-visible:ring-offset-2"
      >
        <span className="!text-[#081725]">Send a Professional Enquiry</span>

        <ArrowUpRight
          size={17}
          className="!text-[#081725] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>

      <p className="mt-4 text-xs leading-5 text-[#8993A0]">
        Website information is for general informational purposes and does not
        constitute legal advice or establish an advocate-client relationship.
      </p>
    </motion.div>
  );
}
