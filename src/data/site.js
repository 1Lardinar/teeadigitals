// Single place to configure contact details. Values come from the reference file:
// the original had placeholders for email and WhatsApp, so they are left blank here.
// Fill them in and every CTA, form and footer link updates automatically.
export const SITE = {
  name: "TEEA Digitals",
  tagline: "Digital footprint strategy for ambitious brands",
  email: "support@teeawebs.com", // e.g. "hello@yourdomain.com"
  whatsapp: "", // international format, digits only, e.g. "2348012345678"
  handle: "@teeadigitals",
  location: "Port Harcourt, Nigeria",
  academyUrl: "https://eduhub.teeawebs.com",
  founder: "Esther Eninine Adu",
  year: 2026,
};

export const NAV = [
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "All services", to: "/services" },
      { label: "Industries we serve", to: "/industries" },
      { label: "Why brands choose us", to: "/why-us" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our story", to: "/about" },
      { label: "Vision and values", to: "/vision" },
      { label: "Updates and recent work", to: "/updates" },
    ],
  },
  { label: "Insights", to: "/insights" },
  { label: "TEEAcademy", to: "/academy", accent: true },
];

export const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { label: "Our story", to: "/about" },
      { label: "Vision and values", to: "/vision" },
      { label: "Why us", to: "/why-us" },
      { label: "Updates", to: "/updates" },
      { label: "Insights", to: "/insights" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Footprint strategy", to: "/services/footprint-strategy" },
      { label: "Brand presence", to: "/services/brand-presence" },
      { label: "Website and search", to: "/services/website-and-search" },
      { label: "Content and authority", to: "/services/content-and-authority" },
      { label: "All services", to: "/services" },
    ],
  },
];
