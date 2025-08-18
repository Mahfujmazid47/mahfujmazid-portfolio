import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 data-aos='fade-up' className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-10">
          Education
        </h2>

        <div data-aos='fade-up' data-aos-delay='200' className="relative border-l-4 bg-gradient-to-r  to-primary/5 from-secondary/5 p-20 rounded-e-xl border-blue-500 pl-6">
          {/* Timeline item */}
          <div className="mb-10 ml-4">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 -left-3 border-2 border-white"></div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science (B.Sc.) in Chemistry
            </h3>
            <span className="text-sm ">2023 - Present</span>
            <p className="mt-2 ">
              Currently pursuing my{" "}
              <span className="font-medium">Bachelor’s degree in Chemistry</span>{" "}
              at{" "}
              <span className="font-medium">National University, Bangladesh</span>.  
              I am in my <span className="font-medium">2nd Year</span> with a{" "}
              <span className="font-medium">CGPA of 3.42</span>.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
