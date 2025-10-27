
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/Landing/LandingPage";
import HomePage from "./components/Home/HomePage";
import JeePage from "./components/JEE/JeePage";
import NeetPage from "./components/Neet/NeetPage";
import Footer from "./components/Footer";
import "./App.css";

import JeeWhoWeare from "./components/JEE/JeeWhoWeare";
import JeeContactUs from "./components/JEE/JeeContactUs";
import JeeCareer from "./components/JEE/JeeCareer";
import FreeMain from "./components/JEE/FreeResources/FreeMainPage";
import WhyMain from "./components/JEE/WhyUs/WhyMainPage";
// courses
import ClassXIPage from "./components/JEE/Courses/ClassXI/ClassXIPage";
import ClassXIIPage from "./components/JEE/Courses/ClassXII/ClassXIIPage";
import ClassXIIPlusPage from "./components/JEE/Courses/ClassXIIPlus/ClassXIIPlusPage";
import CrashCoursePage from "./components/JEE/Courses/CrashCourse/CrashCoursePage";
//Target Exam
import JeeMainPage from "./components/JEE/TargetExam/JeeMain/JeeMainPage";
import JeeAdvancedPage from "./components/JEE/TargetExam/JeeAdvanced/JeeAdvancedPage";

//Test series
import JeeMainTestSeriesPage from "./components/JEE/TestSeries/JeeMain/JeeMainTestSeriesPage";
import JeeAdvancedTestSeriesPage from "./components/JEE/TestSeries/JeeAdvanced/JeeAdvancedTestSeriesPage";


//Study Material
import JeeAdvancedPaper from "./components/JEE/StudyMaterial/AdvancedPaper/JeeAdvancedPaper"
import JeeMainPaper from "./components/JEE/StudyMaterial/JeeMainPaper/JeeMainPaper"
import ChemistryExemplarPage from "./components/JEE/StudyMaterial/ChemistryExemplar/ChemistryExemplarPage"
import ChemistrySolutionPage from "./components/JEE/StudyMaterial/ChemistrySolution/ChemistrySolutionPage"
import MathsExemplarPage from "./components/JEE/StudyMaterial/MathsExemplar/MathsExemplarPage"
import MathsSolutionPage from "./components/JEE/StudyMaterial/MathsSolution/MathsSolutionPage"
import PhysicsExemplarPage from "./components/JEE/StudyMaterial/PhysicsExemplar/PhysicsExemplarPage"
import PhysicsSolutionPage from "./components/JEE/StudyMaterial/PhysicsSolution/PhysicsSolutionPage";

//feature
import TestSeriesPromotionPage from "./components/JEE/FeatureGrid/TestSeriesPromotionPage";
import TestSeriesPapersets1 from "./components/JEE/FeatureGrid/TestSeriesPapersets1";
import TestSeriesPapersets2 from "./components/JEE/FeatureGrid/TestSeriesPapersets2";
import TestSeriesPapersets3 from "./components/JEE/FeatureGrid/TestSeriesPapersets3";
import TestSeriesPapersets4 from "./components/JEE/FeatureGrid/TestSeriesPapersets4";


import Details1 from "./components/JEE/PlanDetails/Details1";
import Details2 from "./components/JEE/PlanDetails/Details2";
import Details3 from "./components/JEE/PlanDetails/Details3";
import Details4 from "./components/JEE/PlanDetails/Details4";

//live class
import Class from "./components/JEE/LiveClass/Class";


//schedule
import ClassSchedule from "./components/JEE/schedule/ClassSchedule";


import NeetWhoWeare from "./components/Neet/NeetWhoWeare";
import NeetContactUs from "./components/Neet/NeetContactUs";
import NeetCareer from "./components/Neet/NeetCareer";
import NeetFreeMain from "./components/Neet/FreeResources/NeetFreeMainPage";
import NeetWhyMain from "./components/Neet/WhyUs/NeetWhyMainPage";
// courses
import NeetClassXIPage from "./components/Neet/Courses/ClassXI/ClassXIPage";
import NeetClassXIIPage from "./components/Neet/Courses/ClassXII/ClassXIIPage";
import NeetClassXIIPlusPage from "./components/Neet/Courses/ClassXIIPlus/ClassXIIPlusPage";
import NeetCrashCoursePage from "./components/Neet/Courses/CrashCourse/CrashCoursePage";
//TargetExam
import NeetUGPage from "./components/Neet/TargetExam/NeetUGPage";


import SixToTenPage from "./components/SixToTen/SixToTenPage";
import SixToTenWhoWeare from "./components/SixToTen/SixToTenWhoWeare";
import SixToTenContactUs from "./components/SixToTen/SixToTenContactUs";
import SixToTenCareer from "./components/SixToTen/SixToTenCareer";
import SixToTenFreeMain from "./components/SixToTen/FreeResources/SixToTenFreeMainPage";
import SixToTenWhyMain from "./components/SixToTen/WhyUs/SixToTenWhyMainPage";

import ClassSixPage from "./components/SixToTen/Courses/ClassSix/ClassSixPage";

// login
import Login from "./components/Login";
import Signup from "./components/Signup";

// Headers
import MainHeader from "./components/Header";
import HomeHeader from "./components/Home/HomeHeader";
import JeeHeader from "./components/JEE/JeeHeader";
import NeetHeader from "./components/Neet/NeetHeader";
import SixToTenHeader from "./components/SixToTen/SixToTenHeader";





