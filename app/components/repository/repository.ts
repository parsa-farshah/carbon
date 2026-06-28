// src/types/repository.ts
export type RepositoryType =
  | "frontend"
  | "backend"
  | "mobile"
  | "devops"
  | "ai-ml";

export interface Repository {
  id: string;
  title: string;
  description: string;
  type: RepositoryType;
  techStack: string[];
  stars?: number;
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  featured?: boolean;
}

export interface RepositoryCategory {
  type: RepositoryType;
  label: string;
  icon: string; // یا React.ComponentType
  repositories: Repository[];
}
