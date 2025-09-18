// import React from "react";
// import { Link } from "react-scroll";

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center bg-gray-300 p-3 fixed top-0 w-full z-50 shadow-md">
//       {/* Logo */}
//       <div>
//         <Link
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="text-3xl font-bold cursor-pointer"
//         >
//           <img
//             src="https://i.pinimg.com/736x/d2/5c/f6/d25cf671c227acc7189637d5533b325e.jpg"
//             alt="atul"
//             className="h-[75px] w-[75px] rounded-full ring-white ring-2 ml-10"
//             offset={-70}
//           />
//         </Link>
//       </div>

//       {/* Navbar */}
//       <ul className="flex flex-row gap-10 text-lg mr-10">
//         <Link
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="hover:text-blue-500 hover:underline cursor-pointer"
//         >
//           Home
//         </Link>
//         <Link
//           to="skills"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="hover:text-blue-500 hover:underline cursor-pointer"
//         >
//           Skills
//         </Link>
//         <Link
//           to="projects"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="hover:text-blue-500 hover:underline cursor-pointer"
//         >
//           Projects
//         </Link>

//         <Link
//           to="education"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="hover:text-blue-500 hover:underline cursor-pointer"
//         >
//           Education
//         </Link>
//         <Link
//           to="contact"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="hover:text-blue-500 hover:underline cursor-pointer"
//         >
//           Contact
//         </Link>
//       </ul>
//     </div>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Apply theme on mount & when toggled
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

  return (
    <div className="flex justify-between items-center bg-gray-300 dark:bg-gray-900 p-3 fixed top-0 w-full z-50 shadow-md transition-colors duration-300">
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
            className="h-[75px] w-[75px] rounded-full ring-white dark:ring-gray-700 ring-2 ml-10"
          />
        </Link>
      </div>

      {/* Navbar */}
      <ul className="flex flex-row gap-10 text-lg mr-10 text-black dark:text-white">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 hover:underline cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 hover:underline cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 hover:underline cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 hover:underline cursor-pointer"
        >
          Education
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-blue-500 hover:underline cursor-pointer"
        >
          Contact
        </Link>
      </ul>

      {/* Dark/Light Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mr-6 text-2xl text-black dark:text-yellow-400 transition-colors duration-300"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;
