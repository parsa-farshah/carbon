"use client";

import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { ScrollToTop } from "@/app/components/layout/ScrollToTop";

// ─── Types ────────────────────────────────────────────────────────────────────
type FeatureValue = string | boolean;

interface FeatureRow {
  id: number;
  module: string;
  description: string;
  basic: FeatureValue;
  business: FeatureValue;
  enterprise: FeatureValue;
}

interface FeatureCategory {
  title: string;
  rows: FeatureRow[];
}

// ─── Data ────────────────────────────────────────────────────────────────
const categories1: FeatureCategory[] = [
  {
    title: "زیرساخت، امنیت و بستر",
    rows: [
      {
        id: 1,
        module: "زیرساخت و پلتفرم",
        description:
          "نسخه اصلی نرم‌افزار، معماری هسته، نوع سرویس‌دهی و محل جغرافیایی سرور",
        basic: "Carbon Core V0.0.1 (اشتراکی/ایران)",
        business: "Carbon Core V0.1.1 (اختصاصی/ایران و اروپا)",
        enterprise: "Carbon Core V0.1.1 (ابری توزیع‌شده/چندمنطقه‌ای)",
      },
      {
        id: 2,
        module: "مشخصات سرور",
        description: "جزئیات سخت‌افزاری و شبکه زیرساخت میزبانی پلن",
        basic:
          "اشتراکی: 7GB رم DDR4، 4 هسته CPU (3.6Ghz)، 90GB NVMe، 1GBit/s، پهنای باند نامحدود (هتزنر)",
        business:
          "6GB رم DDR4، 4 هسته CPU (3.6Ghz)، 50GB NVMe، 1GBit/s، پهنای باند نامحدود (هتزنر)",
        enterprise:
          "8GB رم DDR4، 6 هسته CPU (3.6Ghz)، 100GB NVMe، 1GBit/s، پهنای باند نامحدود (هتزنر)",
      },
      {
        id: 3,
        module: "امنیت داده و توکنایزیشن",
        description:
          "سطح رمزنگاری داده‌ها در حال انتقال و ذخیره، و شیوه مدیریت توکن‌های دسترسی",
        basic: "رمزنگاری پایه داده‌ها (AES-128)",
        business: "رمزنگاری پیشرفته (AES-256) داده‌های حساس",
        enterprise: "رمزنگاری در سطح پایگاه داده، مدیریت کلید اختصاصی",
      },
      {
        id: 4,
        module: "احراز هویت",
        description:
          "روش‌های مختلف ورود به سیستم، شامل رمز عبور، توکن‌ها و تأیید هویت چندعاملی (MFA)",
        basic: "Username/Password + JWT",
        business: "همه موارد پایه + OTP + OAuth",
        enterprise: "همه موارد پایه + OTP + OAuth + SSO",
      },
      {
        id: 5,
        module: "مدیریت دستگاه‌های متصل",
        description: "رصد جزئیات دستگاه و امکان قطع نشست",
        basic: "رصد جزئیات دستگاه و امکان قطع نشست",
        business: "رصد جزئیات دستگاه و امکان قطع نشست",
        enterprise: "رصد جزئیات دستگاه و امکان قطع نشست",
      },
      {
        id: 6,
        module: "سرویس ابری و CDN",
        description:
          "استفاده از شبکه‌های توزیع محتوا (CDN) برای سرعت بالا و زیرساخت‌های ابری مقیاس‌پذیر",
        basic: false,
        business: "CDN سریع جهانی (Dedicated)",
        enterprise: "زیرساخت اختصاصی AWS/Azure + CDN Dedicated",
      },
      {
        id: 7,
        module: "بکاپ‌گیری و بازیابی داده",
        description:
          "فرکانس و سرعت بکاپ‌گیری داده‌ها و طرح اختصاصی بازیابی در زمان فاجعه (DR)",
        basic: "بکاپ‌گیری هر 4 روز با بازیابی سریع",
        business: "بکاپ‌گیری روزانه با بازیابی سریع",
        enterprise: "بکاپ‌گیری ساعتی (Low RPO)، بازیابی فاجعه اختصاصی (DR)",
      },
      {
        id: 8,
        module: "طراحی و تجربه کاربری (UI/UX)",
        description: "کیفیت و میزان قابلیت سفارشی‌سازی رابط کاربری پنل مدیریت",
        basic: "UI/UX پایه و استاندارد",
        business: "UI/UX پایه و استاندارد",
        enterprise: "طراحی کاملاً اختصاصی (Custom UI/UX)",
      },
      {
        id: 9,
        module: "دامنه اختصاصی",
        description:
          "امکان استفاده از نام دامنه اختصاصی کسب‌وکار شما برای دسترسی به پنل",
        basic: ".ir (رایگان)",
        business: ".com, .net, .org, .in (رایگان)",
        enterprise: ".com, .co (رایگان)",
      },
      {
        id: 10,
        module: "ایمیل دامنه اختصاصی",
        description: "امکان ساخت صندوق‌های ایمیل با نام دامنه اختصاصی شما",
        basic: "۱ صندوق",
        business: "تا ۱۰ صندوق",
        enterprise: "نامحدود",
      },
      {
        id: 11,
        module: "مدیریت سطح دسترسی کاربران",
        description:
          "کنترل دسترسی مبتنی بر نقش (RBAC)، تعریف نقش‌های مختلف و دسترسی به بخش‌های نرم‌افزار",
        basic: "نقش‌های استاندارد و دسترسی‌های ثابت",
        business:
          "تعریف نقش‌های سفارشی (Custom Roles) و دسترسی‌های مبتنی بر تیم",
        enterprise: "کنترل دسترسی در سطح فیلد/داده (Granular Access)",
      },
    ],
  },
];

