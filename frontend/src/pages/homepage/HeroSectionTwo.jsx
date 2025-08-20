// src/components/HeroSectionTwo.jsx
import { Link } from "react-router-dom";
import {
  Camera,
  Pencil,
  Palette,
  Square,
  Dribbble,
  Twitter,
} from "lucide-react";

export default function HeroSectionTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6">
      {/* GFonts Card */}
      <Link
        to="/blog"
        className="relative rounded-2xl overflow-hidden group h-[250px] flex items-end lg:col-span-1"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/bg1.png)` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col justify-between w-full h-full">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="/gfonts.png"
              alt="GFonts"
              className="w-44 h-32 object-contain"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400">
                Blog
              </p>
              <h2 className="text-xl font-bold">GFonts</h2>
            </div>
            <img
              src="/icon.svg"
              alt="Icon"
              className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </Link>

      {/* Services Offering Card (double width) */}
      <Link
        to="/services"
        className="relative rounded-2xl overflow-hidden group h-[250px] flex items-end lg:col-span-2"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/bg1.png)` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col justify-between w-full h-full">
          <div className="flex items-center justify-center  gap-6 lg:gap-20 w-full h-full">
            <Camera className="w-10 h-10 text-white" />
            <Pencil className="w-10 h-10 text-white" />
            <Palette className="w-10 h-10 text-white" />
            <Square className="w-10 h-10 text-white" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400">
                Specialization
              </p>
              <h2 className="text-xl font-bold">Services Offering</h2>
            </div>
            <img
              src="/icon.svg"
              alt="Icon"
              className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </Link>

      {/* Profiles Card */}
      <Link
        to="/profiles"
        className="relative rounded-2xl overflow-hidden group h-[250px] flex items-end lg:col-span-1"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/bg1.png)` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col justify-between w-full h-full">
          <div className="relative rounded-2xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg1.png)` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="flex items-center justify-center gap-6 w-full h-full p-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/40 hover:bg-white hover:text-black  transition-all">
                <Dribbble className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/40 hover:bg-white hover:text-black  transition-all">
                <Twitter className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400">
                Stay With Me
              </p>
              <h2 className="text-xl font-bold">Profiles</h2>
            </div>
            <img
              src="/icon.svg"
              alt="Icon"
              className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
