import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/DestLogo.png"
export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-10 px-6 sm:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Slogan */}
        <div>
       
          <img
            src={logo}
            alt="Dest India Logo"
            className="h-12 mb-3"
          />
          <p className="italic text-gray-300">Desh Ki Apni Dukaan</p>

          {/* App Store Links */}
          <div className="flex gap-3 mt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Replacement Policy</li>
            <li className="hover:text-white cursor-pointer">Shipping Information</li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer">Dest India Care</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold mb-3">Stay Connected</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to get latest updates, trends and exclusive offers from Dest India.
          </p>
          <div className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border-2 border-gray-400 rounded-md text-white outline-none"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 text-gray-300 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Dest India. All rights reserved.
      </div>
    </footer>
  );
}
