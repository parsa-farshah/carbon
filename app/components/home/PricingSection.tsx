"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowLeft, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  popular?: boolean;
  badge?: string;
}

type BillingCycle = "monthly" | "yearly";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "مقدماتی",
    description: "مناسب برای کسب و کارهای کوچک که تازه شروع کرده‌اند",
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: [
      { text: "تا ۳ عضو تیم", included: true },
      { text: "تحلیل و گزارش‌دهی پایه", included: true },
      { text: "مدیریت مشتری", included: true },
      { text: "۱ فضای کاری پروژه", included: true },
      { text: "پشتیبانی ایمیلی", included: true },
    ],
  },
  {
    id: "professional",
    name: "حرفه‌ای",
    description: "ایده‌آل برای شرکت‌های در حال رشد با نیازهای پیشرفته",
    monthlyPrice: 79,
    yearlyPrice: 63,
    popular: true,
    badge: "محبوب‌ترین",
    features: [
      { text: "تا ۱۰ عضو تیم", included: true },
      { text: "تحلیل و گزارش‌دهی پیشرفته", included: true },
      { text: "مدیریت مشتری و موجودی", included: true },
      { text: "۵ فضای کاری پروژه", included: true },
      { text: "پشتیبانی ایمیلی با اولویت", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "سازمانی",
    description: "ویژگی‌های سطح سازمانی برای سازمان‌های بزرگ",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      { text: "اعضای تیم نامحدود", included: true },
      { text: "تحلیل و گزارش‌دهی سفارشی", included: true },
      { text: "مجموعه کامل ابزارهای مدیریتی", included: true },
      { text: "فضاهای کاری پروژه نامحدود", included: true },
      { text: "پشتیبانی ۲۴/۷ با اولویت", included: true },
      { text: "دسترسی پیشرفته API", included: true },
      { text: "مدیر حساب اختصاصی", included: true },
    ],
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionHeader() {
  return (
    <div className="text-center mb-12 space-y-6">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">
          کربن دوست کسب و کار شما
        </span>
      </div>

      {/* Title — fix #1: text-2xl on mobile, scale up on md+ */}
      <h2 className="text-2xl md:text-5xl font-bold text-foreground">
        پلن مناسب کسب و کار خود را انتخاب کنید
      </h2>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
        "هسته کربن" یک نرم افزار نوآورانه برای مدیریت و توسعه کسب و کار است که
        با استفاده از فناوری‌های پیشرفته و بهره‌گیری از پلتفرم‌های مدرن بلاکچین،
        وب ۳ و هوش مصنوعی (AI) توسعه یافته است. این نرم‌افزار برای ساده‌سازی
        فرآیندهای مدیریتی و افزایش امنیت و کارایی کسب و کارها با ارائه تحلیل‌های
        هوشمند و رمزگذاری پیشرفته طراحی شده است که عملیات تجاری را به سطح جدیدی
        می‌برد.
      </p>
    </div>
  );
}

interface BillingToggleProps {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

function BillingToggle({ cycle, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      {/* Monthly label */}
      <span
        className={cn(
          "text-sm font-medium transition-colors whitespace-nowrap",
          cycle === "monthly" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        پرداخت ماهانه
      </span>

      {/* Toggle Switch */}
      <button
        onClick={() => onChange(cycle === "monthly" ? "yearly" : "monthly")}
        className={cn(
          "relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          cycle === "yearly" ? "bg-primary" : "bg-muted",
        )}
        role="switch"
        aria-checked={cycle === "yearly"}
        aria-label="تغییر چرخه پرداخت"
        dir="ltr"
      >
        <span
          className={cn(
            "inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200",
            // حالا به‌صورت LTR عمل می‌کنه: yearly = راست (translate-x-7), monthly = چپ (translate-x-1)
            cycle === "yearly" ? "translate-x-7" : "translate-x-1",
          )}
        />
      </button>

      {/* Yearly label + badge */}
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-sm font-medium transition-colors whitespace-nowrap",
            cycle === "yearly" ? "text-foreground" : "text-muted-foreground",
          )}
        >
          پرداخت سالانه
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 whitespace-nowrap">
          ۲۰٪ صرفه‌جویی
        </span>
      </div>
    </div>
  );
}

interface PricingCardProps {
  tier: PricingTier;
  cycle: BillingCycle;
  index: number;
}

function PricingCard({ tier, cycle, index }: PricingCardProps) {
  const price = cycle === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;

  return (
    // fix #4: flex flex-col + h-full so all cards stretch to the same height
    <div
      className={cn(
        "relative flex flex-col h-full rounded-2xl border transition-all duration-300",
        "animate-fadeSlideUp",
        tier.popular
          ? "border-primary shadow-xl shadow-primary/10 scale-105"
          : "border-border bg-card hover:border-primary/50 hover:shadow-lg",
      )}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Popular Badge — fix #3: white text on solid primary bg for better contrast */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-bold shadow-lg whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5" />
            {tier.badge}
          </div>
        </div>
      )}

      {/* Card Content — flex-1 pushes CTA to the bottom */}
      <div className="flex flex-col flex-1 p-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {tier.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-foreground">${price}</span>
          <span className="text-muted-foreground">/ماه</span>
        </div>

        {/* Features — flex-1 so this section grows and pushes CTA down */}
        <ul className="flex-1 space-y-3 pt-4 border-t border-border">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center",
                    feature.included ? "bg-primary/10" : "bg-muted",
                  )}
                >
                  <Check
                    className={cn(
                      "w-3 h-3",
                      feature.included
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  />
                </div>
              </div>
              <span
                className={cn(
                  "text-sm leading-relaxed",
                  feature.included
                    ? "text-foreground"
                    : "text-muted-foreground line-through",
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button — fix #4: mt-auto pins it to the bottom of every card */}
        <Link
          href="#"
          className={cn(
            "mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
            tier.popular
              ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02]"
              : "bg-card border border-border hover:border-primary hover:text-primary",
          )}
        >
          <span>سفارش اکنون</span>
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Background decorations
// ---------------------------------------------------------------------------

function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        className="absolute -top-12 -right-24 text-primary opacity-[0.04]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pricing-pattern-1"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="2" height="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#pricing-pattern-1)" />
      </svg>

      <svg
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        className="absolute -bottom-12 -left-24 text-primary opacity-[0.04]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pricing-pattern-2"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="2" height="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#pricing-pattern-2)" />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundDecorations />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />

        <BillingToggle cycle={billingCycle} onChange={setBillingCycle} />

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              cycle={billingCycle}
              index={index}
            />
          ))}
        </div>

        {/* ✅ CTA box داخل container — px خودکار هم‌تراز میشه */}
        <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8 md:p-12 backdrop-blur-sm">
          <div className="flex flex-col items-start text-right space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              نیاز به راهکار سفارشی دارید؟
            </h3>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              ما می‌توانیم خدمات خود را با نیازهای خاص شما تطبیق دهیم. برای
              دریافت پیشنهاد شخصی‌شده با تیم فروش ما تماس بگیرید.
            </p>
            <Button size="lg" className="mt-2 gap-2">
              <Phone className="h-5 w-5" />
              تماس با فروش
            </Button>
          </div>
        </div>
      </div>{" "}
      {/* ← بسته شدن container */}
    </section>
  );
};

export default PricingSection;
