import { useEffect } from "react";
import AppRoutes from "./routes";
import ReactGA from 'react-ga4';
import { initializeAnalytics } from "./config/analytics";
import "./App.css";

function App() {
  useEffect(() => {
    initializeAnalytics(ReactGA);
  }, []);

  return <AppRoutes />;
}

export default App;
