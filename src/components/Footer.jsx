import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={`w-full bg-gray-50 border-t ${isHomePage ? 'mt-[30vh]' : 'mt-auto'}`}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Excel to VCF Converter</h3>
            <p className="text-gray-600 text-sm">
              Convert your Excel spreadsheets to VCF contact files quickly and easily.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-to-use" className="text-gray-600 hover:text-gray-900 text-sm">
                  How to Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-8 pt-8 border-t">
          © {new Date().getFullYear()} Excel to VCF Converter. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 