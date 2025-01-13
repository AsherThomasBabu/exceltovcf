import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackPageView from "../components/TrackPageView";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import View from "../pages/View/View";
import HowToUse from "../pages/HowToUse/HowToUse";
import Popup from "../components/Popup";
import MetaTags from "../components/MetaTags";

const AppRoutes = () => {
  return (
    <Router>
      <MetaTags />
      <TrackPageView />
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/view" element={<View />} />
        </Routes>
        <Popup excelFilePath="/Sample Data.xlsx" />
      </MainLayout>
    </Router>
  );
};

export default AppRoutes; 