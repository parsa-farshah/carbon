"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface PricingCardsProps {
  billingCycle: "monthly" | "annual";
}

export function PricingCards({ billingCycle }: PricingCardsProps) {
  const plans = [
    {
      plan: "پایه",
      price: billingCycle === "monthly" ? "۴۵۰,۰۰۰" : "۲۷۰,۰۰۰",
      period: billingCycle === "monthly" ? "ماهانه" : "ماهانه (سالانه)",
      cta: "شروع با پلن پایه",
      variant: "outline" as const,
    },
    {
      plan: "بیزینس",
      price: billingCycle === "monthly" ? "۱,۲۰۰,۰۰۰" : "۷۲۰,۰۰۰",
      period: billingCycle === "monthly" ? "ماهانه" : "ماهانه (سالانه)",
      cta: "شروع با پلن بیزینس",
      variant: "default" as const,
      popular: true,
    },
    {
      plan: "اینترپرایز",
      price: "سفارشی",
      period: "براساس نیاز شما",
      cta: "تماس با فروش",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {plans.map((item, idx) => (
        <div
          key={idx}
          className={`relative p-6 rounded-xl border ${
            item.popular
              ? "border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 shadow-lg shadow-amber-500/10"
              : "border-border"
          } bg-card`}
        >
          {item.popular && (
            <div className="absolute -top-3 right-1/2 translate-x-1/2 z-10">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white text-xs font-bold shadow-lg whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                محبوب‌ترین
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold mb-2">{item.plan}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold">
              {item.price === "سفارشی" ? item.price : `${item.price} تومان`}
            </span>
            {item.price !== "سفارشی" && (
              <span className="text-sm text-muted-foreground mr-2">
                / {item.period}
              </span>
            )}
          </div>
          <Button className="w-full" variant={item.variant}>
            {item.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
