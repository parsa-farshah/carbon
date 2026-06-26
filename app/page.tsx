import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "./components/home/hero-section";
import { WhyCarbonSection } from "./components/home/why-carbon-section";
import RepositorySection from "./components/home/RepositoryCard";
import PricingSection from "./components/home/PricingSection";
import ContactSection from "./components/home/ContactSection";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "پروژه مهندسی با Next.js",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyCarbonSection />
      <RepositorySection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
