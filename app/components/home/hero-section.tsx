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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-background to-background dark:from-purple-950/20 dark:via-background dark:to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* دکمه شعار بالا */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="#top">
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 transition-all duration-300 hover:scale-105"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent"
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
            className=" md:text-xl text-muted-foreground max-w-2xl"
          >
            یک گام بزرگ برای پیشرفت و بهبود کسب و کار شما!
          </motion.p>

          {/* تصویر اصلی با تگ‌های شناور */}
          <div className="relative w-full max-w-5xl mt-12">
            {/* تگ راست بالا - به‌روزرسانی‌های زنده */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                delay: 0.5,
              }}
              className="absolute -top-8 -right-4 md:right-8 lg:right-16 z-20"
            >
              <div className="flex items-center gap-2 bg-green-500/90 dark:bg-green-600/90 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium whitespace-nowrap">
                  به‌روزرسانی‌های زنده
                </span>
              </div>
            </motion.div>

            {/* تگ پایین چپ - آپتایم */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
                delay: 0.5,
              }}
              className="absolute -bottom-8 -left-4 md:left-8 lg:left-16 z-20"
            >
              <div className="flex items-center gap-2 bg-purple-500/90 dark:bg-purple-600/90 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">
                  آپتایم ۹۹٪
                </span>
              </div>
            </motion.div>

            {/* تصویر اصلی */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1],
              }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-purple-200/20 dark:border-purple-800/20 hover:scale-105 duration-300"
            >
              <Image
                src="/images/carbonPanel.png"
                alt="Carbon Panel Dashboard"
                fill
                className="object-fit transition-transform"
                priority
              />
            </motion.div>
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
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <MonitorSmartphone className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  Web Application
                </span>
              </div>
            </Link>

            {/* App Store */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Apple className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  App Store
                </span>
              </div>
            </Link>

            {/* Google Play */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Play className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  Google Play
                </span>
              </div>
            </Link>

            {/* Android APK */}
            <Link href="#" className="group">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
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