const categories2: FeatureCategory[] = [
  {
    title: "مدیریت عملیات و هسته",
    rows: [
      {
        id: 12,
        module: "محدودیت تعریف مشتری",
        description:
          "حداکثر تعداد مشتریانی که می‌توان در پنل تعریف و مدیریت کرد (CRM)",
        basic: "۱۵۰۰",
        business: "۲۵۰۰",
        enterprise: "نامحدود",
      },
      {
        id: 13,
        module: "محدودیت تعریف کارمندان",
        description:
          "حداکثر تعداد کارکنانی که می‌توان در پنل تعریف و مدیریت کرد",
        basic: "۵ نفر",
        business: "۲۰ نفر",
        enterprise: "نامحدود",
      },
      {
        id: 14,
        module: "محدودیت تعریف همکار و شریک",
        description:
          "حداکثر تعداد شرکای تجاری یا همکارانی که می‌توانند به سیستم دسترسی داشته باشند",
        basic: "۳ نفر",
        business: "۱۵ نفر",
        enterprise: "نامحدود",
      },
      {
        id: 15,
        module: "محدودیت صدور فاکتور",
        description:
          "حداکثر تعداد فاکتورهای فروشی که می‌توان در یک دوره زمانی صادر کرد",
        basic: "۱۰۰۰ عدد در ماه",
        business: "نامحدود",
        enterprise: "نامحدود",
      },
      {
        id: 16,
        module: "تقویم یکپارچه و هماهنگ‌سازی",
        description:
          "نمایش تقویم‌های مختلف و قابلیت اتصال دوطرفه برای مدیریت زمان",
        basic: "تقویم پایه شمسی / میلادی / قمری",
        business: "همگام‌سازی دوطرفه Google Calendar",
        enterprise: "همگام‌سازی دوطرفه Google Calendar و Outlook",
      },
      {
        id: 17,
        module: "سیستم مدیریت کارها",
        description:
          "ابزاری برای مدیریت وظایف شخصی، تیمی و قابلیت تعریف پروژه‌ها و گردش کارهای سازمانی",
        basic: "وظایف شخصی",
        business: "وظایف شخصی و تیمی",
        enterprise:
          "وظایف شخصی و تیمی + مدیریت پروژه و گردش کار سفارشی + یکپارچگی کامل با HRM/CRM",
      },
      {
        id: 18,
        module: "مدیریت شناسه‌های اصلی",
        description:
          "ابزاری برای تولید و پیگیری شناسه منحصر به فرد (ID) برای مشتریان، کالاها و کارکنان",
        basic: "تولید خودکار شناسه مشتری و کارکنان",
        business: "تولید خودکار شناسه مشتری و کارکنان",
        enterprise: "تولید خودکار شناسه با الگوی سفارشی",
      },
      {
        id: 19,
        module: "حسابداری",
        description:
          "مدیریت امور مالی، شامل ثبت فاکتور، محاسبه مالیات و گزارش‌دهی جامع",
        basic: "فقط ثبت فاکتورهای فروش (CRUD ساده)",
        business: "حسابداری کامل، مالیات، مراودات مالی و گزارش‌های جامع",
        enterprise: "نسخه پرو - ادغام کامل با ERP و حسابرسی خودکار",
      },
      {
        id: 20,
        module: "زیرماژول حقوق و دستمزد",
        description:
          "محاسبه اتوماتیک حقوق، مزایا، کسورات، بیمه و مالیات کارکنان بر اساس قوانین",
        basic: false,
        business: "استاندارد + گزارش‌های قانونی",
        enterprise: "کاملاً سفارشی و ادغام کامل با HRM",
      },
      {
        id: 21,
        module: "انبارداری",
        description:
          "ثبت و پیگیری موجودی کالاها، مدیریت سفارشات داخلی و اعلان‌های کسری موجودی",
        basic: false,
        business: "ثبت و پیگیری موجودی، مدیریت سفارشات داخلی",
        enterprise: "مدیریت هوشمند انبار + QR/Barcode",
      },
      {
        id: 22,
        module: "مدیریت هوشمند انبار",
        description:
          "استفاده از QR/Barcode برای ورود و خروج کالا و مدیریت دقیق فضای انبار",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        id: 23,
        module: "محدودیت تعریف محصول",
        description:
          "حداکثر تعداد محصولاتی که می‌توان در کاتالوگ و انبار تعریف و مدیریت کرد",
        basic: "۲۵ عدد",
        business: "۲۵۰ عدد",
        enterprise: "نامحدود",
      },
      {
        id: 24,
        module: "ویژگی‌های پیشرفته محصولات",
        description:
          "تگ‌گذاری هوشمند، جستجوی پیشرفته، گالری ویدئو/تصویر و پشتیبانی از طرح‌های ۳D",
        basic: "تگ‌گذاری دستی",
        business: "تگ‌گذاری و جستجوی هوشمند (AI Assisted)، گالری تصویر",
        enterprise:
          "تگ‌گذاری و جستجوی هوشمند (AI Assisted)، ساخت تصویر و ویدئو با AI، پشتیبانی از طرح‌های سه‌بعدی",
      },
      {
        id: 25,
        module: "قیمت‌گذاری و نرخ ارز",
        description:
          "تعریف سیستم قیمت‌گذاری چندسطحی، اعمال تخفیف خودکار و مدیریت نرخ تبدیل ارز",
        basic: "قیمت‌گذاری پویا (Multi-Tier) بر اساس ۱ نرخ ارز (دستی)",
        business: "قیمت‌گذاری پویا (Multi-Tier) بر اساس ۳ نرخ ارز (دستی)",
        enterprise:
          "قیمت‌گذاری هوشمند بر اساس تقاضا، نرخ ارز لحظه‌ای (API) و چندین واحد ارزی",
      },
      {
        id: 26,
        module: "یکپارچگی محصول با انبار",
        description:
          "همگام‌سازی لحظه‌ای داده‌های محصول، موجودی و قیمت بین ماژول‌های مختلف",
        basic: "همگام‌سازی Real-time",
        business: "همگام‌سازی Real-time",
        enterprise: "همگام‌سازی Real-time",
      },
      {
        id: 27,
        module: "مدیریت سفارش و ارسال",
        description:
          "ثبت خودکار سفارشات، پیگیری وضعیت ارسال و یکپارچگی با انبار",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        id: 28,
        module: "فروشگاه‌ساز آنلاین",
        description:
          "ساخت و طراحی فروشگاه اینترنتی همراه با مدیریت سفارشات و پنل مشتری",
        basic: "۳ قالب پیش‌فرض",
        business: "۳ قالب پیش‌فرض + قابلیت سفارش قالب اختصاصی",
        enterprise: "طراحی UI/UX کاملاً اختصاصی (Custom)",
      },
      {
        id: 29,
        module: "پشتیبانی و تیکت",
        description: "سیستم مدیریت تیکتینگ برای پیگیری درخواست‌های مشتریان",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        id: 30,
        module: "سئو پایه و تکنیکال",
        description:
          "بهینه‌سازی فنی وب‌سایت برای موتورهای جستجو (سرعت، نقشه سایت، robots.txt)",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        id: 31,
        module: "بلاگ",
        description:
          "ابزاری برای تولید محتوا، ویرایشگر پیشرفته، زمان‌بندی انتشار و مدیریت نظرات",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        id: 32,
        module: "مدیریت رسانه‌ها",
        description:
          "مدیریت متمرکز فایل‌ها، تصاویر و ویدئوهای استفاده شده در پنل و فروشگاه",
        basic: true,
        business: true,
        enterprise: true,
      },
    ],
  },
];

