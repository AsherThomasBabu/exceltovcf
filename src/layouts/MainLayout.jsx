import React from 'react';
import NavBar from '../components/NavBar';
import BuyMeCoffeeButton from '../components/BuyMeCoffeeButton';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="container text-center mx-auto">
        <NavBar />
        {children}
      </div>
      <SpeedInsights />
      <Analytics />
      <BuyMeCoffeeButton />
    </>
  );
};

export default MainLayout; 