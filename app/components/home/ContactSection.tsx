"use client";

import { Phone, Mail } from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// ---------------------------------------------------------------------------
// Background Pattern
// ---------------------------------------------------------------------------

const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-20 dark:opacity-10">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="contact-dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-dots)" />
    </svg>
  </div>
);

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

const ContactSection = () => {
  return (
    <section className="pb-24">
      <div className="2xl:container 2xl:mx-auto px-4">
        <div className="max-w-fit mx-auto relative rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8 md:p-12 overflow-hidden">
          <BackgroundPattern />

          <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-24">
            {/* قسمت راست */}
            <div className="flex flex-col items-start text-right space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">
                  پشتیبانی مشتری ۲۴/۷
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                آیا به کمک بیشتری نیاز دارید؟
              </h2>

              <p className="text-base text-muted-foreground max-w-md">
                تیم پشتیبانی متخصص ما آماده است تا به شما در مورد هر سؤال یا
                مشکلی که ممکن است داشته باشید، کمک کند.
              </p>
            </div>

            {/* قسمت چپ */}
            <div className="flex flex-col items-start space-y-6">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 flex items-center"
                dir="ltr"
              >
                <Phone className="h-5 w-5" />
                +1 (929) 314 30 73
              </Button>

              <div className="w-full">
                <p className="text-sm text-muted-foreground mb-4">
                  یا از طریق زیر با ما تماس بگیرید
                </p>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 rounded-full"
                  >
                    <FaWhatsapp className="h-5 w-5 text-green-500" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 rounded-full"
                  >
                    <FaTelegram className="h-5 w-5 text-blue-500" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 rounded-full"
                  >
                    <Mail className="h-5 w-5 text-orange-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
