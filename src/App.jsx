// App.jsx
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

import NeetWhoWeare from "./components/Neet/NeetWhoWeare";
import NeetContactUs from "./components/Neet/NeetContactUs";
import NeetCareer from "./components/Neet/NeetCareer";
import NeetFreeMain from "./components/Neet/FreeResources/NeetFreeMainPage";
import NeetWhyMain from "./components/Neet/WhyUs/NeetWhyMainPage";

import SixToTenPage from "./components/SixToTen/SixToTenPage";
import SixToTenWhoWeare from "./components/SixToTen/SixToTenWhoWeare";
import SixToTenContactUs from "./components/SixToTen/SixToTenContactUs";
import SixToTenCareer from "./components/SixToTen/SixToTenCareer";
import SixToTenFreeMain from "./components/SixToTen/FreeResources/SixToTenFreeMainPage";
import SixToTenWhyMain from "./components/SixToTen/WhyUs/SixToTenWhyMainPage";

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

        <Route path="/Neet" element={<NeetPage />} />
        <Route path="/Neet/FreeResources" element={<NeetFreeMain />} />
        <Route path="/Neet/WhyDifferent" element={<NeetWhyMain />} />
        <Route path="/Neet/WhoWeare" element={<NeetWhoWeare />} />
        <Route path="/Neet/ContactUs" element={<NeetContactUs />} />
        <Route path="/Neet/Career" element={<NeetCareer />} />

        <Route path="/SixToTen" element={<SixToTenPage />} />
        <Route path="/SixToTen/FreeResources" element={<SixToTenFreeMain />} />
        <Route path="/SixToTen/WhyDifferent" element={<SixToTenWhyMain />} />
        <Route path="/SixToTen/WhoWeare" element={<SixToTenWhoWeare />} />
        <Route path="/SixToTen/ContactUs" element={<SixToTenContactUs />} />
        <Route path="/SixToTen/Career" element={<SixToTenCareer />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default App;
