import { BookOpen, Clock, ArrowLeft, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "۱۰ اشتباه رایج در مدیریت مالی کسب‌وکارهای کوچک",
    description:
      "بسیاری از کسب‌وکارها به دلیل اشتباهات ساده در مدیریت مالی شکست می‌خورند. در این مقاله رایج‌ترین آن‌ها را بررسی می‌کنیم.",
    readTime: "۸ دقیقه",
    category: "مالی",
    categoryColor:
      "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    cover: "/images/about.webp",
    date: "۱۵ خرداد ۱۴۰۵",
    featured: true,
  },
  {
    id: 2,
    title: "چطور یک برنامه بازاریابی محتوا بنویسیم؟",
    description:
      "راهنمای گام‌به‌گام نوشتن استراتژی محتوا برای کسب‌وکارهای B2B و B2C.",
    readTime: "۶ دقیقه",
    category: "بازاریابی",
    categoryColor:
      "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    cover: "/images/about.webp",
    date: "۱۰ خرداد ۱۴۰۵",
    featured: false,
  },
  {
    id: 3,
    title: "مدیریت تیم‌های ریموت در سال ۱۴۰۵",
    description:
      "تجربه‌ها و ابزارهای موثر برای مدیریت تیم‌های دورکار و افزایش بهره‌وری.",
    readTime: "۵ دقیقه",
    category: "مدیریت",
    categoryColor:
      "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    cover: "/images/about.webp",
    date: "۵ خرداد ۱۴۰۵",
    featured: false,
  },
  {
    id: 4,
    title: "رشد فروش با استفاده از داده‌های مشتریان",
    description:
      "چطور با تحلیل رفتار مشتریان، نرخ تبدیل را افزایش دهید و فروش بیشتری داشته باشید.",
    readTime: "۷ دقیقه",
    category: "فروش",
    categoryColor:
      "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400",
    cover: "/images/about.webp",
    date: "۱ خرداد ۱۴۰۵",
    featured: false,
  },
];

export function ArticlesSection() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section className="py-24">
      <div className="2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
        {/* هدر */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen size={16} />
              <span>مقالات کربن</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              آخرین مقالات
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl leading-relaxed">
              راهنماها و تحلیل‌های کاربردی برای رشد کسب‌وکار شما
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all shrink-0"
          >
            <span>همه مقالات</span>
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* گرید */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* مقاله ویژه */}
          {featured && (
            <Link
              href={`/articles/${featured.id}`}
              className="group lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    <TrendingUp size={12} />
                    ویژه
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${featured.categoryColor}`}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 leading-relaxed group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {featured.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{featured.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{featured.readTime} مطالعه</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* مقالات کوچک */}
          <div className="flex flex-col gap-4">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-all flex gap-4 p-4"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={article.cover}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="96px"
                  />
                </div>
                <div className="flex flex-col justify-between min-w-0 py-1">
                  <div>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-2 leading-relaxed line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
