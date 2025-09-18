import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-around dark:bg-gray-800 dark:text-white p-6 mt-16 md:mt-24 transition-colors duration-300">
      {/* Text Section */}
      <div className="md:max-w-md text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I’m <br />
          Atul Tiwari
        </h1>
        <h2 className="text-xl sm:text-2xl mb-6">Full-Stack MERN Developer</h2>
        <p className="max-w-xl mb-6 text-gray-900 dark:text-gray-200">
          I build scalable and responsive web applications with the MERN stack.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1_WxpQ0bu--_sNQnXlTs8GeEBFheYpcw6/view?usp=sharing"
            target="_blank"
            className="px-6 py-2 bg-emerald-500 rounded-lg shadow-md hover:bg-emerald-600 text-white transition-colors duration-300"
          >
            View Resume
          </a>
          <Link
            to="/contact"
            className="px-6 py-2 bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-200 dark:bg-gray-700 dark:text-indigo-400 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0">
        <img
          src="https://i.pinimg.com/1200x/0d/98/b2/0d98b2916254548f2c79a57eb8768969.jpg"
          alt="Atul Tiwari"
          className="w-48 sm:w-64 md:w-[500px] h-48 sm:h-80 md:h-[600px] rounded-full object-cover mx-auto transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
