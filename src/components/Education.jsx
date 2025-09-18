import React from "react";

const timeline = [
  {
    title: "B.Tech in CSE",
    institution: "Delhi Technical Campus",
    year: "2021–2025",
    score: "CGPA: 7.6",
  },
  {
    title: "Diploma in Mechanical Engineering",
    institution: "G.B. Pant Institute of Technology",
    year: "2019–2022",
    score: "81%",
  },
  {
    title: "Secondary Education",
    institution: "Victoria Public Senior Secondary School",
    year: "2019",
    score: "87.4%",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 dark:text-gray-100">
        Education
      </h2>

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-5 top-0 h-full border-l-4 border-blue-500 dark:border-white"></div>

        {timeline.map((item, index) => (
          <div key={index} className="relative pl-16 mb-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-10 h-10 bg-blue-500 dark:bg-white rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

            {/* Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {item.institution}
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.year} | {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
