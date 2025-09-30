import react from "react";
import CrashCourseProgram from "./CrashCourseProgram";
import CrashCourseProgramDetails from "./CrashCourseProgramDetails";
import CrashCourseTestimonials from "./CrashCourseTestimonials";
import CrashCourseFeaturesSection from "./CrashCourseFeaturesSection";
import CrashCourseDream from "./CrashCourseDream";
import CrashCourseBreakDown from "./CrashCourseBreakDown";
import CrashCourseFAQSection from "./CrashCourseFAQSection";
import CrashCourseFirstStep from "./CrashCourseFirstStep";

export default function CrashCoursePage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <CrashCourseProgram />
        <CrashCourseProgramDetails />
        <CrashCourseTestimonials />
        <CrashCourseFeaturesSection />
        <CrashCourseDream />
        <CrashCourseBreakDown />
        <CrashCourseFAQSection />
        <CrashCourseFirstStep />
      </div>
    </div>
  );
}
