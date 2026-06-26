"use client";

import { motion } from "framer-motion";
import { Link2, Eye, TrendingUp, DollarSign } from "lucide-react";
import { WhyCarbonCarousel } from "./WhyCarbonCarousel";

const features = [
  {
    icon: Link2,
    title: "یکپارچگی واقعی",
    subtitle: "Native Integration",
    description:
      "در کربن، ما ماژول‌های جداگانه را به زور به هم وصله نکرده‌ایم. تمام بخش‌های سیستم از روز اول برای همکاری با یکدیگر طراحی شده‌اند. این یعنی جریان اطلاعات بین دپارتمان‌های شما بدون هیچ واسطه یا نیاز به ابزار جانبی (Third-party) اتفاق می‌افتد. یکپارچگی در کربن یک ادعا نیست، بلکه در DNA سیستم است.",
  },
  {
    icon: Eye,
    title: "شفافیت مدیریتی",
    subtitle: "Managerial Transparency",
    description:
      "خداحافظی با گزارش‌های متناقض اکسل و حدس و گمان. وقتی تمام داده‌های سازمان در یک بستر متمرکز جمع‌آوری می‌شوند، مدیران به یک دید ۳۶۰ درجه دست پیدا می‌کنند. تصمیم‌گیری‌های شما از این پس بر اساس داده‌های واقعی و در لحظه (Real-time) خواهد بود.",
  },
  {
    icon: TrendingUp,
    title: "مقیاس‌پذیری برای رشد",
    subtitle: "Scalability for Growth",
    description:
      "کربن نرم‌افزاری نیست که سال آینده با بزرگ‌تر شدن سازمانتان مجبور به تعویض آن شوید. سیستم ما همراه با کسب‌وکار شما قد می‌کشد. از اولین مراحل مدیریت مشتریان تا اتوماسیون‌های پیچیده و تحلیل‌های پیشرفته داده، زیرساخت واحد کربن ظرفیت پاسخگویی به توسعه شما را دارد.",
  },
  {
    icon: DollarSign,
    title: "هزینه قابل پیش‌بینی",
    subtitle: "Predictable Cost",
    description:
      "بحران هزینه‌های پنهانِ نرم‌افزارهای جزیره‌ای را به یاد دارید؟ در کربن فرمول ساده است: یک اشتراک، یک اکوسیستم کامل. دیگر خبری از خرید لایسنس‌های متعدد، هزینه‌های ادغام، یا پرداخت‌های پنهان برای ماژول‌های اضافی نیست. شما دقیقاً می‌دانید برای چه چیزی سرمایه‌گذاری می‌کنید.",
  },
];

export function WhyCarbonSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6  px-4 sm:px-6 lg:px-8">
            احتمالاً می‌پرسید چرا کربن؟
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed  px-4 sm:px-6 lg:px-8">
            چه چیزی این پلتفرم را از ده‌ها نرم‌افزار دیگری که تا امروز امتحان
            کرده‌اید، متمایز می‌کند؟ ما پاسخ را در چهار مزیت کلیدی خلاصه
            کرده‌ایم:
          </p>
        </div>

        {/* موبایل: carousel */}
        <div className="lg:hidden w-full">
          <WhyCarbonCarousel features={features} />
        </div>

        {/* دسکتاپ: grid */}
        <div className="hidden lg:flex flex-row gap-5 2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex-1 group"
            >
              <div className="h-full p-5 bg-card border rounded-2xl hover:shadow-md transition-all duration-300 hover:border-foreground/20 hover:-translate-y-1 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-snug">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
