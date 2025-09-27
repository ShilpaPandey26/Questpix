import react from "react";
import ClassXIIProgram from "./ClassXIIProgram";
import ClassXIIProgramDetails from "./ClassXIIProgramDetails";
import ClassXIITestimonials from "./ClassXIITestimonials";
import ClassXIIFeaturesSection from "./ClassXIIFeaturesSection";
import ClassXIIDream from "./ClassXIIDream";
import ClassXIICourseBreakdown from "./ClassXIICourseBreakdown";
import ClassXIIFAQSection from "./ClassXIIFAQSection";
import ClassXIIFirstStep from "./ClassXIIFirstStep";

export default function ClassXIIPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <ClassXIIProgram />
        <ClassXIIProgramDetails />
        <ClassXIITestimonials />
        <ClassXIIFeaturesSection />
        <ClassXIIDream />
        <ClassXIICourseBreakdown />
        <ClassXIIFAQSection />
        <ClassXIIFirstStep />
      </div>
    </div>
  );
}
