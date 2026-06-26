import { CheckCircle2, Zap, Users, Gift } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MembershipBenefits() {
  return (
    <section className="py-24  bg-zinc-50 dark:bg-zinc-900/50">
      <div className="2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* سمت راست: محتوا */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users size={16} />
              <span>عضویت در کربن</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              با عضویت در کربن چه مزایایی دریافت می‌کنید؟
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              با پیوستن به جامعه کربن، از امکانات ویژه و پشتیبانی حرفه‌ای
              بهره‌مند شوید و کسب‌وکار خود را به سطح بالاتری برسانید.
            </p>

            {/* لیست مزایا */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/40 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={18} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                    دسترسی به تمام امکانات
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    تمام ابزارها و قابلیت‌های پلتفرم در اختیار شماست
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 mt-1">
                  <Zap size={18} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                    پشتیبانی اختصاصی ۲۴/۷
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    تیم پشتیبانی ما همیشه در کنار شماست
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center shrink-0 mt-1">
                  <Gift size={18} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                    تخفیف‌های ویژه اعضا
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    از تخفیف‌های منحصربه‌فرد برای اعضای ویژه بهره‌مند شوید
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              هم‌اکنون عضو شوید
            </Button>
          </div>

          {/* سمت چپ: تصویر */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5">
              <Image
                src="/images/about.webp"
                alt="مزایای عضویت در کربن"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* دکوراسیون */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
