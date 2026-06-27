import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { ScrollToTop } from "@/app/components/layout/ScrollToTop";
import { StickyButtons } from "../../components/plan/StickyButtons";
import { PricingHeader } from "../../components/plan/PricingHeader";
import { PricingTables } from "../../components/plan/PricingTables";
import { PricingCards } from "../../components/plan/PricingCards";
import { allCategories } from "../../components/plan/pricing-data";

interface PricingPageProps {
  searchParams: Promise<{
    cycle?: "monthly" | "annual";
  }>;
}

export default async function PricingPage({ searchParams }: PricingPageProps) {
  // ✅ await برای دریافت searchParams
  const params = await searchParams;
  const billingCycle = params?.cycle === "monthly" ? "monthly" : "annual";

  return (
    <>
      <section className="py-16 bg-background" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* دکمه‌های sticky */}
          <StickyButtons />

          {/* هدر با دکمه‌های تغییر قیمت */}
          <PricingHeader billingCycle={billingCycle} />

          {/* جدول‌ها */}
          <PricingTables
            categories={allCategories}
            billingCycle={billingCycle}
          />

          {/* کارت‌های قیمت */}
          <PricingCards billingCycle={billingCycle} />
        </div>
        <ScrollToTop />
      </section>
    </>
  );
}
