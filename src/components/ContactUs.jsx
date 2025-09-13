import React from "react";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/phtos/logo.png";

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full bg-amber-400 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-6xl overflow-hidden">
        
        {/* Contact Info Section */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center gap-6 bg-white rounded-xl shadow-lg">
  {/* Instagram */}
  <a
    href="https://instagram.com/crewaura_"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 text-gray-700 hover:text-pink-600 transition"
  >
    <FaInstagram className="text-pink-600 text-3xl" />
    <span className="text-lg font-semibold">crewaura_</span>
  </a>

  {/* Email */}
  <a
    href="mailto:crewaura11@gmail.com"
    className="flex items-center gap-4 text-gray-700 hover:text-red-500 transition"
  >
    <HiOutlineMail className="text-red-500 text-3xl" />
    <span className="text-lg font-semibold">crewaura11@gmail.com</span>
  </a>

  {/* WhatsApp */}
  <div className="flex items-start gap-4 text-gray-700 hover:text-green-600 transition">
    <FaWhatsapp className="text-green-600 text-3xl mt-1" />
    <div className="flex flex-col text-lg font-semibold">
      <a href="tel:+919967261992">+91 99672 61992</a>
      <a href="tel:+918828144647">+91 88281 44647</a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4 text-gray-700 hover:text-blue-500 transition">
    <FaPhoneAlt className="text-blue-500 text-3xl mt-1" />
    <div className="flex flex-col text-lg font-semibold">
      <a href="tel:+919967261992">+91 99672 61992</a>
      <a href="tel:+918828144647">+91 88281 44647</a>
    </div>
  </div>
</div>


        {/* Logo Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-red-950">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
