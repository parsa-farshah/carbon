import { ShieldCheck, Lock, Palette, Languages } from "lucide-react";

export function CarbonFeatures() {
  return (
    <section className="py-20 2xl:container 2xl:mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* هدر */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            مزیت‌های کربن
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            پلتفرمی که نیازهای امروز کسب‌وکار شما را با امنیت و انعطاف برطرف
            می‌کند
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* چند زبانه */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                <Languages size={20} className="text-blue-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base leading-relaxed">
                چند زبانه
              </h3>
            </div>
          </div>

          {/* احراز هویت */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base leading-relaxed">
                احراز هویت
              </h3>
            </div>
          </div>

          {/* داده رمزگذاری‌شده */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/40 flex items-center justify-center shrink-0">
                <Lock size={20} className="text-green-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base leading-relaxed">
                داده رمزگذاری‌شده
              </h3>
            </div>
          </div>

          {/* پشتیبانی کامل */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-950/40 flex items-center justify-center shrink-0">
                <Palette size={20} className="text-yellow-500" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base leading-relaxed">
                پشتیبانی کامل
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