function App() {
  const location = useLocation();

  // Decide which header to show
  const renderHeader = () => {
    if (location.pathname.startsWith("/PartnerWithUs")) return <HomeHeader />;
    if (location.pathname.startsWith("/Jee")) return <JeeHeader />;
    if (location.pathname.startsWith("/Neet")) return <NeetHeader />;
    if (location.pathname.startsWith("/SixToTen")) return <SixToTenHeader />;
    if (location.pathname.startsWith("/Auth/signup")) return <Signup />;
    if (location.pathname.startsWith("/Auth/login")) return <Login />;
    return <MainHeader />;
  };

  // Decide whether to show the footer
  const showFooter = !(
    location.pathname.startsWith("/Auth/signup") ||
    location.pathname.startsWith("/Auth/login")
  );

  return (
    <>
      {renderHeader()}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/PartnerWithUs" element={<HomePage />} />

        <Route path="/Jee" element={<JeePage />} />
        <Route path="/Jee/FreeResources" element={<FreeMain />} />
        <Route path="/Jee/WhyDifferent" element={<WhyMain />} />
        <Route path="/Jee/WhoWeare" element={<JeeWhoWeare />} />
        <Route path="/Jee/ContactUs" element={<JeeContactUs />} />
        <Route path="/Jee/Career" element={<JeeCareer />} />
        <Route path="/Jee/Courses/ClassXI" element={<ClassXIPage />} />
        <Route path="/Jee/Courses/ClassXII" element={<ClassXIIPage />} />
        <Route path="/Jee/Courses/ClassXIIPlus" element={<ClassXIIPlusPage />} />
        <Route path="/Jee/Courses/CrashCourse" element={<CrashCoursePage />} />
        <Route path="/Jee/TargetExam/JeeMain" element={<JeeMainPage />} />
        <Route path="/Jee/TargetExam/JeeAdvanced" element={<JeeAdvancedPage />} />
        <Route path="/Jee/TestSeries/JeeMain" element={<JeeMainTestSeriesPage />} />
        <Route path="/Jee/TestSeries/JeeAdvanced" element={<JeeAdvancedTestSeriesPage />} />

        <Route path="/Jee/MainPdf" element={<JeeMainPaper />} />
        <Route path="/Jee/AdvancedPdf" element={<JeeAdvancedPaper />} />
        <Route path="/Jee/MathsSolution" element={<MathsSolutionPage />} />
        <Route path="/Jee/PhysicsSolution" element={<PhysicsSolutionPage />} />
        <Route path="/Jee/ChemistrySolution" element={<ChemistrySolutionPage />} />
        <Route path="/Jee/MathsExemplar" element={<MathsExemplarPage />} />
        <Route path="/Jee/PhysicsExemplar" element={<PhysicsExemplarPage />} />
        <Route path="/Jee/ChemistryExemplar" element={<ChemistryExemplarPage />} />
        <Route path="/Jee/test_series_promotion" element={<TestSeriesPromotionPage />} />

        <Route path="/Jee/test_series_papersets1" element={<TestSeriesPapersets1 />} />
        <Route path="/Jee/test_series_papersets2" element={<TestSeriesPapersets2 />} />
        <Route path="/Jee/test_series_papersets3" element={<TestSeriesPapersets3 />} />
        <Route path="/Jee/test_series_papersets4" element={<TestSeriesPapersets4 />} />
        <Route path="/Jee/Details1" element={<Details1 />} />
        <Route path="/Jee/Details2" element={<Details2 />} />
        <Route path="/Jee/Details3" element={<Details3 />} />
        <Route path="/Jee/Details4" element={<Details4 />} />

        <Route path="/Jee/liveclass/class" element={<Class />} />



        <Route path="/Jee/liveclass_schedule" element={<ClassSchedule />} />


        <Route path="/Neet" element={<NeetPage />} />
        <Route path="/Neet/FreeResources" element={<NeetFreeMain />} />
        <Route path="/Neet/WhyDifferent" element={<NeetWhyMain />} />
        <Route path="/Neet/WhoWeare" element={<NeetWhoWeare />} />
        <Route path="/Neet/ContactUs" element={<NeetContactUs />} />
        <Route path="/Neet/Career" element={<NeetCareer />} />

        <Route path="/Neet/Courses/ClassXI" element={<NeetClassXIPage />} />
        <Route path="/Neet/Courses/ClassXII" element={<NeetClassXIIPage />} />
        <Route path="/Neet/Courses/ClassXIIPlus" element={<NeetClassXIIPlusPage />} />
        <Route path="/Neet/Courses/CrashCourse" element={<NeetCrashCoursePage />} />
        <Route path="/Neet/TargetExam/NeetUG" element={<NeetUGPage />} />

        <Route path="/SixToTen" element={<SixToTenPage />} />
        <Route path="/SixToTen/FreeResources" element={<SixToTenFreeMain />} />
        <Route path="/SixToTen/WhyDifferent" element={<SixToTenWhyMain />} />
        <Route path="/SixToTen/WhoWeare" element={<SixToTenWhoWeare />} />
        <Route path="/SixToTen/ContactUs" element={<SixToTenContactUs />} />
        <Route path="/SixToTen/Career" element={<SixToTenCareer />} />
        <Route path="/SixToTen/Courses/Class6" element={<ClassSixPage />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default App;
