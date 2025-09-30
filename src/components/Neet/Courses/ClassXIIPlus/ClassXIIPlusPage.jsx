import react from "react";
import ClassXIIPlusProgram from "./ClassXIIPlusProgram";
import ClassXIIPlusProgramDetails from "./ClassXIIPlusProgramDetails";
import ClassXIIPlusTestimonials from "./ClassXIIPlusTestimonials";
import ClassXIIPlusFeaturesSection from "./ClassXIIPlusFeaturesSection";
import ClassXIIPlusDream from "./ClassXIIPlusDream";
import ClassXIIPlusCourseBreakdown from "./ClassXIIPlusCourseBreakdown";
import ClassXIIPlusFAQSection from "./ClassXIIPlusFAQSection";
import ClassXIIPlusFirstStep from "./ClassXIIPlusFirstStep";

export default function ClassXIIPlusPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <ClassXIIPlusProgram />
        <ClassXIIPlusProgramDetails />
        <ClassXIIPlusTestimonials />
        <ClassXIIPlusFeaturesSection />
        <ClassXIIPlusDream />
        <ClassXIIPlusCourseBreakdown />
        <ClassXIIPlusFAQSection />
        <ClassXIIPlusFirstStep />
      </div>
    </div>
  );
}
