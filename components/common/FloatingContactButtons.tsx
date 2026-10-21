"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+919879811440";
const WHATSAPP_NUMBER = "919879811440";

const WHATSAPP_MESSAGE =
  "Hello, I would like to enquire about your legal services.";

export default function FloatingContactButtons() {
  const phoneHref = `tel:${PHONE_NUMBER}`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <div
      className="fixed bottom-5 right-4 z-[100] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
      aria-label="Quick contact options"
    >
      {/* Phone Call */}
      <motion.a
        href={phoneHref}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        whileHover={{ scale: 1.07, y: -2 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Call V&P Advocates and Notary"
        title="Call us"
        className="group flex h-14 w-14 items-center justify-center
    rounded-full border-2 border-[#C9A45C]
    bg-[#F7EAC8] text-[#0E2238]
    shadow-xl shadow-[#0E2238]/20
    transition-colors duration-300
    hover:bg-[#EBD49A]
    focus-visible:outline-none
    focus-visible:ring-4 focus-visible:ring-[#C9A45C]/40
    sm:h-16 sm:w-16"
      >
        <Phone
          size={27}
          strokeWidth={2.5}
          className="block shrink-0 text-[#0E2238]"
          aria-hidden="true"
        />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        whileHover={{ scale: 1.07, y: -2 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-xl shadow-black/20 transition-colors duration-300 hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:h-16 sm:w-16"
      >
        <MessageCircle
          size={27}
          strokeWidth={2.3}
          className="block shrink-0"
          aria-hidden="true"
        />
      </motion.a>
    </div>
  );
}
