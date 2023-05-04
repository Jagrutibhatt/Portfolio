import { Link } from "react-router-dom";
import ContactLink from "./Contact";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-cyan-800 p-4 text-center">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className=" font-bold text-xl tracking-tight">🙋‍♀️ JB</span>{" "}
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            🏠Home
          </Link>

          <Link
            to="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            🖥️ Projects
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            <ContactLink />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
