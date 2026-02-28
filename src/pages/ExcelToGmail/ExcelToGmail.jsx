import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ExcelToGmail = () => {
  return (
    <>
      <Helmet>
        <title>Excel to Gmail Contacts Converter - Import Excel Contacts to Gmail</title>
        <meta name="description" content="Convert Excel contacts to Gmail. Step-by-step guide to import Excel spreadsheet contacts into Gmail using VCF files. Free and secure conversion." />
        <meta name="keywords" content="Excel to Gmail contacts, import Excel contacts Gmail, Excel spreadsheet to Gmail, convert contacts Gmail, Gmail contact import" />
        <link rel="canonical" href="https://excel2vcf.xyz/excel-to-gmail-contacts" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Excel to Gmail Contacts Converter" />
        <meta property="og:description" content="Convert and import Excel contacts to Gmail easily. Free VCF converter for Gmail contact management." />
        <meta property="og:url" content="https://excel2vcf.xyz/excel-to-gmail-contacts" />
        <meta property="og:type" content="article" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Import Excel Contacts to Gmail",
            "description": "Step-by-step guide to convert Excel contacts and import them to Gmail using VCF files",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Convert Excel to VCF",
                "text": "Use our Excel to VCF converter to create a vCard file from your spreadsheet"
              },
              {
                "@type": "HowToStep", 
                "name": "Open Gmail Contacts",
                "text": "Go to contacts.google.com and sign into your Gmail account"
              },
              {
                "@type": "HowToStep",
                "name": "Import VCF File",
                "text": "Click Import, select your VCF file, and import all contacts to Gmail"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Excel to Gmail Contacts Converter
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Start</h2>
          <p className="text-blue-700">
            Convert your Excel contacts to VCF format, then import them directly into Gmail. 
            The entire process takes less than 5 minutes.
          </p>
          <Link 
            to="/" 
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Converting Now →
          </Link>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Step-by-Step Guide: Excel to Gmail
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Convert Excel to VCF</h3>
                <p className="text-gray-600">
                  Upload your Excel file using our converter. Map your columns (Name, Email, Phone) 
                  to VCF fields and download the converted file.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Open Gmail Contacts</h3>
                <p className="text-gray-600">
                  Go to <a href="https://contacts.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">contacts.google.com</a> and 
                  sign into your Gmail account. This is Google's contact management interface.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Import Your VCF File</h3>
                <p className="text-gray-600">
                  Click "Import" in the left sidebar, select "CSV or vCard file", choose your 
                  converted VCF file, and click "Import" to add all contacts to Gmail.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Use VCF for Gmail Import?
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700"><strong>Native Support:</strong> Gmail natively supports VCF file imports</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700"><strong>Preserve Data:</strong> Maintains contact photos, multiple phone numbers, and email addresses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700"><strong>Bulk Import:</strong> Import thousands of contacts at once</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700"><strong>Sync Everywhere:</strong> Contacts automatically sync to all your Google-connected devices</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Troubleshooting Gmail Import
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Contacts not appearing?</h4>
              <p className="text-gray-600 text-sm">
                Check your Gmail contacts view settings. Make sure you're viewing "All contacts" 
                and not just a specific label or group.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Duplicate contacts?</h4>
              <p className="text-gray-600 text-sm">
                Gmail has a built-in duplicate merger. Go to "Duplicates" in the left sidebar 
                and merge any duplicate contacts automatically.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to Import Your Contacts?</h3>
          <p className="mb-4">Start converting your Excel file to Gmail-compatible VCF format now</p>
          <Link 
            to="/" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Convert Excel to VCF Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExcelToGmail;