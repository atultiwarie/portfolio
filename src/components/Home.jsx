import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around dark:bg-gray-800 dark:text-white p-6  md:mt-24 transition-colors duration-300">
      <div className="md:max-w-md text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I’m <br />
          Atul Tiwari
        </h1>
        <h2 className="text-xl sm:text-2xl mb-6">Full-Stack MERN Developer</h2>
        <p className="max-w-xl mb-6 text-gray-900 dark:text-gray-200">
          I build scalable and responsive web applications with the MERN stack.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1vNO5uq_-e05QtOeZU7NNyNiOIMZTs268/view?usp=sharing"
            target="_blank"
            className="px-6 py-2 bg-emerald-500 rounded-lg shadow-md hover:bg-emerald-600 text-white transition-colors duration-300"
          >
            View Resume
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-6 py-2 bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-200 dark:bg-gray-700 dark:text-indigo-400 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-5 md:mt-0">
        <img
          src="https://i.pinimg.com/736x/9c/d0/c9/9cd0c9f29763b323971ccb2e88f356e9.jpg"
          alt="Atul Tiwari"
          className="w-48 sm:w-64 md:w-[500px] h-48 sm:h-80 md:h-[600px] rounded-full object-cover mx-auto transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
