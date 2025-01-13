import React from 'react';

const HowToUse = () => {
  return (
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
    </div>
  );
};

export default HowToUse; 