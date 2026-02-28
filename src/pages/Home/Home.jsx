import { Helmet } from "react-helmet";
import Uploader from "../../components/Uploader";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Excel to VCF Converter - Convert Excel Contacts Online Free</title>
        <meta name="description" content="Free Excel to VCF converter. Convert Excel spreadsheets and CSV files to vCard contact files instantly. Works with iPhone, Android, Gmail, Outlook. No registration required." />
        <meta name="keywords" content="Excel to VCF converter, convert Excel to contacts, VCF converter online, bulk contacts export, contact file converter, CSV to VCF, Excel contacts to vCard" />
        <link rel="canonical" href="https://excel2vcf.xyz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Excel to VCF Converter - Free Contact File Conversion" />
        <meta property="og:description" content="Convert Excel spreadsheets to VCF contact files instantly. Works with iPhone, Android, Gmail, Outlook. Free and secure." />
        <meta property="og:url" content="https://excel2vcf.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://excel2vcf.xyz/logo-head.png" />
        <meta property="og:site_name" content="Excel to VCF Converter" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Excel to VCF Converter - Convert Contacts Free" />
        <meta name="twitter:description" content="Convert Excel spreadsheets to VCF contact files instantly. Works with iPhone, Android, Gmail, Outlook." />
        <meta name="twitter:image" content="https://excel2vcf.xyz/logo-head.png" />
        <meta name="twitter:site" content="@excel2vcf" />
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Excel to VCF Converter",
            "description": "Free online tool to convert Excel spreadsheets and CSV files to VCF contact files. Compatible with iPhone, Android, Gmail, and Outlook.",
            "url": "https://excel2vcf.xyz",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Convert Excel to VCF",
              "Convert CSV to VCF", 
              "Bulk contact conversion",
              "iPhone contact import",
              "Android contact import",
              "Gmail contact import",
              "Outlook contact import",
              "Privacy-focused processing",
              "No registration required"
            ],
            "keywords": "Excel to VCF converter, convert Excel to contacts, VCF converter online, bulk contacts export",
            "author": {
              "@type": "Organization",
              "name": "Excel2VCF",
              "url": "https://excel2vcf.xyz"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Excel2VCF",
              "url": "https://excel2vcf.xyz"
            }
          })}
        </script>
        
        <noscript>{`
          <h1>Excel to VCF Converter</h1>
          <h2>Convert Excel Spreadsheets into VCF Contact Files</h2>
          <p>Free online tool to convert Excel and CSV files to vCard format. Compatible with iPhone, Android, Gmail, and Outlook.</p>
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
        
        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Why Choose Our Excel to VCF Converter?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">🔒 100% Secure</h3>
                <p className="text-gray-600">All conversion happens in your browser. Your contact data never leaves your device.</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">⚡ Lightning Fast</h3>
                <p className="text-gray-600">Convert thousands of contacts in seconds. No waiting, no registration required.</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">📱 Universal Compatibility</h3>
                <p className="text-gray-600">Works with iPhone, Android, Gmail, Outlook, and all major contact management systems.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Supported File Formats
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              <div className="bg-blue-50 px-6 py-3 rounded-lg border">
                <span className="font-medium text-blue-800">.XLSX</span>
              </div>
              <div className="bg-green-50 px-6 py-3 rounded-lg border">
                <span className="font-medium text-green-800">.XLS</span>
              </div>
              <div className="bg-purple-50 px-6 py-3 rounded-lg border">
                <span className="font-medium text-purple-800">.CSV</span>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Convert Excel spreadsheets and CSV files to VCF format with just a few clicks
            </p>
          </section>
          
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Compatible With All Devices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Import your converted VCF contacts into iPhone Contacts, Android Google Contacts, 
              Microsoft Outlook, Gmail, Apple Mail, and virtually any contact management application.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
