import { Metadata } from "next";
import HeroSection from "./components/home/hero-section";
import { WhyCarbonSection } from "./components/home/why-carbon-section";
import RepositorySection from "./components/home/RepositoryCard";
import PricingSection from "./components/home/PricingSection";
import ContactSection from "./components/home/ContactSection";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Header } from "./components/layout/header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "پروژه مهندسی با Next.js",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyCarbonSection />
      <RepositorySection />
      <PricingSection />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
