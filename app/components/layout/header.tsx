"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
        {/* ساختار Grid واکنش‌گرا: ۳ ستون در موبایل، ستون‌های اتوماتیک در دسکتاپ */}
        <div className="grid grid-cols-3 lg:grid-cols-[auto_1fr_auto] items-center h-16 sm:h-20 gap-4">
          {/* سمت راست (موبایل): منو - سمت چپ (دسکتاپ): لوگو */}
          <div className="flex items-center justify-start lg:hidden">
            <MobileNav />
          </div>

          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 hover:opacity-80 transition-opacity col-span-1"
            aria-label="رفتن به صفحه اصلی"
          >
            <img
              src="/images/logoBlack.svg"
              alt="لوگوی کربن"
              className="h-8 w-8 sm:h-10 sm:w-10 dark:hidden"
            />
            <img
              src="/images/logoWhite.svg"
              alt="لوگوی کربن"
              className="h-8 w-8 sm:h-10 sm:w-10 hidden dark:block"
            />
            <div className="hidden lg:flex flex-col">
              <h2 className="text-xl font-bold text-foreground">کربن</h2>
              <h3 className="text-xs text-muted-foreground">
                پنل مدیریت هوشمند
              </h3>
            </div>
          </Link>

          {/* Desktop Navigation (فقط در دسکتاپ نمایش داده می‌شود) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  "hover:text-primary hover:bg-accent/50",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* سمت چپ (موبایل): دکمه شروع - سمت راست (دسکتاپ): دکمه‌های ورود و شروع */}
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="default"
              size="sm"
              asChild
              className="text-xs sm:text-sm"
            >
              <Link href="/register">شروع کنید</Link>
            </Button>

            {/* دکمه ورود در موبایل مخفی است */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="text-sm">
                <Link href="/login">ورود</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
