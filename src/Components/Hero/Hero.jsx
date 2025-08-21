import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary/5 to-secondary/5 py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 data-aos="fade-up"
             className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
            Hi, I'm <span className="text-secondary">Mahfuj Mazid</span> 👋
          </h1>
          <h2 data-aos="fade-up"
          data-aos-delay="100" className="text-xl lg:text-2xl font-semibold  mb-4">
            Full Stack Developer
          </h2>
          <p data-aos="fade-up"
          data-aos-delay="200" className="leading-relaxed mb-6">
            I specialize in building modern, scalable, and visually appealing web
            applications. My passion lies in delivering high-quality products with
            clean code, smooth performance, and engaging user experiences.
          </p>

          {/* Social Links */}
          <div data-aos="fade-up"
          data-aos-delay="300" className="flex items-center gap-4 mb-6">
            <a
              href="https://github.com/Mahfujmazid47"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 text-2xl transition-colors"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://linkedin.com/in/mahfujmazid"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 text-2xl transition-colors"
            >
              <FaLinkedin size={25} />
            </a>
          
            <a
              href="https://www.facebook.com/mahfuj.mazid.2024"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 text-2xl transition-colors"
            >
              <FaFacebook size={25} />
            </a>
          

            <a
              href="https://wa.me/+8801303725897"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 text-2xl transition-colors"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>


          {/* Resume Button */}
          <div data-aos="fade-up"
          data-aos-delay="400">
            <a 
            href="https://drive.google.com/file/d/1QM5BYbGtU842c6FYW8TeEZAar31aOtoa/view"
            target="_blank"
            className="btn bg-gradient-to-r button from-sky-400 to-blue-600 md:w-4/12 flex items-center gap-2 text-white hover:scale-105 transition-transform"
          >
            <HiDownload className="text-lg" /> Download Resume
          </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/0pzT96c3/small-size-profile-pic.jpg"
              alt="Profile"
              className="rounded-full md:h-[500px] object-center border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div data-aos="fade-up"className="absolute button -bottom-4 -right-4 bg-gradient-to-r from-sky-400 to-blue-600 text-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
              Available for Hire
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;