export function AboutHeroSection() {
  return (
    <section className="relative py-28 border-b border-border bg-background overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="about-dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" className="fill-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            آشنایی با تیم کربن
          </span>

          {/* عنوان */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            درباره{" "}
            <span className="bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-transparent">
              کربن
            </span>
          </h1>

          {/* خط جداکننده دکوری */}
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-border" />
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            <span className="h-px w-12 bg-border" />
          </div>

          {/* زیرعنوان */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            توانمندسازی کسب‌وکارها با{" "}
            <span className="text-foreground font-semibold">
              راهکارهای مدیریتی هوشمند
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
