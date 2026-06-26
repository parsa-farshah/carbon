export function AboutHeroSection() {
  return (
    <section className="relative py-24 border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* عنوان اصلی و بسیار بزرگ */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-tight">
            درباره کربن
          </h1>

          {/* متن دوم، کمی کوچکتر اما همچنان بزرگ و شاخص */}
          <h2 className="text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl text-primary leading-tight">
            توانمندسازی کسب‌وکارها با{" "}
            <span className="text-foreground">راهکارهای مدیریتی هوشمند</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
