import AppRouter from "./AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Popup from "./components/Popup/Popup";
import { inject } from "@vercel/analytics";

inject();

function App() {
  return (
    <>
      <div className="container text-center mx-auto">
        <NavBar />
        <AppRouter />
        <Popup excelFilePath="src/assets/Sample Data.xlsx" />
      </div>
    </>
  );
}

export default App;
