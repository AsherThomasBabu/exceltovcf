import Logo from "../../assets/logo.svg";
import SmallLogo from "../../assets/logo-small.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <a href="/">
        <div className="flex items-center">
          <img
            className="h-20 mr-2 hidden sm:block" // Hide on smaller screens
            src={Logo}
            alt="Large Logo"
          />
          <img
            className="h-12 mr-2 sm:hidden" // Hide on larger screens
            src={SmallLogo}
            alt="Small Logo"
          />
        </div>
      </a>
      <div className="flex items-center">
        <a
          href="https://github.com/AsherThomasBabu/exceltovcf"
          className="text-slate-950 text-lg mr-8 hover:text-gray-400"
        >
          Github
        </a>
        <a href="#" className="text-slate-950 text-lg hover:text-gray-400">
          How to use?
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
