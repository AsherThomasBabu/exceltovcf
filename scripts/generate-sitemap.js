#!/usr/bin/env node

// Automated sitemap generator for Excel to VCF Converter
// Keeps sitemap.xml updated with current pages and proper SEO attributes

import fs from 'fs/promises';
import path from 'path';

const baseUrl = 'https://excel2vcf.xyz';
const currentDate = new Date().toISOString();

// Define all pages with their SEO importance and update frequency
const pages = [
  {
    url: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/logo-head.png`,
        title: 'Excel to VCF Converter Logo',
        caption: 'Free Excel to VCF contact converter tool'
      }
    ]
  },
  // High-value SEO landing pages
  {
    url: '/excel-to-gmail-contacts',
    priority: 0.95,
    changefreq: 'monthly', 
    lastmod: currentDate
  },
  {
    url: '/excel-to-iphone-contacts',
    priority: 0.95,
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/csv-to-vcf-converter', 
    priority: 0.95,
    changefreq: 'monthly',
    lastmod: currentDate
  },
  // Tutorial and guide pages
  {
    url: '/how-to-use',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: currentDate
  },
  // Company information
  {
    url: '/about',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: currentDate
  },
  // Legal pages
  {
    url: '/privacy',
    priority: 0.3,
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/terms',
    priority: 0.3,
    changefreq: 'yearly', 
    lastmod: currentDate
  }
];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
`;

  pages.forEach(page => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    
    // Add image sitemap data if present
    if (page.images) {
      page.images.forEach(image => {
        sitemap += `    <image:image>\n`;
        sitemap += `      <image:loc>${image.loc}</image:loc>\n`;
        sitemap += `      <image:title>${image.title}</image:title>\n`;
        sitemap += `      <image:caption>${image.caption}</image:caption>\n`;
        sitemap += `    </image:image>\n`;
      });
    }
    
    sitemap += `  </url>\n\n`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
}

async function updateSitemap() {
  try {
    const sitemapContent = generateSitemap();
    await fs.writeFile('public/sitemap.xml', sitemapContent);
    console.log('✅ Sitemap updated successfully');
    console.log(`📊 ${pages.length} pages included`);
    console.log(`🕒 Last updated: ${currentDate}`);
    
    // Also update the dist version if it exists
    try {
      await fs.writeFile('dist/sitemap.xml', sitemapContent);
      console.log('✅ Dist sitemap updated');
    } catch (err) {
      console.log('ℹ️ Dist folder not found (this is normal during development)');
    }
    
  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    process.exit(1);
  }
}

// Generate sitemap index for future expansion
async function generateSitemapIndex() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  try {
    await fs.writeFile('public/sitemap-index.xml', sitemapIndex);
    console.log('✅ Sitemap index created');
  } catch (error) {
    console.log('⚠️ Could not create sitemap index:', error.message);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Generating sitemap for Excel to VCF Converter...');
  await updateSitemap();
  await generateSitemapIndex();
  console.log('✨ Sitemap generation complete!');
}