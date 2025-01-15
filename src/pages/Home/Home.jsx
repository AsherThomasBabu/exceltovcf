import { Helmet } from "react-helmet";
import Uploader from "../../components/Uploader";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Excel to VCF Converter - Convert Excel to Contacts</title>
        <meta name="description" content="Convert your Excel spreadsheets into VCF contact files with a single click. Simple, fast, and secure contact conversion tool." />
        <noscript>{`
          <h1>Excel to VCF Converter</h1>
          <h2>Convert Excel Spreadsheets into VCF Contact Files</h2>
        `}</noscript>
      </Helmet>
      <div className="max-w-5xl mx-auto px-4">
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
    </>
  );
};

export default Home;
