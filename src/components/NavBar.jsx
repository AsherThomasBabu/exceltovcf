import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SmallLogo from "../assets/logo-small.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link to="/" className="flex items-center">
        <img
          className="h-20 mr-2 hidden sm:block"
          src={Logo}
          alt="Large Logo"
        />
        <img
          className="h-12 mr-2 sm:hidden"
          src={SmallLogo}
          alt="Small Logo"
        />
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          to="/how-to-use"
          className="text-slate-950 text-lg hover:text-gray-400 transition-colors"
        >
          How to Use
        </Link>
        <Link
          to="/about"
          className="text-slate-950 text-lg hover:text-gray-400 transition-colors"
        >
          About
        </Link>
        <a
          href="https://github.com/AsherThomasBabu/exceltovcf"
          className="text-slate-950 text-lg hover:text-gray-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default NavBar; 