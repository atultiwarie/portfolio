import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=" flex justify-between items-center bg-gray-300 p-3 ">
      <div>
        <Link to={"/"} className="text-3xl font-bold  ">
          <img
            src="https://i.pinimg.com/736x/d2/5c/f6/d25cf671c227acc7189637d5533b325e.jpg"
            alt="<atul>"
            className="h-[75px] w-[75px] rounded-full ring-white ring-2 ml-10"
          />
        </Link>
      </div>

      <ul className="flex flex-row gap-6 text-lg  ">
        <Link to={"/"} className="hover:text-blue-500 hover:underline ">
          Home
        </Link>
        <Link to={"/projects"} className="hover:text-blue-500 hover:underline ">
          Projects
        </Link>
        <Link to={"/skills"} className="hover:text-blue-500 hover:underline  ">
          Skills
        </Link>
        <Link
          to={"/education"}
          className="hover:text-blue-500 hover:underline "
        >
          Education
        </Link>
        <Link to={"/resume"} className="hover:text-blue-500 hover:underline ">
          Resume
        </Link>
        <Link to={"/contact"} className="hover:text-blue-500 hover:underline ">
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Header