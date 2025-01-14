import React from 'react';
import NavBar from '../components/NavBar';
import BuyMeCoffeeButton from '../components/BuyMeCoffeeButton';
import ProductHuntBadge from '../components/ProductHuntBadge';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const MainLayout = ({ children }) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <>
      <div className="container text-center mx-auto pb-40 md:pb-48">
        <NavBar />
        {children}
      </div>
      {!isDevelopment && (
        <>
          <SpeedInsights />
          <Analytics />
        </>
      )}
      <BuyMeCoffeeButton />
      <ProductHuntBadge />
    </>
  );
};

export default MainLayout; 