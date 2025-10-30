import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/head-logo.svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 left-0 bg-[#0f1825] z-[1000] ">
      <div className="max-w-[1300px] mx-auto  flex justify-between items-center px-4 sm:px-5 lg:px-4 py-2 sm:py-4">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Questpix Logo"
            className="h-16 sm:h-16  md:h-18 cursor-pointer object-contain"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          {/* Button */}
          <button
            onClick={() => {
              navigate("/PartnerWithUs");
            }}
            className="bg-[#2fc18b] text-white font-medium rounded-lg cursor-pointer
             px-1 py-1 sm:px-3 sm:py-2
             text-sm sm:text-base
             hover:text-[#ffff00] transition-all duration-300 ease-in-out"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}