const categories3: FeatureCategory[] = [
  {
    title: "مدیریت ارتباط و توسعه",
    rows: [
      {
        id: 33,
        module: "ارسال پیامک و ایمیل",
        description:
          "امکان ارسال ایمیل‌های مارکتینگ و اتصال به سامانه‌های پیامکی (یکپارچگی کاوه نگار)",
        basic: false,
        business: "ایمیل و پیامک",
        enterprise: "ایمیل و پیامک",
      },
      {
        id: 34,
        module: "مدیریت فروش شبکه‌ای و رفرال",
        description:
          "ایجاد و ردیابی کدهای معرف (Referral) برای پاداش‌دهی به مشتریان و کارکنان",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        id: 35,
        module: "گزارش‌دهی و تحلیل",
        description:
          "ابزاری برای تحلیل جامع داده‌ها، گزارش‌های سفارشی و داشبوردهای بصری",
        basic: false,
        business: "تحلیل جامع داده‌ها، گزارش‌های سفارشی",
        enterprise: "تحلیل، شبیه‌سازی و پیش‌بینی هوش مصنوعی",
      },
      {
        id: 36,
        module: "منابع انسانی (HRM)",
        description: "مدیریت اطلاعات کارکنان، حضور و غیاب، و ارزیابی عملکرد",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        id: 37,
        module: "وقت‌دهی آنلاین",
        description:
          "سیستم رزرو آنلاین وقت برای مشتریان، هماهنگی با تقویم و اطلاع‌رسانی خودکار",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        id: 38,
        module: "ربات فروش",
        description:
          "ارتباط خودکار، پاسخگویی به سؤالات و ثبت سفارش از طریق پلتفرم‌های پیام‌رسان",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        id: 39,
        module: "مدیریت شبکه‌های مجازی",
        description:
          "ابزاری برای مدیریت، برنامه‌ریزی و آنالیز محتوای شبکه‌های اجتماعی",
        basic: false,
        business: "فقط کانال تلگرام و لینکدین",
        enterprise: "اینستاگرام، تلگرام، لینکدین و X",
      },
      {
        id: 40,
        module: "دستیار هوش مصنوعی (AI)",
        description:
          "استفاده از مدل‌های هوش مصنوعی برای تولید محتوا، خلاصه‌سازی، تحلیل آمار و استراتژی",
        basic: "Gemini/Claude Sonnet (محدود) - ۵ توکن",
        business: "Gemini/Claude Sonnet (محدود) - ۵۵ توکن",
        enterprise: "از ۱۰۰ توکن (تمام مدل‌ها) + Midjourney",
      },
      {
        id: 41,
        module: "حقوقی، قراردادها و قوانین",
        description:
          "ثبت، آرشیو، مدیریت مستندات حقوقی، قراردادها و هشدار انقضا/تمدید",
        basic: false,
        business: "فقط قوانین و قراردادها",
        enterprise: "تمامی موارد",
      },
    ],
  },
];

