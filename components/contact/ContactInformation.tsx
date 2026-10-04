"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "Add verified phone number",
    note: "For professional enquiries",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Add verified email address",
    note: "For written enquiries",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat",
    note: "Office details to be verified",
  },
  {
    icon: Clock3,
    label: "Office Hours",
    value: "Add verified office hours",
    note: "Availability may vary",
  },
];

export default function ContactInformation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="h-fit"
    >
      {/* Heading */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-9 bg-[#C9A45C]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98543]">
            Contact Details
          </span>
        </div>

        <h2 className="font-serif text-3xl leading-tight tracking-[-0.015em] text-[#0E2238] sm:text-4xl">
          Connect through the appropriate channel.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-6 text-[#647180]">
          Use the verified contact information provided here for
          professional communication and appointment-related enquiries.
        </p>
      </div>

      {/* Contact details */}
      <div className="divide-y divide-[#E7E1D6] border-y border-[#E7E1D6]">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group flex gap-4 py-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543] transition-colors duration-300 group-hover:border-[#C9A45C]">
                <Icon size={17} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8993A0]">
                  {item.label}
                </p>

                <p className="mt-1.5 text-[15px] font-medium text-[#0E2238]">
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-[#8993A0]">
                  {item.note}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Small note */}
      <div className="mt-7 flex gap-3 border-l-2 border-[#C9A45C] bg-[#FBF7ED] p-4">
        <Scale
          size={17}
          className="mt-0.5 shrink-0 text-[#A98543]"
          strokeWidth={1.5}
        />

        <p className="text-xs leading-5 text-[#647180]">
          Contact information should be verified with the advocate before
          the website is published.
        </p>
      </div>
    </motion.div>
  );
}