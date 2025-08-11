import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
 return (
    <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Hi, I'm <span className="text-secondary">Mahfuj Mazid</span> 👋
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            I specialize in building modern, scalable, and visually appealing web
            applications. My passion lies in delivering high-quality products with
            clean code, smooth performance, and engaging user experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary text-2xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
          >
            <HiDownload className="text-lg" /> Download Resume
          </a>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center" data-aos="fade-left">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/4gDmtzQy/1735497226692-2.jpg"
              alt="Profile"
              className="rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
              Available for Hire
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;