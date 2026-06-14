#!/usr/bin/env node

// Simple prerender script for critical SEO pages
// This creates static HTML files with basic SEO content for crawlers

import fs from 'fs/promises';
import path from 'path';

// Cross-domain links to surface in the static HTML for non-JS crawlers
// (LLM bots, social previewers, backlink trackers). The React-rendered
// site has the same links inside the footer + About page; this stub
// ensures they're visible without JS execution. React replaces the
// #root content on hydration so there's no duplicate render for users.
const FOOTER_LINKS_HTML = `
  <footer aria-label="Site footer">
    <nav aria-label="Other tools">
      <h2>Other tools</h2>
      <ul>
        <li><a href="https://nameyoursaas.com/" rel="noopener noreferrer">NameYourSaaS — name generator</a></li>
        <li><a href="https://consentico.com/" rel="noopener noreferrer">Consentico — Shopify cookie banner</a></li>
      </ul>
    </nav>
    <nav aria-label="Quick links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/how-to-use">How to Use</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </nav>
  </footer>`;

const ABOUT_EXTRA_HTML = `
  <section aria-label="Other free tools">
    <h2>Other free tools</h2>
    <p>Excel2VCF is part of a small set of independently-built free tools. If you found this one useful, the others might come in handy too:</p>
    <ul>
      <li><a href="https://nameyoursaas.com/" rel="noopener noreferrer">NameYourSaaS</a> — an AI-powered SaaS name generator with built-in domain availability checks. Useful when you're naming a new product or sub-brand.</li>
      <li><a href="https://consentico.com/" rel="noopener noreferrer">Consentico</a> — a free GDPR / CCPA cookie consent banner for Shopify stores. Five-minute install, no theme edits.</li>
    </ul>
  </section>`;

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

  // Per-route prerendered HTML files. Vercel's current rewrite config
  // sends `/(.*)` to `/index.html`, which means these files aren't
  // served directly today — but they're still useful as a fallback
  // and as a future migration path if filesystem-first routing is
  // re-enabled. They also help when the dist is uploaded to non-Vercel
  // hosts (Netlify, Cloudflare Pages, S3) where filesystem-first is
  // the default.
  for (const page of pages) {
    if (page.path === '/') {
      continue;
    }

    const seoBodyHtml = `${page.content}${page.path === '/about' ? ABOUT_EXTRA_HTML : ''}${FOOTER_LINKS_HTML}<noscript>JavaScript is required for full functionality.</noscript>`;

    const seoHtml = baseHtml
      .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/g, `$1${page.description}$2`)
      .replace(/(<div id="root"><\/div>)/, `<div id="root">${seoBodyHtml}</div>`);

    const outputPath = `dist${page.path}.html`;
    const outputDir = path.dirname(outputPath);
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(outputPath, seoHtml);
    console.log(`Generated: ${outputPath}`);
  }

  // ALSO inject the footer cross-links into dist/index.html itself.
  // This is the file Vercel actually serves for every route (per the
  // catch-all rewrite in vercel.json), so this is what backlink
  // trackers, AI search crawlers, and social previewers see when they
  // hit any URL. React's createRoot(...).render() replaces the #root
  // contents on mount, so users see the normal SPA — only non-JS
  // clients see the static cross-links.
  const distIndexPath = 'dist/index.html';
  try {
    const distIndex = await fs.readFile(distIndexPath, 'utf-8');
    if (distIndex.includes('aria-label="Other tools"')) {
      console.log(`ℹ️  ${distIndexPath} already contains cross-links, skipping`);
    } else {
      const patched = distIndex.replace(
        /(<div id="root"><\/div>)/,
        `<div id="root">${FOOTER_LINKS_HTML}<noscript>JavaScript is required for full functionality.</noscript></div>`
      );
      if (patched === distIndex) {
        console.warn(`⚠️  Could not find <div id="root"></div> in ${distIndexPath} — cross-links not injected`);
      } else {
        await fs.writeFile(distIndexPath, patched);
        console.log(`Injected cross-links into: ${distIndexPath}`);
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`ℹ️  ${distIndexPath} not found (expected when running before vite build)`);
    } else {
      throw err;
    }
  }

  console.log('✅ Prerender pass complete');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePrerenderedPages().catch(console.error);
}