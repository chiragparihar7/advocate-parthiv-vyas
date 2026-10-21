"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "advocate-disclaimer-dismissed";

export default function DisclaimerNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);

      if (dismissed === "true") {
        return;
      }
    } catch {
      // Continue without session storage if browser access is restricted.
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleAgree = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The notice can still be dismissed if storage is unavailable.
    }

    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#081725]/80 px-4 py-6 backdrop-blur-sm sm:px-6"
          role="presentation"
        >
          {/* Centered Disclaimer Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="disclaimer-title"
            aria-describedby="disclaimer-description"
            className="relative my-auto w-full max-w-[620px] overflow-hidden border border-[#C9A45C]/35 bg-[#0E2238] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
          >
            {/* Background Details */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/15" />

            <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

            {/* Content */}
            <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10">
              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#C9A45C]/35 bg-[#C9A45C]/[0.07]">
                <AlertCircle
                  size={26}
                  strokeWidth={1.3}
                  className="text-[#E4CC98]"
                />
              </div>

              {/* Heading */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-7 bg-[#C9A45C]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E4CC98]">
                    V&P Advocates and Notary
                  </p>

                  <span className="h-px w-7 bg-[#C9A45C]" />
                </div>

                <h2
                  id="disclaimer-title"
                  className="mt-4 font-serif text-[34px] leading-tight text-[#FAF8F3] sm:text-[42px]"
                >
                  Important Legal
                  <span className="block text-[#E4CC98]">
                    Disclaimer
                  </span>
                </h2>
              </div>

              {/* Disclaimer Text */}
              <div className="mt-7 border-y border-white/10 py-5">
                <p
                  id="disclaimer-description"
                  className="text-center text-[12px] leading-7 text-[#C0CBD5] sm:text-[13px]"
                >
                  The information on this website is provided for general
                  informational purposes only. It does not constitute legal
                  advice and should not be treated as a substitute for advice
                  based on your specific circumstances.
                </p>

                <p className="mt-4 text-center text-[12px] leading-7 text-[#C0CBD5] sm:text-[13px]">
                  Viewing this website or submitting an enquiry does not
                  by itself establish an advocate-client relationship.
                  Legal matters require individual assessment, and no
                  particular outcome is guaranteed.
                </p>
              </div>

              {/* Confirmation */}
              <div className="mt-5 flex items-start gap-3 text-left">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#C9A45C]"
                />

                <p className="text-[10px] leading-5 text-[#9EAFBD]">
                  By selecting “I Agree & Continue,” you acknowledge that
                  you have read and understood this notice.
                </p>
              </div>

              {/* Agree Button */}
              <button
                type="button"
                onClick={handleAgree}
                className="group mt-7 flex w-full items-center justify-center gap-3 bg-[#C9A45C] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] !text-[#081725] opacity-100 transition-colors duration-300 hover:bg-[#E4CC98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4CC98]"
              >
                <span className="!text-[#081725]">
                  I Agree &amp; Continue
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#081725] transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Full Disclaimer Link */}
              <div className="mt-5 text-center">
                <Link
                  href="/disclaimer"
                  className="group inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#C0CBD5] transition-colors hover:text-[#E4CC98]"
                >
                  Read Full Disclaimer

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/50 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}