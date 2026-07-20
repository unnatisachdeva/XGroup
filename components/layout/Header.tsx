"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Truck, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0C10]/90 backdrop-blur-md border-b border-[#262B34] py-3 shadow-xl"
          : "bg-gradient-to-b from-[#0A0C10]/80 via-[#0A0C10]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CC0000] to-[#990000] flex items-center justify-center text-[#0A0C10] font-black text-xl shadow-lg group-hover:scale-105 transition-transform duration-200">
            X
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-tight text-[#F5F6F7] group-hover:text-[#CC0000] transition-colors">
              THE X GROUP <span className="text-[#CC0000] text-xs align-super uppercase font-semibold">INC</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-[#A9AFB9] uppercase font-display">
              Asset-Based Carrier
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-sm font-semibold transition-colors duration-200 py-1 ${
                  isActive ? "text-[#CC0000]" : "text-[#A9AFB9] hover:text-[#F5F6F7]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#CC0000] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 text-xs font-display font-semibold text-[#A9AFB9] hover:text-[#CC0000] transition-colors px-3 py-1.5 rounded-full border border-[#262B34] hover:border-[#CC0000]/40"
          >
            <Phone className="w-3.5 h-3.5 text-[#CC0000]" />
            <span>24/7 Dispatch</span>
          </a>
          <Button href="/get-a-quote" variant="primary" showArrow>
            Request Service
          </Button>
        </div>

        {/* Mobile Nav Toggle & Quick Action */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button href="/get-a-quote" variant="primary" className="!py-2 !px-4 !text-xs !min-h-[38px]">
            Quote
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#191D25] border border-[#262B34] text-[#F5F6F7] hover:text-[#CC0000] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] z-40 bg-[#0A0C10]/98 backdrop-blur-xl border-b border-[#262B34] flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="eyebrow-label mb-2">Navigation</span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 rounded-xl text-lg font-display font-bold transition-all ${
                        isActive
                          ? "bg-[#191D25] text-[#CC0000] border border-[#CC0000]/30"
                          : "text-[#F5F6F7] hover:bg-[#12151B] hover:text-[#CC0000]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#262B34] flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-display text-[#A9AFB9] mb-2 px-1">
                <span>24/7 Operations Dispatch:</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#CC0000] font-bold">
                  {SITE_CONFIG.displayPhone}
                </a>
              </div>
              <Button href="/get-a-quote" variant="primary" showArrow className="w-full justify-center">
                Request Service
              </Button>
              <Button href="/join-our-fleet" variant="secondary" className="w-full justify-center">
                Join Our Fleet
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
