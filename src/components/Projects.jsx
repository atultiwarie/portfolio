const projects = [
  {
    title: "Cloud Drive",
    tech: "React.js, Tailwind CSS, Node.js, Express, Cloudinary",
    desc: "Secure cloud drive with authentication, file upload, download, and delete.",
    demo: "#",
    github: "https://github.com/atultiwarie",
  },
  {
    title: "Resume Builder App",
    tech: "React.js, Tailwind CSS, Node.js, Express",
    desc: "Real-time resume creation, preview, edit, delete, and download.",
    demo: "#",
    github: "https://github.com/atultiwarie",
  },
  {
    title: "Uber UI Clone",
    tech: "React.js, Tailwind CSS, Axios, Google Maps API",
    desc: "Uber-inspired UI with map integration and location-based features.",
    demo: "#",
    github: "https://github.com/atultiwarie",
  },
  {
    title: "Landing Page (BGMI Inspired)",
    tech: "React.js, Bootstrap",
    desc: "Responsive landing page with maps, game features, and download links.",
    demo: "#",
    github: "https://github.com/atultiwarie",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
            <p className="mb-4">{proj.desc}</p>
            <div className="space-x-4">
              <a
                href={proj.demo}
                className="text-indigo-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href={proj.github}
                className="text-emerald-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
