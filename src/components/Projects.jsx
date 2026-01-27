const projects = [
  {
    img: "https://i.pinimg.com/736x/29/1b/bc/291bbca050a761d53994943bdc4c67c0.jpg",
    title: "Cloud Drive – Secure File Storage Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express, MongoDB, Cloudinary, JWT",
    desc: "Full-stack cloud storage application with JWT authentication, secure file upload/download, Cloudinary integration, and protected routes. Users can manage files with real-time CRUD operations and role-based access control.",
    demo: "https://cloud-drive-tau.vercel.app/",
    github: "https://github.com/atultiwarie/CloudDrive",
  },

  {
    img: "https://i.pinimg.com/736x/b4/46/f6/b446f6ddbbb8773f98bd5beea623e769.jpg",
    title: "Uber Clone – Location-Based Ride Booking UI",
    tech: "React.js, Tailwind CSS, Axios, Google Maps API, Geolocation",
    desc: "Interactive Uber-inspired ride booking interface with real-time location tracking, Google Maps integration, dynamic route rendering, and API-based distance calculations. Designed with responsive UI and smooth state management.",
    demo: "https://uber-clone-red-one.vercel.app/",
    github: "https://github.com/atultiwarie/UberClone",
  },

  {
    img: "https://i.pinimg.com/736x/19/a3/8e/19a38e5372bb378134cc70f449cc3903.jpg",
    title: "Golf Club Animated Landing Page",
    tech: "HTML, CSS, JavaScript, GSAP, ScrollTrigger",
    desc: "Interactive and fully responsive landing page with custom cursor effects, smooth scroll animations, video hero section, image slider, and GSAP-powered transitions for an immersive user experience.",
    demo: "https://animation-psi-three.vercel.app/",
    github: "https://github.com/atultiwarie/animation",
  },
  {
    img: "https://i.pinimg.com/736x/05/0c/f3/050cf3a40a5cd9103393377eec22881b.jpg",
    title: "BGMI Gaming Landing Page",
    tech: "React.js, Bootstrap, CSS Animations",
    desc: "High-performance responsive gaming landing page featuring animated sections, modern UI components, feature highlights, and optimized layouts. Built with reusable components and mobile-first design principles.",
    demo: "https://landing-page-bootstrap-phi.vercel.app/",
    github: "https://github.com/atultiwarie/LandingPageBootstrap",
  },
  {
    img: "https://i.pinimg.com/736x/79/11/55/791155077b9f217f612bbf0fabd70b4f.jpg",
    title: "Bharat – Interactive India Showcase",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    desc: "A fully responsive and interactive informational web portal showcasing India’s history, culture, places, and languages. Features custom scroll animations, animated SVG wave charts, timeline UI, mobile hamburger navigation, hover image overlays, and accessibility-focused design for a smooth cross-device experience.",
    demo: "https://animation-22zx.vercel.app/",
    github: "https://github.com/atultiwarie/countryLandingPage",
  },

  {
    img: "https://i.pinimg.com/736x/0c/80/05/0c8005c749eeeffb40a02ac94b8c334f.jpg",
    title: "Resume Builder Web App",
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    desc: "Full-stack resume builder with authentication, real-time resume creation, edit/delete functionality, live preview, and PDF download. Built using RESTful APIs and structured backend architecture for scalable data management.",
    demo: "https://github.com/atultiwarie/resume-builder",
    github: "https://github.com/atultiwarie/resume-builder",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    title: "Learning Management System (Backend API)",
    tech: "Node.js, Express.js, MongoDB, JWT, Razorpay/Stripe, Cloudinary",
    desc: "Backend-focused LMS built with RESTful APIs supporting role-based authentication (Admin/Student), course management, secure payments, enrollment tracking, and protected content delivery. Designed with scalable architecture and modular controllers for real-world SaaS applications.",
    demo: "https://github.com/atultiwarie/LMS",
    github: "https://github.com/atultiwarie/LMS",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-200 dark:bg-gray-800 ">
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
