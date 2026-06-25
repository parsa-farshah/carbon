"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { LogIn, ChevronDown } from "lucide-react";

const services = [
  {
    title: "طراحی پورتال های هوشمند مدیریتی",
    href: "/services/smart-portals",
  },
  {
    title: "طراحی نرم افزارهای تحت وب",
    href: "/services/web-apps",
  },
  {
    title: "طراحی رابط کاربری",
    href: "/services/ui-design",
  },
  {
    title: "طراحی نرم افزار موبایل تحت وب",
    href: "/services/mobile-web",
  },
];

const navLinks = [
  { href: "/learning-center", label: "مرکز آموزش" },
  { href: "/modules", label: "ماژول ها" },
  { href: "/pricing", label: "پلن ها" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
        isScrolled && "shadow-md border-b",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 lg:grid-cols-[auto_1fr_auto] items-center h-16 sm:h-20 gap-4">
          {/* Mobile Menu */}
          <div className="flex items-center justify-start lg:hidden">
            <MobileNav services={services} />
          </div>

          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    pathname.startsWith("/services")
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  خدمات
                  <ChevronDown className="mr-1 h-4 w-4 group-hover:!rotate-180 duration-300" />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full  ">
                    <div className="w-[280px] rounded-md border bg-popover p-2 shadow-lg mt-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="text-sm">
                <Link href="/login" className="flex items-center">
                  ورود
                  <LogIn className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button
              variant="default"
              size="sm"
              asChild
              className="text-xs sm:text-sm"
            >
              <Link href="/register">شروع کنید</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
