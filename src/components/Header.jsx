// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className=" flex justify-between items-center bg-gray-300 p-3 ">
//       <div>
//         <Link to={"/"} className="text-3xl font-bold  ">
//           <img
//             src="https://i.pinimg.com/736x/d2/5c/f6/d25cf671c227acc7189637d5533b325e.jpg"
//             alt="<atul>"
//             className="h-[75px] w-[75px] rounded-full ring-white ring-2 ml-10"
//           />
//         </Link>
//       </div>

//       <ul className="flex flex-row gap-10 text-lg  ">
//         <Link to={"/"} className="hover:text-blue-500 hover:underline ">
//           Home
//         </Link>
//         <Link to={"/projects"} className="hover:text-blue-500 hover:underline ">
//           Projects
//         </Link>
//         <Link to={"/skills"} className="hover:text-blue-500 hover:underline  ">
//           Skills
//         </Link>
//         <Link
//           to={"/education"}
//           className="hover:text-blue-500 hover:underline "
//         >
//           Education
//         </Link>
//         <Link to={"/contact"} className="hover:text-blue-500 hover:underline ">
//           Contact
//         </Link>
//       </ul>
    
//     </div>
//   );
// }

// export default Header

// import { Link } from "react-scroll";

// function Header() {
//   return (
//     <header className="fixed top-0 w-full bg-white shadow-md z-50">
//       <nav className="flex justify-center gap-6 p-4">
//         <Link
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="cursor-pointer"
//         >
//           Home
//         </Link>
//         <Link
//           to="about"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="cursor-pointer"
//         >
//           About
//         </Link>
//         <Link
//           to="skills"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="cursor-pointer"
//         >
//           Skills
//         </Link>
//         <Link
//           to="projects"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="cursor-pointer"
//         >
//           Projects
//         </Link>
//         <Link
//           to="education"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="cursor-pointer"
//         >
//           Education
//         </Link>
//         <Link
//           to="contact"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="cursor-pointer"
//         >
//           Contact
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-300 p-3 fixed top-0 w-full z-50 shadow-md">
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
            className="h-[75px] w-[75px] rounded-full ring-white ring-2 ml-10"
            offset={-70}
          />
        </Link>
      </div>

      {/* Navbar */}
      <ul className="flex flex-row gap-10 text-lg mr-10">
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
    </div>
  );
};

export default Header;

