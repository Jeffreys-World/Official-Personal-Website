export const hero = {
  headline: "I build systems that remove friction.",
  bio: "I combine software engineering with AI-driven automation to solve real business problems across customer service, supply chain, accounting, HR, and marketing. Using modern AI tools and data, I turn manual workflows into streamlined, scalable systems. Previously worked at the YMCA of Greater New York and the Parks Department of New York City.",
};

export const statement = {
  title: "Innovate With Purpose",
  subtitle: "AI Driven Solutions and Automations",
};

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  detail?: string;
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    role: "AI-Native Fellow",
    org: "Pursuit",
    period: "2025 — Present",
    detail:
      "Building AI-powered products and automations end to end — from problem discovery to shipped software — in an intensive fellowship focused on AI-native engineering.",
    current: true,
  },
  {
    role: "Business Analyst (Volunteer)",
    org: "Living Stones Foundation",
    period: "2024",
    detail: "Data analysis and process improvement for nonprofit operations.",
  },
  {
    role: "Customer Experience Fellow",
    org: "KindWork",
    period: "2024",
    detail: "Trained in modern CX tooling, workflows, and support operations.",
  },
  {
    role: "Aquatics Supervisor & Swim Instructor",
    org: "YMCA of Greater New York",
    period: "2019 — 2023",
    detail: "Led aquatics staff, programming, and safety operations.",
  },
  {
    role: "Lifeguard",
    org: "NYC Parks & Recreation",
    period: "2018",
  },
];

export type Project = {
  title: string;
  year: string;
  tag: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Cyclistic Bike-Share Analysis",
    year: "2024",
    tag: "Data Analysis",
    description:
      "R + tidyverse analysis of 700K+ Divvy trips to convert casual riders into members. Members ride often but short; casual riders ride long, peak on weekends, and favor e-bikes — pointing to a weekend/e-bike membership pitch.",
    href: "https://github.com/Jeffreys-World/cyclistic-bike-share-analysis",
  },
  {
    title: "Bellabeat Wellness Data Analysis",
    year: "2024",
    tag: "Data Analysis",
    description:
      "R analysis of FitBit tracker data across 30 users for marketing and product strategy. Most users are sedentary most of the day — suggesting sedentary-alert features and personalized goals as product opportunities.",
    href: "https://github.com/Jeffreys-World/bellabeat-wellness-analysis",
  },
];

export const contact = {
  email: "jeffreydelacruzbarrera@gmail.com",
  heading: "Let's build something.",
  blurb:
    "Open to software engineering and AI automation opportunities — or just a good conversation about removing friction.",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeffrey-de-la-cruz/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/Jeffreys-World",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:jeffreydelacruzbarrera@gmail.com",
      icon: "mail",
    },
  ] as const,
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
