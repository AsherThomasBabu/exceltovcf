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
        <Popup excelFilePath="src/assets/Sample Data.xlsx" />
      </div>
      <SpeedInsights />
      <Analytics />
      <a className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50" href="https://www.buymeacoffee.com/asherthomas"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=asherthomas&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
    </>
  );
}

export default App;
