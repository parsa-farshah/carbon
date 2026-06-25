"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./../theme-toggle";

const navLinks = [
  { href: "/", label: "خانه", description: "صفحه اصلی" },
  { href: "/about", label: "درباره ما", description: "آشنایی با تیم" },
  { href: "/services", label: "خدمات", description: "خدمات ما" },
  { href: "/blog", label: "بلاگ", description: "مقالات و اخبار" },
  { href: "/contact", label: "تماس", description: "ارتباط با ما" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">منوی موبایل</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="!w-full h-screen p-0 bg-black text-white border-none flex flex-col [&>button]:hidden"
      >
        {/* هدر */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <SheetTitle className="text-right text-lg font-bold text-white">
            منوی اصلی
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="h-8 w-8 rounded-full text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Links - بخش اسکرول‌خور */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex flex-col gap-1 rounded-lg p-4 transition-colors",
                "hover:bg-white/10", // استایل هاور تیره
                pathname === link.href
                  ? "bg-white/10 text-primary font-medium"
                  : "text-gray-200",
              )}
            >
              <span className="text-base font-medium">{link.label}</span>
              <span className="text-xs text-gray-500">{link.description}</span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 space-y-6">
          {/* ردیف تغییر تم */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white">
              تغییر وضعیت تم
            </span>
            <ThemeToggle />
          </div>

          {/* دکمه‌های ورود و ثبت‌نام */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-center text-sm h-11 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/login" onClick={() => setOpen(false)}>
                ورود به حساب
              </Link>
            </Button>
            <Button
              variant="default"
              className="w-full justify-center text-sm h-11 bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/register" onClick={() => setOpen(false)}>
                ثبت نام
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
