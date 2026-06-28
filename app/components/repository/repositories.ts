// src/data/repositories.ts
import { Repository, RepositoryCategory } from "@/types/repository";

export const repositories: Repository[] = [
  {
    id: "carbon-panel",
    title: "Carbon Panel",
    description: "پنل مدیریت جامع Next.js با RTL و shadcn/ui",
    type: "frontend",
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "shadcn/ui"],
    stars: 243,
    githubUrl: "https://github.com/org/carbon-panel",
    demoUrl: "https://carbon.example.com",
    thumbnail: "/images/projects/carbon-panel.png",
    featured: true,
  },
  {
    id: "auth-service",
    title: "Auth Microservice",
    description: "سرویس احراز هویت با JWT و Redis",
    type: "backend",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
    stars: 87,
    githubUrl: "https://github.com/org/auth-service",
    featured: false,
  },
  // ...
];

export const repositoryCategories: RepositoryCategory[] = [
  {
    type: "frontend",
    label: "فرانت‌اند",
    icon: "Monitor", // از lucide-react
    repositories: repositories.filter((r) => r.type === "frontend"),
  },
  {
    type: "backend",
    label: "بک‌اند",
    icon: "Server",
    repositories: repositories.filter((r) => r.type === "backend"),
  },
  {
    type: "mobile",
    label: "موبایل",
    icon: "Smartphone",
    repositories: repositories.filter((r) => r.type === "mobile"),
  },
  {
    type: "devops",
    label: "دواپس",
    icon: "GitBranch",
    repositories: repositories.filter((r) => r.type === "devops"),
  },
  {
    type: "ai-ml",
    label: "هوش مصنوعی",
    icon: "Brain",
    repositories: repositories.filter((r) => r.type === "ai-ml"),
  },
];
