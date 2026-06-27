"use client";

import Link from "next/link";
import { Phone, ChevronLeft } from "lucide-react";

export function StickyButtons() {
  return (
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
  );
}
