import Uploader from "../../components/Uploader";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-sans font-semibold text-slate-950 mb-4">
        Excel to VCF Converter
      </h1>
      <h2 className="text-lg md:text-2xl font-sans font-light text-gray-500 max-w-2xl text-center px-4">
        Convert your Excel spreadsheets into VCF contact files with a single click. Simple, fast, and secure.
      </h2>
    </div>
      <Uploader />
      </div>
  );
};

export default Home;
