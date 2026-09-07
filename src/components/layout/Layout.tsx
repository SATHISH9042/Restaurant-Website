import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloatingBtn } from '../common/WhatsAppFloatingBtn';
import { BackToTopBtn } from '../common/BackToTopBtn';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EB] text-[#141615]">
      <ScrollToTop />
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow pt-[72px] md:pt-[80px]">
        <Outlet />
      </main>

      {/* Floating Utilities */}
      <WhatsAppFloatingBtn />
      <BackToTopBtn />

      <Footer />
    </div>
  );
};