const categories4: FeatureCategory[] = [
  {
    title: "یکپارچه‌سازی و اکوسیستم",
    rows: [
      {
        id: 42,
        module: "درگاه‌های پرداخت (مجازی و کریپتو)",
        description:
          "اتصال به درگاه‌های پرداخت ریالی، بین‌المللی و قابلیت تراکنش با سولانا",
        basic: false,
        business: "زرین‌پال، PayPal و اسنپ‌پی",
        enterprise: "زرین‌پال، PayPal، سولانا و اسنپ‌پی",
      },
      {
        id: 43,
        module: "اتصال به Mailchimp",
        description: "همگام‌سازی لیست‌ها و داده‌ها با سرویس‌های ایمیل مارکتینگ",
        basic: false,
        business: "پرداخت درون‌برنامه‌ای",
        enterprise: "رایگان",
      },
      {
        id: 44,
        module: "اتصال به انبارداری سپیدار",
        description: "همگام‌سازی دوطرفه موجودی، قیمت و کالاهای جدید",
        basic: false,
        business: "پرداخت درون‌برنامه‌ای",
        enterprise: "پرداخت درون‌برنامه‌ای",
      },
      {
        id: 45,
        module: "اتصال به حسابداری دشت",
        description: "همگام‌سازی دوطرفه موجودی، قیمت، فاکتورها و طرف حساب",
        basic: false,
        business: "پرداخت درون‌برنامه‌ای",
        enterprise: "پرداخت درون‌برنامه‌ای",
      },
      {
        id: 46,
        module: "اتصال به ایمالز",
        description: "تولید فید اختصاصی API و به‌روزرسانی خودکار موجودی و قیمت",
        basic: false,
        business: "پرداخت درون‌برنامه‌ای",
        enterprise: "پرداخت درون‌برنامه‌ای",
      },
      {
        id: 47,
        module: "اتصال به ترب",
        description: "تولید فید اختصاصی API و به‌روزرسانی خودکار موجودی و قیمت",
        basic: false,
        business: "پرداخت درون‌برنامه‌ای",
        enterprise: "پرداخت درون‌برنامه‌ای",
      },
      {
        id: 48,
        module: "دسترسی به API",
        description:
          "فراهم کردن API برای اتصال Carbon به نرم‌افزارهای داخلی یا خارجی سازمان",
        basic: false,
        business: "محدود (با نرخ درخواست مشخص)",
        enterprise: "نامحدود و سفارشی",
      },
    ],
  },
];

