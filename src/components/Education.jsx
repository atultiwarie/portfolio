const Education = () => {
  return (
    <section className=" min-h-screen py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Education
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-semibold">B.Tech in CSE</h3>
          <p className="text-sm text-gray-600">
            Delhi Technical Campus, 2021–2025 | CGPA: 7.6
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-semibold">Diploma in Mechanical Engineering</h3>
          <p className="text-sm text-gray-600">
            G.B. Pant Institute of Technology, 2019–2022 | 81%
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-semibold">Secondary Education</h3>
          <p className="text-sm text-gray-600">
            Victoria Public Senior Secondary School, 2019 | 87.4%
          </p>
        </div>
      </div>
    </section>
  );
};
export default Education;
