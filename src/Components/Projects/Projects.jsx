import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight, FaReact, FaJs, FaNodeJs, FaStripe } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress, SiReactrouter, SiJsonwebtokens } from "react-icons/si";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";


// Project data
const projects = [
  {
    id: "01",
    name: "Medical Camp site",
    description:
      "A Medical Camp Management System (MCMS) using the MERN stack. This system helps the Organizer, and Participants easily manage and coordinate medical camps.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#00A3D9]" /> },
      { name: "Stripe", icon: <FaStripe className="text-[#635BFF]" /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
    ],
    liveLink: "https://b11a12-medicamp-site.web.app",
    githubLink: "https://github.com/Mahfujmazid47/medicamp_project",
    images: [
      "https://i.ibb.co.com/PvjjRNW6/Screenshot-2025-08-11-203400.png",
      "https://i.ibb.co.com/99pXPSgS/Screenshot-2025-08-11-203427.png",
      "https://i.ibb.co.com/9k50Mnyj/Screenshot-2025-08-11-203454.png",
    ],
  },
  {
    id: "02",
    name: "WhereIsIt",
    description:
      "This Lost and Found Website is a full-stack platform designed to help users report lost items and browse found items. The project provides practical experience with key development areas like user authentication, file uploads, database management, and API integration.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#00A3D9]" /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
    ],
    liveLink: "https://b11a11-whereisit-site.web.app",
    githubLink: "https://github.com/Mahfujmazid47/whereisit-project",
    images: [
      "https://i.ibb.co.com/zhCVbLrx/Screenshot-2025-08-11-220030.png",
      "https://i.ibb.co.com/WvkGL9yx/Screenshot-2025-08-11-220102.png",
      "https://i.ibb.co.com/svjcKk8H/Screenshot-2025-08-11-220133.png",
      "https://i.ibb.co.com/dsHm44qJ/Screenshot-2025-08-11-220155.png",
    ],
  },
  {
    id: "03",
    name: "Freelancify",
    description:
      "A platform that helps individuals find freelancers for small tasks and freelancers to find work opportunities. Users can post tasks, bid on tasks, and connect with each other based on skills, budget, and deadlines.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#00A3D9]" /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
    ],
    liveLink: "https://b11a10-freelance-side.web.app",
    githubLink: "https://github.com/Mahfujmazid47/freelance_site",
    images: [
      "https://i.ibb.co.com/bg07qs38/Screenshot-2025-08-11-221105.png",
      "https://i.ibb.co.com/cc0d5GZG/Screenshot-2025-08-11-221128.png",
      "https://i.ibb.co.com/WNjFwWzK/Screenshot-2025-08-11-221216.png",
      "https://i.ibb.co.com/nNPSzgDP/Screenshot-2025-08-11-221144.png",
      "https://i.ibb.co.com/Q36mTc8d/Screenshot-2025-08-11-221202.png",
    ],
  },
];

const Projects = () => {

  return (
    <section id="projects" className="bg-gradient-to-r from-primary/5 to-secondary/5 py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-500 text-center mb-12 tracking-wide" data-aos="fade-down">
          Projects Showcase
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-10"
              data-aos="fade-up"
            >
              {/* Left Side */}
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-6xl font-bold text-blue-500">{project.id}</h3>
                <h4 className="text-3xl font-bold">{project.name}</h4>
                {/* <p className="leading-relaxed">{project.description}</p> */}
                    <p className="text-xl font-semibold mb-3">Tech Stack:</p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((t, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 rounded-full shadow-sm border"
                    >
                      <span className="text-xl">{t.icon}</span>
                      <span className="text-sm font-medium">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  {/* <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn button bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg text-white hover:scale-105 transition-transform"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn button btn-outline hover:text-white hover:bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg hover:scale-105 text-blue-500 transition-transform"
                  >
                    GitHub
                  </a> */}
                  <Link
                    to={`/project_details/${project.id}`}
                    className="btn button text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg hover:scale-105  transition-transform"
                  >
                    View Details <FaArrowRightLong />
                  </Link>
                </div>
              </div>

              {/* Right Side - Carousel */}
              <div className="lg:w-1/2 relative">
                <Carousel
                  showThumbs={false}
                  infiniteLoop
                  autoPlay
                  showStatus={false}
                  renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                      <button
                        onClick={onClickHandler}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100"
                      >
                        <FaArrowLeft className="text-gray-800" />
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                      <button
                        onClick={onClickHandler}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100"
                      >
                        <FaArrowRight className="text-gray-800" />
                      </button>
                    )
                  }
                >
                  {project.images.map((img, idx) => (
                    <div key={idx}>
                      <img
                        src={img}
                        alt={`${project.name} screenshot ${idx + 1}`}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
