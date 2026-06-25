import Link from "next/link";
import { Archive } from "lucide-react";
import {
  FaUsers,
  FaGift,
  FaBullhorn,
  FaCalculator,
  FaShoppingCart,
  FaRobot,
  FaClipboardList,
  FaBoxes,
  FaNetworkWired,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";
import type { IconType } from "react-icons";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Repository {
  id: number;
  name: string;
  icon: IconType;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const repositories: Repository[] = [
  {
    id: 1,
    name: "مدیریت منابع انسانی",
    icon: FaUsers,
  },
  {
    id: 2,
    name: "باشگاه مشتریان",
    icon: FaGift,
  },
  {
    id: 3,
    name: "سیستم مدیریت محتوا و اتوماسیون رسانه‌های اجتماعی",
    icon: FaBullhorn,
  },
  {
    id: 4,
    name: "حسابداری و امور مالی",
    icon: FaCalculator,
  },
  {
    id: 5,
    name: "فروشگاه آنلاین",
    icon: FaShoppingCart,
  },
  {
    id: 6,
    name: "ربات‌های فروش و تبلیغات در رسانه‌های اجتماعی",
    icon: FaRobot,
  },
  {
    id: 7,
    name: "سیستم مدیریت سفارشات",
    icon: FaClipboardList,
  },
  {
    id: 8,
    name: "سیستم مدیریت موجودی",
    icon: FaBoxes,
  },
  {
    id: 9,
    name: "سیستم فروش هوشمند و شبکه‌ای",
    icon: FaNetworkWired,
  },
  {
    id: 10,
    name: "سیستم پشتیبانی و تیکتینگ",
    icon: FaHeadset,
  },
  {
    id: 11,
    name: "سیستم تحلیل و آنالیز داده‌ها",
    icon: FaChartLine,
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface RepositoryCardProps {
  item: Repository;
  index: number;
}

function RepositoryCard({ item, index }: RepositoryCardProps) {
  const IconComponent = item.icon;

  return (
    <div
      className="group animate-fadeSlideUp"
      style={{ animationDelay: `${(index + 1) * 50}ms` }}
    >
      <div className="relative h-full bg-card border border-border rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        {/* Icon */}
        <div className="shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
          <IconComponent className="w-8 h-8 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
        </div>

        {/* Name */}
        <p className="text-xs font-medium text-center text-foreground/80 group-hover:text-primary transition-colors duration-300 leading-snug">
          {item.name}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section header
// ---------------------------------------------------------------------------

function SectionHeader() {
  return (
    <div className="text-center mb-14 space-y-4">
      <div className="inline-flex items-center gap-3 justify-center">
        <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Archive className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          امکانات و ابزارهای کربن پنل
        </h2>
      </div>
      <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
        ساده سازی و هوشمند سازی فرایندها در کسب و کار، این یعنی قدرت بیشتر برای
        تصمیم گیری بهتر!
      </p>
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
            id="repo-pattern-1"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="2" height="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#repo-pattern-1)" />
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
            id="repo-pattern-2"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="2" height="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#repo-pattern-2)" />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const RepositorySection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundDecorations />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {repositories.map((item, index) => (
            <RepositoryCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <span>مشاهده بیشتر</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 rotate-180"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;
