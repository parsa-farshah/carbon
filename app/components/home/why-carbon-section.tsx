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
      "تمام بخش‌های سیستم از روز اول برای همکاری با یکدیگر طراحی شده‌اند. جریان اطلاعات بین دپارتمان‌ها بدون هیچ واسطه یا نیاز به ابزار جانبی اتفاق می‌افتد. یکپارچگی در کربن در DNA سیستم است.",
  },
  {
    icon: Eye,
    title: "شفافیت مدیریتی",
    subtitle: "Managerial Transparency",
    description:
      "خداحافظی با گزارش‌های متناقض اکسل. تمام داده‌های سازمان در یک بستر متمرکز جمع‌آوری می‌شوند و مدیران به دید ۳۶۰ درجه دست پیدا می‌کنند. تصمیم‌گیری‌های شما بر اساس داده‌های واقعی و در لحظه خواهد بود.",
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
      "یک اشتراک، یک اکوسیستم کامل. دیگر خبری از خرید لایسنس‌های متعدد، هزینه‌های ادغام، یا پرداخت‌های پنهان نیست. شما دقیقاً می‌دانید برای چه چیزی سرمایه‌گذاری می‌کنید.",
  },
];

export function WhyCarbonSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            احتمالاً می‌پرسید چرا کربن؟
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            چه چیزی این پلتفرم را از ده‌ها نرم‌افزار دیگری که تا امروز امتحان
            کرده‌اید، متمایز می‌کند؟ ما پاسخ را در چهار مزیت کلیدی خلاصه
            کرده‌ایم:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 lg:p-10 bg-card border rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-foreground/20">
                {/* Icon */}
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl bg-foreground text-background group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
