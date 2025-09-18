const projects = [
  {
    img: "https://i.pinimg.com/736x/29/1b/bc/291bbca050a761d53994943bdc4c67c0.jpg",
    title: "Cloud Drive",
    tech: "React.js, Tailwind CSS, Node.js, Express, Cloudinary",
    desc: "Secure cloud drive with authentication, file upload, download, and delete.",
    demo: "https://cloud-drive-tau.vercel.app/",
    github: "https://github.com/atultiwarie/CloudDrive",
  },
  // {
  //   img: "",
  //   title: "Resume Builder App",
  //   tech: "React.js, Tailwind CSS, Node.js, Express",
  //   desc: "Real-time resume creation, preview, edit, delete, and download.",
  //   demo: "#",
  //   github: "https://github.com/atultiwarie",
  // },
  {
    img: "https://i.pinimg.com/736x/b4/46/f6/b446f6ddbbb8773f98bd5beea623e769.jpg",
    title: "Uber UI Clone",
    tech: "React.js, Tailwind CSS, Axios, Google Maps API",
    desc: "Uber-inspired UI with map integration and location-based features.",
    demo: "https://uber-clone-red-one.vercel.app/",
    github: "https://github.com/atultiwarie/UberClone",
  },
  {
    img: "https://i.pinimg.com/736x/05/0c/f3/050cf3a40a5cd9103393377eec22881b.jpg",
    title: "Landing Page (BGMI Inspired)",
    tech: "React.js, Bootstrap",
    desc: "Responsive landing page with maps, game features, and download links.",
    demo: "https://landing-page-bootstrap-phi.vercel.app/",
    github: "https://github.com/atultiwarie/LandingPageBootstrap",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-200 dark:bg-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl flex flex-col"
          >
            {/* Image Wrapper */}
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
              {proj.img ? (
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
            <p className="mb-4 flex-grow">{proj.desc}</p>
            <div className="space-x-4">
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
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
