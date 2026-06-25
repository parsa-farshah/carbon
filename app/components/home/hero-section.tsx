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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-8">
            {/* text */}
            <div className="w-full md:w-[48%] flex flex-col gap-4 items-center md:items-start">
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
                <Button size="lg" className="rounded-full px-8">
                  شروع رایگان
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
              {/* background pattern */}
              <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="dots"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="2"
                        cy="2"
                        r="1.5"
                        className="fill-foreground"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-[5%] right-[5%] w-[58%] z-10"
              >
                <Image
                  src="/images/carbonPanel.png"
                  alt="کربن پنل - نمای اصلی"
                  width={520}
                  height={340}
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-[30%] sm:bottom-[30%] md:bottom-[50%] lg:bottom-[40%] xl:bottom-[25%] left-[2%] w-[44%] z-20"
              >
                <Image
                  src="/images/carbonPanel.png"
                  alt="کربن پنل - داشبورد"
                  width={520}
                  height={340}
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[2%] left-[8%] w-[30%] z-30"
              >
                <Image
                  src="/images/carbonPanel.png"
                  alt="کربن پنل - گزارشات"
                  width={520}
                  height={340}
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* دکمه‌های دانلود */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-12"
          >
            {/* Web Application */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <MonitorSmartphone className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  Web Application
                </span>
              </div>
            </Link>

            {/* App Store */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Apple className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  App Store
                </span>
              </div>
            </Link>

            {/* Google Play */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  Google Play
                </span>
              </div>
            </Link>

            {/* Android APK */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border bg-card hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Smartphone className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  Android Version
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
