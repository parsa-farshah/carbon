import { Play, Clock, Headphones, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const podcasts = [
  {
    id: 1,
    title: "چطور یک تیم فروش قوی بسازیم؟",
    description:
      "در این اپیزود درباره ساختار تیم فروش، استخدام نیروی مناسب و ایجاد فرهنگ فروش موثر صحبت می‌کنیم.",
    duration: "۴۲ دقیقه",
    episode: "اپیزود ۱۲",
    cover: "/images/podcast/ep12.png",
    tag: "فروش",
    tagColor: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    id: 2,
    title: "مدیریت جریان نقدی در کسب‌وکارهای کوچک",
    description:
      "یاد بگیرید چطور جریان نقدی کسب‌وکارتان را کنترل کنید و از بحران‌های مالی جلوگیری کنید.",
    duration: "۳۸ دقیقه",
    episode: "اپیزود ۱۱",
    cover: "/images/podcast/ep11.png",
    tag: "مالی",
    tagColor:
      "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
  },
  {
    id: 3,
    title: "استراتژی‌های رشد در بازار رقابتی",
    description:
      "چگونه در بازاری پر از رقیب، جایگاه خودتان را تثبیت کنید و رشد پایدار داشته باشید.",
    duration: "۵۵ دقیقه",
    episode: "اپیزود ۱۰",
    cover: "/images/podcast/ep10.png",
    tag: "استراتژی",
    tagColor:
      "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
  },
];

export function PodcastSection() {
  return (
    <section className="py-24 ">
      <div className="2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
        {/* هدر */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Headphones size={16} />
              <span>پادکست کربن</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              پادکست مدیریت کسب‌وکار
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl leading-relaxed">
              هر هفته یک اپیزود جدید درباره مدیریت، فروش، مالی و رشد کسب‌وکار
            </p>
          </div>
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all shrink-0"
          >
            <span>همه اپیزودها</span>
            <ArrowLeft size={16} />
          </Link>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-all"
            >
              {/* کاور */}
              <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <Image
                  src={podcast.cover}
                  alt={podcast.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* دکمه پلی */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play
                      size={20}
                      className="text-zinc-900 fill-zinc-900 mr-[-2px]"
                    />
                  </button>
                </div>
                {/* تگ */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${podcast.tagColor}`}
                  >
                    {podcast.tag}
                  </span>
                </div>
              </div>

              {/* محتوا */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium">
                    {podcast.episode}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={13} />
                    <span>{podcast.duration}</span>
                  </div>
                </div>

                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-relaxed line-clamp-2">
                  {podcast.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {podcast.description}
                </p>

                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                  <Play size={15} className="fill-current" />
                  <span>پخش اپیزود</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* بنر اشتراک */}
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-white mb-2">
              مشترک پادکست شوید
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              با اشتراک در پادکست، هر اپیزود جدید را زودتر از همه دریافت کنید
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-700 hover:text-white bg-transparent"
            >
              <Headphones size={16} className="ml-2" />
              اسپاتیفای
            </Button>
            <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
              اشتراک در پادکست
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
