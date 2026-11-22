export type ProjectKey = "momenta" | "truestars" | "lymediary" | "besta" | "hellodear";

export type ProjectGalleryImage = {
  src: string;
  altKey: string;
};

export type ProjectConfig = {
  key: ProjectKey;
  number: "01" | "02" | "03" | "04" | "05";
  accent: "lime" | "coral" | "paper" | "ink";
  image?: string;
  technologies: readonly string[];
  stack: readonly string[];
  url?: string;
  gallery: readonly ProjectGalleryImage[];
};

export const homeProjects: readonly ProjectConfig[] = [
  {
    key: "momenta",
    number: "01",
    accent: "lime",
    image: "/projects/momenta/landing.jpg",
    technologies: ["React", "Redux Toolkit", "Next.js", "Tailwind CSS"],
    stack: ["React 19", "Vite", "Redux Toolkit", "React Router", "Tailwind CSS", "Styled Components", "Axios", "i18next", "PostHog", "Next.js 15"],
    gallery: [
      { src: "/projects/momenta/landing.jpg", altKey: "galleryLanding" },
      { src: "/projects/momenta/login.png", altKey: "galleryLogin" },
      { src: "/projects/momenta/style_choise.jpg", altKey: "galleryStyle" },
    ],
  },
  {
    key: "truestars",
    number: "02",
    accent: "coral",
    image: "/projects/truestars/dashboard.png",
    technologies: ["React", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    stack: ["React 19", "Vite", "Redux Toolkit", "React Router", "Tailwind CSS", "Styled Components", "Axios", "Recharts", "Stripe", "i18next"],
    url: "https://truestars.ai/",
    gallery: [
      { src: "/projects/truestars/dashboard.png", altKey: "galleryDashboard" },
      { src: "/projects/truestars/profile_settings.png", altKey: "gallerySettings" },
    ],
  },
  {
    key: "lymediary",
    number: "03",
    accent: "paper",
    image: "/projects/lymediary/landing.png",
    technologies: ["Expo", "React Native", "Zustand", "Next.js"],
    stack: ["Go", "Gin", "MongoDB", "Redis", "Stripe", "OpenAI", "React 19", "Vite", "Zustand", "TanStack Query", "Tailwind CSS", "Next.js", "Expo", "React Native"],
    gallery: [
      { src: "/projects/lymediary/landing.png", altKey: "galleryLanding" },
      { src: "/projects/lymediary/diary.png", altKey: "galleryDiary" },
    ],
  },
  {
    key: "besta",
    number: "04",
    accent: "ink",
    image: "/projects/besta/landing.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    stack: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Radix UI", "next-intl", "Framer Motion", "Zod"],
    gallery: [
      { src: "/projects/besta/landing.png", altKey: "galleryLanding" },
    ],
  },
  {
    key: "hellodear",
    number: "05",
    accent: "lime",
    image: "/projects/hellodear/landing.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    stack: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Radix UI", "next-intl", "Framer Motion", "React Hook Form", "Zod"],
    url: "https://hellodear.ai/",
    gallery: [
      { src: "/projects/hellodear/landing.png", altKey: "galleryLanding" },
    ],
  },
] as const;

export function getProjectByKey(key: string): ProjectConfig | undefined {
  return homeProjects.find((project) => project.key === key);
}
