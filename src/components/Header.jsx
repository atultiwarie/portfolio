import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-300 dark:bg-gray-900 transition-colors duration-300 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 md:p-4">
        {/* Logo */}
        <div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-3xl font-bold cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/736x/d2/5c/f6/d25cf671c227acc7189637d5533b325e.jpg"
              alt="atul"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-[75px] md:w-[75px] rounded-full ring-white dark:ring-gray-700 ring-2 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex flex-row gap-6 lg:gap-8 text-base lg:text-lg text-black dark:text-white">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 hover:underline cursor-pointer transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Right section: dark mode + mobile menu toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl sm:text-2xl text-black dark:text-yellow-400 transition-colors duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-black dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-300 dark:bg-gray-900 text-black dark:text-white py-4 gap-4 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 hover:underline cursor-pointer transition-colors duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
