import React from 'react';

const ProductHuntBadge = () => {
  return (
    <div className="fixed bottom-16 right-2 z-50 md:bottom-20 md:right-4">
      <a 
        href="https://www.producthunt.com/posts/excel-to-vcf-converter?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-excel&#0045;to&#0045;vcf&#0045;converter" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=782461&theme=light&t=1736886432845" 
          alt="Excel to VCF Converter - Convert your excel files to contacts in one click | Product Hunt" 
          className="h-10 md:h-[54px] w-auto max-w-[180px] md:max-w-[250px]"
          width="250" 
          height="54" 
        />
      </a>
    </div>
  );
};

export default ProductHuntBadge; 