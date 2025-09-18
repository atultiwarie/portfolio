import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-500 dark:bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex justify-center items-center gap-8 px-6">
        {/* Text */}
        <p>© 2025 Atul Tiwari.</p>

        {/* Icons */}
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://github.com/atultiwarie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/atul-kumar-tiwari-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
