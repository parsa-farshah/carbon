import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { ScrollToTop } from "@/app/components/layout/ScrollToTop";
import { StickyButtons } from "../Components/StickyButtons";
import { PricingHeader } from "../Components/PricingHeader";
import { PricingTables } from "../Components/PricingTables";
import { PricingCards } from "../Components/PricingCards";
import { allCategories } from "../Components/pricing-data";

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
      {/* SEO */}
      <Head>
        <title>مقایسه پلن‌های کربن | قیمت و امکانات</title>
        <meta
          name="description"
          content="مقایسه کامل پلن‌های پایه، بیزینس و اینترپرایز کربن"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Table",
            name: "مقایسه پلن‌های کربن",
          }),
        }}
      />

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
