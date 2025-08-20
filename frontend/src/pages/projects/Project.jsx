import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, category, title, href = "/projects/slug" }) => (
  <Link
    to={href}
    className="block overflow-hidden group focus:outline-none focus:ring-2 focus:ring-zinc-500/60 rounded-2xl"
  >
    <div className="rounded-2xl relative p-6 overflow-hidden transition-colors group-hover:border-zinc-700">
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
      {/* Fixed vertical split */}
      <div className="flex flex-col h-[360px] md:h-[380px]">
        {/* 90% image */}
        <div className="basis-[90%] grow rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* 10% footer */}
        <div className="basis-[10%] shrink-0 mt-4 flex items-center">
          <div className="min-w-0">
            <p className="text-[10px] tracking-widest uppercase text-zinc-400">
              {category}
            </p>
            <h3 className="text-white text-lg font-semibold truncate">
              {title}
            </h3>
          </div>

          {/* Icon (decorative) */}
          <span className="ml-auto inline-flex h-12 w-12 items-center justify-center ">
            <img
              src="/icon.svg"
              alt="Icon"
              className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

const Project = () => {
  const all = [
    {
      image: "/geeknomix.png",
      category: "Education",
      title: "Geeknomix",
      href: "/projects/geeknomix",
    },
    {
      image: "/hireintime-project.png",
      category: "Job Seeker",
      title: "HireInTime",
      href: "/projects/hireintime",
    },
    {
      image: "/credchex-project.png",
      category: "Community",
      title: "Credchex",
      href: "/projects/credchex",
    },
    {
      image: "/yogMania.png",
      category: "Yoga",
      title: "YogMania",
      href: "/projects/yogMania",
    },
    {
      image: "/my-works.png",
      category: "Mobile Designing",
      title: "Submarine",
      href: "/projects/submarine",
    },
    {
      image: "/good-emplyee.png",
      category: "Web Designing",
      title: "HydraMerc",
      href: "/projects/hydramerc",
    },
  ];

  const leftCards = all.slice(0, 2);
  const rightCards = all.slice(2, 6);

  return (
    <section className="w-full  text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left 40% */}
          <div className="lg:w-[40%] w-full flex flex-col gap-6">
            {leftCards.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          {/* Right 60% */}
          <div className="lg:w-[60%] w-full">
            <div className="mb-6 md:mb-8 flex items-center gap-3">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                ✺ ALL PROJECTS ✺
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rightCards.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
