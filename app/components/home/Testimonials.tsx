"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "علی رضایی",
    title: "مدیرعامل",
    company: "شرکت فناوری پارس",
    companyLogo: "/images/shetaban.png",
    avatar: "/images/user.jfif",
    quote:
      "از زمانی که کربن رو به تیممون معرفی کردیم، بهره‌وری پروژه‌ها به طرز چشمگیری بالا رفته. مدیریت وظایف دیگه هیچ‌وقت اینقدر ساده نبوده.",
    rating: 5,
  },
  {
    name: "سارا محمدی",
    title: "مدیر محصول",
    company: "استارتاپ نوین",
    companyLogo: "/images/shetaban.png",
    avatar: "/images/user.jfif",
    quote:
      "رابط کاربری شیک و سرعت بالا دو چیزی بود که دنبالش بودیم. کربن هر دو رو داشت و تیم ما عاشقش شد.",
    rating: 4,
  },
  {
    name: "محمد کریمی",
    title: "CTO",
    company: "گروه دیجیتال آریا",
    companyLogo: "/images/shetaban.png",
    avatar: "/images/user.jfif",
    quote:
      "پیاده‌سازی کربن تو سازمانمون کمتر از یه هفته طول کشید. تیم فنی عالی و پشتیبانی بی‌نظیر.",
    rating: 5,
  },
  {
    name: "نیلوفر احمدی",
    title: "مدیر عملیات",
    company: "توسعه پایدار ایران",
    companyLogo: "/images/shetaban.png",
    avatar: "/images/user.jfif",
    quote:
      "گزارش‌گیری لحظه‌ای و داشبورد جامع کربن بهم کمک کرد همیشه یه قدم جلوتر از مشکلات باشم.",
    rating: 5,
  },
  {
    name: "رضا نوری",
    title: "بنیان‌گذار",
    company: "ایده‌پردازان شرق",
    companyLogo: "/images/shetaban.png",
    avatar: "/images/user.jfif",
    quote:
      "به عنوان یه استارتاپ کوچیک، نیاز داشتیم به ابزاری که با رشدمون مقیاس بده. کربن دقیقاً همینه.",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} از ۵ ستاره`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < count ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12 2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            نظرات مشتریان
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            آنچه مدیران می‌گویند
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            بیش از ۱۰ شرکت به کربن اعتماد کرده‌اند. این تجربه‌ی آن‌هاست.
          </p>
        </div>

        {/* Carousel — wrapper clips overflow but lets peek cards show */}
        <div className="overflow-hidden 2xl:container 2xl:mx-auto lg:px-8">
          <Carousel
            dir="rtl"
            opts={{
              align: "center", // کارت فعال وسط قرار می‌گیره
              loop: true,
              direction: "rtl", // embla رو آگاه می‌کنه به RTL
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            {/*
              gap با px روی CarouselItem مدیریت می‌شه نه margin منفی،
              چون margin منفی در RTL جهتش برعکس می‌شه و باگ ایجاد می‌کنه.
            */}
            <CarouselContent className="ml-0 mr-0">
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className={[
                    // موبایل: کارت مرکزی ۸۰٪، کارت‌های کناری ۸٪ از هر طرف دیده می‌شن
                    "basis-[82%]",
                    "sm:basis-1/2",
                    "lg:basis-1/3",
                    // فاصله بین کارت‌ها
                    "px-2 sm:px-3",
                  ].join(" ")}
                >
                  <div className="h-full rounded-2xl border bg-card p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    {/* Stars */}
                    <Stars count={t.rating} />

                    {/* Top: logo + company */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-md overflow-hidden  flex-shrink-0">
                        <Image
                          src={t.companyLogo}
                          alt={t.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {t.company}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 text-sm sm:text-base text-foreground/80 leading-7">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Divider */}
                    <hr className="border-border" />

                    {/* Bottom: avatar + name */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
