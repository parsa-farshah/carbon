import { Metadata } from "next";
import HeroSection from "./components/home/hero-section";
import { WhyCarbonSection } from "./components/home/why-carbon-section";
import PricingSection from "./components/home/PricingSection";
import ContactSection from "./components/home/ContactSection";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Header } from "./components/layout/header";
import Footer from "./components/layout/Footer";
import { CarbonFeatures } from "./components/home/CarbonFeatures";
import { MembershipBenefits } from "./components/home/MembershipBenefits";
import { PodcastSection } from "./components/home/PodcastSection";
import { ArticlesSection } from "./components/home/ArticlesSection";
import { TrustedBy } from "./components/home/trusted-by";
import { Testimonials } from "./components/home/Testimonials";
import { VipClub } from "./components/home/VipClub";
import RepositorySection from "./components/home/RepositoryCard";

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
      {/* <CarbonFeatures /> */}
      {/* <MembershipBenefits /> */}
      <RepositorySection />
      <PricingSection />
      <VipClub />
      <TrustedBy />
      <PodcastSection />
      <ArticlesSection />
      <Testimonials />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
