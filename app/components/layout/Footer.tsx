import React from "react";
import Link from "next/link";
// ایمپورت آیکون‌های جدید از react-icons
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { MonitorSmartphone, Apple, Play, Smartphone } from "lucide-react";

// کامپوننت ThemeToggle import شده
import { ThemeToggle } from "./../theme-toggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // آرایه آیکون‌های شبکه‌های اجتماعی با استفاده از react-icons
  const socialLinks = [
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "#" },
  ];

  const downloadLinks = [
    { icon: MonitorSmartphone, label: "Web App", href: "#" },
    { icon: Apple, label: "App Store", href: "#" },
    { icon: Play, label: "Google Play", href: "#" },
    { icon: Smartphone, label: "APK", href: "#" },
  ];

  return (
    <footer className="relative bg-base-100 pt-20 pb-6 overflow-hidden border-t border-base-200">
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* بخش اصلی متن */}
          <div className="lg:col-span-2">
            <div className="relative inline-block mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                تحول آفرینی در کسب‌وکار
              </h3>
              <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <p className="text-base-content/80 text-lg leading-relaxed mb-8 max-w-2xl">
              ما در کربن، در حال ایجاد انقلابی در نحوه مدیریت و توسعه هوشمند کسب
              و کارها هستیم. با ابزارهای پیشرفته و راهکارهای نوآورانه، کسب و کار
              شما را به سطوح بالاتری ارتقا می‌دهیم.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/learn-more"
                className="btn btn-outline btn-primary rounded-full border-2 px-8 py-3 h-auto min-h-0"
              >
                بیشتر بدانید
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline btn-secondary rounded-full border-2 px-8 py-3 h-auto min-h-0"
              >
                تماس با ما
              </Link>
            </div>
          </div>

          {/* کارت سوشال مدیا */}
          <div className="bg-base-200/30 backdrop-blur-md p-6 rounded-2xl border border-base-300/50">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-2">CARBON</h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
              <p className="text-sm text-base-content/70 mb-6">
                به جامعه در حال رشد ما از کسب و کارهایی که عملیات خود را متحول
                می‌کنند، بپیوندید
              </p>

              <div className="grid grid-cols-2 gap-3 w-full mb-6">
                <Link
                  href="/register"
                  className="btn btn-outline btn-primary btn-sm w-full rounded-full border-2"
                >
                  ثبت نام
                </Link>
                <Link
                  href="/login"
                  className="btn btn-outline btn-secondary btn-sm w-full rounded-full border-2"
                >
                  ورود
                </Link>
              </div>

              <div className="flex items-center w-full my-4">
                <div className="flex-grow h-px bg-base-300"></div>
                <span className="px-3 text-xs text-base-content/50 uppercase font-medium">
                  ما را دنبال کنید
                </span>
                <div className="flex-grow h-px bg-base-300"></div>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="p-3 border border-base-300 rounded-full hover:border-primary hover:bg-primary/10 transition-all text-base-content hover:text-primary"
                  >
                    {/* استفاده از آیکون به عنوان کامپوننت */}
                    <item.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* بخش پایین فوتر */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 pt-12 border-t border-base-200">
          <div>
            <div className="mb-4 inline-block">
              <h4 className="font-bold text-lg">ناوبری</h4>
              <div className="h-0.5 w-full bg-primary mt-1"></div>
            </div>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <Link href="/about" className="hover:text-primary">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-primary">
                  راهنما و مستندات
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-primary">
                  پلن‌ها و تعرفه‌ها
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 inline-block">
              <h4 className="font-bold text-lg">شرکای ما</h4>
              <div className="h-0.5 w-full bg-primary mt-1"></div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-base-300">
                <p className="text-xs text-base-content/70 leading-relaxed mb-3">
                  با ما شریک شوید تا دسترسی خود را گسترش دهید و کسب و کار خود را
                  با پلتفرم نوآورانه ما رشد دهید.
                </p>
                <Link
                  href="/become-partner"
                  className="inline-block text-sm font-bold text-base-content hover:text-primary hover:underline"
                >
                  شریک ما شوید →
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-block">
                <h4 className="font-bold text-lg">دانلود اپلیکیشن</h4>
                <div className="h-0.5 w-full bg-primary mt-1"></div>
              </div>
              <div className="bg-base-200/50 p-6 rounded-2xl border border-base-300 mb-6">
                <p className="text-sm text-base-content/70 mb-6">
                  با اپلیکیشن موبایل ما به داشبورد خود دسترسی داشته باشید، وظایف
                  را مدیریت کنید و عملکرد را در حین حرکت پیگیری کنید.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {downloadLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl border bg-base-100 hover:border-primary transition-all text-center"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-[10px] font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-base-200 flex items-center justify-between">
              <span className="text-sm text-base-content/70">تغییر تم</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-base-content/50">
          <p>Carbon © {currentYear} تمامی حقوق برای کربن محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
