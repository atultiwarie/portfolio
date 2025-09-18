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
    <div className="min-h-screen p-10">
      <h2 className="text-4xl font-bold text-center mb-15 text-gray-800">
        Education
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-5 top-0 h-full border-l-4 border-blue-500"></div>
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-16 mb-12">
            <div className="absolute left-0 top-2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600 font-medium">{item.institution}</p>
              <span className="text-sm text-gray-500">
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

// import React from "react";

// const Education = () => {
//   const educationData = [
//     {
//       id: 1,
//       degree:
//         "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
//       institution: "Delhi Technical Campus",
//       year: "2021 - 2025 | CGPA: 7.6",
//     },
//     {
//       id: 2,
//       degree: "Diploma in Mechanical Engineering",
//       institution: "G.B. Pant Institute of Technology",
//       year: "2019 - 2022 | 81%",
//     },
//     {
//       id: 3,
//       degree: "Secondary Education (Class X)",
//       institution: "Victoria Public Senior Secondary School",
//       year: "2019 | 87.4%",
//     },
//   ];

//   return (
//     <div className="min-h-screen  p-10">
//       <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
//         Education
//       </h2>

//       {/* Timeline wrapper */}
//       <div className="relative max-w-2xl mx-auto">
//         {/* Vertical timeline line */}
//         <div className="absolute left-5 top-0 h-full border-l-4 border-blue-500"></div>

//         {/* Timeline items */}
//         {educationData.map((edu) => (
//           <div key={edu.id} className="relative pl-16 mb-12">
//             {/* Circle on the timeline */}
//             <div className="absolute left-0 top-2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

//             {/* Card */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {edu.degree}
//               </h3>
//               <p className="text-gray-600 font-medium">{edu.institution}</p>
//               <span className="text-sm text-gray-500">{edu.year}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Education;
