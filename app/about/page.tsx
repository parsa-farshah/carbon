import React from "react";
import { AboutHeroSection } from "../components/about/AboutHeroSection";
import { AboutStorySection } from "../components/about/AboutStorySection";
import { AboutValuesSection } from "../components/about/AboutValuesSection";

export const metadata = {
  title: "درباره ما | کربن",
  description: "توانمندسازی کسب‌وکارها با راهکارهای مدیریتی هوشمند",
};

const page = () => {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
    </main>
  );
};

export default page;
