import React from "react";
import { AboutHeroSection } from "../components/about/AboutHeroSection";
import { AboutStorySection } from "../components/about/AboutStorySection";
import { AboutValuesSection } from "../components/about/AboutValuesSection";
import { Header } from "../components/layout/header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "درباره ما | کربن",
  description: "توانمندسازی کسب‌وکارها با راهکارهای مدیریتی هوشمند",
};

const page = () => {
  return (
    <main>
      <Header />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <Footer />
    </main>
  );
};

export default page;
