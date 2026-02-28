import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BuyMeCoffeeButton from '../components/BuyMeCoffeeButton';
import ProductHuntBadge from '../components/ProductHuntBadge';
import BusinessSchema from '../components/BusinessSchema';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const MainLayout = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`min-h-screen flex flex-col ${isHomePage ? 'h-screen' : ''}`}>
      <BusinessSchema />
      <NavBar />
      <main className={`flex-grow ${isHomePage ? '' : 'container mx-auto px-4 pb-20'}`}>
        <Outlet />
      </main>
      <Footer />
      {!isDevelopment && (
        <>
          <SpeedInsights />
          <Analytics />
        </>
      )}
      <BuyMeCoffeeButton />
      <ProductHuntBadge />
    </div>
  );
};

export default MainLayout; 