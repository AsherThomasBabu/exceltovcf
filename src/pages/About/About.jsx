import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About Excel to VCF Converter
      </h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What is Excel to VCF Converter?
        </h2>
        <p className="text-gray-600 mb-4">
          Excel to VCF Converter is a free online tool that helps you convert your Excel spreadsheets (.xlsx, .xls) and CSV files into VCF (vCard) format. This makes it easy to import contacts from Excel directly into your phone, email client, or any other contact management system.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Convert Excel/CSV files to VCF format instantly</li>
          <li>Support for multiple contact fields (Name, Phone, Email, etc.)</li>
          <li>Bulk contact conversion</li>
          <li>Header row detection</li>
          <li>Custom field mapping</li>
          <li>No registration required</li>
          <li>100% free to use</li>
          <li>Privacy-focused - no data storage</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple drag-and-drop interface with instant conversion. No technical knowledge required.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Privacy First</h3>
            <p className="text-gray-600">
              Your data never leaves your browser. We don't store any of your contact information.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Free Forever</h3>
            <p className="text-gray-600">
              No hidden costs, no premium features. All functionality is completely free.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Bulk Processing</h3>
            <p className="text-gray-600">
              Convert hundreds of contacts at once, saving you hours of manual work.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          Have questions or suggestions? Feel free to reach out on{" "}
          <a
            href="https://github.com/AsherThomasBabu/exceltovcf"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
