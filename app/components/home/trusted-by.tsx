// src/components/sections/trusted-by.tsx
"use client";

import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const trustedCompanies = [
  { name: "گروه تولیدی پوشاک زنانه پاپیون", logo: "/images/papilon.svg" },
  { name: "گروه تولیدی دکور آس", logo: "/images/ace.jpg" },
  { name: "فروشگاه کفش دابانا", logo: "/images/dabana.svg" },
  { name: "سیستم های خورشیدی سان استارت", logo: "/images/sunStart.svg" },
  { name: "فروشگاه ماری امینی", logo: "/images/maryAmini.svg" },
  { name: "ماشین سازی صنعتی بهمنی", logo: "/images/Bahmani.svg" },
  { name: "بازرگانی فرش حقی", logo: "/images/haghi.jpg" },
];

export function TrustedBy() {
  const plugin = useRef(
    AutoScroll({
      speed: 0.8,
      direction: "forward",
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  // تکرار آیتم‌ها برای حرکت بی‌نهایت
  const duplicatedCompanies = [
    ...trustedCompanies,
    ...trustedCompanies,
    ...trustedCompanies,
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="2xl:container 2xl:mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            کسانی که به ما اعتماد کردند
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            بیش از ۱۰۰+ شرکت و سازمان معتبر، کربن را برای مدیریت هوشمند
            پروژه‌های خود انتخاب کرده‌اند
          </p>
        </div>

        {/* Carousel با حرکت خودکار و بی‌نهایت */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            direction: "rtl",
            containScroll: "keepSnaps",
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-4">
            {duplicatedCompanies.map((company, index) => (
              <CarouselItem
                key={`${company.name}-${index}`}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="flex items-center justify-center h-24 sm:h-28 lg:h-32 rounded-lg border bg-card hover:bg-accent/50 transition-colors p-4 sm:p-6">
                  <img
                    src={company.logo}
                    alt={`لوگوی ${company.name}`}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
