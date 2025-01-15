import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import View from "../pages/View/View";
import HowToUse from "../pages/HowToUse/HowToUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/view",
        element: <View />,
      },
      {
        path: "/how-to-use",
        element: <HowToUse />,
      },
    ],
  },
]);

export default router; 