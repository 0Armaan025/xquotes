"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <center>
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-lg border border-gray-200 rounded-lg my-2 p-3 w-[40%] md:w-[70%] lg:w-[40%] xl:w-[60%]">
      <div className="flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a href="#" className="text-gray-900 text-lg font-semibold" style={{ fontFamily: "Poppins, serif" }}>
          XQuotes
        </a>

        {/* Hamburger Menu Button (Hidden on Large Screens) */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>About</a></li>
          <li><a href="#x" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>X</a></li>
          <li><a href="https://github.com" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>GitHub</a></li>
        </ul>
      </div>

      {/* Mobile Menu (Shows When Toggled) */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <li><a href="#home" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#x" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>X</a></li>
          <li><a href="https://github.com" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>GitHub</a></li>
        </ul>
      )}
    </nav>
    </center>
  );

};

export default Navbar;
