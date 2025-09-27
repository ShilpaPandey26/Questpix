import React from "react";
import CrackNeetSection from "./CrackNeetSection";
import NeetCarousel from "./NeetCarousel";
import FeatureGrid from "./NeetFeatureGrid";
import NeetTestimonials from "./NeetTestimonials";
import QuestPixWork from "./NeetQuestPixWork";
import QuestPixFeatures from "./NeetQuestPixFeatures";
import NeetPrepLevels from "./NeetPrepLevels";
import NeetCoachingSection from "./NeetCoachingSection";
import NeetFAQSection from "./NeetFAQSection";
import NeetQuestPixSection from "./NeetQuestPixSection";


export default function NeetPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <CrackNeetSection />
        <NeetCarousel />
        <FeatureGrid />
        <NeetTestimonials />
        <QuestPixWork />
        <QuestPixFeatures />
        <NeetPrepLevels />
        <NeetCoachingSection />
        <NeetFAQSection />
        <NeetQuestPixSection />
      </div>
    </div>
  );
}
