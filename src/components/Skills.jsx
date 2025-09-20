import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React-Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Bootstrap",
];

// Mapping skills to icons
const skillIcons = {
  HTML: <FaHtml5 className="text-6xl text-orange-600" />,
  CSS: <FaCss3Alt className="text-6xl text-blue-600" />,
  JavaScript: <SiJavascript className="text-6xl text-yellow-500" />,
  React: <FaReact className="text-6xl text-cyan-500" />,
  "React-Redux": <SiRedux className="text-6xl text-purple-600" />,
  "Node.js": <FaNodeJs className="text-6xl text-green-600" />,
  "Express.js": <SiExpress className="text-6xl text-gray-700" />,
  MongoDB: <SiMongodb className="text-6xl text-green-700" />,
  Git: <FaGitAlt className="text-6xl text-red-600" />,
  GitHub: <FaGithub className="text-6xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-6xl text-teal-400" />,
  Bootstrap: <FaBootstrap className="text-6xl text-purple-600" />,
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 dark:bg-gray-700 ">
      <h2 className="text-4xl font-bold text-center dark:text-white mb-10">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-lg gap-10  max-w-6xl mx-auto">
        {skills.map((skill, key) => (
          <div
            key={key}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition"
          >
            {skillIcons[skill]}
            <p className="mt-3 font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
