import React from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Github, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const reveal = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const ProfileCard = () => {
  const navigate = useNavigate(); 

  return (
    <div className="sticky top-20">
      <div className="mx-auto w-full max-w-[300px] rounded-2xl relative p-6 overflow-hidden transition-colors shadow-lg">
        <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

        {/* content section  */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          <div className="w-[224px] h-[224px] relative overflow-hidden bg-[linear-gradient(90deg,rgb(60,88,227)_-15%,rgb(194,235,255)_58%,rgb(90,181,226)_97%)] rounded-2xl">
            <img
              src="/mainProfile1.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Sujit Vishwakarma</h2>
            <p className="text-gray-400">@sujitvishwakarma</p>
          </div>

          {/* social icons */}
          <div className="mt-4 flex items-center gap-3 text-zinc-300">
            <a
              className="h-12 w-12 grid place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700"
              href="#"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
            <a
              className="h-12 w-12 grid place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700"
              href="#"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              className="h-12 w-12 grid place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700"
              href="#"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              className="h-12 w-12 grid place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700"
              href="#"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <button
            onClick={() => navigate("/contact")} 
            className="mt-5 w-full rounded-xl text-white bg-primary-btnClr text-base font-semibold py-3 hover:bg-zinc-200 hover:text-primary-btnClr transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};


// Section block for the right side
const Section = ({ title, children }) => (
  <motion.section variants={reveal} className="space-y-4">
    <h4 className="text-zinc-300 text-sm md:text-lg font-semibold tracking-widest uppercase">
      {title}
    </h4>
    <div className="space-y-5">{children}</div>
  </motion.section>
);

const Item = ({ period, position, org, desc, link }) => (
  <div className="space-y-1">
    <p className="text-xs md:text-sm text-zinc-400">{period}</p>
    <a
      href={link || "#"}
      className="text-base md:text-lg font-medium text-sky-400 hover:text-sky-300"
    >
      {position}
    </a>
    <p className="text-sm md:text-base text-zinc-300">{org}</p>
    <p className="text-sm md:text-base leading-7 text-zinc-400">{desc}</p>
  </div>
);

const Credentials = () => {
    
  return (
    <section className="w-full text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12">
          {/* Left: sticky profile */}
          <div>
            <ProfileCard />
          </div>

          {/* Right: scrollable content with reveal animations */}
          <div className="h-full overflow-y-auto no-scrollbar pr-2 lg:pr-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-14"
            >
              <Section title="About Me">
                <p className="text-base md:text-lg leading-8 text-zinc-300">
                  Experienced Software Developer with a strong focus on modern frontend technologies, particularly React.js and Tailwind CSS. At Codenomix, a fast-paced tech startup, I’ve played key roles in designing, developing, and leading end-to-end web applications that are scalable, responsive, and user-centric.
                </p>
                <p className="text-base md:text-lg leading-8 text-zinc-300">
                  Currently exploring design systems, motion-driven
                  storytelling, and the boundary between utility and delight.
                </p>
              </Section>

              <Section title="Experience">
                <Item
                  period="2024 — Present"
                  position="Software Developer"
                  org="Omnichex"
                  desc="Led end-to-end product design and front-end architecture for multi-brand platform, introduced a component library and motion guidelines."
                />
                <Item
                  period="2024 — 2024"
                  position="Front-end Developer"
                  org="Codenomix.inc"
                  desc="Led end-to-end product design and front-end architecture for multi-brand platform, introduced a component library and motion guidelines."
                />
              </Section>

              <Section title="Education">
                <Item
                  period="2020 — 2024"
                  position="Bachelor’s Degree in Electronic and Telecommunication"
                  org="Veer Surendra Sai University of Technology"
                  desc="Behavioral research background applied to UX strategy and experimentation."
                />
                <Item
                  period="2017 — 2019"
                  position="Intermediate in Science Stream"
                  org="Stewaret Science collage"
                  desc="Focused on interactive "
                />
                <Item
                  period="2010 — 2017"
                  position="Matriculation"
                  org="Modern Public School"
                  desc="Focused on interactive "
                />
              </Section>

              <Section title="Skills">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 text-base md:text-lg text-zinc-300">
                  <div>
                    <p className="font-semibold text-white">JavaScript</p>
                    <p className="text-sm text-zinc-400">React, Next.js</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Programming</p>
                    <p className="text-sm text-zinc-400">Java, C++</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Design</p>
                    <p className="text-sm text-zinc-400">Figma, Motion</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Styling</p>
                    <p className="text-sm text-zinc-400">Tailwind CSS</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">DBs</p>
                    <p className="text-sm text-zinc-400">MongoDB, mySQL</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tooling</p>
                    <p className="text-sm text-zinc-400">Git, Vs Code</p>
                  </div>
                
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 text-base md:text-lg text-zinc-300">
                    <p className="text-sm text-zinc-400">HTML</p>
                    <p className="text-sm text-zinc-400">CSS</p>
                    <p className="text-sm text-zinc-400">JavaScript</p>
                    <p className="text-sm text-zinc-400">React</p>
                    <p className="text-sm text-zinc-400">Svelte</p>
                    <p className="text-sm text-zinc-400">Tailwind CSS</p>
                    <p className="text-sm text-zinc-400">Bootstrap</p>
                </div>
              </Section>

              <Section title="Awards">
                <ul className="list-disc pl-5 text-base md:text-lg text-zinc-300 space-y-2">
                  <li>Rank 5th in Hackathon — 2024</li>
                  <li>Best Interaction — 2025</li>
                </ul>
              </Section>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