const categories5: FeatureCategory[] = [
  {
    title: "قابلیت‌های ویژه و خدمات ارزش افزوده",
    rows: [
      {
        id: 49,
        module: "کربن‌کوین و توکن وفاداری",
        description:
          "توکن داخلی برای گیمیفیکیشن، پاداش، وفاداری و پرداخت‌های خرد درون‌برنامه‌ای",
        basic: false,
        business: "۱۰ CarbonCoin اولیه",
        enterprise: "۱۰۰۰ CarbonCoin اولیه",
      },
      {
        id: 50,
        module: "خدمات مشاوره حقوقی",
        description:
          "دسترسی به مشاوره (چت/صوتی/تصویری/حضوری) با وکلای تأییدشده",
        basic: "فقط پرداخت درون‌برنامه‌ای (PPU)",
        business: "پرداخت درون‌برنامه‌ای + تخفیف",
        enterprise: "از ۱ ساعت مشاوره رایگان ماهانه + PPU",
      },
      {
        id: 51,
        module: "خدمات مشاوره کسب‌وکار",
        description: "دسترسی به مشاوران استراتژی، عملیات و مالی",
        basic: "فقط پرداخت درون‌برنامه‌ای (PPU)",
        business: "پرداخت درون‌برنامه‌ای + تخفیف",
        enterprise: "از ۲ ساعت مشاوره رایگان ماهانه + PPU",
      },
      {
        id: 52,
        module: "خدمات مشاوره مارکتینگ",
        description:
          "دسترسی به مشاوران تدوین استراتژی بازاریابی، برندینگ و تحلیل کمپین‌ها",
        basic: "فقط پرداخت درون‌برنامه‌ای (PPU)",
        business: "پرداخت درون‌برنامه‌ای + تخفیف",
        enterprise: "از ۴ ساعت مشاوره رایگان ماهانه + PPU",
      },
      {
        id: 53,
        module: "باشگاه مدیران Carbon",
        description:
          "دسترسی به جامعه تخصصی، منابع آموزشی، فرصت‌های شبکه‌سازی و سرمایه‌گذاری",
        basic: false,
        business: "عضویت در کانال تلگرام VIP",
        enterprise:
          "عضویت در کانال VIP، بن‌های خرید و تخفیف، منابع و کرش‌کورس‌های آموزشی، دسترسی به موقعیت‌های سرمایه‌گذاری و مشاوره‌های ویژه",
      },
      {
        id: 54,
        module: "خدمات برون‌سپاری مارکتینگ",
        description:
          "خدمات تولید محتوا، ادمینی و مدیریت شبکه‌های اجتماعی توسط تیم انسانی Carbon.",
        basic: " (سفارشی/بر اساس پکیج)",
        business: " (سفارشی/بر اساس پکیج)",
        enterprise: " (سفارشی/بر اساس پکیج)",
      },
      {
        id: 55,
        module: "برندسازی اختصاصی",
        description:
          "حذف کامل لوگوی Carbon و استفاده از برند، دامنه و نام اختصاصی مشتری (White Label).",
        basic: " (سفارشی/بر اساس پکیج)",
        business: " (سفارشی/بر اساس پکیج)",
        enterprise: " (سفارشی/بر اساس پکیج)",
      },
      {
        id: 56,
        module: "پشتیبانی کربن",
        description: "سطح خدمات پشتیبانی و تضمین زمان پاسخگویی (SLA).",
        basic: "فقط تیکت و تلگرام با تاخیر پاسخگویی 2 الی 4 ساعت",
        business:
          "تیکت و تلگرام پاسخگویی تا 30 دقیقه + تماس تلفنی در ساعات اداری",
        enterprise:
          "24/7 از تمامی راه‌ها پاسخگویی آنی + پشتیبانی مدیر حساب اختصاصی (Dedicated Account Manager)",
      },
    ],
  },
];

