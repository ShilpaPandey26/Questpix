import React, { useState } from "react";
import contact from "../../assets/Home/contact.png"
import plan from "../../assets/Home/plan.svg"


export default function ConnectSection() {
  const [formData, setFormData] = useState({
    query: "",
    name: "",
    designation: "",
    mobile: "",
    email: "",
    institute: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.query || formData.query === "Query for ?")
      newErrors.query = "Please select query for";
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.designation)
      newErrors.designation = "This field is required.";
    if (!formData.mobile) newErrors.mobile = "This field is required.";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.institute) newErrors.institute = "This field is required.";
    if (!formData.state || formData.state === "Select State")
      newErrors.state = "Please select state";
    if (!formData.city || formData.city === "Select City")
      newErrors.city = "This field is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="container px-4 py-12 flex flex-col items-center gap-10">
      {/* Heading */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[38px] font-bold mb-4">
          Ready to Elevate Your{" "}
          <span className="text-[#2FC18B]">
            Organisation's Competitive Edge?
          </span>
        </h2>
        <p className="text-lg md:text-[20px]">
          Partner with QuestPix to transform student outcomes and boost your
          institution's reputation.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contact}
            alt="Support Illustration"
            className="w-[70%] md:w-[60%]"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 bg-white rounded-xl p-8 text-black shadow-lg">
          <h2 className="text-2xl font-bold text-[#3b0a52] mb-6">
            Let’s Connect,
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Query Dropdown */}
            <div>
              <select
                name="query"
                value={formData.query}
                onChange={handleChange}
                className={`w-full mt-1 p-2 border-b outline-none ${
                  errors.query ? "border-red-500" : "border-gray-300"
                } focus:border-[#2FC18B] `}
              >
                <option>Query for ?</option>
                <option>Study Material Package</option>
                <option>Online Platform</option>
                <option>Testing Platform</option>
                <option>School Integrated Platform</option>
              </select>
              {errors.query && (
                <p className="text-red-600 text-sm">{errors.query}</p>
              )}
            </div>

            {/* Name & Designation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className={`p-2 w-full border-b outline-none placeholder:text-[15px] ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:border-[#2FC18B]`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Designation"
                  className={`p-2 w-full border-b outline-none placeholder:text-sm ${
                    errors.designation ? "border-red-500" : "border-gray-300"
                  } focus:border-[#2FC18B]`}
                />
                {errors.designation && (
                  <p className="text-red-600 text-sm">{errors.designation}</p>
                )}
              </div>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mobile Number"
                  className={`p-2 w-full border-b outline-none placeholder:text-sm ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } focus:border-[#2FC18B]`}
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm">{errors.mobile}</p>
                )}
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className={`p-2 w-full border-b outline-none placeholder:text-sm ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-[#2FC18B]`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Institute */}
            <div>
              <input
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                type="text"
                placeholder="School/Institute Name"
                className={`p-2 w-full border-b outline-none placeholder:text-sm ${
                  errors.institute ? "border-red-500" : "border-gray-300"
                } focus:border-[#2FC18B]`}
              />
              {errors.institute && (
                <p className="text-red-600 text-sm">{errors.institute}</p>
              )}
            </div>

            {/* State & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full p-2 border-b outline-none ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } focus:border-[#2FC18B]`}
                >
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                </select>
                {errors.state && (
                  <p className="text-red-600 text-sm">{errors.state}</p>
                )}
              </div>
              <div>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full p-2 border-b outline-none ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } focus:border-[#2FC18B]`}
                >
                  <option>Select City</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                </select>
                {errors.city && (
                  <p className="text-red-600 text-sm">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#23c7a5] hover:bg-[#1eae92] px-6 py-2 cursor-pointer rounded-lg mt-4 flex items-center gap-2"
            >
              <img
                src={plan}
                alt="Plan Icon"
                className="w-5 h-5"
              />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
