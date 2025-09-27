import React from "react";
import SixToTenFreeResources from "./SixToTenFreeResources";
import SixToTenFreeFeaturesGrid from "./SixToTenFreeFeaturesGrid";
import SixToTenFreeHeroSection from "./SixToTenFreeHeroSection";

export default function SixToTenFreeMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <SixToTenFreeResources />
        <SixToTenFreeFeaturesGrid />
        <SixToTenFreeHeroSection />
      </div>
    </div>
  );
}
