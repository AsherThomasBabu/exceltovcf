import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Excel to VCF Converter - Free Contact File Conversion Tool</title>
        <meta name="description" content="Learn about Excel to VCF Converter, a free online tool for converting Excel spreadsheets to VCF contact files. Privacy-focused, secure, and easy to use." />
        <meta name="keywords" content="about Excel to VCF converter, contact conversion tool, vCard converter, Excel contacts export, free contact tool" />
        <link rel="canonical" href="https://excel2vcf.xyz/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Excel to VCF Converter - Free Contact Conversion" />
        <meta property="og:description" content="Learn about Excel to VCF Converter, a free online tool for converting Excel spreadsheets to VCF contact files. Privacy-focused, secure, and easy to use." />
        <meta property="og:url" content="https://excel2vcf.xyz/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://excel2vcf.xyz/logo-head.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Excel to VCF Converter" />
        <meta name="twitter:description" content="Free online tool for converting Excel spreadsheets to VCF contact files. Privacy-focused and secure." />
        <meta name="twitter:image" content="https://excel2vcf.xyz/logo-head.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Excel to VCF Converter",
            "description": "Learn about Excel to VCF Converter, a free online tool for converting Excel spreadsheets to VCF contact files.",
            "url": "https://excel2vcf.xyz/about",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Excel to VCF Converter",
              "applicationCategory": "Utility",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Free to use",
                "No registration required", 
                "Privacy-focused processing",
                "Fast and efficient conversion",
                "Simple interface"
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">About Excel to VCF Converter</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          Excel to VCF Converter is a free online tool that helps you convert your Excel spreadsheets into VCF (vCard) files
          quickly and easily. Our tool is designed to make contact management simpler for everyone.
        </p>
        <p className="mb-4">
          Whether you're migrating contacts between devices, backing up your contact list, or managing a large number of
          contacts, our converter provides a seamless solution.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Free to use</li>
          <li>No registration required</li>
          <li>Privacy-focused - we don't store your data</li>
          <li>Simple and intuitive interface</li>
          <li>Fast and efficient conversion</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
        <p className="mb-4">
          Our converter uses advanced client-side processing to transform your Excel data into industry-standard VCF format. 
          The entire conversion happens in your browser, ensuring maximum privacy and security.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Supported Formats</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Excel files (.xlsx, .xls)</li>
          <li>CSV (Comma-separated values)</li>
          <li>Up to 1MB file size for optimal performance</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Compatible With</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>iPhone and iPad (iOS Contacts)</li>
          <li>Android phones (Google Contacts)</li>
          <li>Microsoft Outlook</li>
          <li>Gmail contacts</li>
          <li>Apple Contacts (macOS)</li>
          <li>Most email clients and CRM systems</li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default About;
