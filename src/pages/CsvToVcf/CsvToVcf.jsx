import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CsvToVcf = () => {
  return (
    <>
      <Helmet>
        <title>CSV to VCF Converter - Convert CSV Contacts to vCard Format</title>
        <meta name="description" content="Free CSV to VCF converter. Convert CSV contact files to vCard format instantly. Compatible with Excel CSV exports, Google Contacts CSV, and more." />
        <meta name="keywords" content="CSV to VCF converter, CSV to vCard, convert CSV contacts, CSV contact converter, comma separated values to VCF" />
        <link rel="canonical" href="https://excel2vcf.xyz/csv-to-vcf-converter" />
        
        <meta property="og:title" content="CSV to VCF Converter - Free Contact Conversion" />
        <meta property="og:description" content="Convert CSV contact files to VCF format instantly. Works with Google Contacts, Excel CSV exports, and more." />
        <meta property="og:url" content="https://excel2vcf.xyz/csv-to-vcf-converter" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CSV to VCF Converter",
            "description": "Free online tool to convert CSV contact files to VCF vCard format. Compatible with Google Contacts, Outlook, and Excel CSV exports.",
            "url": "https://excel2vcf.xyz/csv-to-vcf-converter",
            "applicationCategory": "UtilitiesApplication",
            "featureList": [
              "Convert CSV to VCF",
              "Google Contacts CSV support",
              "Excel CSV export compatibility", 
              "Bulk contact conversion",
              "Free and secure processing"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          CSV to VCF Converter
        </h1>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">📊 Convert CSV Contacts to VCF</h2>
          <p className="text-green-700 mb-4">
            Transform any CSV contact file into VCF format. Works with Google Contacts exports, 
            Excel CSV files, Outlook CSV exports, and custom CSV formats.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Convert CSV Now →
          </Link>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Supported CSV Formats
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span>
                Google Contacts CSV
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Export contacts from Google Contacts as CSV and convert to VCF for import 
                into other platforms like iPhone, Outlook, or other contact managers.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs">
                <strong>Common fields:</strong> Name, Email, Phone, Organization, Address
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Excel CSV Export
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Convert CSV files exported from Excel spreadsheets. Perfect for contact 
                lists created in Excel that need to be imported into contact management systems.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs">
                <strong>Tip:</strong> Save Excel files as CSV before converting to VCF
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Outlook CSV Export
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Convert contacts exported from Microsoft Outlook in CSV format. 
                Useful for migrating from Outlook to other email clients or phone contacts.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs">
                <strong>Migration:</strong> Outlook → CSV → VCF → New platform
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Custom CSV Format
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Works with any CSV file containing contact data. Our intelligent column 
                mapping system can handle various CSV structures and field arrangements.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs">
                <strong>Flexible:</strong> Any column order, custom headers supported
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Convert CSV to VCF
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Prepare Your CSV File</h3>
                <p className="text-gray-600 mb-3">
                  Ensure your CSV file has clear column headers and properly formatted contact data. 
                  Common fields include Name, Email, Phone, Company, and Address.
                </p>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <strong>CSV Example:</strong><br/>
                  <code className="text-xs">First Name,Last Name,Email,Phone<br/>John,Doe,john@email.com,555-1234</code>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Upload and Map Columns</h3>
                <p className="text-gray-600">
                  Upload your CSV file to our converter. The system will automatically detect 
                  columns and allow you to map them to VCF contact fields like Name, Phone, Email, etc.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Download VCF File</h3>
                <p className="text-gray-600">
                  Once mapped, generate and download your VCF file. This file can be imported 
                  into any contact management system that supports vCard format.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            CSV to VCF Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-3">📱 Phone Migration</h3>
              <p className="text-gray-600 text-sm">
                Export contacts from Google Contacts as CSV, convert to VCF, 
                then import to iPhone or other smartphones.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-3">📧 Email Client Switch</h3>
              <p className="text-gray-600 text-sm">
                Moving from Outlook to Apple Mail? Export Outlook contacts as CSV, 
                convert to VCF, then import to your new email client.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-3">📊 CRM Migration</h3>
              <p className="text-gray-600 text-sm">
                Transfer contact lists between CRM systems by exporting as CSV 
                and converting to VCF for universal compatibility.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-3">💾 Backup & Archive</h3>
              <p className="text-gray-600 text-sm">
                Create universal VCF backups of your CSV contact exports 
                for long-term archival and future compatibility.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            CSV vs VCF: When to Convert
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 border-b font-medium">Format</th>
                  <th className="text-left p-4 border-b font-medium">Best For</th>
                  <th className="text-left p-4 border-b font-medium">Compatibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">CSV</td>
                  <td className="p-4 text-sm">Spreadsheet editing, database imports, bulk processing</td>
                  <td className="p-4 text-sm">Excel, Google Sheets, databases</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">VCF</td>
                  <td className="p-4 text-sm">Contact imports, phone sync, email clients</td>
                  <td className="p-4 text-sm">iPhone, Android, Outlook, Gmail, Apple Mail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Convert Your CSV File Now</h3>
          <p className="mb-4">Transform your CSV contacts to VCF format in seconds</p>
          <Link 
            to="/" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Start CSV to VCF Conversion
          </Link>
        </div>
      </div>
    </>
  );
};

export default CsvToVcf;