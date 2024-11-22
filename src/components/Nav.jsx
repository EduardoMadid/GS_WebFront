import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-green-900 p-4">
      <ul className="flex justify-center gap-8">
        <li className="group relative">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-300"
          >
            Home
          </Link>
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="group relative">
          <Link
            to="/solucao"
            className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-300"
          >
            Solução
          </Link>
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="group relative">
          <Link
            to="/sobre"
            className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-300"
          >
            Sobre
          </Link>
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="group relative">
          <Link
            to="/login"
            className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-300"
          >
            Login
          </Link>
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
