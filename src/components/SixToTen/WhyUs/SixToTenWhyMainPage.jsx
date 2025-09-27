import React from "react";
import SixToTenWhyUs from "./SixToTenWhyUs";
import SixToTenStudyCompanionSection from "./SixToTenStudyCompanionSection";
import SixToTenTestimonialScroller from "./SixToTenTestimonialScroller";
import SixToTenComparisonTable from "./SixToTenComparisonTable";
import SixToTenQuestPixDifference from "./SixToTenQuestPixDifference";

export default function SixToTenWhyMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <SixToTenWhyUs />
        <SixToTenStudyCompanionSection />
        <SixToTenTestimonialScroller />
        <SixToTenComparisonTable />
        <SixToTenQuestPixDifference />
      </div>
    </div>
  );
}
