// src/components/sections/about/AboutValuesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shield, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "نوآوری",
    description:
      "ما مدام مرزهای آنچه ممکن است را می‌شکنیم و فناوری‌ها و رویکردهای جدید را برای حل چالش‌های پیچیده کسب و کار پذیرا می‌شویم.",
  },
  {
    icon: Shield,
    title: "درستکاری",
    description:
      "ما با شفافیت و صداقت کامل عمل می‌کنیم و اعتماد را با مشتریان، شرکا و در درون تیم خود ایجاد می‌کنیم.",
  },
  {
    icon: Target,
    title: "تأثیرگذاری",
    description:
      "ما موفقیت خود را با تفاوت مثبتی که برای مشتریان و جامعه تجاری گسترده‌تر ایجاد می‌کنیم، می‌سنجیم.",
  },
];

export function AboutValuesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            ارزش‌های اصلی ما
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 group"
              >
                <div className="h-full p-4 lg:p-5 bg-card border rounded-2xl hover:shadow-md hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                  {/* Icon */}
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold leading-snug mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
