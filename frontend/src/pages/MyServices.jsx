import React from "react";
import Wrapper from "../components/Wrapper";
import {
  Camera,
  Pencil,
  Palette,
  Square,
  Dribbble,
  Twitter,
  Globe,
  Filter,
  ChromeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const MyServices = () => {
  return (
    <Wrapper className="py-12">
      <div className="flex flex-col w-full gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* left part  */}
          <div className="relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center h-full">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/bg1.png)` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center h-full p-8 lg:py-20">
            <div className="flex flex-col gap-8 w-full z-10 h-full justify-between">
              <div className="flex items-center space-x-6">
                <Camera className="w-10 h-10 text-white" />
                <span className="uppercase font-medium">Photography</span>
              </div>
              <div className="flex items-center space-x-6">
                <Pencil className="w-10 h-10 text-white" />
                <span className="uppercase font-medium">Web Designing</span>
              </div>
              <div className="flex items-center space-x-6">
                <Globe className="w-10 h-10 text-white" />
                <span className="uppercase font-medium">Web Development</span>
              </div>
              <div className="flex items-center space-x-6">
                <ChromeIcon className="w-10 h-10 text-white" />
                <span className="uppercase font-medium">
                  Custom Development
                </span>
              </div>
            </div>

            </div>
          </div>

          {/* Self Intro */}
          <div className="w-full col-span-2  relative rounded-2xl overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-center pb-6 uppercase">
              ✺ My Offerings ✺
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
              <div className=" z-10 flex flex-col pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
                  <div className="flex flex-col gap-4 relative rounded-2xl p-6 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(/bg1.png)` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
                    <h4 className="uppercase text-base font-semibold">
                      Photography
                    </h4>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 relative rounded-2xl p-6 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(/bg1.png)` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
                    <h4 className="uppercase text-base font-semibold">
                      Web Designing
                    </h4>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 relative rounded-2xl p-6 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(/bg1.png)` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
                    <h4 className="uppercase text-base font-semibold">
                      Branding
                    </h4>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 relative rounded-2xl p-6 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(/bg1.png)` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
                    <h4 className="uppercase text-base font-semibold">
                      Developemnt
                    </h4>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section  */}
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

export default MyServices;
