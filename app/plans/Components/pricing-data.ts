export interface FeatureRow {
  id: number;
  module: string;
  description: string;
  basic: string | boolean;
  business: string | boolean;
  enterprise: string | boolean;
}

export interface FeatureCategory {
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

// تمام دیتاهای categories1 تا categories5 رو اینجا قرار بده
export const allCategories = [
  ...categories1,
  ...categories2,
  ...categories3,
  ...categories4,
  ...categories5,
];
