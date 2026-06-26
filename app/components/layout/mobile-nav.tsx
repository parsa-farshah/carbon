"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/app/components/theme-toggle";

interface Service {
  title: string;
  href: string;
}

// interface NavLink {
//   title: string;
//   href: string;
// }

interface MobileNavProps {
  services: Service[];
  // navLinks?: NavLink[];
}

export function MobileNav({ services }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // حداقل فاصله برای swipe (پیکسل)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // اگه از چپ به راست swipe کرد، منو بسته بشه
    if (isRightSwipe && !showServices) {
      setOpen(false);
    }

    // اگه در زیرمنوی خدمات هست و از چپ به راست swipe کرد، برگرده به منوی اصلی
    if (isRightSwipe && showServices) {
      setShowServices(false);
    }
  };

  useEffect(() => {
    if (!open) {
      setShowServices(false);
    }
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="!w-full h-screen p-0 bg-background text-foreground border-none flex flex-col [&>button]:hidden "
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Container */}
        <div className="relative flex-1 overflow-hidden z-60">
          {/* منوی اصلی */}
          <div
            className={`absolute inset-0 flex flex-col transition-transform duration-300 ease-out ${
              showServices ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold">منو</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/learning-center"
                    className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    مرکز آموزش
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setShowServices(true)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <span>خدمات</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </li>
                <li>
                  <Link
                    href="/modules"
                    className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    ماژول ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plans"
                    className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    پلن ها
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* زیرمنوی خدمات */}
          <div
            className={`absolute inset-0 flex flex-col bg-background transition-transform duration-300 ease-out ${
              showServices ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-2 p-4 border-b border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowServices(false)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <h2 className="text-lg font-semibold">خدمات</h2>
            </div>

            {/* Services List */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      onClick={() => {
                        setShowServices(false);
                        setOpen(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 space-y-3">
          <div className="flex flex-col gap-2">
            <Link href="/login" className="flex-1">
              <Button variant="outline" className="w-full  py-5">
                ورود به حساب
              </Button>
            </Link>
            <Link href="/signup" className="flex-1">
              <Button className="w-full py-5">ثبت نام</Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">تم</span>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
