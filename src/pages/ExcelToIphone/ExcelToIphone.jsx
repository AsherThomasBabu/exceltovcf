import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ExcelToIphone = () => {
  return (
    <>
      <Helmet>
        <title>Excel to iPhone Contacts - Import Excel Contacts to iOS</title>
        <meta name="description" content="Convert Excel contacts to iPhone. Complete guide to import Excel spreadsheet contacts into iPhone/iPad using VCF files. Works with iOS Contacts app." />
        <meta name="keywords" content="Excel to iPhone contacts, import Excel contacts iPhone, Excel spreadsheet to iOS, convert contacts iPhone, iPhone contact import" />
        <link rel="canonical" href="https://excel2vcf.xyz/excel-to-iphone-contacts" />
        
        <meta property="og:title" content="Excel to iPhone Contacts Converter" />
        <meta property="og:description" content="Convert and import Excel contacts to iPhone/iPad easily. Free VCF converter for iOS contact management." />
        <meta property="og:url" content="https://excel2vcf.xyz/excel-to-iphone-contacts" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Import Excel Contacts to iPhone",
            "description": "Complete guide to convert Excel contacts and import them to iPhone/iPad using VCF files",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Convert Excel to VCF",
                "text": "Use our Excel to VCF converter to create a vCard file from your Excel spreadsheet"
              },
              {
                "@type": "HowToStep",
                "name": "Transfer VCF to iPhone",
                "text": "Email the VCF file to yourself, save to iCloud Drive, or use AirDrop to transfer to iPhone"
              },
              {
                "@type": "HowToStep",
                "name": "Import to iPhone Contacts",
                "text": "Open the VCF file on iPhone and tap 'Add All Contacts' to import to your Contacts app"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Excel to iPhone Contacts Converter
        </h1>
        
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">📱 Import to iPhone & iPad</h2>
          <p className="mb-4">
            Convert Excel spreadsheets to VCF format and import directly into your iPhone or iPad Contacts app. 
            Compatible with all iOS versions.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Start Converting Now →
          </Link>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3 Ways to Import Excel Contacts to iPhone
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">📧 Email Method</h3>
              <ol className="text-sm text-gray-600 space-y-2">
                <li>1. Convert Excel to VCF</li>
                <li>2. Email VCF file to yourself</li>
                <li>3. Open email on iPhone</li>
                <li>4. Tap VCF attachment</li>
                <li>5. Tap "Add All Contacts"</li>
              </ol>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">☁️ iCloud Drive Method</h3>
              <ol className="text-sm text-gray-600 space-y-2">
                <li>1. Convert Excel to VCF</li>
                <li>2. Save VCF to iCloud Drive</li>
                <li>3. Open Files app on iPhone</li>
                <li>4. Locate and tap VCF file</li>
                <li>5. Import all contacts</li>
              </ol>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">📡 AirDrop Method</h3>
              <ol className="text-sm text-gray-600 space-y-2">
                <li>1. Convert Excel to VCF on Mac</li>
                <li>2. Right-click VCF file</li>
                <li>3. Select "Share" → "AirDrop"</li>
                <li>4. Send to your iPhone</li>
                <li>5. Accept and import contacts</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Detailed iPhone Import Steps
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Prepare Your Excel File</h3>
                  <p className="text-gray-600 mb-3">
                    Organize your Excel spreadsheet with clear columns for First Name, Last Name, 
                    Phone numbers, and Email addresses. Our converter supports multiple phone 
                    and email fields per contact.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <strong>Pro Tip:</strong> Include column headers in row 1 for easier mapping
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Convert to VCF Format</h3>
                  <p className="text-gray-600 mb-3">
                    Upload your Excel file to our converter, map the columns to contact fields 
                    (Name, Phone, Email), and download the generated VCF file.
                  </p>
                  <Link 
                    to="/" 
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Use Excel to VCF Converter →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Transfer VCF to iPhone</h3>
                  <p className="text-gray-600 mb-3">
                    Use one of the three methods above to get the VCF file onto your iPhone. 
                    Email is usually the easiest method for most users.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Import to iPhone Contacts</h3>
                  <p className="text-gray-600 mb-3">
                    Tap the VCF file on your iPhone. A preview will appear showing all contacts. 
                    Tap "Add All Contacts" to import them into your iPhone's Contacts app.
                  </p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <strong>Success:</strong> Your contacts will now appear in the iPhone Contacts app and sync with iCloud
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            iPhone Contact Import FAQ
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-800 mb-2">Will contacts sync to all my Apple devices?</h4>
              <p className="text-gray-600 text-sm">
                Yes, if you have iCloud Contacts enabled, imported contacts will automatically 
                sync to your iPad, Mac, and other Apple devices signed into the same iCloud account.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-800 mb-2">Can I import contacts without duplicates?</h4>
              <p className="text-gray-600 text-sm">
                iPhone will detect potential duplicates during import. You can choose to merge 
                or keep them separate. You can also use the "Link Contacts" feature later to merge duplicates.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-800 mb-2">What if some contacts don't import correctly?</h4>
              <p className="text-gray-600 text-sm">
                Check your Excel file format - ensure phone numbers don't have special formatting 
                and email addresses are valid. Our converter handles most common Excel formats automatically.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">Ready to Import Your Contacts?</h3>
          <p className="mb-6 text-lg">Convert your Excel file to iPhone-compatible VCF format in minutes</p>
          <Link 
            to="/" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Convert Excel to VCF Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExcelToIphone;