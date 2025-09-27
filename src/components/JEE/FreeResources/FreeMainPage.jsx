import React from "react";
import JeeFreeResources from "./JeeFreeResources";
import FreeFeaturesGrid from "./FreeFeaturesGrid";
import FreeHeroSection from "./FreeHeroSection";

export default function FreeMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <JeeFreeResources />
        <FreeFeaturesGrid />
        <FreeHeroSection />
      </div>
    </div>
  );
}
