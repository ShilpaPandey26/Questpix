import React from "react";
import { Play } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import  detail_img from "../../assets/Contact/detail-img.png"

export default function JeeContactUs() {
  const socials = [
    { icon: faFacebookF, color: "border-blue-500 text-blue-500" },
    { icon: faTwitter, color: "border-white text-white" }, // X/Twitter
    { icon: faInstagram, color: "border-pink-500 text-pink-500" }, // gradient possible
    { icon: faLinkedinIn, color: "border-blue-500 text-blue-500" },
    { icon: faYoutube, color: "border-red-500 text-red-500" },
  ];

  return (
    <div className="w-full pt-30 md:pt-40 overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 ">
        {/* 1 */}
        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-20 gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-[32px] sm:text-[38px] font-bold">
              Contact <span className="text-[#FFD118]">Us</span>
            </h2>
            <p className="text-[16px] font-bold pb-4">
              We'd love to hear from you!
            </p>
            <p className="text-[16px] text-[#9EBDEF] pb-6 text-center sm:text-left">
              Whether you have a question, feedback, or just want to say hello,
              we're here to help.
            </p>

            {/* Button wrapper */}
            <div className="flex justify-center sm:justify-start">
              <a
                href="#"
                className="max-w-[180px] w-full flex justify-center items-center border-2 border-[#2FC18B] bg-[#2FC18B] gap-2 text-base py-2 rounded-xl font-bold"
              >
                <Play size={18} />
                Send Message
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center sm:justify-end mt-8 sm:mt-0">
            <img
              src="https://questpix.com/assets/images/partner_with/miss-out.png"
              alt="Illustration"
              className="w-[350px]  md:w-[380px] max-w-full"
            />
          </div>
        </div>

        {/* 2 */}

        <div className="bg-[#151f35] flex flex-col md:flex-row items-center justify-between py-10 md:px-10 md:py-20 rounded-tl-[80px] rounded-tr-[80px]">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl font-semibold mb-8">
              QuestPix Solutions Pvt. Ltd.
            </h2>

            <div className="space-y-6 text-[16px]">
              <div className="flex items-center   gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mt-1 text-[#2fc18b] text-[20px]"
                />
                +91 - 9509842965
              </div>

              <div className="flex items-center  gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-1 text-[#2fc18b] text-[20px]"
                />
                questpixedu@gmail.com
              </div>

              <div className="flex items-center  gap-3">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mt-1 text-[#2fc18b] text-[24px]"
                />
                +91 - 9509842965
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">
              {socials.map((item, index) => (
                <span
                  key={index}
                  className={`border-1 p-2 cursor-pointer rounded-md flex items-center justify-center w-10 h-10 transition duration-300 hover:bg-opacity-20 ${item.color}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </span>
              ))}
            </div>
          </div>

          {/* Right Section (Illustration) */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={detail_img}
              alt="customer-support"
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
