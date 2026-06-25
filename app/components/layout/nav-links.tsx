// src/components/layout/nav-links.tsx
export interface NavLink {
  title: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "مرکز آموزش",
    href: "/learning",
  },
  {
    title: "ماژول ها",
    href: "/modules",
  },
  {
    title: "پلن ها",
    href: "/plans",
  },
];
