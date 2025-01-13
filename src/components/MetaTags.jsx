import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
  const location = useLocation();

  const getMetaData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Excel to VCF Converter - Convert Excel/CSV to Contacts (vCard)',
          description: 'Free online tool to convert Excel and CSV files to VCF (vCard) format. Import contacts from spreadsheets to your phone or email client easily. No registration required.',
          keywords: 'excel to vcf, csv to vcf, excel to vcard, contact converter, vcf converter, excel contacts, csv contacts',
          canonical: 'https://exceltovcf.vercel.app/',
          ogTitle: 'Excel to VCF Converter - Free Online Tool',
          ogDescription: 'Convert Excel and CSV files to VCF contacts instantly. Free, no registration required.',
          ogImage: '/og-image.png'
        };
      case '/about':
        return {
          title: 'About Excel to VCF Converter - Free Contact Conversion Tool',
          description: 'Learn about our free Excel to VCF converter tool. Convert contact lists from Excel/CSV to VCF format with ease. No registration, no data storage.',
          keywords: 'about excel to vcf, contact converter tool, vcf conversion, excel contacts tool',
          canonical: 'https://exceltovcf.vercel.app/about',
          ogTitle: 'About Excel to VCF Converter',
          ogDescription: 'Free tool to convert Excel/CSV contact lists to VCF format. No registration, no data storage.',
          ogImage: '/og-image.png'
        };
      case '/how-to-use':
        return {
          title: 'How to Use Excel to VCF Converter - Step by Step Guide',
          description: 'Step-by-step guide on converting Excel/CSV files to VCF contacts. Learn how to format your spreadsheet and import contacts to your device.',
          keywords: 'how to convert excel to vcf, vcf conversion guide, excel contacts guide, convert contacts tutorial',
          canonical: 'https://exceltovcf.vercel.app/how-to-use',
          ogTitle: 'How to Convert Excel to VCF - Step by Step Guide',
          ogDescription: 'Learn how to convert your Excel/CSV contact lists to VCF format with our easy guide.',
          ogImage: '/og-image.png'
        };
      default:
        return {
          title: 'Excel to VCF Converter',
          description: 'Convert Excel and CSV files to VCF (vCard) format easily.',
          keywords: 'excel to vcf, csv to vcf, contact converter',
          canonical: 'https://exceltovcf.vercel.app' + location.pathname,
          ogTitle: 'Excel to VCF Converter',
          ogDescription: 'Convert Excel and CSV files to VCF contacts easily.',
          ogImage: '/og-image.png'
        };
    }
  };

  useEffect(() => {
    const metaData = getMetaData();
    
    // Update title
    document.title = metaData.title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metaData.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaData.description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', metaData.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = metaData.keywords;
      document.head.appendChild(meta);
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', metaData.canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = metaData.canonical;
      document.head.appendChild(canonicalLink);
    }

    // Update Open Graph meta tags
    const ogTags = {
      'og:title': metaData.ogTitle,
      'og:description': metaData.ogDescription,
      'og:image': metaData.ogImage,
      'og:url': metaData.canonical,
      'og:type': 'website'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });

    // Add Twitter Card meta tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': metaData.ogTitle,
      'twitter:description': metaData.ogDescription,
      'twitter:image': metaData.ogImage
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });
  }, [location]);

  return null;
};

export default MetaTags; 