"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./../theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/about", label: "درباره ما" },
    { href: "/services", label: "خدمات" },
    { href: "/blog", label: "بلاگ" },
    { href: "/contact", label: "تماس" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
        isScrolled && "shadow-md border-b",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Logo - Right Side (RTL) */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base sm:text-lg">
                م
              </span>
            </div>
            <span className="font-bold text-base sm:text-lg lg:text-xl">
              پروژه مهندس
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-colors rounded-md",
                  "hover:text-primary hover:bg-accent/50",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 right-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle - Always Visible */}
            <ThemeToggle />

            {/* Auth Buttons - Hidden on Mobile */}
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="text-sm">
                <Link href="/login">ورود</Link>
              </Button>
              <Button variant="default" size="sm" asChild className="text-sm">
                <Link href="/register">ثبت نام</Link>
              </Button>
            </div>

            {/* Mobile Menu - Only on Mobile/Tablet */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
