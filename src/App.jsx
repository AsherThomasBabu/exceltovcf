import AppRouter from "./AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Popup from "./components/Popup/Popup";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <div className="container text-center mx-auto">
        <NavBar />
        <AppRouter />
        <Popup excelFilePath="/Sample Data.xlsx" />
      </div>
      <SpeedInsights />
      <Analytics />
      <div className="flex justify-center items-center py-5">
      <a
        className=""
        href="https://www.buymeacoffee.com/asherthomas"
      >
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=asherthomas&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
        />
      </a>
    </div>    
    </>
  );
}

export default App;
