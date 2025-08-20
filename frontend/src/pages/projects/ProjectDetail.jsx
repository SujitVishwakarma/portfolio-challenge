import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../../data/projectData.json"; // Assuming you have a data file with project details

const ProjectDetail = () => {
  const { title } = useParams();
  const project = projectData.find(
    (p) => p.title.toLowerCase() === title.toLowerCase()
  );

  if (!project) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <p className="text-zinc-400 mt-2">
          The project you’re looking for doesn’t exist.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-5 py-16 text-white/80">
      {/* Heading */}
      <p className="text-start text-sm mb-4 uppercase text-gray-500">
        Project : {project.title}
      </p>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
        ✺ {project.heading} ✺
      </h1>

      {/* Main Image */}
      <img
        src={project.mainImage}
        alt={project.title}
        className="rounded-2xl w-full mb-10"
      />

      {/* Features + About Section */}
      <div className="mb-10">
        <div className="bg-zinc-900/50 p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Box: Key Features */}
            <div className="bg-zinc-800/40 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Right Box: About */}
            <div className="bg-zinc-800/40 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              {project.about.split("\n").map((para, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] mb-10">
        <img
          src={project.mainImage}
          alt={project.title}
          className="rounded-2xl w-full h-full object-fill mb-10"
        />
      </div>

      {/* Extra Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Screenshot ${i + 2}`}
            className="rounded-2xl"
          />
        ))}
      </div>

      {/* Main Box */}
      <div className="flex flex-col md:flex-row gap-8 mb-10 bg-zinc-800/40 p-6 rounded-2xl overflow-hidden">
        {/* Left Box (30%) */}
        <div className="md:w-1/3 bg-zinc-800/40 p-6 rounded-xl relative">
          <div className="absolute top-0 right-8">
            <img
              src="/icon3.png"
              alt="Icon"
              className="w-16 h-20 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="flex flex-col space-y-4 text-zinc-300">
            <p>
              <span className="font-bold">Year:</span> {project.year}
            </p>
            <p>
              <span className="font-bold">Developer:</span>{" "}
              {project.developerName}
            </p>
            <p>
              <span className="font-bold">Type:</span> {project.projectType}
            </p>
            <p>
              <span className="font-bold">Title:</span> {project.title}
            </p>
          </div>
        </div>

        {/* Right Box (70%) */}
        <div className="md:w-2/3  p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Detailed Description</h2>
          <p className="text-zinc-300 leading-relaxed">{project.detailDes}</p>
        </div>
      </div>

      <div className="w-full h-[300px] mb-10">
        <img
          src={project.mainImage}
          alt={project.title}
          className="rounded-2xl w-full h-full object-fill mb-10"
        />
      </div>
    </section>
  );
};

export default ProjectDetail;
