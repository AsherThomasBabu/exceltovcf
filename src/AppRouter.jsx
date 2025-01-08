import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import View from "./pages/View/View";

// Track page views on route changes
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <TrackPageView /> {/* Component to handle tracking */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/view" element={<View />} />
        {/* Add more routes for your pages */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