const allCategories = [
  ...categories1,
  ...categories2,
  ...categories3,
  ...categories4,
  ...categories5,
];

// ─── Helper ───────────────────────────────────────────────────────────────────
function renderCell(value: FeatureValue) {
  if (value === true) {
    return (
      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
    );
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-500 mx-auto" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual",
  );

  return (
    <>
      {/* ===== SEO Meta Tags ===== */}
      <Head>
        <title>
          مقایسه پلن‌های کربن | قیمت و امکانات پایه، بیزینس و اینترپرایز
        </title>
        <meta
          name="description"
          content="مقایسه کامل پلن‌های پایه، بیزینس و اینترپرایز کربن. مشاهده تمام امکانات، قابلیت‌ها و قیمت‌ها در یک نگاه. بهترین پلن را انتخاب کنید."
        />
        <meta
          name="keywords"
          content="پلن کربن, قیمت کربن, مقایسه پلن, بیزینس, اینترپرایز, پنل مدیریت, CRM, ERP"
        />
        <meta property="og:title" content="مقایسه پلن‌های کربن" />
        <meta
          property="og:description"
          content="تمام امکانات و قابلیت‌های کربن در یک نگاه"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/pricing" />
      </Head>

      {/* ===== Schema Markup ===== */}
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Table",
            name: "مقایسه پلن‌های کربن",
            description: "مقایسه کامل پلن‌های پایه، بیزینس و اینترپرایز",
            about: {
              "@type": "Thing",
              name: "پلن‌های کربن",
            },
          }),
        }}
      />

      <section className="py-16 bg-background" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== دکمه بازگشت - sticky ===== */}
          <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4 -mt-4 -mx-4 px-4 border-b border-border/50 mb-6">
            <div className="flex gap-2 justify-end">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg transition-all"
              >
                هم‌اکنون نیاز به مشاوره دارید
                <Phone className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg transition-colors"
              >
                بازگشت
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ===== Header ===== */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              مقایسه پلن‌ها
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              تمام امکانات و قابلیت‌های کربن در یک نگاه
            </p>

            <div className="inline-flex items-center gap-3 bg-card p-1.5 rounded-full border">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={billingCycle === "monthly"}
              >
                ماهانه
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
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
              </button>
            </div>
          </div>

          {/* ===== Tables ===== */}
          <div className="space-y-8">
            {allCategories.map((category, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="bg-primary/10 px-6 py-4 border-b">
                  <h2 className="text-lg font-bold text-primary">
                    {index + 1}. {category.title}
                  </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table
                    className="w-full min-w-[1000px] divide-y divide-border"
                    aria-label={`جدول ${category.title}`}
                    role="table"
                  >
                    <thead className="bg-muted/30">
                      <tr>
                        <th
                          scope="col"
                          className="sticky right-0 z-10 bg-background px-4 py-3 text-right text-sm font-semibold min-w-[160px] text-foreground shadow-[4px_0_10px_-5px_rgba(0,0,0,0.05)]"
                        >
                          ماژول / قابلیت
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-sm font-semibold min-w-[220px]"
                        >
                          توضیحات ماژول (امکانات اصلی)
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center text-sm font-semibold w-[150px] bg-background/50"
                        >
                          <div className="flex flex-col gap-0.5">
                            <span>پلن پایه (Basic)</span>
                            <span className="text-xs font-normal text-muted-foreground">
                              {billingCycle === "monthly"
                                ? "۴۵۰ هزار ت"
                                : "۲۷۰ هزار ت"}
                            </span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center text-sm font-semibold w-[150px] bg-primary/5"
                        >
                          <div className="flex flex-col gap-0.5">
                            <span>پلن بیزینس (Business)</span>
                            <span className="text-xs font-normal text-muted-foreground">
                              {billingCycle === "monthly"
                                ? "۱٫۲ میلیون ت"
                                : "۷۲۰ هزار ت"}
                            </span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center text-sm font-semibold w-[150px] bg-gradient-to-br from-amber-500/10 to-yellow-500/10"
                        >
                          <div className="flex flex-col gap-0.5">
                            <span>VIP (Enterprise) پلن</span>
                            <span className="text-xs font-normal text-muted-foreground">
                              تماس بگیرید
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-background">
                      {category.rows.map((row) => (
                        <tr
                          key={row.id}
                          className="hover:bg-muted/10 transition-colors"
                        >
                          <td
                            scope="row"
                            className="sticky right-0 z-10 bg-background px-4 py-3 text-sm font-medium shadow-[4px_0_10px_-5px_rgba(0,0,0,0.05)]"
                          >
                            {row.module}
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground">
                            {row.description}
                          </td>
                          <td className="px-4 py-3 text-center">
                            {renderCell(row.basic)}
                          </td>
                          <td className="px-4 py-3 text-center bg-primary/5">
                            {renderCell(row.business)}
                          </td>
                          <td className="px-4 py-3 text-center bg-gradient-to-br from-amber-500/10 to-yellow-500/10">
                            {renderCell(row.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* خط جداکننده بین بخش‌ها */}
                {index < allCategories.length - 1 && (
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* ===== کارت‌های قیمت‌گذاری ===== */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                plan: "پایه",
                price: billingCycle === "monthly" ? "۴۵۰,۰۰۰" : "۲۷۰,۰۰۰",
                period:
                  billingCycle === "monthly" ? "ماهانه" : "ماهانه (سالانه)",
                cta: "شروع با پلن پایه",
                variant: "outline" as const,
              },
              {
                plan: "بیزینس",
                price: billingCycle === "monthly" ? "۱,۲۰۰,۰۰۰" : "۷۲۰,۰۰۰",
                period:
                  billingCycle === "monthly" ? "ماهانه" : "ماهانه (سالانه)",
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
            ].map((item, idx) => (
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
                    {item.price === "سفارشی"
                      ? item.price
                      : `${item.price} تومان`}
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
        </div>
        <ScrollToTop />
      </section>
    </>
  );
}
