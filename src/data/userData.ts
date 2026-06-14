import {
  Github,
  Linkedin,
  Link2Icon,
} from "lucide-react";

export const personalInfo = {
  name: "Freddy Machado",
  alias: "Fred",
  shortAlias: "FM",
  location: "Caracas, Venezuela",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Human in the Loop",
    "Tech Explorer",
    "Mobile Dev",
    "Linux Enthusiast",
  ],
  college: "Simón Bolívar University",
  collegeUrl: "http://www.usb.ve/",
  avatarUrl: "/assets/yo.jpg",
  status: "Available for work",
  aboutText: "Full-stack engineer specializing in scalable systems and AI-driven solutions. Crafting high-performance digital products with precision and purpose.",
  aboutText1: "I’m Freddy Machado, based in Caracas, Venezuela. I studied Electronics Engineering from ",
  aboutText2: ". I design and build full-stack applications, with an increasing focus on Artificial Intelligence. My work focuses on building scalable systems, solving complex problems clearly, and delivering practical, real-world solutions.",
};


export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", invertDark: true },
      { name: "Shadcn-UI", icon: "https://cdn.simpleicons.org/shadcnui", invertDark: true },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Wordpress", icon: "https://cdn.simpleicons.org/wordpress" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express", invertDark: true },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "Nest.js", icon: "https://cdn.simpleicons.org/nestjs" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma", invertDark: true },
      { name: "Redux/Zustand", icon: "https://cdn.simpleicons.org/redux" },
    ],
  },
];

export const facts = [
  "Learner",
  "Human in the Loop",
  "Passion for tech",
  "Linux Enthusiast",
  "Full Stack Developer",
  "Student",
];

export const timeline = [
  {
    year: "2026",
    detail:
      "Focused on mastering advanced tools for Agents Orchestration and preparing for new professional opportunities.",
    more:
      "Actively building production-level projects and seeking roles in full-stack development and AI-driven systems.",
  },
  {
    year: "2025",
    detail:
      "Began exploring Artificial Intelligence and its practical applications.",
    more:
      "Studied AI models, experimented with integrations, and built projects to enhance automation and intelligent features.",
  },
  {
    year: "2024",
    detail:
      "Explored web3 development by building crypto-payments infrastructure at Empoorio.",
    more:
      "Worked with frontend and backend technologies (Flutter for mobile and PHP for web applications), using AWS services for deployment.",
  },
  {
    year: "2023",
    detail:
      "Advanced into modern web development by building full-stack projects at Veconinter.",
    more:
      "Worked with frontend and backend technologies, integrating APIs and developing scalable applications.",
  },
  {
    year: "2022",
    detail:
      "Learned enterprise workflows providing support to Legacy applications at KPMG.",
    more:
      "Modernized .NET infrastructure by migrating to ASP.NET Core, architected new Blazor applications with SQL Server, and managed end-to-end deployments on IIS.",
  },
  {
    year: "2020",
    detail:
      "Began shipping mobile developments using Android Studio.",
    more:
      "Applied core programming concepts, scripting, and deployed firsts real-world applications at PlayStore.",
  },
  {
    year: "2017",
    detail:
      "Started exploring electronics through hands-on DIY projects, focusing on transistor-based circuits and core components.",
    more:
      "Built a strong foundation by understanding how circuits behave at a fundamental level and experimenting with practical implementations.",
  },
];

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/freddymachado",
    href: "https://github.com/freddymachado",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/freddymach",
    href: "https://www.linkedin.com/in/freddymach",
    color: "text-blue-600",
  },
];

export const projectData = [
  {
    name: "Sitio Vegano",
    description: "Blog - SEO optimized vegan recipes.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "Shadcn", "Tauri"],
    live: "https://sitiovegano.com/",
    github: "https://github.com/freddymachado/sitiov2",
    category: "Web",
  },
  {
    name: "Financio",
    description: "Track your expenses with AI powered OCR.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "MongoDB"],
    live: "https://financio-eight.vercel.app/dashboard",
    github: "https://github.com/freddymachado/financio",
    category: "Web",
  },
  {
    name: "RAGMIN",
    description: "Simple Retrieval-Augmented Generation system for any documents.",
    tech: [
      "Python",
      "ChromaDB",
      "HTML",
      "CSS",
      "Ollama",
    ],
    live: "https://financio-eight.vercel.app/dashboard",
    github: "https://github.com/freddymachado/ragmin",
    category: "Web",
  },
  {
    name: "Services Webpage",
    description:
      "Blog. Built with React & Tailwind.",
    tech: ["React", "TailwindCSS"],
    live: "https://service-webpage.vercel.app/",
    github: "https://github.com/freddymachado/service-webpage",
    category: "Web",
  }
];

export const resume = {
  "full-stack-developer": "https://rxresu.me/freddyantoniomachado/forward-deployed-dev",
};
