import type {
  NavLink,
  SkillGroup,
  Project,
  Service,
  ExperienceItem,
  Testimonial,
  StatItem,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: StatItem[] = [
  { value: "8+", label: "Live websites shipped" },
  { value: "20+", label: "Brands automated & marketed" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Build",
    items: ["Web Development", "Shopify", "WordPress", "Landing Pages", "n8n Automation"],
  },
  {
    category: "Market",
    items: ["Meta Ads", "Organic Social Growth", "Content Strategy", "WhatsApp Automation"],
  },
  {
    category: "Create",
    items: ["Canva Design", "AI UGC Ads", "Brand Identity", "Social Content"],
  },
  {
    category: "Operate",
    items: ["Client Systems", "Workflow Automation", "Funnel Design", "Reporting"],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — Present",
    role: "Freelance Web Developer & Growth Partner",
    org: "Self-employed",
    description:
      "Design and build full websites for independent brands and small businesses, then take over the automation and marketing that keeps them running — n8n workflows, Meta Ads, and content systems.",
  },
  {
    id: "exp-2",
    period: "2022 — 2023",
    role: "Digital Marketing Executor",
    org: "Client projects",
    description:
      "Ran paid Meta Ads campaigns and organic social growth for retail and service businesses, pairing every campaign with Canva-built creative and performance reporting.",
  },
  {
    id: "exp-3",
    period: "2021 — 2022",
    role: "Self-taught Foundations",
    org: "Independent study",
    description:
      "Learned front-end development, automation tooling, and paid media from the ground up by shipping real projects for early clients.",
  },
];

export const projects: Project[] = [
  {
    id: "quinxor",
    title: "Quinxor",
    url: "quinxor.com",
    tag: "E-commerce",
    description:
      "Full storefront build with a streamlined checkout flow and product pages designed to convert.",
    accent: "bg-[#ffe3d6]",
  },
  {
    id: "sparkcommerce",
    title: "SparkCommerce",
    url: "sparkcommerce.com",
    tag: "E-commerce",
    description:
      "Performance-focused commerce site built for fast load times and mobile-first browsing.",
    accent: "bg-[#dfe8ff]",
  },
  {
    id: "waisee",
    title: "Waisee Design",
    url: "Waisee Design",
    tag: "Brand site",
    description:
      "A design studio site built around a clean grid and confident typography to showcase portfolio work.",
    accent: "bg-[#e5e0ff]",
  },
  {
    id: "demastery",
    title: "DeMastery",
    url: "DeMastery",
    tag: "Education",
    description:
      "Course and resource platform with a clear content hierarchy built for skimmability.",
    accent: "bg-[#dff5e3]",
  },
  {
    id: "pingslash",
    title: "pingSlash",
    url: "pingSlash",
    tag: "SaaS",
    description:
      "Product marketing site with feature breakdowns and a conversion-led pricing layout.",
    accent: "bg-[#fff3c4]",
  },
  {
    id: "newswava",
    title: "NewsWava",
    url: "NewsWava",
    tag: "Media",
    description:
      "Content-heavy publishing layout built to stay fast and readable at scale.",
    accent: "bg-[#ffd9e8]",
  },
  {
    id: "aspharma",
    title: "AsPharma",
    url: "AsPharma.pk",
    tag: "Healthcare",
    description:
      "Pharmacy brand site with a trust-first layout, clear product catalog, and contact funnel.",
    accent: "bg-[#d8f3ee]",
  },
  {
    id: "echoclothings",
    title: "EchoClothings",
    url: "EchoClothings.com",
    tag: "E-commerce",
    description:
      "Apparel storefront with a lookbook-style homepage and a lean, mobile-first cart flow.",
    accent: "bg-[#f3e3d3]",
  },
];

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Custom-built websites and storefronts — from first wireframe to a live, fast, mobile-ready site.",
  },
  {
    id: "automation",
    title: "WhatsApp & n8n Automation",
    description:
      "Automated WhatsApp flows and backend workflows in n8n that handle leads, orders, and follow-ups without manual work.",
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    description:
      "Campaign setup, targeting, and ongoing optimization across Facebook and Instagram ads.",
  },
  {
    id: "social-growth",
    title: "Organic Social Growth",
    description:
      "Content planning and posting systems that grow an audience without relying on paid spend.",
  },
  {
    id: "design",
    title: "Canva Design",
    description:
      "Social posts, ad creative, and brand assets designed quickly and consistently in Canva.",
  },
  {
    id: "ugc-ads",
    title: "AI UGC Ads",
    description:
      "AI-generated, UGC-style ad creative built to feel native to the feed and perform like real testimonials.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Asadullah rebuilt our store and set up the WhatsApp automation in the same week. Orders stopped getting missed overnight.",
    name: "Client Name",
    role: "Founder, E-commerce brand",
  },
  {
    id: "t2",
    quote:
      "He doesn't just hand off a website — he stays on as the person running the ads and the content. That handoff usually breaks; with him it didn't.",
    name: "Client Name",
    role: "Operations Lead",
  },
  {
    id: "t3",
    quote:
      "The UGC-style ads he generated outperformed the creative our previous agency shot on camera.",
    name: "Client Name",
    role: "Marketing Manager",
  },
];
