import AppRouter from "./AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { inject } from "@vercel/analytics";

inject();

function App() {
  return (
    <>
      <div className="container text-center mx-auto">
        <NavBar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
