// HeroSectionThree.jsx
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSectionThree = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6  p-6">
      {/* Left Side Stats */}
      <div className="w-full lg:p-10 p-3 relative rounded-2xl overflow-hidden">
        {/* Background for main div */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/bg1.png)` }}
        ></div>

        {/* Overlay for main div */}
        <div className="absolute inset-0 bg-primary-cardClr/60"></div>

        {/* Content above overlay */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden group h-[180px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg1.png)` }}
            ></div>
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-3xl font-bold text-white">01</h2>
              <p className="text-gray-300 text-sm mt-2">YEARS EXPERIENCE</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden group h-[180px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg2.png)` }}
            ></div>
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-3xl font-bold text-white">+110</h2>
              <p className="text-gray-300 text-sm mt-2">CLIENTS WORLDWIDE</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden group h-[180px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg3.png)` }}
            ></div>
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-3xl font-bold text-white">+210</h2>
              <p className="text-gray-300 text-sm mt-2">TOTAL PROJECTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side CTA */}
      <div className="w-full l relative rounded-2xl overflow-hidden">
        <Link
          to={"/contact"}
          className="relative rounded-2xl overflow-hidden group h-[260px] flex items-center justify-between p-8"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/bg4.png)` }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col">
            <div className="">
              <img
                src="/icon3.png"
                alt="Icon"
                className="w-16 h-20 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white py-6">
              Let’s <br></br> work{" "}
              <span className="text-blue-500">together.</span>
            </h2>
          </div>

          <div className="absolute bottom-10 right-10">
            <img
              src="/icon.svg"
              alt="Icon"
              className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSectionThree;
