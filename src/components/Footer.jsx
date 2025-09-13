import React from 'react';
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div>
         <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">📞 Contact Us</h2>
<div className="space-y-2 text-gray-300">
  <a
    href="tel:+91 8828144647"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <FaPhoneAlt /> +91 8828144647
  </a>
  <a
    href="tel:+91 99672 61992"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <FaPhoneAlt /> +91 99672 61992
  </a>
  <a
    href="mailto:crewaura11@gmail.com"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <FaEnvelope /> crewaura11@gmail.com
  </a>
</div>

        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">🌐 Connect With Us</h2>
          <div className="flex gap-6 text-2xl text-gray-400">
            <a
              href="https://wa.me/+919967261992"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/crewaura_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:crewaura11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Crew Aura. Crafted with ❤️ in India.
      </div>
    </footer>
  );
};

export default Footer;
