"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, FileText, Phone, ExternalLink, Globe, ListFilter, Map as MapIcon, X } from "lucide-react";

interface RegionInfo {
  id: string;
  name: string;
  country: "Canada" | "United States";
  code: string;
  permitOffice: string;
  phone: string;
  notes: string;
  maxLegalWidth: string;
  maxLegalHeight: string;
}

const REGIONS_DATA: RegionInfo[] = [
  // Canada
  {
    id: "ab",
    name: "Alberta",
    country: "Canada",
    code: "AB",
    permitOffice: "Alberta Transportation Permit Office",
    phone: "1-800-662-7138",
    notes: "High-volume oilfield corridor. Special winter weight allowances and heavy-haul rig move permits required on primary provincial highways.",
    maxLegalWidth: "2.6 m (8'6\")",
    maxLegalHeight: "4.15 m (13'7\")",
  },
  {
    id: "bc",
    name: "British Columbia",
    country: "Canada",
    code: "BC",
    permitOffice: "BC Commercial Vehicle Safety & Enforcement (CVSE)",
    phone: "1-800-559-9688",
    notes: "Mountain pass winter chain laws mandatory from Oct 1 to Apr 30. Bridge height clearances and pilot car escorts strictly enforced on Hwy 97.",
    maxLegalWidth: "2.6 m (8'6\")",
    maxLegalHeight: "4.15 m (13'7\")",
  },
  {
    id: "sk",
    name: "Saskatchewan",
    country: "Canada",
    code: "SK",
    permitOffice: "Saskatchewan Ministry of Highways Permit Office",
    phone: "1-866-933-5290",
    notes: "Spring thaw frost road bans apply heavily across secondary highways. Tri-drive tractor configuration allowances available for heavy bulk haul.",
    maxLegalWidth: "2.6 m (8'6\")",
    maxLegalHeight: "4.15 m (13'7\")",
  },
  {
    id: "mb",
    name: "Manitoba",
    country: "Canada",
    code: "MB",
    permitOffice: "Manitoba Infrastructure Permit Services",
    phone: "1-877-812-0009",
    notes: "Cross-border permits for northern routes. IFTA and trip permit verification required at provincial scale facilities.",
    maxLegalWidth: "2.6 m (8'6\")",
    maxLegalHeight: "4.15 m (13'7\")",
  },
  {
    id: "nt",
    name: "Northwest Territories",
    country: "Canada",
    code: "NT",
    permitOffice: "NWT Department of Infrastructure",
    phone: "1-860-767-8900",
    notes: "Ice road corridor regulation. Mandatory escort vehicles and strict speed caps applied during seasonal ice road operations.",
    maxLegalWidth: "2.6 m (8'6\")",
    maxLegalHeight: "4.2 m (13'9\")",
  },
  // USA
  {
    id: "mt",
    name: "Montana",
    country: "United States",
    code: "MT",
    permitOffice: "Montana DOT Motor Carrier Services",
    phone: "1-406-444-7262",
    notes: "Cross-border port of entry inspection at Sweet Grass. Superload engineering review required for gross weights over 150,000 lbs.",
    maxLegalWidth: "8'6\"",
    maxLegalHeight: "14'0\"",
  },
  {
    id: "nd",
    name: "North Dakota",
    country: "United States",
    code: "ND",
    permitOffice: "North Dakota Highway Patrol Permit Section",
    phone: "1-701-328-2621",
    notes: "Bakken shale basin corridors. E-permitting active. Escorts mandated for loads exceeding 14ft in width.",
    maxLegalWidth: "8'6\"",
    maxLegalHeight: "14'0\"",
  },
  {
    id: "wy",
    name: "Wyoming",
    country: "United States",
    code: "WY",
    permitOffice: "Wyoming Highway Patrol Over-Dimensional Services",
    phone: "1-307-777-4376",
    notes: "High wind restrictions on I-80 corridor. Automatic permit shutdown during adverse winter storm advisories.",
    maxLegalWidth: "8'6\"",
    maxLegalHeight: "14'0\"",
  },
];

