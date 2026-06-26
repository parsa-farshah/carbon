// src/components/sections/trusted-by.tsx
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const trustedCompanies = [
  { name: "دیجی‌کالا", logo: "/images/shetaban.png" },
  { name: "اسنپ", logo: "/images/shetaban.png" },
  { name: "تپسی", logo: "/images/shetaban.png" },
  { name: "بامیلو", logo: "/images/shetaban.png" },
  { name: "کافه بازار", logo: "/images/shetaban.png" },
  { name: "دیوار", logo: "/images/shetaban.png" },
  { name: "علی بابا", logo: "/images/shetaban.png" },
  { name: "ایران‌سل", logo: "/images/shetaban.png" },
  { name: "همراه اول", logo: "/images/shetaban.png" },
  { name: "بانک ملت", logo: "/images/shetaban.png" },
];

export function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            کسانی که به ما اعتماد کردند
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            بیش از ۱۰۰+ شرکت و سازمان معتبر، کربن را برای مدیریت هوشمند
            پروژه‌های خود انتخاب کرده‌اند
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {trustedCompanies.map((company, index) => (
              <CarouselItem
                key={index}
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

        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              ۱۰۰+
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              شرکت معتبر
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              ۵۰۰+
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              پروژه موفق
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              ۹۸٪
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              رضایت مشتریان
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              ۲۴/۷
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              پشتیبانی
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
