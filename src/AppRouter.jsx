import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import View from "./pages/View/View";

const AppRouter = () => {
  return (
    <Router>
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
