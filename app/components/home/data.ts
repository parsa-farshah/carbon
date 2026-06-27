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

export interface Repository {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

export const repositories: Repository[] = [
  {
    id: 1,
    name: "مدیریت منابع انسانی",
    icon: FaUsers,
    color: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    id: 2,
    name: "باشگاه مشتریان",
    icon: FaGift,
    color: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 3,
    name: "سیستم مدیریت محتوا و اتوماسیون رسانه‌های اجتماعی",
    icon: FaBullhorn,
    color: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    id: 4,
    name: "حسابداری و امور مالی",
    icon: FaCalculator,
    color: "bg-blue-200 dark:bg-blue-900/40",
  },
  {
    id: 5,
    name: "فروشگاه آنلاین",
    icon: FaShoppingCart,
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 6,
    name: "ربات‌های فروش و تبلیغات در رسانه‌های اجتماعی",
    icon: FaRobot,
    color: "bg-red-100 dark:bg-red-900/30",
  },
  {
    id: 7,
    name: "سیستم مدیریت سفارشات",
    icon: FaClipboardList,
    color: "bg-violet-100 dark:bg-violet-900/30",
  },
  {
    id: 8,
    name: "سیستم مدیریت موجودی",
    icon: FaBoxes,
    color: "bg-red-200 dark:bg-red-900/50",
  },
  {
    id: 9,
    name: "سیستم فروش هوشمند و شبکه‌ای",
    icon: FaNetworkWired,
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 10,
    name: "سیستم پشتیبانی و تیکتینگ",
    icon: FaHeadset,
    color: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    id: 11,
    name: "سیستم تحلیل و آنالیز داده‌ها",
    icon: FaChartLine,
    color: "bg-lime-200 dark:bg-lime-900/40",
  },
];

export const row1 = repositories.slice(0, 6);
export const row2 = repositories.slice(6);
