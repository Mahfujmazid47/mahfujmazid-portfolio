import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaReact, FaJs, FaNodeJs, FaStripe, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress, SiReactrouter, SiJsonwebtokens } from "react-icons/si";
import { useParams, Link } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
    {
        id: "01",
        name: "Medical Camp site",
        description:
            "A Medical Camp Management System (MCMS) using the MERN stack. This system helps the Organizer, and Participants easily manage and coordinate medical camps.",
        tech: [
            { name: "React", icon: <FaReact /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "JWT", icon: <SiJsonwebtokens /> },
            { name: "Stripe", icon: <FaStripe /> },
            { name: "React Router", icon: <SiReactrouter /> },
        ],
        liveLink: "https://b11a12-medicamp-site.web.app",
        githubLink: "https://github.com/Mahfujmazid47/medicamp_project",
        images: [
            "https://i.ibb.co.com/PvjjRNW6/Screenshot-2025-08-11-203400.png",
            "https://i.ibb.co.com/99pXPSgS/Screenshot-2025-08-11-203427.png",
            "https://i.ibb.co.com/9k50Mnyj/Screenshot-2025-08-11-203454.png",
        ],
        challenges: [
            "Managing authentication flows",
            "Optimizing database queries for performance",
            "Integrating Stripe payment securely",
        ],
        futurePlans: [
            "Add AI-powered recommendations",
            "Enhance analytics dashboard",
            "Develop a mobile app version",
        ]
    },
    {
        id: "02",
        name: "WhereIsIt",
        description:
            "This Lost and Found Website is a full-stack platform designed to help users report lost items and browse found items. The project provides practical experience with key development areas like user authentication, file uploads, database management, and API integration.",
        tech: [
            { name: "React", icon: <FaReact /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "JWT", icon: <SiJsonwebtokens /> },
            { name: "React Router", icon: <SiReactrouter /> },
        ],
        liveLink: "https://b11a11-whereisit-site.web.app",
        githubLink: "https://github.com/Mahfujmazid47/whereisit-project",
        images: [
            "https://i.ibb.co.com/zhCVbLrx/Screenshot-2025-08-11-220030.png",
            "https://i.ibb.co.com/WvkGL9yx/Screenshot-2025-08-11-220102.png",
            "https://i.ibb.co.com/svjcKk8H/Screenshot-2025-08-11-220133.png",
            "https://i.ibb.co.com/dsHm44qJ/Screenshot-2025-08-11-220155.png",
        ],
        challenges: [
            "Implementing reliable file uploads",
            "Ensuring real-time data updates",
            "Handling edge cases for lost item reports",
        ],
        futurePlans: [
            "Introduce advanced search filters",
            "Add mobile push notifications",
            "Improve UI for better accessibility",
        ],
    },
    {
        id: "03",
        name: "Freelancify",
        description:
            "A platform that helps individuals find freelancers for small tasks and freelancers to find work opportunities. Users can post tasks, bid on tasks, and connect with each other based on skills, budget, and deadlines.",
        tech: [
            { name: "React", icon: <FaReact /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "JWT", icon: <SiJsonwebtokens /> },
            { name: "React Router", icon: <SiReactrouter /> },
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
        challenges: [
            "Ensuring secure bidding process",
            "Handling user authentication",
            "Managing timely task updates",
        ],
        futurePlans: [
            "Add real-time chat between clients and freelancers",
            "Improve task recommendation engine",
            "Develop mobile app",
        ],
    },
];

const ProjectsDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

      const [openSection, setOpenSection] = useState(null);

  // Assuming you have 'project' from your params & projects array

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

    if (!project) {
        return <div className="text-center py-20 text-red-500">Project not found.</div>;
    }

    return (
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-24 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto">
                <div data-aos="fade-up">
                    <Link to="/" className="inline-flex button btn items-center gap-2 mb-8 text-white bg-gradient-to-r from-sky-400 hover:scale-105 transition-transform to-blue-600 rounded-full button">
                        <FaArrowLeft /> Back to Projects
                    </Link>
                </div>

                <h1 data-aos="fade-up"
                    data-aos-delay="100" className="text-4xl font-bold mb-4">{project.name}</h1>

                <div data-aos="fade-up"
                    data-aos-delay="200">
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

                <p data-aos="fade-up"
                    data-aos-delay="300" className="text-lg text-gray-700 my-6">{project.description}</p>

                <h2 data-aos="fade-up"
                    data-aos-delay="300" className="text-2xl font-semibold mb-3">Tech Stack</h2>
                <div data-aos="fade-up"
                    data-aos-delay="400" className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((t, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-sm border`}>
                            {t.icon}
                            <span>{t.name}</span>
                        </div>
                    ))}
                </div>

                <div data-aos="fade-up"
                    data-aos-delay="500" className="flex gap-4 mb-6">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn button bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg text-white hover:scale-105 transition-transform">
                        Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn button btn-outline hover:text-white hover:bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg hover:scale-105 text-blue-500 transition-transform">
                        GitHub
                    </a>
                </div>

                {/* Challenges & Future Plans Accordion */}
        <div className="mt-12 space-y-6">
          {/* Challenges Faced */}
          <div
            className="border border-gray-300 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button
              onClick={() => toggleSection("challenges")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-xl rounded-t-lg transition"
              aria-expanded={openSection === "challenges"}
            >
              Challenges Faced
              {openSection === "challenges" ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            <div
              className={`px-6 pt-2 pb-6 bg-white rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openSection === "challenges" ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Future Plans */}
          <div
            className="border border-gray-300 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <button
              onClick={() => toggleSection("futurePlans")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-xl rounded-t-lg transition-transform"
              aria-expanded={openSection === "futurePlans"}
            >
              Future Plans
              {openSection === "futurePlans" ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            <div
              className={`px-6 pt-2 pb-6 bg-white rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openSection === "futurePlans" ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.futurePlans.map((plan, idx) => (
                  <li key={idx}>{plan}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
            </div>
        </section>
    );
};

export default ProjectsDetails;
