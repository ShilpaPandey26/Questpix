import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; 
import logo from "../../assets/head-logo.svg";

export default function NeetHeader() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null); // for mobile accordions

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close dropdown on outside click (desktop only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  // Close menus helper
  const handleNavigate = (path) => {
    navigate(path);
    setOpenMenu(null); // close desktop dropdown
    setMobileMenu(false); // close mobile menu
    setMobileOpen(null); // close mobile accordion
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-[#0f1825] z-[1000]">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-2 sm:py-4  flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Questpix Logo"
            className="h-16  sm:h-18 cursor-pointer"
            onClick={() => handleNavigate("/")}
          />
        </div>

        {/* Desktop Navigation */}
               <div className="hidden lg:flex gap-8 mx-8 text-lg font-semibold relative ">
          {/* Courses */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("courses")}
              className={`hover:text-[#2fc18b] cursor-pointer ${
                openMenu === "courses" ? "text-[#2fc18b]" : ""
              }`}
            >
              Courses
            </button>
            {openMenu === "courses" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1f2f45] rounded-lg py-4 px-6 w-52 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/ClassXI")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Class XI
                  </li>
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/ClassXII")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Class XII
                  </li>
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/ClassXIIPlus")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Class XII+
                  </li>
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/CrashCourse")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Crash Course
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Test Series */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("test-series")}
              className={`hover:text-[#2fc18b] cursor-pointer ${
                openMenu === "test-series" ? "text-[#2fc18b]" : ""
              }`}
            >
              Test Series
            </button>
            {openMenu === "test-series" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1f2f45] rounded-lg py-4 px-6 w-60 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NEET UG TEST SERIES
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Free Resources */}
          <button
            onClick={() => handleNavigate("/Neet/FreeResources")}
            className="cursor-pointer hover:text-[#2fc18b] "
          >
            Free Resources
          </button>

          {/* Target Exam */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("target-exam")}
              className={`hover:text-[#2fc18b] cursor-pointer ${
                openMenu === "target-exam" ? "text-[#2fc18b]" : ""
              }`}
            >
              Target Exam
            </button>
            {openMenu === "target-exam" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-4 px-6 w-52 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li onClick={() => handleNavigate("/Neet/TargetExam/NeetUG")} 
                  className="hover:text-[#2fc18b] cursor-pointer">
                    NEET UG
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Study Material */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("study-material")}
              className={`hover:text-[#2fc18b] cursor-pointer ${
                openMenu === "study-material" ? "text-[#2fc18b]" : ""
              }`}
            >
              Study Material
            </button>
            {openMenu === "study-material" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1f2f45] rounded-lg py-4 px-6 w-64 z-50">
                <ul className="space-y-4 text-[14px] cursor-pointer">
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NEET UG Paper PDFs(Year-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Biology Solution (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Physics Solution (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Chemistry Solution (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Biology Exemplar Solutions (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Physics Exemplar Solutions (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Chemistry Exemplar Solutions (Class-Wise)
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Why Us */}
          <button
            onClick={() => handleNavigate("/Neet/WhyDifferent")}
            className="cursor-pointer hover:text-[#2fc18b]"
          >
            Why Us
          </button>

          {/* About Us */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("about-us")}
              className={`hover:text-[#2fc18b] cursor-pointer ${
                openMenu === "about-us" ? "text-[#2fc18b]" : ""
              }`}
            >
              About Us
            </button>
            {openMenu === "about-us" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1f2f45] rounded-lg py-4 px-6 w-52 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li
                    className="hover:text-[#2fc18b] cursor-pointer"
                    onClick={() => handleNavigate("/Neet/WhoWeare")}
                  >
                    Who We Are?
                  </li>
                  <li
                    className="hover:text-[#2fc18b] cursor-pointer"
                    onClick={() => handleNavigate("/Neet/ContactUs")}
                  >
                    Contact Us
                  </li>
                  <li
                    className="hover:text-[#2fc18b] cursor-pointer"
                    onClick={() => handleNavigate("/Neet/Career")}
                  >
                    Careers
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right - Login Button (hidden on mobile) */}
        <button
          onClick={() => handleNavigate("/Auth/signup")}
          className="hidden lg:block bg-[#2dcea1] text-base px-3 py-2 rounded-md cursor-pointer hover:underline"
        >
          Login/Sign up
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={32} /> : <Menu size={38} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileView
        mobileMenu={mobileMenu}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleNavigate={handleNavigate}
      />
    </div>
  );
}

function MobileView({ mobileMenu, mobileOpen, setMobileOpen, handleNavigate }) {
  const toggleMenu = (menu) => {
    setMobileOpen(mobileOpen === menu ? null : menu);
  };

  return (
    <>
      {mobileMenu && (
        <div className="lg:hidden bg-[#0f1825] text-white px-4 py-4">
          <div className="max-w-[360px] mx-auto space-y-3 text-left">
            {/* Courses */}
            <div className="bg-[#1b2b3e] rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleMenu("courses")}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-[16px]"
              >
                Courses
                {mobileOpen === "courses" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileOpen === "courses"
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-2 space-y-2 text-sm border-t border-gray-700">
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/ClassXI")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Class XI
                  </li>
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/ClassXII")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Class XII
                  </li>
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/ClassXIIPlus")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Class XII+
                  </li>
                  <li
                    onClick={() => handleNavigate("/Neet/Courses/CrashCourse")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    Crash Course
                  </li>
                </ul>
              </div>
            </div>

            {/* Test Series */}
            <div className="bg-[#1b2b3e] rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleMenu("test-series")}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-[16px]"
              >
                Test Series
                {mobileOpen === "test-series" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileOpen === "test-series"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-2 space-y-2 text-sm border-t border-gray-700">
                  <li
                    onClick={() => handleNavigate("Neet/UGTestSeries")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    NEET UG TEST SERIES
                  </li>
                </ul>
              </div>
            </div>

            {/* Free Resources */}
            <button
              onClick={() => handleNavigate("/Neet/FreeResources")}
              className="w-full bg-[#1b2b3e] px-4 py-3 rounded-xl shadow-md text-left hover:text-[#2fc18b]"
            >
              Free Resources
            </button>

            {/* Target Exam */}
            <div className="bg-[#1b2b3e] rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleMenu("target-exam")}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-[16px]"
              >
                Target Exam
                {mobileOpen === "target-exam" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileOpen === "target-exam"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-2 space-y-2 text-sm border-t border-gray-700">
                  <li
                    onClick={() => handleNavigate("/Neet/TargetExam/NeetUG")}
                    className="cursor-pointer hover:text-[#2fc18b]"
                  >
                    NEET UG
                  </li>
                </ul>
              </div>
            </div>

            {/* Study Material */}
            <div className="bg-[#1b2b3e] rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleMenu("study-material")}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-[16px]"
              >
                Study Material
                {mobileOpen === "study-material" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileOpen === "study-material"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-2 space-y-2 text-sm border-t border-gray-700">
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NEET UG Paper PDFs(Year-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Biology Solution (Class-Wise)
                  </li>
                  <li>NCERT Physics Solution (Class-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Chemistry Solution (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Biology Exemplar Solutions (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Physics Exemplar Solutions (Class-Wise)
                  </li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">
                    NCERT Chemistry Exemplar Solutions (Class-Wise)
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Us */}
            <button
              onClick={() => handleNavigate("/Neet/WhyDifferent")}
              className="w-full bg-[#1b2b3e] px-4 py-3 rounded-xl text-left shadow-md hover:text-[#2fc18b]"
            >
              Why Us
            </button>

            {/* About Us */}
            <div className="bg-[#1b2b3e] rounded-xl   shadow-md overflow-hidden">
              <button
                onClick={() => toggleMenu("about-us")}
                className="w-full flex justify-between items-center px-4 py-3 font-medium text-[16px]"
              >
                About Us
                {mobileOpen === "about-us" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  mobileOpen === "about-us"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-2 space-y-2 text-sm border-t border-gray-700">
                  <li
                    className="hover:text-[#2fc18b] cursor-pointer"
                    onClick={() => handleNavigate("/Neet/WhoWeare")}
                  >
                    Who We Are?
                  </li>
                  <li
                    className="hover:text-[#2fc18b] cursor-pointer"
                    onClick={() => handleNavigate("/Neet/ContactUs")}
                  >
                    Contact Us
                  </li>
                  <li
                    className="hover:text-[#2fc18b] cursor-pointer"
                    onClick={() => handleNavigate("/Neet/Career")}
                  >
                    Careers
                  </li>
                </ul>
              </div>
            </div>

            {/* Login */}
            <button
              onClick={() => handleNavigate("/Auth/signup")}
              className="w-full bg-[#2dcea1] text-white px-4 py-3 rounded-xl shadow-md hover:opacity-90"
            >
              Login / Sign up
            </button>
          </div>
        </div>
      )}
    </>
  );
}
