"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This ensures that we only enable the state after the component is mounted on the client-side
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return null or an empty fragment if the component is still being mounted
    return null;
  }

  return (
    <center>
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-lg border border-gray-200 rounded-lg my-2 p-3 w-[40%] md:w-[70%] lg:w-[40%] xl:w-[60%]">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link href="/" className="text-gray-900 text-lg font-semibold" style={{ fontFamily: "Poppins, serif" }}>
            XQuotes
          </Link>

          {/* Hamburger Menu Button (Hidden on Large Screens) */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/about" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>About</Link></li>
            <li><Link href="https://x.com/0armaan025/" target="new" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>X</Link></li>
            <li><Link href="https://github.com/0Armaan025/xquotes" target="new" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: "Poppins, serif" }}>GitHub</Link></li>
          </ul>
        </div>

        {/* Mobile Menu (Shows When Toggled) */}
        {isOpen && (
          <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
            <li><Link href="/about" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="https://x.com/0Armaan025" target="new" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>X</Link></li>
            <li><Link href="https://github.com/0Armaan025/xquotes" target="new" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>GitHub</Link></li>
          </ul>
        )}
      </nav>
    </center>
  );
};

export default Navbar;
