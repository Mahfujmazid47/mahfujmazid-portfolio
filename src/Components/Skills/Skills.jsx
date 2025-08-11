import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaCcStripe,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiJsonwebtokens } from "react-icons/si";


const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38B2AC]" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032]" />,
  },
  {
    name: "JWT Authentication",
    icon: <SiJsonwebtokens />
  },
  {
    name: "stripe",
    icon: <FaCcStripe className="text-purple-500" />
  }
];

const SkillCard = ({ skill }) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <div className="text-6xl">{skill.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
    </div>
  );
};

const Skills = () => {


  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-2" data-aos="fade-down">
          My Skills
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          These are the technologies and tools I have worked with confidently to
          build professional and efficient web applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <SkillCard skill={skill} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
