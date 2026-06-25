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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

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

      <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
        <SheetHeader className="p-6 pb-4 border-b">
          <SheetTitle className="text-right text-lg font-bold">
            منوی اصلی
          </SheetTitle>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex flex-col gap-1 rounded-lg p-4 transition-colors",
                "hover:bg-accent",
                pathname === link.href
                  ? "bg-accent text-primary font-medium"
                  : "text-foreground",
              )}
            >
              <span className="text-base font-medium">{link.label}</span>
              <span className="text-xs text-muted-foreground">
                {link.description}
              </span>
            </Link>
          ))}
        </nav>

        <Separator className="my-2" />

        {/* Auth Buttons */}
        <div className="p-4 space-y-3">
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
      </SheetContent>
    </Sheet>
  );
}
