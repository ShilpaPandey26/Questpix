import React from "react";
import HeroSection from "./HeroSection";
import Carousel from "./Carousel";
import FeaturesSection from "./FeaturesSection";
import Testimonials from "./Testimonials";
import AppFeatures from "./AppFeatures";
import Learning from "./Learning";
import AppDownloadSection from "./AppDownloadSection";

export default function LandingPage() {
  return (
      <div className="w-full  overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <HeroSection />
        <Carousel />
        <FeaturesSection />
        <Testimonials />
        <AppFeatures />
        <Learning />
        <AppDownloadSection />
      </div>
    </div>
  );
}
