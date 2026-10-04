"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "advocate-disclaimer-dismissed";

export default function DisclaimerNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Do not show again during the current browser session
    const dismissed = sessionStorage.getItem(STORAGE_KEY);

    if (dismissed === "true") {
      return;
    }

    // Show after approximately 4.5 seconds
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 4500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5"
          role="dialog"
          aria-label="Important legal information"
        >
          <div className="mx-auto max-w-[1050px]">
            <div className="relative overflow-hidden border border-[#C9A45C]/25 bg-[#081725] shadow-[0_-15px_60px_rgba(8,23,37,0.22)]">
              {/* =====================================================
                  BACKGROUND
              ===================================================== */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Gold glow */}
              <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#C9A45C]/[0.05] blur-3xl" />

              {/* Top gold line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent" />

              {/* =====================================================
                  CLOSE BUTTON
              ===================================================== */}

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close important information"
                className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center border border-white/10 text-[#8998A6] transition-all duration-300 hover:border-[#C9A45C]/50 hover:bg-[#C9A45C]/10 hover:text-[#E4CC98] sm:right-4 sm:top-4"
              >
                <X size={16} strokeWidth={1.5} />
              </button>

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div className="relative z-10 p-5 pr-12 sm:p-6 sm:pr-14 lg:px-7 lg:py-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-5">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C9A45C]/30 bg-[#C9A45C]/[0.06]">
                    <AlertCircle
                      size={19}
                      strokeWidth={1.3}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#C9A45C]" />

                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E4CC98]">
                        Important Information
                      </p>
                    </div>

                    <p className="mt-3 max-w-4xl text-[11px] leading-5 text-[#AEB9C5] sm:text-[12px] sm:leading-6">
                      Information provided on this website is intended for
                      general informational purposes. It should not be
                      understood as a substitute for professional legal advice
                      or as a guarantee of any particular outcome. Legal
                      information may change over time and should be reviewed
                      in the appropriate context.
                    </p>

                    {/* Bottom actions */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <Link
                        href="/disclaimer"
                        className="group inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-[#E4CC98] transition-colors hover:text-white"
                      >
                        Read Full Disclaimer

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="text-[#C9A45C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>

                      <span className="hidden h-3 w-px bg-white/10 sm:block" />

                      <span className="text-[8px] uppercase tracking-[0.14em] text-[#5F7181]">
                        General information only
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom line */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}