import React from "react";
import { Dribbble,  Twitter } from "lucide-react";
import Wrapper from "../../components/Wrapper";
import { Camera, Pencil, Palette, Square } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper className=" text-white py-16">
      <div className="container mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Image */}
          <div className="relative   rounded-2xl p-6 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg1.png)` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="w-full h-[340px] relative overflow-hidden bg-[linear-gradient(90deg,rgb(60,88,227)_-15%,rgb(194,235,255)_58%,rgb(90,181,226)_97%)] rounded-xl">
              <img
                src="/mainProfile1.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Self Intro */}
          <div className="w-full col-span-2  relative rounded-2xl overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-center pb-6">
              ✺ SELF-SUMMARY ✺
            </h2>
            <div className="relative rounded-2xl overflow-hidden group h-full flex items-center justify-between p-8">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/bg4.png)` }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

              {/* Content */}
              <div className=" z-10 flex flex-col">
                <div className="absolute top-0 left-8">
                  <img
                    src="/icon3.png"
                    alt="Icon"
                    className="w-16 h-20 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h2 className="text-3xl  font-bold text-white py-6">
                  Sujit <span className="">Vishwakarma</span>
                </h2>
                <p className="text-gray-300 mt-1 ">
                  Experienced Software Developer with a strong focus on modern
                  frontend technologies, particularly React.js and Tailwind CSS.
                  At Codenomix, a fast-paced tech startup, I’ve played key roles
                  in designing, developing, and leading end-to-end web
                  applications that are scalable, responsive, and user-centric.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Experience */}
          <div className="relative  rounded-2xl p-6 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg4.png)` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="relative space-y-4">
              <h4 className="uppercase text-sm text-gray-400">Experience</h4>
              <div>
                <p className="text-sm text-gray-400">2024 - 2024</p>
                <p className="font-semibold">Frontend Developer</p>
                <p className="text-gray-400 text-sm">Codenomix</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">2024 - 2025</p>
                <p className="font-semibold">Software Developer</p>
                <p className="text-gray-400 text-sm">Omnichex</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative  rounded-2xl p-6 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg4.png)` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
            <div className="relative space-y-4">
              <h4 className="uppercase text-sm text-gray-400">Education</h4>
              <div>
                <p className="text-sm text-gray-400">2020 - 2024</p>
                <p className="font-semibold">
                  Bachelor Degree in Electronics and Telecommunication
                </p>
                <p className="text-gray-400 text-sm">
                  Veer Surendra Sai University of Technology
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">2017 - 2019</p>
                <p className="font-semibold">Intermediate in Science </p>
                <p className="text-gray-400 text-sm">Stewart Science College</p>
              </div>
            </div>
          </div>
        </div>
        {/* third section  */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* profile*/}
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

          {/* Services Offering Card (double width) */}
          <Link
          to={"/contact"}
          className="relative rounded-2xl col-span-2 overflow-hidden group h-[250px] flex items-center justify-between p-8"
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

          {/* credential Card */}
          <Link
              to="/credentials"
              className="relative rounded-2xl overflow-hidden group lg:h-[250px] h-auto flex items-center "
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/bg1.png)` }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
              {/* content section  */}
              <div className="relative z-10 p-6 flex flex-col gap-4">
                <div className="w-full h-auto lg:h-[120px] relative overflow-hidden">
                  <img
                    src="/sign.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-4 justify-between w-full">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      More About Me
                    </p>
                    <h2 className="text-2xl font-bold">Credentials</h2>
                  </div>
                  <div>
                    <img
                      src="/icon.svg"
                      alt="Icon"
                      className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
