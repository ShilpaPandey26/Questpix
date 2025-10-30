import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/head-logo.svg";

export default function HomeHeader() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-[#0f1825] z-[1000]">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 sm:px-5 lg:px-4 py-3 sm:py-4">
        <div>
          <img
            src={logo}
            alt="Questpix Logo"
            className="h-16 sm:h-16  md:h-18 cursor-pointer object-contain"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-evenly items-center text-center gap-1 md:gap-5 lg:gap-10  font-bold text-[14px] lg:text-[16px]">
          <a href="#section-0">Study Material Package</a>
          <a href="#section-1">Testing Platform</a>
          <a href="#section-2">Recorded</a>
          <a href="#section-3">Rank Booster</a>
          <a href="#">School Integrated Program</a>
        </div>

        {/* Home Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/")}
            className="bg-[#2fc18b]  font-medium rounded-lg cursor-pointer
              px-3 py-2 sm:px-6 sm:py-2
              text-xs sm:text-sm md:text-base
              hover:underline transition-all duration-300 ease-in-out"
          >
            Home
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1f2f45]  font-bold flex flex-col items-center gap-4 py-4">
          <a href="/PartnerWithUs/StudyMaterialPackage" onClick={() => setMenuOpen(false)}>
            Study Material Package
          </a>
          <a href="/PartnerWithUs/AdvancedTestingPlatform" onClick={() => setMenuOpen(false)}>
            Testing Platform
          </a>
          <a href="/PartnerWithUs/DoubtResolutionSystem" onClick={() => setMenuOpen(false)}>
            Recorded
          </a>
          <a href="/PartnerWithUs/InstitutionalDevelopment" onClick={() => setMenuOpen(false)}>
            Rank Booster
          </a>
          <a href="/PartnerWithUs" onClick={() => setMenuOpen(false)}>
            School Integrated Program
          </a>
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="bg-[#2fc18b] font-medium rounded-lg cursor-pointer
              px-4 py-2 text-sm hover:text-[#007bff] transition-all duration-300 ease-in-out"
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}
