export const SITE_CONFIG = {
  name: "The X Group Inc.",
  legalName: "The X Group Inc.",
  tagline: "Owned Trucks. Proven Ground.",
  description:
    "Asset-based trucking fleet serving Western Canada's oilfield, mining, and energy sectors with owned equipment, dedicated capacity, and direct dispatch.",
  phone: "(587) 693-1551",
  displayPhone: "(587) 693-1551",
  email: "info@thexgroup.ca",
  address: "#208 17520 108th Ave. NW Edmonton AB T5S 1E8",
  // parentCompany: "X Freight Group",
  url: "https://www.thexgroup.ca",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Permits & Escorts", href: "/regulations" },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const OPERATING_ENTITIES = [
  {
    id: "x-group",
    name: "The X Group Inc.",
    tagline: "Asset-Based Carrier & Fleet Operations",
    description:
      "Our asset-based division, focused on the oilfield, mining, and energy sectors. With our own trucks and a growing owner-operator fleet, we provide dedicated capacity for rig moves, equipment transport, and bulk hauling — while working toward ISN and COR certification to meet the highest safety and compliance standards.",
    isCurrent: true,
    href: "/",
    badge: "Current Division",
  },
  {
    id: "x-freight",
    name: "X Freight Group Inc.",
    tagline: "North American Logistics Brand",
    description:
      "Connecting shippers across North America with specialized transportation divisions and vetting carrier networks.",
    isCurrent: false,
    href: "https://www.xfreight.ca",
    badge: "Parent Brand",
  },
  {
    id: "x-transport",
    name: "X Transport Inc.",
    tagline: "Asset-Based Open-Deck Fleet",
    description:
      "Our asset-based, long-haul division specializing in cross-border and domestic open-deck freight, from standard flatbed shipments to specialized and oversized loads.",
    isCurrent: false,
    href: "https://www.xtransport.ca",
    badge: "Open-Deck Division",
  },
  {
    id: "every-way",
    name: "Every Way Transport Ltd.",
    tagline: "End-Dump & Aggregate Fleet",
    description:
      "Operates our end-dump fleet, providing bulk hauling for infrastructure, aggregate, and construction projects across Western Canada.",
    isCurrent: false,
    href: "#",
    badge: "Aggregate Division",
  },
];

export const SERVICES = [
  {
    id: "flatbed-open-deck",
    title: "Flatbed & Open Deck Transportation",
    shortDesc: "Standard and specialized open deck transport across Canada and North America.",
    fullDesc:
      "Our open deck division provides reliable flatbed, step deck, and multi-axle transportation for general freight, construction materials, machinery, structural steel, and oversized project cargo. We handle step-deck and drop-deck configurations to ensure safe, legal transport.",
    whoItsFor:
      "Construction contractors, steel fabricators, equipment manufacturers, infrastructure development projects",
    icon: "Truck",
  },
  {
    id: "oilfield-mining",
    title: "Oil Field & Mining Rig Transportation",
    shortDesc: "Specialized rig relocations, lease-road hauling, and heavy site transport.",
    fullDesc:
      "Purpose-built for active oilfield, drilling, and mining sites. We move pipe, frac sand, rig components, mats, camp modules, and heavy site hardware directly to remote locations across Western Canada using winch tractors and tri-drive configurations engineered for lease road terrain.",
    whoItsFor:
      "Oil & gas producers, drilling contractors, mining operators, well servicing crews, field logistics coordinators",
    icon: "Fuel",
  },
  {
    id: "aggregate-end-dump",
    title: "Aggregate & End Dump Hauling",
    shortDesc: "High-volume bulk aggregate and material transport for continuous production.",
    fullDesc:
      "Continuous bulk hauling of gravel, sand, ore, stone, and mined aggregate materials. Our end dump fleet operates on high-cycle production schedules to keep site materials flowing without creating bottlenecks on your project.",
    whoItsFor:
      "Quarry operators, pit managers, road infrastructure contractors, civil construction firms, mining operations",
    icon: "Layers",
  },
  {
    id: "heavy-haul-specialized",
    title: "Specialized & Heavy Haul Freight",
    shortDesc: "Over-dimensional, overweight, and complex multi-axle transport.",
    fullDesc:
      "Full-service heavy haul logistics for superloads, heavy machinery, excavators, and oversized industrial components. We coordinate permits, route surveys, bridge formula calculations, and pilot car escorts end-to-end.",
    whoItsFor:
      "Heavy equipment owners, industrial plant builders, mining contractors, engineering and construction firms",
    icon: "Maximize2",
  },
  {
    id: "ice-road-remote",
    title: "Ice Road & Remote Location Logistics",
    shortDesc: "Extreme winter haulage, off-highway corridors, and northern ice road moves.",
    fullDesc:
      "Specialized winter transport engineered for off-highway lease roads, frozen right-of-ways, and northern winter roads into remote mining and exploration camps across Northern Alberta, BC, and the Northwest Territories.",
    whoItsFor:
      "Northern exploration projects, remote mining camps, seasonal drilling operations in isolated corridors",
    icon: "Compass",
  },
];

