import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Excel to VCF Converter</title>
        <meta name="description" content="Privacy policy for Excel to VCF Converter. Learn how we protect your data with client-side processing and no data storage." />
        <meta name="keywords" content="privacy policy, data protection, Excel to VCF privacy, contact converter privacy" />
        <link rel="canonical" href="https://excel2vcf.xyz/privacy" />
        <meta name="robots" content="noindex, follow" />
        
        <meta property="og:title" content="Privacy Policy - Excel to VCF Converter" />
        <meta property="og:description" content="Our privacy policy explains how Excel to VCF Converter protects your data with client-side processing." />
        <meta property="og:url" content="https://excel2vcf.xyz/privacy" />
      </Helmet>
      <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          Your privacy is important to us. It is Excel to VCF Converter's policy to respect your privacy regarding any
          information we may collect from you across our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We only collect anonymous usage data through Google Analytics to help us understand how our website is being used.
          This includes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Pages visited</li>
          <li>Time spent on the website</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">File Processing</h2>
        <p className="mb-4">
          When you use our Excel to VCF conversion service:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>All file processing is done entirely in your browser</li>
          <li>We do not store or transmit your files to any server</li>
          <li>Your contact data never leaves your device</li>
          <li>Files are immediately discarded after conversion</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="mb-4">
          We use cookies solely for analytics purposes. These cookies help us understand how you use our website,
          which allows us to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new
          privacy policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our privacy policy, please contact us through our GitHub repository.
        </p>
      </div>
      </div>
    </>
  );
};

export default Privacy; 