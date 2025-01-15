import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import ReactGA from 'react-ga4';
import { initializeAnalytics } from "./config/analytics";
import router from "./routes";
import "./App.css";

function App() {
  useEffect(() => {
    initializeAnalytics(ReactGA);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
