import React from "react";
import SixHeroSection from "./SixHeroSection";
import SixCarousel from "./SixCarousel";
import SixFeatureGrid from "./SixFeatureGrid";
import SixWhyChooseQuestPix from "./SixWhyChooseQuestPix";
import SixTestimonials from "./SixTestimonials";
import SixLearningFeatures from "./SixLearningFeatures";
import SixCoachingSection from "./SixCoachingSection";
import Courses from "./Courses";
import SixEnroll from "./SixEnroll";
import SixFAQSection from "./SixFAQSection";

export default function SixToTenPage() {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
          <SixHeroSection />
          <SixCarousel />
          <SixFeatureGrid />
        </div>
      </div>

      <SixWhyChooseQuestPix />
      <div className="w-full overflow-hidden">
        <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
          <SixTestimonials />
        </div>
      </div>

      <SixLearningFeatures />
      <div className="w-full overflow-hidden">
        <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
          <SixCoachingSection />
          <Courses />
          <SixEnroll />
          <SixFAQSection />
        </div>
      </div>
    </div>
  );
}
