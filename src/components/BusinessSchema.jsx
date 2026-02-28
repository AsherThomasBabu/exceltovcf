import React from 'react';
import { Helmet } from 'react-helmet';

const BusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Excel to VCF Converter",
    "url": "https://excel2vcf.xyz",
    "logo": "https://excel2vcf.xyz/logo-head.png",
    "description": "Free online tool to convert Excel spreadsheets and CSV files to VCF contact files. Compatible with iPhone, Android, Gmail, and Outlook.",
    "foundingDate": "2023",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://github.com/AsherThomasBabu/exceltovcf"
    },
    "sameAs": [
      "https://github.com/AsherThomasBabu/exceltovcf"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "SoftwareApplication",
        "name": "Excel to VCF Converter",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Contact Conversion Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Excel to VCF Conversion",
            "description": "Convert Excel spreadsheets to VCF contact files"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "CSV to VCF Conversion",
            "description": "Convert CSV files to VCF contact format"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BusinessSchema;