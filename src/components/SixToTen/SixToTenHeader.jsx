import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; // icons
import logo from "../../assets/head-logo.svg";

export default function JeeHeader() {
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
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-2 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Questpix Logo"
            className="h-16 sm:h-18 cursor-pointer"
            onClick={() => handleNavigate("/")}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:max-w-[600px] xl:max-w-[1000px] lg:flex lg:gap-8 xl:gap-10 text-base font-semibold relative ">
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
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-4 px-6 w-52 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li onClick={() => handleNavigate("/SixToTen/Class6")}>Class 6</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class7")}>Class 7</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class8")}>Class 8</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class9")}>Class 9</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class10")}>Class 10</li>
                </ul>
              </div>
            )}
          </div>

          {/* Free Resources */}
          <button
            onClick={() => handleNavigate("/SixToTen/FreeResources")}
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
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-4 px-6 w-64 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li onClick={() => handleNavigate("/Exam/NTSE")}>
                    National Talent Search Examination
                  </li>
                  <li onClick={() => handleNavigate("/Exam/NSTSE")}>
                    National Level Science Talent Search Examination
                  </li>
                  <li onClick={() => handleNavigate("/Exam/NSO")}>
                    National Science Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/IMO")}>
                    International Mathematics Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/IEO")}>
                    International English Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/IGKO")}>
                    International General Knowledge Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/ISSO")}>
                    International Social Studies Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/UCO")}>
                    Unified Cyber Olympiad
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
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-4 px-6 w-64 z-50">
                <ul className="space-y-4 text-[14px] cursor-pointer">
                  <li onClick={() => handleNavigate("/Material/Maths")}>
                    NCERT Maths Solution PDFs (Year-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Material/Science")}>
                    NCERT Science Solution PDFs (Year-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Material/SST")}>
                    NCERT Social Studies Solution (Class-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Material/English")}>
                    NCERT English Solutions (Class-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class6")}>
                    Sample Papers Class 6
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class7")}>
                    Sample Papers Class 7
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class8")}>
                    Sample Papers Class 8
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class9")}>
                    Sample Papers Class 9
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class10")}>
                    Sample Papers Class 10
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Why Us */}
          <button
            onClick={() => handleNavigate("/SixToTen/WhyDifferent")}
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
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-4 px-6 w-52 z-50">
                <ul className="space-y-3 text-[14px] cursor-pointer">
                  <li onClick={() => handleNavigate("/SixToTen/WhoWeare")}>
                    Who We Are?
                  </li>
                  <li onClick={() => handleNavigate("/SixToTen/ContactUs")}>
                    Contact Us
                  </li>
                  <li onClick={() => handleNavigate("/SixToTen/Career")}>
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
                  <li onClick={() => handleNavigate("/SixToTen/Class6")}>Class 6</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class7")}>Class 7</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class8")}>Class 8</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class9")}>Class 9</li>
                  <li onClick={() => handleNavigate("/SixToTen/Class10")}>Class 10</li>
                </ul>
              </div>
            </div>

            {/* Free Resources */}
            <button
              onClick={() => handleNavigate("/SixToTen/FreeResources")}
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
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="px-6 py-2 space-y-2 text-sm border-t border-gray-700">
                  <li onClick={() => handleNavigate("/Exam/NTSE")}>
                    National Talent Search Examination
                  </li>
                  <li onClick={() => handleNavigate("/Exam/NSTSE")}>
                    National Level Science Talent Search Examination
                  </li>
                  <li onClick={() => handleNavigate("/Exam/NSO")}>
                    National Science Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/IMO")}>
                    International Mathematics Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/IEO")}>
                    International English Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/IGKO")}>
                    International General Knowledge Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/ISSO")}>
                    International Social Studies Olympiad
                  </li>
                  <li onClick={() => handleNavigate("/Exam/UCO")}>
                    Unified Cyber Olympiad
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
                  <li onClick={() => handleNavigate("/Material/Maths")}>
                    NCERT Maths Solution PDFs (Year-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Material/Science")}>
                    NCERT Science Solution PDFs (Year-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Material/SST")}>
                    NCERT Social Studies Solution (Class-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Material/English")}>
                    NCERT English Solutions (Class-Wise)
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class6")}>
                    Sample Papers Class 6
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class7")}>
                    Sample Papers Class 7
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class8")}>
                    Sample Papers Class 8
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class9")}>
                    Sample Papers Class 9
                  </li>
                  <li onClick={() => handleNavigate("/Papers/Class10")}>
                    Sample Papers Class 10
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Us */}
            <button
              onClick={() => handleNavigate("/SixToTen/WhyDifferent")}
              className="w-full bg-[#1b2b3e] px-4 py-3 rounded-xl text-left shadow-md hover:text-[#2fc18b]"
            >
              Why Us
            </button>

            {/* About Us */}
            <div className="bg-[#1b2b3e] rounded-xl shadow-md overflow-hidden">
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
                  <li onClick={() => handleNavigate("/SixToTen/WhoWeare")}>
                    Who We Are?
                  </li>
                  <li onClick={() => handleNavigate("/SixToTen/ContactUs")}>
                    Contact Us
                  </li>
                  <li onClick={() => handleNavigate("/SixToTen/Career")}>
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
