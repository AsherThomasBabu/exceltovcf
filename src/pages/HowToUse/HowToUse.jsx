import React from 'react';
import { Helmet } from 'react-helmet';

const HowToUse = () => {
  return (
    <>
      <Helmet>
        <title>How to Convert Excel to VCF - Step by Step Guide | Excel2VCF</title>
        <meta name="description" content="Complete guide on converting Excel spreadsheets to VCF contact files. Learn how to map columns, import contacts to iPhone/Android, and troubleshoot issues." />
        <meta name="keywords" content="how to convert Excel to VCF, Excel contacts to vCard guide, import contacts iPhone Android, VCF file tutorial, contact conversion steps" />
        <link rel="canonical" href="https://excel2vcf.xyz/how-to-use" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Convert Excel to VCF - Complete Guide" />
        <meta property="og:description" content="Step-by-step tutorial for converting Excel contacts to VCF files. Compatible with iPhone, Android, Gmail, and Outlook." />
        <meta property="og:url" content="https://excel2vcf.xyz/how-to-use" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://excel2vcf.xyz/logo-head.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Convert Excel to VCF - Complete Guide" />
        <meta name="twitter:description" content="Step-by-step tutorial for converting Excel contacts to VCF files. Works with iPhone, Android, Gmail, Outlook." />
        <meta name="twitter:image" content="https://excel2vcf.xyz/logo-head.png" />
        
        {/* Structured Data - HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Convert Excel to VCF Contact Files",
            "description": "Complete step-by-step guide for converting Excel spreadsheets to VCF contact files",
            "image": "https://excel2vcf.xyz/logo-head.png",
            "totalTime": "PT5M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Excel file with contacts"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool", 
                "name": "Excel to VCF Converter"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Prepare Your Excel File",
                "text": "Create an Excel file with contact information including names, phone numbers, and email addresses",
                "image": "https://excel2vcf.xyz/logo-head.png"
              },
              {
                "@type": "HowToStep",
                "name": "Upload Your File",
                "text": "Drag and drop your Excel file or click to browse. File should be less than 1MB",
                "image": "https://excel2vcf.xyz/logo-head.png"
              },
              {
                "@type": "HowToStep",
                "name": "Map Your Columns",
                "text": "Select the appropriate field type for each column (First Name, Phone, Email, etc.)",
                "image": "https://excel2vcf.xyz/logo-head.png"
              },
              {
                "@type": "HowToStep",
                "name": "Generate VCF File",
                "text": "Click 'Generate and Download VCF' to convert and download your contacts",
                "image": "https://excel2vcf.xyz/logo-head.png"
              }
            ]
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What file formats are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support Excel files (.xlsx, .xls) and CSV files up to 1MB in size."
                }
              },
              {
                "@type": "Question", 
                "name": "How do I import VCF files to iPhone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Open the VCF file on your iPhone and tap 'Add All Contacts' to import them to your Contacts app."
                }
              },
              {
                "@type": "Question",
                "name": "Can I convert contacts for Android?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, import the VCF file through Google Contacts or your Android phone's contacts app."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        How to Use Excel to VCF Converter
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Step-by-Step Guide
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              1. Prepare Your Excel File
            </h3>
            <p className="text-gray-600 mb-4">
              Create an Excel file (.xlsx, .xls) or CSV file with your contacts. Include columns for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>First Name</li>
              <li>Last Name</li>
              <li>Phone Numbers (Cell, Home, Work)</li>
              <li>Email Addresses</li>
              <li>Other contact information</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              2. Upload Your File
            </h3>
            <p className="text-gray-600">
              Drag and drop your file into the upload area or click to browse. The file size should be less than 1MB.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              3. Configure Headers
            </h3>
            <p className="text-gray-600">
              If your Excel file has headers in the first row, check the "First row contains headers" box. This helps in mapping columns correctly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              4. Map Your Columns
            </h3>
            <p className="text-gray-600">
              Select the appropriate field type for each column in your spreadsheet (e.g., First Name, Phone, Email). This tells the converter how to format your data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              5. Generate VCF File
            </h3>
            <p className="text-gray-600">
              Click the "Generate and Download VCF" button. Your contacts will be converted and downloaded as a VCF file.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              6. Import Contacts
            </h3>
            <p className="text-gray-600">
              Import the downloaded VCF file into your phone, email client, or contact management system. The process varies by device:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2 ml-4">
              <li>iPhone: Open the VCF file and tap "Add All Contacts"</li>
              <li>Android: Import through Google Contacts or your phone's contacts app</li>
              <li>Outlook: File → Import → Import vCards</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tips for Best Results
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Use clear, consistent column headers</li>
          <li>Ensure phone numbers are in a standard format</li>
          <li>Include country codes for international numbers</li>
          <li>Use separate columns for different types of information</li>
          <li>Check your data for formatting issues before uploading</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need Help?
        </h2>
        <p className="text-gray-600">
          Download our{" "}
          <a
            href="/Sample Data.xlsx"
            className="text-blue-600 hover:text-blue-800"
            download
          >
            sample Excel file
          </a>
          {" "}to see the recommended format, or check out our{" "}
          <a
            href="https://github.com/AsherThomasBabu/exceltovcf"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub page
          </a>
          {" "}for more information.
        </p>
      </section>

      <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                What file formats can I convert?
              </h3>
              <p className="text-gray-600">
                We support Excel files (.xlsx, .xls) and CSV files up to 1MB in size. The converter works with any spreadsheet containing contact information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Is my data secure and private?
              </h3>
              <p className="text-gray-600">
                Yes, all conversion happens in your browser. We don't upload, store, or access your contact data on our servers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How many contacts can I convert at once?
              </h3>
              <p className="text-gray-600">
                You can convert thousands of contacts in a single file, limited only by the 1MB file size restriction for optimal performance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToUse;