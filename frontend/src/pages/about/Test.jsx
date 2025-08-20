import React from 'react'

const Test = () => {
  return (
    <div>
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
                <p className="font-semibold">Bachelor Degree in Electronics and Telecommunication</p>
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

          {/* Profiles */}
          <div className="relative bg-[url('/bg-pattern.png')] bg-cover bg-center rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black/50 rounded-2xl" />
            <div className="relative flex space-x-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/40">
                <Dribbble className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/40">
                <Twitter className="w-8 h-8" />
              </div>
            </div>
            <p className="relative text-sm mt-4 text-gray-400">Stay with me</p>
            <h4 className="relative font-medium">Profiles</h4>
          </div>

          {/* Work Together */}
          <div className="relative bg-[url('/bg-pattern.png')] bg-cover bg-center rounded-2xl p-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 rounded-2xl" />
            <h3 className="relative text-2xl font-bold">
              Let&apos;s work <span className="text-blue-500">together.</span>
            </h3>
          </div>

          {/* Credentials */}
          <div className="relative bg-[url('/bg-pattern.png')] bg-cover bg-center rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black/50 rounded-2xl" />
            <img
              src="/signature.png"
              alt="Signature"
              className="relative w-24"
            />
            <p className="relative text-sm mt-4 text-gray-400">More About Me</p>
            <h4 className="relative font-medium">Credentials</h4>
          </div>
    </div>
  )
}

export default Test