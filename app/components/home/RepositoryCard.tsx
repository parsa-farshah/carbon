import Link from "next/link";
import { Archive, ArrowLeft } from "lucide-react";
import { repositories, row1, row2 } from "./data";
import type { Repository } from "./data";
import MobileCarousel from "./MobileCarousel";

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
        <div
          className={`shrink-0 w-16 h-16 rounded-xl ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-105`}
        >
          <IconComponent className="w-8 h-8 text-foreground transition-transform duration-300 group-hover:scale-110" />
        </div>
        <p className="text-xs font-medium text-center text-foreground/80 group-hover:text-primary transition-colors duration-300 leading-snug">
          {item.name}
        </p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="text-center md:text-right mb-14 space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <div className="inline-flex items-center gap-3 justify-center md:justify-start">
            <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Archive className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold">
              امکانات و ابزارهای کربن پنل
            </h2>
          </div>
          <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground text-base leading-relaxed">
            ساده سازی و هوشمند سازی فرایندها در کسب و کار، این یعنی قدرت بیشتر
            برای تصمیم گیری بهتر!
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all shrink-0"
        >
          <span>بیشتر</span>
          <ArrowLeft size={16} />
        </Link>
      </div>
    </div>
  );
}

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

const RepositorySection = () => {
  return (
    <section className="relative pt-24 overflow-hidden 2xl:container 2xl:mx-auto">
      <BackgroundDecorations />

      <div className="relative z-10">
        <SectionHeader />

        {/* کاروسل در همه سایزها */}
        <MobileCarousel />

        {/* دکمه بیشتر در همه سایزها */}
        <div className="flex justify-center mt-6 md:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all shrink-0"
          >
            <span>بیشتر</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;
