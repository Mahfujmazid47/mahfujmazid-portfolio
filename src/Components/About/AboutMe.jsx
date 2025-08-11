import React from "react";

const AboutMe = () => {
  return (
     <section className="bg-gradient-to-r from-sky-50 to-blue-200 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center" data-aos="fade-right">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/4gDmtzQy/1735497226692-2.jpg" // এখানে নিজের প্রোফাইল ছবি দাও
              alt="Profile"
              className="rounded-2xl shadow-lg border-4 border-white hover:scale-105 w-7/12 mx-auto transition-transform duration-300"
            />
            
          </div>
        </div>

        {/* About Content */}
        <div data-aos="fade-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I’m <span className="font-semibold text-primary">Mahfuj Mazid</span>, 
            a passionate <span className="font-medium">Full Stack Developer</span> 
            who loves turning ideas into interactive, scalable, and efficient web applications. 
            With a focus on clean code, modern UI/UX, and performance optimization, 
            I aim to deliver products that users truly enjoy.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              🎯 2+ Years of coding experience
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              🚀 Expertise in React, Node.js, Tailwind
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              🌍 Worked with international clients
            </li>
          </ul>

          <button className="btn btn-primary font-semibold mt-8 shadow-lg hover:scale-105 transition-transform raleway-font bg-gradient-to-r from-sky-400 to-blue-600 text-white">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
