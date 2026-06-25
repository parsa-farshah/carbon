import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "./components/home/hero-section";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "پروژه مهندسی با Next.js",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            خوش آمدید به پروژه مهندسی
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            این یک پروژه حرفه‌ای با Next.js است که تمام استانداردهای مدرن را
            رعایت می‌کند
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base"
            >
              <Link href="/register">شروع کنید</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base"
            >
              <Link href="/about">بیشتر بدانید</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            ویژگی‌های پروژه
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: "Next.js 14", desc: "آخرین نسخه با App Router" },
              { title: "TypeScript", desc: "Type-safe و قابل نگهداری" },
              { title: "Tailwind CSS", desc: "استایل‌دهی مدرن و سریع" },
              { title: "shadcn/ui", desc: "کامپوننت‌های آماده و زیبا" },
              { title: "RTL Support", desc: "پشتیبانی کامل از فارسی" },
              { title: "Dark Mode", desc: "حالت تاریک و روشن" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
