import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, OPERATING_ENTITIES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F7F3] border-t border-[#E6E6E6] text-[#4F4F4F] relative overflow-hidden pt-16 pb-12">
      {/* Subtle background industrial accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CC0000]/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1C2028]">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CC0000] to-[#C85C0A] flex items-center justify-center text-[#0A0C10] font-black text-xl shadow-lg">
                X
              </div>
              <span className="font-display font-extrabold text-lg text-[#111111]">
                THE X GROUP <span className="text-[#CC0000] text-xs uppercase">INC</span>
              </span>
            </Link>
            <p className="text-sm text-[#4F4F4F] leading-relaxed">
              Asset-based trucking for Western Canada&apos;s oilfield, mining, and energy sectors.
              We own what we run.
            </p>
            {/* <div className="flex items-center gap-2 text-xs text-[#6E7580] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#CC0000]" />
              <span>Part of the X Freight Group family of companies</span>
            </div> */}
          </div>

          {/* Nav Column */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#F5F6F7] uppercase tracking-wider mb-4 border-l-2 border-[#CC0000] pl-2.5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#CC0000] transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/join-our-fleet"
                  className="text-[#CC0000] font-semibold hover:underline flex items-center gap-1.5"
                >
                  <span>Join Our Fleet</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Entities Column */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#F5F6F7] uppercase tracking-wider mb-4 border-l-2 border-[#CC0000] pl-2.5">
              Family of Companies
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {OPERATING_ENTITIES.map((entity) => (
                <li key={entity.id}>
                  {entity.isCurrent ? (
                    <span className="text-[#111111] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                      {entity.name} (This Fleet)
                    </span>
                  ) : (
                    <a
                      href={entity.href}
                      target={entity.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="hover:text-[#111111] transition-colors duration-150 flex items-center gap-1 text-[#4F4F4F]"
                    >
                      <span>{entity.name}</span>
                      {entity.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 text-[#6E7580]" />
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#F5F6F7] uppercase tracking-wider mb-4 border-l-2 border-[#CC0000] pl-2.5">
              Operations & Dispatch
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E6E6E6] hover:border-[#CC0000]/50 transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-display font-semibold uppercase text-[#6E7580]">
                    24/7 Dispatch Phone
                  </span>
                  <span className="font-display font-bold text-[#111111] group-hover:text-[#CC0000]">
                    {SITE_CONFIG.displayPhone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-[#4F4F4F] hover:text-[#CC0000] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#CC0000]" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#6B6B6B] pt-1">
                <MapPin className="w-4 h-4 text-[#5E7789]" />
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
          <div>
            © {currentYear} {SITE_CONFIG.legalName}. All rights reserved. Western Canada Asset-Based Operations.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#111111] transition-colors">
              Privacy Policy 
            </Link>
            {/* <Link href="/safety-compliance" className="hover:text-[#111111] transition-colors">
              COR / ISN Status
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
