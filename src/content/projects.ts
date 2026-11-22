export type ProjectKey = "momenta" | "truestars" | "lymediary" | "besta" | "hellodear";

export type ProjectConfig = {
  key: ProjectKey;
  number: "01" | "02" | "03" | "04" | "05";
  accent: "lime" | "coral" | "paper" | "ink";
  image?: string;
  technologies: readonly string[];
  url?: string;
};

export const homeProjects: readonly ProjectConfig[] = [
  {
    key: "momenta",
    number: "01",
    accent: "lime",
    image: "/projects/momenta/landing.jpg",
    technologies: ["React", "Redux Toolkit", "Next.js", "Tailwind CSS"],
  },
  {
    key: "truestars",
    number: "02",
    accent: "coral",
    image: "/projects/truestars/dashboard.png",
    technologies: ["React", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    url: "https://truestars.ai/",
  },
  {
    key: "lymediary",
    number: "03",
    accent: "paper",
    image: "/projects/lymediary/landing.png",
    technologies: ["Expo", "React Native", "Zustand", "Next.js"],
  },
  {
    key: "besta",
    number: "04",
    accent: "ink",
    image: "/projects/besta/landing.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    key: "hellodear",
    number: "05",
    accent: "lime",
    image: "/projects/hellodear/landing.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://hellodear.ai/",
  },
] as const;
