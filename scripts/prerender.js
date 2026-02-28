#!/usr/bin/env node

// Simple prerender script for critical SEO pages
// This creates static HTML files with basic SEO content for crawlers

import fs from 'fs/promises';
import path from 'path';

const pages = [
  {
    path: '/',
    title: 'Excel to VCF Converter - Convert Excel Contacts Online Free',
    description: 'Free Excel to VCF converter. Convert Excel spreadsheets and CSV files to vCard contact files instantly. Works with iPhone, Android, Gmail, Outlook.',
    content: '<h1>Excel to VCF Converter</h1><p>Convert Excel spreadsheets to VCF contact files instantly.</p>'
  },
  {
    path: '/about',
    title: 'About Excel to VCF Converter - Free Contact File Conversion Tool',
    description: 'Learn about Excel to VCF Converter, a free online tool for converting Excel spreadsheets to VCF contact files.',
    content: '<h1>About Excel to VCF Converter</h1><p>Free online tool for converting Excel contacts to VCF format.</p>'
  },
  {
    path: '/how-to-use', 
    title: 'How to Convert Excel to VCF - Step by Step Guide',
    description: 'Complete guide on converting Excel spreadsheets to VCF contact files. Learn column mapping and device import.',
    content: '<h1>How to Use Excel to VCF Converter</h1><p>Step-by-step guide for converting your contacts.</p>'
  },
  {
    path: '/excel-to-gmail-contacts',
    title: 'Excel to Gmail Contacts Converter - Import Excel Contacts to Gmail',
    description: 'Convert Excel contacts to Gmail. Step-by-step guide to import Excel spreadsheet contacts into Gmail using VCF files.',
    content: '<h1>Excel to Gmail Contacts Converter</h1><p>Convert and import Excel contacts to Gmail easily.</p>'
  },
  {
    path: '/excel-to-iphone-contacts',
    title: 'Excel to iPhone Contacts - Import Excel Contacts to iOS', 
    description: 'Convert Excel contacts to iPhone. Complete guide to import Excel spreadsheet contacts into iPhone/iPad using VCF files.',
    content: '<h1>Excel to iPhone Contacts Converter</h1><p>Import Excel contacts to iPhone and iPad devices.</p>'
  },
  {
    path: '/csv-to-vcf-converter',
    title: 'CSV to VCF Converter - Convert CSV Contacts to vCard Format',
    description: 'Free CSV to VCF converter. Convert CSV contact files to vCard format instantly. Compatible with Excel CSV exports.',
    content: '<h1>CSV to VCF Converter</h1><p>Transform CSV contact files into VCF format.</p>'
  }
];

async function generatePrerenderedPages() {
  const baseHtml = await fs.readFile('index.html', 'utf-8');
  
  for (const page of pages) {
    // Skip the homepage - leave it as the React app
    if (page.path === '/') {
      continue;
    }
    
    // Create SEO-optimized HTML for other pages
    const seoHtml = baseHtml
      .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/g, `$1${page.description}$2`)
      .replace(/(<div id="root"><\/div>)/, `<div id="root">${page.content}<noscript>JavaScript is required for full functionality.</noscript></div>`);
    
    // Generate static pages for SEO landing pages only
    const outputPath = `dist${page.path}.html`;
    const outputDir = path.dirname(outputPath);
    
    // Ensure directory exists
    await fs.mkdir(outputDir, { recursive: true });
    
    // Write the prerendered HTML
    await fs.writeFile(outputPath, seoHtml);
    console.log(`Generated: ${outputPath}`);
  }
  
  console.log('✅ Main React app (/) left unchanged for full functionality');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePrerenderedPages().catch(console.error);
}