import react from "react";
import ClassXIProgram from "./ClassXIProgram";
import ClassXIProgramDetails from "./ClassXIProgramDetails";
import ClassXITestimonials from "./ClassXITestimonials";
import ClassXIFeaturesSection from "./ClassXIFeaturesSection";
import ClassXIDream from "./ClassXIDream";
import ClassXICourseBreakdown from "./ClassXICourseBreakdown"
import ClassXIFAQSection from "./ClassXIFAQSection";
import  ClassXIFirstStep from "./ClassXIFirstStep";


export default function ClassXIPage() {
  return (
  <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <ClassXIProgram />
      <ClassXIProgramDetails/>
      <ClassXITestimonials/>
      <ClassXIFeaturesSection/>
      <ClassXIDream/>
      <ClassXICourseBreakdown/>
      <ClassXIFAQSection/>
      <ClassXIFirstStep/>
    </div>
    </div>
  );
}
