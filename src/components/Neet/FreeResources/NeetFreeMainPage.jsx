import React from "react";
import NeetFreeResources from "./NeetFreeResources";
import NeetFreeFeaturesGrid from "./NeetFreeFeaturesGrid";
import NeetFreeHeroSection from "./NeetFreeHeroSection";

export default function NeetFreeMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <NeetFreeResources />
        <NeetFreeFeaturesGrid />
        <NeetFreeHeroSection />
      </div>
    </div>
  );
}
