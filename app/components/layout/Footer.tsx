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
    { icon: Play, label: "Google Play", href: "#" },
    { icon: Smartphone, label: "APK", href: "#" },
  ];

  const AppStoreIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52.226 52.226"
      className="w-5 h-5"
      fill="currentColor "
    >
      <g>
        <g>
          <path d="M36.802,1.055L36.747,0l-1.05,0.113c-0.103,0.011-10.252,1.234-10.948,12.581l-0.07,1.136l1.136-0.077    C25.931,13.745,37.426,12.828,36.802,1.055z M34.821,2.322c-0.191,6.838-5.511,8.74-7.953,9.253    C27.798,4.93,32.617,2.905,34.821,2.322z" />
          <path d="M46.584,37.517l-0.639-0.207c-3.867-1.25-6.464-4.792-6.464-8.814c0-3.578,2.023-6.778,5.281-8.352l0.972-0.469    l-0.542-0.933c-0.232-0.4-2.401-3.943-6.983-5.116c-3.634-0.93-7.72-0.107-12.149,2.447c-1.875-1.138-8.103-4.418-13.058-1.13    c-0.97,0.536-11.251,6.695-5.9,23.313c0.157,0.372,3.888,9.113,8.303,12.387c1.191,1.138,4.237,2.56,7.718,0.187    c0.603-0.249,4.638-1.802,7.198,0.017c0.945,0.647,2.595,1.38,4.338,1.38c1.322,0,2.697-0.421,3.859-1.621    c0.542-0.469,5.493-4.888,8.066-11.888l0.075-0.204L46.584,37.517z M37.182,49.115l-0.077,0.073    c-2.193,2.303-5.518,0.1-5.641,0.018c-1.308-0.93-2.823-1.233-4.244-1.233c-2.579,0-4.847,0.999-4.992,1.064l-0.163,0.092    c-3.019,2.107-5.086,0.253-5.305,0.042l-0.118-0.101c-3.993-2.912-7.663-11.507-7.668-11.51    C3.966,21.992,13.56,16.9,13.968,16.693l0.11-0.065c4.647-3.12,11.327,1.396,11.393,1.441l0.533,0.366l0.552-0.333    c4.16-2.515,7.914-3.37,11.157-2.539c2.642,0.676,4.326,2.327,5.15,3.342c-3.347,2.051-5.381,5.63-5.381,9.591    c0,4.556,2.735,8.604,6.902,10.365C41.819,45.122,37.231,49.074,37.182,49.115z" />
        </g>
      </g>
    </svg>
  );

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
            <ul className="space-y-6 text-sm text-base-content/70">
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
                  {/* App Store جدا */}
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-3 rounded-xl border bg-base-100 hover:border-primary transition-all text-center"
                  >
                    <AppStoreIcon />
                    <span className="text-[10px] font-medium">App Store</span>
                  </Link>

                  {/* بقیه لینک‌ها */}
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
