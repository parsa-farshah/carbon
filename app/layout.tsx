// src/app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/layout/header";
import Footer from "./components/layout/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "عنوان پیش‌فرض",
    template: "%s | نام سایت",
  },
  description: "توضیحات سایت",
  keywords: ["کلمه کلیدی 1", "کلمه کلیدی 2"],
  authors: [{ name: "نام شما" }],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://yourdomain.com",
    siteName: "نام سایت",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
