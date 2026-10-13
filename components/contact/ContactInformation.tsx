
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
    value: "Add verified phone number",
    note: "For professional enquiries",
    href: "",
  },
  {
    icon: Mail,
    label: "Email Enquiries",
    value: "Add verified email address",
    note: "For written communication",
    href: "",
  },
  {
    icon: MapPin,
    label: "Practice Location",
    value: "Ahmedabad, Gujarat",
    note: "Confirm the office address before visiting",
    href: "",
  },
  {
    icon: Clock3,
    label: "Office Hours",
    value: "Add verified office hours",
    note: "Confirm availability before visiting",
    href: "",
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
            appointment-related information, and details about legal services
            in Ahmedabad, Gujarat.
          </p>
        </div>
      </div>

      {/* Contact methods */}
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

              {item.href ? (
                <a
                  href={item.href}
                  aria-label={`Open ${item.label}`}
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[#A98543] transition-colors hover:text-[#0E2238] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                >
                  <ArrowUpRight size={17} />
                </a>
              ) : null}
            </motion.div>
          );
        })}
      </div>

      {/* Verification note */}
      <div className="mt-5 flex items-start gap-3 border border-[#E7E1D6] bg-[#FAF8F3] p-4 sm:p-5">
        <ShieldCheck
          size={19}
          className="mt-0.5 shrink-0 text-[#A98543]"
          strokeWidth={1.5}
        />

        <div>
          <p className="text-sm font-semibold text-[#0E2238]">
            Contact information
          </p>

          <p className="mt-1.5 text-xs leading-6 text-[#647180]">
            Verify the phone number, email address, office address, and
            working hours before publishing this page. Avoid relying on
            unconfirmed contact details.
          </p>
        </div>
      </div>

      {/* Enquiry link */}
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
        Website information is for general informational purposes and does
        not constitute legal advice or establish an advocate-client
        relationship.
      </p>
    </motion.div>
  );
}
