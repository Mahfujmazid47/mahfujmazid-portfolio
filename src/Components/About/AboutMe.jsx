import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20 px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up-right">
        <h2 className="text-3xl lg:text-4xl text-center font-bold text-blue-600 mb-8">
          About Me
        </h2>

        <p className="text-lg  leading-relaxed mb-6">
          I am currently a <span className="font-semibold">BSc student</span> of
          Chemistry Department at National University, but my passion has
          brought me here to learn and build with{" "}
          <span className="font-semibold text-blue-600 text-xl">MERN Stack Development</span>.
        </p>

        <p className="text-lg  leading-relaxed mb-6">
          With strong proficiency in <span className="font-semibold text-blue-600">HTML, CSS, JavaScript, and React.js</span>, I am confident in my ability to contribute effectively to any development team. Though my academic background is in Chemistry, I have gained practical experience building responsive and dynamic user interfaces. My portfolio includes several projects using modern frontend technologies.
        </p>

        <p className="text-lg  leading-relaxed mb-6">
          Additionally, I am familiar with backend technologies like{" "}
          <span className="font-semibold text-blue-600">Node.js, MongoDB, Firebase,</span> and
          <span className="font-semibold text-blue-600"> Git</span>, which helps me build
          complete full-stack applications.
        </p>

        <p className="text-lg  leading-relaxed mb-6">
          Beyond coding skills, I am a <span className="font-semibold text-blue-600">team player</span> with strong abilities in <span className="font-semibold text-blue-600">problem-solving</span> and a willingness to <span className="font-semibold text-blue-600">take on challenges</span>. I thrive in collaborative environments and continuously seek opportunities to learn and grow.
        </p>

        
      </div>
    </section>
  );
};

export default AboutMe;
