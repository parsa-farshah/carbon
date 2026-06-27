"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PricingHeaderProps {
  billingCycle: "monthly" | "annual";
}

export function PricingHeader({ billingCycle }: PricingHeaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ساخت URL با حفظ پارامترهای موجود
  const createUrl = (cycle: "monthly" | "annual") => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("cycle", cycle);
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">مقایسه پلن‌ها</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
        تمام امکانات و قابلیت‌های کربن در یک نگاه
      </p>

      <div className="inline-flex items-center gap-3 bg-card p-1.5 rounded-full border">
        <Link
          href={createUrl("monthly")}
          scroll={false}
          replace // ✅ جایگزین کردن تاریخچه به جای push
          className={`px-6 py-2.5 rounded-full font-medium transition-all ${
            billingCycle === "monthly"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={billingCycle === "monthly"}
        >
          ماهانه
        </Link>
        <Link
          href={createUrl("annual")}
          scroll={false}
          replace // ✅ جایگزین کردن تاریخچه به جای push
          className={`px-6 py-2.5 font-medium transition-all rounded-full ${
            billingCycle === "annual"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={billingCycle === "annual"}
        >
          سالانه
          <span className="mr-2 text-xs px-4 py-1.5 rounded-full border border-amber-300 bg-gradient-to-br from-amber-500 to-yellow-500 text-white">
            ۱۶٪ تخفیف
          </span>
        </Link>
      </div>
    </div>
  );
}
