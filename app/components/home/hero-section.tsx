// src/components/home/hero-section.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  MonitorSmartphone,
  Apple,
  Play,
  Zap,
  Activity,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-24 2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-8">
            {/* text */}
            <div className="w-full md:w-[48%] flex flex-col gap-8 items-center md:items-start">
              {/* دکمه شعار بالا */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href="#top">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
                  >
                    <Zap className="w-4 h-4 ml-2" />
                    همین حالا تغییر را ایجاد کنید!
                  </Button>
                </Link>
              </motion.div>

              {/* عنوان اصلی */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-right"
              >
                مدیریت هوشمند کارها
                <br />
                با کربن پنل.
              </motion.h1>

              {/* توضیحات */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-muted-foreground"
              >
                یک گام بزرگ برای پیشرفت و بهبود کسب و کار شما!
              </motion.p>

              {/* دکمه‌های اصلی */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 mt-2"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
                >
                  شروع
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  مشاهده دمو
                </Button>
              </motion.div>
            </div>

            {/* images */}
            <div className="w-full md:w-[48%] relative min-h-[400px]">
              {/* 1. پس‌زمینه */}
              <div className="absolute h-[440px] -left-0 top-0 opacity-[0.15] dark:opacity-[0.10]">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="dots"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="1" cy="1" r="1" className="fill-foreground" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              {/* 2. کانتینر محتوا */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {/* بج‌ها */}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-[10%] left-[5%] z-20 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    دیتای یکپارچه
                  </span>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-[10%] right-[5%] z-20 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    آپتایم ۹۹٪
                  </span>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-[10%] left-[50%] -translate-x-1/2 z-20 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    امنیت ۱۰۰٪
                  </span>
                </motion.div>

                {/* 3. عکس بزرگ‌تر */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full max-w-[100%] z-10 absolute left-0 lg:left-20"
                >
                  <Image
                    src="/images/carbonPanel.png"
                    alt="کربن پنل - نمای اصلی"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* دکمه‌های دانلود */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-4xl mt-12 relative"
          >
            {/* بج‌ها */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[100%] left-[20%] z-20 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span className="text-xs font-medium text-foreground whitespace-nowrap">
                به زودی
              </span>
            </motion.div>

            {/* بج‌ها */}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[100%] right-[0%] z-20 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span className="text-xs font-medium text-foreground whitespace-nowrap">
                نسخه آزمایشی
              </span>
            </motion.div>

            {/* Download Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
              {/* Web Application */}
              <div className="opacity-50 cursor-not-allowed">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card">
                  <MonitorSmartphone className="w-8 h-8" />
                  <span className="text-sm font-medium text-center">
                    اپلیکیشن وب
                  </span>
                </div>
              </div>

              {/* App Store */}
              <div className="opacity-50 cursor-not-allowed">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52.226 52.226"
                    className="w-8 h-8"
                    fill="currentColor"
                  >
                    <g>
                      <g>
                        <path d="M36.802,1.055L36.747,0l-1.05,0.113c-0.103,0.011-10.252,1.234-10.948,12.581l-0.07,1.136l1.136-0.077    C25.931,13.745,37.426,12.828,36.802,1.055z M34.821,2.322c-0.191,6.838-5.511,8.74-7.953,9.253    C27.798,4.93,32.617,2.905,34.821,2.322z" />
                        <path d="M46.584,37.517l-0.639-0.207c-3.867-1.25-6.464-4.792-6.464-8.814c0-3.578,2.023-6.778,5.281-8.352l0.972-0.469    l-0.542-0.933c-0.232-0.4-2.401-3.943-6.983-5.116c-3.634-0.93-7.72-0.107-12.149,2.447c-1.875-1.138-8.103-4.418-13.058-1.13    c-0.97,0.536-11.251,6.695-5.9,23.313c0.157,0.372,3.888,9.113,8.303,12.387c1.191,1.138,4.237,2.56,7.718,0.187    c0.603-0.249,4.638-1.802,7.198,0.017c0.945,0.647,2.595,1.38,4.338,1.38c1.322,0,2.697-0.421,3.859-1.621    c0.542-0.469,5.493-4.888,8.066-11.888l0.075-0.204L46.584,37.517z M37.182,49.115l-0.077,0.073    c-2.193,2.303-5.518,0.1-5.641,0.018c-1.308-0.93-2.823-1.233-4.244-1.233c-2.579,0-4.847,0.999-4.992,1.064l-0.163,0.092    c-3.019,2.107-5.086,0.253-5.305,0.042l-0.118-0.101c-3.993-2.912-7.663-11.507-7.668-11.51    C3.966,21.992,13.56,16.9,13.968,16.693l0.11-0.065c4.647-3.12,11.327,1.396,11.393,1.441l0.533,0.366l0.552-0.333    c4.16-2.515,7.914-3.37,11.157-2.539c2.642,0.676,4.326,2.327,5.15,3.342c-3.347,2.051-5.381,5.63-5.381,9.591    c0,4.556,2.735,8.604,6.902,10.365C41.819,45.122,37.231,49.074,37.182,49.115z" />
                      </g>
                    </g>
                  </svg>
                  <span className="text-sm font-medium text-center">
                    اپ استور
                  </span>
                </div>
              </div>

              {/* Google Play */}
              <div className="opacity-50 cursor-not-allowed">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card">
                  <Play className="w-8 h-8" />
                  <span className="text-sm font-medium text-center">
                    گوگل پلی
                  </span>
                </div>
              </div>

              {/* Android APK */}
              <div className="opacity-50 cursor-not-allowed">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card">
                  <Smartphone className="w-8 h-8" />
                  <span className="text-sm font-medium text-center">
                    نسخه اندروید
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
