
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className=" flex flex-row items-center dark:bg-gray-800 dark:text-white justify-around p-6 mt-24">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m <br />
            Atul Tiwari
          </h1>
          <h2 className="text-2xl mb-6">Full-Stack MERN Developer</h2>
          <p className="max-w-xl mb-6 ">
            I build scalable and responsive web applications with the MERN
            stack.
          </p>
          <div className="space-x-4">
            <a
              href="https://drive.google.com/file/d/1_WxpQ0bu--_sNQnXlTs8GeEBFheYpcw6/view?usp=sharing"
              className="px-6 py-2 bg-emerald-500 rounded-lg shadow-md hover:bg-emerald-600"
              target="_blank"
            >
              View Resume
            </a>
            <Link
              to="/contact"
              className="px-6 py-2 bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/1200x/0d/98/b2/0d98b2916254548f2c79a57eb8768969.jpg"
            alt=""
            className="w-[500px] h-[600px] rounded-full mt-8 object-fit"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
