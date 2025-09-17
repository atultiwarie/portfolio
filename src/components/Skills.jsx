const skills = [
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "JWT Auth",
  "REST APIs",
  "MongoDB",
  "Git/GitHub",
];

const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
