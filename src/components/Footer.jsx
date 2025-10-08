import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import gpbtn from "../assets/gpbtn.png";
import appstore from "../assets/appstore.png";

export default function Footer() {
  return (
    <div className="bg-[#080e16] text-white">
      <div className="container mx-auto px-4  flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 ">
        {/* Main Footer */}
        <div className="w-full mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
          {/* Left Section */}
          <div className="flex flex-col items-start gap-5 w-full lg:w-[40%] ">
            <img
              src="https://dev.questpix.com/assets/images/logo.svg"
              className="h-20"
            />
            <p className="text-[rgba(255,255,255,0.6)] text-sm sm:text-base font-medium w-full lg:w-[85%]">
              We are a team of passionate faculties, technologists, and
              innovators, led by the very best Vijay Sharma Sir at the helm,
              dedicated to revolutionizing JEE, NEET and Foundation preparation
              by making it more accessible, personalized, and engaging.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 md:gap-5">
              {[
                {
                  icon: faFacebookF,
                  link: "https://www.facebook.com/questpixstudyapp/",
                  hoverColor: "hover:bg-[#1877F2]", 
                },
                {
                  icon: faInstagram,
                  link: "https://www.instagram.com/questpixstudyapp/",
                  hoverColor: "hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
                },
                {
                  icon: faTwitter,
                  link: "https://x.com/questpix/",
                  hoverColor: "hover:bg-[#1DA1F2]", 
                },
                {
                  icon: faLinkedinIn,
                  link: "https://www.linkedin.com/company/questpixapp/",
                  hoverColor: "hover:bg-[#0077B5]", 
                },
                {
                  icon: faYoutube,
                  link: "https://www.youtube.com/@questpixjee-s6c",
                  hoverColor: "hover:bg-[#FF0000]", 
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white text-blue-500 p-2 rounded-full cursor-pointer transition-all duration-300 ${item.hoverColor} hover:text-white`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </a>
              ))}
            </div>


          </div>

          {/* Middle Section */}
          <div className="flex flex-col w-full md:w-[40%] lg:w-[25%]">
            <h3 className="text-xl pb-4 font-bold">Useful Links</h3>
            <ul className="text-base text-[rgba(255,255,255,0.6)] list-disc list-inside space-y-1">
              {[
                { name: "JEE", link: "/Jee" },
                { name: "NEET", link: "/Neet" },
                { name: "Class 6 - 10", link: "/SixToTen" },
                { name: "Free Resources", link: "/Jee/FreeResources" },
                { name: "Why Us", link: "/Jee/WhyDifferent" },
                { name: "Who We Are", link: "/Jee/WhoWeare" },
                { name: "Career", link: "/Jee/Career" },
                { name: "Refund and Cancellation", link: "/refund-cancellation" },
                { name: "Terms and Conditions", link: "/terms-and-conditions" },
                { name: "Privacy Policy", link: "/privacy-policy" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}

                    className="hover:text-[#2FC18B] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Right Section */}
          <div className="flex flex-col w-full md:w-[60%] lg:w-[33.33%]">
            <h3 className="text-lg pb-5 font-extrabold">Contact Info</h3>
            <ul className="text-[16px] text-[rgba(255,255,255,0.6)] space-y-3 ">
              <li className="flex items-center gap-4 hover:text-[#2FC18B] cursor-pointer">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-1 text-[rgba(255,255,255,0.6)] "
                />
                questpixedu@gmail.com
              </li>
              <li className="flex items-start gap-4 hover:text-[#2FC18B] cursor-pointer">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mt-1 text-[rgba(255,255,255,0.6)]"
                />
                +91 95216 87733
              </li>
              <li className="flex items-start gap-4 ">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mt-1 text-[rgba(255,255,255,0.6)]"
                />
                <span>
                  QuestPix Solutions Pvt. Ltd, MBS Road, Near Truck Union,
                  Anantpura, Kota - 324005
                </span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4">
              Download Our App
            </h3>
            <div className="flex justify-start gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.questpix.app"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gpbtn} alt="Google Play" className="w-32 sm:w-40" />
              </a>
              <a
                href="https://apps.apple.com/in/app/questpix/id6742243591"
                target="_blank"
                rel="noreferrer"
              >
                <img src={appstore} alt="App Store" className="w-32 sm:w-40" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center p-4 text-xs sm:text-sm bg-[#131c29]">
        © 2025 Questpix | Developed By Androapps. All Rights Reserved
      </div>
    </div>
  );
}