export function RegionSelector() {
  const [selectedCountry, setSelectedCountry] = useState<"All" | "Canada" | "United States">("All");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [activeRegion, setActiveRegion] = useState<RegionInfo | null>(REGIONS_DATA[0]);

  const filteredRegions = REGIONS_DATA.filter((r) => {
    if (selectedCountry === "All") return true;
    return r.country === selectedCountry;
  });

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#191D25] border border-[#262B34]">
        {/* Country Filter Pills */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-display uppercase tracking-wider text-[#6E7580] mr-2 hidden sm:inline">
            Country:
          </span>
          {(["All", "Canada", "United States"] as const).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full text-xs font-display font-bold transition-all ${
                selectedCountry === country
                  ? "bg-[#CC0000] text-[#0A0C10] shadow-md"
                  : "bg-[#12151B] text-[#A9AFB9] hover:text-[#F5F6F7] border border-[#262B34]"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#12151B] rounded-full border border-[#262B34]">
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
              viewMode === "list"
                ? "bg-[#262B34] text-[#F5F6F7]"
                : "text-[#6E7580] hover:text-[#A9AFB9]"
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>List</span>
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
              viewMode === "map"
                ? "bg-[#262B34] text-[#F5F6F7]"
                : "text-[#6E7580] hover:text-[#A9AFB9]"
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span>Map Grid</span>
          </button>
        </div>
      </div>

      {/* Main Display Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Interactive Region Selector Grid / List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredRegions.map((region) => {
            const isSelected = activeRegion?.id === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-[#CC0000]/10 border-[#CC0000] shadow-lg"
                    : "bg-[#191D25] border-[#262B34] hover:border-[#CC0000]/40 hover:bg-[#1C2028]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-extrabold text-xs ${
                        isSelected
                          ? "bg-[#CC0000] text-[#0A0C10]"
                          : "bg-[#12151B] text-[#CC0000] border border-[#262B34]"
                      }`}
                    >
                      {region.code}
                    </div>
                    <span className="font-display font-bold text-base text-[#F5F6F7]">
                      {region.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-display font-semibold px-2 py-0.5 rounded bg-[#12151B] text-[#6E7580] border border-[#262B34]">
                    {region.country}
                  </span>
                </div>

                <p className="text-xs text-[#A9AFB9] line-clamp-2">
                  {region.notes}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#6E7580] pt-2 border-t border-[#262B34]">
                  <span>Legal Max Width: <strong className="text-[#F5F6F7]">{region.maxLegalWidth}</strong></span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Region Inspection Panel */}
        <div className="lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            {activeRegion ? (
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="p-6 rounded-2xl bg-[#191D25] border border-[#CC0000]/40 shadow-2xl flex flex-col gap-5"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#262B34]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#CC0000] text-[#0A0C10] font-black text-sm flex items-center justify-center">
                      {activeRegion.code}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#F5F6F7]">
                        {activeRegion.name}
                      </h3>
                      <span className="text-xs text-[#A9AFB9] font-medium">
                        {activeRegion.country} Regulatory Jurisdiction
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-display text-[#6E7580]">
                    <FileText className="w-4 h-4 text-[#CC0000]" />
                    <span>Permit Authority:</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F5F6F7]">
                    {activeRegion.permitOffice}
                  </div>

                  <a
                    href={`tel:${activeRegion.phone}`}
                    className="flex items-center gap-2 text-sm text-[#CC0000] font-semibold hover:underline mt-1"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{activeRegion.phone}</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#12151B] border border-[#262B34] flex flex-col gap-2">
                  <span className="text-xs font-display font-bold uppercase text-[#6E7580]">
                    Regional Operational Guidance
                  </span>
                  <p className="text-xs text-[#A9AFB9] leading-relaxed">
                    {activeRegion.notes}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-[#262B34]">
                  <div>
                    <span className="text-[#6E7580] block text-[10px] uppercase font-display">Max Legal Width</span>
                    <span className="font-bold text-[#F5F6F7]">{activeRegion.maxLegalWidth}</span>
                  </div>
                  <div>
                    <span className="text-[#6E7580] block text-[10px] uppercase font-display">Max Legal Height</span>
                    <span className="font-bold text-[#F5F6F7]">{activeRegion.maxLegalHeight}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#6E7580] italic">
                  Note: Regulations vary during seasonal frost laws. Always confirm route clearance with our dispatch.
                </div>
              </motion.div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#191D25] border border-[#262B34] text-center text-[#6E7580]">
                Select a province or state to view regulatory details.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
