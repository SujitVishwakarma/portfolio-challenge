// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  const items = [
    "WEB DEVELOPER",
    "FRONTEND DEVELOPER",
    "WEB DESIGNER",
    "JAVA DEVELOPER",
    "FULL STACK",
  ];

  return (
    <div className="w-full flex lg:flex-row flex-col gap-6 lg:p-6 p-4 text-white">
      {/* LEFT SIDE - About Card */}
      <div>
        <Link
          to="/about"
          className="relative rounded-2xl overflow-hidden group lg:h-[350px] h-auto flex items-center md:col-span-2"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/bg1.png)` }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
          {/* Content */}
          <div className="relative z-10 p-10 flex lg:flex-row flex-col gap-4">
            <div className="w-[224px] h-[224px] relative overflow-hidden bg-[linear-gradient(90deg,rgb(60,88,227)_-15%,rgb(194,235,255)_58%,rgb(90,181,226)_97%)] rounded-tl-4xl rounded-br-4xl">
              <img
                src="/mainProfile1.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-wider text-gray-400">
                A WEB DEVELOPER
              </p>
              <h2 className="text-3xl font-bold flex flex-col">
                <span>Sujit</span>
                <span>Vishwakarma</span>
              </h2>
              <p className="text-gray-300 mt-1 max-w-xs">
                I am a passionate and results-driven Software Development
                Engineer with extensive experience in developing scalable,
                user-centric web applications.
              </p>
            </div>
            {/* star icon  */}
            <div className="absolute bottom-3 right-8">
              <img
                src="/icon.svg"
                alt="Icon"
                className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* RIGHT SIDE - Credentials + Projects */}
      <div className="flex flex-col gap-6">
        {/* slider text will here  */}
        <div className="relative rounded-full overflow-hidden group h-16 flex items-center w-full max-w-lg">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/bg1.png)` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

          {/* Content */}
          <div className="w-full relative z-10 px-6">
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <div className="flex items-center text-xl font-semibold">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span>{item}</span>
                    {index < items.length - 1 && (
                      <span className="flex items-center pr-4 justify-center h-2 text-gray-500">
                        ★
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </marquee>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4">
          {/* Credentials Card */}
          <div>
            <Link
              to="/credentials"
              className="relative rounded-2xl overflow-hidden group lg:h-[250px] h-auto flex items-center md:col-span-2"
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

          {/* Projects Card */}
          <div>
            <Link
              to="/projects"
              className="relative rounded-2xl overflow-hidden group lg:h-[250px] h-auto flex items-center md:col-span-2"
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
                    src="/my-works.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-4 justify-between w-full">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Showcase
                    </p>
                    <h2 className="text-2xl font-bold">Projects</h2>
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
      </div>
    </div>
  );
}