export const FLEET_CATEGORIES = [
  {
    id: "winch-tractors",
    title: "Winch Tractors",
    desc: "Purpose-built for rig moves and equipment relocations requiring heavy-duty on-site winching capability and off-road traction.",
    icon: "Anchor",
  },
  {
    id: "tri-drive-tractors",
    title: "Tri-Drive Tractors",
    desc: "Extra traction and payload capacity engineered specifically for lease roads, remote northern sites, and off-highway mud conditions.",
    icon: "Cpu",
  },
  {
    id: "lowboy-highboy",
    title: "Highboy / Lowboy Trailers",
    desc: "Configured for oversized and heavy equipment loads, from drilling components and excavators to production hardware.",
    icon: "Maximize2",
  },
  {
    id: "end-dump",
    title: "End Dump Trailers",
    desc: "High-cycle bulk hauling for aggregate, sand, ore, and mined material on continuous site operations.",
    icon: "Layers",
  },
  {
    id: "picker-trucks",
    title: "Picker / Boom Trucks",
    desc: "On-site self-loading and unloading support for equipment and tubular goods that require precise crane placement.",
    icon: "Compass",
  },
  {
    id: "camp-rig-mats",
    title: "Camp & Rig Mat Trailers",
    desc: "Specialized transport for rig mats, modular site camps, and oversized infrastructure modules across remote access corridors.",
    icon: "Grid",
  },
];

export const CERTIFICATIONS = [
  { name: "ACE / ACI Bonded Carrier", status: "Cross-Border Ready", badge: "ACE" },
  { name: "ACI", status: "Cross-Border Ready", badge: "ACI" },
  { name: "SmartWay Transport Partner", status: "Environmental Carrier", badge: "SmartWay" },
  { name: "US-Canada Bonded", status: "Bonded Carrier", badge: "US-Canada Bonded" },
];

export const PERMIT_TOPICS = [
  {
    id: "pilot-cars",
    title: "Pilot Cars / Escort Vehicles",
    summary:
      "Requirements vary by load dimension; some jurisdictions mandate certified escorts with specific lighting/signage; route surveys may be required.",
  },
  {
    id: "axle-weights",
    title: "Axle Weight Regulations",
    summary:
      "Legal and permitted weights depend on axle spacing, tire rating, and season; bridge-formula rules protect infrastructure during heavy moves.",
  },
  {
    id: "trip-irp",
    title: "Trip & IRP Permits",
    summary:
      "IRP apportioned plates and temporary trip permits cover cross-jurisdiction travel for out-of-province equipment.",
  },
  {
    id: "fuel-ifta",
    title: "Fuel / IFTA Permits",
    summary:
      "IFTA credentials and temporary fuel permits are required prior to crossing provincial and state boundaries.",
  },
  {
    id: "fines",
    title: "Oversize / Overweight Fines",
    summary:
      "Penalties scale with excess weight and dimension; operating without a permit carries steep fines and shutdown orders.",
  },
  {
    id: "running-hours",
    title: "Running Hours & Holiday Restrictions",
    summary:
      "Daylight-only travel, holiday embargoes, and rush-hour bans apply to many super-load and oversize moves.",
  },
  {
    id: "flags-lights",
    title: "Flags, Lights & Banners",
    summary:
      "Flag placement, strobe light specifications, and 'OVERSIZE LOAD' banner requirements vary by jurisdiction and time of travel.",
  },
  {
    id: "tire-regulations",
    title: "Tire Regulations & Chains",
    summary:
      "Tread depth, ply rating, and mandatory winter chain laws directly impact legal gross weight and remote pass operation.",
  },
  {
    id: "frost-laws",
    title: "Frost Laws & Spring Thaw",
    summary:
      "Seasonal weight restrictions protect secondary highways during spring thaw; restriction dates vary dynamically by year.",
  },
  {
    id: "annual-permits",
    title: "Annual & Single-Trip Permits",
    summary:
      "Term permits cover recurring legal envelope configurations; single-trip permits remain mandatory for super-dimensional loads.",
  },
  {
    id: "road-conditions",
    title: "Road & Bridge Conditions",
    summary:
      "Live 511/DOT data and bridge height clearance checks route heavy-haul loads around construction, weight bans, and low overpasses.",
  },
  {
    id: "rig-mats-modular",
    title: "Rig Mats, Modular & Structures",
    summary:
      "Width, height, overhead clearance, and escort requirements specific to modular camps and oilfield rig-support structures.",
  },
];
