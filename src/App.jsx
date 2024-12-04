import AppRouter from "./AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Popup from "./components/Popup/Popup";
import { Analytics } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <>
      <div className="container text-center mx-auto">
        <NavBar />
        <AppRouter />
        <Popup excelFilePath="src/assets/Sample Data.xlsx" />
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
