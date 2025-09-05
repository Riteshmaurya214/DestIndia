import React from "react";
import Vector from "../assets/Vector.png";
import DestIndiaLogo from "../assets/DestLogo.png";
import DropDownicon from "../assets/Dropicon.png";
import Indiaicon from "../assets/image2.png";
import Profileicon from "../assets/profile.png";
import Bagicon from "../assets/bag.png";
import Lux from "../assets/Lux.png";

export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-[8px] sm:text-xs md:text-sm flex justify-end gap-2 sm:gap-4 md:gap-6 py-4 px-2 ">
        <a href="#" className="hover:underline">Track Orders</a>
        <a href="#" className="hover:underline">Wishlist</a>
        <a href="#" className="hover:underline">Gift Card</a>
        <a href="#" className="hover:underline">Sign in/Sign Up</a>
        <a href="#" className="flex gap-1 sm:gap-2 items-center hover:underline">
          <img className="h-2 w-3 sm:h-3 sm:w-4" src={Vector} alt="icon" />
          Become a Seller
        </a>
      </div>

      {/* Main Navbar */}
      <div className="flex bg-[#2C2C2C] items-center justify-between px-2 sm:px-4 md:px-8 py-2">
        {/* Left: Logo */}
        <img
          className="h-6 sm:h-8 md:h-12 cursor-pointer"
          src={DestIndiaLogo}
          alt="Dest India Logo"
        />

    
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 mx-2 sm:mx-4 md:mx-10">
    
          <button className=" flex items-center px-2 content-center bg-[#3A3A3A] text-white  rounded-md gap-1  hover:bg-[#4A4A4A]">
            <span className="font-medium hidden md:block  py-3.5  md:text-xs ">Categories</span>
            <img src={DropDownicon} alt="Dropdown" className="h-2 ml-2 mr-3 hidden md:block  sm:h-2 md:h-2 " />
          </button>

       
          <input
            className="flex-1 bg-[#444] border border-gray-600 rounded px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-sm md:text-base text-white placeholder-gray-300 focus:outline-none"
            placeholder="Search"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
     
          <div className="relative">
            <img className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" src={Indiaicon} alt="India" />
            <img
              src={Lux}
              alt="Lux Icon"
              className="absolute top-[-2px] right-[-8px] sm:right-[-10px] md:right-[-13px] w-3 sm:w-4 md:w-auto"
            />
          </div>

          <img className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 cursor-pointer" src={Profileicon} alt="Profile" />
          <img className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 cursor-pointer" src={Bagicon} alt="Bag" />
        </div>
      </div>
    </nav>
  );
}
