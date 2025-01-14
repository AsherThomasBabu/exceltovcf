import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import SmallLogo from "../assets/logo-small.svg";
import ContactButton from "./FeedbackButton";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-5">
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
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
          <ContactButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 border-t">
          <div className="flex flex-col space-y-3 p-4">
            <Link
              to="/how-to-use"
              className="text-slate-950 text-lg hover:text-gray-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Use
            </Link>
            <Link
              to="/about"
              className="text-slate-950 text-lg hover:text-gray-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://github.com/AsherThomasBabu/exceltovcf"
              className="text-slate-950 text-lg hover:text-gray-400 transition-colors py-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
            <div onClick={() => setIsMenuOpen(false)}>
              <ContactButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 