import {
  CheckCircle2,
  Zap,
  Shield,
  Headphones,
  TrendingUp,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  {
    icon: Zap,
    title: "دسترسی زودتر به قابلیت‌های جدید",
    description: "اولین کسانی باشید که از آخرین ویژگی‌ها استفاده می‌کنید",
  },
  {
    icon: Headphones,
    title: "پشتیبانی اختصاصی ۲۴/۷",
    description: "تیم پشتیبانی اختصاصی همیشه در کنار شماست",
  },
  {
    icon: TrendingUp,
    title: "تحلیل‌های پیشرفته و سفارشی",
    description: "گزارش‌های تخصصی متناسب با نیاز کسب‌وکار شما",
  },
  {
    icon: Shield,
    title: "امنیت و پشتیبان‌گیری پیشرفته",
    description: "داده‌های شما با بالاترین استانداردها محافظت می‌شود",
  },
  {
    icon: Award,
    title: "آموزش‌های اختصاصی رایگان",
    description: "دسترسی به وبینارها و جلسات آموزشی ویژه",
  },
  {
    icon: CheckCircle2,
    title: "مشاوره رایگان پیاده‌سازی",
    description: "تیم ما در کنارتان است تا بهترین تجربه را داشته باشید",
  },
];

export function VipClub() {
  return (
    <section className="py-24">
      <div className="2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-300/50 mb-6">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
              باشگاه VIP کربن
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-l from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
            به جمع نخبگان بپیوندید
          </h2>
          <p className="text-lg text-muted-foreground">
            با عضویت در باشگاه VIP، از امکانات ویژه و پشتیبانی اختصاصی بهره‌مند
            شوید و کسب‌وکارتان را به سطح بعدی برسانید
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-amber-300/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-300/50 p-8 lg:p-12 text-center shadow-xl shadow-amber-500/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              آماده‌اید تجربه متفاوتی داشته باشید؟
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              همین حالا به باشگاه VIP بپیوندید و از تمام مزایای ویژه بهره‌مند
              شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                asChild
              >
                <Link href="#pricing">مشاهده پلن‌ها</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-300/50 hover:border-amber-400 hover:bg-amber-500/5 font-semibold transition-all"
                asChild
              >
                <Link href="#contact">تماس با تیم فروش</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
