// src/components/layout/nav-links.tsx
export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

export const navLinks: NavLink[] = [
  {
    title: "خانه",
    href: "/",
    description: "صفحه اصلی",
  },
  {
    title: "درباره ما",
    href: "/about",
    description: "آشنایی با ما",
  },
  {
    title: "خدمات",
    href: "/services",
    description: "خدمات ما",
  },
  {
    title: "بلاگ",
    href: "/blog",
    description: "مقالات و اخبار",
  },
  {
    title: "تماس",
    href: "/contact",
    description: "ارتباط با ما",
  },
];
