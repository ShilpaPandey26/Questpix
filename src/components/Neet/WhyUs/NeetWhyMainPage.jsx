import React from "react";
import NeetWhyUs from "./NeetWhyUs";
import NeetStudyCompanionSection from "./NeetStudyCompanionSection";
import NeetTestimonialScroller from "./NeetTestimonialScroller";
import NeetComparisonTable from "./NeetComparisonTable";
import NeetQuestPixDifference from "./NeetQuestPixDifference";

export default function NeetWhyMainPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <NeetWhyUs />
        <NeetStudyCompanionSection />
        <NeetTestimonialScroller />
        <NeetComparisonTable />
        <NeetQuestPixDifference />
      </div>
    </div>
  );
}
