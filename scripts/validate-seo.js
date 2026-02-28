#!/usr/bin/env node

// SEO Validation Script for Excel to VCF Converter
// Checks all critical SEO elements are properly configured

import fs from 'fs/promises';

const requiredPages = [
  'dist/index.html',
  'dist/about.html', 
  'dist/how-to-use.html',
  'dist/excel-to-gmail-contacts.html',
  'dist/excel-to-iphone-contacts.html',
  'dist/csv-to-vcf-converter.html'
];

const seoChecks = [
  { pattern: /<title>.*<\/title>/, name: 'Title tag' },
  { pattern: /<meta name="description" content="[^"]+">/, name: 'Meta description' },
  { pattern: /<meta property="og:title" content="[^"]+">/, name: 'Open Graph title' },
  { pattern: /<meta property="og:description" content="[^"]+">/, name: 'Open Graph description' },
  { pattern: /<meta name="keywords" content="[^"]+">/, name: 'Keywords meta tag' },
  { pattern: /<link rel="canonical" href="[^"]+">/, name: 'Canonical URL' },
  { pattern: /<script type="application\/ld\+json">/, name: 'Structured data (JSON-LD)' },
  { pattern: /<h1[^>]*>.*<\/h1>/, name: 'H1 heading' }
];

async function validateSEO() {
  console.log('🔍 Starting SEO validation...\n');
  
  let totalScore = 0;
  let maxScore = 0;
  
  for (const pageFile of requiredPages) {
    console.log(`📄 Checking: ${pageFile}`);
    
    try {
      const html = await fs.readFile(pageFile, 'utf-8');
      
      let pageScore = 0;
      let pageMax = seoChecks.length;
      
      // Check each SEO element
      for (const check of seoChecks) {
        if (check.pattern.test(html)) {
          pageScore++;
          console.log(`  ✅ ${check.name}`);
        } else {
          console.log(`  ❌ ${check.name} - MISSING`);
        }
      }
      
      // Check for valid JSON-LD
      const jsonLDMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
      if (jsonLDMatches) {
        let validJsonLD = 0;
        for (const match of jsonLDMatches) {
          const jsonContent = match.replace(/<\/?script[^>]*>/g, '').trim();
          try {
            JSON.parse(jsonContent);
            validJsonLD++;
          } catch (e) {
            console.log(`  ⚠️ Invalid JSON-LD found`);
          }
        }
        if (validJsonLD > 0) {
          console.log(`  ✅ ${validJsonLD} valid JSON-LD schema(s)`);
        }
      }
      
      const percentage = Math.round((pageScore / pageMax) * 100);
      console.log(`  📊 Score: ${pageScore}/${pageMax} (${percentage}%)\n`);
      
      totalScore += pageScore;
      maxScore += pageMax;
      
    } catch (error) {
      console.log(`  ❌ Cannot read file: ${error.message}\n`);
    }
  }
  
  // Check sitemap
  console.log('🗺️ Checking sitemap...');
  try {
    const sitemap = await fs.readFile('public/sitemap.xml', 'utf-8');
    if (sitemap.includes('<urlset') && sitemap.includes('excel2vcf.xyz')) {
      console.log('  ✅ Sitemap exists and contains proper URLs');
      totalScore += 2;
    } else {
      console.log('  ❌ Sitemap malformed');
    }
  } catch (error) {
    console.log('  ❌ Sitemap not found');
  }
  maxScore += 2;
  
  // Check robots.txt
  console.log('🤖 Checking robots.txt...');
  try {
    const robots = await fs.readFile('public/robots.txt', 'utf-8');
    if (robots.includes('Sitemap:') && robots.includes('Allow: /')) {
      console.log('  ✅ Robots.txt properly configured');
      totalScore += 2;
    } else {
      console.log('  ❌ Robots.txt missing required directives');
    }
  } catch (error) {
    console.log('  ❌ Robots.txt not found');
  }
  maxScore += 2;
  
  // Final score
  const finalPercentage = Math.round((totalScore / maxScore) * 100);
  console.log('\n' + '='.repeat(50));
  console.log(`🎯 FINAL SEO SCORE: ${totalScore}/${maxScore} (${finalPercentage}%)`);
  
  if (finalPercentage >= 95) {
    console.log('🎉 EXCELLENT! Your SEO is enterprise-ready!');
  } else if (finalPercentage >= 85) {
    console.log('✅ GOOD! Minor improvements recommended.');
  } else if (finalPercentage >= 70) {
    console.log('⚠️ NEEDS WORK. Several SEO issues found.');
  } else {
    console.log('❌ CRITICAL ISSUES. Major SEO problems detected.');
  }
  
  console.log('='.repeat(50));
}

// Run validation
if (import.meta.url === `file://${process.argv[1]}`) {
  validateSEO().catch(console.error);
}