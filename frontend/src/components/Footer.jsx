import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-10">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">GridX</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-white transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                WORKS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-sm">
          © All rights reserved by{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Sujit Vishwakarma
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
