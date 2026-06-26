// src/components/sections/about/AboutStorySection.tsx
import Image from "next/image";

export function AboutStorySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right: Text */}
          <div className="space-y-6 text-right">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              داستان ما
            </span>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              از یک ایده تا یک پلتفرم جهانی
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                کربن در سال ۲۰۲۰ با یک مأموریت ساده اما بلندپروازانه تأسیس شد:
                انقلابی در نحوه عملکرد کسب‌وکارها در عصر دیجیتال. آنچه به عنوان
                یک تیم کوچک از نوآوران پرشور آغاز شد، به یک شرکت جهانی تبدیل شده
                است که به هزاران سازمان در صنایع مختلف خدمات می‌دهد.
              </p>
              <p>
                سفر ما زمانی آغاز شد که بنیانگذاران ما تشخیص دادند که ابزارهای
                سنتی مدیریت کسب‌وکار در بازاری که به طور فزاینده‌ای پیچیده و
                سریع می‌شود، کوتاهی می‌کنند. آنها پلتفرمی را تصور کردند که از
                جدیدترین فناوری‌ها، بلاک‌چین، هوش مصنوعی و وب۳، برای ایجاد
                راه‌حل‌های تجاری هوشمندتر، امن‌تر و کارآمدتر استفاده می‌کند.
              </p>
              <p>
                امروزه، کربن در خط مقدم نوآوری مدیریت کسب‌وکار قرار دارد و
                پلتفرم خود را به طور مداوم تکامل می‌بخشد تا نیازهای متغیر
                سازمان‌های مدرن را برآورده سازد، در حالی که به ارزش‌های اصلی خود
                وفادار می‌ماند.
              </p>
            </div>
          </div>

          {/* Left: Image */}
          <div className="relative h-[420px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/aboutTeam.jpg"
              alt="داستان کربن"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
