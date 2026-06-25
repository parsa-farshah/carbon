// src/components/home/why-carbon-section.tsx
"use client";

import { motion } from "framer-motion";
import { Link2, Eye, TrendingUp, DollarSign } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "یکپارچگی واقعی",
    subtitle: "Native Integration",
    description:
      "تمام بخش‌های سیستم از روز اول برای همکاری با یکدیگر طراحی شده‌اند. جریان اطلاعات بین دپارتمان‌ها بدون هیچ واسطه یا نیاز به ابزار جانبی اتفاق می‌افتد.",
  },
  {
    icon: Eye,
    title: "شفافیت مدیریتی",
    subtitle: "Managerial Transparency",
    description:
      "خداحافظی با گزارش‌های متناقض اکسل. تمام داده‌های سازمان در یک بستر متمرکز جمع‌آوری می‌شوند و مدیران به دید ۳۶۰ درجه دست پیدا می‌کنند.",
  },
  {
    icon: TrendingUp,
    title: "مقیاس‌پذیری برای رشد",
    subtitle: "Scalability for Growth",
    description:
      "کربن همراه با کسب‌وکار شما قد می‌کشد. از اولین مراحل مدیریت مشتریان تا اتوماسیون‌های پیچیده و تحلیل‌های پیشرفته داده، زیرساخت واحد کربن ظرفیت پاسخگویی به توسعه شما را دارد.",
  },
  {
    icon: DollarSign,
    title: "هزینه قابل پیش‌بینی",
    subtitle: "Predictable Cost",
    description:
      "یک اشتراک، یک اکوسیستم کامل. دیگر خبری از خرید لایسنس‌های متعدد، هزینه‌های ادغام، یا پرداخت‌های پنهان نیست.",
  },
];

export function WhyCarbonSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            احتمالاً می‌پرسید چرا کربن؟
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            چه چیزی این پلتفرم را از ده‌ها نرم‌افزار دیگری که تا امروز امتحان
            کرده‌اید، متمایز می‌کند؟ ما پاسخ را در چهار مزیت کلیدی خلاصه
            کرده‌ایم:
          </p>
        </div>

        {/* Features - flex row در md به بعد */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex-1 group"
            >
              <div className="h-full p-5 lg:p-6 bg-card border rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-foreground text-background group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 lg:space-y-3">
                  {/* Title */}
                  <div>
                    <h3 className="text-base lg:text-lg font-bold mb-1">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-muted-foreground font-medium">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
