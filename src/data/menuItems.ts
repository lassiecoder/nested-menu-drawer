import type { MenuItem } from "@/types/menu";

export const SAMPLE_MENU: MenuItem[] = [
  {
    id: "solutions",
    label: "Software Solutions",
    description: "Custom software development and deployment",
    icon: "solutions",
    children: [
      {
        id: "web",
        label: "Web Development",
        description: "Modern and scalable web applications",
        icon: "web",
        onClick: () => console.log("Web Development"),
      },
      {
        id: "mobile",
        label: "Mobile Apps",
        description: "Native and cross-platform mobile solutions",
        icon: "mobile",
        onClick: () => console.log("Mobile Apps"),
      },
      {
        id: "enterprise",
        label: "Enterprise Software",
        description: "Robust systems for complex business needs",
        icon: "enterprise",
        onClick: () => console.log("Enterprise"),
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure",
    icon: "cloud",
    children: [
      {
        id: "aws",
        label: "AWS Services",
        description: "Amazon Web Services setup and management",
        icon: "aws",
        onClick: () => console.log("AWS"),
      },
      {
        id: "azure",
        label: "Azure Solutions",
        description: "Microsoft Azure cloud platform services",
        icon: "azure",
        onClick: () => console.log("Azure"),
      },
      {
        id: "migration",
        label: "Cloud Migration",
        description: "Seamless transition to cloud infrastructure",
        icon: "migration",
        onClick: () => console.log("Migration"),
      },
    ],
  },
  {
    id: "consulting",
    label: "Consulting Services",
    description: "Expert guidance and strategic support",
    icon: "consulting",
    children: [
      {
        id: "strategy",
        label: "Strategy Consulting",
        description: "Business planning and growth strategies",
        icon: "strategy",
        onClick: () => console.log("Strategy"),
      },
      {
        id: "tech",
        label: "Tech Consulting",
        description: "Technology assessment and recommendations",
        icon: "tech",
        onClick: () => console.log("Tech"),
      },
    ],
  },
  {
    id: "digital",
    label: "Digital Transformation",
    description: "Comprehensive digital transformation strategies",
    icon: "digital",
    onClick: () => console.log("Digital Transformation"),
  },
  {
    id: "security",
    label: "Cybersecurity Consulting",
    description: "Comprehensive cybersecurity services and solutions",
    icon: "security",
    onClick: () => console.log("Cybersecurity"),
  },
  {
    id: "analytics",
    label: "Data & Analytics Consulting",
    description: "Data strategy, analytics, and business intelligence",
    icon: "analytics",
    onClick: () => console.log("Data & Analytics"),
  },
  {
    id: "devops",
    label: "DevOps & Platform Engineering",
    description: "DevOps transformation and platform engineering",
    icon: "devops",
    onClick: () => console.log("DevOps"),
  },
  {
    id: "support",
    label: "Support & Maintenance",
    description: "Ongoing maintenance and support services",
    icon: "support",
    onClick: () => console.log("Support & Maintenance"),
  },
];
