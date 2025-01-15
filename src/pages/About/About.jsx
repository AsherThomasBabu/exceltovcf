import React from 'react';

const About = () => {
  return (
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
      </div>
    </div>
  );
};

export default About;
