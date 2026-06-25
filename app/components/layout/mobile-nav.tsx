"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

interface Service {
  title: string;
  href: string;
}

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  services: Service[];
  navLinks: NavLink[];
}

export function MobileNav({ services, navLinks }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">باز کردن منو</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="!w-full h-screen p-0 bg-background text-foreground border-none flex flex-col [&>button]:hidden"
      >
        <div className="relative h-full overflow-hidden">
          {/* Main Menu */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col transition-transform duration-300 ease-out",
              showServices ? "-translate-x-full" : "translate-x-0",
            )}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold">منو</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-base transition-colors",
                      pathname === link.href
                        ? "text-primary font-medium bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )}
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}

                <button
                  onClick={() => setShowServices(true)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-base transition-colors text-right",
                    pathname.startsWith("/services")
                      ? "text-primary font-medium bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                  )}
                >
                  <span>خدمات</span>
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-6">
                {/* ردیف تغییر تم */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">تغییر وضعیت تم</span>
                  <ThemeToggle />
                </div>

                {/* دکمه‌های ورود و ثبت‌نام */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-center text-sm h-11"
                    asChild
                  >
                    <Link href="/login" onClick={() => setOpen(false)}>
                      ورود به حساب
                    </Link>
                  </Button>
                  <Button
                    variant="default"
                    className="w-full justify-center text-sm h-11"
                    asChild
                  >
                    <Link href="/register" onClick={() => setOpen(false)}>
                      ثبت نام
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>

          {/* Services Submenu */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col transition-transform duration-300 ease-out",
              showServices ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="flex items-center gap-3 p-6 border-b border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowServices(false)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <h2 className="text-lg font-semibold">خدمات</h2>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-1">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => {
                      setOpen(false);
                      setShowServices(false);
                    }}
                    className="flex flex-col gap-1 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-base font-medium text-foreground">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
