// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons
import { Link, useNavigate } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-[#0F0F0F] text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 onClick={() => navigate("/")} className="text-2xl font-bold cursor-pointer">
          Grid<span className="text-gray-400">X</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-400 font-medium">
          <li>
            <Link to="/" className="hover:text-white cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white cursor-pointer">
              Works
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-primary-btnClr px-5 py-2 rounded-full font-medium hover:bg-white hover:text-primary-btnClr">
            Let&apos;s talk
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              className="w-7 h-7 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="w-7 h-7 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-400 font-medium">
            <li>
              <Link to="/" className="hover:text-white cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white cursor-pointer">
                Works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
          <button className="mt-4 w-full bg-gray-800 px-5 py-2 rounded-full font-medium hover:bg-gray-700">
            Let&apos;s talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
