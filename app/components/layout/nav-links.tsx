"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  href: string;
  description: string;
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
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">باز کردن منو</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary py-2",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-0">
              <AccordionTrigger
                className={cn(
                  "text-base font-medium hover:no-underline py-2",
                  pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                خدمات
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pr-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setOpen(false)}
                      className="flex flex-col gap-1 py-2 hover:text-primary transition-colors"
                    >
                      <span className="text-sm font-medium">
                        {service.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login" onClick={() => setOpen(false)}>
                ورود
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register" onClick={() => setOpen(false)}>
                شروع کنید
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
