import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight, FaReact, FaJs, FaNodeJs, FaStripe } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress, SiReactrouter, SiJsonwebtokens } from "react-icons/si";


// Project data
const projects = [
  {
    id: "01",
    name: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with payment integration, authentication, and dynamic product management.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#00A3D9]" /> },
      { name: "Stripe", icon: <FaStripe className="text-[#635BFF]" /> },
    ],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/your-repo",
    images: [
      "/projects/ecom1.png",
      "/projects/ecom2.png",
      "/projects/ecom3.png",
    ],
  },
  {
    id: "02",
    name: "Social Media App",
    description:
      "A modern social networking platform where users can connect, share, and interact with posts and stories.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/your-repo",
    images: [
      "/projects/social1.png",
      "/projects/social2.png",
      "/projects/social3.png",
    ],
  },
  {
    id: "03",
    name: "Portfolio Website",
    description:
      "A professional portfolio to showcase my skills, projects, and achievements with smooth animations.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiFirebase className="text-[#38BDF8]" /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
    ],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/your-repo",
    images: [
      "/projects/portfolio1.png",
      "/projects/portfolio2.png",
    ],
  },
];

const Projects = () => {

  return (
    <section id="projects" className="bg-gradient-to-r from-primary/5 to-secondary/5 py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-12 tracking-wide" data-aos="fade-down">
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
                <h3 className="text-6xl font-bold text-gray-300">{project.id}</h3>
                <h4 className="text-2xl font-bold text-gray-900">{project.name}</h4>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map((t, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border"
                    >
                      <span className="text-xl">{t.icon}</span>
                      <span className="text-sm font-medium">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary shadow-lg hover:scale-105 transition-transform"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary shadow-lg hover:scale-105 transition-transform"
                  >
                    GitHub
                  </a>
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
