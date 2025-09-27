import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Illustration (hidden on small screens) */}
      <div className="hidden lg:flex w-full lg:w-[45%] p-6 lg:p-12 flex-col gap-12 lg:gap-20 items-center lg:items-start">
        <div className="w-full flex justify-center lg:justify-start">
          <img
            src="https://questpix.com/assets/images/logo.svg"
            alt="Questpix Logo"
            className="h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex justify-center w-full">
          <img
            src="https://questpix.com/assets/images/partner_with/miss-out.png"
            alt="Illustration"
            className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] drop-shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[55%] min-h-screen bg-white p-6 sm:p-10 flex flex-col items-center justify-center rounded-t-[40px] lg:rounded-none lg:rounded-l-[60px]">
        {/* Mobile Logo */}
        <div className="flex justify-center mb-8 lg:hidden w-full">
          <img
            src="https://questpix.com/assets/images/nlogo.png"
            alt="Mobile Logo"
            className="h-14 sm:h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-[26px] sm:text-[32px] font-bold text-[#30435F]">
            Signup
          </h2>
          <p className="text-[#30435F] text-[14px] sm:text-[16px] mb-4">
            Let's Get Started
          </p>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border text-black border-black rounded-md px-4 py-3 focus:outline-none"
          />

          {/* Mobile Input with Flag */}
          <div className="flex w-full">
            <span className="flex items-center border border-black rounded-md px-3 text-black bg-white">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                className="w-5 h-5 mr-2"
              />
              <span className="mr-2">+91</span>
            </span>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="flex-1 ml-2 border border-black rounded-md px-4 py-3 focus:outline-none text-black"
            />
          </div>

          {/* Stream Dropdown */}
          <select className="w-full border border-black rounded-md px-4 py-3 text-[#3F3F45] text-[14px] sm:text-[16px] focus:outline-none">
            <option>Select Stream</option>
            <option>JEE ADVANCED</option>
            <option>JEE MAIN</option>
            <option>NEET</option>
            <option>FOUNDATION</option>
          </select>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full border border-black text-black rounded-md px-4 py-3 focus:outline-none"
          />

          {/* Signup Button */}
          <button className="w-full bg-[#2FC18B] text-white py-3 rounded-md font-semibold cursor-pointer hover:bg-[#28a97a] transition">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-[#30435F] mt-6 text-center sm:text-left">
            Already have an account?{" "}
            <Link
              to="/Auth/login"
              className="text-[#2FC18B] font-semibold cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
