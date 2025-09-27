import React from "react";

import KotaCoachingPromo from "./KotaCoachingPromo";
import ProgramCategories from "./ProgramCategories";
import HowQuestPixWorks from "./HowQuestPixWorks";
import SampleModules from "./SampleModules";
import TechnologySection from "./TechnologySection";
import TrustQuestPix from "./TrustQuestPix";
import HomeTestimonials from "./HomeTestimonials";
import ConnectSection from "./ConnectSection";
import StartToday from "./StartToday";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <KotaCoachingPromo />
      <ProgramCategories />
      <HowQuestPixWorks />
      <TechnologySection />
      <SampleModules />
      <TrustQuestPix />
      <HomeTestimonials />
      <ConnectSection />
      <StartToday />
    </div>
  );
}
