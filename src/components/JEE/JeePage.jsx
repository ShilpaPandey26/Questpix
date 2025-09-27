import React from "react";
import CrackJeeSection from "./CrackJeeSection";
import JeeCarousel from "./JeeCarousel";
import FeatureGrid from "./FeatureGrid";
import JeeTestimonials from "./JeeTestimonials";
import QuestPixWork from "./QuestPixWork";
import QuestPixFeatures from "./QuestPixFeatures";
import JeePrepLevels from "./JeePrepLevels";
import JEECoachingSection from "./JEECoachingSection";
import FAQSection from "./FAQSection";
import JeeQuestPixSection from "./JeeQuestPixSection";

export default function JeePage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <CrackJeeSection />
        <JeeCarousel />
        <FeatureGrid />
        <JeeTestimonials />
        <QuestPixWork />
        <QuestPixFeatures />
        <JeePrepLevels />
        <JEECoachingSection />
        <FAQSection />
        <JeeQuestPixSection />
      </div>
    </div>
  );
}
